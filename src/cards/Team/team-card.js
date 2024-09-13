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
    const wins = stateObj.attributes.resultSet.wins || 0;
    const losses = stateObj.attributes.resultSet.losses || 0;
    const draws = stateObj.attributes.resultSet.draws || 0;
    const played = stateObj.attributes.resultSet.played || 0;
    
    const filteredMatches = matches.filter(match => {
      return this.showFinishedMatches || match.status !== 'FINISHED';
    });

    const totalMatchesToShow = Math.min(this.maxEventsTotal, filteredMatches.length);
    const matchesToDisplay = filteredMatches.slice(0, totalMatchesToShow);

    const scrollHeight = this.maxEventsVisible * 150;

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
        <hr />

        <div class="scroll-content" style="max-height: ${scrollHeight}px; overflow-y: auto;">
          ${matchesToDisplay.map((match) => html`
            <div>
              <div class="match">
                <img class="team-logo" src="${match.homeTeam.crest}" alt="${match.homeTeam.name}" />
                <div class="match-info">
                  <div class="match-header">
                    <!-- Competizione, data, orario e arbitro su una riga -->
                    <div class="match-competition">
                      ${match.competition.name} | 
                      ${match.referees && match.referees.length > 0
                        ? `Arbitro: ${match.referees[0].name}`
                        : `Arbitro non disponibile`}
                    </div>
                    <div class="match-date orange-date">
                      ${this.formatDateOrDay(match.utcDate)} - ${this.formatTime(match.utcDate)}
                    </div>
                  </div>
                  <div class="team-name">${match.homeTeam.name}</div>
                  ${match.status === 'FINISHED' 
                    ? html`<div class="match-result">${match.score.fullTime.home} - ${match.score.fullTime.away}</div>`
                    : html`<div class="match-upcoming">${match.status}</div>`}
                  <div class="team-name">${match.awayTeam.name}</div>
                </div>
                <img class="team-logo" src="${match.awayTeam.crest}" alt="${match.awayTeam.name}" />
              </div>
              <hr class="separator-line" />
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
      }
      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .orange-date {
        color: orange;
      }
      .team-header {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 60px;
        height: 60px;
      }
      .team-info {
        flex-grow: 1;
        text-align: center;
      }
      .team-name {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      .team-stats {
        font-size: 14px;
        color: var(--secondary-text-color);
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
      .match-header {
        text-align: center;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }
      .match-info {
        text-align: center;
      }
      .match-result {
        color: green;
        font-weight: bold;
      }
      .match-upcoming {
        color: orange;
        font-weight: bold;
      }
      .separator-line {
        border: none;
        border-top: 1px solid var(--divider-color);
        margin: 8px 0;
      }
    `;
  }
}

customElements.define("calcio-live-team-matches", CalcioLiveTeamMatchesCard);
