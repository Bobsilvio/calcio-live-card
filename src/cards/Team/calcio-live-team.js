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

  static getConfigElement() {
    return document.createElement("calcio-live-team-editor");
  }

  static getStubConfig() {
    return {
      entity: "sensor.calcio_live",
    };
  }

  // Funzione aggiornata per gestire il risultato e il tempo del match
  getMatchStatusText(match) {
    if (match.completed) {
      return `${match.home_score} - ${match.away_score} (Full Time)`; // Match completato
    }
    if (match.period === 1 || match.period === 2) {
      return `${match.home_score} - ${match.away_score} (${match.clock})`; // Match in corso, mostra il punteggio e il tempo
    }
    if (match.status === 'Scheduled') {
      return `${match.date}`; // Partita programmata
    }
    return 'Dati non disponibili'; // Fallback se i dati non sono disponibili
  }

  showDetails(match) {
    this.activeMatch = match;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  separateEvents(details) {
    const goals = [];
    const yellowCards = [];
    const redCards = [];

    details.forEach(event => {
      if (event.includes('Goal') || event.includes('Penalty - Scored')) {
        goals.push(event); // Aggiungi i gol all'elenco
      } else if (event.includes('Yellow Card')) {
        yellowCards.push(event);
      } else if (event.includes('Red Card')) {
        redCards.push(event);
      }
    });

    return { goals, yellowCards, redCards };
  }

  // Funzione che gestisce il rendering degli eventi della partita
  renderMatchDetails(details, clock) {
    if (!details || details.length === 0) {
      return html`<p>Nessun dettaglio disponibile.</p>`;
    }
    return match.status === 'Scheduled' ? `${match.date}` : 'Dati non disponibili';
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
            <img class="popup-logo" src="${this.activeMatch.home_logo}" alt="${this.activeMatch.home_team}" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_logo}" alt="${this.activeMatch.away_team}" />
          </div>
        
          <!-- Informazioni sulle squadre -->
          <p><strong>Formazione Casa:</strong> <span class="home-stat">${this.activeMatch.home_form}</span></p>
          <p><strong>Formazione Trasferta:</strong> <span class="away-stat">${this.activeMatch.away_form}</span></p>
        
          <!-- Altre informazioni (statistiche) -->
          <p><strong>Statistiche Casa:</strong></p>
          <ul>
            <li>Possesso Palla: <span class="stat-value">${this.activeMatch.home_statistics?.possessionPct ?? 'N/A'}%</span></li>
            <li>Tiri Totali: <span class="stat-value">${this.activeMatch.home_statistics?.totalShots ?? 'N/A'}</span></li>
            <li>Tiri in Porta: <span class="stat-value">${this.activeMatch.home_statistics?.shotsOnTarget ?? 'N/A'}</span></li>
            <li>Falli Comessi: <span class="stat-value">${this.activeMatch.home_statistics?.foulsCommitted ?? 'N/A'}</span></li>
            <li>Assist: <span class="stat-value">${this.activeMatch.home_statistics?.goalAssists ?? 'N/A'}</span></li>
          </ul>
          <p><strong>Statistiche Trasferta:</strong></p>
          <ul>
            <li>Possesso Palla: <span class="stat-value">${this.activeMatch.away_statistics?.possessionPct ?? 'N/A'}%</span></li>
            <li>Tiri Totali: <span class="stat-value">${this.activeMatch.away_statistics?.totalShots ?? 'N/A'}</span></li>
            <li>Tiri in Porta: <span class="stat-value">${this.activeMatch.away_statistics?.shotsOnTarget ?? 'N/A'}</span></li>
            <li>Falli Comessi: <span class="stat-value">${this.activeMatch.away_statistics?.foulsCommitted ?? 'N/A'}</span></li>
            <li>Assist: <span class="stat-value">${this.activeMatch.away_statistics?.goalAssists ?? 'N/A'}</span></li>
          </ul>

          <h4 class="popup-subtitle">Eventi Partita</h4>
          ${this.renderMatchDetails(this.activeMatch.match_details, this.activeMatch.clock)}
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

    // Estrai le informazioni necessarie dalla prima (e unica) partita
    const match = stateObj.attributes.matches ? stateObj.attributes.matches[0] : null;

    if (!match) {
      return html`<ha-card>Nessuna partita disponibile</ha-card>`;
    }


    return html`
      <ha-card>
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${match.home_logo}" alt="Logo squadra di casa" />
          </div>
          <div class="background-logo away-logo">
            <img src="${match.away_logo}" alt="Logo squadra ospite" />
          </div>
        </div>
        <div class="match-wrapper">
          <div class="match-header">
            <div class="match-competition">
              ${match.venue} | <span class="match-date">${match.date}</span>
              ${match.status !== 'Scheduled' 
                ? html`<span class="info-icon" @click="${() => this.showDetails(match)}">Info</span>`
                : ''}
            </div>
          </div>
          <div class="match">
            <img class="team-logo" src="${match.home_logo}" alt="${match.home_team}" />
            <div class="match-info">
              <div class="team-name">${match.home_team}</div>
                <div class="match-result">
                ${this.getMatchStatusText(match)} <!-- Mostra lo stato e il risultato -->
                </div>
              <div class="team-name">${match.away_team}</div>
            </div>
            <img class="team-logo" src="${match.away_logo}" alt="${match.away_team}" />
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

        /* Sezione background loghi */
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
        .team-header {
          text-align: center;
        }
        .team-logo {
          width: 80px;
          height: 80px;
          margin-left: 15px;
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
          color: blue;
        }
        .match-date {
          color: orange;
        }
        .team-logo {
          width: 90px;
          height: 90px;
        }
        .match-wrapper {
          margin-bottom: 16px;
        }
        .team-name {
          font-size: 17px;
          font-weight: bold;
          text-align: center;
        }
        hr {
          border: 0;
          border-top: 1px solid var(--divider-color);
          margin: 16px 0;
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
          color: green;
        }
        .info-icon {
          font-size: 12px;
          color: var(--primary-color);
          cursor: pointer;
          margin-left: 8px;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: var(--primary-background-color);
          padding: 16px;
          border-radius: 8px;
          width: 80%;
          max-width: 400px;
          overflow-y: auto;
          max-height: 80vh;
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
        .popup-teams {
          text-align: center;
          font-size: 1.2em;
          color: var(--primary-text-color);
          margin-bottom: 16px;
        }
        .popup-subtitle {
          color: var(--primary-color);
          margin-top: 16px;
        }
        .stat-value {
          color: var(--primary-color);
        }
        .home-stat {
          color: green;
        }
        .away-stat {
          color: red;
        }
        .event-section {
          margin-bottom: 16px;
        }
        .event-title {
          color: var(--primary-color);
          font-weight: bold;
          margin-bottom: 8px;
        }
        .goal-details li, .yellow-card-details li, .red-card-details li {
          color: var(--primary-text-color);
          margin-bottom: 4px;
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
          background: var(--primary-color-dark);
        }
      `;
  }
}

customElements.define("calcio-live-team", CalcioLiveTeamNextCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'calcio-live-team',
  name: 'Calcio Live team Card',
  description: 'Mostra le partite della tuo Team',
});