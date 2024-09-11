/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class a{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(s,t,i)},r=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),a=t.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=e.cssText,i.appendChild(s)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:h,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:m,getPrototypeOf:p}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",v=u.reactiveElementPolyfillSupport,$=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!h(t,e),x={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&l(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=c(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);a.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...m(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s,this[s]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[$("elementProperties")]=new Map,b[$("finalized")]=new Map,v?.({ReactiveElement:b}),(u.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,A=w.trustedTypes,E=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+T,P=`<${C}>`,D=document,z=()=>D.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,R=/>/g,k=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,V=/"/g,L=/^(?:script|style|textarea|title)$/i,j=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=j(1),F=(j(2),j(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),q=new WeakMap,G=D.createTreeWalker(D,129);function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,o=0;const r=t.length-1,n=this.parts,[h,l]=((t,e)=>{const i=t.length-1,s=[];let a,o=2===e?"<svg>":3===e?"<math>":"",r=U;for(let e=0;e<i;e++){const i=t[e];let n,h,l=-1,c=0;for(;c<i.length&&(r.lastIndex=c,h=r.exec(i),null!==h);)c=r.lastIndex,r===U?"!--"===h[1]?r=O:void 0!==h[1]?r=R:void 0!==h[2]?(L.test(h[2])&&(a=RegExp("</"+h[2],"g")),r=k):void 0!==h[3]&&(r=k):r===k?">"===h[0]?(r=a??U,l=-1):void 0===h[1]?l=-2:(l=r.lastIndex-h[2].length,n=h[1],r=void 0===h[3]?k:'"'===h[3]?V:I):r===V||r===I?r=k:r===O||r===R?r=U:(r=k,a=void 0);const d=r===k&&t[e+1].startsWith("/>")?" ":"";o+=r===U?i+P:l>=0?(s.push(n),i.slice(0,l)+S+i.slice(l)+T+d):i+T+(-2===l?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=K.createElement(h,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&n.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[o++],i=s.getAttribute(t).split(T),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(T)&&(n.push({type:6,index:a}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(T),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),G.nextNode(),n.push({type:2,index:++a});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===C)n.push({type:2,index:a});else{let t=-1;for(;-1!==(t=s.data.indexOf(T,t+1));)n.push({type:7,index:a}),t+=T.length-1}a++}}static createElement(t,e){const i=D.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===F)return e;let a=void 0!==s?i.o?.[s]:i.l;const o=H(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=a:i.l=a),void 0!==a&&(e=Z(t,a._$AS(t,e.values),a,s)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??D).importNode(e,!0);G.currentNode=s;let a=G.nextNode(),o=0,r=0,n=i[0];for(;void 0!==n;){if(o===n.index){let e;2===n.type?e=new X(a,a.nextSibling,this,t):1===n.type?e=new n.ctor(a,n.name,n.strings,this,t):6===n.type&&(e=new st(a,this,t)),this._$AV.push(e),n=i[++r]}o!==n?.index&&(a=G.nextNode(),o++)}return G.currentNode=D,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),H(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==F&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(D.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const a=this.strings;let o=!1;if(void 0===a)t=Z(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==F,o&&(this._$AH=t);else{const s=t;let r,n;for(t=a[0],r=0;r<a.length-1;r++)n=Z(this,s[i+r],e,r),n===F&&(n=this._$AH[r]),o||=!H(n)||n!==this._$AH[r],n===W?t=W:t!==W&&(t+=(n??"")+a[r+1]),this._$AH[r]=n}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Y{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===F)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(K,X),(w.litHtmlVersions??=[]).push("3.2.0");class ot extends b{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let a=s._$litPart$;if(void 0===a){const t=i?.renderBefore??null;s._$litPart$=a=new X(e.insertBefore(z(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return F}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-cannonieri",class extends ot{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number},hideHeader:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:3,this.maxEventsTotal=t.max_events_total?t.max_events_total:10,this.hideHeader=t.hide_header||!1}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.scorers||[],s=e.attributes.competition||{},a=e.attributes.season||{},o=Math.min(this.maxEventsVisible,i.length),r=Math.min(this.maxEventsTotal,i.length),n=100*o;return B`
      <ha-card>
        ${this.hideHeader?B``:B`
              <div class="card-header">
                <div class="header-row">
                  <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
                  <div class="competition-details">
                    <div class="competition-name">Cannonieri</div>
                    <div class="season-dates">Stagione: ${this.formatDate(a.startDate)} - ${this.formatDate(a.endDate)}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <!-- Sezione scrollabile -->
        <div class="scroll-content" style="max-height: ${n}px; overflow-y: auto;">
          ${i.slice(0,r).map((t=>B`
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
      </ha-card>
    `}static get styles(){return o`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .card-header {
        margin-bottom: 2px;
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .competition-emblem {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
      .competition-details {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .scroll-content {
        overflow-y: auto;
      }
      .scorer {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 60px;
        height: 60px;
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
        margin: 2px 0;
      }
    `}}),customElements.define("calcio-live-classifica",class extends ot{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10,this.hideHeader=t.hide_header||!1}getCardSize(){return 3}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.standings[0].table||[],s=e.attributes.competition||{},a=e.attributes.season||{},o=Math.min(this.maxTeamsVisible,i.length);return B`
      <ha-card>
        ${this.hideHeader?B``:B`
              <div class="card-header">
                <div class="header-row">
                  <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
                  <div class="competition-details">
                    <div class="competition-name">Classifica</div>
                    <div class="season-dates">Stagione: ${this.formatDate(a.startDate)} - ${this.formatDate(a.endDate)}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="card-content">
          <div class="table-container" style="max-height: ${50*o}px; overflow-y: auto;">
            <table>
              <thead>
                <tr>
                  <th style="width: 6%;">Pos</th>
                  <th style="width: 24%;">Squadra</th>
                  <th style="width: 10%;">Punti</th>
                  <th style="width: 6%;">V</th>
                  <th style="width: 6%;">P</th>
                  <th style="width: 6%;">S</th>
                  <th style="width: 6%;">GF</th>
                  <th style="width: 6%;">GS</th>
                  <th style="width: 6%;">+/-</th>
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
    `}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}static get styles(){return o`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .card-header {
        margin-bottom: 2px;
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .competition-emblem {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
      .competition-details {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em;
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
        margin-top: 2px; 
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
        margin: 2px 0;
      }
    `}}),customElements.define("calcio-live-competizioni",class extends ot{static get properties(){return{hass:{},_config:{},maxCompetitionsVisible:{type:Number},maxCompetitionsTotal:{type:Number}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxCompetitionsVisible=t.max_competitions_visible?t.max_competitions_visible:5,this.maxCompetitionsTotal=t.max_competitions_total?t.max_competitions_total:10}getCardSize(){return 3}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.competitions||[],s=Math.min(this.maxCompetitionsTotal,i.length),a=Math.min(this.maxCompetitionsVisible,s);return B`
      <ha-card>
        <div class="card-content" style="max-height: ${120*a}px; overflow-y: auto;">
          <h1>Competizioni</h1>
          ${i.slice(0,s).map(((t,e)=>B`
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
            ${e<s-1?B`<div class="separator"></div>`:""}
          `))}
        </div>
      </ha-card>
    `}static get styles(){return o`
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
    `}}),customElements.define("calcio-live-matches",class extends ot{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number},hideHeader:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:3,this.maxEventsTotal=t.max_events_total?t.max_events_total:10,this.hideHeader=t.hide_header||!1}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.matches||[],s=e.attributes.competition||{},a=e.attributes.matchday||0,o=e.attributes.result_set||{},r=o.first||"",n=o.last||"",h=Math.min(this.maxEventsVisible,i.length),l=Math.min(this.maxEventsTotal,i.length),c=90*h;return B`
      <ha-card>
        ${this.hideHeader?B``:B`
              <div class="card-header">
                <div class="header-row">
                  <img class="competition-emblem" src="${s.emblem}" alt="${s.name}" />
                  <div class="competition-details">
                    <div class="competition-name">Giornata ${a}</div>
                    <div class="season-dates">Stagione: ${this.formatDate(r)} - ${this.formatDate(n)}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <!-- Imposta max-height esatto per evitare che parte della sesta partita venga mostrata -->
        <div class="scroll-content" style="max-height: ${c}px; overflow-y: auto;">
          ${i.slice(0,l).map(((t,e)=>B`
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
    `}static get styles(){return o`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .card-header {
        margin-bottom: 2px;
      }
      .header-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      .competition-emblem {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
      .competition-details {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.2em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .scroll-content {
        overflow-y: auto;
      }
      .match {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
      }
      .team-logo {
        width: 65px;
        height: 65px;
      }
      .match-info {
        flex: 1;
        text-align: center;
      }
      .team-name {
        font-weight: bold;
        font-size: 16px;
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
        margin: 8px 0;
      }
    `}}),customElements.define("calcio-live-team-matches",class extends ot{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number},showFinishedMatches:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:3,this.maxEventsTotal=t.max_events_total?t.max_events_total:10,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches}getCardSize(){return 3}formatDate(t){return new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(new Date(t))}findMainTeam(t){const e={};t.slice(0,3).forEach((t=>{const i=t.home_team,s=t.away_team;e[i]=(e[i]||0)+1,e[s]=(e[s]||0)+1}));let i=Object.keys(e).reduce(((t,i)=>e[t]>e[i]?t:i));return i}findTeamCrest(t,e){const i=t.find((t=>t.home_team===e||t.away_team===e));return i?i.home_team===e?i.home_team_crest:i.away_team_crest:""}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity,e=this.hass.states[t];if(!e)return B`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.matches||[],s=e.attributes.first_match_date||"",a=e.attributes.last_match_date||"",o=e.attributes.wins||0,r=e.attributes.losses||0,n=e.attributes.draws||0,h=i.filter((t=>this.showFinishedMatches||"FINISHED"!==t.status)),l=Math.min(this.maxEventsTotal,h.length),c=h.slice(0,l),d=95*this.maxEventsVisible;return B`
      <ha-card>
        <!-- Logo e nome della squadra che appare più spesso -->
        <div class="team-header">
          <img class="team-logo" src="${this.findTeamCrest(i,this.findMainTeam(h))}" alt="${this.findMainTeam(h)}" />
          <div class="team-info">
            <div class="team-name">${this.findMainTeam(h)}</div>
            <div class="team-stats">
              Vittorie: ${o} | Pareggi: ${n} | Sconfitte: ${r}
            </div>
            <div class="season-dates">
              Stagione: ${this.formatDate(s)} - ${this.formatDate(a)}
            </div>
          </div>
        </div>
        <hr /> <!-- Linea separatrice sotto le informazioni della stagione -->

        <!-- Lista delle partite con scroll -->
        <div class="scroll-content" style="max-height: ${d}px; overflow-y: auto;">
          ${c.map((t=>B`
            <div>
              <div class="match">
                <img class="team-logo" src="${t.home_team_crest}" alt="${t.home_team}" />
                <div class="match-info">
                  <div class="team-name">${t.home_team}</div>
                  <div class="match-date">
                    ${this.formatDate(t.utc_date)} 
                    ${"FINISHED"===t.status?B`<span class="match-result">${t.score_full_time.home} - ${t.score_full_time.away}</span>`:B`<span class="match-upcoming">${t.status}</span>`}
                  </div>
                  <div class="match-type">${t.competition_name}</div> <!-- Tipo di partita -->
                  <div class="team-name">${t.away_team}</div>
                </div>
                <img class="team-logo" src="${t.away_team_crest}" alt="${t.away_team}" />
              </div>
              <hr class="separator-line" /> <!-- Linea tra le partite -->
            </div>
          `))}
        </div>
      </ha-card>
    `}static get styles(){return o`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
      }
      .team-header {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
      }
      .team-logo {
        width: 60px;
        height: 60px;
        margin-right: 16px;
      }
      .team-info {
        display: flex;
        flex-direction: column;
      }
      .team-name {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }
      .team-stats {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-top: 8px;
      }
      .season-dates {
        font-size: 12px;
        color: var(--secondary-text-color);
      }
      hr {
        border: 0;
        border-top: 1px solid var(--divider-color);
        margin: 16px 0;
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
        font-size: 14px;
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
      .match-type {
        font-size: 12px;
        font-style: italic;
        color: var(--secondary-text-color);
      }
      .separator-line {
        border: none;
        border-top: 1px solid var(--divider-color);
        margin: 8px 0;
      }
    `}})})();