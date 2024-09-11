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
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 3; // Impostazione predefinita
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 10; // Impostazione predefinita
    this.hideHeader = config.hide_header || false; // Aggiunta opzione per nascondere l'intestazione
  }

  getCardSize() {
    return 3;
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

    const scorers = stateObj.attributes.scorers || [];
    const competition = stateObj.attributes.competition || {};
    const season = stateObj.attributes.season || {};

    const maxVisible = Math.min(this.maxEventsVisible, scorers.length);
    const maxTotal = Math.min(this.maxEventsTotal, scorers.length);

    // Calcola l'altezza massima esatta per evitare overflow
    const itemHeight = 100; // Altezza stimata per ogni cannoniere
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
          ${scorers.slice(0, maxTotal).map((scorer) => html`
            <div class="scorer">
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
        font-size: 1.2em;
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
        margin: 2px 0;
      }
    `;
  }
}

customElements.define("calcio-live-cannonieri", CalcioLiveCannonieriCard);
