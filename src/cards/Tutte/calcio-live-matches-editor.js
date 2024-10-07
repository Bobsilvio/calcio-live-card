import { LitElement, html, css } from 'lit';

class CalcioLiveTodayMatchesEditor extends LitElement {
  static get properties() {
    return {
      _config: { type: Object },
      hass: { type: Object },
      entities: { type: Array },
    };
  }

  constructor() {
    super();
    this._entity = '';
    this.entities = [];
  }

  static get styles() {
    return css`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 20px; /* Spazio tra le opzioni */
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
      }
      ha-select {
        width: 100%; /* Larghezza piena per il campo dei sensori */
      }
      ha-textfield {
        width: 100%; /* Larghezza piena per i campi numerici */
      }
    `;
  }

  setConfig(config) {
    if (!config) {
      throw new Error('Invalid configuration');
    }
    this._config = { ...config };
    this._entity = this._config.entity || '';
  }

  get config() {
    return this._config;
  }

  updated(changedProperties) {
    if (changedProperties.has('hass')) {
      this._fetchEntities();
    }
    if (changedProperties.has('_config') && this._config && this._config.entity) {
      this._entity = this._config.entity;
    }
  }

  configChanged(newConfig) {
    const event = new CustomEvent('config-changed', {
      detail: { config: newConfig },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  _EntityChanged(ev) {
    if (!this._config) return;

    const newConfig = { ...this._config, entity: ev.target.value };
    this._entity = ev.target.value;

    this.configChanged(newConfig);
  }

  _fetchEntities() {
    if (this.hass) {
      this.entities = Object.keys(this.hass.states)
        .filter((entityId) => entityId.startsWith('sensor.calciolive_all'))
        .sort();
    }
  }
  
  _valueChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    const value = target.type === 'number' ? parseInt(target.value, 10) : (target.checked !== undefined ? target.checked : target.value);

    if (target.configValue) {
      const newConfig = { ...this._config, [target.configValue]: value };
      this.configChanged(newConfig);
    }
  }

  render() {
      if (!this._config || !this.hass) {
        return html``;
      }

      return html`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${'entity'}
              .value=${this._entity}
              @change=${(e) => this._EntityChanged(e, 'entity')}
              @closed=${(ev) => ev.stopPropagation()}
              >
              ${this.entities.map((entity) => {
                  return html`<ha-list-item .value=${entity}>${entity}</ha-list-item>`;
              })}
          </ha-select>
        
          <h3>Settings:</h3>
          <div class="option">
            <ha-switch
              .checked=${this._config.show_finished_matches !== false}
              @change=${this._valueChanged}
              .configValue=${'show_finished_matches'}
            >
            </ha-switch>
            <label>Show Finished Matches</label>
          </div>

          <div class="option">
            <ha-switch
              .checked=${this._config.hide_header === true}
              @change=${this._valueChanged}
              .configValue=${'hide_header'}
            >
            </ha-switch>
            <label>Hide Header</label>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Visible"
              type="number"
              .value=${this._config.max_events_visible || 5}
              @change=${this._valueChanged}
              .configValue=${'max_events_visible'}
            ></ha-textfield>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Total"
              type="number"
              .value=${this._config.max_events_total || 50}
              @change=${this._valueChanged}
              .configValue=${'max_events_total'}
            ></ha-textfield>
          </div>
          
          <h4>For work, 'Show Finished Matches' it must be enabled. </h4>
          <div class="option">
            <ha-textfield
              label="Hide Matches Older Than (Days)"
              type="number"
              .value=${this._config.hide_past_days || 0}
              @change=${this._valueChanged}
              .configValue=${'hide_past_days'}
            ></ha-textfield>
          </div>
        </div>
      `;
    }
}

customElements.define('calcio-live-matches-editor', CalcioLiveTodayMatchesEditor);
