import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";

// Helper per generare un range inclusivo
const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

// Preset zone classifica per competizione. Ogni preset definisce:
// - match(code, entity): funzione che decide se applicare il preset
// - champions / europa / conference / relegation: range posizioni o "bottomN"
// L'utente può sovrascrivere con `zone_config` o sceglierne uno con `zone_preset`.
const ZONE_PRESETS = {
  // Italian Serie A (20 squadre): 1-4 CL, 5 EL, 6 CnL, ult. 3 retrocesse
  serie_a: {
    match: (code, entity) => code === 'ita.1' || entity.includes('italian_serie_a'),
    champions: [1, 2, 3, 4], europa: [5], conference: [6], relegation: 'bottom3',
  },
  // English Premier League (20): 1-5 CL, 6 EL, 7 CnL, ult. 3 retrocesse
  premier_league: {
    match: (code, entity) => code === 'eng.1' || entity.includes('english_premier'),
    champions: [1, 2, 3, 4, 5], europa: [6], conference: [7], relegation: 'bottom3',
  },
  // Spanish LaLiga (20): 1-4 CL, 5 EL, 6 CnL, ult. 3 retrocesse
  laliga: {
    match: (code, entity) => code === 'esp.1' || entity.includes('spanish_la_liga') || entity.includes('spanish_laliga'),
    champions: [1, 2, 3, 4], europa: [5], conference: [6], relegation: 'bottom3',
  },
  // Bundesliga (18): 1-4 CL, 5 EL, 6 CnL, 17-18 retrocesse, 16 spareggio
  bundesliga: {
    match: (code, entity) => code === 'ger.1' || entity.includes('german_bundesliga'),
    champions: [1, 2, 3, 4], europa: [5], conference: [6], relegation: [17, 18],
  },
  // Ligue 1 (18): 1-3 CL (3° via spareggio), 4 EL, 5 CnL, 17-18 retrocesse
  ligue_1: {
    match: (code, entity) => code === 'fra.1' || entity.includes('french_ligue_1'),
    champions: [1, 2, 3], europa: [4], conference: [5], relegation: [17, 18],
  },
  // Eredivisie (18): 1-2 CL, 3 EL, 4-5 CnL, 17-18 retrocesse
  eredivisie: {
    match: (code, entity) => code === 'ned.1' || entity.includes('dutch_eredivisie'),
    champions: [1, 2], europa: [3], conference: [4, 5], relegation: [17, 18],
  },
  // Primeira Liga (18): 1-2 CL, 3 EL, 4 CnL, 17-18 retrocesse
  primeira_liga: {
    match: (code, entity) => code === 'por.1' || entity.includes('portuguese_primeira'),
    champions: [1, 2], europa: [3], conference: [4], relegation: [17, 18],
  },
  // UEFA Champions League — fase a 36: top 8 diretti agli ottavi,
  // 9-24 KO playoff, 25-36 eliminate
  ucl_league_phase: {
    match: (code, entity) => code === 'uefa.champions' || entity.includes('uefa_champions_league'),
    champions: range(1, 8), europa: range(9, 24), conference: [], relegation: 'bottom12',
  },
  // UEFA Europa League — stessa logica della UCL
  uel_league_phase: {
    match: (code, entity) => code === 'uefa.europa' || entity.includes('uefa_europa_league'),
    champions: range(1, 8), europa: range(9, 24), conference: [], relegation: 'bottom12',
  },
  // UEFA Conference League — fase a 36: top 8 ottavi, 9-24 playoff, 25-36 eliminate
  uecl_league_phase: {
    match: (code, entity) => code === 'uefa.europa.conf' || entity.includes('uefa_conference'),
    champions: range(1, 8), europa: range(9, 24), conference: [], relegation: 'bottom12',
  },
};

class CalcioLiveStandingsCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      maxTeamsVisible: { type: Number },
      hideHeader: { type: Boolean },
      selectedGroup: { type: String },
      _eventSubscriptions: { type: Array },
      _toastMessage: { type: String },
      _toastVisible: { type: Boolean },
      _toastVariant: { type: String },
    };
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Entity required");
    }
    this._config = config;
    this.maxTeamsVisible = config.max_teams_visible ? config.max_teams_visible : 10;
    this.hideHeader = config.hide_header || false;
    this.selectedGroup = config.selected_group || '';
    this.showEventToasts = config.show_event_toasts === true;
    this._toastMessage = '';
    this._toastVisible = false;
    this._toastVariant = 'goal';
    this._toastTimer = null;
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  connectedCallback() {
    super.connectedCallback();
    this._subscribeToEvents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._eventSubscriptions && Array.isArray(this._eventSubscriptions)) {
      this._eventSubscriptions.forEach(unsub => {
        if (typeof unsub === 'function') {
          unsub();
        }
      });
      this._eventSubscriptions = [];
    }
  }

  _subscribeToEvents() {
    if (!this.hass || !this.hass.connection) return;

    this._eventSubscriptions = [];

    ['calcio_live_goal', 'calcio_live_yellow_card', 'calcio_live_red_card'].forEach(evt => {
      this.hass.connection.subscribeEvents(
        this._handleCalcioLiveEvent.bind(this),
        evt
      ).then(unsub => {
        if (typeof unsub === 'function') {
          this._eventSubscriptions.push(unsub);
        }
      });
    });
  }

  _eventBelongsToThisCard(eventData) {
    if (!this.hass || !this._config) return false;
    const entityId = this._config.entity || '';
    const eventCode = eventData.competition_code;
    if (!eventCode) return false;
    const normalized = eventCode.replace(/\./g, '_').toLowerCase();
    return entityId.toLowerCase().includes(normalized);
  }

  _handleCalcioLiveEvent(event) {
    const eventType = event.event_type;
    const eventData = event.data;
    if (!this._eventBelongsToThisCard(eventData)) return;
    if (!this.showEventToasts) return;
    this._showEventToast(eventType, eventData);
  }

  _showEventToast(eventType, eventData) {
    let message = '';
    let variant = 'goal';
    if (eventType === 'calcio_live_goal') {
      message = `<strong>GOAL!</strong> ${eventData.player} · ${eventData.home_team} ${eventData.home_score} - ${eventData.away_score} ${eventData.away_team}`;
      variant = 'goal';
    } else if (eventType === 'calcio_live_yellow_card') {
      message = `🟨 <strong>Cartellino Giallo</strong> · ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
      variant = 'yellow';
    } else if (eventType === 'calcio_live_red_card') {
      message = `🟥 <strong>Cartellino Rosso</strong> · ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
      variant = 'red';
    } else if (eventType === 'calcio_live_match_finished') {
      message = `<strong>Finita!</strong> ${eventData.home_team} ${eventData.home_score} - ${eventData.away_score} ${eventData.away_team}`;
      variant = 'finished';
    }
    if (!message) return;
    this._toastMessage = message;
    this._toastVariant = variant;
    this._toastVisible = true;
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this._toastVisible = false;
      this.requestUpdate();
    }, 4000);
    this.requestUpdate();
  }

  getCardSize() { return 5; }
  static getConfigElement() { return document.createElement("calcio-live-classifica-editor"); }
  static getStubConfig() {
    return {
      entity: "sensor.calcio_live",
      max_teams_visible: 10,
      hide_header: false,
      selected_group: '',
      show_event_toasts: false,
    };
  }

  _getZoneConfig() {
    // 1) Override esplicito nella config della card
    if (this._config.zone_config) return this._config.zone_config;
    // 2) Preset preimpostato per nome (es. zone_preset: 'serie_a')
    if (this._config.zone_preset && ZONE_PRESETS[this._config.zone_preset]) {
      return ZONE_PRESETS[this._config.zone_preset];
    }
    // 3) Auto-detect dal codice competizione / nome entity
    const preset = this._inferPresetFromEntity();
    if (preset) return preset;
    // 4) Fallback: nessuna zona colorata
    return { champions: [], europa: [], conference: [], relegation: null };
  }

  _inferPresetFromEntity() {
    const entity = (this._config.entity || '').toLowerCase();
    const stateObj = this.hass && this._config.entity ? this.hass.states[this._config.entity] : null;
    const compCode = stateObj && stateObj.attributes ? String(stateObj.attributes.competition_code || '').toLowerCase() : '';
    // Itera i preset: il primo con match vince
    for (const [, def] of Object.entries(ZONE_PRESETS)) {
      if (def.match && def.match(compCode, entity)) return def;
    }
    return null;
  }

  _positionInZone(rank, total, zonePositions) {
    if (!zonePositions) return false;
    // Stringhe tipo "bottom3", "bottom2", "bottom12"
    const m = String(zonePositions).match(/^bottom(\d+)$/);
    if (m) {
      const n = parseInt(m[1], 10);
      return total && rank > total - n;
    }
    if (Array.isArray(zonePositions)) {
      return zonePositions.includes(Number(rank));
    }
    return false;
  }

  _translatePhase(phase) {
    if (!phase) return '';

    const map = {
      'regular-season': this._t('phase.regular_season'),
      'group stage': this._t('phase.group_stage'),
      'playoffs': this._t('phase.playoffs'),
    };

    return map[String(phase).toLowerCase()] || phase;
  }

  _shouldShowPhase(phase) {
    if (!phase) return false;

    const lower = String(phase).toLowerCase();

    if (lower === 'regular-season') return false;

    return true;
  }

  _zoneClass(rank, total) {
    const zones = this._getZoneConfig();

    if (this._positionInZone(rank, total, zones.champions)) {
      return rank === 1 ? 'zone-cl rank-first' : 'zone-cl';
    }

    if (this._positionInZone(rank, total, zones.europa)) {
      return 'zone-el';
    }

    if (this._positionInZone(rank, total, zones.conference)) {
      return 'zone-conf';
    }

    if (this._positionInZone(rank, total, zones.relegation)) {
      return 'zone-rel';
    }

    return 'zone-default';
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${entityId}</ha-card>`;

    const seasonName = stateObj.attributes.season || '';
    const standingsGroups = stateObj.attributes.standings_groups || [];
    const standingsGroup = standingsGroups.find(g => g.name === this.selectedGroup) || standingsGroups[0];
    let filteredStandings = standingsGroup ? standingsGroup.standings : [];
    filteredStandings = filteredStandings.filter(t => t.rank != null);

    if (seasonName.includes("MLS")) {
      filteredStandings = filteredStandings.slice().sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.goal_difference !== a.goal_difference) return b.goal_difference - a.goal_difference;
        return b.goals_for - a.goals_for;
      });
      filteredStandings.forEach((t, i) => { t.rank = i + 1; });
    } else {
      filteredStandings = filteredStandings.slice().sort((a, b) => a.rank - b.rank);
    }

    const total = filteredStandings.length;
    const maxVisible = Math.min(this.maxTeamsVisible, total);
    const tableHeight = maxVisible * 48 + 50;

    return html`
      <ha-card>
        ${this.showEventToasts && this._toastVisible ? html`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        ` : ''}

        ${this.hideHeader ? '' : html`
          <div class="top-bar">
            <h2>${stateObj.state}</h2>
            <div class="sub">
	       ${seasonName}
	       ${this._shouldShowPhase(standingsGroup && standingsGroup.name)
	        ? ` · ${this._translatePhase(standingsGroup.name)}`
	        : ''}
	    </div>
          </div>
        `}

        <div class="table-wrap" style="max-height: ${tableHeight}px;">
          <table class="standings-table">
            <thead>
              <tr>
                <th>${this._t('col.pos')}</th>
                <th class="team-col">${this._t('col.team')}</th>
                <th>${this._t('col.played')}</th>
                <th>${this._t('col.wins')}</th>
                <th>${this._t('col.draws')}</th>
                <th>${this._t('col.losses')}</th>
                <th>${this._t('col.gd')}</th>
                <th>${this._t('col.points')}</th>
              </tr>
            </thead>
            <tbody>
              ${filteredStandings.map(team => {
                const num = (v) => {
                  if (v === null || v === undefined || v === '') return null;
                  const n = parseInt(String(v).replace('+', ''), 10);
                  return isNaN(n) ? null : n;
                };
                const w = num(team.wins);
                const d = num(team.draws);
                const l = num(team.losses);
                const gd = num(team.goal_difference);
                const played = (w !== null && d !== null && l !== null) ? (w + d + l) : null;
                const gdClass = gd === null ? '' : (gd > 0 ? 'gd-pos' : (gd < 0 ? 'gd-neg' : ''));
                const gdLabel = gd === null ? '-' : (gd > 0 ? `+${gd}` : `${gd}`);
                return html`
                  <tr class="${this._zoneClass(team.rank, total)}">
                    <td><div class="rank-cell"><div class="rank-num">${team.rank}</div></div></td>
                    <td class="team-cell">
                      <img src="${team.team_logo}" alt="${team.team_name}" />
                      <span class="tname">${team.team_name}</span>
                    </td>
                    <td>${played ?? '-'}</td>
                    <td>${w ?? '-'}</td>
                    <td>${d ?? '-'}</td>
                    <td>${l ?? '-'}</td>
                    <td class="${gdClass}">${gdLabel}</td>
                    <td class="points-cell">${team.points ?? '-'}</td>
                  </tr>
                `;
              })}
            </tbody>
          </table>
        </div>

        <div class="legend">
          <div class="legend-item"><span class="legend-dot cl"></span>${this._t('zone.champions')}</div>
          <div class="legend-item"><span class="legend-dot el"></span>${this._t('zone.europa')}</div>
          <div class="legend-item"><span class="legend-dot conf"></span>${this._t('zone.conference')}</div>
          <div class="legend-item"><span class="legend-dot rel"></span>${this._t('zone.relegation')}</div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-glow: rgba(251,191,36,0.4);
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-cl: #6366f1;
        --cl-el: #f97316;
        --cl-rel: #ef4444;
        --cl-conf: #a855f7;
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .top-bar {
        position: relative;
        padding: 20px 18px;
        background:
          linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.10) 60%, transparent);
        border-bottom: 1px solid var(--cl-divider);
        overflow: hidden;
      }
      .top-bar::before {
        content: '⚽';
        position: absolute;
        right: -10px; top: -10px;
        font-size: 90px;
        opacity: 0.06;
        transform: rotate(15deg);
      }
      .top-bar h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: -0.03em;
        background: linear-gradient(135deg, var(--primary-text-color), var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .top-bar .sub {
        color: var(--secondary-text-color);
        font-size: 12px;
        margin-top: 4px;
        font-weight: 500;
      }

      .table-wrap {
        overflow-y: auto;
      }
      .standings-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
      }
      .standings-table thead th {
        position: sticky;
        top: 0;
        background: var(--cl-card-2);
        backdrop-filter: blur(8px);
        padding: 10px 4px;
        text-align: center;
        font-size: 10px;
        font-weight: 800;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border-bottom: 1px solid var(--cl-divider);
        z-index: 1;
      }
      .standings-table thead th:first-child { padding-left: 14px; text-align: left; }
      .standings-table thead th:last-child { padding-right: 14px; }
      .standings-table thead th.team-col { text-align: left; }

      .standings-table tbody tr {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .standings-table tbody tr:hover {
        background: var(--cl-card-2);
      }
      .standings-table tbody td {
        padding: 10px 4px;
        text-align: center;
        border-bottom: 1px solid var(--cl-divider);
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .standings-table tbody tr:last-child td { border-bottom: none; }
      .standings-table tbody td:first-child { padding-left: 14px; text-align: left; }
      .standings-table tbody td:last-child { padding-right: 14px; }

      .rank-cell {
        display: flex; align-items: center; gap: 6px;
        font-weight: 800;
      }
      .rank-num {
        width: 24px; height: 24px;
        border-radius: 7px;
        display: flex; align-items: center; justify-content: center;
        font-size: 11px;
        font-weight: 900;
      }
      .zone-cl .rank-num {
        background: linear-gradient(135deg, var(--cl-cl), #4f46e5);
        color: white;
        box-shadow: 0 2px 12px rgba(99,102,241,0.4);
      }
      .zone-cl.rank-first .rank-num {
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        color: #1f1410;
        box-shadow: 0 2px 16px var(--cl-gold-glow);
        animation: gold-shimmer 3s ease-in-out infinite;
      }
      @keyframes gold-shimmer {
        0%, 100% { box-shadow: 0 2px 16px var(--cl-gold-glow); }
        50% { box-shadow: 0 2px 24px var(--cl-gold-glow), 0 0 32px var(--cl-gold-glow); }
      }
      .zone-el .rank-num {
        background: linear-gradient(135deg, var(--cl-el), #ea580c);
        color: white;
        box-shadow: 0 2px 12px rgba(249,115,22,0.4);
      }
      .zone-rel .rank-num {
        background: linear-gradient(135deg, var(--cl-rel), #b91c1c);
        color: white;
        box-shadow: 0 2px 12px rgba(239,68,68,0.4);
      }
      .zone-conf .rank-num {
        background: linear-gradient(135deg, var(--cl-conf), #7e22ce);
        color: white;
        box-shadow: 0 2px 12px rgba(168,85,247,0.4);
      }
      .zone-default .rank-num {
        background: var(--cl-card-2);
        color: var(--secondary-text-color);
      }

      .team-cell {
        display: flex; align-items: center; gap: 10px;
        text-align: left !important;
      }
      .team-cell img {
        width: 24px; height: 24px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-cell .tname {
        font-weight: 700;
        font-size: 13px;
        letter-spacing: -0.01em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .points-cell {
        font-weight: 900 !important;
        font-size: 14px !important;
      }
      .gd-pos { color: var(--cl-green); font-weight: 800 !important; }
      .gd-neg { color: var(--cl-live); font-weight: 800 !important; }

      .legend {
        display: flex; flex-wrap: wrap;
        gap: 12px;
        padding: 12px 16px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      .legend-item {
        display: flex; align-items: center; gap: 6px;
        font-size: 10px;
        color: var(--secondary-text-color);
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .legend-dot {
        width: 10px; height: 10px; border-radius: 3px;
      }
      .legend-dot.cl { background: linear-gradient(135deg, var(--cl-cl), #4f46e5); }
      .legend-dot.el { background: linear-gradient(135deg, var(--cl-el), #ea580c); }
      .legend-dot.rel { background: linear-gradient(135deg, var(--cl-rel), #b91c1c); }
      .legend-dot.conf { background: linear-gradient(135deg, var(--cl-conf), #7e22ce); }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: #0b0f1a;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow: 0 0 0 2px var(--cl-gold), 0 0 0 4px rgba(251,191,36,0.3),
                    0 12px 40px rgba(0,0,0,0.7), 0 0 60px rgba(251,191,36,0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      .event-toast.variant-finished {
        box-shadow: 0 0 0 2px var(--cl-green), 0 0 0 4px rgba(16,185,129,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-finished strong { color: #6ee7b7; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `;
  }
}

customElements.define("calcio-live-classifica", CalcioLiveStandingsCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'calcio-live-classifica',
  name: 'Calcio Live Classifica Card',
  description: 'Mostra la classifica del campionato o coppe',
});
