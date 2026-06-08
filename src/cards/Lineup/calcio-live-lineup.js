import { LitElement, html, css } from "lit-element";
import { t, resolveLang } from "../../i18n.js";
import { skinStyles, applySkin } from "../../skins.js";

class CalcioLiveLineupCard extends LitElement {
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
  }

  _t(key, vars) {
    return t(key, resolveLang(this.hass, this._config), vars);
  }

  getCardSize() { return 6; }
  static getConfigElement() { return document.createElement("calcio-live-lineup-editor"); }
  static getStubConfig() {
    return { entity: "sensor.calciolive_next", hide_header: false };
  }

  _starters(players) {
    return (players || []).filter(p => p.starter === true);
  }
  _bench(players) {
    return (players || []).filter(p => !p.starter);
  }

  _renderPlayer(p) {
    const init = (p.short_name || p.name || '').split(' ').map(s => s[0]).slice(0,2).join('');
    return html`
      <div class="player" title="${p.name}">
        <div class="player-card">
          ${p.headshot
            ? html`<img class="player-img" src="${p.headshot}" alt="${p.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
                   <div class="player-init" style="display:none;">${init}</div>`
            : html`<div class="player-init">${init}</div>`
          }
          ${p.jersey ? html`<div class="player-num">${p.jersey}</div>` : ''}
        </div>
        <div class="player-name">${p.short_name || p.name}</div>
        ${p.position ? html`<div class="player-pos">${p.position}</div>` : ''}
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    const stateObj = this.hass.states[this._config.entity];
    if (!stateObj) return html`<ha-card class="empty">${this._t('generic.unknown_entity')}: ${this._config.entity}</ha-card>`;

    const matches = stateObj.attributes.matches || [];
    if (matches.length === 0) return html`<ha-card class="empty">${this._t('generic.no_match')}</ha-card>`;

    const m = matches[0];
    const lineupHome = m.lineup_home || stateObj.attributes.lineup_home || [];
    const lineupAway = m.lineup_away || stateObj.attributes.lineup_away || [];
    const formationHome = m.formation_home || stateObj.attributes.formation_home || '';
    const formationAway = m.formation_away || stateObj.attributes.formation_away || '';

    if (lineupHome.length === 0 && lineupAway.length === 0) {
      return html`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">👥</div>
            <div class="empty-title">${this._t('lineup.empty.title')}</div>
            <div class="empty-sub">${this._t('lineup.empty.sub')}</div>
          </div>
        </ha-card>
      `;
    }

    const startersHome = this._starters(lineupHome);
    const benchHome = this._bench(lineupHome);
    const startersAway = this._starters(lineupAway);
    const benchAway = this._bench(lineupAway);

    return html`
      <ha-card>
        <div class="hero-bg"></div>
        ${!this.hideHeader ? html`
          <div class="lineup-header">
            <div class="header-icon">👥</div>
            <div class="header-text">
              <div class="title">${this._t('card.lineup')}</div>
              <div class="subtitle">${m.home_team} vs ${m.away_team}</div>
            </div>
          </div>
        ` : ''}

        <div class="teams-row">
          <div class="team-block">
            <div class="team-block-head">
              <img src="${m.home_logo}" alt="${m.home_team}" />
              <div class="team-block-info">
                <div class="team-block-name">${m.home_team}</div>
                ${formationHome ? html`<div class="formation">${formationHome}</div>` : ''}
              </div>
            </div>
            <div class="players-grid">
              ${startersHome.map(p => this._renderPlayer(p))}
            </div>
            ${benchHome.length ? html`
              <div class="bench-label">${this._t('lineup.bench')}</div>
              <div class="players-grid bench">
                ${benchHome.map(p => this._renderPlayer(p))}
              </div>
            ` : ''}
          </div>

          <div class="team-block">
            <div class="team-block-head">
              <img src="${m.away_logo}" alt="${m.away_team}" />
              <div class="team-block-info">
                <div class="team-block-name">${m.away_team}</div>
                ${formationAway ? html`<div class="formation">${formationAway}</div>` : ''}
              </div>
            </div>
            <div class="players-grid">
              ${startersAway.map(p => this._renderPlayer(p))}
            </div>
            ${benchAway.length ? html`
              <div class="bench-label">${this._t('lineup.bench')}</div>
              <div class="players-grid bench">
                ${benchAway.map(p => this._renderPlayer(p))}
              </div>
            ` : ''}
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return [skinStyles, css`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
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
          radial-gradient(ellipse at 100% 100%, rgba(16,185,129,0.10), transparent 50%);
        pointer-events: none;
      }

      .lineup-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), #10b981);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 16px rgba(99,102,241,0.4);
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--cl-text);
      }
      .header-text .subtitle {
        font-size: 11px;
        color: var(--cl-text-2);
        margin-top: 2px;
        font-weight: 600;
      }

      .teams-row {
        position: relative; z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
      }
      .team-block {
        padding: 16px 12px;
        border-right: 1px solid var(--cl-divider);
      }
      .team-block:last-child { border-right: none; }
      .team-block-head {
        display: flex; align-items: center; gap: 10px;
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .team-block-head img {
        width: 32px; height: 32px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-block-info { min-width: 0; flex: 1; }
      .team-block-name {
        font-size: 13px; font-weight: 800;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        color: var(--cl-text);
      }
      .formation {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--cl-accent);
        margin-top: 2px;
        font-variant-numeric: tabular-nums;
      }
      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
        gap: 10px;
      }
      .players-grid.bench { opacity: 0.85; }
      .player {
        display: flex; flex-direction: column;
        align-items: center;
        gap: 4px;
        text-align: center;
      }
      .player-card {
        position: relative;
        width: 48px; height: 48px;
      }
      .player-img {
        width: 48px; height: 48px;
        border-radius: 50%;
        object-fit: cover;
        background: var(--cl-card-2);
        border: 2px solid var(--cl-glass-border);
      }
      .player-init {
        width: 48px; height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px; font-weight: 800;
        letter-spacing: -0.02em;
      }
      .player-num {
        position: absolute;
        bottom: -3px; right: -4px;
        background: var(--cl-num-bg);
        color: white;
        border: 2px solid var(--cl-bg);
        font-size: 9px; font-weight: 800;
        min-width: 18px; height: 18px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-variant-numeric: tabular-nums;
        padding: 0 3px;
      }
      .player-name {
        font-size: 10px; font-weight: 700;
        line-height: 1.1;
        max-width: 64px;
        color: var(--cl-text);
        word-wrap: break-word;
        text-align: center;
      }
      .player-pos {
        font-size: 8px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--cl-text-2);
        background: var(--cl-card-2);
        padding: 1px 5px;
        border-radius: 4px;
      }
      .bench-label {
        margin-top: 16px; margin-bottom: 8px;
        font-size: 10px; font-weight: 800;
        text-transform: uppercase; letter-spacing: 0.15em;
        color: var(--cl-text-2);
        display: flex; align-items: center; gap: 8px;
      }
      .bench-label::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }

      @media (max-width: 480px) {
        .teams-row { grid-template-columns: 1fr; }
        .team-block { border-right: none; border-bottom: 1px solid var(--cl-divider); }
        .team-block:last-child { border-bottom: none; }
      }
    `];
  }
}

customElements.define("calcio-live-lineup", CalcioLiveLineupCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: 'calcio-live-lineup',
  name: 'Calcio Live Lineup Card',
  description: 'Mostra le formazioni di entrambe le squadre della prossima/attuale partita',
});
