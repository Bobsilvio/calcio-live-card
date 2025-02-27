import { LitElement, html, css } from "lit-element";

class CalcioLiveStandingsCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      maxTeamsVisible: { type: Number },
      hideHeader: { type: Boolean },
      selectedGroup: { type: String },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }
    this._config = config;
    this.maxTeamsVisible = config.max_teams_visible ? config.max_teams_visible : 10;
    this.hideHeader = config.hide_header || false;
    this.selectedGroup = config.selected_group || '';
  }

  getCardSize() {
    return 3;
  }
  
  static getConfigElement() {
    return document.createElement("calcio-live-classifica-editor");
  }

  static getStubConfig() {
    return {
      entity: "sensor.calcio_live",
      max_teams_visible: 10,
      hide_header: false,
      selected_group: '',
    };
  }
  
  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    if (!stateObj) {
      return html`<ha-card>Entità sconosciuta: ${entityId}</ha-card>`;
    }

    const standings = stateObj.attributes.standings || [];
    const seasonName = stateObj.attributes.season || '';
    const seasonStart = stateObj.attributes.season_start || '';
    const seasonEnd = stateObj.attributes.season_end || '';
    
    // Filtra la classifica in base al gruppo selezionato, se esiste
    const standingsGroup = stateObj.attributes.standings_groups.find(
      (group) => group.name === this.selectedGroup
    );
    let filteredStandings = standingsGroup ? standingsGroup.standings : [];

    // Filtra le squadre che hanno un rank valido (non null o undefined)
    filteredStandings = filteredStandings.filter(team => team.rank != null && team.rank !== undefined);

    // Ordinamento classifica (MSL sopratutto)
    if (seasonName.includes("MLS")) {
      filteredStandings = filteredStandings.sort((a, b) => {
        if (b.points !== a.points) {
          return b.points - a.points;
        }
        if (b.goal_difference !== a.goal_difference) {
          return b.goal_difference - a.goal_difference;
        }
        return b.goals_for - a.goals_for;
      });

      // Riassegna il rank in ordine corretto
      filteredStandings.forEach((team, index) => {
        team.rank = index + 1;
      });
    } else {
      filteredStandings = filteredStandings.sort((a, b) => a.rank - b.rank);
    }
    
    

    const maxVisible = Math.min(this.maxTeamsVisible, filteredStandings.length);

    return html`
      <ha-card>
        ${this.hideHeader
          ? html``
          : html`
              <div class="card-header">
                <div class="header-row">
                  <div class="competition-details">
                    <div class="competition-name">${stateObj.state}</div>
                    <div class="season-dates">${seasonName}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="card-content">
          <table>
            <thead>
              <tr>
                <th class="small-column">Pos</th>
                <th class="team-column">Squadra</th>
                <th class="small-column">Punti</th>
                <th class="small-column">V</th>
                <th class="small-column">P</th>
                <th class="small-column">S</th>
                <th class="small-column">GF</th>
                <th class="small-column">GS</th>
                <th class="small-column">+/-</th>
              </tr>
            </thead>
          </table>
          <div class="table-container" style="--max-teams-visible: ${maxVisible};">
            <table>
              <tbody>
                ${filteredStandings.slice(0, filteredStandings.length).map((team, index) => html`
                  <tr>
                    <td class="small-column">${team.rank ?? '-'}</td>
                    <td class="team-column">
                      <div class="team-name">
                        <img class="team-crest" src="${team.team_logo}" alt="${team.team_name}" />
                        ${team.team_name}
                      </div>
                    </td>
                    <td class="points small-column">${team.points}</td>
                    <td class="won small-column">${team.wins}</td>
                    <td class="draw small-column">${team.draws}</td>
                    <td class="lost small-column">${team.losses}</td>
                    <td class="small-column">${team.goals_for}</td>
                    <td class="small-column">${team.goals_against}</td>
                    <td class="small-column">${team.goal_difference}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .card-header {
        margin-bottom: 2px;
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .competition-details {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.3em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 16px;
      }
      .table-container {
        width: 100%;
        overflow-y: auto;
        max-height: calc(var(--max-teams-visible, 10) * 40px);
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 2px; 
      }
      th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid var(--divider-color);
        white-space: nowrap;
      }
      th {
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
        text-align: center;
      }
      td {
        vertical-align: middle;
        text-align: center;
      }
      .team-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .team-crest {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      .points {
        font-weight: bold;
        color: #4CAF50;
      }
      .won {
        color: #4CAF50; 
      }
      .draw {
        color: #FFC107;
      }
      .lost {
        color: #F44336;
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 2px 0;
      }
      .team-column {
        width: 180px;
        text-align: left;
      }
      .small-column {
        width: 40px;
      }
    `;
  }
}

customElements.define("calcio-live-classifica", CalcioLiveStandingsCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'calcio-live-classifica',
  name: 'Calcio Live Classifica Card',
  description: 'Mostra la classifica del campionato o coppe',
});