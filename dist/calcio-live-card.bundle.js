/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,u=globalThis,g=u.trustedTypes,v=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,$=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const a=s?.call(this);o.call(this,e),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty($("elementProperties")))return;const t=m(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty($("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:_).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=s,this[s]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[$("elementProperties")]=new Map,x[$("finalized")]=new Map,f?.({ReactiveElement:x}),(u.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,A=w.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+P,T=`<${C}>`,M=document,N=()=>M.createComment(""),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,D="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,O=/>/g,L=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,j=/^(?:script|style|textarea|title)$/i,F=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),q=F(1),V=(F(2),F(3),Symbol.for("lit-noChange")),B=Symbol.for("lit-nothing"),G=new WeakMap,W=M.createTreeWalker(M,129);function J(t,e){if(!k(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,a=0;const r=t.length-1,n=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let o,a=2===e?"<svg>":3===e?"<math>":"",r=U;for(let e=0;e<i;e++){const i=t[e];let n,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===U?"!--"===l[1]?r=H:void 0!==l[1]?r=O:void 0!==l[2]?(j.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=o??U,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?L:'"'===l[3]?I:R):r===I||r===R?r=L:r===H||r===O?r=U:(r=L,o=void 0);const d=r===L&&t[e+1].startsWith("/>")?" ":"";a+=r===U?i+T:c>=0?(s.push(n),i.slice(0,c)+E+i.slice(c)+P+d):i+P+(-2===c?e:d)}return[J(t,a+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=K.createElement(l,i),W.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=W.nextNode())&&n.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=c[a++],i=s.getAttribute(t).split(P),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:Y}),s.removeAttribute(t)}else t.startsWith(P)&&(n.push({type:6,index:o}),s.removeAttribute(t));if(j.test(s.tagName)){const t=s.textContent.split(P),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],N()),W.nextNode(),n.push({type:2,index:++o});s.append(t[e],N())}}}else if(8===s.nodeType)if(s.data===C)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)n.push({type:7,index:o}),t+=P.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===V)return e;let o=void 0!==s?i.o?.[s]:i.l;const a=z(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=o:i.l=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??M).importNode(e,!0);W.currentNode=s;let o=W.nextNode(),a=0,r=0,n=i[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new X(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new st(o,this,t)),this._$AV.push(e),n=i[++r]}a!==n?.index&&(o=W.nextNode(),a++)}return W.currentNode=M,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),z(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>k(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==B&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new K(t)),e}k(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.O(N()),this.O(N()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}_$AI(t,e=this,i,s){const o=this.strings;let a=!1;if(void 0===o)t=Q(this,t,e,0),a=!z(t)||t!==this._$AH&&t!==V,a&&(this._$AH=t);else{const s=t;let r,n;for(t=o[0],r=0;r<o.length-1;r++)n=Q(this,s[i+r],e,r),n===V&&(n=this._$AH[r]),a||=!z(n)||n!==this._$AH[r],n===B?t=B:t!==B&&(t+=(n??"")+o[r+1]),this._$AH[r]=n}a&&!s&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==B)}}class it extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??B)===V)return;const i=this._$AH,s=t===B&&i!==B||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==B&&(i===B||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(K,X),(w.litHtmlVersions??=[]).push("3.2.0");class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new X(e.insertBefore(N(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return V}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-classifica",class extends at{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10,this.hideHeader=t.hide_header||!1}formatDate(t){if(!t)return"Data non disponibile";const e=new Date(t);return isNaN(e.getTime())?"Data non valida":new Intl.DateTimeFormat("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"}).format(e)}getCardSize(){return 3}render(){if(!this.hass||!this._config)return q``;const t=this._config.entity,e=this.hass.states[t];if(!e)return q`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.standings||[],s=e.attributes.season||"",o=e.attributes.season_start||"",a=e.attributes.season_end||"",r=Math.min(this.maxTeamsVisible,i.length);return q`
      <ha-card>
        ${this.hideHeader?q``:q`
              <div class="card-header">
                <div class="header-row">
                  <div class="competition-details">
                    <div class="competition-name">${e.state}</div>
                    <div class="season-dates">Stagione: ${s} (${this.formatDate(o)} - ${this.formatDate(a)})</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="card-content">
          <table>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Squadra</th>
                <th>Punti</th>
                <th>V</th>
                <th>P</th>
                <th>S</th>
                <th>GF</th>
                <th>GS</th>
                <th>+/-</th>
              </tr>
            </thead>
          </table>
          <div class="table-container" style="max-height: ${45*r}px; overflow-y: auto;">
            <table>
              <tbody>
                ${i.map(((t,e)=>q`
                  <tr>
                    <td>${t.rank??"-"}</td>
                    <td>
                      <img class="team-crest" src="${t.team_logo}" alt="${t.team_name}" />
                      ${t.team_name}
                    </td>
                    <td class="points">${t.points}</td>
                    <td class="won">${t.wins}</td>
                    <td class="draw">${t.draws}</td>
                    <td class="lost">${t.losses}</td>
                    <td>${t.goals_for}</td>
                    <td>${t.goals_against}</td>
                    <td>${t.goal_difference}</td>
                  </tr>
                `))}
              </tbody>
            </table>
          </div>
        </div>
      </ha-card>
    `}static get styles(){return a`
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
      .competition-details {
        display: flex;
        flex-direction: column;
      }
      .competition-name {
        font-weight: bold;
        font-size: 1.5em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 14px;
      }
      .table-container {
        width: 100%;
        overflow-y: auto;
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
      .points {
        font-weight: bold;
        color: #4CAF50; /* Verde per i punti */
      }
      .won {
        color: #4CAF50; /* Verde per le vittorie */
      }
      .draw {
        color: #FFC107; /* Giallo per i pareggi */
      }
      .lost {
        color: #F44336; /* Rosso per le sconfitte */
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 2px 0;
      }
    `}}),customElements.define("calcio-live-today-matches",class extends at{static get properties(){return{hass:{},_config:{},maxEventsVisible:{type:Number},maxEventsTotal:{type:Number},showFinishedMatches:{type:Boolean},hideHeader:{type:Boolean},activeMatch:{type:Object},showPopup:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:5,this.maxEventsTotal=t.max_events_total?t.max_events_total:10,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches,this.hideHeader=void 0!==t.hide_header&&t.hide_header,this.activeMatch=null,this.showPopup=!1}getCardSize(){return 3}formatDateTime(t){const e=new Date(t);return isNaN(e.getTime())?"Data non disponibile":`${e.toLocaleDateString("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"})} ${e.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`}getMatchStatusText(t){return"Scheduled"===t.status?this.formatDateTime(t.date):"In-Play"===t.status?`${t.home_score} - ${t.away_score} (${t.clock})`:"Full Time"===t.status?`${t.home_score} - ${t.away_score}`:"Dati non disponibili"}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],i=[],s=[];return t.forEach((t=>{t.includes("Goal")?e.push(t):t.includes("Yellow Card")?i.push(t):t.includes("Red Card")&&s.push(t)})),{goals:e,yellowCards:i,redCards:s}}renderMatchDetails(t,e){if(!t||0===t.length)return q`<p>Nessun dettaglio disponibile.</p>`;const{goals:i,yellowCards:s,redCards:o}=this.separateEvents(t);return q`
      <p><strong>Clock finale:</strong> ${e}</p>
      ${i.length>0?q`
            <div class="event-section">
              <h5 class="event-title">Goal</h5>
              <ul class="goal-details">
                ${i.map((t=>q`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${s.length>0?q`
            <div class="event-section">
              <h5 class="event-title">Cartellini Gialli</h5>
              <ul class="yellow-card-details">
                ${s.map((t=>q`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${o.length>0?q`
            <div class="event-section">
              <h5 class="event-title">Cartellini Rossi</h5>
              <ul class="red-card-details">
                ${o.map((t=>q`<li>${t}</li>`))}
              </ul>
            </div>`:""}
    `}renderPopup(){return this.showPopup&&this.activeMatch?q`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${t=>t.stopPropagation()}">
          <h3 class="popup-title">Dettagli Partita</h3>
        
          <!-- Loghi delle squadre -->
          <div class="popup-logos">
            <img class="popup-logo" src="${this.activeMatch.home_logo}" alt="${this.activeMatch.home_team}" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_logo}" alt="${this.activeMatch.away_team}" />
          </div>
        
          <!-- Informazioni sulle squadre -->
          <p class="popup-teams">${this.activeMatch.home_team} <span class="popup-vs">vs</span> ${this.activeMatch.away_team}</p>
          <p><strong>Formazione Casa:</strong> <span class="home-stat">${this.activeMatch.home_form}</span></p>
          <p><strong>Formazione Trasferta:</strong> <span class="away-stat">${this.activeMatch.away_form}</span></p>
        
          <!-- Altre informazioni (statistiche) -->
          <p><strong>Statistiche Casa:</strong></p>
          <ul>
            <li>Possesso Palla: <span class="stat-value">${this.activeMatch.home_statistics.possessionPct}%</span></li>
            <li>Tiri Totali: <span class="stat-value">${this.activeMatch.home_statistics.totalShots}</span></li>
            <li>Tiri in Porta: <span class="stat-value">${this.activeMatch.home_statistics.shotsOnTarget}</span></li>
            <li>Falli Comessi: <span class="stat-value">${this.activeMatch.home_statistics.foulsCommitted}</span></li>
            <li>Assist: <span class="stat-value">${this.activeMatch.home_statistics.goalAssists}</span></li>
          </ul>
          <p><strong>Statistiche Trasferta:</strong></p>
          <ul>
            <li>Possesso Palla: <span class="stat-value">${this.activeMatch.away_statistics.possessionPct}%</span></li>
            <li>Tiri Totali: <span class="stat-value">${this.activeMatch.away_statistics.totalShots}</span></li>
            <li>Tiri in Porta: <span class="stat-value">${this.activeMatch.away_statistics.shotsOnTarget}</span></li>
            <li>Falli Comessi: <span class="stat-value">${this.activeMatch.away_statistics.foulsCommitted}</span></li>
            <li>Assist: <span class="stat-value">${this.activeMatch.away_statistics.goalAssists}</span></li>
          </ul>

          <h4 class="popup-subtitle">Eventi Partita</h4>
          ${this.renderMatchDetails(this.activeMatch.match_details,this.activeMatch.clock)}
          <button @click="${this.closePopup}" class="close-button">Chiudi</button>
        </div>
      </div>
    `:q``}render(){if(!this.hass||!this._config)return q``;const t=this._config.entity,e=this.hass.states[t];if(!e)return q`<ha-card>Entità sconosciuta: ${t}</ha-card>`;let i=e.attributes.matches||[];this.showFinishedMatches||(i=i.filter((t=>"Full Time"!==t.status)));const s=i.slice(0,this.maxEventsTotal);if(0===s.length)return q`<ha-card>Nessuna partita disponibile</ha-card>`;const o=130*this.maxEventsVisible;return q`
      <ha-card>
        ${this.hideHeader?"":q`
        <div class="header">
          <span>Prossime di campionato</span>
        </div>
        `}
        <div class="scroll-content" style="max-height: ${o}px; overflow-y: auto;">
          ${s.map(((t,e)=>q`
            <div class="match-wrapper">
              <div class="match-header">
                <div class="match-competition">
                  ${t.venue} | <span class="match-date">${this.formatDateTime(t.date)}</span>
                  ${"Scheduled"!==t.status?q`<span class="info-icon" @click="${()=>this.showDetails(t)}">Info</span>`:""}
                </div>
              </div>
              <div class="match">
                <img class="team-logo" src="${t.home_logo}" alt="${t.home_team}" />
                <div class="match-info">
                  <div class="team-name">${t.home_team}</div>
                  <div class="match-result">
                    ${this.getMatchStatusText(t)}
                  </div>
                  <div class="team-name">${t.away_team}</div>
                </div>
                <img class="team-logo" src="${t.away_logo}" alt="${t.away_team}" />
              </div>
              ${e<s.length-1?q`<hr class="separator-line" />`:""}
            </div>
          `))}
        </div>
        ${this.renderPopup()}
      </ha-card>
    `}static get styles(){return a`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .header {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 10px;
      }
      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue;
      }
      .match-date {
        color: orange;
      }
      .team-logo {
        width: 65px;
        height: 65px;
      }
      .match-wrapper {
        margin-bottom: 16px;
      }
      .team-name {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
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
        margin-bottom: 16px;
      }
      .match-info {
        text-align: center;
        flex: 1;
      }
      .match-result {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0;
        color: green; /* Colore verde per il risultato */
      }
      .info-icon {
        font-size: 12px;
        color: var(--primary-color);
        cursor: pointer;
        margin-left: 8px;
      }
      .separator-line {
        border: none;
        border-top: 1px solid var(--divider-color);
        margin: 8px 0;
      }
      .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }
      .popup-content {
        background: white;
        padding: 16px;
        border-radius: 8px;
        width: 80%;
        max-width: 400px;
      }
      .popup-title {
        color: var(--primary-color);
        margin-top: 0;
      }
      .popup-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
      }

      .popup-logo {
        width: 60px;
        height: 60px;
        margin: 0 10px;
      }

      .popup-vs {
        font-size: 24px;
        font-weight: bold;
        color: var(--primary-color);
        margin: 0 10px;
      }

      .popup-teams {
        text-align: center;
        font-size: 1.2em;
        color: var(--primary-text-color);
        margin-bottom: 16px;
      }
      
      .popup-subtitle {
        color: var(--primary-color);
        margin-top: 16px;
      }
      .stat-value {
        color: var(--primary-color);
      }
      .home-stat {
        color: green;
      }
      .away-stat {
        color: red;
      }
      .event-section {
        margin-bottom: 16px;
      }
      .event-title {
        color: var(--primary-color);
        font-weight: bold;
        margin-bottom: 8px;
      }
      .goal-details li, .yellow-card-details li, .red-card-details li {
        color: var(--primary-text-color);
        margin-bottom: 4px;
      }
      .close-button {
        background: var(--primary-color);
        color: white;
        padding: 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 16px;
      }
      .close-button:hover {
        background: var(--primary-color-dark);
      }
    `}}),customElements.define("calcio-live-team-matches",class extends at{static get properties(){return{hass:{},_config:{}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config={max_events_visible:t.max_events_visible||5,max_events_total:t.max_events_total||10,hide_header:void 0!==t.hide_header&&t.hide_header,...t}}getCardSize(){return 3}formatDateTime(t){const e=new Date(t);return isNaN(e.getTime())?"Data non disponibile":`${e.toLocaleDateString("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"})} ${e.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`}renderMatch(t){const e=t.home_team_logo||"N/A",i=t.away_team_logo||"N/A",s=t.event_date||"N/A",o=t.venue||"N/A",a=null!==t.home_team_score&&void 0!==t.home_team_score?t.home_team_score:null,r=null!==t.away_team_score&&void 0!==t.away_team_score?t.away_team_score:null;let n="";return n=null!==a&&null!==r?`${a} - ${r}`:"Non iniziata",q`
      <div class="match-wrapper">
        <div class="match-header">
          <div class="match-competition">
            ${o} | <span class="match-date">${this.formatDateTime(s)}</span>
          </div>
        </div>
        <div class="match">
          <img class="team-logo" src="${e}" alt="Logo squadra di casa" />
          <div class="match-info">
            <div class="team-name">${t.home_team}</div>
            <div class="match-result green-text">
              ${n}
            </div>
            <div class="team-name">${t.away_team}</div>
          </div>
          <img class="team-logo" src="${i}" alt="Logo squadra ospite" />
        </div>
        <hr class="separator-line" /> <!-- Riga tra le partite -->
      </div>
    `}render(){if(!this.hass||!this._config)return q``;const t=this._config.entity,e=this.hass.states[t];if(!e)return q`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.matches||[e.attributes],s=Math.min(i.length,this._config.max_events_total),o=130*Math.min(this._config.max_events_visible,s);return q`
      <ha-card>
        ${this._config.hide_header?"":q`
            <div class="header">
              <span>Partite Squadra Concluse</span>
            </div>`}
        <div class="scroll-content" style="max-height: ${o}px; overflow-y: auto;">
          ${i.slice(0,s).map((t=>this.renderMatch(t)))}
        </div>
      </ha-card>
    `}static get styles(){return a`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
      }
      .header {
        text-align: center;
        font-size: 20px;
        font-weight: bold;
        padding-bottom: 10px;
      }
      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue;
      }
      .match-date {
        color: orange;
      }
      .team-logo {
        width: 65px;
        height: 65px;
      }
      .match-wrapper {
        margin-bottom: 16px;
      }
      .team-name {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
      }
      hr.separator-line {
        border: none;
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
        margin-bottom: 16px;
      }
      .match-info {
        text-align: center;
        flex: 1;
      }
      .match-result {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0;
      }
      .green-text {
        color: green;
      }
    `}}),customElements.define("calcio-live-team-next",class extends at{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.showPopup=!1,this.activeMatch=null}getCardSize(){return 3}formatDateTime(t){const e=new Date(t);return isNaN(e.getTime())?"Data non disponibile":`${e.toLocaleDateString("it-IT",{day:"2-digit",month:"2-digit",year:"numeric"})} ${e.toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}`}showDetails(){const t=this._config.entity,e=this.hass.states[t];e&&e.attributes?(this.activeMatch=e.attributes,this.showPopup=!0):console.error("Nessun match attivo trovato.")}closePopup(){this.showPopup=!1}renderPopup(){if(!this.showPopup||!this.activeMatch)return q``;const{overall_record:t,home_odds:e,away_odds:i,venue:s,home_team:o,away_team:a,home_team_logo:r,away_team_logo:n}=this.activeMatch;return q`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${t=>t.stopPropagation()}">
          <h3 class="popup-title">Dettagli del Match</h3>
          <div class="team-logos">
            <img src="${r}" alt="Logo squadra di casa" class="team-logo" />
            <img src="${n}" alt="Logo squadra ospite" class="team-logo" />
          </div>
          <p><strong>Stadio:</strong> ${s}</p>
          <h4>Squadra di Casa: ${o}</h4>
          <ul>
            <li><strong>Partite Giocate (Casa):</strong> ${t?.homeGamesPlayed||"N/A"}</li>
            <li><strong>Vittorie:</strong> ${t?.homeWins||"N/A"}</li>
            <li><strong>Pareggi:</strong> ${t?.homeTies||"N/A"}</li>
            <li><strong>Sconfitte:</strong> ${t?.homeLosses||"N/A"}</li>
            <li><strong>Punti Fatti:</strong> ${t?.homePointsFor||"N/A"}</li>
            <li><strong>Punti Subiti:</strong> ${t?.homePointsAgainst||"N/A"}</li>
          </ul>
          <h4>Squadra Ospite: ${a}</h4>
          <ul>
            <li><strong>Partite Giocate (Trasferta):</strong> ${t?.awayGamesPlayed||"N/A"}</li>
            <li><strong>Vittorie:</strong> ${t?.awayWins||"N/A"}</li>
            <li><strong>Pareggi:</strong> ${t?.awayTies||"N/A"}</li>
            <li><strong>Sconfitte:</strong> ${t?.awayLosses||"N/A"}</li>
            <li><strong>Punti Fatti:</strong> ${t?.awayPointsFor||"N/A"}</li>
            <li><strong>Punti Subiti:</strong> ${t?.awayPointsAgainst||"N/A"}</li>
          </ul>
          <p><strong>Quote Squadra Casa:</strong> ${e?.moneyLine_current||"N/A"} (${e?.spread_current||"N/A"})</p>
          <p><strong>Quote Squadra Ospite:</strong> ${i?.moneyLine_current||"N/A"} (${i?.spread_current||"N/A"})</p>
          <button @click="${this.closePopup}" class="close-button">Chiudi</button>
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return q``;const t=this._config.entity,e=this.hass.states[t];if(!e)return q`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.home_team_logo,s=e.attributes.away_team_logo,o=e.attributes.next_event_date,a=e.attributes.venue;return q`
      <ha-card>
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${i}" alt="Logo squadra di casa" />
          </div>
          <div class="background-logo away-logo">
            <img src="${s}" alt="Logo squadra ospite" />
          </div>
        </div>
        <div class="scroll-content">
          <div class="match-wrapper">
            <div class="match-header">
              <div class="match-competition">
                ${a} | <span class="match-date">${this.formatDateTime(o)}</span>
                <span class="info-icon" @click="${()=>this.showDetails()}">Info</span>
              </div>
            </div>
            <div class="match">
              <img class="team-logo" src="${i}" alt="Logo squadra di casa" />
              <div class="match-info">
                <div class="team-name">${e.attributes.home_team}</div>
                <div class="match-status">
                  ${"Non Iniziata"} <!-- Rimuove la data e mostra "Non Iniziata" -->
                </div>
                <div class="team-name">${e.attributes.away_team}</div>
              </div>
              <img class="team-logo" src="${s}" alt="Logo squadra ospite" />
            </div>
          </div>
        </div>

        ${this.renderPopup()}
      </ha-card>
    `}static get styles(){return a`
      ha-card {
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff; /* Sfondo bianco */
        color: #000; /* Testo nero */
        position: relative; /* Per sovrapporre i loghi di sfondo */
        overflow: hidden;
      }

      /* Loghi grandi in trasparenza */
      .background-logos {
        position: absolute;
        top: -20px; /* Aggiungi unità px */
        left: -50px; /* Sposta ulteriormente verso sinistra */
        width: 150%; /* Ingrandisci i loghi */
        height: 150%;
        display: flex;
        justify-content: space-between;
        opacity: 0.1;
        pointer-events: none; /* Impedisce ai loghi di bloccare il clic sugli elementi in primo piano */
        transform: translateX(-10%); /* Sposta verso sinistra in modo più fine */
      }
       

      .background-logo {
        width: 50%; /* Taglia i loghi a metà */
        overflow: hidden;
      }

      .home-logo {
        display: flex;
        justify-content: flex-end; /* Spinge il logo a destra */
      }

      .away-logo {
        display: flex;
        justify-content: flex-start; /* Spinge il logo a sinistra */
      }

      .background-logo img {
        width: 150%; /* Ingrandisce il logo per renderlo più visibile */
      }

      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue; /* Colore moderno */
      }
      
      .match-result {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0;
        color: green; /* Cambia il colore qui */
      }
      
      .match-date {
        color: orange; /* Colore della data */
      }

      .info-icon {
        font-size: 12px;
        color: var(--primary-color);
        cursor: pointer;
        margin-left: 8px;
      }

      .team-logo {
        width: 65px;
        height: 65px;
      }

      .match-wrapper {
        margin-bottom: 16px;
      }

      .team-name {
        font-size: 14px;
        font-weight: bold;
        text-align: center;
      }

      .match-status {
        font-size: 16px;
        font-weight: bold;
        color: green;
        margin: 8px 0;
      }

      .scroll-content {
        overflow-y: auto;
      }

      .match {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }

      .match-info {
        text-align: center;
        flex: 1;
      }

      /* Popup styles */
      .popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
      }

      .popup-content {
        background: white;
        padding: 16px;
        border-radius: 8px;
        width: 80%;
        max-width: 400px;
        text-align: center;
        z-index: 1000;
      }

      .popup-title {
        color: var(--primary-color);
        margin-top: 0;
      }

      .close-button {
        background: var(--primary-color);
        color: white;
        padding: 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-top: 16px;
      }

      .close-button:hover {
        background: red;
      }

      .team-logos {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
      }

      .team-logo {
        width: 60px;
        height: 60px;
        margin: 0 10px;
      }
    `}})})();