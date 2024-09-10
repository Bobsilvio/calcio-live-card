import { LitElement, html, css } from "lit-element";

class CalcioLiveCannonieriCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      maxEventsVisible: { type: Number },
      maxEventsTotal: { type: Number },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }
    this._config = config;
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 5; // Impostazione predefinita
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 10; // Impostazione predefinita
  }

  getCardSize() {
    return 3; // Dimensione della card in base alla quantità di contenuto
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

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    if (!stateObj) {
      return html`<ha-card>Entità sconosciuta: ${entityId}</ha-card>`;
    }

    const scorers = stateObj.attributes.scorers || [];
    const competition = stateObj.attributes.competition || {};
    const season = stateObj.attributes.season || {};

    const maxVisible = this.maxEventsVisible;
    const maxTotal = this.maxEventsTotal;

    return html`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${competition.emblem}" alt="${competition.name}" />
            <div class="competition-name">Cannonieri</div>
            <div class="season-dates">Stagione: ${this.formatDate(season.startDate)} - ${this.formatDate(season.endDate)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          <div class="scrollable-content">
            ${scorers.slice(0, maxTotal).map((scorer, index) => html`
              <div class="scorer ${index >= maxVisible ? 'hidden' : ''}">
                <img class="team-logo" src="${scorer.team.crest}" alt="${scorer.team.name}" />
                <div class="info">
                  <div class="player-name">${scorer.player.name} (${scorer.player.nationality})</div>
                  <div class="team-name">${scorer.team.name}</div>
                  <div class="goals">Goals: ${scorer.goals}</div>
                  <div class="played-matches">Partite giocate: ${scorer.playedMatches}</div>
                </div>
              </div>
            `)}
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
        text-align: center;
        margin-bottom: 16px;
      }
      .competition-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      .competition-emblem {
        width: 80px;
        height: 80px;
        margin-bottom: 8px;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 4px;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .scorer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 48px;
        height: 48px;
        margin-right: 16px;
      }
      .info {
        display: flex;
        flex-direction: column;
        text-align: left;
        flex-grow: 1;
      }
      .player-name {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 4px;
      }
      .team-name {
        color: var(--secondary-text-color);
        font-size: 14px;
        margin-bottom: 4px;
      }
      .goals {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .played-matches {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 16px 0;
      }
      .scrollable-content {
        max-height: 300px;
        overflow-y: auto;
      }
      .hidden {
        display: none;
      }
    `;
  }
}

customElements.define("calcio-live-cannonieri", CalcioLiveCannonieriCard);
