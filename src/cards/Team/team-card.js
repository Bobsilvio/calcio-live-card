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

  static getConfigElement() {
    return document.createElement('calcio-live-team-matches-editor');
  }

  static getStubConfig() {
    return { max_events_visible: 3, max_events_total: 10, show_finished_matches: true };
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
    const firstMatchDate = stateObj.attributes.first_match_date || '';
    const lastMatchDate = stateObj.attributes.last_match_date || '';

    const maxVisible = Math.min(this.maxEventsVisible, matches.length);
    const maxTotal = Math.min(this.maxEventsTotal, matches.length);

    const filteredMatches = matches.filter(match => {
      return this.showFinishedMatches || match.status !== 'FINISHED';
    });

    return html`
      <ha-card>
        <div class="card-header">
          <img class="team-logo" src="${filteredMatches.length ? filteredMatches[0].home_team_crest : ''}" alt="${filteredMatches.length ? filteredMatches[0].home_team : ''}" />
          <div class="season-dates">
            Stagione: ${this.formatDate(firstMatchDate)} - ${this.formatDate(lastMatchDate)}
          </div>
        </div>
        <div class="scroll-content" style="max-height: ${maxVisible * 100}px; overflow-y: auto;">
          ${filteredMatches.slice(0, maxTotal).map((match) => html`
            <div class="match">
              <img class="team-logo" src="${match.home_team_crest}" alt="${match.home_team}" />
              <div class="match-info">
                <div class="team-name">${match.home_team} vs ${match.away_team}</div>
                <div class="match-date">
                  ${this.formatDate(match.utc_date)} 
                  ${match.status === 'FINISHED' 
                    ? html`<span class="match-result">${match.score_full_time.home} - ${match.score_full_time.away}</span>`
                    : html`<span class="match-upcoming">${match.status}</span>`}
                </div>
              </div>
              <img class="team-logo" src="${match.away_team_crest}" alt="${match.away_team}" />
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
      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 80px;
        height: 80px;
      }
      .season-dates {
        font-size: 14px;
        color: var(--secondary-text-color);
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
    `;
  }
}

customElements.define("calcio-live-team-matches", CalcioLiveTeamMatchesCard);
