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

  formatDateTime(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return 'Data non disponibile';
    }
    const formattedDate = date.toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = date.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
    return `${formattedDate} ${formattedTime}`;
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

    const {
      overall_record,
      home_odds,
      away_odds,
      venue,
      home_team,
      away_team,
      home_team_logo,
      away_team_logo
    } = this.activeMatch;

    return html`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${(e) => e.stopPropagation()}">
          <h3 class="popup-title">Dettagli del Match</h3>
          <div class="team-logos">
            <img src="${home_team_logo}" alt="Logo squadra di casa" class="team-logo" />
            <img src="${away_team_logo}" alt="Logo squadra ospite" class="team-logo" />
          </div>
          <p><strong>Stadio:</strong> ${venue}</p>
          <h4>Squadra di Casa: ${home_team}</h4>
          <ul>
            <li><strong>Partite Giocate (Casa):</strong> ${overall_record?.homeGamesPlayed || 'N/A'}</li>
            <li><strong>Vittorie:</strong> ${overall_record?.homeWins || 'N/A'}</li>
            <li><strong>Pareggi:</strong> ${overall_record?.homeTies || 'N/A'}</li>
            <li><strong>Sconfitte:</strong> ${overall_record?.homeLosses || 'N/A'}</li>
            <li><strong>Punti Fatti:</strong> ${overall_record?.homePointsFor || 'N/A'}</li>
            <li><strong>Punti Subiti:</strong> ${overall_record?.homePointsAgainst || 'N/A'}</li>
          </ul>
          <h4>Squadra Ospite: ${away_team}</h4>
          <ul>
            <li><strong>Partite Giocate (Trasferta):</strong> ${overall_record?.awayGamesPlayed || 'N/A'}</li>
            <li><strong>Vittorie:</strong> ${overall_record?.awayWins || 'N/A'}</li>
            <li><strong>Pareggi:</strong> ${overall_record?.awayTies || 'N/A'}</li>
            <li><strong>Sconfitte:</strong> ${overall_record?.awayLosses || 'N/A'}</li>
            <li><strong>Punti Fatti:</strong> ${overall_record?.awayPointsFor || 'N/A'}</li>
            <li><strong>Punti Subiti:</strong> ${overall_record?.awayPointsAgainst || 'N/A'}</li>
          </ul>
          <p><strong>Quote Squadra Casa:</strong> ${home_odds?.moneyLine_current || 'N/A'} (${home_odds?.spread_current || 'N/A'})</p>
          <p><strong>Quote Squadra Ospite:</strong> ${away_odds?.moneyLine_current || 'N/A'} (${away_odds?.spread_current || 'N/A'})</p>
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
                ${venue} | <span class="match-date">${this.formatDateTime(nextEventDate)}</span>
                <span class="info-icon" @click="${() => this.showDetails()}">Info</span>
              </div>
            </div>
            <div class="match">
              <img class="team-logo" src="${homeTeamLogo}" alt="Logo squadra di casa" />
              <div class="match-info">
                <div class="team-name">${stateObj.attributes.home_team}</div>
                <div class="match-status">
                  ${matchStatus} <!-- Rimuove la data e mostra "Non Iniziata" -->
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
        background-color: #fff; 
        color: #000; 
        position: relative; 
        overflow: hidden;
      }

      .background-logos {
        position: absolute;
        top: -20px;
        left: -50px;
        width: 150%; 
        height: 150%;
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

      /* Popup styles */
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
        z-index: 999;
      }

      .popup-content {
        background: white;
        padding: 16px;
        border-radius: 8px;
        width: 80%;
        max-width: 400px;
        text-align: center;
        z-index: 1000;
      }

      .popup-title {
        color: var(--primary-color);
        margin-top: 0;
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

      .team-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
      }

      .team-logo {
        width: 60px;
        height: 60px;
        margin: 0 10px;
      }
    `;
  }
}

customElements.define("calcio-live-team-next", CalcioLiveTeamNextCard);
