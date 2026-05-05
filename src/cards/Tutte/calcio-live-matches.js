import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";

class CalcioLiveTodayMatchesCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
      showPopup: { type: Boolean },
      activeMatch: { type: Object },
      _eventSubscriptions: { type: Array },
      _recentEventMatches: { type: Object },
      _toastMessage: { type: String },
      _toastVisible: { type: Boolean },
      _toastVariant: { type: String },
    };
  }

  constructor() {
    super();
    this._recentEventMatches = new Map();
    this._eventSubscriptions = [];
    this._toastMessage = '';
    this._toastVisible = false;
    this._toastVariant = 'goal';
    this._toastTimer = null;
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error("Entity required");
    }
    this._config = config;
    this.maxEventsVisible = config.max_events_visible ? config.max_events_visible : 5;
    this.maxEventsTotal = config.max_events_total ? config.max_events_total : 50;
    this.showFinishedMatches = config.show_finished_matches !== undefined ? config.show_finished_matches : true;
    this.hideHeader = config.hide_header !== undefined ? config.hide_header : false;
    this.hidePastDays = config.hide_past_days !== undefined ? config.hide_past_days : 0;
    this.showEventToasts = config.show_event_toasts === true;
    this.activeMatch = null;
    this.showPopup = false;
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
      this._eventSubscriptions.forEach(sub => { if (sub) sub.unsubscribe(); });
      this._eventSubscriptions = [];
    }
  }

  _subscribeToEvents() {
    if (!this.hass || !this.hass.connection) return;
    this._eventSubscriptions = [];
    ['calcio_live_goal', 'calcio_live_yellow_card', 'calcio_live_red_card'].forEach(evt => {
      this._eventSubscriptions.push(
        this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this), evt)
      );
    });
  }

  _eventBelongsToThisCard(eventData) {
    if (!this.hass || !this._config) return false;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return false;
    const matches = stateObj.attributes.matches || [];
    return matches.some(m => m.home_team === eventData.home_team && m.away_team === eventData.away_team);
  }

  _handleCalcioLiveEvent(event) {
    const eventType = event.event_type;
    const eventData = event.data;
    if (!this._eventBelongsToThisCard(eventData)) return;

    const matchKey = `${eventData.home_team}_${eventData.away_team}`;
    this._recentEventMatches.set(matchKey, eventType === 'calcio_live_goal' ? 'goal' : 'card');
    this.requestUpdate();
    setTimeout(() => {
      this._recentEventMatches.delete(matchKey);
      this.requestUpdate();
    }, 5000);

    if (this.showEventToasts) {
      this._showEventToast(eventType, eventData);
    }
  }

  _showEventToast(eventType, eventData) {
    let message = '';
    let variant = 'goal';
    if (eventType === 'calcio_live_goal') {
      message = `<strong>${this._t('event.goal').toUpperCase()}!</strong> ${eventData.player} · ${eventData.home_team} ${eventData.home_score} - ${eventData.away_score} ${eventData.away_team}`;
      variant = 'goal';
    } else if (eventType === 'calcio_live_yellow_card') {
      message = `🟨 <strong>${this._t('event.yellow_card')}</strong> · ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
      variant = 'yellow';
    } else if (eventType === 'calcio_live_red_card') {
      message = `🟥 <strong>${this._t('event.red_card')}</strong> · ${eventData.player}${eventData.minute ? ` (${eventData.minute}')` : ''}`;
      variant = 'red';
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

  getCardSize() { return 4; }
  static getConfigElement() { return document.createElement("calcio-live-matches-editor"); }
  static getStubConfig() {
    return {
      entity: "sensor.calcio_live",
      max_events_visible: 5,
      max_events_total: 50,
      hide_past_days: 0,
      show_finished_matches: true,
      hide_header: false,
      show_event_toasts: false,
    };
  }

  _parseMatchDate(dateStr) {
    if (!dateStr) return null;
    const [datePart, timePart] = dateStr.split(' ');
    const [day, month, year] = datePart.split('/').map(Number);
    const [hours, minutes] = timePart ? timePart.split(':').map(Number) : [0, 0];
    return new Date(year, month - 1, day, hours, minutes);
  }

  _matchTimeLabel(match) {
    if (match.state === 'in') return match.clock && match.clock !== 'N/A' ? match.clock : 'LIVE';
    if (match.state === 'post') return 'FT';
    if (match.date) {
      const parts = match.date.split(' ');
      return parts[1] || parts[0];
    }
    return '—';
  }

  _matchScore(match, side) {
    if (match.state === 'pre') return '-';
    return match[side === 'home' ? 'home_score' : 'away_score'] ?? '-';
  }

  _isWinner(match, side) {
    if (match.state === 'pre') return null;
    const h = parseInt(match.home_score);
    const a = parseInt(match.away_score);
    if (isNaN(h) || isNaN(a) || h === a) return null;
    return side === 'home' ? h > a : a > h;
  }

  _dayKey(match) {
    if (!match.date) return '—';
    const d = this._parseMatchDate(match.date);
    if (!d) return match.date.split(' ')[0] || '—';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const matchDay = new Date(d);
    matchDay.setHours(0, 0, 0, 0);
    const diff = Math.round((matchDay - today) / (24 * 3600 * 1000));
    if (diff === 0) return '⚡ ' + this._t('time.today');
    if (diff === -1) return this._t('time.yesterday');
    if (diff === 1) return this._t('time.tomorrow');
    const month = this._t('month.' + (matchDay.getMonth() + 1));
    return `${matchDay.getDate()} ${month}`;
  }

  showDetails(match) {
    this.activeMatch = match;
    this.showPopup = true;
  }
  closePopup() { this.showPopup = false; }

  separateEvents(details) {
    const goals = [], yellowCards = [], redCards = [];

    details.forEach(event => {
      const raw = String(event || '');

      if (raw.includes('Goal') || raw.includes('Penalty - Scored')) {
        goals.push(this.formatMatchEvent(raw));
      } else if (raw.includes('Yellow Card')) {
        yellowCards.push(this.formatMatchEvent(raw));
      } else if (raw.includes('Red Card')) {
        redCards.push(this.formatMatchEvent(raw));
      }
    });

    return { goals, yellowCards, redCards };
  }

  formatMatchEvent(event) {
    const tx = (key) => this._t(key);
    let text = String(event || '').trim();

    text = text
      .replace(/^Goal\s*-\s*/i, '')
      .replace(/^Yellow Card\s*-\s*/i, '')
      .replace(/^Red Card\s*-\s*/i, '')
      .replace(/^Penalty - Scored\s*-\s*/i, `${tx('event.penalty')} - `)
      .replace(/^Header\s*-\s*/i, `${tx('event.header')} - `)
      .replace(/^Shot\s*-\s*/i, `${tx('event.shot')} - `)
      .replace(/^Free-kick\s*-\s*/i, `${tx('event.free_kick')} - `)
      .replace(/^Penalty\s*-\s*/i, `${tx('event.penalty')} - `);

    text = text.replace(/^([^:]+):\s*/, '$1 ');

    const eventTypes = [
      tx('event.header'),
      tx('event.shot'),
      tx('event.penalty'),
      tx('event.free_kick'),
    ].map(type => type.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    text = text.replace(
      new RegExp(`^(${eventTypes.join('|')})\\s*-\\s*(.+)$`, 'i'),
      (_, eventType, rest) => `${rest} (${eventType.toLowerCase()})`
    );

    text = text.replace(/\bN\/A\b/g, tx('generic.unknown'));

    return text;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const entityId = this._config.entity;
    const stateObj = this.hass.states[entityId];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${entityId}</ha-card>`;

    let matches = stateObj.attributes.matches || [];
    const leagueInfo = stateObj.attributes.league_info ? stateObj.attributes.league_info[0] : null;
    const teamLogo = stateObj.attributes.team_logo || null;

    if (!this.showFinishedMatches) {
      matches = matches.filter((m) => m.status !== "Full Time");
    }
    matches = matches.slice().sort((a, b) => new Date(a.date) - new Date(b.date));

    if (this.hidePastDays > 0) {
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - this.hidePastDays);
      matches = matches.filter((m) => {
        const d = this._parseMatchDate(m.date);
        return d ? d >= cutoff : true;
      });
    }
    const limited = matches.slice(0, this.maxEventsTotal);

    if (limited.length === 0) {
      return html`<ha-card class="empty">${this._t('generic.no_match')}</ha-card>`;
    }

    const liveCount = limited.filter(m => m.state === 'in').length;

    const grouped = [];
    let currentKey = null;
    limited.forEach(m => {
      const key = this._dayKey(m);
      if (key !== currentKey) {
        currentKey = key;
        grouped.push({ key, matches: [m] });
      } else {
        grouped[grouped.length - 1].matches.push(m);
      }
    });

    const scrollHeight = Math.max(this.maxEventsVisible * 80, 240);

    return html`
      <ha-card>
        <div class="hero-bg"></div>

        ${this.showEventToasts && this._toastVisible ? html`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        ` : ''}

        ${!this.hideHeader ? html`
          <div class="matches-header">
            ${leagueInfo && leagueInfo.logo_href
              ? html`<img class="league-logo" src="${leagueInfo.logo_href}" alt="${leagueInfo.abbreviation || ''}" />`
              : (teamLogo ? html`<img class="league-logo" src="${teamLogo}" alt="" />` : '')}
            <div class="league-info">
              <div class="league-name">${(leagueInfo && leagueInfo.abbreviation) || stateObj.state || 'Calcio Live'}</div>
              <div class="league-dates">
                ${leagueInfo && leagueInfo.startDate ? `${leagueInfo.startDate} → ${leagueInfo.endDate}` : this._t('generic.matches_count', { n: limited.length })}
              </div>
            </div>
            ${liveCount > 0 ? html`<span class="live-counter">${liveCount} LIVE</span>` : ''}
          </div>
        ` : ''}

        <div class="scroll-content" style="max-height: ${scrollHeight}px;">
          ${grouped.map(group => html`
            <div class="day-divider ${group.key.includes('Oggi') ? 'today' : ''}">${group.key}</div>
            ${group.matches.map(match => {
              const matchKey = `${match.home_team}_${match.away_team}`;
              const isLive = match.state === 'in';
              const recent = this._recentEventMatches.get(matchKey);
              const homeWinner = this._isWinner(match, 'home');
              const awayWinner = this._isWinner(match, 'away');
              const broadcast = match.broadcast && match.broadcast !== '' && match.broadcast !== 'N/A' ? match.broadcast : '';
              const isUpcoming = match.state === 'pre';
              return html`
                <div class="match-row ${isLive ? 'live' : ''} ${recent === 'goal' ? 'goal-pulse' : ''} ${recent === 'card' ? 'card-pulse' : ''}"
                     @click="${() => this.showDetails(match)}">
                  <div class="match-time ${isLive ? 'live-time' : ''} ${match.state === 'post' ? 'ft' : ''}">
                    ${this._matchTimeLabel(match)}
                  </div>
                  <div class="match-teams">
                    <div class="match-team">
                      <img src="${match.home_logo}" alt="${match.home_team}" />
                      <span class="name ${homeWinner === true ? 'winner' : (homeWinner === false ? 'loser' : '')}">${match.home_team}</span>
                      <span class="score ${homeWinner === true ? 'winner' : (homeWinner === false ? 'loser' : '')}">${this._matchScore(match, 'home')}</span>
                    </div>
                    <div class="match-team">
                      <img src="${match.away_logo}" alt="${match.away_team}" />
                      <span class="name ${awayWinner === true ? 'winner' : (awayWinner === false ? 'loser' : '')}">${match.away_team}</span>
                      <span class="score ${awayWinner === true ? 'winner' : (awayWinner === false ? 'loser' : '')}">${this._matchScore(match, 'away')}</span>
                    </div>
                    ${broadcast && isUpcoming ? html`
                      <div class="row-extras">
                        <span class="tv-chip" title="Diretta TV">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                          ${broadcast}
                        </span>
                      </div>
                    ` : ''}
                  </div>
                  <div class="match-status-icon">›</div>
                </div>
              `;
            })}
          `)}
        </div>
      </ha-card>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('showPopup') || changedProperties.has('activeMatch')) {
      this.renderPopupToBody();
    }
  }

  renderPopupToBody() {
    if (!this.showPopup || !this.activeMatch) {
      const existingPopup = document.getElementById('calcio-live-matches-popup');
      if (existingPopup) existingPopup.remove();
      return;
    }
    let popupContainer = document.getElementById('calcio-live-matches-popup');
    if (!popupContainer) {
      popupContainer = document.createElement('div');
      popupContainer.id = 'calcio-live-matches-popup';
      popupContainer.style.cssText = `
        position: fixed; inset: 0;
        display: flex; justify-content: center; align-items: center;
        z-index: 999999;
        background: rgba(0,0,0,0.7);
        backdrop-filter: blur(8px);
        overflow: auto;
      `;
      popupContainer.addEventListener('click', (e) => {
        if (e.target === popupContainer) this.showPopup = false;
      });
      document.body.appendChild(popupContainer);
    }
    const m = this.activeMatch;
    const tx = (k) => this._t(k);
    popupContainer.innerHTML = `
      <div style="background:#1a1f2e; padding:24px; border-radius:20px; width:90%; max-width:560px; max-height:85vh; overflow-y:auto; border:1px solid rgba(255,255,255,0.08); box-shadow:0 24px 64px rgba(0,0,0,0.6); margin:auto; color:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif;">
        <h3 style="margin:0 0 20px; font-size:22px; font-weight:800; letter-spacing:-0.02em; background:linear-gradient(135deg,#6366f1,#ec4899); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">${tx('popup.match_details')}</h3>
        <div style="display:flex; justify-content:center; align-items:center; gap:18px; margin-bottom:24px;">
          <img style="width:64px; height:64px; object-fit:contain;" src="${m.home_logo}" alt="${m.home_team}" />
          <div style="text-align:center;">
            <div style="font-size:38px; font-weight:900; letter-spacing:-0.04em; line-height:1;">${m.home_score ?? '-'} <span style="opacity:0.4;">-</span> ${m.away_score ?? '-'}</div>
            <div style="font-size:12px; color:#94a3b8; margin-top:8px; font-weight:600;">${m.clock ?? m.status ?? ''}</div>
          </div>
          <img style="width:64px; height:64px; object-fit:contain;" src="${m.away_logo}" alt="${m.away_team}" />
        </div>
        <p style="text-align:center; color:#cbd5e1; font-size:14px; margin:0 0 20px;"><strong>${m.home_team}</strong> vs <strong>${m.away_team}</strong></p>
        <div id="matches-events-container"></div>
        <button id="popup-close-btn" style="background:linear-gradient(135deg,#6366f1,#ec4899); color:white; padding:12px 20px; border:none; border-radius:12px; cursor:pointer; margin-top:20px; font-weight:800; width:100%; font-size:14px;">${tx('generic.close')}</button>
      </div>
    `;
    const closeBtn = popupContainer.querySelector('#popup-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => { this.showPopup = false; });
    const eventsContainer = popupContainer.querySelector('#matches-events-container');
    const { goals, yellowCards, redCards } = this.separateEvents(m.match_details || []);
    const renderGroup = (title, items, color) => {
      if (!items.length) return '';
      return `<div style="margin-bottom:14px; padding:14px; background:${color.bg}; border-left:3px solid ${color.border}; border-radius:10px;">
        <h5 style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:${color.border}; font-weight:800;">${title}</h5>
        <ul style="margin:0; padding-left:18px; font-size:13px; color:#cbd5e1;">${items.map(i => `<li style="margin:4px 0;">${i}</li>`).join('')}</ul>
      </div>`;
    };
    let html = '';
    html += renderGroup(tx('event.goal'), goals, { bg: 'rgba(99,102,241,0.1)', border: '#6366f1' });
    html += renderGroup(tx('event.yellow_card'), yellowCards, { bg: 'rgba(245,158,11,0.1)', border: '#f59e0b' });
    html += renderGroup(tx('event.red_card'), redCards, { bg: 'rgba(239,68,68,0.1)', border: '#ef4444' });
    eventsContainer.innerHTML = html || `<p style="text-align:center; color:#94a3b8; font-size:13px;">${tx('popup.no_events')}</p>`;
  }

  static get styles() {
    return css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
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
      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(236,72,153,0.10), transparent 50%);
        pointer-events: none;
        z-index: 0;
      }
      .matches-header {
        position: relative;
        z-index: 1;
        display: flex; align-items: center; gap: 14px;
        padding: 16px 16px 14px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .matches-header::after {
        content: '';
        position: absolute;
        left: 14px; right: 14px; bottom: -1px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--cl-accent), transparent);
        opacity: 0.4;
      }
      .league-logo {
        width: 42px; height: 42px;
        object-fit: contain;
        filter: drop-shadow(0 2px 8px rgba(99,102,241,0.3));
      }
      .league-info {
        flex: 1;
        min-width: 0;
      }
      .league-name {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .league-dates {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-weight: 500;
      }
      .live-counter {
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.06em;
        box-shadow: 0 2px 12px var(--cl-live-glow);
      }
      .scroll-content {
        position: relative;
        z-index: 1;
        overflow-y: auto;
        padding: 4px 4px 12px;
      }
      .day-divider {
        padding: 12px 12px 4px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--secondary-text-color);
        font-weight: 800;
        display: flex; align-items: center; gap: 8px;
      }
      .day-divider::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }
      .day-divider.today { color: var(--cl-accent); }
      .day-divider.today::after {
        background: linear-gradient(90deg, var(--cl-accent), transparent);
        opacity: 0.4;
      }

      .match-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 4px;
        position: relative;
      }
      .match-row:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .match-row.live {
        background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%);
        animation: live-row-glow 3s ease-in-out infinite;
      }
      .match-row.live::before {
        content: '';
        position: absolute;
        left: -2px; top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 70%;
        background: linear-gradient(180deg, var(--cl-live), #f97316);
        border-radius: 0 4px 4px 0;
        box-shadow: 0 0 12px var(--cl-live-glow);
      }
      @keyframes live-row-glow {
        0%, 100% { background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%); }
        50% { background: linear-gradient(90deg, rgba(239,68,68,0.18), rgba(239,68,68,0.05) 60%); }
      }
      .match-row.goal-pulse {
        animation: goal-pulse 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes goal-pulse {
        0%   { box-shadow: none; transform: scale(1); }
        20%  { box-shadow: 0 0 0 3px var(--cl-gold), 0 0 24px var(--cl-gold); transform: scale(1.02); }
        100% { box-shadow: none; transform: scale(1); }
      }
      .match-row.card-pulse {
        animation: card-pulse-row 1s ease-out;
      }
      @keyframes card-pulse-row {
        0%   { box-shadow: none; }
        30%  { box-shadow: 0 0 0 2px #f59e0b; }
        100% { box-shadow: none; }
      }

      .match-time {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        min-width: 44px;
        text-align: center;
        padding: 6px 8px;
        background: var(--cl-card-2);
        border-radius: 8px;
      }
      .match-time.live-time {
        background: rgba(239,68,68,0.15);
        color: var(--cl-live);
      }
      .match-time.ft {
        background: rgba(16,185,129,0.12);
        color: var(--cl-green);
      }
      .match-teams {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .match-team {
        display: flex; align-items: center; gap: 10px;
      }
      .match-team img { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .match-team .name {
        font-size: 13px;
        font-weight: 600;
        flex: 1;
        letter-spacing: -0.01em;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .match-team .name.winner { font-weight: 800; }
      .match-team .name.loser { color: var(--secondary-text-color); }
      .match-team .score {
        font-size: 14px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 22px;
        text-align: right;
        color: var(--primary-text-color);
      }
      .match-team .score.winner { color: var(--cl-accent); }
      .match-team .score.loser { color: var(--secondary-text-color); opacity: 0.6; }
      .row-extras {
        display: flex;
        gap: 6px;
        margin-top: 4px;
      }
      .tv-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 7px;
        background: rgba(99,102,241,0.12);
        border: 1px solid rgba(99,102,241,0.25);
        border-radius: 999px;
        font-size: 9px;
        font-weight: 700;
        color: var(--cl-accent);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .tv-chip svg { width: 10px; height: 10px; }
      .match-status-icon {
        color: var(--secondary-text-color);
        font-size: 18px;
        opacity: 0.5;
        transition: all 0.2s;
      }
      .match-row:hover .match-status-icon {
        color: var(--cl-accent);
        opacity: 1;
        transform: translateX(3px);
      }

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
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
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

customElements.define("calcio-live-matches", CalcioLiveTodayMatchesCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'calcio-live-matches',
  name: 'Calcio Live Matches Card',
  description: 'Mostra le partite della settimana o del tuo Team',
});
