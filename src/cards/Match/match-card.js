import { LitElement, html, css } from "lit-element";

class CalcioLiveMatchesCard extends LitElement {
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

  formatDate(dateString) {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('it-IT', options).format(new Date(dateString));
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

    const matches = stateObj.attributes.matches || [];
    const competition = stateObj.attributes.competition || {};
    const matchday = stateObj.attributes.matchday || 0;
    const resultSet = stateObj.attributes.result_set || {};
    const first = resultSet.first || '';
    const last = resultSet.last || '';
    
    return html`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${competition.emblem}" alt="${competition.name}" />
            <div class="competition-name">Giornata ${matchday}</div>
            <div class="season-dates">Stagione: ${this.formatDate(first)} - ${this.formatDate(last)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          ${matches.map((match, index) => html`
            <div class="match">
              <img class="team-logo" src="${match.homeTeam.crest}" alt="${match.homeTeam.name}" />
              <div class="match-info">
                <div class="team-name">${match.homeTeam.name}</div>
                <div class="match-date">${new Date(match.utcDate).toLocaleDateString('it-IT')}</div>
                <div class="team-name">${match.awayTeam.name}</div>
              </div>
              <img class="team-logo" src="${match.awayTeam.crest}" alt="${match.awayTeam.name}" />
            </div>
            ${index < matches.length - 1 ? html`<div class="separator"></div>` : ''}
          `)}
        </div>
      </ha-card>
    `;
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
        margin-bottom: 8px; /* Riduci il margine inferiore per allineare il separatore */
      }
      .card-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .team-logo {
        width: 80px;
        height: 80px;
      }
      .match-info {
        flex: 1;
        text-align: center;
      }
      .team-name {
        font-weight: bold;
        font-size: 1em;
        margin: 4px 0;
      }
      .match-date {
        font-size: 0.9em;
        color: var(--secondary-text-color);
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 8px 0; /* Riduci il margine superiore per allineare il separatore */
      }
    `;
  }
}

customElements.define("calcio-live-matches", CalcioLiveMatchesCard);
