import { LitElement, html, css } from "lit-element";

class CalcioLiveTodayMatchesCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      maxEventsVisible: { type: Number },
      maxEventsTotal: { type: Number },
      showFinishedMatches: { type: Boolean },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }
    this._config = config;
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 5;
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 10;
    this.showFinishedMatches = config.show_finished_matches !== undefined ? config.show_finished_matches : true;
  }

  getCardSize() {
    return 3;
  }

  filterTodayMatches(matches) {
    const today = new Date().toISOString().split('T')[0];
    return matches.filter(match => match.utcDate.startsWith(today));
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

      if (matchStatus === 'IN_PLAY' || matchStatus === 'PAUSED') {
        diffMinutes = Math.max(diffMinutes - 15, 0);
      }
      return `${diffMinutes}'`;
    }
    return null;
  }

  getMatchResultText(match) {
    if (!match.score || !match.score.fullTime) {
      return 'Dati non disponibili';
    }

    if (match.status === 'FINISHED') {
      return `${match.score.fullTime.home} - ${match.score.fullTime.away}`;
    }

    if (match.status === 'IN_PLAY' || match.status === 'PAUSED') {
      if (match.score.halfTime && match.score.halfTime.home !== null) {
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
    const todayMatches = this.filterTodayMatches(matches);

    const limitedMatches = todayMatches.slice(0, this.maxEventsTotal);

    if (limitedMatches.length === 0) {
      return html`<ha-card>Nessuna partita per oggi</ha-card>`;
    }

    const scrollHeight = this.maxEventsVisible * 160;

    return html`
      <ha-card>
        <div class="scroll-content" style="max-height: ${scrollHeight}px; overflow-y: auto;">
          ${limitedMatches.map((match, index) => html`
            <div class="match-wrapper">
              <div class="match-header">
                <div class="match-competition">
                  ${match.competition.name} | <span class="match-date">${this.formatTime(match.utcDate)}</span>
                  ${match.status === 'IN_PLAY' ? html`<span class="match-minutes green-text"> | ${this.calculateMinutesPlayed(match.utcDate, match.status)}</span>` : ''}
                </div>
              </div>
              <div class="match">
                <!-- Logo squadra casa -->
                <img class="team-logo" src="${match.homeTeam.crest}" alt="${match.homeTeam.name}" />

                <!-- Info partita con squadre sopra e sotto -->
                <div class="match-info">
                  <div class="team-name">${match.homeTeam.name}</div>
                  <div class="match-result ${match.status === 'IN_PLAY' || match.status === 'FINISHED' ? 'ongoing' : 'not-started'}">
                    ${this.getMatchResultText(match)}
                  </div>
                  <div class="team-name">${match.awayTeam.name}</div>
                  ${match.referees && match.referees.length > 0 ? html`<div class="referee">Arbitro: ${match.referees[0].name}</div>` : html`<div class="referee">Arbitro non disponibile</div>`}
                </div>

                <!-- Logo squadra trasferta -->
                <img class="team-logo" src="${match.awayTeam.crest}" alt="${match.awayTeam.name}" />
              </div>
              ${index < limitedMatches.length - 1 ? html`<hr class="separator-line" />` : ''}
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
      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue;
      }
      .match-date {
        color: orange;
      }
      .team-logo {
        width: 65px;
        height: 65px;
      }
      .match-wrapper {
        margin-bottom: 16px;
      }
      .team-name {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
      }
      hr {
        border: 0;
        border-top: 1px solid var(--divider-color);
        margin: 16px 0;
      }
      .scroll-content {
        overflow-y: auto;
      }
      .match {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
      .match-info {
        text-align: center;
        flex: 1;
      }
      .match-result {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0;
      }
      .match-result.ongoing {
        color: green;
      }
      .match-result.not-started {
        color: orange;
      }
      .green-text {
        color: green;
        font-weight: bold;
      }
      .separator-line {
        border: none;
        border-top: 1px solid var(--divider-color);
        margin: 8px 0;
      }
      .referee {
        font-size: 12px;
        color: var(--secondary-text-color);
        text-align: center;
        margin-top: 8px;
      }
    `;
  }
}

customElements.define("calcio-live-today-matches", CalcioLiveTodayMatchesCard);
