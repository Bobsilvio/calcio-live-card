import { LitElement, html, css } from 'lit';

class CalcioLiveBracketEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
      entities: { type: Array },
    };
  }

  constructor() { super(); this.entities = []; }

  static get styles() {
    return css`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select {
        width: 100%; padding: 10px 12px; font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
      .hint { font-size: 12px; color: var(--secondary-text-color); }
    `;
  }

  setConfig(config) {
    if (!config) throw new Error('Invalid configuration');
    this._config = { ...config };
  }
  get config() { return this._config; }

  updated(changedProperties) {
    if (changedProperties.has('hass')) this._fetchEntities();
  }

  _fireConfigChanged(newConfig) {
    this._config = newConfig;
    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: newConfig }, bubbles: true, composed: true,
    }));
    this.requestUpdate();
  }

  _entityChanged(ev) {
    if (!this._config) return;
    const value = ev.target.value;
    if (value === this._config.entity) return;
    this._fireConfigChanged({ ...this._config, entity: value });
  }

  _switchChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    if (!target.dataset || !target.dataset.configValue) return;
    const key = target.dataset.configValue;
    const value = target.checked;
    if (this._config[key] === value) return;
    this._fireConfigChanged({ ...this._config, [key]: value });
  }

  _selectChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    if (!target.dataset || !target.dataset.configValue) return;
    const key = target.dataset.configValue;
    const value = target.value;
    if (this._config[key] === value) return;
    this._fireConfigChanged({ ...this._config, [key]: value });
  }

  _fetchEntities() {
    if (!this.hass) return;
    this.entities = Object.keys(this.hass.states)
      .filter(id => id.startsWith('sensor.calciolive_bracket'))
      .sort();
  }

  render() {
    if (!this._config || !this.hass) return html``;
    const cur = this._config.entity || '';
    const inList = cur && this.entities.includes(cur);
    return html`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity (sensore bracket — calciolive_bracket_*)</label>
          <select @change=${this._entityChanged}>
            ${!inList ? html`<option value="${cur}" selected>${cur || '— seleziona —'}</option>` : ''}
            ${this.entities.map(e => html`<option value="${e}" ?selected=${e === cur}>${e}</option>`)}
          </select>
          <div class="hint" style="margin-top: 4px;">Disponibile per Champions, Europa, Conference, FIFA World Cup e altre coppe.</div>
        </div>

        <h3>Impostazioni</h3>
        <div>
          <label class="field-label">Style · Stile</label>
          <select data-config-value="style" @change=${this._selectChanged}>
            <option value="list" ?selected=${this._config.style !== 'tree'}>List · Lista (default)</option>
            <option value="tree" ?selected=${this._config.style === 'tree'}>Tree · Tabellone con coppa centrale</option>
          </select>
        </div>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${this._config.hide_header === true}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Compact (list mode: round in colonna)</label>
          <ha-switch
            .checked=${this._config.compact === true}
            data-config-value="compact"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Tree: include Playoffs · Includi spareggi</label>
          <ha-switch
            .checked=${this._config.tree_show_playoffs === true}
            data-config-value="tree_show_playoffs"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Skin</label>
          <select data-config-value="skin" @change=${this._selectChanged}>
            <option value="dark" ?selected=${(this._config.skin || 'dark') === 'dark'}>Dark</option>
            <option value="light" ?selected=${this._config.skin === 'light'}>Light</option>
          </select>
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${this._config.language === 'en'}>English</option>
            <option value="it" ?selected=${this._config.language === 'it'}>Italiano</option>
            <option value="fr" ?selected=${this._config.language === 'fr'}>Français</option>
            <option value="es" ?selected=${this._config.language === 'es'}>Español</option>
            <option value="nl" ?selected=${this._config.language === 'nl'}>Nederlands</option>
          </select>
        </div>
      </div>
    `;
  }
}

customElements.define('calcio-live-bracket-editor', CalcioLiveBracketEditor);
