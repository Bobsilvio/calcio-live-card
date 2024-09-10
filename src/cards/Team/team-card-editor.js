import { LitElement, html, css } from "lit-element";

class CalcioLiveTeamMatchesEditor extends LitElement {
  static get properties() {
    return {
      hass: Object,
      _config: Object,
    };
  }

  setConfig(config) {
    this._config = config;
  }

  getEntityOptions() {
    return Object.keys(this.hass.states)
      .filter(e => e.startsWith('sensor.'))  // Filtro per entità che iniziano con 'sensor.'
      .map(e => ({ value: e, name: this.hass.states[e].attributes.friendly_name || e }));
  }

  _valueChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    if (this._config[target.configValue] === target.value) {
      return;
    }

    const newConfig = { ...this._config };
    newConfig[target.configValue] = target.value;

    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: newConfig } }));
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    const entityOptions = this.getEntityOptions();

    return html`
      <div class="card-config">
        <!-- Dropdown per selezionare l'entità -->
        <paper-dropdown-menu label="Seleziona Entità" @value-changed="${this._valueChanged}" .configValue=${"entity"}>
          <paper-listbox slot="dropdown-content" selected="${this._config.entity}" attr-for-selected="value">
            ${entityOptions.map(e => html`<paper-item value="${e.value}">${e.name}</paper-item>`)}
          </paper-listbox>
        </paper-dropdown-menu>

        <!-- Input per il numero massimo di eventi visibili -->
        <paper-input
          label="Max Eventi Visibili"
          type="number"
          .value="${this._config.max_events_visible || ''}"
          .configValue="${'max_events_visible'}"
          @value-changed="${this._valueChanged}">
        </paper-input>

        <!-- Input per il numero massimo di eventi totali -->
        <paper-input
          label="Max Eventi Totali"
          type="number"
          .value="${this._config.max_events_total || ''}"
          .configValue="${'max_events_total'}"
          @value-changed="${this._valueChanged}">
        </paper-input>
      </div>
    `;
  }
}

customElements.define("calcio-live-team-matches-editor", CalcioLiveTeamMatchesEditor);
