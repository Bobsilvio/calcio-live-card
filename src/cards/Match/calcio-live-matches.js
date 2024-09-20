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
    this.hideHeader = config.hide_header || false;
  }

  getCardSize() {
    return 3;
  }

  formatSimpleDate(dateString) {
    if (!dateString) {
      return 'None';
    }
    const [year, month, day] = dateString.split('-');
    if (!year || !month || !day) {
      return 'Data non valida';
    }
    return `${day}/${month}/${year}`;
  }

  formatDateOrDay(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Data non valida';
    }

    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 0 && diffDays <= 6) {
      const daysOfWeek = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
      return daysOfWeek[date.getDay()];
    }

    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('it-IT', options).format(date);
  }

  formatTime(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Orario non disponibile';
    }
    return date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  }

  calculateMinutesPlayed(matchStart, matchStatus) {
    const now = new Date();
    const start = new Date(matchStart);
    if (now >= start) {
      let diffMs = now - start;
      let diffMinutes = Math.floor(diffMs / 60000);

      // Se la partita è in corso o è ripresa dopo la pausa, sottrai 15 minuti
      if (matchStatus === 'IN_PLAY' || matchStatus === 'PAUSED') {
        diffMinutes = Math.max(diffMinutes - 15, 0);  // Sottrai 15 minuti di pausa
      }
      return `${diffMinutes}'`;
    }
    return null;
  }
  

  getMatchResultText(match) {
    if (match.status === 'FINISHED') {
      return `${match.score.fullTime.home} - ${match.score.fullTime.away}`;
    }
    if (match.status === 'IN_PLAY' || match.status === 'PAUSED') {  // Gestione di IN_PLAY e PAUSED
      if (match.score.halfTime.home !== null) {
        return `Primo Tempo: ${match.score.halfTime.home} - ${match.score.halfTime.away}`;
      }
      return `${match.score.fullTime.home} - ${match.score.fullTime.away}`;
    }
    return 'Non iniziata';
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
    const matchday = stateObj.attributes.matches[0].season.currentMatchday || 0;
    const resultSet = stateObj.attributes.resultSet || {};
    const first = resultSet.first || '';
    const last = resultSet.last || '';

    const maxVisible = Math.min(this.maxEventsVisible, matches.length);
    const maxTotal = Math.min(this.maxEventsTotal, matches.length);

    const itemHeight = 145;
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
                    <div class="season-dates">
                      Stagione: ${this.formatSimpleDate(first)} - ${this.formatSimpleDate(last)}
                    </div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="scroll-content" style="max-height: ${maxHeight}px; overflow-y: auto;">
          ${matches.slice(0, maxTotal).map((match, index) => html`
            <div class="match-wrapper">
              <div class="match-header">
                <div class="match-competition">
                  ${match.competition.name} | 
                  <span class="match-date">
                    ${this.formatDateOrDay(match.utcDate)} - ${this.formatTime(match.utcDate)}
                  </span>
                    ${match.status === 'IN_PLAY' ? html`<span class="match-minutes"> | ${this.calculateMinutesPlayed(match.utcDate, match.status)}</span>` : ''}
                </div>
              </div>
              <div class="match">
                <img class="team-logo" src="${match.homeTeam.crest}" alt="${match.homeTeam.name}" />
                <div class="match-info">
                  <div class="team-name">${match.homeTeam.name}</div>
                  <div class="match-result ${match.status === 'IN_PLAY' || match.status === 'FINISHED' ? 'ongoing' : 'not-started'}">
                    ${this.getMatchResultText(match)}
                  </div>
                  <div class="team-name">${match.awayTeam.name}</div>
                  ${match.referees.length > 0 ? html`<div class="referee">Arbitro: ${match.referees[0].name}</div>` : ''}
                </div>
                <img class="team-logo" src="${match.awayTeam.crest}" alt="${match.awayTeam.name}" />
              </div>
              ${index < matches.length - 1 ? html`<hr class="separator-line" />` : ''}
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
      .match-wrapper {
        margin-bottom: 16px;
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
      .match-result {
        font-size: 0.9em;
        color: var(--secondary-text-color);
      }
      .match-result.ongoing {
        color: green;
        font-weight: bold;
      }
      .match-result.not-started {
        color: orange;
        font-weight: bold;
      }
      .match-header {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue;
      }
      .match-date {
        color: orange;
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 8px 0;
      }
      .separator-line {
        border: none;
        border-top: 1px solid var(--divider-color);
        margin: 8px 0;
      }
      .match-minutes {
        font-weight: bold;
        color: green;
      }
      .referee {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
    `;
  }
}

customElements.define("calcio-live-matches", CalcioLiveMatchesCard);
