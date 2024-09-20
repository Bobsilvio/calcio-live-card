import { LitElement, html, css } from "lit-element";

class CalcioLiveTeamMatchesCard extends LitElement {
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
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 3;
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 10;
    this.showFinishedMatches = config.show_finished_matches !== undefined ? config.show_finished_matches : true;
  }

  getCardSize() {
    return 3;
  }

  findMainTeam(matches) {
    if (!matches || matches.length === 0) {
      return 'Squadra non disponibile';
    }
    const teamFrequency = {};
    const matchesToCheck = matches.slice(0, 3);

    matchesToCheck.forEach((match) => {
      const homeTeam = match.homeTeam.name;
      const awayTeam = match.awayTeam.name;

      teamFrequency[homeTeam] = (teamFrequency[homeTeam] || 0) + 1;
      teamFrequency[awayTeam] = (teamFrequency[awayTeam] || 0) + 1;
    });

    return Object.keys(teamFrequency).reduce((a, b) => teamFrequency[a] > teamFrequency[b] ? a : b, '');
  }

  findTeamCrest(matches, teamName) {
    const match = matches.find((match) => match.homeTeam.name === teamName || match.awayTeam.name === teamName);
    return match ? (match.homeTeam.name === teamName ? match.homeTeam.crest : match.awayTeam.crest) : "";
  }

  formatDateOrDay(dateString) {
    if (!dateString) {
      return 'Data non disponibile';
    }
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

    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
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
    if (!match.score || !match.score.fullTime) {
      return 'Dati non disponibili';
    }

    if (match.status === 'FINISHED') {
      return `${match.score.fullTime.home} - ${match.score.fullTime.away}`;
    }
    if (match.status === 'IN_PLAY' || match.status === 'PAUSED') {  // Gestione di IN_PLAY e PAUSED
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
    const wins = stateObj.attributes.resultSet?.wins || 0;
    const losses = stateObj.attributes.resultSet?.losses || 0;
    const draws = stateObj.attributes.resultSet?.draws || 0;
    const played = stateObj.attributes.resultSet?.played || 0;
    
    const filteredMatches = matches.filter(match => {
      return this.showFinishedMatches || match.status !== 'FINISHED';
    });

    const totalMatchesToShow = Math.min(this.maxEventsTotal, filteredMatches.length);
    const matchesToDisplay = filteredMatches.slice(0, totalMatchesToShow);

    const scrollHeight = this.maxEventsVisible * 145;

    return html`
      <ha-card>
        <div class="team-header">
          <img class="team-logo" src="${this.findTeamCrest(matches, this.findMainTeam(filteredMatches))}" alt="${this.findMainTeam(filteredMatches)}" />
          <div class="team-info">
            <div class="team-name">${this.findMainTeam(filteredMatches)}</div>
            <div class="team-stats">
              Giocate: ${played}, Vittorie: ${wins}, Sconfitte: ${losses}
            </div>
          </div>
        </div>
        <hr class="separator" />

        <div class="scroll-content" style="max-height: ${scrollHeight}px; overflow-y: auto;">
          ${matchesToDisplay.map((match, index) => html`
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
                  ${match.referees && match.referees.length > 0 ? html`<div class="referee">Arbitro: ${match.referees[0].name}</div>` : html`<div class="referee">Arbitro non disponibile</div>`}
                </div>
                <img class="team-logo" src="${match.awayTeam.crest}" alt="${match.awayTeam.name}" />
              </div>
              ${index < matchesToDisplay.length - 1 ? html`<hr class="separator-line" />` : ''}
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
      .team-header {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 65px;
        height: 65px;
      }
      .team-info {
        flex-grow: 1;
        text-align: center;
      }
      .team-name {
        font-weight: bold;
        font-size: 16px;
        margin: 4px 0;
      }
      .team-stats {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .scroll-content {
        overflow-y: auto;
      }
      .match-header {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue;
      }
      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .match-date {
        color: orange;
        font-size: 14px;
        font-weight: bold;
      }
      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }
      .team-name {
        font-weight: bold;
        font-size: 16px;
        margin: 4px 0;
        text-align: center;
      }
      .match-result {
        font-size: 0.9em;
        color: var(--secondary-text-color);
        text-align: center;
      }
      .match-result.ongoing {
        color: green;
      }
      .match-result.not-started {
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
        text-align: center;
        margin-top: 8px;
      }
    `;
  }
}

customElements.define("calcio-live-team-matches", CalcioLiveTeamMatchesCard);
