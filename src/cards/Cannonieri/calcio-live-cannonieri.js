import { LitElement, html, css } from "lit-element";

class CalcioLiveCannonieriCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      maxEventsVisible: { type: Number },
      maxEventsTotal: { type: Number },
      hideHeader: { type: Boolean },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }
    this._config = config;
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 5
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 10;
    this.hideHeader = config.hide_header || false;
  }

  getCardSize() {
    return 3;
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

    const maxVisible = Math.min(this.maxEventsVisible, scorers.length);
    const maxTotal = Math.min(this.maxEventsTotal, scorers.length);

    const itemHeight = 120;
    const maxHeight = maxVisible * itemHeight;

    return html`
      <ha-card>
        ${this.hideHeader
          ? html``
          : html`
              <div class="card-header">
                <div class="header-row">
                  <img class="competition-emblem" src="${competition.emblem}" alt="${competition.name}" />
                  <div class="competition-details">
                    <div class="competition-name">Cannonieri</div>
                    <div class="season-dates">Stagione: ${this.formatDate(season.startDate)} - ${this.formatDate(season.endDate)}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <!-- Sezione scrollabile -->
        <div class="scroll-content" style="max-height: ${maxHeight}px; overflow-y: auto;">
          ${scorers.slice(0, maxTotal).map((scorer, index) => html`
            <div class="scorer ${index % 2 === 0 ? 'even' : 'odd'}">
              <img class="team-logo" src="${scorer.team.crest}" alt="${scorer.team.name}" />
              <div class="info">
                <div class="player-name">${scorer.player.name} <span class="nationality">(${scorer.player.nationality})</span></div>
                <div class="team-name">${scorer.team.name}</div>
                <div class="goals">Goals: <span class="goals-number">${scorer.goals}</span></div>
                <div class="played-matches">Partite giocate: <span class="matches-number">${scorer.playedMatches}</span></div>
              </div>
            </div>
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
      .scroll-content {
        overflow-y: auto;
      }
      .scorer {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        padding: 8px;
        border-radius: 10px;
        transition: background-color 0.3s ease;
      }

      .team-logo {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
      .info {
        display: flex;
        flex-direction: column;
        text-align: left;
      }
      .player-name {
        font-weight: bold;
        font-size: 1.3em;
        color: #FFC107;
        margin-bottom: 4px;
      }
      .nationality {
        font-size: 0.9em;
        color: #757575;
      }
      .team-name {
        color: #2196F3;
        font-size: 14px;
        margin-bottom: 4px;
      }
      .goals {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .goals-number {
        font-weight: bold;
        color: #4CAF50;
      }
      .played-matches {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .matches-number {
        font-weight: bold;
        color: #FF9800;
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

customElements.define("calcio-live-cannonieri", CalcioLiveCannonieriCard);
