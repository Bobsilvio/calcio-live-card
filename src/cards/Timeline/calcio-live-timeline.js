import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";

class CalcioLiveTimelineCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: {},
    };
  }

  setConfig(config) {
    if (!config.entity) throw new Error("Entity required");
    this._config = config;
    applySkin(this, config);
    this.hideHeader = config.hide_header === true;
    this.reverseOrder = config.reverse_order === true;
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  getCardSize() { return 5; }
  static getConfigElement() { return document.createElement("calcio-live-timeline-editor"); }
  static getStubConfig() {
    return { entity: "sensor.calciolive_next", hide_header: false, reverse_order: true };
  }

  _eventMeta(ev) {
    const ty = (ev.type || '').toLowerCase();
    const text = (ev.type_text || '').toLowerCase();
    if (text.includes('kickoff') || ty === 'kickoff') return { icon: '⚽', label: this._t('status.kickoff'), cls: 'meta' };
    if (text.includes('halftime') || text.includes('intervallo')) return { icon: '⏸', label: this._t('status.halftime'), cls: 'meta' };
    if (text.includes('start 2nd') || text.includes('secondo tempo')) return { icon: '▶', label: this._t('status.second_half'), cls: 'meta' };
    if (text.includes('end regular') || text.includes('full time')) return { icon: '🏁', label: this._t('status.end'), cls: 'meta' };
    if (ty === 'goal' || ev.scoring_play) return { icon: '⚽', label: this._t('event.goal'), cls: 'goal' };
    if (text.includes('penalty')) return { icon: '⚽', label: this._t('timeline.penalty'), cls: 'goal' };
    if (text.includes('yellow card')) return { icon: '🟨', label: this._t('event.yellow_card'), cls: 'yellow' };
    if (text.includes('red card')) return { icon: '🟥', label: this._t('event.red_card'), cls: 'red' };
    if (ty === 'substitution' || text.includes('substitution')) return { icon: '🔄', label: this._t('event.substitution'), cls: 'sub' };
    if (text.includes('var')) return { icon: '📺', label: this._t('event.var'), cls: 'meta' };
    return { icon: '·', label: ev.type_text || this._t('timeline.event'), cls: 'meta' };
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</ha-card>`;

    const matches = stateObj.attributes.matches || [];
    if (matches.length === 0) return html`<ha-card class="empty">${this._t('generic.no_match')}</ha-card>`;
    const m = matches[0];
    const events = m.key_events || stateObj.attributes.key_events || [];

    if (events.length === 0) {
      return html`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">⏱</div>
            <div class="empty-title">${this._t('timeline.empty.title')}</div>
            <div class="empty-sub">${this._t('timeline.empty.sub')}</div>
          </div>
        </ha-card>
      `;
    }

    const orderedEvents = this.reverseOrder ? [...events].reverse() : events;

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        ${!this.hideHeader ? html`
          <div class="tl-header">
            <div class="header-icon">⏱</div>
            <div class="header-text">
              <div class="title">${this._t('card.timeline')}</div>
              <div class="subtitle">
                <img class="mini-logo" src="${m.home_logo}" alt="" />
                <span>${m.home_score ?? '-'} - ${m.away_score ?? '-'}</span>
                <img class="mini-logo" src="${m.away_logo}" alt="" />
              </div>
            </div>
          </div>
        ` : ''}

        <div class="tl-body">
          ${orderedEvents.map(ev => {
            const meta = this._eventMeta(ev);
            const isHome = m.home_team && ev.team === m.home_team;
            const isAway = m.away_team && ev.team === m.away_team;
            const side = isHome ? 'home' : (isAway ? 'away' : 'meta');
            const athletes = (ev.athletes || []).filter(Boolean);
            return html`
              <div class="tl-row side-${side} type-${meta.cls}">
                <div class="tl-time">${ev.clock || ''}</div>
                <div class="tl-axis">
                  <div class="tl-dot ${meta.cls}">${meta.icon}</div>
                </div>
                <div class="tl-card">
                  <div class="tl-card-head">
                    <span class="tl-label">${meta.label}</span>
                    ${ev.team ? html`<span class="tl-team">${ev.team}</span>` : ''}
                  </div>
                  ${athletes.length ? html`
                    <div class="tl-athletes">${athletes.join(', ')}</div>
                  ` : ''}
                  ${ev.short_text ? html`<div class="tl-text">${ev.short_text}</div>` : ''}
                </div>
              </div>
            `;
          })}
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
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
        background: var(--cl-bg);
        color: var(--cl-text);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--cl-text-2);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--cl-text); }
      .empty-sub { font-size: 12px; color: var(--cl-text-2); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.10), transparent 50%);
        pointer-events: none;
      }

      .tl-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-gold));
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--cl-text);
      }
      .header-text .subtitle {
        display: flex; align-items: center; gap: 6px;
        font-size: 12px;
        color: var(--cl-text-2);
        margin-top: 2px;
        font-weight: 700;
      }
      .mini-logo { width: 16px; height: 16px; object-fit: contain; }

      .tl-body {
        position: relative; z-index: 1;
        padding: 16px 12px 20px;
      }
      .tl-row {
        display: grid;
        grid-template-columns: 44px 32px 1fr;
        gap: 10px;
        align-items: flex-start;
        position: relative;
      }
      .tl-row + .tl-row { margin-top: 4px; }
      .tl-time {
        text-align: right;
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-text-2);
        font-variant-numeric: tabular-nums;
        padding: 8px 0;
      }
      .tl-axis {
        position: relative;
        display: flex; justify-content: center;
        padding: 4px 0;
      }
      .tl-axis::before {
        content: '';
        position: absolute;
        top: 0; bottom: 0;
        left: 50%;
        width: 2px;
        background: var(--cl-divider);
        transform: translateX(-50%);
      }
      .tl-row:first-child .tl-axis::before { top: 50%; }
      .tl-row:last-child .tl-axis::before { bottom: 50%; }
      .tl-dot {
        position: relative;
        z-index: 1;
        width: 26px; height: 26px;
        border-radius: 50%;
        background: var(--cl-bg);
        border: 2px solid var(--cl-divider);
        display: flex; align-items: center; justify-content: center;
        font-size: 12px;
      }
      .tl-dot.goal {
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        border-color: var(--cl-gold);
        box-shadow: 0 0 0 4px rgba(251,191,36,0.2);
      }
      .tl-dot.yellow {
        background: rgba(245,158,11,0.18);
        border-color: #f59e0b;
      }
      .tl-dot.red {
        background: rgba(239,68,68,0.18);
        border-color: var(--cl-live);
      }
      .tl-dot.sub {
        background: rgba(99,102,241,0.18);
        border-color: var(--cl-accent);
      }
      .tl-dot.meta {
        background: var(--cl-card-2);
      }
      .tl-card {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 12px;
        padding: 8px 12px;
      }
      .tl-row.type-goal .tl-card {
        background: linear-gradient(135deg, rgba(251,191,36,0.10), rgba(251,191,36,0.02));
        border-color: rgba(251,191,36,0.3);
      }
      .tl-row.type-red .tl-card {
        border-color: rgba(239,68,68,0.3);
      }
      .tl-row.type-yellow .tl-card {
        border-color: rgba(245,158,11,0.3);
      }
      .tl-card-head {
        display: flex; justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .tl-label {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--cl-text);
      }
      .tl-row.type-goal .tl-label { color: var(--cl-gold); }
      .tl-row.type-yellow .tl-label { color: #f59e0b; }
      .tl-row.type-red .tl-label { color: var(--cl-live); }
      .tl-row.type-sub .tl-label { color: var(--cl-accent); }
      .tl-team {
        font-size: 10px;
        font-weight: 700;
        color: var(--cl-text-2);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
      }
      .tl-athletes {
        font-size: 13px;
        font-weight: 700;
        color: var(--cl-text);
        margin-top: 3px;
        line-height: 1.3;
      }
      .tl-text {
        font-size: 11px;
        font-weight: 500;
        color: var(--cl-text-2);
        margin-top: 3px;
        line-height: 1.4;
      }
    `];
  }
}

customElements.define("calcio-live-timeline", CalcioLiveTimelineCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'calcio-live-timeline',
  name: 'Calcio Live Timeline Card',
  description: 'Cronologia minuto-per-minuto degli eventi della partita',
});
