import { LitElement, html, css } from "lit-element";

class CalcioLiveCompetizioniCard extends LitElement {
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
    return 3; // Puoi cambiare questa dimensione in base al contenuto della tua scheda
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

    const competitions = stateObj.attributes.competitions || [];

    return html`
      <ha-card>
        <div class="card-content">
          <h1>Competizioni</h1>
          ${competitions.map((competition, index) => html`
            <div class="competition">
              <img class="competition-emblem" src="${competition.emblem}" alt="${competition.name}" />
              <div class="info">
                <div class="competition-name">${competition.name}</div>
                <div class="competition-area">
                  <img class="country-flag" src="${competition.area.flag}" alt="${competition.area.name}" /> ${competition.area.name}
                </div>
                <div class="current-season">Stagione attuale: ${competition.currentSeason.startDate} - ${competition.currentSeason.endDate}</div>
                <div class="current-matchday">Giornata attuale: ${competition.currentSeason.currentMatchday}</div>
              </div>
            </div>
            ${index < competitions.length - 1 ? html`<div class="separator"></div>` : ''}
          `)}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      .card-content {
        padding: 16px;
      }
      .competition {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      .competition-emblem {
        width: 40px;
        height: 40px;
        margin-right: 16px;
      }
      .info {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
      }
      .competition-area {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
      }
      .country-flag {
        width: 24px;
        height: 16px;
        margin-right: 8px;
      }
      .current-season,
      .current-matchday {
        margin-top: 4px;
        font-size: 14px;
      }
      .separator {
        height: 1px;
        background-color: #ddd;
        margin: 8px 0;
      }
    `;
  }
}

customElements.define("calcio-live-competizioni", CalcioLiveCompetizioniCard);
