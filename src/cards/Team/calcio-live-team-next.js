import { LitElement, html, css } from "lit-element";

class CalcioLiveTeamNextCard extends LitElement {
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
    this._config = config;
    this.showPopup = false;
    this.activeMatch = null;
  }

  getCardSize() {
    return 3;
  }

  showDetails() {
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];

    if (stateObj && stateObj.attributes) {
      this.activeMatch = stateObj.attributes;
      this.showPopup = true;
    } else {
      console.error('Nessun match attivo trovato.');
    }
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
        
          <!-- Loghi delle squadre -->
          <div class="popup-logos">
            <img class="popup-logo" src="${this.activeMatch.home_team_logo}" alt="Logo squadra di casa" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_team_logo}" alt="Logo squadra ospite" />
          </div>
  
          <p><strong>Stadio:</strong> ${this.activeMatch.venue}</p>
          <h4>Squadra di Casa: ${this.activeMatch.home_team}</h4>
          <ul>
            <li><strong>Partite Giocate (Casa):</strong> ${this.activeMatch.overall_record.homeGamesPlayed }</li>
            <li><strong>Vittorie:</strong> ${this.activeMatch.overall_record.homeWins}</li>
            <li><strong>Pareggi:</strong> ${this.activeMatch.overall_record.homeTies}</li>
            <li><strong>Sconfitte:</strong> ${this.activeMatch.overall_record.homeLosses}</li>
            <li><strong>Punti Fatti:</strong> ${this.activeMatch.overall_record.homePointsFor}</li>
            <li><strong>Punti Subiti:</strong> ${this.activeMatch.overall_record.homePointsAgainst}</li>
          </ul>

          <h4>Squadra Ospite: ${this.activeMatch.away_team}</h4>
          <ul>
            <li><strong>Partite Giocate (Trasferta):</strong> ${this.activeMatch.overall_record.awayGamesPlayed}</li>
            <li><strong>Vittorie:</strong> ${this.activeMatch.overall_record.awayWins}</li>
            <li><strong>Pareggi:</strong> ${this.activeMatch.overall_record.awayTies}</li>
            <li><strong>Sconfitte:</strong> ${this.activeMatch.overall_record.awayLosses}</li>
            <li><strong>Punti Fatti:</strong> ${this.activeMatch.overall_record.awayPointsFor}</li>
            <li><strong>Punti Subiti:</strong> ${this.activeMatch.overall_record.awayPointsAgainst}</li>
          </ul>

          <p><strong>Quote Squadra Casa:</strong> ${this.activeMatch.home_odds.moneyLine_current} (${this.activeMatch.home_odds.spread_current})</p>
          <p><strong>Quote Squadra Ospite:</strong> ${this.activeMatch.away_odds.moneyLine_current} (${this.activeMatch.away_odds.spread_current})</p>
          
          <button @click="${this.closePopup}" class="close-button">Chiudi</button>
        </div>
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

    const homeTeamLogo = stateObj.attributes['home_team_logo'];
    const awayTeamLogo = stateObj.attributes['away_team_logo'];
    const nextEventDate = stateObj.attributes['next_event_date'];
    const venue = stateObj.attributes['venue'];
    const matchStatus = 'Non Iniziata'; // Stato della partita se non è iniziata

    return html`
      <ha-card>
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${homeTeamLogo}" alt="Logo squadra di casa" />
          </div>
          <div class="background-logo away-logo">
            <img src="${awayTeamLogo}" alt="Logo squadra ospite" />
          </div>
        </div>
        <div class="scroll-content">
          <div class="match-wrapper">
            <div class="match-header">
              <div class="match-competition">
                ${venue} | <span class="match-date">${nextEventDate}</span>
                <span class="info-icon" @click="${() => this.showDetails()}">Info</span>
              </div>
            </div>
            <div class="match">
              <img class="team-logo" src="${homeTeamLogo}" alt="Logo squadra di casa" />
              <div class="match-info">
                <div class="team-name">${stateObj.attributes.home_team}</div>
                <div class="match-status">
                  ${matchStatus}
                </div>
                <div class="team-name">${stateObj.attributes.away_team}</div>
              </div>
              <img class="team-logo" src="${awayTeamLogo}" alt="Logo squadra ospite" />
            </div>
          </div>
        </div>

        ${this.renderPopup()}
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
        position: relative; 
        overflow: hidden;
      }

      .background-logos {
        position: absolute;
        top: -20px;
        left: -50px;
        width: 150%; 
        height: 160%;
        display: flex;
        justify-content: space-between;
        opacity: 0.1;
        pointer-events: none;
        transform: translateX(-10%); 
      }

      .background-logo {
        width: 50%;
        overflow: hidden;
      }

      .home-logo {
        display: flex;
        justify-content: flex-end;
      }

      .away-logo {
        display: flex;
        justify-content: flex-start; 
      }

      .background-logo img {
        width: 150%;
      }

      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue;
      }
      
      .match-result {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0;
        color: green; 
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

      .match-wrapper {
        margin-bottom: 16px;
      }

      .team-name {
        font-size: 17px;
        font-weight: bold;
        text-align: center;
      }

      .match-status {
        font-size: 16px;
        font-weight: bold;
        color: green;
        margin: 8px 0;
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

      .team-logo {
        width: 100px;
        height: 100px;
        margin: 0 10px;
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
    `;
  }
}

customElements.define("calcio-live-team-next", CalcioLiveTeamNextCard);
