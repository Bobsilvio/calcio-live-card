import { LitElement, html, css } from 'lit';

class CalcioLiveTeamNextCardEditor extends LitElement {
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
        .filter((entityId) => entityId.startsWith('sensor.calciolive_next'))
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
          <h4>CalcioLive Sensor:</h4>
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
        </div>
      `;
    }
}

customElements.define('calcio-live-team-editor', CalcioLiveTeamNextCardEditor);
