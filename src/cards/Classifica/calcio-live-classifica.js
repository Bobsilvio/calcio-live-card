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

    const standings = stateObj.attributes.standings[0].table || [];
    const competition = stateObj.attributes.competition || {};
    const season = stateObj.attributes.season || {};

    const maxVisible = Math.min(this.maxTeamsVisible, standings.length);

    return html`
      <ha-card>
        ${this.hideHeader
          ? html``
          : html`
              <div class="card-header">
                <div class="header-row">
                  <img class="competition-emblem" src="${competition.emblem}" alt="${competition.name}" />
                  <div class="competition-details">
                    <div class="competition-name">Classifica</div>
                    <div class="season-dates">Stagione: ${this.formatDate(season.startDate)} - ${this.formatDate(season.endDate)}</div>
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
          <!-- Div table-container con overflow-y e max-height calcolato solo per il tbody -->
          <div class="table-container" style="max-height: ${maxVisible * 45}px; overflow-y: auto;">
            <table>
              <tbody>
                ${standings.map((team, index) => html`
                  <tr>
                    <td>${team.position}</td>
                    <td>
                      <img class="team-crest" src="${team.team.crest}" alt="${team.team.shortName}" />
                      ${team.team.shortName}
                    </td>
                    <td class="points">${team.points}</td>
                    <td class="won">${team.won}</td>
                    <td class="draw">${team.draw}</td>
                    <td class="lost">${team.lost}</td>
                    <td>${team.goalsFor}</td>
                    <td>${team.goalsAgainst}</td>
                    <td>${team.goalDifference}</td>
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
      .competition-emblem {
        width: 60px;
        height: 60px;
        margin-right: 16px;
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
        color: #4CAF50; /* Verde per i punti */
      }
      .won {
        color: #4CAF50; /* Verde per le vittorie */
      }
      .draw {
        color: #FFC107; /* Giallo per i pareggi */
      }
      .lost {
        color: #F44336; /* Rosso per le sconfitte */
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
