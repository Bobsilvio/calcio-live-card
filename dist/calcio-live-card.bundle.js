/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class a{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(s,t,i)},o=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),a=t.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=e.cssText,i.appendChild(s)}},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:m,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",v=u.reactiveElementPolyfillSupport,$=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},x=(t,e)=>!l(t,e),y={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const n=s?.call(this);a.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...m(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s,this[s]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??x)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[$("elementProperties")]=new Map,b[$("finalized")]=new Map,v?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,A=w.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+C,P=`<${T}>`,U=document,z=()=>U.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,M="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,V=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,k=/"/g,j=/^(?:script|style|textarea|title)$/i,L=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=L(1),F=(L(2),L(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),G=new WeakMap,q=U.createTreeWalker(U,129);function J(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,n=0;const o=t.length-1,r=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let a,n=2===e?"<svg>":3===e?"<math>":"",o=O;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===O?"!--"===l[1]?o=H:void 0!==l[1]?o=R:void 0!==l[2]?(j.test(l[2])&&(a=RegExp("</"+l[2],"g")),o=V):void 0!==l[3]&&(o=V):o===V?">"===l[0]?(o=a??O,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?V:'"'===l[3]?k:I):o===k||o===I?o=V:o===H||o===R?o=O:(o=V,a=void 0);const d=o===V&&t[e+1].startsWith("/>")?" ":"";n+=o===O?i+P:c>=0?(s.push(r),i.slice(0,c)+S+i.slice(c)+C+d):i+C+(-2===c?e:d)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=K.createElement(l,i),q.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=q.nextNode())&&r.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=c[n++],i=s.getAttribute(t).split(C),o=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(C)&&(r.push({type:6,index:a}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),q.nextNode(),r.push({type:2,index:++a});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===T)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)r.push({type:7,index:a}),t+=C.length-1}a++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===F)return e;let a=void 0!==s?i.o?.[s]:i.l;const n=D(e)?void 0:e._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(t),a._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=a:i.l=a),void 0!==a&&(e=Z(t,a._$AS(t,e.values),a,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??U).importNode(e,!0);q.currentNode=s;let a=q.nextNode(),n=0,o=0,r=i[0];for(;void 0!==r;){if(n===r.index){let e;2===r.type?e=new X(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new st(a,this,t)),this._$AV.push(e),r=i[++o]}n!==r?.index&&(a=q.nextNode(),n++)}return q.currentNode=U,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),D(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const a=this.strings;let n=!1;if(void 0===a)t=Z(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==F,n&&(this._$AH=t);else{const s=t;let o,r;for(t=a[0],o=0;o<a.length-1;o++)r=Z(this,s[i+o],e,o),r===F&&(r=this._$AH[o]),n||=!D(r)||r!==this._$AH[o],r===W?t=W:t!==W&&(t+=(r??"")+a[o+1]),this._$AH[o]=r}n&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Y{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===F)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(K,X),(w.litHtmlVersions??=[]).push("3.2.0");class nt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let a=s._$litPart$;if(void 0===a){const t=i?.renderBefore??null;s._$litPart$=a=new X(e.insertBefore(z(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return F}}nt._$litElement$=!0,nt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:nt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:nt}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-cannonieri",class extends nt{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:3,this.maxEventsTotal=t.max_events_total?t.max_events_total:10}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.scorers||[],s=e.attributes.competition||{},a=e.attributes.season||{},n=this.maxEventsVisible,o=this.maxEventsTotal;return B`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
            <div class="competition-name">Cannonieri</div>
            <div class="season-dates">Stagione: ${this.formatDate(a.startDate)} - ${this.formatDate(a.endDate)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          ${i.slice(0,o).map(((t,e)=>B`
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
        ${i.length>n?B`
        <div class="scroll-content">
          ${i.slice(n,o).map((t=>B`
            <div class="scorer">
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
        `:""}
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
      .scroll-content {
        max-height: 200px;
        overflow-y: auto;
      }
      .hidden {
        display: none;
      }
    `}}),customElements.define("calcio-live-classifica",class extends nt{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10}getCardSize(){return 3}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.standings[0].table||[],s=e.attributes.competition||{},a=e.attributes.season||{},n=Math.min(this.maxTeamsVisible,i.length);return B`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
            <div class="competition-name">Classifica</div>
            <div class="season-dates">Stagione: ${this.formatDate(a.startDate)} - ${this.formatDate(a.endDate)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="card-content">
          <div class="table-container" style="max-height: ${50*n}px; overflow-y: auto;">
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
                ${i.map((t=>B`
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
        width: 100%;
      }
      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      .competition-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
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
    `}}),customElements.define("calcio-live-competizioni",class extends nt{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:3,this.maxEventsTotal=t.max_events_total?t.max_events_total:10}getCardSize(){return 3}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.competitions||[],s=Math.min(this.maxEventsVisible,i.length),a=Math.min(this.maxEventsTotal,i.length);return B`
      <ha-card>
        <div class="card-content">
          <h1>Competizioni</h1>
          <div class="scroll-content" style="max-height: ${100*s}px; overflow-y: auto;">
            ${i.slice(0,a).map(((t,e)=>B`
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
              ${e<i.length-1?B`<div class="separator"></div>`:""}
            `))}
          </div>
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
      .scroll-content {
        max-height: 300px;
        overflow-y: auto;
      }
    `}}),customElements.define("calcio-live-matches",class extends nt{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:3,this.maxEventsTotal=t.max_events_total?t.max_events_total:10}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.matches||[],s=e.attributes.competition||{},a=e.attributes.matchday||0,n=e.attributes.result_set||{},o=n.first||"",r=n.last||"",l=Math.min(this.maxEventsVisible,i.length),c=Math.min(this.maxEventsTotal,i.length);return B`
      <ha-card>
        <div class="card-header">
          <div class="competition-container">
            <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
            <div class="competition-name">Giornata ${a}</div>
            <div class="season-dates">Stagione: ${this.formatDate(o)} - ${this.formatDate(r)}</div>
          </div>
          <hr class="separator">
        </div>
        <div class="scroll-content" style="max-height: ${100*l}px; overflow-y: auto;">
          ${i.slice(0,c).map(((t,e)=>B`
            <div class="match">
              <img class="team-logo" src="${t.homeTeam.crest}" alt="${t.homeTeam.name}" />
              <div class="match-info">
                <div class="team-name">${t.homeTeam.name}</div>
                <div class="match-date">${new Date(t.utcDate).toLocaleDateString("it-IT")}</div>
                <div class="team-name">${t.awayTeam.name}</div>
              </div>
              <img class="team-logo" src="${t.awayTeam.crest}" alt="${t.awayTeam.name}" />
            </div>
            ${e<i.length-1?B`<div class="separator"></div>`:""}
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
      .scroll-content {
        max-height: 300px;
        overflow-y: auto;
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
    `}}),customElements.define("calcio-live-team-matches",class extends nt{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number},showFinishedMatches:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:3,this.maxEventsTotal=t.max_events_total?t.max_events_total:10,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches}static getConfigElement(){return document.createElement("calcio-live-team-matches-editor")}static getStubConfig(){return{max_events_visible:3,max_events_total:10,show_finished_matches:!0}}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.matches||[],s=e.attributes.first_match_date||"",a=e.attributes.last_match_date||"",n=Math.min(this.maxEventsVisible,i.length),o=Math.min(this.maxEventsTotal,i.length),r=i.filter((t=>this.showFinishedMatches||"FINISHED"!==t.status));return B`
      <ha-card>
        <div class="card-header">
          <img class="team-logo" src="${r.length?r[0].home_team_crest:""}" alt="${r.length?r[0].home_team:""}" />
          <div class="season-dates">
            Stagione: ${this.formatDate(s)} - ${this.formatDate(a)}
          </div>
        </div>
        <div class="scroll-content" style="max-height: ${100*n}px; overflow-y: auto;">
          ${r.slice(0,o).map((t=>B`
            <div class="match">
              <img class="team-logo" src="${t.home_team_crest}" alt="${t.home_team}" />
              <div class="match-info">
                <div class="team-name">${t.home_team} vs ${t.away_team}</div>
                <div class="match-date">
                  ${this.formatDate(t.utc_date)} 
                  ${"FINISHED"===t.status?B`<span class="match-result">${t.score_full_time.home} - ${t.score_full_time.away}</span>`:B`<span class="match-upcoming">${t.status}</span>`}
                </div>
              </div>
              <img class="team-logo" src="${t.away_team_crest}" alt="${t.away_team}" />
            </div>
          `))}
        </div>
      </ha-card>
    `}static get styles(){return n`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
      }
      .card-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 80px;
        height: 80px;
      }
      .season-dates {
        font-size: 14px;
        color: var(--secondary-text-color);
      }
      .scroll-content {
        overflow-y: auto;
      }
      .match {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }
      .match-info {
        flex: 1;
        text-align: center;
      }
      .team-name {
        font-weight: bold;
      }
      .match-date {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      .match-result {
        color: green;
        font-weight: bold;
      }
      .match-upcoming {
        color: orange;
        font-weight: bold;
      }
    `}}),customElements.define("calcio-live-team-matches-editor",class extends nt{static get properties(){return{hass:Object,_config:Object}}setConfig(t){this._config=t}getEntityOptions(){return Object.keys(this.hass.states).filter((t=>t.startsWith("sensor."))).map((t=>({value:t,name:this.hass.states[t].attributes.friendly_name||t})))}_valueChanged(t){if(!this._config)return;const e=t.target;if(this._config[e.configValue]===e.value)return;const i={...this._config};i[e.configValue]=e.value,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:i}}))}render(){if(!this.hass||!this._config)return B``;const t=this.getEntityOptions();return B`
      <div class="card-config">
        <!-- Dropdown per selezionare l'entità -->
        <paper-dropdown-menu label="Seleziona Entità" @value-changed="${this._valueChanged}" .configValue=${"entity"}>
          <paper-listbox slot="dropdown-content" selected="${this._config.entity}" attr-for-selected="value">
            ${t.map((t=>B`<paper-item value="${t.value}">${t.name}</paper-item>`))}
          </paper-listbox>
        </paper-dropdown-menu>

        <!-- Input per il numero massimo di eventi visibili -->
        <paper-input
          label="Max Eventi Visibili"
          type="number"
          .value="${this._config.max_events_visible||""}"
          .configValue="${"max_events_visible"}"
          @value-changed="${this._valueChanged}">
        </paper-input>

        <!-- Input per il numero massimo di eventi totali -->
        <paper-input
          label="Max Eventi Totali"
          type="number"
          .value="${this._config.max_events_total||""}"
          .configValue="${"max_events_total"}"
          @value-changed="${this._valueChanged}">
        </paper-input>
      </div>
    `}}),console.info("%c Calcio Live - 1.0.3","color: #ef5350; font-weight: 700;")})();