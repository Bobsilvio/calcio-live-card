import { LitElement, html, css } from "lit-element";

class CalcioLiveMatchesCard extends LitElement {
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
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 3;
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 10;
    this.hideHeader = config.hide_header || false; // Aggiunta opzione per nascondere header
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

    const matches = stateObj.attributes.matches || [];
    const competition = stateObj.attributes.competition || {};
    const matchday = stateObj.attributes.matchday || 0;
    const resultSet = stateObj.attributes.result_set || {};
    const first = resultSet.first || '';
    const last = resultSet.last || '';

    const maxVisible = Math.min(this.maxEventsVisible, matches.length);
    const maxTotal = Math.min(this.maxEventsTotal, matches.length);

    const itemHeight = 90; // Altezza stimata per ogni riga della partita
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
                    <div class="competition-name">Giornata ${matchday}</div>
                    <div class="season-dates">Stagione: ${this.formatDate(first)} - ${this.formatDate(last)}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <!-- Imposta max-height esatto per evitare che parte della sesta partita venga mostrata -->
        <div class="scroll-content" style="max-height: ${maxHeight}px; overflow-y: auto;">
          ${matches.slice(0, maxTotal).map((match, index) => html`
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
      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }
      .team-logo {
        width: 65px;
        height: 65px;
      }
      .match-info {
        flex: 1;
        text-align: center;
      }
      .team-name {
        font-weight: bold;
        font-size: 16px;
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
        margin: 8px 0;
      }
    `;
  }
}

customElements.define("calcio-live-matches", CalcioLiveMatchesCard);
