import { LitElement, html, css } from "lit-element";

class CalcioLiveTeamMatchesCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      showPopup: { type: Boolean },
      activeMatch: { type: Object },
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
    this.showPopup = false;
    this.activeMatch = null;
  }

  getCardSize() {
    return 3;
  }

  showDetails(match) {
    this.activeMatch = match;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  renderPopup() {
    if (!this.showPopup || !this.activeMatch) {
      return html``;
    }

    return html`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${(e) => e.stopPropagation()}">
          <h3 class="popup-title">Dettagli Partita</h3>
          <div class="popup-logos">
            <img class="popup-logo" src="${this.activeMatch.home_team_logo}" alt="Logo squadra di casa" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_team_logo}" alt="Logo squadra ospite" />
          </div>
          <p><strong>Stadio:</strong> ${this.activeMatch.venue}</p>
          <p><strong>Data:</strong> ${this.activeMatch.event_date}</p>
          <p><strong>Risultato:</strong> ${this.activeMatch.home_team_score} - ${this.activeMatch.away_team_score}</p>
          <p><strong>Eventi:</strong></p>
          <ul>
            ${this.activeMatch.match_details?.map(event => html`<li>${event}</li>`) || html`<li>Nessun evento disponibile</li>`}
          </ul>
          <button @click="${this.closePopup}" class="close-button">Chiudi</button>
        </div>
      </div>
    `;
  }

  renderMatch(match) {
    const homeTeamLogo = match.home_team_logo || 'N/A';
    const awayTeamLogo = match.away_team_logo || 'N/A';
    const eventDate = match.event_date || 'N/A';
    const venue = match.venue || 'N/A';

    const homeScore = match.home_team_score !== null && match.home_team_score !== undefined ? match.home_team_score : 'N/A';
    const awayScore = match.away_team_score !== null && match.away_team_score !== undefined ? match.away_team_score : 'N/A';

    let matchResult = `${homeScore} - ${awayScore}`;
    let matchStatus = match.status || 'Conclusa';

    return html`
      <div class="match-wrapper">
        <div class="match-header">
          <div class="match-competition">
            ${venue} | <span class="match-date">${eventDate}</span>
            <span class="info-icon" @click="${() => this.showDetails(match)}">Info</span>
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

    const matches = stateObj.attributes.matches || [];
    const totalMatches = Math.min(matches.length, this._config.max_events_total);  
    const visibleMatches = Math.min(this._config.max_events_visible, totalMatches);

    const scrollHeight = visibleMatches * 150;

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

        ${this.renderPopup()} <!-- Popup per i dettagli -->
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
      .info-icon {
        font-size: 12px;
        color: var(--primary-color);
        cursor: pointer;
        margin-left: 8px;
      }
      .team-logo {
        width: 90px;
        height: 90px;
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

      .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      
      .popup-content {
        background: black;
        padding: 16px;
        border-radius: 8px;
        width: 80%;
        max-width: 400px;
      }
      
      .popup-title {
        color: var(--primary-color);
        margin-top: 0;
      }
      
      .popup-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
      }
      
      .popup-logo {
        width: 60px;
        height: 60px;
        margin: 0 10px;
      }
      
      .popup-vs {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-color);
        margin: 0 10px;
      }

      .close-button {
        background: var(--primary-color);
        color: white;
        padding: 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 16px;
      }

      .close-button:hover {
        background: red;
      }
    `;
  }
}

customElements.define("calcio-live-team-matches", CalcioLiveTeamMatchesCard);
