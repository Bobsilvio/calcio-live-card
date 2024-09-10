import { LitElement, html, css } from "lit-element";

class CalcioLiveStandingsCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {}
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }
    this._config = config;
  }

  getCardSize() {
    return 3; // Dimensione della card in base alla quantità di contenuto
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

    return html`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${competition.emblem}" alt="${competition.name}" />
            <div class="competition-name">Classifica</div>
            <div class="season-dates">Stagione: ${this.formatDate(season.startDate)} - ${this.formatDate(season.endDate)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th style="width: 10%;">Pos</th>
                  <th style="width: 25%;">Squadra</th>
                  <th style="width: 10%;">Punti</th>
                  <th style="width: 8%;">V</th>
                  <th style="width: 8%;">P</th>
                  <th style="width: 8%;">S</th>
                  <th style="width: 8%;">GF</th>
                  <th style="width: 8%;">GS</th>
                  <th style="width: 10%;">+/-</th>
                </tr>
              </thead>
              <tbody>
                ${standings.map(team => html`
                  <tr>
                    <td>${team.position}</td>
                    <td>
                      <img class="team-crest" src="${team.team.crest}" alt="${team.team.shortName}" />
                      ${team.team.shortName}
                    </td>
                    <td>${team.points}</td>
                    <td>${team.won}</td>
                    <td>${team.draw}</td>
                    <td>${team.lost}</td>
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

  // Funzione per formattare la data in formato italiano
  formatDate(dateString) {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('it-IT', options).format(new Date(dateString));
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%; /* Utilizza il 100% della larghezza disponibile */
      }
      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centra il contenuto orizzontalmente */
        margin-bottom: 16px;
      }
      .competition-container {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centra il logo e il testo */
        text-align: center;  /* Centra il testo sotto il logo */
      }
      .competition-emblem {
        width: 80px; /* Usa le stesse dimensioni del logo */
        height: 80px;
        margin-bottom: 8px; /* Usa lo stesso margine del logo */
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em; /* Usa lo stesso stile del testo */
        margin-bottom: 4px;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .table-container {
        width: 100%;
        overflow-x: auto;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 16px;
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
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 16px 0;
      }
    `;
  }
}

customElements.define("calcio-live-classifica", CalcioLiveStandingsCard);
