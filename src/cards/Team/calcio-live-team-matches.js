import { LitElement, html, css } from "lit-element";

class CalcioLiveTeamMatchesCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Devi definire un'entità");
    }

    this._config = {
      max_events_visible: config.max_events_visible || 5,
      max_events_total: config.max_events_total || 10,
      hide_header: config.hide_header !== undefined ? config.hide_header : false,
      ...config,
    };
  }

  getCardSize() {
    return 3;
  }

  formatDateTime(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Data non disponibile';
    }
    const formattedDate = date.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
  }

  renderMatch(match) {
    const homeTeamLogo = match.home_team_logo || 'N/A';
    const awayTeamLogo = match.away_team_logo || 'N/A';
    const eventDate = match.event_date || 'N/A';
    const venue = match.venue || 'N/A';

    const homeScore = match.home_team_score !== null && match.home_team_score !== undefined ? match.home_team_score : null;
    const awayScore = match.away_team_score !== null && match.away_team_score !== undefined ? match.away_team_score : null;

    let matchResult = '';

    if (homeScore !== null && awayScore !== null) {
      matchResult = `${homeScore} - ${awayScore}`;
    } else {
      matchResult = 'Non iniziata';
    }

    return html`
      <div class="match-wrapper">
        <div class="match-header">
          <div class="match-competition">
            ${venue} | <span class="match-date">${this.formatDateTime(eventDate)}</span>
          </div>
        </div>
        <div class="match">
          <img class="team-logo" src="${homeTeamLogo}" alt="Logo squadra di casa" />
          <div class="match-info">
            <div class="team-name">${match.home_team}</div>
            <div class="match-result green-text">
              ${matchResult}
            </div>
            <div class="team-name">${match.away_team}</div>
          </div>
          <img class="team-logo" src="${awayTeamLogo}" alt="Logo squadra ospite" />
        </div>
        <hr class="separator-line" /> <!-- Riga tra le partite -->
      </div>
    `;
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

    const matches = stateObj.attributes.matches || [stateObj.attributes];
    const totalMatches = Math.min(matches.length, this._config.max_events_total);  
    const visibleMatches = Math.min(this._config.max_events_visible, totalMatches);

    const scrollHeight = visibleMatches * 130;

    return html`
      <ha-card>
        ${!this._config.hide_header
          ? html`
            <div class="header">
              <span>Partite Squadra Concluse</span>
            </div>`
          : ''}
        <div class="scroll-content" style="max-height: ${scrollHeight}px; overflow-y: auto;">
          ${matches.slice(0, totalMatches).map((match) => this.renderMatch(match))}
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
      .header {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 10px;
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
      hr.separator-line {
        border: none;
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
      .green-text {
        color: green;
      }
    `;
  }
}

customElements.define("calcio-live-team-matches", CalcioLiveTeamMatchesCard);
