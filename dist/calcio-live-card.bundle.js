/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},a=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",$=u.reactiveElementPolyfillSupport,v=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),x={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);o.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[v("elementProperties")]=new Map,b[v("finalized")]=new Map,$?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.0.4");const A=globalThis,w=A.trustedTypes,E=w?w.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,U=`<${P}>`,T=document,z=()=>T.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,M=/>/g,k=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,j=/^(?:script|style|textarea|title)$/i,B=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),V=B(1),W=(B(2),B(3),Symbol.for("lit-noChange")),F=Symbol.for("lit-nothing"),G=new WeakMap,q=T.createTreeWalker(T,129);function J(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=O;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===O?"!--"===l[1]?r=R:void 0!==l[1]?r=M:void 0!==l[2]?(j.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=k):void 0!==l[3]&&(r=k):r===k?">"===l[0]?(r=o??O,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?k:'"'===l[3]?L:I):r===L||r===I?r=k:r===R||r===M?r=O:(r=k,o=void 0);const d=r===k&&t[e+1].startsWith("/>")?" ":"";n+=r===O?i+U:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),q.nextNode(),a.push({type:2,index:++o});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i.o?.[s]:i.l;const n=D(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=o:i.l=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);q.currentNode=s;let o=q.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new st(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=q.nextNode(),n++)}return q.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),D(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Z(this,s[i+r],e,r),a===W&&(a=this._$AH[r]),n||=!D(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??F)===W)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=A.litHtmlPolyfillSupport;ot?.(K,X),(A.litHtmlVersions??=[]).push("3.2.0");class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new X(e.insertBefore(z(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return W}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-cannonieri",class extends nt{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:5,this.maxEventsTotal=t.max_events_total?t.max_events_total:10}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}render(){if(!this.hass||!this._config)return V``;const t=this._config.entity,e=this.hass.states[t];if(!e)return V`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.scorers||[],s=e.attributes.competition||{},o=e.attributes.season||{},n=this.maxEventsVisible,r=this.maxEventsTotal;return V`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
            <div class="competition-name">Cannonieri</div>
            <div class="season-dates">Stagione: ${this.formatDate(o.startDate)} - ${this.formatDate(o.endDate)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          <div class="scrollable-content">
            ${i.slice(0,r).map(((t,e)=>V`
              <div class="scorer ${e>=n?"hidden":""}">
                <img class="team-logo" src="${t.team.crest}" alt="${t.team.name}" />
                <div class="info">
                  <div class="player-name">${t.player.name} (${t.player.nationality})</div>
                  <div class="team-name">${t.team.name}</div>
                  <div class="goals">Goals: ${t.goals}</div>
                  <div class="played-matches">Partite giocate: ${t.playedMatches}</div>
                </div>
              </div>
            `))}
          </div>
        </div>
      </ha-card>
    `}static get styles(){return n`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .card-header {
        text-align: center;
        margin-bottom: 16px;
      }
      .competition-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      .competition-emblem {
        width: 80px;
        height: 80px;
        margin-bottom: 8px;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 4px;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .scorer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 48px;
        height: 48px;
        margin-right: 16px;
      }
      .info {
        display: flex;
        flex-direction: column;
        text-align: left;
        flex-grow: 1;
      }
      .player-name {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 4px;
      }
      .team-name {
        color: var(--secondary-text-color);
        font-size: 14px;
        margin-bottom: 4px;
      }
      .goals {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .played-matches {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 16px 0;
      }
      .scrollable-content {
        max-height: 300px;
        overflow-y: auto;
      }
      .hidden {
        display: none;
      }
    `}}),customElements.define("calcio-live-classifica",class extends nt{static get properties(){return{hass:{},_config:{}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t}getCardSize(){return 3}render(){if(!this.hass||!this._config)return V``;const t=this._config.entity,e=this.hass.states[t];if(!e)return V`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.standings[0].table||[],s=e.attributes.competition||{},o=e.attributes.season||{};return V`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
            <div class="competition-name">Classifica</div>
            <div class="season-dates">Stagione: ${this.formatDate(o.startDate)} - ${this.formatDate(o.endDate)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          <div class="table-container">
            <table>
              <thead>
                <tr>
                  <th style="width: 10%;">Pos</th>
                  <th style="width: 25%;">Squadra</th>
                  <th style="width: 10%;">Punti</th>
                  <th style="width: 8%;">V</th>
                  <th style="width: 8%;">P</th>
                  <th style="width: 8%;">S</th>
                  <th style="width: 8%;">GF</th>
                  <th style="width: 8%;">GS</th>
                  <th style="width: 10%;">+/-</th>
                </tr>
              </thead>
              <tbody>
                ${i.map((t=>V`
                  <tr>
                    <td>${t.position}</td>
                    <td>
                      <img class="team-crest" src="${t.team.crest}" alt="${t.team.shortName}" />
                      ${t.team.shortName}
                    </td>
                    <td>${t.points}</td>
                    <td>${t.won}</td>
                    <td>${t.draw}</td>
                    <td>${t.lost}</td>
                    <td>${t.goalsFor}</td>
                    <td>${t.goalsAgainst}</td>
                    <td>${t.goalDifference}</td>
                  </tr>
                `))}
              </tbody>
            </table>
          </div>
        </div>
      </ha-card>
    `}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}static get styles(){return n`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%; /* Utilizza il 100% della larghezza disponibile */
      }
      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centra il contenuto orizzontalmente */
        margin-bottom: 16px;
      }
      .competition-container {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centra il logo e il testo */
        text-align: center;  /* Centra il testo sotto il logo */
      }
      .competition-emblem {
        width: 80px; /* Usa le stesse dimensioni del logo */
        height: 80px;
        margin-bottom: 8px; /* Usa lo stesso margine del logo */
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em; /* Usa lo stesso stile del testo */
        margin-bottom: 4px;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .table-container {
        width: 100%;
        overflow-x: auto;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 16px;
      }
      th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid var(--divider-color);
        white-space: nowrap;
      }
      th {
        background-color: var(--primary-background-color);
        color: var(--primary-text-color);
      }
      td {
        vertical-align: middle;
        text-align: left;
      }
      .team-crest {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 16px 0;
      }
    `}}),customElements.define("calcio-live-competizioni",class extends nt{static get properties(){return{hass:{},_config:{}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t}getCardSize(){return 3}render(){if(!this.hass||!this._config)return V``;const t=this._config.entity,e=this.hass.states[t];if(!e)return V`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.competitions||[];return V`
      <ha-card>
        <div class="card-content">
          <h1>Competizioni</h1>
          ${i.map(((t,e)=>V`
            <div class="competition">
              <img class="competition-emblem" src="${t.emblem}" alt="${t.name}" />
              <div class="info">
                <div class="competition-name">${t.name}</div>
                <div class="competition-area">
                  <img class="country-flag" src="${t.area.flag}" alt="${t.area.name}" /> ${t.area.name}
                </div>
                <div class="current-season">Stagione attuale: ${t.currentSeason.startDate} - ${t.currentSeason.endDate}</div>
                <div class="current-matchday">Giornata attuale: ${t.currentSeason.currentMatchday}</div>
              </div>
            </div>
            ${e<i.length-1?V`<div class="separator"></div>`:""}
          `))}
        </div>
      </ha-card>
    `}static get styles(){return n`
      .card-content {
        padding: 16px;
      }
      .competition {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      .competition-emblem {
        width: 40px;
        height: 40px;
        margin-right: 16px;
      }
      .info {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
      }
      .competition-area {
        display: flex;
        align-items: center;
        color: var(--secondary-text-color);
      }
      .country-flag {
        width: 24px;
        height: 16px;
        margin-right: 8px;
      }
      .current-season,
      .current-matchday {
        margin-top: 4px;
        font-size: 14px;
      }
      .separator {
        height: 1px;
        background-color: #ddd;
        margin: 8px 0;
      }
    `}}),customElements.define("calcio-live-matches",class extends nt{static get properties(){return{hass:{},_config:{}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}render(){if(!this.hass||!this._config)return V``;const t=this._config.entity,e=this.hass.states[t];if(!e)return V`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.matches||[],s=e.attributes.competition||{},o=e.attributes.matchday||0,n=e.attributes.result_set||{},r=n.first||"",a=n.last||"";return V`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
            <div class="competition-name">Giornata ${o}</div>
            <div class="season-dates">Stagione: ${this.formatDate(r)} - ${this.formatDate(a)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          ${i.map(((t,e)=>V`
            <div class="match">
              <img class="team-logo" src="${t.homeTeam.crest}" alt="${t.homeTeam.name}" />
              <div class="match-info">
                <div class="team-name">${t.homeTeam.name}</div>
                <div class="match-date">${new Date(t.utcDate).toLocaleDateString("it-IT")}</div>
                <div class="team-name">${t.awayTeam.name}</div>
              </div>
              <img class="team-logo" src="${t.awayTeam.crest}" alt="${t.awayTeam.name}" />
            </div>
            ${e<i.length-1?V`<div class="separator"></div>`:""}
          `))}
        </div>
      </ha-card>
    `}static get styles(){return n`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%; /* Utilizza il 100% della larghezza disponibile */
      }
      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centra il contenuto orizzontalmente */
        margin-bottom: 16px;
      }
      .competition-container {
        display: flex;
        flex-direction: column;
        align-items: center; /* Centra il logo e il testo */
        text-align: center;  /* Centra il testo sotto il logo */
      }
      .competition-emblem {
        width: 80px; /* Usa le stesse dimensioni del logo */
        height: 80px;
        margin-bottom: 8px; /* Usa lo stesso margine del logo */
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em; /* Usa lo stesso stile del testo */
        margin-bottom: 4px;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
        margin-bottom: 8px; /* Riduci il margine inferiore per allineare il separatore */
      }
      .card-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .team-logo {
        width: 80px;
        height: 80px;
      }
      .match-info {
        flex: 1;
        text-align: center;
      }
      .team-name {
        font-weight: bold;
        font-size: 1em;
        margin: 4px 0;
      }
      .match-date {
        font-size: 0.9em;
        color: var(--secondary-text-color);
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 8px 0; /* Riduci il margine superiore per allineare il separatore */
      }
    `}}),console.info("%c Calcio Live - 1.0.0","color: #ef5350; font-weight: 700;")})();