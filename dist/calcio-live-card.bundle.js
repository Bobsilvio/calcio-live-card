/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),i=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=i.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&i.set(s,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(i,t,s)},r=(s,i)=>{if(e)s.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of i){const i=document.createElement("style"),o=t.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)}},n=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:d,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,v=m?m.emptyScript:"",_=g.reactiveElementPolyfillSupport,f=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);void 0!==i&&c(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return i?.call(this)},set(e){const a=i?.call(this);o.call(this,e),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(f("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(f("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(f("properties"))){const t=this.properties,e=[...p(t),...d(t)];for(const s of e)this.createProperty(s,t[s])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,s]of e)this.elementProperties.set(t,s)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const s=this._$Eu(t,e);void 0!==s&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eu(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return r(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(void 0!==i&&!0===s.reflect){const o=(void 0!==s.converter?.toAttribute?s.converter:$).toAttribute(e,s.type);this._$Em=t,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(void 0!==i&&this._$Em!==i){const t=s.getPropertyOptions(i),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=i,this[i]=o.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,s){if(void 0!==t){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??y)(this[t],e))return;this.P(t,e,s)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,s]of t)!0!==s.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[f("elementProperties")]=new Map,x[f("finalized")]=new Map,_?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,A=w.trustedTypes,P=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,M="?"+E,C=`<${M}>`,k=document,T=()=>k.createComment(""),N=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,U="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,H=/-->/g,R=/>/g,L=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,D=/"/g,q=/^(?:script|style|textarea|title)$/i,F=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),I=F(1),B=(F(2),F(3),Symbol.for("lit-noChange")),V=Symbol.for("lit-nothing"),W=new WeakMap,G=k.createTreeWalker(k,129);function J(t,e){if(!z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,a=0;const r=t.length-1,n=this.parts,[l,c]=((t,e)=>{const s=t.length-1,i=[];let o,a=2===e?"<svg>":3===e?"<math>":"",r=O;for(let e=0;e<s;e++){const s=t[e];let n,l,c=-1,h=0;for(;h<s.length&&(r.lastIndex=h,l=r.exec(s),null!==l);)h=r.lastIndex,r===O?"!--"===l[1]?r=H:void 0!==l[1]?r=R:void 0!==l[2]?(q.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=L):void 0!==l[3]&&(r=L):r===L?">"===l[0]?(r=o??O,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,n=l[1],r=void 0===l[3]?L:'"'===l[3]?D:j):r===D||r===j?r=L:r===H||r===R?r=O:(r=L,o=void 0);const p=r===L&&t[e+1].startsWith("/>")?" ":"";a+=r===O?s+C:c>=0?(i.push(n),s.slice(0,c)+S+s.slice(c)+E+p):s+E+(-2===c?e:p)}return[J(t,a+(t[s]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),i]})(t,e);if(this.el=K.createElement(l,s),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(i=G.nextNode())&&n.length<r;){if(1===i.nodeType){if(i.hasAttributes())for(const t of i.getAttributeNames())if(t.endsWith(S)){const e=c[a++],s=i.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:r[2],strings:s,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?st:Y}),i.removeAttribute(t)}else t.startsWith(E)&&(n.push({type:6,index:o}),i.removeAttribute(t));if(q.test(i.tagName)){const t=i.textContent.split(E),e=t.length-1;if(e>0){i.textContent=A?A.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],T()),G.nextNode(),n.push({type:2,index:++o});i.append(t[e],T())}}}else if(8===i.nodeType)if(i.data===M)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=i.data.indexOf(E,t+1));)n.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const s=k.createElement("template");return s.innerHTML=t,s}}function Q(t,e,s=t,i){if(e===B)return e;let o=void 0!==i?s.o?.[i]:s.l;const a=N(e)?void 0:e._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(t),o._$AT(t,s,i)),void 0!==i?(s.o??=[])[i]=o:s.l=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,i)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??k).importNode(e,!0);G.currentNode=i;let o=G.nextNode(),a=0,r=0,n=s[0];for(;void 0!==n;){if(a===n.index){let e;2===n.type?e=new X(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new it(o,this,t)),this._$AV.push(e),n=s[++r]}a!==n?.index&&(o=G.nextNode(),a++)}return G.currentNode=k,i}p(t){let e=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,s,i){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this.v=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),N(t)?t===V||null==t||""===t?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>z(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==V&&N(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=K.createElement(J(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const t=new Z(i,this),s=t.u(this.options);t.p(e),this.T(s),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new K(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new X(this.O(T()),this.O(T()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=V}_$AI(t,e=this,s,i){const o=this.strings;let a=!1;if(void 0===o)t=Q(this,t,e,0),a=!N(t)||t!==this._$AH&&t!==B,a&&(this._$AH=t);else{const i=t;let r,n;for(t=o[0],r=0;r<o.length-1;r++)n=Q(this,i[s+r],e,r),n===B&&(n=this._$AH[r]),a||=!N(n)||n!==this._$AH[r],n===V?t=V:t!==V&&(t+=(n??"")+o[r+1]),this._$AH[r]=n}a&&!i&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}}class et extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==V)}}class st extends Y{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??V)===B)return;const s=this._$AH,i=t===V&&s!==V||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==V&&(s===V||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class it{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(K,X),(w.litHtmlVersions??=[]).push("3.2.0");class at extends x{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,s)=>{const i=s?.renderBefore??e;let o=i._$litPart$;if(void 0===o){const t=s?.renderBefore??null;i._$litPart$=o=new X(e.insertBefore(T(),t),t,void 0,s??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return B}}at._$litElement$=!0,at.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:at});const rt=globalThis.litElementPolyfillSupport;rt?.({LitElement:at}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-classifica",class extends at{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10,this.hideHeader=t.hide_header||!1}getCardSize(){return 3}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const s=e.attributes.standings||[],i=e.attributes.season||"",o=(e.attributes.season_start,e.attributes.season_end,Math.min(this.maxTeamsVisible,s.length));return I`
      <ha-card>
        ${this.hideHeader?I``:I`
              <div class="card-header">
                <div class="header-row">
                  <div class="competition-details">
                    <div class="competition-name">${e.state}</div>
                    <div class="season-dates">${i}</div>
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
          <div class="table-container" style="max-height: ${45*o}px; overflow-y: auto;">
            <table>
              <tbody>
                ${s.map(((t,e)=>I`
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
        font-size: 1.3em;
      }
      .season-dates {
        color: var(--secondary-text-color);
        font-size: 16px;
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
        color: #4CAF50;
      }
      .won {
        color: #4CAF50; 
      }
      .draw {
        color: #FFC107;
      }
      .lost {
        color: #F44336;
      }
      .separator {
        width: 100%;
        height: 1px;
        background-color: #ddd;
        border: none;
        margin: 2px 0;
      }
    `}}),customElements.define("calcio-live-today-matches",class extends at{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:5,this.maxEventsTotal=t.max_events_total?t.max_events_total:50,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches,this.hideHeader=void 0!==t.hide_header&&t.hide_header,this.activeMatch=null,this.showPopup=!1}getCardSize(){return 3}getMatchStatusText(t){return"Scheduled"===t.status?`${t.date}`:"In-Play"===t.status?`${t.home_score} - ${t.away_score} (${t.clock})`:"Full Time"===t.status?`${t.home_score} - ${t.away_score}`:"Dati non disponibili"}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],s=[],i=[];return t.forEach((t=>{t.includes("Goal")?e.push(t):t.includes("Yellow Card")?s.push(t):t.includes("Red Card")&&i.push(t)})),{goals:e,yellowCards:s,redCards:i}}renderMatchDetails(t,e){if(!t||0===t.length)return I`<p>Nessun dettaglio disponibile.</p>`;const{goals:s,yellowCards:i,redCards:o}=this.separateEvents(t);return I`
      ${e?I`<p><strong>Clock finale:</strong> ${e}</p>`:""}
      ${s.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Goal</h5>
              <ul class="goal-details">
                ${s.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${i.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Cartellini Gialli</h5>
              <ul class="yellow-card-details">
                ${i.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${o.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Cartellini Rossi</h5>
              <ul class="red-card-details">
                ${o.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
    `}renderPopup(){return this.showPopup&&this.activeMatch?I`
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
          <p><strong>Formazione Casa:</strong> <span class="home-stat">${this.activeMatch.home_form}</span></p>
          <p><strong>Formazione Trasferta:</strong> <span class="away-stat">${this.activeMatch.away_form}</span></p>
        
          <!-- Altre informazioni (statistiche) -->
          <p><strong>Statistiche Casa:</strong></p>
          <ul>
            <li>Possesso Palla: <span class="stat-value">${this.activeMatch.home_statistics?.possessionPct??"N/A"}%</span></li>
            <li>Tiri Totali: <span class="stat-value">${this.activeMatch.home_statistics?.totalShots??"N/A"}</span></li>
            <li>Tiri in Porta: <span class="stat-value">${this.activeMatch.home_statistics?.shotsOnTarget??"N/A"}</span></li>
            <li>Falli Comessi: <span class="stat-value">${this.activeMatch.home_statistics?.foulsCommitted??"N/A"}</span></li>
            <li>Assist: <span class="stat-value">${this.activeMatch.home_statistics?.goalAssists??"N/A"}</span></li>
          </ul>
          <p><strong>Statistiche Trasferta:</strong></p>
          <ul>
            <li>Possesso Palla: <span class="stat-value">${this.activeMatch.away_statistics?.possessionPct??"N/A"}%</span></li>
            <li>Tiri Totali: <span class="stat-value">${this.activeMatch.away_statistics?.totalShots??"N/A"}</span></li>
            <li>Tiri in Porta: <span class="stat-value">${this.activeMatch.away_statistics?.shotsOnTarget??"N/A"}</span></li>
            <li>Falli Comessi: <span class="stat-value">${this.activeMatch.away_statistics?.foulsCommitted??"N/A"}</span></li>
            <li>Assist: <span class="stat-value">${this.activeMatch.away_statistics?.goalAssists??"N/A"}</span></li>
          </ul>

          <h4 class="popup-subtitle">Eventi Partita</h4>
          ${this.renderMatchDetails(this.activeMatch.match_details,this.activeMatch.clock)}
          <button @click="${this.closePopup}" class="close-button">Chiudi</button>
        </div>
      </div>
    `:I``}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Entità sconosciuta: ${t}</ha-card>`;let s=e.attributes.matches||[];this.showFinishedMatches||(s=s.filter((t=>"Full Time"!==t.status)));const i=s.slice(0,this.maxEventsTotal);if(0===i.length)return I`<ha-card>Nessuna partita disponibile</ha-card>`;const o=150*this.maxEventsVisible;return I`
      <ha-card>
        ${this.hideHeader?"":I`
        <div class="header">
          <span>Prossime di campionato</span>
        </div>
        `}
        <div class="scroll-content" style="max-height: ${o}px; overflow-y: auto;">
          ${i.map(((t,e)=>I`
            <div class="match-wrapper">
              <div class="match-header">
                <div class="match-competition">
                  ${t.venue} | <span class="match-date">${t.date}</span>
                  ${"Scheduled"!==t.status?I`<span class="info-icon" @click="${()=>this.showDetails(t)}">Info</span>`:""}
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
              ${e<i.length-1?I`<hr class="separator-line" />`:""}
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
        width: 90px;
        height: 90px;
      }
      .match-wrapper {
        margin-bottom: 16px;
      }
      .team-name {
        font-size: 17px;
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
        background: black;
        padding: 16px;
        border-radius: 8px;
        width: 80%;
        max-width: 400px;
        overflow-y: auto;
        max-height: 80vh; /* Aggiunto per rendere il popup scrollabile */
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
    `}}),customElements.define("calcio-live-team-matches",class extends at{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config={max_events_visible:t.max_events_visible||5,max_events_total:t.max_events_total||10,hide_header:void 0!==t.hide_header&&t.hide_header,...t},this.showPopup=!1,this.activeMatch=null}getCardSize(){return 3}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}renderPopup(){return this.showPopup&&this.activeMatch?I`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${t=>t.stopPropagation()}">
          <h3 class="popup-title">Dettagli Partita</h3>
          <div class="popup-logos">
            <img class="popup-logo" src="${this.activeMatch.home_team_logo}" alt="Logo squadra di casa" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_team_logo}" alt="Logo squadra ospite" />
          </div>
          <p><strong>Stadio:</strong> ${this.activeMatch.venue}</p>
          <p><strong>Data:</strong> ${this.activeMatch.event_date}</p>
          <p><strong>Risultato:</strong> ${this.activeMatch.home_team_score} - ${this.activeMatch.away_team_score}</p>
          <p><strong>Eventi:</strong></p>
          <ul>
            ${this.activeMatch.match_details?.map((t=>I`<li>${t}</li>`))||I`<li>Nessun evento disponibile</li>`}
          </ul>
          <button @click="${this.closePopup}" class="close-button">Chiudi</button>
        </div>
      </div>
    `:I``}renderMatch(t){const e=t.home_team_logo||"N/A",s=t.away_team_logo||"N/A",i=t.event_date||"N/A",o=t.venue||"N/A";let a=`${null!==t.home_team_score&&void 0!==t.home_team_score?t.home_team_score:"N/A"} - ${null!==t.away_team_score&&void 0!==t.away_team_score?t.away_team_score:"N/A"}`;return t.status,I`
      <div class="match-wrapper">
        <div class="match-header">
          <div class="match-competition">
            ${o} | <span class="match-date">${i}</span>
            <span class="info-icon" @click="${()=>this.showDetails(t)}">Info</span>
          </div>
        </div>
        <div class="match">
          <img class="team-logo" src="${e}" alt="Logo squadra di casa" />
          <div class="match-info">
            <div class="team-name">${t.home_team}</div>
            <div class="match-result green-text">
              ${a}
            </div>
            <div class="team-name">${t.away_team}</div>
          </div>
          <img class="team-logo" src="${s}" alt="Logo squadra ospite" />
        </div>
        <hr class="separator-line" /> <!-- Riga tra le partite -->
      </div>
    `}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const s=e.attributes.matches||[],i=Math.min(s.length,this._config.max_events_total),o=150*Math.min(this._config.max_events_visible,i);return I`
      <ha-card>
        ${this._config.hide_header?"":I`
            <div class="header">
              <span>Partite Squadra Concluse</span>
            </div>`}
        <div class="scroll-content" style="max-height: ${o}px; overflow-y: auto;">
          ${s.slice(0,i).map((t=>this.renderMatch(t)))}
        </div>

        ${this.renderPopup()} <!-- Popup per i dettagli -->
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
      .info-icon {
        font-size: 12px;
        color: var(--primary-color);
        cursor: pointer;
        margin-left: 8px;
      }
      .team-logo {
        width: 90px;
        height: 90px;
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
        background: black;
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
    `}}),customElements.define("calcio-live-team-next",class extends at{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.showPopup=!1,this.activeMatch=null}getCardSize(){return 3}showDetails(){const t=this._config.entity,e=this.hass.states[t];e&&e.attributes?(this.activeMatch=e.attributes,this.showPopup=!0):console.error("Nessun match attivo trovato.")}closePopup(){this.showPopup=!1}renderPopup(){return this.showPopup&&this.activeMatch?I`
      <div class="popup-overlay" @click="${this.closePopup}">
        <div class="popup-content" @click="${t=>t.stopPropagation()}">
          <h3 class="popup-title">Dettagli Partita</h3>
        
          <!-- Loghi delle squadre -->
          <div class="popup-logos">
            <img class="popup-logo" src="${this.activeMatch.home_team_logo}" alt="Logo squadra di casa" />
            <span class="popup-vs">vs</span>
            <img class="popup-logo" src="${this.activeMatch.away_team_logo}" alt="Logo squadra ospite" />
          </div>
  
          <p><strong>Stadio:</strong> ${this.activeMatch.venue}</p>
          <h4>Squadra di Casa: ${this.activeMatch.home_team}</h4>
          <ul>
            <li><strong>Partite Giocate (Casa):</strong> ${this.activeMatch.overall_record.homeGamesPlayed}</li>
            <li><strong>Vittorie:</strong> ${this.activeMatch.overall_record.homeWins}</li>
            <li><strong>Pareggi:</strong> ${this.activeMatch.overall_record.homeTies}</li>
            <li><strong>Sconfitte:</strong> ${this.activeMatch.overall_record.homeLosses}</li>
            <li><strong>Punti Fatti:</strong> ${this.activeMatch.overall_record.homePointsFor}</li>
            <li><strong>Punti Subiti:</strong> ${this.activeMatch.overall_record.homePointsAgainst}</li>
          </ul>

          <h4>Squadra Ospite: ${this.activeMatch.away_team}</h4>
          <ul>
            <li><strong>Partite Giocate (Trasferta):</strong> ${this.activeMatch.overall_record.awayGamesPlayed}</li>
            <li><strong>Vittorie:</strong> ${this.activeMatch.overall_record.awayWins}</li>
            <li><strong>Pareggi:</strong> ${this.activeMatch.overall_record.awayTies}</li>
            <li><strong>Sconfitte:</strong> ${this.activeMatch.overall_record.awayLosses}</li>
            <li><strong>Punti Fatti:</strong> ${this.activeMatch.overall_record.awayPointsFor}</li>
            <li><strong>Punti Subiti:</strong> ${this.activeMatch.overall_record.awayPointsAgainst}</li>
          </ul>

          <p><strong>Quote Squadra Casa:</strong> ${this.activeMatch.home_odds.moneyLine_current} (${this.activeMatch.home_odds.spread_current})</p>
          <p><strong>Quote Squadra Ospite:</strong> ${this.activeMatch.away_odds.moneyLine_current} (${this.activeMatch.away_odds.spread_current})</p>
          
          <button @click="${this.closePopup}" class="close-button">Chiudi</button>
        </div>
      </div>
    `:I``}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const s=e.attributes.home_team_logo,i=e.attributes.away_team_logo,o=e.attributes.next_event_date,a=e.attributes.venue;return I`
      <ha-card>
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${s}" alt="Logo squadra di casa" />
          </div>
          <div class="background-logo away-logo">
            <img src="${i}" alt="Logo squadra ospite" />
          </div>
        </div>
        <div class="scroll-content">
          <div class="match-wrapper">
            <div class="match-header">
              <div class="match-competition">
                ${a} | <span class="match-date">${o}</span>
                <span class="info-icon" @click="${()=>this.showDetails()}">Info</span>
              </div>
            </div>
            <div class="match">
              <img class="team-logo" src="${s}" alt="Logo squadra di casa" />
              <div class="match-info">
                <div class="team-name">${e.attributes.home_team}</div>
                <div class="match-status">
                  ${"Non Iniziata"}
                </div>
                <div class="team-name">${e.attributes.away_team}</div>
              </div>
              <img class="team-logo" src="${i}" alt="Logo squadra ospite" />
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
        position: relative; 
        overflow: hidden;
      }

      .background-logos {
        position: absolute;
        top: -20px;
        left: -50px;
        width: 150%; 
        height: 160%;
        display: flex;
        justify-content: space-between;
        opacity: 0.1;
        pointer-events: none;
        transform: translateX(-10%); 
      }

      .background-logo {
        width: 50%;
        overflow: hidden;
      }

      .home-logo {
        display: flex;
        justify-content: flex-end;
      }

      .away-logo {
        display: flex;
        justify-content: flex-start; 
      }

      .background-logo img {
        width: 150%;
      }

      .match-competition {
        text-align: center;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        color: blue;
      }
      
      .match-result {
        font-size: 16px;
        font-weight: bold;
        margin: 8px 0;
        color: green; 
      }
      
      .match-date {
        color: orange;
      }

      .info-icon {
        font-size: 12px;
        color: var(--primary-color);
        cursor: pointer;
        margin-left: 8px;
      }

      .match-wrapper {
        margin-bottom: 16px;
      }

      .team-name {
        font-size: 17px;
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

      .team-logo {
        width: 100px;
        height: 100px;
        margin: 0 10px;
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
        background: black;
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
    `}})})();