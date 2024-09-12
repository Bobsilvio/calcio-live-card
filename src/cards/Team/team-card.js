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

  formatDate(dateString) {
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
    return new Intl.DateTimeFormat('it-IT', options).format(new Date(dateString));
  }

  findMainTeam(matches) {
    const teamFrequency = {};
    const matchesToCheck = matches.slice(0, 3);

    matchesToCheck.forEach((match) => {
      const homeTeam = match.home_team;
      const awayTeam = match.away_team;

      teamFrequency[homeTeam] = (teamFrequency[homeTeam] || 0) + 1;
      teamFrequency[awayTeam] = (teamFrequency[awayTeam] || 0) + 1;
    });

    let mainTeam = Object.keys(teamFrequency).reduce((a, b) => teamFrequency[a] > teamFrequency[b] ? a : b);

    return mainTeam;
  }

  findTeamCrest(matches, teamName) {
    const match = matches.find((match) => match.home_team === teamName || match.away_team === teamName);
    return match ? (match.home_team === teamName ? match.home_team_crest : match.away_team_crest) : "";
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
    const firstMatchDate = stateObj.attributes.first_match_date || '';
    const lastMatchDate = stateObj.attributes.last_match_date || '';
    const wins = stateObj.attributes.wins || 0; // dato non funzionante
    const losses = stateObj.attributes.losses || 0; // dato non funzionante
    const draws = stateObj.attributes.draws || 0; // dato non funzionante
    const played = stateObj.attributes.played || 0;
    
    const filteredMatches = matches.filter(match => {
      return this.showFinishedMatches || match.status !== 'FINISHED';
    });

    const totalMatchesToShow = Math.min(this.maxEventsTotal, filteredMatches.length);
    const matchesToDisplay = filteredMatches.slice(0, totalMatchesToShow);

    const scrollHeight = this.maxEventsVisible * 95;

    return html`
      <ha-card>
        <!-- Logo e nome della squadra che appare più spesso -->
        <div class="team-header">
          <img class="team-logo" src="${this.findTeamCrest(matches, this.findMainTeam(filteredMatches))}" alt="${this.findMainTeam(filteredMatches)}" />
          <div class="team-info">
            <div class="team-name">${this.findMainTeam(filteredMatches)}</div>
            <div class="team-stats">
              Giocate: ${played}
            </div>
            <div class="season-dates">
              Stagione: ${this.formatDate(firstMatchDate)} - ${this.formatDate(lastMatchDate)}
            </div>
          </div>
        </div>
        <hr /> <!-- Linea separatrice sotto le informazioni della stagione -->

        <!-- Lista delle partite con scroll -->
        <div class="scroll-content" style="max-height: ${scrollHeight}px; overflow-y: auto;">
          ${matchesToDisplay.map((match) => html`
            <div>
              <div class="match">
                <img class="team-logo" src="${match.home_team_crest}" alt="${match.home_team}" />
                <div class="match-info">
                  <div class="team-name">${match.home_team}</div>
                  <div class="match-date">
                    ${this.formatDate(match.utc_date)} 
                    ${match.status === 'FINISHED' 
                      ? html`<span class="match-result">${match.score_full_time.home} - ${match.score_full_time.away}</span>`
                      : html`<span class="match-upcoming">${match.status}</span>`}
                  </div>
                  <div class="match-type">${match.competition_name}</div> <!-- Tipo di partita -->
                  <div class="team-name">${match.away_team}</div>
                </div>
                <img class="team-logo" src="${match.away_team_crest}" alt="${match.away_team}" />
              </div>
              <hr class="separator-line" /> <!-- Linea tra le partite -->
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
      .team-header {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
      .team-info {
        display: flex;
        flex-direction: column;
      }
      .team-name {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }
      .team-stats {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }
      .season-dates {
        font-size: 12px;
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
        margin-bottom: 8px;
      }
      .match-info {
        flex: 1;
        text-align: center;
      }
      .team-name {
        font-weight: bold;
        font-size: 14px;
      }
      .match-date {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .match-result {
        color: green;
        font-weight: bold;
      }
      .match-upcoming {
        color: orange;
        font-weight: bold;
      }
      .match-type {
        font-size: 12px;
        font-style: italic;
        color: var(--secondary-text-color);
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
