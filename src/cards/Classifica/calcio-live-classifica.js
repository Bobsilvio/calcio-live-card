import { LitElement, html, css } from "lit-element";

class CalcioLiveStandingsCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      maxTeamsVisible: { type: Number },
      hideHeader: { type: Boolean },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }
    this._config = config;
    this.maxTeamsVisible = config.max_teams_visible ? config.max_teams_visible : 10;
    this.hideHeader = config.hide_header || false;
  }

  formatDate(dateString) {
    if (!dateString) {
      return 'Data non disponibile';
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Data non valida';
    }
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('it-IT', options).format(date);
  }

  getCardSize() {
    return 3;
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

    const maxVisible = Math.min(this.maxTeamsVisible, standings.length);

    return html`
      <ha-card>
        ${this.hideHeader
          ? html``
          : html`
              <div class="card-header">
                <div class="header-row">
                  <div class="competition-details">
                    <div class="competition-name">${stateObj.state}</div>
                    <div class="season-dates">Stagione: ${seasonName} (${this.formatDate(seasonStart)} - ${this.formatDate(seasonEnd)})</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="card-content">
          <table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Squadra</th>
                <th>Punti</th>
                <th>V</th>
                <th>P</th>
                <th>S</th>
                <th>GF</th>
                <th>GS</th>
                <th>+/-</th>
              </tr>
            </thead>
          </table>
          <div class="table-container" style="max-height: ${maxVisible * 45}px; overflow-y: auto;">
            <table>
              <tbody>
                ${standings.map((team, index) => html`
                  <tr>
                    <td>${team.rank ?? '-'}</td>
                    <td>
                      <img class="team-crest" src="${team.team_logo}" alt="${team.team_name}" />
                      ${team.team_name}
                    </td>
                    <td class="points">${team.points}</td>
                    <td class="won">${team.wins}</td>
                    <td class="draw">${team.draws}</td>
                    <td class="lost">${team.losses}</td>
                    <td>${team.goals_for}</td>
                    <td>${team.goals_against}</td>
                    <td>${team.goal_difference}</td>
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
        font-size: 1.5em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .table-container {
        width: 100%;
        overflow-y: auto;
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
      }
      td {
        vertical-align: middle;
        text-align: left;
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
    `;
  }
}

customElements.define("calcio-live-classifica", CalcioLiveStandingsCard);