/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;class a{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}}const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new a(s,t,i)},n=(i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),a=t.litNonce;void 0!==a&&s.setAttribute("nonce",a),s.textContent=e.cssText,i.appendChild(s)}},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,i))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,g=globalThis,m=g.trustedTypes,f=m?m.emptyScript:"",v=g.reactiveElementPolyfillSupport,_=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!l(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class x extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:a}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);a.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const t=this.properties,e=[...d(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=a.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??y)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[_("elementProperties")]=new Map,x[_("finalized")]=new Map,v?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.0.4");const w=globalThis,A=w.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,M=`<${P}>`,T=document,z=()=>T.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,O="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,j=/>/g,D=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,R=/"/g,V=/^(?:script|style|textarea|title)$/i,F=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),I=F(1),B=(F(2),F(3),Symbol.for("lit-noChange")),W=Symbol.for("lit-nothing"),q=new WeakMap,G=T.createTreeWalker(T,129);function J(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let a=0,o=0;const n=t.length-1,r=this.parts,[l,c]=((t,e)=>{const i=t.length-1,s=[];let a,o=2===e?"<svg>":3===e?"<math>":"",n=H;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===H?"!--"===l[1]?n=U:void 0!==l[1]?n=j:void 0!==l[2]?(V.test(l[2])&&(a=RegExp("</"+l[2],"g")),n=D):void 0!==l[3]&&(n=D):n===D?">"===l[0]?(n=a??H,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?D:'"'===l[3]?R:L):n===R||n===L?n=D:n===U||n===j?n=H:(n=D,a=void 0);const d=n===D&&t[e+1].startsWith("/>")?" ":"";o+=n===H?i+M:c>=0?(s.push(r),i.slice(0,c)+E+i.slice(c)+S+d):i+S+(-2===c?e:d)}return[J(t,o+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(t,e);if(this.el=K.createElement(l,i),G.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=G.nextNode())&&r.length<n;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(E)){const e=c[o++],i=s.getAttribute(t).split(S),n=/([.?@])?(.*)/.exec(e);r.push({type:1,index:a,name:n[2],strings:i,ctor:"."===n[1]?tt:"?"===n[1]?et:"@"===n[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(r.push({type:6,index:a}),s.removeAttribute(t));if(V.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],z()),G.nextNode(),r.push({type:2,index:++a});s.append(t[e],z())}}}else if(8===s.nodeType)if(s.data===P)r.push({type:2,index:a});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)r.push({type:7,index:a}),t+=S.length-1}a++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===B)return e;let a=void 0!==s?i.o?.[s]:i.l;const o=k(e)?void 0:e._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(t),a._$AT(t,i,s)),void 0!==s?(i.o??=[])[s]=a:i.l=a),void 0!==a&&(e=Y(t,a._$AS(t,e.values),a,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);G.currentNode=s;let a=G.nextNode(),o=0,n=0,r=i[0];for(;void 0!==r;){if(o===r.index){let e;2===r.type?e=new X(a,a.nextSibling,this,t):1===r.type?e=new r.ctor(a,r.name,r.strings,this,t):6===r.type&&(e=new st(a,this,t)),this._$AV.push(e),r=i[++n]}o!==r?.index&&(a=G.nextNode(),o++)}return G.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class X{get _$AU(){return this._$AM?._$AU??this.v}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this.v=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),k(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const a of t)s===e.length?e.push(i=new X(this.O(z()),this.O(z()),this,this.options)):i=e[s],i._$AI(a),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this.v=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,a){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const a=this.strings;let o=!1;if(void 0===a)t=Y(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==B,o&&(this._$AH=t);else{const s=t;let n,r;for(t=a[0],n=0;n<a.length-1;n++)r=Y(this,s[i+n],e,n),r===B&&(r=this._$AH[n]),o||=!k(r)||r!==this._$AH[n],r===W?t=W:t!==W&&(t+=(r??"")+a[n+1]),this._$AH[n]=r}o&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Q{constructor(t,e,i,s,a){super(t,e,i,s,a),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??W)===B)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const at=w.litHtmlPolyfillSupport;at?.(K,X),(w.litHtmlVersions??=[]).push("3.2.0");class ot extends x{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=((t,e,i)=>{const s=i?.renderBefore??e;let a=s._$litPart$;if(void 0===a){const t=i?.renderBefore??null;s._$litPart$=a=new X(e.insertBefore(z(),t),t,void 0,i??{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return B}}ot._$litElement$=!0,ot.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ot});const nt=globalThis.litElementPolyfillSupport;nt?.({LitElement:ot}),(globalThis.litElementVersions??=[]).push("4.1.0"),customElements.define("calcio-live-classifica",class extends ot{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxTeamsVisible=t.max_teams_visible?t.max_teams_visible:10,this.hideHeader=t.hide_header||!1}getCardSize(){return 3}static getConfigElement(){return document.createElement("calcio-live-classifica-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_teams_visible:10,hide_header:!1}}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.standings||[],s=e.attributes.season||"",a=(e.attributes.season_start,e.attributes.season_end,Math.min(this.maxTeamsVisible,i.length));return I`
      <ha-card>
        ${this.hideHeader?I``:I`
              <div class="card-header">
                <div class="header-row">
                  <div class="competition-details">
                    <div class="competition-name">${e.state}</div>
                    <div class="season-dates">${s}</div>
                  </div>
                </div>
                <hr class="separator" />
              </div>
            `}
        <div class="card-content">
          <table>
            <thead>
              <tr>
                <th class="small-column">Pos</th>
                <th class="team-column">Squadra</th>
                <th class="small-column">Punti</th>
                <th class="small-column">V</th>
                <th class="small-column">P</th>
                <th class="small-column">S</th>
                <th class="small-column">GF</th>
                <th class="small-column">GS</th>
                <th class="small-column">+/-</th>
              </tr>
            </thead>
          </table>
          <div class="table-container" style="--max-teams-visible: ${a};">
            <table>
              <tbody>
                ${i.slice(0,i.length).map(((t,e)=>I`
                  <tr>
                    <td class="small-column">${t.rank??"-"}</td>
                    <td class="team-column">
                      <div class="team-name">
                        <img class="team-crest" src="${t.team_logo}" alt="${t.team_name}" />
                        ${t.team_name}
                      </div>
                    </td>
                    <td class="points small-column">${t.points}</td>
                    <td class="won small-column">${t.wins}</td>
                    <td class="draw small-column">${t.draws}</td>
                    <td class="lost small-column">${t.losses}</td>
                    <td class="small-column">${t.goals_for}</td>
                    <td class="small-column">${t.goals_against}</td>
                    <td class="small-column">${t.goal_difference}</td>
                  </tr>
                `))}
              </tbody>
            </table>
          </div>
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
        max-height: calc(var(--max-teams-visible, 10) * 40px);
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
        text-align: center;
      }
      td {
        vertical-align: middle;
        text-align: center;
      }
      .team-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
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
      .team-column {
        width: 180px;
        text-align: left;
      }
      .small-column {
        width: 40px;
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-classifica",name:"Calcio Live Classifica Card",description:"Mostra la classifica del campionato o coppe"}),customElements.define("calcio-live-classifica-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return o`
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
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_classifica"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,i="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:i};this.configChanged(t)}}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
              
        <h3>Settings:</h3>
        </div>
          <div class="option">
          <ha-switch
            .checked=${!0===this._config.hide_header}
            @change=${this._valueChanged}
            .configValue=${"hide_header"}
          >
          </ha-switch>
          <label>Hide Header</label>
        </div>
        <div class="option">
          <ha-textfield
            label="Max Teams Visible"
            type="number"
            .value=${this._config.max_teams_visible||10}
            @change=${this._valueChanged}
            .configValue=${"max_teams_visible"}
          ></ha-textfield>
        </div>
      `:I``}}),customElements.define("calcio-live-matches",class extends ot{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.maxEventsVisible=t.max_events_visible?t.max_events_visible:5,this.maxEventsTotal=t.max_events_total?t.max_events_total:50,this.showFinishedMatches=void 0===t.show_finished_matches||t.show_finished_matches,this.hideHeader=void 0!==t.hide_header&&t.hide_header,this.hidePastDays=void 0!==t.hide_past_days?t.hide_past_days:0,this.activeMatch=null,this.showPopup=!1}getCardSize(){return 3}static getConfigElement(){return document.createElement("calcio-live-matches-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:!0,hide_header:!1}}_parseMatchDate(t){const[e,i]=t.split(" "),[s,a,o]=e.split("/").map(Number),[n,r]=i?i.split(":").map(Number):[0,0],l=new Date(o,a-1,s,n,r);return console.log(`Parsed match date: ${l}`),l}getMatchStatusText(t){return t.completed?`${t.home_score} - ${t.away_score} (Full Time)`:1===t.period||2===t.period?`${t.home_score} - ${t.away_score} (${t.clock})`:"Scheduled"===t.status?`${t.date}`:"Dati non disponibili"}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],i=[],s=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?i.push(t):t.includes("Red Card")&&s.push(t)})),{goals:e,yellowCards:i,redCards:s}}renderMatchDetails(t,e){if(!t||0===t.length)return I`<p>Nessun dettaglio disponibile.</p>`;const{goals:i,yellowCards:s,redCards:a}=this.separateEvents(t);return I`
      ${e?I`<p><strong>Clock finale:</strong> ${e}</p>`:""}
      ${i.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Goal</h5>
              <ul class="goal-details">
                ${i.map((t=>I`<li>${t}</li>`))} <!-- Mostra i gol nel popup -->
              </ul>
            </div>`:""}
      ${s.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Cartellini Gialli</h5>
              <ul class="yellow-card-details">
                ${s.map((t=>I`<li>${t}</li>`))}
              </ul>
            </div>`:""}
      ${a.length>0?I`
            <div class="event-section">
              <h5 class="event-title">Cartellini Rossi</h5>
              <ul class="red-card-details">
                ${a.map((t=>I`<li>${t}</li>`))}
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
    `:I``}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Entità sconosciuta: ${t}</ha-card>`;let i=e.attributes.matches||[];const s=e.attributes.league_info?e.attributes.league_info[0]:null,a=e.attributes.team_logo||null;this.showFinishedMatches||(i=i.filter((t=>"Full Time"!==t.status)));const o=new Date;if(this.hidePastDays>0){const t=new Date(o);t.setDate(t.getDate()-this.hidePastDays),console.log(`Current date: ${o}, Filter date (days ago): ${t}`),i=i.filter((e=>{const i=this._parseMatchDate(e.date);return console.log(`Comparing match date ${i} with filter date ${t}`),i>=t}))}const n=i.slice(0,this.maxEventsTotal);if(0===n.length)return I`<ha-card>Nessuna partita disponibile</ha-card>`;const r=150*this.maxEventsVisible;return I`
        <ha-card>
          ${this.hideHeader?"":I`
          <div class="header">
            <!-- Se il logo della competizione esiste, visualizzalo -->
            ${s&&s.logo_href?I`
            <div class="league-header">
              <img class="league-logo" src="${s.logo_href}" alt="Logo ${s.abbreviation}" />
              <div class="league-info">
                <div class="league-name">${s.abbreviation}</div>
                <div class="league-dates">${s.startDate} - ${s.endDate}</div>
              </div>
            </div>`:""}

            <!-- Se il logo del team esiste, visualizzalo -->
            ${a?I`
            <div class="team-header">
              <img class="team-logo" src="${a}" alt="Logo del Team" />
            </div>`:""}
          </div>
          `}
          <div class="scroll-content" style="max-height: ${r}px; overflow-y: auto;">
            ${n.map(((t,e)=>I`
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
                      ${this.getMatchStatusText(t)} <!-- Mostra lo stato e il risultato -->
                    </div>
                    <div class="team-name">${t.away_team}</div>
                  </div>
                  <img class="team-logo" src="${t.away_logo}" alt="${t.away_team}" />
                </div>
                ${e<n.length-1?I`<hr class="separator-line" />`:""}
              </div>
            `))}
          </div>
          ${this.renderPopup()}
        </ha-card>
      `}static get styles(){return o`
        ha-card {
          padding: 16px;
          box-sizing: border-box;
          width: 100%;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 10px;
          position: relative;
        }
        .league-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .league-logo {
          width: 80px;
          height: 80px;
          margin-right: 15px;
        }
        .league-info {
          text-align: center;
          flex-grow: 1;
        }
        .league-name {
          font-size: 22px;
          font-weight: bold;
        }
        .league-dates {
          font-size: 14px;
          color: gray;
        }
        .team-header {
          text-align: center;
        }
        .team-logo {
          width: 80px;
          height: 80px;
          margin-left: 15px;
        }
        .separator-line {
          border: none;
          border-top: 1px solid var(--divider-color);
          margin-top: 10px;
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
          color: green;
        }
        .info-icon {
          font-size: 12px;
          color: var(--primary-color);
          cursor: pointer;
          margin-left: 8px;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: var(--primary-background-color);
          padding: 16px;
          border-radius: 8px;
          width: 80%;
          max-width: 400px;
          overflow-y: auto;
          max-height: 80vh;
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
      `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-matches",name:"Calcio Live Matches Card",description:"Mostra le partite della settimana o del tuo Team"}),customElements.define("calcio-live-matches-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return o`
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
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_all"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,i="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:i};this.configChanged(t)}}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h3>CalcioLive Sensor:</h3>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
        
          <h3>Settings:</h3>
          <div class="option">
            <ha-switch
              .checked=${!1!==this._config.show_finished_matches}
              @change=${this._valueChanged}
              .configValue=${"show_finished_matches"}
            >
            </ha-switch>
            <label>Show Finished Matches</label>
          </div>

          <div class="option">
            <ha-switch
              .checked=${!0===this._config.hide_header}
              @change=${this._valueChanged}
              .configValue=${"hide_header"}
            >
            </ha-switch>
            <label>Hide Header</label>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Visible"
              type="number"
              .value=${this._config.max_events_visible||5}
              @change=${this._valueChanged}
              .configValue=${"max_events_visible"}
            ></ha-textfield>
          </div>

          <div class="option">
            <ha-textfield
              label="Max Events Total"
              type="number"
              .value=${this._config.max_events_total||50}
              @change=${this._valueChanged}
              .configValue=${"max_events_total"}
            ></ha-textfield>
          </div>
          
          <h4>For work, 'Show Finished Matches' it must be enabled. </h4>
          <div class="option">
            <ha-textfield
              label="Hide Matches Older Than (Days)"
              type="number"
              .value=${this._config.hide_past_days||0}
              @change=${this._valueChanged}
              .configValue=${"hide_past_days"}
            ></ha-textfield>
          </div>
        </div>
      `:I``}}),customElements.define("calcio-live-team",class extends ot{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object}}}setConfig(t){if(!t.entity)throw new Error("Devi definire un'entità");this._config=t,this.showPopup=!1,this.activeMatch=null}getCardSize(){return 3}static getConfigElement(){return document.createElement("calcio-live-team-editor")}static getStubConfig(){return{entity:"sensor.calcio_live"}}getMatchStatusText(t){return t.completed?`${t.home_score} - ${t.away_score} (Full Time)`:1===t.period||2===t.period?`${t.home_score} - ${t.away_score} (${t.clock})`:"Scheduled"===t.status?`${t.date}`:"Dati non disponibili"}showDetails(t){this.activeMatch=t,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(t){const e=[],i=[],s=[];return t.forEach((t=>{t.includes("Goal")||t.includes("Penalty - Scored")?e.push(t):t.includes("Yellow Card")?i.push(t):t.includes("Red Card")&&s.push(t)})),{goals:e,yellowCards:i,redCards:s}}renderMatchDetails(t,e){return t&&0!==t.length?"Scheduled"===match.status?`${match.date}`:"Dati non disponibili":I`<p>Nessun dettaglio disponibile.</p>`}renderPopup(){return this.showPopup&&this.activeMatch?I`
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
    `:I``}render(){if(!this.hass||!this._config)return I``;const t=this._config.entity,e=this.hass.states[t];if(!e)return I`<ha-card>Entità sconosciuta: ${t}</ha-card>`;const i=e.attributes.matches?e.attributes.matches[0]:null;return i?I`
      <ha-card>
        <div class="background-logos">
          <div class="background-logo home-logo">
            <img src="${i.home_logo}" alt="Logo squadra di casa" />
          </div>
          <div class="background-logo away-logo">
            <img src="${i.away_logo}" alt="Logo squadra ospite" />
          </div>
        </div>
        <div class="match-wrapper">
          <div class="match-header">
            <div class="match-competition">
              ${i.venue} | <span class="match-date">${i.date}</span>
              ${"Scheduled"!==i.status?I`<span class="info-icon" @click="${()=>this.showDetails(i)}">Info</span>`:""}
            </div>
          </div>
          <div class="match">
            <img class="team-logo" src="${i.home_logo}" alt="${i.home_team}" />
            <div class="match-info">
              <div class="team-name">${i.home_team}</div>
                <div class="match-result">
                ${this.getMatchStatusText(i)} <!-- Mostra lo stato e il risultato -->
                </div>
              <div class="team-name">${i.away_team}</div>
            </div>
            <img class="team-logo" src="${i.away_logo}" alt="${i.away_team}" />
          </div>
        </div>

        ${this.renderPopup()}
      </ha-card>
    `:I`<ha-card>Nessuna partita disponibile</ha-card>`}static get styles(){return o`
        ha-card {
          padding: 16px;
          box-sizing: border-box;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        /* Sezione background loghi */
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
        .team-header {
          text-align: center;
        }
        .team-logo {
          width: 80px;
          height: 80px;
          margin-left: 15px;
        }
        .match-header {
          text-align: center;
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 8px;
          color: blue;
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
          color: green;
        }
        .info-icon {
          font-size: 12px;
          color: var(--primary-color);
          cursor: pointer;
          margin-left: 8px;
        }
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: var(--primary-background-color);
          padding: 16px;
          border-radius: 8px;
          width: 80%;
          max-width: 400px;
          overflow-y: auto;
          max-height: 80vh;
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
      `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-team",name:"Calcio Live team Card",description:"Mostra le partite della tuo Team"}),customElements.define("calcio-live-team-editor",class extends ot{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this._entity="",this.entities=[]}static get styles(){return o`
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
    `}setConfig(t){if(!t)throw new Error("Invalid configuration");this._config={...t},this._entity=this._config.entity||""}get config(){return this._config}updated(t){t.has("hass")&&this._fetchEntities(),t.has("_config")&&this._config&&this._config.entity&&(this._entity=this._config.entity)}configChanged(t){const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}_EntityChanged(t){if(!this._config)return;const e={...this._config,entity:t.target.value};this._entity=t.target.value,this.configChanged(e)}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((t=>t.startsWith("sensor.calciolive_next"))).sort())}_valueChanged(t){if(!this._config)return;const e=t.target,i="number"===e.type?parseInt(e.value,10):void 0!==e.checked?e.checked:e.value;if(e.configValue){const t={...this._config,[e.configValue]:i};this.configChanged(t)}}render(){return this._config&&this.hass?I`
        <div class="card-config">
          <h4>CalcioLive Sensor:</h4>
          <ha-select
              naturalMenuWidth
              fixedMenuPosition
              label="Entity"
              .configValue=${"entity"}
              .value=${this._entity}
              @change=${t=>this._EntityChanged(t,"entity")}
              @closed=${t=>t.stopPropagation()}
              >
              ${this.entities.map((t=>I`<ha-list-item .value=${t}>${t}</ha-list-item>`))}
          </ha-select>
        </div>
      `:I``}})})();