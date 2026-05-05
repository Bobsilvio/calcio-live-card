/*! For license information please see calcio-live-card.bundle.js.LICENSE.txt */
(()=>{"use strict";const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;class s{constructor(e,t,a){if(this._$cssResult$=!0,a!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=a.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&a.set(i,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const a=1===e.length?e[0]:t.reduce(((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new s(a,e,i)},o=(i,a)=>{if(t)i.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of a){const a=document.createElement("style"),s=e.litNonce;void 0!==s&&a.setAttribute("nonce",s),a.textContent=t.cssText,i.appendChild(a)}},r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,u=globalThis,m=u.trustedTypes,f=m?m.emptyScript:"",v=u.reactiveElementPolyfillSupport,b=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!l(e,t),y={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);void 0!==a&&c(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:s}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return a?.call(this)},set(t){const n=a?.call(this);s.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...p(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return o(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(void 0!==a&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:x).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,a=i._$Eh.get(e);if(void 0!==a&&this._$Em!==a){const e=i.getPropertyOptions(a),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:x;this._$Em=a,this[a]=s.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??_)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,v?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.0.4");const $=globalThis,k=$.trustedTypes,C=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,z="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+E,A=`<${S}>`,T=document,M=()=>T.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,L="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,V=/-->/g,H=/>/g,O=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,R=/"/g,U=/^(?:script|style|textarea|title)$/i,F=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),B=F(1),I=F(2),q=(F(3),Symbol.for("lit-noChange")),G=Symbol.for("lit-nothing"),W=new WeakMap,J=T.createTreeWalker(T,129);function K(e,t){if(!j(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}class Y{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let s=0,n=0;const o=e.length-1,r=this.parts,[l,c]=((e,t)=>{const i=e.length-1,a=[];let s,n=2===t?"<svg>":3===t?"<math>":"",o=N;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===N?"!--"===l[1]?o=V:void 0!==l[1]?o=H:void 0!==l[2]?(U.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=s??N,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,r=l[1],o=void 0===l[3]?O:'"'===l[3]?R:D):o===R||o===D?o=O:o===V||o===H?o=N:(o=O,s=void 0);const p=o===O&&e[t+1].startsWith("/>")?" ":"";n+=o===N?i+A:c>=0?(a.push(r),i.slice(0,c)+z+i.slice(c)+E+p):i+E+(-2===c?t:p)}return[K(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),a]})(e,t);if(this.el=Y.createElement(l,i),J.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(a=J.nextNode())&&r.length<o;){if(1===a.nodeType){if(a.hasAttributes())for(const e of a.getAttributeNames())if(e.endsWith(z)){const t=c[n++],i=a.getAttribute(e).split(E),o=/([.?@])?(.*)/.exec(t);r.push({type:1,index:s,name:o[2],strings:i,ctor:"."===o[1]?te:"?"===o[1]?ie:"@"===o[1]?ae:ee}),a.removeAttribute(e)}else e.startsWith(E)&&(r.push({type:6,index:s}),a.removeAttribute(e));if(U.test(a.tagName)){const e=a.textContent.split(E),t=e.length-1;if(t>0){a.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],M()),J.nextNode(),r.push({type:2,index:++s});a.append(e[t],M())}}}else if(8===a.nodeType)if(a.data===S)r.push({type:2,index:s});else{let e=-1;for(;-1!==(e=a.data.indexOf(E,e+1));)r.push({type:7,index:s}),e+=E.length-1}s++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,a){if(t===q)return t;let s=void 0!==a?i.o?.[a]:i.l;const n=P(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),void 0===n?s=void 0:(s=new n(e),s._$AT(e,i,a)),void 0!==a?(i.o??=[])[a]=s:i.l=s),void 0!==s&&(t=X(e,s._$AS(e,t.values),s,a)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=(e?.creationScope??T).importNode(t,!0);J.currentNode=a;let s=J.nextNode(),n=0,o=0,r=i[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new Z(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new se(s,this,e)),this._$AV.push(t),r=i[++o]}n!==r?.index&&(s=J.nextNode(),n++)}return J.currentNode=T,a}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this.v}constructor(e,t,i,a){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this.v=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),P(e)?e===G||null==e||""===e?(this._$AH!==G&&this._$AR(),this._$AH=G):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>j(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==G&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,a="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===a)this._$AH.p(t);else{const e=new Q(a,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Y(e)),t}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const s of e)a===t.length?t.push(i=new Z(this.O(M()),this.O(M()),this,this.options)):i=t[a],i._$AI(s),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this.v=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}_$AI(e,t=this,i,a){const s=this.strings;let n=!1;if(void 0===s)e=X(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==q,n&&(this._$AH=e);else{const a=e;let o,r;for(e=s[0],o=0;o<s.length-1;o++)r=X(this,a[i+o],t,o),r===q&&(r=this._$AH[o]),n||=!P(r)||r!==this._$AH[o],r===G?e=G:e!==G&&(e+=(r??"")+s[o+1]),this._$AH[o]=r}n&&!a&&this.j(e)}j(e){e===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===G?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==G)}}class ae extends ee{constructor(e,t,i,a,s){super(e,t,i,a,s),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??G)===q)return;const i=this._$AH,a=e===G&&i!==G||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==G&&(i===G||a);a&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ne=$.litHtmlPolyfillSupport;ne?.(Y,Z),($.litHtmlVersions??=[]).push("3.2.0");class oe extends w{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.o=((e,t,i)=>{const a=i?.renderBefore??t;let s=a._$litPart$;if(void 0===s){const e=i?.renderBefore??null;a._$litPart$=s=new Z(t.insertBefore(M(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return q}}oe._$litElement$=!0,oe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:oe});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:oe}),(globalThis.litElementVersions??=[]).push("4.1.0");const le={en:{"card.bracket":"Bracket","card.lineup":"Lineups","card.timeline":"Timeline","card.news":"News","card.standings":"Standings","round.final":"Final","round.semifinals":"Semifinals","round.quarterfinals":"Quarterfinals","round.r16":"Round of 16","round.r32":"Round of 32","round.knockout_playoffs":"Knockout Playoffs","round.preliminary":"Preliminary Round","round.short.semifinals":"Semis","round.short.quarterfinals":"Quarters","round.short.r16":"R16","bracket.empty.title":"Bracket not available","bracket.empty.sub":"Knockout stage starts soon","bracket.tbd":"TBD","bracket.tied_agg":"Tied agg.","bracket.agg":"Agg.","status.live":"Live","status.finished":"Finished","status.scheduled":"Scheduled","status.full_time":"Full Time","status.halftime":"Halftime","status.first_half":"1st Half","status.second_half":"2nd Half","status.kickoff":"Kickoff","status.end":"End","event.goal":"Goal","event.yellow_card":"Yellow Card","event.red_card":"Red Card","event.substitution":"Substitution","event.var":"VAR","event.header":"Header","event.shot":"Shot","event.penalty":"Penalty","event.free_kick":"Free kick","form.W":"W","form.D":"D","form.L":"L","team.details":"Details","team.possession":"Possession","team.shots":"Shots","team.on_target":"On target","team.fouls":"Fouls","team.spectators":"spectators","team.top_scorer":"Top scorer","team.next_match":"Next match","team.in":"In","team.no_match":"No match available","team.unknown_entity":"Unknown entity","time.today":"Today","time.yesterday":"Yesterday","time.tomorrow":"Tomorrow","time.now":"now","time.in_n_min":"in {n} min","time.in_n_h":"in {n} h","time.in_n_d":"in {n} d","time.n_min_ago":"{n} min ago","time.n_h_ago":"{n} h ago","time.n_d_ago":"{n} d ago","lineup.bench":"Bench","lineup.empty.title":"Lineups not available","lineup.empty.sub":"Lineups are published shortly before kick-off","timeline.empty.title":"No events yet","timeline.empty.sub":"Events appear during the match","timeline.event":"Event","timeline.penalty":"Penalty","news.empty":"No news available","news.articles":"{n} articles","zone.champions":"Champions","zone.europa":"Europa","zone.relegation":"Relegation","col.pos":"#","col.team":"Team","col.played":"P","col.wins":"W","col.draws":"D","col.losses":"L","col.gd":"+/-","col.points":"Pts","generic.no_match":"No match available","generic.matches_count":"{n} matches","generic.unknown_entity":"Unknown entity","generic.close":"Close","generic.unknown":"Unknown","popup.match_details":"Match details","popup.lineups":"Lineups","popup.timeline":"Timeline","popup.h2h":"Head-to-head","popup.no_events":"No events available","month.1":"Jan","month.2":"Feb","month.3":"Mar","month.4":"Apr","month.5":"May","month.6":"Jun","month.7":"Jul","month.8":"Aug","month.9":"Sep","month.10":"Oct","month.11":"Nov","month.12":"Dec"},nl:{"card.bracket":"Schema","card.lineup":"Opstellingen","card.timeline":"Tijdlijn","card.news":"Nieuws","card.standings":"Stand","round.final":"Finale","round.semifinals":"Halve finales","round.quarterfinals":"Kwartfinales","round.r16":"Achtste finales","round.r32":"Zestiende finales","round.knockout_playoffs":"Knock-out play-offs","round.preliminary":"Voorronde","round.short.semifinals":"Halve finales","round.short.quarterfinals":"Kwart","round.short.r16":"8e finale","bracket.empty.title":"Schema niet beschikbaar","bracket.empty.sub":"De knock-outfase begint binnenkort","bracket.tbd":"N.t.b.","bracket.tied_agg":"Gelijk totaal","bracket.agg":"Totaal","status.live":"Live","status.finished":"Afgelopen","status.scheduled":"Gepland","status.full_time":"Einde wedstrijd","status.halftime":"Rust","status.first_half":"1e helft","status.second_half":"2e helft","status.kickoff":"Aftrap","status.end":"Einde","event.goal":"Doelpunt","event.yellow_card":"Gele kaart","event.red_card":"Rode kaart","event.substitution":"Wissel","event.var":"VAR","event.header":"Kopbal","event.shot":"Schot","event.penalty":"Penalty","event.free_kick":"Vrije trap","form.W":"W","form.D":"G","form.L":"V","team.details":"Details","team.possession":"Balbezit","team.shots":"Schoten","team.on_target":"Op doel","team.fouls":"Overtredingen","team.spectators":"toeschouwers","team.top_scorer":"Topscorer","team.next_match":"Volgende wedstrijd","team.in":"Over","team.no_match":"Geen wedstrijd beschikbaar","team.unknown_entity":"Onbekende entiteit","time.today":"Vandaag","time.yesterday":"Gisteren","time.tomorrow":"Morgen","time.now":"nu","time.in_n_min":"over {n} min","time.in_n_h":"over {n} uur","time.in_n_d":"over {n} dagen","time.n_min_ago":"{n} min geleden","time.n_h_ago":"{n} uur geleden","time.n_d_ago":"{n} dagen geleden","lineup.bench":"Bank","lineup.empty.title":"Opstellingen niet beschikbaar","lineup.empty.sub":"Opstellingen worden kort voor de aftrap gepubliceerd","timeline.empty.title":"Nog geen gebeurtenissen","timeline.empty.sub":"Gebeurtenissen verschijnen tijdens de wedstrijd","timeline.event":"Gebeurtenis","timeline.penalty":"Penalty","news.empty":"Geen nieuws beschikbaar","news.articles":"{n} artikelen","zone.champions":"Champions League","zone.europa":"Europa League","zone.relegation":"Degradatie","col.pos":"#","col.team":"Team","col.played":"G","col.wins":"W","col.draws":"G","col.losses":"V","col.gd":"+/-","col.points":"Pnt","generic.no_match":"Geen wedstrijd beschikbaar","generic.matches_count":"{n} wedstrijden","generic.unknown_entity":"Onbekende entiteit","generic.close":"Sluiten","generic.unknown":"Onbekend","popup.match_details":"Wedstrijddetails","popup.lineups":"Opstellingen","popup.timeline":"Tijdlijn","popup.h2h":"Onderlinge duels","popup.no_events":"Geen gebeurtenissen beschikbaar","month.1":"Jan","month.2":"Feb","month.3":"Mrt","month.4":"Apr","month.5":"Mei","month.6":"Jun","month.7":"Jul","month.8":"Aug","month.9":"Sep","month.10":"Okt","month.11":"Nov","month.12":"Dec"},it:{"card.bracket":"Tabellone","card.lineup":"Formazioni","card.timeline":"Cronologia","card.news":"Notizie","card.standings":"Classifica","round.final":"Finale","round.semifinals":"Semifinali","round.quarterfinals":"Quarti di finale","round.r16":"Ottavi di finale","round.r32":"Sedicesimi","round.knockout_playoffs":"Spareggi KO","round.preliminary":"Turno preliminare","round.short.semifinals":"Semi","round.short.quarterfinals":"Quarti","round.short.r16":"Ottavi","bracket.empty.title":"Tabellone non disponibile","bracket.empty.sub":"La fase a eliminazione diretta inizierà presto","bracket.tbd":"Da def.","bracket.tied_agg":"Pari aggreg.","bracket.agg":"Aggreg.","status.live":"Diretta","status.finished":"Finita","status.scheduled":"Programmata","status.full_time":"Termine","status.halftime":"Intervallo","status.first_half":"Primo Tempo","status.second_half":"Secondo Tempo","status.kickoff":"Inizio","status.end":"Fine","event.goal":"Goal","event.yellow_card":"Cartellino giallo","event.red_card":"Cartellino rosso","event.substitution":"Sostituzione","event.var":"VAR","form.W":"V","form.D":"N","form.L":"P","team.details":"Dettagli","team.possession":"Possesso","team.shots":"Tiri","team.on_target":"In porta","team.fouls":"Falli","team.spectators":"spettatori","team.top_scorer":"Capocannoniere","team.next_match":"Prossima partita","team.in":"A","team.no_match":"Nessuna partita disponibile","team.unknown_entity":"Entità sconosciuta","time.today":"Oggi","time.yesterday":"Ieri","time.tomorrow":"Domani","time.now":"ora","time.in_n_min":"tra {n} min","time.in_n_h":"tra {n} h","time.in_n_d":"tra {n} g","time.n_min_ago":"{n} min fa","time.n_h_ago":"{n} h fa","time.n_d_ago":"{n} g fa","lineup.bench":"Panchina","lineup.empty.title":"Formazioni non disponibili","lineup.empty.sub":"Le formazioni vengono pubblicate poco prima del fischio d'inizio","timeline.empty.title":"Nessun evento ancora","timeline.empty.sub":"Gli eventi compaiono durante la partita","timeline.event":"Evento","timeline.penalty":"Rigore","news.empty":"Nessuna notizia disponibile","news.articles":"{n} articoli","zone.champions":"Champions","zone.europa":"Europa","zone.relegation":"Retrocessione","col.pos":"#","col.team":"Squadra","col.played":"P","col.wins":"V","col.draws":"N","col.losses":"S","col.gd":"+/-","col.points":"Pt","generic.no_match":"Nessuna partita disponibile","generic.matches_count":"{n} partite","generic.unknown_entity":"Entità sconosciuta","generic.close":"Chiudi","popup.match_details":"Dettagli partita","popup.lineups":"Formazioni","popup.timeline":"Cronologia","popup.h2h":"Precedenti","popup.no_events":"Nessun evento disponibile","month.1":"Gen","month.2":"Feb","month.3":"Mar","month.4":"Apr","month.5":"Mag","month.6":"Giu","month.7":"Lug","month.8":"Ago","month.9":"Set","month.10":"Ott","month.11":"Nov","month.12":"Dic"},fr:{"card.bracket":"Tableau","card.lineup":"Compositions","card.timeline":"Chronologie","card.news":"Actualités","card.standings":"Classement","round.final":"Finale","round.semifinals":"Demi-finales","round.quarterfinals":"Quarts de finale","round.r16":"Huitièmes de finale","round.r32":"Seizièmes","round.knockout_playoffs":"Barrages","round.preliminary":"Tour préliminaire","round.short.semifinals":"Demis","round.short.quarterfinals":"Quarts","round.short.r16":"8èmes","bracket.empty.title":"Tableau non disponible","bracket.empty.sub":"La phase à élimination directe commencera bientôt","bracket.tbd":"À déf.","bracket.tied_agg":"Score cumulé égal","bracket.agg":"Cumul","status.live":"En direct","status.finished":"Terminé","status.scheduled":"Programmé","status.full_time":"Temps régl.","status.halftime":"Mi-temps","status.first_half":"1ère mi-temps","status.second_half":"2ème mi-temps","status.kickoff":"Coup d'envoi","status.end":"Fin","event.goal":"But","event.yellow_card":"Carton jaune","event.red_card":"Carton rouge","event.substitution":"Remplacement","event.var":"VAR","form.W":"V","form.D":"N","form.L":"D","team.details":"Détails","team.possession":"Possession","team.shots":"Tirs","team.on_target":"Cadrés","team.fouls":"Fautes","team.spectators":"spectateurs","team.top_scorer":"Meilleur buteur","team.next_match":"Prochain match","team.in":"À","team.no_match":"Aucun match disponible","team.unknown_entity":"Entité inconnue","time.today":"Aujourd'hui","time.yesterday":"Hier","time.tomorrow":"Demain","time.now":"maintenant","time.in_n_min":"dans {n} min","time.in_n_h":"dans {n} h","time.in_n_d":"dans {n} j","time.n_min_ago":"il y a {n} min","time.n_h_ago":"il y a {n} h","time.n_d_ago":"il y a {n} j","lineup.bench":"Banc","lineup.empty.title":"Compositions non disponibles","lineup.empty.sub":"Les compositions sont publiées peu avant le coup d'envoi","timeline.empty.title":"Aucun événement","timeline.empty.sub":"Les événements apparaissent pendant le match","timeline.event":"Événement","timeline.penalty":"Penalty","news.empty":"Aucune actualité disponible","news.articles":"{n} articles","zone.champions":"Champions","zone.europa":"Europa","zone.relegation":"Relégation","col.pos":"#","col.team":"Équipe","col.played":"J","col.wins":"G","col.draws":"N","col.losses":"P","col.gd":"+/-","col.points":"Pts","generic.no_match":"Aucun match disponible","generic.matches_count":"{n} matchs","generic.unknown_entity":"Entité inconnue","generic.close":"Fermer","popup.match_details":"Détails du match","popup.lineups":"Compositions","popup.timeline":"Chronologie","popup.h2h":"Confrontations","popup.no_events":"Aucun événement disponible","month.1":"Janv","month.2":"Févr","month.3":"Mars","month.4":"Avr","month.5":"Mai","month.6":"Juin","month.7":"Juil","month.8":"Août","month.9":"Sept","month.10":"Oct","month.11":"Nov","month.12":"Déc"},es:{"card.bracket":"Cuadro","card.lineup":"Alineaciones","card.timeline":"Cronología","card.news":"Noticias","card.standings":"Clasificación","round.final":"Final","round.semifinals":"Semifinales","round.quarterfinals":"Cuartos de final","round.r16":"Octavos de final","round.r32":"Dieciseisavos","round.knockout_playoffs":"Eliminatorias previas","round.preliminary":"Ronda preliminar","round.short.semifinals":"Semis","round.short.quarterfinals":"Cuartos","round.short.r16":"Octavos","bracket.empty.title":"Cuadro no disponible","bracket.empty.sub":"La fase eliminatoria comenzará pronto","bracket.tbd":"Por def.","bracket.tied_agg":"Empate global","bracket.agg":"Global","status.live":"En vivo","status.finished":"Finalizado","status.scheduled":"Programado","status.full_time":"Final","status.halftime":"Descanso","status.first_half":"Primer tiempo","status.second_half":"Segundo tiempo","status.kickoff":"Saque inicial","status.end":"Fin","event.goal":"Gol","event.yellow_card":"Tarjeta amarilla","event.red_card":"Tarjeta roja","event.substitution":"Sustitución","event.var":"VAR","form.W":"V","form.D":"E","form.L":"D","team.details":"Detalles","team.possession":"Posesión","team.shots":"Tiros","team.on_target":"Al arco","team.fouls":"Faltas","team.spectators":"espectadores","team.top_scorer":"Goleador","team.next_match":"Próximo partido","team.in":"En","team.no_match":"Ningún partido disponible","team.unknown_entity":"Entidad desconocida","time.today":"Hoy","time.yesterday":"Ayer","time.tomorrow":"Mañana","time.now":"ahora","time.in_n_min":"en {n} min","time.in_n_h":"en {n} h","time.in_n_d":"en {n} d","time.n_min_ago":"hace {n} min","time.n_h_ago":"hace {n} h","time.n_d_ago":"hace {n} d","lineup.bench":"Banquillo","lineup.empty.title":"Alineaciones no disponibles","lineup.empty.sub":"Las alineaciones se publican poco antes del saque inicial","timeline.empty.title":"Aún no hay eventos","timeline.empty.sub":"Los eventos aparecen durante el partido","timeline.event":"Evento","timeline.penalty":"Penalti","news.empty":"No hay noticias disponibles","news.articles":"{n} artículos","zone.champions":"Champions","zone.europa":"Europa","zone.relegation":"Descenso","col.pos":"#","col.team":"Equipo","col.played":"PJ","col.wins":"G","col.draws":"E","col.losses":"P","col.gd":"+/-","col.points":"Pts","generic.no_match":"Ningún partido disponible","generic.matches_count":"{n} partidos","generic.unknown_entity":"Entidad desconocida","generic.close":"Cerrar","popup.match_details":"Detalles del partido","popup.lineups":"Alineaciones","popup.timeline":"Cronología","popup.h2h":"Enfrentamientos","popup.no_events":"Sin eventos disponibles","month.1":"Ene","month.2":"Feb","month.3":"Mar","month.4":"Abr","month.5":"May","month.6":"Jun","month.7":"Jul","month.8":"Ago","month.9":"Sep","month.10":"Oct","month.11":"Nov","month.12":"Dic"}},ce=["en","it","fr","es","nl"];function de(e,t){const i=[];t&&"string"==typeof t.language&&i.push(t.language),e&&e.locale&&e.locale.language&&i.push(e.locale.language),e&&e.language&&i.push(e.language);for(const e of i){if(!e)continue;const t=String(e).toLowerCase().split("-")[0];if(ce.includes(t))return t}return"en"}function pe(e,t,i){let a=(le[t]||le.en)[e];return void 0===a&&(a=le.en[e]),void 0===a?e:(i&&Object.keys(i).forEach((e=>{a=a.replace(new RegExp("\\{"+e+"\\}","g"),i[e])})),a)}customElements.define("calcio-live-classifica",class extends oe{static get properties(){return{hass:{},_config:{},maxTeamsVisible:{type:Number},hideHeader:{type:Boolean},selectedGroup:{type:String},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this.maxTeamsVisible=e.max_teams_visible?e.max_teams_visible:10,this.hideHeader=e.hide_header||!1,this.selectedGroup=e.selected_group||"",this.showEventToasts=!0===e.show_event_toasts,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}_t(e,t){return pe(e,de(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((e=>{e&&e.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],["calcio_live_goal","calcio_live_yellow_card","calcio_live_red_card","calcio_live_match_finished"].forEach((e=>{this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),e))})))}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this._config.entity||"",i=e.competition_code;if(!i)return!1;const a=i.replace(/\./g,"_").toLowerCase();return t.toLowerCase().includes(a)}_handleCalcioLiveEvent(e){const t=e.event_type,i=e.data;this._eventBelongsToThisCard(i)&&this.showEventToasts&&this._showEventToast(t,i)}_showEventToast(e,t){let i="",a="goal";"calcio_live_goal"===e?(i=`<strong>GOAL!</strong> ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,a="goal"):"calcio_live_yellow_card"===e?(i=`🟨 <strong>Cartellino Giallo</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,a="yellow"):"calcio_live_red_card"===e?(i=`🟥 <strong>Cartellino Rosso</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,a="red"):"calcio_live_match_finished"===e&&(i=`<strong>Finita!</strong> ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,a="finished"),i&&(this._toastMessage=i,this._toastVariant=a,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}getCardSize(){return 5}static getConfigElement(){return document.createElement("calcio-live-classifica-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_teams_visible:10,hide_header:!1,selected_group:"",show_event_toasts:!1}}_zoneClass(e,t){return 1===e?"zone-cl rank-first":e<=4?"zone-cl":e<=6?"zone-el":t&&e>t-3?"zone-rel":"zone-default"}render(){if(!this.hass||!this._config)return B``;const e=this._config.entity,t=this.hass.states[e];if(!t)return B`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;const i=t.attributes.season||"",a=t.attributes.standings_groups||[],s=a.find((e=>e.name===this.selectedGroup))||a[0];let n=s?s.standings:[];n=n.filter((e=>null!=e.rank)),i.includes("MLS")?(n=n.slice().sort(((e,t)=>t.points!==e.points?t.points-e.points:t.goal_difference!==e.goal_difference?t.goal_difference-e.goal_difference:t.goals_for-e.goals_for)),n.forEach(((e,t)=>{e.rank=t+1}))):n=n.slice().sort(((e,t)=>e.rank-t.rank));const o=n.length,r=48*Math.min(this.maxTeamsVisible,o)+50;return B`
      <ha-card>
        ${this.showEventToasts&&this._toastVisible?B`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        `:""}

        ${this.hideHeader?"":B`
          <div class="top-bar">
            <h2>${t.state}</h2>
            <div class="sub">${i} ${s&&s.name?`· ${s.name}`:""}</div>
          </div>
        `}

        <div class="table-wrap" style="max-height: ${r}px;">
          <table class="standings-table">
            <thead>
              <tr>
                <th>${this._t("col.pos")}</th>
                <th class="team-col">${this._t("col.team")}</th>
                <th>${this._t("col.played")}</th>
                <th>${this._t("col.wins")}</th>
                <th>${this._t("col.draws")}</th>
                <th>${this._t("col.losses")}</th>
                <th>${this._t("col.gd")}</th>
                <th>${this._t("col.points")}</th>
              </tr>
            </thead>
            <tbody>
              ${n.map((e=>{const t=e=>{if(null==e||""===e)return null;const t=parseInt(String(e).replace("+",""),10);return isNaN(t)?null:t},i=t(e.wins),a=t(e.draws),s=t(e.losses),n=t(e.goal_difference),r=null!==i&&null!==a&&null!==s?i+a+s:null,l=null===n?"":n>0?"gd-pos":n<0?"gd-neg":"",c=null===n?"-":n>0?`+${n}`:`${n}`;return B`
                  <tr class="${this._zoneClass(e.rank,o)}">
                    <td><div class="rank-cell"><div class="rank-num">${e.rank}</div></div></td>
                    <td class="team-cell">
                      <img src="${e.team_logo}" alt="${e.team_name}" />
                      <span class="tname">${e.team_name}</span>
                    </td>
                    <td>${r??"-"}</td>
                    <td>${i??"-"}</td>
                    <td>${a??"-"}</td>
                    <td>${s??"-"}</td>
                    <td class="${l}">${c}</td>
                    <td class="points-cell">${e.points??"-"}</td>
                  </tr>
                `}))}
            </tbody>
          </table>
        </div>

        <div class="legend">
          <div class="legend-item"><span class="legend-dot cl"></span>${this._t("zone.champions")}</div>
          <div class="legend-item"><span class="legend-dot el"></span>${this._t("zone.europa")}</div>
          <div class="legend-item"><span class="legend-dot rel"></span>${this._t("zone.relegation")}</div>
        </div>
      </ha-card>
    `}static get styles(){return n`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-glow: rgba(251,191,36,0.4);
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-cl: #6366f1;
        --cl-el: #f97316;
        --cl-rel: #ef4444;
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .top-bar {
        position: relative;
        padding: 20px 18px;
        background:
          linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.10) 60%, transparent);
        border-bottom: 1px solid var(--cl-divider);
        overflow: hidden;
      }
      .top-bar::before {
        content: '⚽';
        position: absolute;
        right: -10px; top: -10px;
        font-size: 90px;
        opacity: 0.06;
        transform: rotate(15deg);
      }
      .top-bar h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 900;
        letter-spacing: -0.03em;
        background: linear-gradient(135deg, var(--primary-text-color), var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .top-bar .sub {
        color: var(--secondary-text-color);
        font-size: 12px;
        margin-top: 4px;
        font-weight: 500;
      }

      .table-wrap {
        overflow-y: auto;
      }
      .standings-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
        font-size: 13px;
      }
      .standings-table thead th {
        position: sticky;
        top: 0;
        background: var(--cl-card-2);
        backdrop-filter: blur(8px);
        padding: 10px 4px;
        text-align: center;
        font-size: 10px;
        font-weight: 800;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border-bottom: 1px solid var(--cl-divider);
        z-index: 1;
      }
      .standings-table thead th:first-child { padding-left: 14px; text-align: left; }
      .standings-table thead th:last-child { padding-right: 14px; }
      .standings-table thead th.team-col { text-align: left; }

      .standings-table tbody tr {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .standings-table tbody tr:hover {
        background: var(--cl-card-2);
      }
      .standings-table tbody td {
        padding: 10px 4px;
        text-align: center;
        border-bottom: 1px solid var(--cl-divider);
        font-variant-numeric: tabular-nums;
        font-weight: 600;
        color: var(--primary-text-color);
      }
      .standings-table tbody tr:last-child td { border-bottom: none; }
      .standings-table tbody td:first-child { padding-left: 14px; text-align: left; }
      .standings-table tbody td:last-child { padding-right: 14px; }

      .rank-cell {
        display: flex; align-items: center; gap: 6px;
        font-weight: 800;
      }
      .rank-num {
        width: 24px; height: 24px;
        border-radius: 7px;
        display: flex; align-items: center; justify-content: center;
        font-size: 11px;
        font-weight: 900;
      }
      .zone-cl .rank-num {
        background: linear-gradient(135deg, var(--cl-cl), #4f46e5);
        color: white;
        box-shadow: 0 2px 12px rgba(99,102,241,0.4);
      }
      .zone-cl.rank-first .rank-num {
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        color: #1f1410;
        box-shadow: 0 2px 16px var(--cl-gold-glow);
        animation: gold-shimmer 3s ease-in-out infinite;
      }
      @keyframes gold-shimmer {
        0%, 100% { box-shadow: 0 2px 16px var(--cl-gold-glow); }
        50% { box-shadow: 0 2px 24px var(--cl-gold-glow), 0 0 32px var(--cl-gold-glow); }
      }
      .zone-el .rank-num {
        background: linear-gradient(135deg, var(--cl-el), #ea580c);
        color: white;
        box-shadow: 0 2px 12px rgba(249,115,22,0.4);
      }
      .zone-rel .rank-num {
        background: linear-gradient(135deg, var(--cl-rel), #b91c1c);
        color: white;
        box-shadow: 0 2px 12px rgba(239,68,68,0.4);
      }
      .zone-default .rank-num {
        background: var(--cl-card-2);
        color: var(--secondary-text-color);
      }

      .team-cell {
        display: flex; align-items: center; gap: 10px;
        text-align: left !important;
      }
      .team-cell img {
        width: 24px; height: 24px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-cell .tname {
        font-weight: 700;
        font-size: 13px;
        letter-spacing: -0.01em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .points-cell {
        font-weight: 900 !important;
        font-size: 14px !important;
      }
      .gd-pos { color: var(--cl-green); font-weight: 800 !important; }
      .gd-neg { color: var(--cl-live); font-weight: 800 !important; }

      .legend {
        display: flex; flex-wrap: wrap;
        gap: 12px;
        padding: 12px 16px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      .legend-item {
        display: flex; align-items: center; gap: 6px;
        font-size: 10px;
        color: var(--secondary-text-color);
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .legend-dot {
        width: 10px; height: 10px; border-radius: 3px;
      }
      .legend-dot.cl { background: linear-gradient(135deg, var(--cl-cl), #4f46e5); }
      .legend-dot.el { background: linear-gradient(135deg, var(--cl-el), #ea580c); }
      .legend-dot.rel { background: linear-gradient(135deg, var(--cl-rel), #b91c1c); }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: #0b0f1a;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow: 0 0 0 2px var(--cl-gold), 0 0 0 4px rgba(251,191,36,0.3),
                    0 12px 40px rgba(0,0,0,0.7), 0 0 60px rgba(251,191,36,0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      .event-toast.variant-finished {
        box-shadow: 0 0 0 2px var(--cl-green), 0 0 0 4px rgba(16,185,129,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-finished strong { color: #6ee7b7; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-classifica",name:"Calcio Live Classifica Card",description:"Mostra la classifica del campionato o coppe"}),customElements.define("calcio-live-classifica-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array},groups:{type:Array}}}constructor(){super(),this.entities=[],this.groups=[]}static get styles(){return n`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select, input[type="number"] {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus, input:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities(),(e.has("_config")||e.has("hass"))&&this._config&&this._config.entity&&this._fetchGroups()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_groupChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.selected_group&&this._fireConfigChanged({...this._config,selected_group:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.checked;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.value;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=parseInt(t.value,10);isNaN(a)||this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor.calciolive_classifica"))).sort())}_fetchGroups(){const e=this._config&&this._config.entity;if(!this.hass||!e)return void(this.groups=[]);const t=this.hass.states[e];t&&t.attributes&&t.attributes.standings_groups?this.groups=t.attributes.standings_groups.map((e=>e.name)):this.groups=[]}render(){if(!this._config||!this.hass)return B``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return B`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":B`<option value="${e}" selected>${e||"— seleziona —"}</option>`}
            ${this.entities.map((t=>B`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `))}
          </select>
        </div>

        <h3>Impostazioni</h3>
        <div>
          <label class="field-label">Gruppo</label>
          <select @change=${this._groupChanged}>
            <option value="" ?selected=${!this._config.selected_group}>— Tutti —</option>
            ${this.groups.map((e=>B`
              <option value="${e}" ?selected=${e===this._config.selected_group}>${e}</option>
            `))}
          </select>
        </div>

        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>Show Event Toasts (in-card)</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div>
          <label class="field-label">Max Teams Visible</label>
          <input
            type="number"
            min="1"
            max="50"
            .value=${this._config.max_teams_visible||10}
            data-config-value="max_teams_visible"
            @change=${this._numberChanged}
          />
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("calcio-live-matches",class extends oe{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_recentEventMatches:{type:Object},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}constructor(){super(),this._recentEventMatches=new Map,this._eventSubscriptions=[],this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this.maxEventsVisible=e.max_events_visible?e.max_events_visible:5,this.maxEventsTotal=e.max_events_total?e.max_events_total:50,this.showFinishedMatches=void 0===e.show_finished_matches||e.show_finished_matches,this.hideHeader=void 0!==e.hide_header&&e.hide_header,this.hidePastDays=void 0!==e.hide_past_days?e.hide_past_days:0,this.showEventToasts=!0===e.show_event_toasts,this.activeMatch=null,this.showPopup=!1}_t(e,t){return pe(e,de(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((e=>{e&&e.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],["calcio_live_goal","calcio_live_yellow_card","calcio_live_red_card"].forEach((e=>{this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),e))})))}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this.hass.states[this._config.entity];return!!t&&(t.attributes.matches||[]).some((t=>t.home_team===e.home_team&&t.away_team===e.away_team))}_handleCalcioLiveEvent(e){const t=e.event_type,i=e.data;if(!this._eventBelongsToThisCard(i))return;const a=`${i.home_team}_${i.away_team}`;this._recentEventMatches.set(a,"calcio_live_goal"===t?"goal":"card"),this.requestUpdate(),setTimeout((()=>{this._recentEventMatches.delete(a),this.requestUpdate()}),5e3),this.showEventToasts&&this._showEventToast(t,i)}_showEventToast(e,t){let i="",a="goal";"calcio_live_goal"===e?(i=`<strong>${this._t("event.goal").toUpperCase()}!</strong> ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,a="goal"):"calcio_live_yellow_card"===e?(i=`🟨 <strong>${this._t("event.yellow_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,a="yellow"):"calcio_live_red_card"===e&&(i=`🟥 <strong>${this._t("event.red_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,a="red"),i&&(this._toastMessage=i,this._toastVariant=a,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}getCardSize(){return 4}static getConfigElement(){return document.createElement("calcio-live-matches-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",max_events_visible:5,max_events_total:50,hide_past_days:0,show_finished_matches:!0,hide_header:!1,show_event_toasts:!1}}_parseMatchDate(e){if(!e)return null;const[t,i]=e.split(" "),[a,s,n]=t.split("/").map(Number),[o,r]=i?i.split(":").map(Number):[0,0];return new Date(n,s-1,a,o,r)}_matchTimeLabel(e){if("in"===e.state)return e.clock&&"N/A"!==e.clock?e.clock:"LIVE";if("post"===e.state)return"FT";if(e.date){const t=e.date.split(" ");return t[1]||t[0]}return"—"}_matchScore(e,t){return"pre"===e.state?"-":e["home"===t?"home_score":"away_score"]??"-"}_isWinner(e,t){if("pre"===e.state)return null;const i=parseInt(e.home_score),a=parseInt(e.away_score);return isNaN(i)||isNaN(a)||i===a?null:"home"===t?i>a:a>i}_dayKey(e){if(!e.date)return"—";const t=this._parseMatchDate(e.date);if(!t)return e.date.split(" ")[0]||"—";const i=new Date;i.setHours(0,0,0,0);const a=new Date(t);a.setHours(0,0,0,0);const s=Math.round((a-i)/864e5);if(0===s)return"⚡ "+this._t("time.today");if(-1===s)return this._t("time.yesterday");if(1===s)return this._t("time.tomorrow");const n=this._t("month."+(a.getMonth()+1));return`${a.getDate()} ${n}`}showDetails(e){this.activeMatch=e,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(e){const t=[],i=[],a=[];return e.forEach((e=>{const s=String(e||"");s.includes("Goal")||s.includes("Penalty - Scored")?t.push(this.formatMatchEvent(s)):s.includes("Yellow Card")?i.push(this.formatMatchEvent(s)):s.includes("Red Card")&&a.push(this.formatMatchEvent(s))})),{goals:t,yellowCards:i,redCards:a}}formatMatchEvent(e){const t=e=>this._t(e);let i=String(e||"").trim();i=i.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),i=i.replace(/^([^:]+):\s*/,"$1 ");const a=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map((e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")));return i=i.replace(new RegExp(`^(${a.join("|")})\\s*-\\s*(.+)$`,"i"),((e,t,i)=>`${i} (${t.toLowerCase()})`)),i=i.replace(/\bN\/A\b/g,t("generic.unknown")),i}render(){if(!this.hass||!this._config)return B``;const e=this._config.entity,t=this.hass.states[e];if(!t)return B`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;let i=t.attributes.matches||[];const a=t.attributes.league_info?t.attributes.league_info[0]:null,s=t.attributes.team_logo||null;if(this.showFinishedMatches||(i=i.filter((e=>"Full Time"!==e.status))),i=i.slice().sort(((e,t)=>new Date(e.date)-new Date(t.date))),this.hidePastDays>0){const e=new Date;e.setDate(e.getDate()-this.hidePastDays),i=i.filter((t=>{const i=this._parseMatchDate(t.date);return!i||i>=e}))}const n=i.slice(0,this.maxEventsTotal);if(0===n.length)return B`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`;const o=n.filter((e=>"in"===e.state)).length,r=[];let l=null;n.forEach((e=>{const t=this._dayKey(e);t!==l?(l=t,r.push({key:t,matches:[e]})):r[r.length-1].matches.push(e)}));const c=Math.max(80*this.maxEventsVisible,240);return B`
      <ha-card>
        <div class="hero-bg"></div>

        ${this.showEventToasts&&this._toastVisible?B`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        `:""}

        ${this.hideHeader?"":B`
          <div class="matches-header">
            ${a&&a.logo_href?B`<img class="league-logo" src="${a.logo_href}" alt="${a.abbreviation||""}" />`:s?B`<img class="league-logo" src="${s}" alt="" />`:""}
            <div class="league-info">
              <div class="league-name">${a&&a.abbreviation||t.state||"Calcio Live"}</div>
              <div class="league-dates">
                ${a&&a.startDate?`${a.startDate} → ${a.endDate}`:this._t("generic.matches_count",{n:n.length})}
              </div>
            </div>
            ${o>0?B`<span class="live-counter">${o} LIVE</span>`:""}
          </div>
        `}

        <div class="scroll-content" style="max-height: ${c}px;">
          ${r.map((e=>B`
            <div class="day-divider ${e.key.includes("Oggi")?"today":""}">${e.key}</div>
            ${e.matches.map((e=>{const t=`${e.home_team}_${e.away_team}`,i="in"===e.state,a=this._recentEventMatches.get(t),s=this._isWinner(e,"home"),n=this._isWinner(e,"away"),o=e.broadcast&&""!==e.broadcast&&"N/A"!==e.broadcast?e.broadcast:"",r="pre"===e.state;return B`
                <div class="match-row ${i?"live":""} ${"goal"===a?"goal-pulse":""} ${"card"===a?"card-pulse":""}"
                     @click="${()=>this.showDetails(e)}">
                  <div class="match-time ${i?"live-time":""} ${"post"===e.state?"ft":""}">
                    ${this._matchTimeLabel(e)}
                  </div>
                  <div class="match-teams">
                    <div class="match-team">
                      <img src="${e.home_logo}" alt="${e.home_team}" />
                      <span class="name ${!0===s?"winner":!1===s?"loser":""}">${e.home_team}</span>
                      <span class="score ${!0===s?"winner":!1===s?"loser":""}">${this._matchScore(e,"home")}</span>
                    </div>
                    <div class="match-team">
                      <img src="${e.away_logo}" alt="${e.away_team}" />
                      <span class="name ${!0===n?"winner":!1===n?"loser":""}">${e.away_team}</span>
                      <span class="score ${!0===n?"winner":!1===n?"loser":""}">${this._matchScore(e,"away")}</span>
                    </div>
                    ${o&&r?B`
                      <div class="row-extras">
                        <span class="tv-chip" title="Diretta TV">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                          ${o}
                        </span>
                      </div>
                    `:""}
                  </div>
                  <div class="match-status-icon">›</div>
                </div>
              `}))}
          `))}
        </div>
      </ha-card>
    `}updated(e){(e.has("showPopup")||e.has("activeMatch"))&&this.renderPopupToBody()}renderPopupToBody(){if(!this.showPopup||!this.activeMatch){const e=document.getElementById("calcio-live-matches-popup");return void(e&&e.remove())}let e=document.getElementById("calcio-live-matches-popup");e||(e=document.createElement("div"),e.id="calcio-live-matches-popup",e.style.cssText="\n        position: fixed; inset: 0;\n        display: flex; justify-content: center; align-items: center;\n        z-index: 999999;\n        background: rgba(0,0,0,0.7);\n        backdrop-filter: blur(8px);\n        overflow: auto;\n      ",e.addEventListener("click",(t=>{t.target===e&&(this.showPopup=!1)})),document.body.appendChild(e));const t=this.activeMatch,i=e=>this._t(e);e.innerHTML=`\n      <div style="background:#1a1f2e; padding:24px; border-radius:20px; width:90%; max-width:560px; max-height:85vh; overflow-y:auto; border:1px solid rgba(255,255,255,0.08); box-shadow:0 24px 64px rgba(0,0,0,0.6); margin:auto; color:#f8fafc; font-family:-apple-system,BlinkMacSystemFont,'SF Pro Display',sans-serif;">\n        <h3 style="margin:0 0 20px; font-size:22px; font-weight:800; letter-spacing:-0.02em; background:linear-gradient(135deg,#6366f1,#ec4899); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">${i("popup.match_details")}</h3>\n        <div style="display:flex; justify-content:center; align-items:center; gap:18px; margin-bottom:24px;">\n          <img style="width:64px; height:64px; object-fit:contain;" src="${t.home_logo}" alt="${t.home_team}" />\n          <div style="text-align:center;">\n            <div style="font-size:38px; font-weight:900; letter-spacing:-0.04em; line-height:1;">${t.home_score??"-"} <span style="opacity:0.4;">-</span> ${t.away_score??"-"}</div>\n            <div style="font-size:12px; color:#94a3b8; margin-top:8px; font-weight:600;">${t.clock??t.status??""}</div>\n          </div>\n          <img style="width:64px; height:64px; object-fit:contain;" src="${t.away_logo}" alt="${t.away_team}" />\n        </div>\n        <p style="text-align:center; color:#cbd5e1; font-size:14px; margin:0 0 20px;"><strong>${t.home_team}</strong> vs <strong>${t.away_team}</strong></p>\n        <div id="matches-events-container"></div>\n        <button id="popup-close-btn" style="background:linear-gradient(135deg,#6366f1,#ec4899); color:white; padding:12px 20px; border:none; border-radius:12px; cursor:pointer; margin-top:20px; font-weight:800; width:100%; font-size:14px;">${i("generic.close")}</button>\n      </div>\n    `;const a=e.querySelector("#popup-close-btn");a&&a.addEventListener("click",(()=>{this.showPopup=!1}));const s=e.querySelector("#matches-events-container"),{goals:n,yellowCards:o,redCards:r}=this.separateEvents(t.match_details||[]),l=(e,t,i)=>t.length?`<div style="margin-bottom:14px; padding:14px; background:${i.bg}; border-left:3px solid ${i.border}; border-radius:10px;">\n        <h5 style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:${i.border}; font-weight:800;">${e}</h5>\n        <ul style="margin:0; padding-left:18px; font-size:13px; color:#cbd5e1;">${t.map((e=>`<li style="margin:4px 0;">${e}</li>`)).join("")}</ul>\n      </div>`:"";let c="";c+=l(i("event.goal"),n,{bg:"rgba(99,102,241,0.1)",border:"#6366f1"}),c+=l(i("event.yellow_card"),o,{bg:"rgba(245,158,11,0.1)",border:"#f59e0b"}),c+=l(i("event.red_card"),r,{bg:"rgba(239,68,68,0.1)",border:"#ef4444"}),s.innerHTML=c||`<p style="text-align:center; color:#94a3b8; font-size:13px;">${i("popup.no_events")}</p>`}static get styles(){return n`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(236,72,153,0.10), transparent 50%);
        pointer-events: none;
        z-index: 0;
      }
      .matches-header {
        position: relative;
        z-index: 1;
        display: flex; align-items: center; gap: 14px;
        padding: 16px 16px 14px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .matches-header::after {
        content: '';
        position: absolute;
        left: 14px; right: 14px; bottom: -1px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--cl-accent), transparent);
        opacity: 0.4;
      }
      .league-logo {
        width: 42px; height: 42px;
        object-fit: contain;
        filter: drop-shadow(0 2px 8px rgba(99,102,241,0.3));
      }
      .league-info {
        flex: 1;
        min-width: 0;
      }
      .league-name {
        font-size: 16px;
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .league-dates {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-weight: 500;
      }
      .live-counter {
        flex-shrink: 0;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.06em;
        box-shadow: 0 2px 12px var(--cl-live-glow);
      }
      .scroll-content {
        position: relative;
        z-index: 1;
        overflow-y: auto;
        padding: 4px 4px 12px;
      }
      .day-divider {
        padding: 12px 12px 4px;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: var(--secondary-text-color);
        font-weight: 800;
        display: flex; align-items: center; gap: 8px;
      }
      .day-divider::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }
      .day-divider.today { color: var(--cl-accent); }
      .day-divider.today::after {
        background: linear-gradient(90deg, var(--cl-accent), transparent);
        opacity: 0.4;
      }

      .match-row {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 12px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        margin: 0 4px;
        position: relative;
      }
      .match-row:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .match-row.live {
        background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%);
        animation: live-row-glow 3s ease-in-out infinite;
      }
      .match-row.live::before {
        content: '';
        position: absolute;
        left: -2px; top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 70%;
        background: linear-gradient(180deg, var(--cl-live), #f97316);
        border-radius: 0 4px 4px 0;
        box-shadow: 0 0 12px var(--cl-live-glow);
      }
      @keyframes live-row-glow {
        0%, 100% { background: linear-gradient(90deg, rgba(239,68,68,0.10), rgba(239,68,68,0.02) 60%); }
        50% { background: linear-gradient(90deg, rgba(239,68,68,0.18), rgba(239,68,68,0.05) 60%); }
      }
      .match-row.goal-pulse {
        animation: goal-pulse 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes goal-pulse {
        0%   { box-shadow: none; transform: scale(1); }
        20%  { box-shadow: 0 0 0 3px var(--cl-gold), 0 0 24px var(--cl-gold); transform: scale(1.02); }
        100% { box-shadow: none; transform: scale(1); }
      }
      .match-row.card-pulse {
        animation: card-pulse-row 1s ease-out;
      }
      @keyframes card-pulse-row {
        0%   { box-shadow: none; }
        30%  { box-shadow: 0 0 0 2px #f59e0b; }
        100% { box-shadow: none; }
      }

      .match-time {
        font-size: 11px;
        color: var(--secondary-text-color);
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        min-width: 44px;
        text-align: center;
        padding: 6px 8px;
        background: var(--cl-card-2);
        border-radius: 8px;
      }
      .match-time.live-time {
        background: rgba(239,68,68,0.15);
        color: var(--cl-live);
      }
      .match-time.ft {
        background: rgba(16,185,129,0.12);
        color: var(--cl-green);
      }
      .match-teams {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .match-team {
        display: flex; align-items: center; gap: 10px;
      }
      .match-team img { width: 22px; height: 22px; object-fit: contain; flex-shrink: 0; }
      .match-team .name {
        font-size: 13px;
        font-weight: 600;
        flex: 1;
        letter-spacing: -0.01em;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .match-team .name.winner { font-weight: 800; }
      .match-team .name.loser { color: var(--secondary-text-color); }
      .match-team .score {
        font-size: 14px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 22px;
        text-align: right;
        color: var(--primary-text-color);
      }
      .match-team .score.winner { color: var(--cl-accent); }
      .match-team .score.loser { color: var(--secondary-text-color); opacity: 0.6; }
      .row-extras {
        display: flex;
        gap: 6px;
        margin-top: 4px;
      }
      .tv-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 7px;
        background: rgba(99,102,241,0.12);
        border: 1px solid rgba(99,102,241,0.25);
        border-radius: 999px;
        font-size: 9px;
        font-weight: 700;
        color: var(--cl-accent);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .tv-chip svg { width: 10px; height: 10px; }
      .match-status-icon {
        color: var(--secondary-text-color);
        font-size: 18px;
        opacity: 0.5;
        transition: all 0.2s;
      }
      .match-row:hover .match-status-icon {
        color: var(--cl-accent);
        opacity: 1;
        transform: translateX(3px);
      }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: #0b0f1a;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow: 0 0 0 2px #f59e0b, 0 0 0 4px rgba(245,158,11,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow: 0 0 0 2px var(--cl-live), 0 0 0 4px rgba(239,68,68,0.3), 0 12px 40px rgba(0,0,0,0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-matches",name:"Calcio Live Matches Card",description:"Mostra le partite della settimana o del tuo Team"}),customElements.define("calcio-live-matches-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return n`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select, input[type="number"] {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus, input:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
      .hint {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: -4px;
      }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.checked;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.value;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=parseInt(t.value,10);isNaN(a)||this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor.calciolive_all"))).sort())}render(){if(!this._config||!this.hass)return B``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return B`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":B`<option value="${e}" selected>${e||"— seleziona —"}</option>`}
            ${this.entities.map((t=>B`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `))}
          </select>
        </div>

        <h3>Impostazioni</h3>

        <div class="option">
          <label>Show Finished Matches</label>
          <ha-switch
            .checked=${!1!==this._config.show_finished_matches}
            data-config-value="show_finished_matches"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div class="option">
          <label>Show Event Toasts (in-card)</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>

        <div>
          <label class="field-label">Max Events Visible</label>
          <input
            type="number"
            min="1"
            max="100"
            .value=${this._config.max_events_visible||5}
            data-config-value="max_events_visible"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">Max Events Total</label>
          <input
            type="number"
            min="1"
            max="500"
            .value=${this._config.max_events_total||50}
            data-config-value="max_events_total"
            @change=${this._numberChanged}
          />
        </div>

        <div>
          <label class="field-label">Hide Matches Older Than (Days)</label>
          <input
            type="number"
            min="0"
            max="365"
            .value=${this._config.hide_past_days||0}
            data-config-value="hide_past_days"
            @change=${this._numberChanged}
          />
          <div class="hint">Per funzionare, "Show Finished Matches" deve essere attivo.</div>
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("calcio-live-team",class extends oe{static get properties(){return{hass:{},_config:{},showPopup:{type:Boolean},activeMatch:{type:Object},_eventSubscriptions:{type:Array},_toastMessage:{type:String},_toastVisible:{type:Boolean},_toastVariant:{type:String}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this.showPopup=!1,this.activeMatch=null,this.showEventToasts=!0===e.show_event_toasts,this._toastMessage="",this._toastVisible=!1,this._toastVariant="goal",this._toastTimer=null}_t(e,t){return pe(e,de(this.hass,this._config),t)}connectedCallback(){super.connectedCallback(),this._subscribeToEvents()}disconnectedCallback(){super.disconnectedCallback(),this._eventSubscriptions&&Array.isArray(this._eventSubscriptions)&&(this._eventSubscriptions.forEach((e=>{e&&e.unsubscribe()})),this._eventSubscriptions=[])}_subscribeToEvents(){this.hass&&this.hass.connection&&(this._eventSubscriptions=[],["calcio_live_goal","calcio_live_yellow_card","calcio_live_red_card"].forEach((e=>{this._eventSubscriptions.push(this.hass.connection.subscribeEvents(this._handleCalcioLiveEvent.bind(this),e))})))}_eventBelongsToThisCard(e){if(!this.hass||!this._config)return!1;const t=this.hass.states[this._config.entity];if(!t)return!1;const i=t.attributes.matches||[];if(0===i.length)return!1;const a=i[0];return a.home_team===e.home_team&&a.away_team===e.away_team}_handleCalcioLiveEvent(e){const t=e.event_type,i=e.data;if(this._eventBelongsToThisCard(i)&&this.showEventToasts)if("calcio_live_goal"===t){const e=i.team===i.home_team?"home":"away";requestAnimationFrame((()=>this._triggerGoalCelebration(e,i)))}else this._showEventToast(t,i)}_showEventToast(e,t){let i="",a="goal";"calcio_live_goal"===e?(i=`<strong>${this._t("event.goal").toUpperCase()}!</strong> ${t.player} · ${t.home_team} ${t.home_score} - ${t.away_score} ${t.away_team}`,a="goal"):"calcio_live_yellow_card"===e?(i=`🟨 <strong>${this._t("event.yellow_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,a="yellow"):"calcio_live_red_card"===e&&(i=`🟥 <strong>${this._t("event.red_card")}</strong> · ${t.player}${t.minute?` (${t.minute}')`:""}`,a="red"),i&&(this._toastMessage=i,this._toastVariant=a,this._toastVisible=!0,this._toastTimer&&clearTimeout(this._toastTimer),this._toastTimer=setTimeout((()=>{this._toastVisible=!1,this.requestUpdate()}),4e3),this.requestUpdate())}_triggerGoalCelebration(e,t){const i=this.shadowRoot&&this.shadowRoot.querySelector("ha-card");if(!i)return;i.querySelectorAll(".confetti, .goal-banner, .goal-flash-overlay").forEach((e=>e.remove())),i.classList.remove("goal-flash"),i.offsetWidth,i.classList.add("goal-flash"),setTimeout((()=>i.classList.remove("goal-flash")),1700);const a=document.createElement("div");a.className="goal-flash-overlay",i.appendChild(a),setTimeout((()=>a.remove()),1e3);const s=document.createElement("div");s.className="goal-banner",s.innerHTML='<div class="goal-banner-text">GOAL!</div>',i.appendChild(s),setTimeout((()=>s.remove()),1700);const n=i.querySelector(".score-numbers");n&&(n.classList.remove("goal-scored"),n.offsetWidth,n.classList.add("goal-scored"),setTimeout((()=>n.classList.remove("goal-scored")),1300));const o=i.querySelectorAll(".team-side .team-logo-big"),r="away"===e?o[1]:o[0];r&&(r.classList.remove("scorer-bounce"),r.offsetWidth,r.classList.add("scorer-bounce"),setTimeout((()=>r.classList.remove("scorer-bounce")),1300)),navigator.vibrate&&navigator.vibrate([180,80,180,80,280]),setTimeout((()=>this._showEventToast("calcio_live_goal",t)),600);const l=["#ec4899","#6366f1","#06b6d4","#fbbf24","#10b981","#ef4444"],c=["⚽","🎉","✨","🔥","⭐"];for(let e=0;e<36;e++){const e=document.createElement("div");e.className="confetti",Math.random()>.55?(e.textContent=c[Math.floor(Math.random()*c.length)],e.style.fontSize=14+10*Math.random()+"px",e.style.background="transparent"):(e.style.background=l[Math.floor(Math.random()*l.length)],e.style.borderRadius=Math.random()>.5?"50%":"2px");const t=380*(Math.random()-.5)+"px",a=240*Math.random()+100+"px";e.style.setProperty("--dx",t),e.style.setProperty("--dy",a),e.style.animationDelay=.3*Math.random()+"s",i.appendChild(e),setTimeout((()=>e.remove()),2e3)}}getCardSize(){return 4}static getConfigElement(){return document.createElement("calcio-live-team-editor")}static getStubConfig(){return{entity:"sensor.calcio_live",show_event_toasts:!1}}showDetails(e){this.activeMatch=e,this.showPopup=!0}closePopup(){this.showPopup=!1}separateEvents(e){const t=[],i=[],a=[];return e.forEach((e=>{const s=String(e||"");s.includes("Goal")||s.includes("Penalty - Scored")?t.push(this.formatMatchEvent(s)):s.includes("Yellow Card")?i.push(this.formatMatchEvent(s)):s.includes("Red Card")&&a.push(this.formatMatchEvent(s))})),{goals:t,yellowCards:i,redCards:a}}formatMatchEvent(e){const t=e=>this._t(e);let i=String(e||"").trim();i=i.replace(/^Goal\s*-\s*/i,"").replace(/^Yellow Card\s*-\s*/i,"").replace(/^Red Card\s*-\s*/i,"").replace(/^Penalty - Scored\s*-\s*/i,`${t("event.penalty")} - `).replace(/^Header\s*-\s*/i,`${t("event.header")} - `).replace(/^Shot\s*-\s*/i,`${t("event.shot")} - `).replace(/^Free-kick\s*-\s*/i,`${t("event.free_kick")} - `).replace(/^Penalty\s*-\s*/i,`${t("event.penalty")} - `),i=i.replace(/^([^:]+):\s*/,"$1 ");const a=[t("event.header"),t("event.shot"),t("event.penalty"),t("event.free_kick")].map((e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")));return i=i.replace(new RegExp(`^(${a.join("|")})\\s*-\\s*(.+)$`,"i"),((e,t,i)=>`${i} (${t.toLowerCase()})`)),i=i.replace(/\bN\/A\b/g,t("generic.unknown")),i}_renderStatusBadge(e){const t=e.state;return"in"===t?B`<span class="status-badge live"><span class="dot"></span>${this._t("status.live")}</span>`:"post"===t?B`<span class="status-badge finished">${this._t("status.finished")}</span>`:B`<span class="status-badge scheduled">${e.date||this._t("status.scheduled")}</span>`}_renderClock(e){const t=e.state;if("in"===t){const t=e.status_detail&&"N/A"!==e.status_detail?e.status_detail:"",i=(e.clock&&"N/A"!==e.clock?e.clock:"")||t||e.status||"";return B`<div class="clock"><span class="dot"></span>${i}</div>`}return"post"===t?B`<div class="clock finished">${this._t("status.full_time")}</div>`:B`<div class="clock upcoming">${e.date||""}</div>`}_renderRecord(e){if(!e||"N/A"===e)return"";const t=String(e).split("-");return 3===t.length?B`<div class="record">
        <span class="rec rec-w">${t[0]}${this._t("form.W")}</span>
        <span class="rec rec-d">${t[1]}${this._t("form.D")}</span>
        <span class="rec rec-l">${t[2]}${this._t("form.L")}</span>
      </div>`:B`<div class="record"><span class="rec">${e}</span></div>`}_renderTopScorer(e){if(!e||!e.name)return"";const t=e.short_name||e.name,i=this._t("team.top_scorer");return B`
      <div class="top-scorer" title="${i}: ${e.name} (${e.value})">
        <span class="ts-label">⚽ ${i}</span>
        <div class="ts-row">
          <span class="ts-name">${t}</span>
          <span class="ts-val">${e.value}<span class="ts-unit">★</span></span>
        </div>
      </div>
    `}_renderForm(e){if(!e||"N/A"===e)return"";const t=String(e).replace(/[^WLDwld]/g,"").toUpperCase();if(!t.length)return"";const i=t.slice(-5).split(""),a=e=>this._t("form."+e);return B`
      <div class="form-pills">
        ${i.map((e=>B`<div class="form-pill ${e}">${a(e)}</div>`))}
      </div>
    `}_renderStatsRow(e){const t=e.home_statistics||{},i=e.away_statistics||{},a=[],s=e=>{const t=parseFloat(e);return isNaN(t)?null:t},n=function(e,n,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const l=s(t[n]),c=s(i[o]);null!==l&&null!==c&&a.push({label:e,home:t[n],away:i[o],hNum:l,aNum:c,suffix:r})};return n(this._t("team.possession"),"possessionPct","possessionPct","%"),n(this._t("team.shots"),"totalShots","totalShots"),n(this._t("team.on_target"),"shotsOnTarget","shotsOnTarget"),0===a.length?"":B`
      <div class="stats-row">
        ${a.map((e=>{const t=e.hNum+e.aNum,i=t>0?e.hNum/t*100:50,a=100-i;return B`
            <div class="stat-bar">
              <div class="stat-bar-label">
                <span class="home-val">${e.home}${e.suffix}</span>
                <span class="label-text">${e.label}</span>
                <span class="away-val">${e.away}${e.suffix}</span>
              </div>
              <div class="stat-bar-track">
                <div class="stat-bar-home" style="width: ${i}%;"></div>
                <div class="stat-bar-away" style="width: ${a}%;"></div>
              </div>
            </div>
          `}))}
      </div>
    `}render(){if(!this.hass||!this._config)return B``;const e=this._config.entity,t=this.hass.states[e];if(!t)return B`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${e}</ha-card>`;if(!t.attributes.matches||0===t.attributes.matches.length)return B`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`;const i=t.attributes.matches[0],a="in"===i.state,s="post"===i.state,n=a||s,o=i.league_name&&"N/A"!==i.league_name?i.league_name:i.season_info&&"N/A"!==i.season_info?i.season_info:"",r=i.venue&&"N/A"!==i.venue?i.venue:"",l=i.venue_city&&"N/A"!==i.venue_city?i.venue_city:"",c=r?l?`${r}, ${l}`:r:"—",d=i.broadcast&&""!==i.broadcast&&"N/A"!==i.broadcast?i.broadcast:"",p=parseInt(i.attendance,10),h=!isNaN(p)&&p>0;return B`
      <ha-card class="${a?"live":""}">
        <div class="bg-logos">
          <div class="bg-logo home"><img src="${i.home_logo}" alt="" loading="lazy"></div>
          <div class="bg-logo away"><img src="${i.away_logo}" alt="" loading="lazy"></div>
        </div>
        <div class="hero-bg"></div>

        ${this.showEventToasts&&this._toastVisible?B`
          <div class="event-toast variant-${this._toastVariant}" .innerHTML=${this._toastMessage}></div>
        `:""}

        <div class="top-bar">
          <div class="competition">
            <span class="comp-icon">⚽</span>
            <span class="comp-name">${o||" "}</span>
          </div>
          ${this._renderStatusBadge(i)}
        </div>

        <div class="scoreboard">
          <div class="team-side home">
            <div class="team-logo-wrap">
              <img class="team-logo-big" src="${i.home_logo}" alt="${i.home_team}" />
            </div>
            <div class="team-name-big">${i.home_team}</div>
            ${this._renderRecord(i.home_record)}
            ${this._renderForm(i.home_form)}
            ${a?"":this._renderTopScorer(i.home_top_scorer)}
          </div>

          <div class="score-center">
            ${n?B`<div class="score-numbers">${i.home_score} <span class="dash">-</span> ${i.away_score}</div>`:B`<div class="score-vs">VS</div>`}
            ${this._renderClock(i)}
          </div>

          <div class="team-side away">
            <div class="team-logo-wrap">
              <img class="team-logo-big" src="${i.away_logo}" alt="${i.away_team}" />
            </div>
            <div class="team-name-big">${i.away_team}</div>
            ${this._renderRecord(i.away_record)}
            ${this._renderForm(i.away_form)}
            ${a?"":this._renderTopScorer(i.away_top_scorer)}
          </div>
        </div>

        ${a?this._renderStatsRow(i):""}

        <div class="meta-row">
          <div class="meta-item venue-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>${c}</span>
          </div>
          ${n?B`<button class="info-btn" @click="${()=>this.showDetails(i)}">${this._t("team.details")} ›</button>`:B`
              <div class="meta-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>${i.date||""}</span>
              </div>
            `}
        </div>

        ${d||h?B`
          <div class="extras-row">
            ${d?B`
              <div class="extra-chip broadcast">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
                <span>${d}</span>
              </div>
            `:""}
            ${h?B`
              <div class="extra-chip attendance">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                <span>${p.toLocaleString(de(this.hass,this._config))} ${this._t("team.spectators")}</span>
              </div>
            `:""}
          </div>
        `:""}
      </ha-card>
    `}updated(e){(e.has("showPopup")||e.has("activeMatch"))&&this.renderPopupToBody()}renderPopupToBody(){if(!this.showPopup||!this.activeMatch){const e=document.getElementById("calcio-live-team-popup");return void(e&&e.remove())}let e=document.getElementById("calcio-live-team-popup");e||(e=document.createElement("div"),e.id="calcio-live-team-popup",e.style.cssText="\n        position: fixed; inset: 0;\n        display: flex; justify-content: center; align-items: center;\n        z-index: 999999;\n        background: rgba(0,0,0,0.7);\n        backdrop-filter: blur(8px);\n        overflow: auto;\n      ",e.addEventListener("click",(t=>{t.target===e&&(this.showPopup=!1)})),document.body.appendChild(e));const t=this.activeMatch,i=e=>this._t(e);e.innerHTML=`\n      <div style="background: #1a1f2e; padding: 24px; border-radius: 20px; width: 90%; max-width: 560px; max-height: 85vh; overflow-y: auto; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 24px 64px rgba(0,0,0,0.6); margin: auto; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;">\n        <h3 style="margin:0 0 20px; font-size: 22px; font-weight: 800; letter-spacing:-0.02em; background: linear-gradient(135deg,#6366f1,#ec4899); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color: transparent;">${i("popup.match_details")}</h3>\n        <div style="display:flex; justify-content:center; align-items:center; gap:18px; margin-bottom:24px;">\n          <img style="width:72px; height:72px; object-fit:contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));" src="${t.home_logo}" alt="${t.home_team}" />\n          <div style="text-align:center;">\n            <div style="font-size:42px; font-weight:900; letter-spacing:-0.04em; line-height:1;">${t.home_score??"-"} <span style="opacity:0.4;">-</span> ${t.away_score??"-"}</div>\n            <div style="font-size:12px; color:#94a3b8; margin-top:8px; font-weight:600;">${t.clock??t.status??""}</div>\n          </div>\n          <img style="width:72px; height:72px; object-fit:contain; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));" src="${t.away_logo}" alt="${t.away_team}" />\n        </div>\n        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:18px;">\n          <div style="background:rgba(255,255,255,0.04); padding:14px; border-radius:14px;">\n            <div style="font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#94a3b8; font-weight:700; margin-bottom:6px;">${t.home_team}</div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.possession")}:</span> <strong>${t.home_statistics?.possessionPct??"—"}%</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.shots")}:</span> <strong>${t.home_statistics?.totalShots??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.on_target")}:</span> <strong>${t.home_statistics?.shotsOnTarget??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.fouls")}:</span> <strong>${t.home_statistics?.foulsCommitted??"—"}</strong></div>\n          </div>\n          <div style="background:rgba(255,255,255,0.04); padding:14px; border-radius:14px;">\n            <div style="font-size:10px; text-transform:uppercase; letter-spacing:0.1em; color:#94a3b8; font-weight:700; margin-bottom:6px;">${t.away_team}</div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.possession")}:</span> <strong>${t.away_statistics?.possessionPct??"—"}%</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.shots")}:</span> <strong>${t.away_statistics?.totalShots??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.on_target")}:</span> <strong>${t.away_statistics?.shotsOnTarget??"—"}</strong></div>\n            <div style="font-size:13px;"><span style="color:#94a3b8;">${i("team.fouls")}:</span> <strong>${t.away_statistics?.foulsCommitted??"—"}</strong></div>\n          </div>\n        </div>\n        <div id="team-events-container"></div>\n        <button id="popup-close-btn" style="background:linear-gradient(135deg,#6366f1,#ec4899); color:white; padding:12px 20px; border:none; border-radius:12px; cursor:pointer; margin-top:20px; font-weight:800; width:100%; font-size:14px;">${i("generic.close")}</button>\n      </div>\n    `;const a=e.querySelector("#popup-close-btn");a&&a.addEventListener("click",(()=>{this.showPopup=!1}));const s=e.querySelector("#team-events-container"),{goals:n,yellowCards:o,redCards:r}=this.separateEvents(t.match_details||[]),l=(e,t,i)=>t.length?`<div style="margin-bottom:14px; padding:14px; background:${i.bg}; border-left:3px solid ${i.border}; border-radius:10px;">\n        <h5 style="margin:0 0 8px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:${i.border}; font-weight:800;">${e}</h5>\n        <ul style="margin:0; padding-left:18px; font-size:13px; color:#cbd5e1;">${t.map((e=>`<li style="margin:4px 0;">${e}</li>`)).join("")}</ul>\n      </div>`:"";let c="";c+=l(i("event.goal"),n,{bg:"rgba(99,102,241,0.1)",border:"#6366f1"}),c+=l(i("event.yellow_card"),o,{bg:"rgba(245,158,11,0.1)",border:"#f59e0b"}),c+=l(i("event.red_card"),r,{bg:"rgba(239,68,68,0.1)",border:"#ef4444"});const d=t.lineup_home||[],p=t.lineup_away||[];if(d.length||p.length){const e=t.formation_home||"",a=t.formation_away||"",s=(e,t,i)=>{const a=(e||[]).filter((e=>e.starter));return a.length?`<div style="margin-bottom:8px;">\n          <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:6px;">\n            <span style="font-size:12px; font-weight:800; color:#fff;">${i}</span>\n            ${t?`<span style="font-size:10px; font-weight:700; color:#6366f1; letter-spacing:0.1em;">${t}</span>`:""}\n          </div>\n          <div style="font-size:12px; color:#cbd5e1; line-height:1.7;">\n            ${a.map((e=>`<span style="display:inline-block; padding:2px 8px; background:rgba(255,255,255,0.05); border-radius:6px; margin:2px;">${e.jersey?`<strong style="color:#fbbf24;">${e.jersey}</strong> `:""}${e.short_name||e.name}</span>`)).join("")}\n          </div>\n        </div>`:""};c+=`<div style="margin-bottom:14px; padding:14px; background:rgba(16,185,129,0.08); border-left:3px solid #10b981; border-radius:10px;">\n        <h5 style="margin:0 0 10px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:#10b981; font-weight:800;">${i("popup.lineups")}</h5>\n        ${s(d,e,t.home_team)}\n        ${s(p,a,t.away_team)}\n      </div>`}const h=t.key_events||[];if(h.length){const e=e=>{const t=(e.type||"").toLowerCase(),i=(e.type_text||"").toLowerCase();return"goal"===t||e.scoring_play?"⚽":i.includes("yellow")?"🟨":i.includes("red")?"🟥":"substitution"===t?"🔄":i.includes("halftime")?"⏸":i.includes("kickoff")?"▶":i.includes("end")?"🏁":"·"};c+=`<div style="margin-bottom:14px; padding:14px; background:rgba(251,191,36,0.08); border-left:3px solid #fbbf24; border-radius:10px;">\n        <h5 style="margin:0 0 10px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:#fbbf24; font-weight:800;">${i("popup.timeline")}</h5>\n        <ul style="margin:0; padding:0; list-style:none;">\n          ${h.map((t=>`<li style="display:grid; grid-template-columns:36px 24px 1fr; gap:8px; align-items:start; padding:5px 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:12px; color:#cbd5e1;">\n            <span style="text-align:right; font-weight:700; color:#94a3b8; font-variant-numeric:tabular-nums;">${t.clock||""}</span>\n            <span style="text-align:center;">${e(t)}</span>\n            <span><strong style="color:#fff;">${(t.athletes||[]).filter(Boolean).join(", ")||t.type_text||""}</strong>${t.team?`<br><span style="color:#94a3b8; font-size:11px;">${t.team}</span>`:""}</span>\n          </li>`)).join("")}\n        </ul>\n      </div>`}const g=t.head_to_head||[];g.length&&(c+=`<div style="margin-bottom:14px; padding:14px; background:rgba(99,102,241,0.08); border-left:3px solid #6366f1; border-radius:10px;">\n        <h5 style="margin:0 0 10px; font-size:12px; text-transform:uppercase; letter-spacing:0.08em; color:#6366f1; font-weight:800;">${i("popup.h2h")} (${g.length})</h5>\n        <ul style="margin:0; padding:0; list-style:none;">\n          ${g.slice(0,8).map((e=>{const t=e.date?new Date(e.date).toLocaleDateString(de(this.hass,this._config)):"";return`<li style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px solid rgba(255,255,255,0.04); font-size:12px; color:#cbd5e1;">\n              <span>${e.home_team} <strong>${e.home_score??"-"}</strong> - <strong>${e.away_score??"-"}</strong> ${e.away_team}</span>\n              <span style="color:#94a3b8;">${t}</span>\n            </li>`})).join("")}\n        </ul>\n      </div>`),s.innerHTML=c||`<p style="text-align:center; color:#94a3b8; font-size:13px;">${i("popup.no_events")}</p>`}static get styles(){return n`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-gold-text: #fde047;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }

      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }

      .bg-logos {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
      }
      .bg-logo {
        width: 60%;
        height: 140%;
        display: flex;
        align-items: center;
        opacity: 0.09;
      }
      .bg-logo.home {
        justify-content: flex-start;
        transform: translateX(-30%);
      }
      .bg-logo.away {
        justify-content: flex-end;
        transform: translateX(30%);
      }
      .bg-logo img {
        width: 100%;
        object-fit: contain;
      }

      .hero-bg {
        position: absolute;
        inset: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.20), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(236,72,153,0.20), transparent 50%);
        pointer-events: none;
        z-index: 1;
      }
      ha-card.live .hero-bg {
        background:
          radial-gradient(ellipse at 0% 0%, rgba(239,68,68,0.25), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.20), transparent 50%);
        animation: hero-pulse 3s ease-in-out infinite;
      }
      @keyframes hero-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }

      .top-bar, .scoreboard, .stats-row, .meta-row {
        position: relative;
        z-index: 2;
      }

      .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .competition {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        font-weight: 700;
        color: var(--primary-text-color);
        letter-spacing: -0.01em;
        min-width: 0;
      }
      .comp-icon {
        flex-shrink: 0;
        width: 24px; height: 24px;
        border-radius: 8px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        display: flex; align-items: center; justify-content: center;
        font-size: 12px;
        box-shadow: 0 2px 8px rgba(99,102,241,0.4);
      }
      .comp-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .status-badge {
        flex-shrink: 0;
        padding: 5px 11px;
        border-radius: 999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .status-badge.live {
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        box-shadow: 0 4px 16px var(--cl-live-glow);
        animation: badge-pulse 2s ease-in-out infinite;
      }
      .status-badge.live .dot {
        width: 6px; height: 6px; border-radius: 50%; background: white;
        animation: pulse-dot 1.2s ease-in-out infinite;
      }
      .status-badge.finished {
        background: linear-gradient(135deg, var(--cl-green), #059669);
        color: white;
      }
      .status-badge.scheduled {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        color: var(--primary-text-color);
      }
      @keyframes badge-pulse {
        0%, 100% { box-shadow: 0 4px 16px var(--cl-live-glow); }
        50% { box-shadow: 0 4px 24px var(--cl-live-glow), 0 0 32px var(--cl-live-glow); }
      }
      @keyframes pulse-dot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.7); }
      }

      .scoreboard {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        gap: 10px;
        padding: 28px 18px 22px;
      }
      .team-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        text-align: center;
        min-width: 0;
      }
      .team-logo-wrap {
        position: relative;
        width: 80px; height: 80px;
        display: flex; align-items: center; justify-content: center;
      }
      .team-logo-wrap::before {
        content: '';
        position: absolute;
        inset: -8px;
        background: radial-gradient(circle, rgba(99,102,241,0.22), transparent 70%);
        border-radius: 50%;
        animation: logo-glow 4s ease-in-out infinite;
      }
      .team-logo-big {
        position: relative;
        width: 72px; height: 72px;
        object-fit: contain;
        filter: drop-shadow(0 6px 16px rgba(0,0,0,0.25));
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .team-side:hover .team-logo-big { transform: scale(1.1) rotate(-3deg); }
      @keyframes logo-glow {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.15); }
      }
      .team-name-big {
        font-size: 13px;
        font-weight: 700;
        line-height: 1.2;
        max-width: 110px;
        letter-spacing: -0.01em;
        color: var(--primary-text-color);
      }
      .form-pills {
        display: flex; gap: 3px;
        padding: 3px 7px;
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 999px;
      }
      .record {
        display: flex; gap: 4px;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.04em;
      }
      .record .rec {
        padding: 2px 6px;
        border-radius: 4px;
        font-variant-numeric: tabular-nums;
      }
      .record .rec-w { background: rgba(16,185,129,0.18); color: var(--cl-green); }
      .record .rec-d { background: rgba(245,158,11,0.18); color: #f59e0b; }
      .record .rec-l { background: rgba(239,68,68,0.18); color: var(--cl-live); }
      .top-scorer {
        display: inline-flex;
        flex-direction: column;
        align-items: stretch;
        gap: 4px;
        padding: 5px 9px 6px;
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 10px;
        font-size: 10px;
        font-weight: 700;
        color: var(--secondary-text-color);
        max-width: 150px;
      }
      .top-scorer .ts-label {
        font-size: 8px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--cl-gold);
        text-align: center;
        line-height: 1;
      }
      .top-scorer .ts-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
      }
      .top-scorer .ts-name {
        max-width: 90px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--primary-text-color);
        font-size: 11px;
        font-weight: 700;
      }
      .top-scorer .ts-val {
        display: inline-flex;
        align-items: baseline;
        gap: 1px;
        color: var(--cl-gold);
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        font-size: 12px;
      }
      .top-scorer .ts-unit {
        font-size: 9px;
        opacity: 0.85;
      }
      .form-pill {
        width: 14px; height: 14px;
        border-radius: 4px;
        font-size: 8px;
        font-weight: 800;
        color: white;
        display: flex; align-items: center; justify-content: center;
      }
      .form-pill.W { background: linear-gradient(135deg, #10b981, #059669); }
      .form-pill.L { background: linear-gradient(135deg, #ef4444, #dc2626); }
      .form-pill.D { background: linear-gradient(135deg, #f59e0b, #d97706); }

      .score-center {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 0 4px;
      }
      .score-numbers {
        font-size: 48px;
        font-weight: 900;
        letter-spacing: -0.04em;
        font-variant-numeric: tabular-nums;
        line-height: 0.95;
        background: linear-gradient(180deg, var(--primary-text-color) 30%, var(--cl-accent));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: score-pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
      }
      .score-numbers .dash {
        opacity: 0.4;
        font-weight: 700;
        margin: 0 4px;
      }
      .score-vs {
        font-size: 30px;
        font-weight: 800;
        letter-spacing: 0.08em;
        color: var(--secondary-text-color);
        opacity: 0.6;
      }
      @keyframes score-pop {
        0% { opacity: 0; transform: scale(0.5); }
        70% { transform: scale(1.1); }
        100% { opacity: 1; transform: scale(1); }
      }
      .clock {
        font-size: 11px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        display: inline-flex; align-items: center; gap: 5px;
        padding: 4px 10px;
        border-radius: 999px;
        color: var(--cl-live);
        background: rgba(239,68,68,0.12);
      }
      .clock .dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: currentColor;
        animation: pulse-dot 1.4s ease-in-out infinite;
      }
      .clock.upcoming {
        color: var(--cl-accent);
        background: rgba(99,102,241,0.12);
      }
      .clock.upcoming .dot, .clock.finished .dot { animation: none; }
      .clock.finished {
        color: var(--cl-green);
        background: rgba(16,185,129,0.12);
      }

      .stats-row {
        padding: 0 18px 18px;
        display: flex; flex-direction: column; gap: 10px;
      }
      .stat-bar { display: flex; flex-direction: column; gap: 4px; }
      .stat-bar-label {
        display: flex; justify-content: space-between;
        font-size: 11px; font-weight: 700;
      }
      .stat-bar-label .home-val { color: var(--cl-accent); }
      .stat-bar-label .away-val { color: var(--cl-accent-2); }
      .stat-bar-label .label-text {
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-size: 9px;
        color: var(--secondary-text-color);
      }
      .stat-bar-track {
        height: 6px;
        background: var(--cl-card-2);
        border-radius: 999px;
        overflow: hidden;
        display: flex;
      }
      .stat-bar-home {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent), var(--cl-accent));
        border-radius: 999px 0 0 999px;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .stat-bar-away {
        height: 100%;
        background: linear-gradient(90deg, var(--cl-accent-2), var(--cl-accent-2));
        margin-left: auto;
        border-radius: 0 999px 999px 0;
        transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      }

      .meta-row {
        display: flex; justify-content: space-between;
        align-items: center;
        gap: 12px;
        padding: 12px 18px;
        border-top: 1px solid var(--cl-divider);
        background: var(--cl-card-2);
      }
      .venue-item { min-width: 0; }
      .venue-item span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .extras-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 8px 18px 12px;
        background: var(--cl-card-2);
        position: relative;
        z-index: 2;
      }
      .extra-chip {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 10px;
        background: rgba(99,102,241,0.12);
        border: 1px solid rgba(99,102,241,0.25);
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        color: var(--cl-accent);
      }
      .extra-chip svg { width: 12px; height: 12px; }
      .extra-chip.broadcast {
        background: rgba(99,102,241,0.12);
        border-color: rgba(99,102,241,0.3);
        color: var(--cl-accent);
      }
      .extra-chip.attendance {
        background: rgba(16,185,129,0.12);
        border-color: rgba(16,185,129,0.3);
        color: var(--cl-green);
      }
      .meta-item {
        display: flex; align-items: center; gap: 6px;
        color: var(--secondary-text-color);
        font-size: 11px;
        font-weight: 600;
      }
      .meta-item svg { width: 14px; height: 14px; opacity: 0.7; }
      .info-btn {
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        border: none;
        padding: 7px 14px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        letter-spacing: 0.04em;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 12px rgba(99,102,241,0.4);
      }
      .info-btn:hover {
        transform: translateY(-1px) scale(1.04);
        box-shadow: 0 8px 20px rgba(99,102,241,0.6);
      }

      /* Toast */
      .event-toast {
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        background: #0b0f1a;
        color: #ffffff;
        padding: 10px 18px;
        border-radius: 14px;
        font-size: 13px;
        font-weight: 800;
        z-index: 100;
        animation: toast-bounce 4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        pointer-events: none;
        max-width: 90%;
        text-align: center;
        letter-spacing: -0.01em;
        text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }
      .event-toast.variant-goal {
        box-shadow:
          0 0 0 2px var(--cl-gold),
          0 0 0 4px rgba(251, 191, 36, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7),
          0 0 60px rgba(251, 191, 36, 0.4);
      }
      .event-toast.variant-goal strong { color: var(--cl-gold-text); }
      .event-toast.variant-yellow {
        box-shadow:
          0 0 0 2px #f59e0b,
          0 0 0 4px rgba(245, 158, 11, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-yellow strong { color: #fbbf24; }
      .event-toast.variant-red {
        box-shadow:
          0 0 0 2px var(--cl-live),
          0 0 0 4px rgba(239, 68, 68, 0.3),
          0 12px 40px rgba(0, 0, 0, 0.7);
      }
      .event-toast.variant-red strong { color: #fca5a5; }
      @keyframes toast-bounce {
        0%   { opacity: 0; transform: translate(-50%, -20px) scale(0.7); }
        8%   { opacity: 1; transform: translate(-50%, 0) scale(1.08); }
        14%  { transform: translate(-50%, 0) scale(1); }
        90%  { opacity: 1; transform: translate(-50%, 0) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -10px) scale(0.95); }
      }

      /* Goal celebration */
      ha-card.goal-flash {
        animation: card-goal-flash 1.6s cubic-bezier(0.16, 1, 0.3, 1);
      }
      @keyframes card-goal-flash {
        0%   { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
        20%  { box-shadow: 0 0 0 4px var(--cl-accent), 0 0 60px 20px var(--cl-accent), 0 4px 24px rgba(0,0,0,0.15); }
        50%  { box-shadow: 0 0 0 2px var(--cl-accent-2), 0 0 40px 10px var(--cl-accent-2), 0 4px 24px rgba(0,0,0,0.15); }
        100% { box-shadow: 0 4px 24px rgba(0,0,0,0.15); }
      }
      .score-numbers.goal-scored {
        animation: score-goal-pop 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes score-goal-pop {
        0%   { transform: scale(1); }
        20%  { transform: scale(1.4); filter: drop-shadow(0 0 30px var(--cl-accent)); }
        40%  { transform: scale(0.95); }
        60%  { transform: scale(1.15); }
        100% { transform: scale(1); }
      }
      .team-logo-big.scorer-bounce {
        animation: scorer-bounce 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      @keyframes scorer-bounce {
        0%   { transform: scale(1) rotate(0deg); }
        25%  { transform: scale(1.3) rotate(-15deg); }
        50%  { transform: scale(1.1) rotate(10deg); }
        75%  { transform: scale(1.2) rotate(-5deg); }
        100% { transform: scale(1) rotate(0deg); }
      }
      .goal-banner {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        z-index: 50;
        overflow: hidden;
      }
      .goal-banner::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(ellipse at center, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 40%, transparent 70%);
        animation: banner-backdrop 1.6s ease-out forwards;
      }
      @keyframes banner-backdrop {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        80%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .goal-banner-text {
        position: relative;
        font-size: 84px;
        font-weight: 900;
        letter-spacing: -0.06em;
        color: var(--cl-gold-text);
        -webkit-text-stroke: 2px #1a0f00;
        text-shadow:
          0 0 24px rgba(251, 191, 36, 1),
          0 0 48px rgba(251, 191, 36, 0.7),
          0 6px 0 #b45309,
          0 8px 24px rgba(0, 0, 0, 0.6);
        animation: goal-text-blast 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        transform-origin: center;
      }
      @keyframes goal-text-blast {
        0%   { opacity: 0; transform: scale(0.3) rotate(-8deg); }
        20%  { opacity: 1; transform: scale(1.15) rotate(-3deg); }
        40%  { transform: scale(0.95) rotate(2deg); }
        60%  { transform: scale(1.05) rotate(0deg); }
        80%  { opacity: 1; transform: scale(1) rotate(0deg); }
        100% { opacity: 0; transform: scale(1.3) rotate(0deg); }
      }
      .goal-flash-overlay {
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at center, rgba(251,191,36,0.25), transparent 70%);
        pointer-events: none;
        z-index: 49;
        animation: flash-overlay 1s ease-out forwards;
      }
      @keyframes flash-overlay {
        0%   { opacity: 0; }
        20%  { opacity: 1; }
        100% { opacity: 0; }
      }
      .confetti {
        position: absolute;
        top: 20px; left: 50%;
        width: 8px; height: 8px;
        pointer-events: none;
        z-index: 99;
        animation: confetti-fly 1.8s ease-out forwards;
      }
      @keyframes confetti-fly {
        0% {
          transform: translate(-50%, 0) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translate(calc(-50% + var(--dx)), var(--dy)) rotate(720deg);
          opacity: 0;
        }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-team",name:"Calcio Live team Card",description:"Mostra la prossima partita / partita in corso del tuo Team"}),customElements.define("calcio-live-team-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return n`
      .card-config {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .option {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
      }
      label {
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .field-label {
        display: block;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-bottom: 4px;
        font-weight: 600;
      }
      select {
        width: 100%;
        padding: 10px 12px;
        font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      select:focus {
        outline: 2px solid var(--primary-color, #03a9f4);
        outline-offset: -1px;
      }
      h3 {
        margin: 8px 0 0;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
      }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.checked;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.value;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor.calciolive_next"))).sort())}render(){if(!this._config||!this.hass)return B``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return B`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity</label>
          <select @change=${this._entityChanged}>
            ${t?"":B`<option value="${e}" selected>${e||"— seleziona —"}</option>`}
            ${this.entities.map((t=>B`
              <option value="${t}" ?selected=${t===e}>${t}</option>
            `))}
          </select>
        </div>

        <h3>Impostazioni</h3>
        <div class="option">
          <label>Show Event Toasts (in-card)</label>
          <ha-switch
            .checked=${!0===this._config.show_event_toasts}
            data-config-value="show_event_toasts"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("calcio-live-news",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this.maxArticles=e.max_articles?e.max_articles:5,this.hideHeader=!0===e.hide_header,this.hideImages=!0===e.hide_images}_t(e,t){return pe(e,de(this.hass,this._config),t)}getCardSize(){return 4}static getConfigElement(){return document.createElement("calcio-live-news-editor")}static getStubConfig(){return{entity:"sensor.calciolive_news",max_articles:5,hide_header:!1,hide_images:!1}}_formatDate(e){if(!e)return"";try{const t=new Date(e),i=(new Date-t)/1e3;if(i<60)return this._t("time.now");if(i<3600)return this._t("time.n_min_ago",{n:Math.floor(i/60)});if(i<86400)return this._t("time.n_h_ago",{n:Math.floor(i/3600)});if(i<604800)return this._t("time.n_d_ago",{n:Math.floor(i/86400)});const a=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${a}`}catch(e){return""}}_openLink(e){e&&window.open(e,"_blank","noopener,noreferrer")}render(){if(!this.hass||!this._config)return B``;const e=this.hass.states[this._config.entity];if(!e)return B`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=(e.attributes.articles||[]).slice(0,this.maxArticles);return 0===t.length?B`<ha-card class="empty">${this._t("news.empty")}</ha-card>`:B`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":B`
          <div class="news-header">
            <div class="header-icon">📰</div>
            <div class="header-text">
              <div class="title">${this._t("card.news")}</div>
              <div class="subtitle">${e.state}</div>
            </div>
          </div>
        `}
        <div class="news-list">
          ${t.map((e=>B`
            <article class="news-item ${this.hideImages||!e.image?"no-img":""}" @click="${()=>this._openLink(e.link)}">
              ${!this.hideImages&&e.image?B`
                <div class="news-img" style="background-image: url('${e.image}');"></div>
              `:""}
              <div class="news-body">
                <div class="news-meta">
                  ${e.category?B`<span class="cat">${e.category}</span>`:""}
                  <span class="date">${this._formatDate(e.published)}</span>
                </div>
                <div class="news-headline">${e.headline}</div>
                ${e.description?B`<div class="news-desc">${e.description}</div>`:""}
              </div>
            </article>
          `))}
        </div>
      </ha-card>
    `}static get styles(){return n`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(236,72,153,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.10), transparent 50%);
        pointer-events: none;
      }
      .news-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .news-header::after {
        content: '';
        position: absolute;
        left: 18px; right: 18px; bottom: -1px;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--cl-accent-2), transparent);
        opacity: 0.4;
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 16px rgba(236,72,153,0.4);
      }
      .header-text .title {
        font-size: 18px;
        font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--primary-text-color);
      }
      .header-text .subtitle {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-weight: 600;
      }

      .news-list {
        position: relative; z-index: 1;
        display: flex; flex-direction: column;
        padding: 6px;
      }
      .news-item {
        display: grid;
        grid-template-columns: 96px 1fr;
        gap: 14px;
        padding: 12px;
        border-radius: 14px;
        cursor: pointer;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      }
      .news-item.no-img {
        grid-template-columns: 1fr;
      }
      .news-item:hover {
        background: var(--cl-card-2);
        transform: translateX(3px);
      }
      .news-img {
        width: 96px;
        height: 72px;
        border-radius: 10px;
        background-size: cover;
        background-position: center;
        background-color: var(--cl-card-2);
        flex-shrink: 0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.25);
      }
      .news-body {
        display: flex; flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      .news-meta {
        display: flex; gap: 8px;
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--secondary-text-color);
      }
      .news-meta .cat {
        color: var(--cl-accent);
      }
      .news-meta .date::before {
        content: '·';
        margin-right: 8px;
        opacity: 0.4;
      }
      .news-meta .cat + .date::before { content: '·'; }
      .news-headline {
        font-size: 14px;
        font-weight: 800;
        line-height: 1.3;
        color: var(--primary-text-color);
        letter-spacing: -0.01em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .news-desc {
        font-size: 12px;
        font-weight: 500;
        color: var(--secondary-text-color);
        line-height: 1.4;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-news",name:"Calcio Live News Card",description:"Mostra le ultime notizie di calcio (per competizione)"}),customElements.define("calcio-live-news-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return n`
      .card-config { display: flex; flex-direction: column; gap: 16px; }
      .option { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
      label { font-size: 14px; color: var(--primary-text-color); }
      .field-label { display: block; font-size: 12px; color: var(--secondary-text-color); margin-bottom: 4px; font-weight: 600; }
      select, input[type="number"] {
        width: 100%; padding: 10px 12px; font-size: 14px;
        border-radius: 8px;
        border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #000);
        box-sizing: border-box;
      }
      h3 { margin: 8px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--secondary-text-color); }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.checked;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.value;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_numberChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=parseInt(t.value,10);isNaN(a)||this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor.calciolive_news"))).sort())}render(){if(!this._config||!this.hass)return B``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return B`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity (sensore news)</label>
          <select @change=${this._entityChanged}>
            ${t?"":B`<option value="${e}" selected>${e||"— seleziona —"}</option>`}
            ${this.entities.map((t=>B`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
        </div>

        <h3>Impostazioni</h3>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Hide Images</label>
          <ha-switch
            .checked=${!0===this._config.hide_images}
            data-config-value="hide_images"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Max Articles</label>
          <input type="number" min="1" max="20"
            .value=${this._config.max_articles||5}
            data-config-value="max_articles"
            @change=${this._numberChanged} />
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("calcio-live-lineup",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this.hideHeader=!0===e.hide_header}_t(e,t){return pe(e,de(this.hass,this._config),t)}getCardSize(){return 6}static getConfigElement(){return document.createElement("calcio-live-lineup-editor")}static getStubConfig(){return{entity:"sensor.calciolive_next",hide_header:!1}}_starters(e){return(e||[]).filter((e=>!0===e.starter))}_bench(e){return(e||[]).filter((e=>!e.starter))}_renderPlayer(e){const t=(e.short_name||e.name||"").split(" ").map((e=>e[0])).slice(0,2).join("");return B`
      <div class="player" title="${e.name}">
        <div class="player-card">
          ${e.headshot?B`<img class="player-img" src="${e.headshot}" alt="${e.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
                   <div class="player-init" style="display:none;">${t}</div>`:B`<div class="player-init">${t}</div>`}
          ${e.jersey?B`<div class="player-num">${e.jersey}</div>`:""}
        </div>
        <div class="player-name">${e.short_name||e.name}</div>
        ${e.position?B`<div class="player-pos">${e.position}</div>`:""}
      </div>
    `}render(){if(!this.hass||!this._config)return B``;const e=this.hass.states[this._config.entity];if(!e)return B`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.matches||[];if(0===t.length)return B`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`;const i=t[0],a=i.lineup_home||e.attributes.lineup_home||[],s=i.lineup_away||e.attributes.lineup_away||[],n=i.formation_home||e.attributes.formation_home||"",o=i.formation_away||e.attributes.formation_away||"";if(0===a.length&&0===s.length)return B`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">👥</div>
            <div class="empty-title">${this._t("lineup.empty.title")}</div>
            <div class="empty-sub">${this._t("lineup.empty.sub")}</div>
          </div>
        </ha-card>
      `;const r=this._starters(a),l=this._bench(a),c=this._starters(s),d=this._bench(s);return B`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":B`
          <div class="lineup-header">
            <div class="header-icon">👥</div>
            <div class="header-text">
              <div class="title">${this._t("card.lineup")}</div>
              <div class="subtitle">${i.home_team} vs ${i.away_team}</div>
            </div>
          </div>
        `}

        <div class="teams-row">
          <div class="team-block">
            <div class="team-block-head">
              <img src="${i.home_logo}" alt="${i.home_team}" />
              <div class="team-block-info">
                <div class="team-block-name">${i.home_team}</div>
                ${n?B`<div class="formation">${n}</div>`:""}
              </div>
            </div>
            <div class="players-grid">
              ${r.map((e=>this._renderPlayer(e)))}
            </div>
            ${l.length?B`
              <div class="bench-label">${this._t("lineup.bench")}</div>
              <div class="players-grid bench">
                ${l.map((e=>this._renderPlayer(e)))}
              </div>
            `:""}
          </div>

          <div class="team-block">
            <div class="team-block-head">
              <img src="${i.away_logo}" alt="${i.away_team}" />
              <div class="team-block-info">
                <div class="team-block-name">${i.away_team}</div>
                ${o?B`<div class="formation">${o}</div>`:""}
              </div>
            </div>
            <div class="players-grid">
              ${c.map((e=>this._renderPlayer(e)))}
            </div>
            ${d.length?B`
              <div class="bench-label">${this._t("lineup.bench")}</div>
              <div class="players-grid bench">
                ${d.map((e=>this._renderPlayer(e)))}
              </div>
            `:""}
          </div>
        </div>
      </ha-card>
    `}static get styles(){return n`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--primary-text-color); }
      .empty-sub { font-size: 12px; color: var(--secondary-text-color); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(16,185,129,0.10), transparent 50%);
        pointer-events: none;
      }

      .lineup-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), #10b981);
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 16px rgba(99,102,241,0.4);
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--primary-text-color);
      }
      .header-text .subtitle {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-weight: 600;
      }

      .teams-row {
        position: relative; z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0;
      }
      .team-block {
        padding: 16px 12px;
        border-right: 1px solid var(--cl-divider);
      }
      .team-block:last-child { border-right: none; }
      .team-block-head {
        display: flex; align-items: center; gap: 10px;
        padding-bottom: 12px;
        margin-bottom: 12px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .team-block-head img {
        width: 32px; height: 32px;
        object-fit: contain;
        flex-shrink: 0;
      }
      .team-block-info { min-width: 0; flex: 1; }
      .team-block-name {
        font-size: 13px; font-weight: 800;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        color: var(--primary-text-color);
      }
      .formation {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: var(--cl-accent);
        margin-top: 2px;
        font-variant-numeric: tabular-nums;
      }
      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(56px, 1fr));
        gap: 10px;
      }
      .players-grid.bench { opacity: 0.85; }
      .player {
        display: flex; flex-direction: column;
        align-items: center;
        gap: 4px;
        text-align: center;
      }
      .player-card {
        position: relative;
        width: 48px; height: 48px;
      }
      .player-img {
        width: 48px; height: 48px;
        border-radius: 50%;
        object-fit: cover;
        background: var(--cl-card-2);
        border: 2px solid var(--cl-glass-border);
      }
      .player-init {
        width: 48px; height: 48px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-accent-2));
        color: white;
        display: flex; align-items: center; justify-content: center;
        font-size: 14px; font-weight: 800;
        letter-spacing: -0.02em;
      }
      .player-num {
        position: absolute;
        bottom: -3px; right: -4px;
        background: #0b0f1a;
        color: white;
        border: 2px solid var(--card-background-color, #1a1f2e);
        font-size: 9px; font-weight: 800;
        min-width: 18px; height: 18px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-variant-numeric: tabular-nums;
        padding: 0 3px;
      }
      .player-name {
        font-size: 10px; font-weight: 700;
        line-height: 1.1;
        max-width: 64px;
        color: var(--primary-text-color);
        word-wrap: break-word;
        text-align: center;
      }
      .player-pos {
        font-size: 8px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--secondary-text-color);
        background: var(--cl-card-2);
        padding: 1px 5px;
        border-radius: 4px;
      }
      .bench-label {
        margin-top: 16px; margin-bottom: 8px;
        font-size: 10px; font-weight: 800;
        text-transform: uppercase; letter-spacing: 0.15em;
        color: var(--secondary-text-color);
        display: flex; align-items: center; gap: 8px;
      }
      .bench-label::after {
        content: '';
        flex: 1; height: 1px;
        background: linear-gradient(90deg, var(--cl-divider), transparent);
      }

      @media (max-width: 480px) {
        .teams-row { grid-template-columns: 1fr; }
        .team-block { border-right: none; border-bottom: 1px solid var(--cl-divider); }
        .team-block:last-child { border-bottom: none; }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-lineup",name:"Calcio Live Lineup Card",description:"Mostra le formazioni di entrambe le squadre della prossima/attuale partita"}),customElements.define("calcio-live-lineup-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return n`
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
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.checked;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.value;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor.calciolive_next"))).sort())}render(){if(!this._config||!this.hass)return B``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return B`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity (sensore team_match — calciolive_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":B`<option value="${e}" selected>${e||"— seleziona —"}</option>`}
            ${this.entities.map((t=>B`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
          <div class="hint" style="margin-top: 4px;">Le formazioni vengono pubblicate poco prima dell'inizio della partita.</div>
        </div>

        <h3>Impostazioni</h3>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("calcio-live-timeline",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this.hideHeader=!0===e.hide_header,this.reverseOrder=!0===e.reverse_order}_t(e,t){return pe(e,de(this.hass,this._config),t)}getCardSize(){return 5}static getConfigElement(){return document.createElement("calcio-live-timeline-editor")}static getStubConfig(){return{entity:"sensor.calciolive_next",hide_header:!1,reverse_order:!0}}_eventMeta(e){const t=(e.type||"").toLowerCase(),i=(e.type_text||"").toLowerCase();return i.includes("kickoff")||"kickoff"===t?{icon:"⚽",label:this._t("status.kickoff"),cls:"meta"}:i.includes("halftime")||i.includes("intervallo")?{icon:"⏸",label:this._t("status.halftime"),cls:"meta"}:i.includes("start 2nd")||i.includes("secondo tempo")?{icon:"▶",label:this._t("status.second_half"),cls:"meta"}:i.includes("end regular")||i.includes("full time")?{icon:"🏁",label:this._t("status.end"),cls:"meta"}:"goal"===t||e.scoring_play?{icon:"⚽",label:this._t("event.goal"),cls:"goal"}:i.includes("penalty")?{icon:"⚽",label:this._t("timeline.penalty"),cls:"goal"}:i.includes("yellow card")?{icon:"🟨",label:this._t("event.yellow_card"),cls:"yellow"}:i.includes("red card")?{icon:"🟥",label:this._t("event.red_card"),cls:"red"}:"substitution"===t||i.includes("substitution")?{icon:"🔄",label:this._t("event.substitution"),cls:"sub"}:i.includes("var")?{icon:"📺",label:this._t("event.var"),cls:"meta"}:{icon:"·",label:e.type_text||this._t("timeline.event"),cls:"meta"}}render(){if(!this.hass||!this._config)return B``;const e=this.hass.states[this._config.entity];if(!e)return B`<ha-card class="empty">${this._t("generic.unknown_entity")}: ${this._config.entity}</ha-card>`;const t=e.attributes.matches||[];if(0===t.length)return B`<ha-card class="empty">${this._t("generic.no_match")}</ha-card>`;const i=t[0],a=i.key_events||e.attributes.key_events||[];if(0===a.length)return B`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">⏱</div>
            <div class="empty-title">${this._t("timeline.empty.title")}</div>
            <div class="empty-sub">${this._t("timeline.empty.sub")}</div>
          </div>
        </ha-card>
      `;const s=this.reverseOrder?[...a].reverse():a;return B`
      <ha-card>
        <div class="hero-bg"></div>
        ${this.hideHeader?"":B`
          <div class="tl-header">
            <div class="header-icon">⏱</div>
            <div class="header-text">
              <div class="title">${this._t("card.timeline")}</div>
              <div class="subtitle">
                <img class="mini-logo" src="${i.home_logo}" alt="" />
                <span>${i.home_score??"-"} - ${i.away_score??"-"}</span>
                <img class="mini-logo" src="${i.away_logo}" alt="" />
              </div>
            </div>
          </div>
        `}

        <div class="tl-body">
          ${s.map((e=>{const t=this._eventMeta(e),a=i.home_team&&e.team===i.home_team,s=i.away_team&&e.team===i.away_team,n=a?"home":s?"away":"meta",o=(e.athletes||[]).filter(Boolean);return B`
              <div class="tl-row side-${n} type-${t.cls}">
                <div class="tl-time">${e.clock||""}</div>
                <div class="tl-axis">
                  <div class="tl-dot ${t.cls}">${t.icon}</div>
                </div>
                <div class="tl-card">
                  <div class="tl-card-head">
                    <span class="tl-label">${t.label}</span>
                    ${e.team?B`<span class="tl-team">${e.team}</span>`:""}
                  </div>
                  ${o.length?B`
                    <div class="tl-athletes">${o.join(", ")}</div>
                  `:""}
                  ${e.short_text?B`<div class="tl-text">${e.short_text}</div>`:""}
                </div>
              </div>
            `}))}
        </div>
      </ha-card>
    `}static get styles(){return n`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--primary-text-color); }
      .empty-sub { font-size: 12px; color: var(--secondary-text-color); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.10), transparent 50%);
        pointer-events: none;
      }

      .tl-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-accent), var(--cl-gold));
        display: flex; align-items: center; justify-content: center;
        font-size: 20px;
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--primary-text-color);
      }
      .header-text .subtitle {
        display: flex; align-items: center; gap: 6px;
        font-size: 12px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-weight: 700;
      }
      .mini-logo { width: 16px; height: 16px; object-fit: contain; }

      .tl-body {
        position: relative; z-index: 1;
        padding: 16px 12px 20px;
      }
      .tl-row {
        display: grid;
        grid-template-columns: 44px 32px 1fr;
        gap: 10px;
        align-items: flex-start;
        position: relative;
      }
      .tl-row + .tl-row { margin-top: 4px; }
      .tl-time {
        text-align: right;
        font-size: 11px;
        font-weight: 700;
        color: var(--secondary-text-color);
        font-variant-numeric: tabular-nums;
        padding: 8px 0;
      }
      .tl-axis {
        position: relative;
        display: flex; justify-content: center;
        padding: 4px 0;
      }
      .tl-axis::before {
        content: '';
        position: absolute;
        top: 0; bottom: 0;
        left: 50%;
        width: 2px;
        background: var(--cl-divider);
        transform: translateX(-50%);
      }
      .tl-row:first-child .tl-axis::before { top: 50%; }
      .tl-row:last-child .tl-axis::before { bottom: 50%; }
      .tl-dot {
        position: relative;
        z-index: 1;
        width: 26px; height: 26px;
        border-radius: 50%;
        background: var(--card-background-color, #1a1f2e);
        border: 2px solid var(--cl-divider);
        display: flex; align-items: center; justify-content: center;
        font-size: 12px;
      }
      .tl-dot.goal {
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        border-color: var(--cl-gold);
        box-shadow: 0 0 0 4px rgba(251,191,36,0.2);
      }
      .tl-dot.yellow {
        background: rgba(245,158,11,0.18);
        border-color: #f59e0b;
      }
      .tl-dot.red {
        background: rgba(239,68,68,0.18);
        border-color: var(--cl-live);
      }
      .tl-dot.sub {
        background: rgba(99,102,241,0.18);
        border-color: var(--cl-accent);
      }
      .tl-dot.meta {
        background: var(--cl-card-2);
      }
      .tl-card {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 12px;
        padding: 8px 12px;
      }
      .tl-row.type-goal .tl-card {
        background: linear-gradient(135deg, rgba(251,191,36,0.10), rgba(251,191,36,0.02));
        border-color: rgba(251,191,36,0.3);
      }
      .tl-row.type-red .tl-card {
        border-color: rgba(239,68,68,0.3);
      }
      .tl-row.type-yellow .tl-card {
        border-color: rgba(245,158,11,0.3);
      }
      .tl-card-head {
        display: flex; justify-content: space-between;
        align-items: baseline;
        gap: 8px;
      }
      .tl-label {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--primary-text-color);
      }
      .tl-row.type-goal .tl-label { color: var(--cl-gold); }
      .tl-row.type-yellow .tl-label { color: #f59e0b; }
      .tl-row.type-red .tl-label { color: var(--cl-live); }
      .tl-row.type-sub .tl-label { color: var(--cl-accent); }
      .tl-team {
        font-size: 10px;
        font-weight: 700;
        color: var(--secondary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 50%;
      }
      .tl-athletes {
        font-size: 13px;
        font-weight: 700;
        color: var(--primary-text-color);
        margin-top: 3px;
        line-height: 1.3;
      }
      .tl-text {
        font-size: 11px;
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-top: 3px;
        line-height: 1.4;
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-timeline",name:"Calcio Live Timeline Card",description:"Cronologia minuto-per-minuto degli eventi della partita"}),customElements.define("calcio-live-timeline-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return n`
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
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.checked;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.value;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor.calciolive_next"))).sort())}render(){if(!this._config||!this.hass)return B``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return B`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity (sensore team_match — calciolive_next_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":B`<option value="${e}" selected>${e||"— seleziona —"}</option>`}
            ${this.entities.map((t=>B`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
          <div class="hint" style="margin-top: 4px;">Gli eventi vengono pubblicati durante la partita.</div>
        </div>

        <h3>Impostazioni</h3>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Reverse order (più recenti in alto)</label>
          <ha-switch
            .checked=${!0===this._config.reverse_order}
            data-config-value="reverse_order"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
          </select>
        </div>
      </div>
    `}}),customElements.define("calcio-live-bracket",class extends oe{static get properties(){return{hass:{},_config:{}}}setConfig(e){if(!e.entity)throw new Error("Entity required");this._config=e,this.hideHeader=!0===e.hide_header,this.compactMode=!0===e.compact,this._cardStyle="tree"===e.style?"tree":"list",this.treeShowPlayoffs=!0===e.tree_show_playoffs}_t(e,t){return pe(e,de(this.hass,this._config),t)}_formatDate(e){if(!e)return"";try{const t=new Date(e),i=this._t("month."+(t.getMonth()+1));return`${t.getDate()} ${i}`}catch(e){return""}}_localizeRoundName(e){const t={Final:"round.final",Semifinals:"round.semifinals",Quarterfinals:"round.quarterfinals","Round of 16":"round.r16","Round of 32":"round.r32","Knockout Playoffs":"round.knockout_playoffs","Preliminary Round":"round.preliminary"}[e.name];return t?this._t(t):e.name}getCardSize(){return 6}static getConfigElement(){return document.createElement("calcio-live-bracket-editor")}static getStubConfig(){return{entity:"sensor.calciolive_bracket",hide_header:!1,compact:!1,style:"list"}}_formatScore(e){return null==e?"-":String(e)}_renderTie(e){const t=e.team_a||{},i=e.team_b||{},a=e.leg1,s=e.leg2,n=e.single,o=e.winner_team,r=o&&t.name&&o===t.name,l=o&&i.name&&o===i.name,c=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null,d=c(a,t),p=c(a,i),h=c(s,t),g=c(s,i),u=c(n,t),m=c(n,i),f=a&&"in"===a.state||s&&"in"===s.state||n&&"in"===n.state,v=!a&&!n;return B`
      <div class="tie ${f?"live":""} ${e.completed?"done":""}">
        <div class="tie-row ${r?"winner":""} ${l?"loser":""}">
          <img src="${t.logo}" alt="${t.name}" />
          <span class="tname">${t.name||"TBD"}</span>
          <span class="legs">
            ${n?B`<span class="leg">${this._formatScore(u)}</span>`:B`
              <span class="leg">${this._formatScore(d)}</span>
              <span class="leg">${this._formatScore(h)}</span>
            `}
          </span>
        </div>
        <div class="tie-row ${l?"winner":""} ${r?"loser":""}">
          <img src="${i.logo}" alt="${i.name}" />
          <span class="tname">${i.name||"TBD"}</span>
          <span class="legs">
            ${n?B`<span class="leg">${this._formatScore(m)}</span>`:B`
              <span class="leg">${this._formatScore(p)}</span>
              <span class="leg">${this._formatScore(g)}</span>
            `}
          </span>
        </div>
        <div class="tie-foot">
          ${f?B`<span class="live-badge"><span class="dot"></span>LIVE</span>`:""}
          ${e.aggregate?B`<span class="agg">${this._t("bracket.agg")} ${e.aggregate}</span>`:""}
          ${e.tied?B`<span class="agg tied">${this._t("bracket.tied_agg")}</span>`:""}
          ${e.completed||f||!e.first_leg_date?"":B`<span class="date">${this._formatDate(e.first_leg_date)}</span>`}
          ${v?B`<span class="date pending">${this._t("bracket.tbd")}</span>`:""}
        </div>
      </div>
    `}_aggregateFor(e,t){if(!t||!t.name)return null;const i=(e,t)=>e&&t&&t.name?e.home_team===t.name?e.home_score:e.away_team===t.name?e.away_score:null:null;if(e.single)return i(e.single,t);let a=0,s=!1;const n=i(e.leg1,t),o=i(e.leg2,t);return null!=n&&(a+=n,s=!0),null!=o&&(a+=o,s=!0),s?a:null}_renderMiniTie(e){const t=e.team_a||{},i=e.team_b||{},a=this._aggregateFor(e,t),s=this._aggregateFor(e,i),n=e.winner_team,o=n&&t.name&&n===t.name,r=n&&i.name&&n===i.name,l=e.leg1&&"in"===e.leg1.state||e.leg2&&"in"===e.leg2.state||e.single&&"in"===e.single.state,c=!e.leg1&&!e.single,d=t.abbrev||(t.name?t.name.substring(0,3).toUpperCase():"TBD"),p=i.abbrev||(i.name?i.name.substring(0,3).toUpperCase():"TBD");return B`
      <div class="mini-tie ${l?"live":""} ${e.completed?"done":""} ${c?"pending":""}">
        <div class="mini-team ${o?"winner":""} ${r?"loser":""}">
          ${t.logo?B`<img src="${t.logo}" alt="${t.name}" />`:B`<div class="logo-ph"></div>`}
          <span class="abbr">${d}</span>
          <span class="agg-num">${null!==a?a:"-"}</span>
        </div>
        <div class="mini-team ${r?"winner":""} ${o?"loser":""}">
          ${i.logo?B`<img src="${i.logo}" alt="${i.name}" />`:B`<div class="logo-ph"></div>`}
          <span class="abbr">${p}</span>
          <span class="agg-num">${null!==s?s:"-"}</span>
        </div>
        ${l?B`<span class="mini-live"><span class="dot"></span></span>`:""}
      </div>
    `}_renderTreeRound(e,t){return B`
      <div class="tree-col">
        <div class="tree-col-label">
          <span class="tree-col-label-en">${this._t(t)}</span>
        </div>
        <div class="tree-col-ties">
          ${e.map((e=>this._renderMiniTie(e)))}
        </div>
      </div>
    `}_renderArrows(e,t){if(e<=0)return"";const i=2*e,a=[],s="left"===t,n=`arrow-${t}`;for(let t=0;t<e;t++){const o=(2*t+.5)/i*100,r=(2*t+1.5)/i*100,l=(t+.5)/e*100;s?(a.push(I`<line x1="0" y1="${o}%" x2="50%" y2="${o}%" stroke-linecap="round" />`),a.push(I`<line x1="0" y1="${r}%" x2="50%" y2="${r}%" stroke-linecap="round" />`),a.push(I`<line x1="50%" y1="${o}%" x2="50%" y2="${r}%" />`),a.push(I`<line x1="50%" y1="${l}%" x2="100%" y2="${l}%" marker-end="url(#${n})" />`)):(a.push(I`<line x1="100%" y1="${o}%" x2="50%" y2="${o}%" stroke-linecap="round" />`),a.push(I`<line x1="100%" y1="${r}%" x2="50%" y2="${r}%" stroke-linecap="round" />`),a.push(I`<line x1="50%" y1="${o}%" x2="50%" y2="${r}%" />`),a.push(I`<line x1="50%" y1="${l}%" x2="0" y2="${l}%" marker-end="url(#${n})" />`))}const o=s?I`<marker id="${n}" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M0,0 L10,5 L0,10 z" fill="var(--cl-accent)" /></marker>`:I`<marker id="${n}" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" markerUnits="strokeWidth" overflow="visible"><path d="M10,0 L0,5 L10,10 z" fill="var(--cl-accent)" /></marker>`;return B`
      <div class="tree-arrows ${t}">
        <svg class="connector-svg ${t}" preserveAspectRatio="none">
          <defs>${o}</defs>
          ${a}
        </svg>
      </div>
    `}_renderTree(e){const t=t=>{const i=e.filter((e=>e.size===t));if(0===i.length)return null;return i.find((e=>"Knockout Playoffs"!==e.name&&"Preliminary Round"!==e.name))||i[i.length-1]},i=e.find((e=>"Knockout Playoffs"===e.name)),a=t(8),s=t(4),n=t(2),o=t(1),r=e=>{if(!e)return{left:[],right:[]};const t=e.ties||[],i=Math.ceil(t.length/2);return{left:t.slice(0,i),right:t.slice(i)}},l=r(a),c=r(s),d=r(n),p=this.treeShowPlayoffs?r(i):null,h=o?o.ties[0]:null;return B`
      <div class="tree-wrap">
        <div class="tree">
          <div class="tree-half left">
            ${p&&p.left.length?B`
              ${this._renderTreeRound(p.left,"round.knockout_playoffs")}
              ${l.left.length?this._renderArrows(l.left.length,"left"):""}
            `:""}
            ${l.left.length?this._renderTreeRound(l.left,"round.r16"):""}
            ${l.left.length&&c.left.length?this._renderArrows(c.left.length,"left"):""}
            ${c.left.length?this._renderTreeRound(c.left,"round.quarterfinals"):""}
            ${c.left.length&&d.left.length?this._renderArrows(d.left.length,"left"):""}
            ${d.left.length?this._renderTreeRound(d.left,"round.semifinals"):""}
            ${d.left.length?this._renderArrows(1,"left"):""}
          </div>

          <div class="tree-center">
            <div class="trophy">🏆</div>
            <div class="trophy-label">${this._t("round.final")}</div>
            ${h?B`<div class="final-tie-wrap">${this._renderMiniTie(h)}</div>`:B`<div class="final-placeholder">${this._t("bracket.tbd")}</div>`}
          </div>

          <div class="tree-half right">
            ${d.right.length?this._renderArrows(1,"right"):""}
            ${d.right.length?this._renderTreeRound(d.right,"round.semifinals"):""}
            ${d.right.length&&c.right.length?this._renderArrows(d.right.length,"right"):""}
            ${c.right.length?this._renderTreeRound(c.right,"round.quarterfinals"):""}
            ${c.right.length&&l.right.length?this._renderArrows(c.right.length,"right"):""}
            ${l.right.length?this._renderTreeRound(l.right,"round.r16"):""}
            ${p&&p.right.length?B`
              ${l.right.length?this._renderArrows(l.right.length,"right"):""}
              ${this._renderTreeRound(p.right,"round.knockout_playoffs")}
            `:""}
          </div>
        </div>
      </div>
    `}render(){if(!this.hass||!this._config)return B``;const e=this.hass.states[this._config.entity];if(!e)return B`<ha-card class="empty">Entità sconosciuta: ${this._config.entity}</ha-card>`;const t=e.attributes.rounds||[];return 0===t.length?B`
        <ha-card class="empty">
          <div class="hero-bg"></div>
          <div class="empty-state">
            <div class="empty-icon">🏆</div>
            <div class="empty-title">${this._t("bracket.empty.title")}</div>
            <div class="empty-sub">${this._t("bracket.empty.sub")}</div>
          </div>
        </ha-card>
      `:B`
      <ha-card class="${this.compactMode?"compact":""} style-${this._cardStyle}">
        <div class="hero-bg"></div>
        ${this.hideHeader?"":B`
          <div class="bracket-header">
            <div class="header-icon">🏆</div>
            <div class="header-text">
              <div class="title">${this._t("card.bracket")}</div>
              <div class="subtitle">${e.state}</div>
            </div>
          </div>
        `}

        ${"tree"===this._cardStyle?this._renderTree(t):B`
          <div class="rounds-container">
            ${t.map((e=>B`
              <div class="round">
                <div class="round-name">
                  <span class="round-name-en">${this._localizeRoundName(e)}</span>
                </div>
                <div class="round-ties">
                  ${e.ties.map((e=>this._renderTie(e)))}
                </div>
              </div>
            `))}
          </div>
        `}
      </ha-card>
    `}static get styles(){return n`
      :host {
        --cl-accent: #6366f1;
        --cl-accent-2: #ec4899;
        --cl-live: #ef4444;
        --cl-live-glow: rgba(239,68,68,0.5);
        --cl-green: #10b981;
        --cl-gold: #fbbf24;
        --cl-card-2: rgba(255,255,255,0.05);
        --cl-divider: rgba(255,255,255,0.08);
        --cl-glass-border: rgba(255,255,255,0.08);
      }
      ha-card {
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        padding: 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.15);
      }
      ha-card.empty {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
      .empty-state {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 24px;
      }
      .empty-icon { font-size: 38px; opacity: 0.4; }
      .empty-title { font-weight: 800; color: var(--primary-text-color); }
      .empty-sub { font-size: 12px; color: var(--secondary-text-color); }

      .hero-bg {
        position: absolute; inset: 0; z-index: 0;
        background:
          radial-gradient(ellipse at 0% 0%, rgba(99,102,241,0.10), transparent 50%),
          radial-gradient(ellipse at 100% 100%, rgba(251,191,36,0.10), transparent 50%);
        pointer-events: none;
      }

      .bracket-header {
        position: relative; z-index: 1;
        display: flex; align-items: center; gap: 12px;
        padding: 16px 18px;
        border-bottom: 1px solid var(--cl-divider);
      }
      .header-icon {
        width: 40px; height: 40px;
        border-radius: 12px;
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        display: flex; align-items: center; justify-content: center;
        font-size: 22px;
        box-shadow: 0 4px 16px rgba(251,191,36,0.4);
      }
      .header-text .title {
        font-size: 18px; font-weight: 900;
        letter-spacing: -0.02em;
        color: var(--primary-text-color);
      }
      .header-text .title-it {
        font-size: 13px;
        font-weight: 600;
        color: var(--secondary-text-color);
        margin-left: 4px;
        opacity: 0.85;
      }
      .header-text .subtitle {
        font-size: 11px;
        color: var(--secondary-text-color);
        margin-top: 2px;
        font-weight: 600;
      }

      .rounds-container {
        position: relative; z-index: 1;
        display: flex;
        gap: 16px;
        padding: 18px;
        overflow-x: auto;
      }
      .round {
        flex: 1 0 240px;
        min-width: 240px;
        display: flex; flex-direction: column;
        gap: 8px;
        justify-content: space-around;
      }
      .round-name {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        text-align: center;
        padding: 6px 12px;
        border-radius: 12px;
        background: rgba(99,102,241,0.12);
        align-self: center;
        margin-bottom: 4px;
      }
      .round-name-en {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: var(--cl-accent);
        line-height: 1;
      }
      .round-name-it {
        font-size: 9px;
        font-weight: 600;
        color: var(--secondary-text-color);
        opacity: 0.85;
        line-height: 1;
      }
      .round-ties {
        display: flex; flex-direction: column;
        gap: 12px;
        justify-content: space-around;
        flex: 1;
      }

      .tie {
        background: var(--cl-card-2);
        border: 1px solid var(--cl-glass-border);
        border-radius: 12px;
        padding: 10px 12px;
        transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
      }
      .tie:hover {
        border-color: var(--cl-accent);
        transform: translateY(-2px);
      }
      .tie.live {
        border-color: var(--cl-live);
        box-shadow: 0 0 0 1px var(--cl-live), 0 0 20px var(--cl-live-glow);
        animation: tie-pulse 2s ease-in-out infinite;
      }
      @keyframes tie-pulse {
        0%, 100% { box-shadow: 0 0 0 1px var(--cl-live), 0 0 20px var(--cl-live-glow); }
        50% { box-shadow: 0 0 0 2px var(--cl-live), 0 0 30px var(--cl-live-glow); }
      }
      .tie.done {
        border-color: rgba(16,185,129,0.3);
      }

      .tie-row {
        display: grid;
        grid-template-columns: 22px 1fr auto;
        align-items: center;
        gap: 10px;
        padding: 5px 0;
      }
      .tie-row + .tie-row {
        border-top: 1px solid var(--cl-divider);
      }
      .tie-row img {
        width: 22px; height: 22px;
        object-fit: contain;
      }
      .tie-row .tname {
        font-size: 13px;
        font-weight: 600;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -0.01em;
      }
      .tie-row.winner .tname { font-weight: 800; }
      .tie-row.loser .tname { color: var(--secondary-text-color); }
      .tie-row.loser img { opacity: 0.55; }

      .legs {
        display: inline-flex;
        gap: 4px;
      }
      .leg {
        min-width: 22px;
        text-align: center;
        font-size: 13px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        padding: 2px 6px;
        border-radius: 6px;
        background: rgba(255,255,255,0.06);
        color: var(--primary-text-color);
      }
      .tie-row.winner .leg {
        background: rgba(16,185,129,0.2);
        color: var(--cl-green);
      }
      .tie-row.loser .leg {
        opacity: 0.5;
      }

      .tie-foot {
        margin-top: 8px;
        padding-top: 8px;
        border-top: 1px dashed var(--cl-divider);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .agg {
        font-size: 10px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--cl-green);
        padding: 2px 8px;
        background: rgba(16,185,129,0.12);
        border-radius: 6px;
      }
      .agg.tied {
        color: var(--cl-gold);
        background: rgba(251,191,36,0.12);
      }
      .date {
        font-size: 10px;
        font-weight: 700;
        color: var(--secondary-text-color);
        text-transform: uppercase;
        letter-spacing: 0.06em;
      }
      .date.pending {
        color: var(--cl-accent);
      }
      .live-badge {
        display: inline-flex; align-items: center; gap: 5px;
        background: linear-gradient(135deg, var(--cl-live), #f97316);
        color: white;
        padding: 2px 8px;
        border-radius: 999px;
        font-size: 9px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .live-badge .dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: white;
        animation: dot-pulse 1.2s ease-in-out infinite;
      }
      @keyframes dot-pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(0.7); }
      }

      /* Compact mode (vertical, single column per round) */
      ha-card.compact .rounds-container {
        flex-direction: column;
        overflow-x: visible;
      }
      ha-card.compact .round {
        flex: none;
        min-width: 0;
      }

      @media (max-width: 600px) {
        ha-card.style-list .rounds-container {
          flex-direction: column;
        }
        ha-card.style-list .round {
          flex: none;
          min-width: 0;
        }
      }

      /* ============== STYLE: TREE ============== */
      .tree-wrap {
        position: relative;
        z-index: 1;
        overflow-x: auto;
        padding: 24px 12px 24px;
      }
      .tree {
        display: flex;
        align-items: stretch;
        justify-content: center;
        min-height: 480px;
        gap: 0;
      }
      .tree-half {
        flex: 1;
        display: flex;
        align-items: stretch;
        min-width: 0;
      }
      /* Niente row-reverse: per la "specularità" del lato destro renderizziamo
         direttamente i figli nell'ordine SF→QF→R16 (vedi _renderTree). */

      .tree-col {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 6px;
        min-width: 110px;
        max-width: 140px;
      }
      .tree-col-label {
        text-align: center;
        padding: 4px 8px;
        background: rgba(99,102,241,0.12);
        border-radius: 8px;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1px;
      }
      .tree-col-label-en {
        font-size: 9px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--cl-accent);
        line-height: 1;
      }
      .tree-col-label-it {
        font-size: 8px;
        font-weight: 600;
        color: var(--secondary-text-color);
        line-height: 1;
        opacity: 0.85;
      }
      .tree-col-ties {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 6px;
        position: relative;
      }

      /* SVG bracket arrow connectors — colonne più larghe e con frecce sempre visibili */
      .tree-arrows {
        flex: 0 0 36px;
        min-width: 36px;
        display: flex;
        align-items: stretch;
        padding-top: 44px; /* compensa la label dei round */
        padding-bottom: 0;
      }
      .connector-svg {
        width: 100%;
        height: 100%;
        stroke: var(--cl-accent);
        stroke-width: 2;
        fill: none;
        overflow: visible;
        display: block;
      }
      .connector-svg .arrow-head {
        fill: var(--cl-accent);
        stroke: none;
      }

      /* Mini tie card */
      .mini-tie {
        background: var(--card-background-color, rgba(20, 24, 36, 0.6));
        border: 1.5px solid var(--cl-accent);
        border-radius: 10px;
        padding: 7px 9px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
        box-shadow: 0 2px 8px rgba(99,102,241,0.15);
      }
      .mini-tie:hover {
        border-color: var(--cl-accent);
        transform: scale(1.04);
        z-index: 5;
      }
      .mini-tie.live {
        border-color: var(--cl-live);
        box-shadow: 0 0 0 1px var(--cl-live), 0 0 16px var(--cl-live-glow);
        animation: tie-pulse 2s ease-in-out infinite;
      }
      .mini-tie.done {
        border-color: rgba(16,185,129,0.3);
      }
      .mini-tie.pending {
        opacity: 0.55;
        background: transparent;
        border-style: dashed;
      }
      .mini-team {
        display: grid;
        grid-template-columns: 18px 1fr auto;
        align-items: center;
        gap: 6px;
        padding: 2px 0;
      }
      .mini-team img {
        width: 18px; height: 18px;
        object-fit: contain;
      }
      .mini-team .logo-ph {
        width: 18px; height: 18px;
        border-radius: 50%;
        background: var(--cl-card-2);
      }
      .mini-team .abbr {
        font-size: 11px;
        font-weight: 700;
        color: var(--primary-text-color);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        letter-spacing: -0.01em;
      }
      .mini-team .agg-num {
        font-size: 12px;
        font-weight: 800;
        font-variant-numeric: tabular-nums;
        min-width: 14px;
        text-align: right;
        color: var(--secondary-text-color);
      }
      .mini-team.winner .abbr {
        font-weight: 800;
      }
      .mini-team.winner .agg-num {
        color: var(--cl-green);
      }
      .mini-team.loser .abbr {
        color: var(--secondary-text-color);
      }
      .mini-team.loser img {
        opacity: 0.5;
      }
      .mini-team.loser .agg-num {
        opacity: 0.55;
      }
      .mini-live {
        position: absolute;
        top: -3px; right: -3px;
        width: 10px; height: 10px;
      }
      .mini-live .dot {
        display: block;
        width: 10px; height: 10px;
        border-radius: 50%;
        background: var(--cl-live);
        box-shadow: 0 0 8px var(--cl-live-glow);
        animation: dot-pulse 1.2s ease-in-out infinite;
      }

      /* Tree center (trophy + final) */
      .tree-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 16px;
        gap: 14px;
        min-width: 200px;
        flex: 0 0 200px;
        position: relative;
      }
      .tree-center::before {
        content: '';
        position: absolute;
        inset: 20% 8%;
        background:
          radial-gradient(circle at center, rgba(251,191,36,0.20), transparent 65%);
        pointer-events: none;
        border-radius: 50%;
      }
      .trophy {
        position: relative;
        font-size: 64px;
        line-height: 1;
        filter: drop-shadow(0 4px 24px rgba(251,191,36,0.7));
        animation: trophy-shine 4s ease-in-out infinite;
        z-index: 2;
      }
      @keyframes trophy-shine {
        0%, 100% { filter: drop-shadow(0 4px 24px rgba(251,191,36,0.7)); transform: scale(1); }
        50% { filter: drop-shadow(0 4px 36px rgba(251,191,36,1)) drop-shadow(0 0 12px #fbbf24); transform: scale(1.04); }
      }
      .trophy-label {
        position: relative;
        font-size: 12px;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        background: linear-gradient(135deg, var(--cl-gold), #d97706);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: center;
        z-index: 2;
      }
      .trophy-label-it {
        font-weight: 600;
        opacity: 0.85;
      }
      .final-tie-wrap {
        position: relative;
        width: 100%;
        max-width: 170px;
        z-index: 2;
      }
      .final-tie-wrap .mini-tie {
        background: linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.02));
        border-color: rgba(251,191,36,0.4);
        box-shadow: 0 4px 16px rgba(251,191,36,0.2);
      }
      .final-tie-wrap .mini-team.winner .agg-num {
        color: var(--cl-gold);
      }
      .final-placeholder {
        position: relative;
        font-size: 11px;
        font-weight: 800;
        color: var(--secondary-text-color);
        padding: 8px 14px;
        background: var(--cl-card-2);
        border: 1px dashed var(--cl-glass-border);
        border-radius: 8px;
        letter-spacing: 0.1em;
      }

      /* Mobile per tree */
      @media (max-width: 720px) {
        ha-card.style-tree .tree-col {
          min-width: 100px;
        }
        ha-card.style-tree .tree-center {
          min-width: 140px;
        }
        ha-card.style-tree .trophy {
          font-size: 56px;
        }
      }
      @media (max-width: 520px) {
        ha-card.style-tree .tree {
          flex-direction: column;
          min-height: 0;
        }
        ha-card.style-tree .tree-half {
          flex-direction: row;
        }
        ha-card.style-tree .tree-half.right {
          flex-direction: row;
        }
        ha-card.style-tree .tree-center {
          order: -1;
          padding: 12px;
        }
      }
    `}}),window.customCards=window.customCards||[],window.customCards.push({type:"calcio-live-bracket",name:"Calcio Live Bracket Card",description:"Tabellone della fase a eliminazione diretta (Champions, Europa, Coppe)"}),customElements.define("calcio-live-bracket-editor",class extends oe{static get properties(){return{_config:{type:Object},hass:{type:Object},entities:{type:Array}}}constructor(){super(),this.entities=[]}static get styles(){return n`
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
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config={...e}}get config(){return this._config}updated(e){e.has("hass")&&this._fetchEntities()}_fireConfigChanged(e){this._config=e,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0})),this.requestUpdate()}_entityChanged(e){if(!this._config)return;const t=e.target.value;t!==this._config.entity&&this._fireConfigChanged({...this._config,entity:t})}_switchChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.checked;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_selectChanged(e){if(!this._config)return;const t=e.target;if(!t.dataset||!t.dataset.configValue)return;const i=t.dataset.configValue,a=t.value;this._config[i]!==a&&this._fireConfigChanged({...this._config,[i]:a})}_fetchEntities(){this.hass&&(this.entities=Object.keys(this.hass.states).filter((e=>e.startsWith("sensor.calciolive_bracket"))).sort())}render(){if(!this._config||!this.hass)return B``;const e=this._config.entity||"",t=e&&this.entities.includes(e);return B`
      <div class="card-config">
        <h3>Sensore</h3>
        <div>
          <label class="field-label">Entity (sensore bracket — calciolive_bracket_*)</label>
          <select @change=${this._entityChanged}>
            ${t?"":B`<option value="${e}" selected>${e||"— seleziona —"}</option>`}
            ${this.entities.map((t=>B`<option value="${t}" ?selected=${t===e}>${t}</option>`))}
          </select>
          <div class="hint" style="margin-top: 4px;">Disponibile per Champions, Europa, Conference, FIFA World Cup e altre coppe.</div>
        </div>

        <h3>Impostazioni</h3>
        <div>
          <label class="field-label">Style · Stile</label>
          <select data-config-value="style" @change=${this._selectChanged}>
            <option value="list" ?selected=${"tree"!==this._config.style}>List · Lista (default)</option>
            <option value="tree" ?selected=${"tree"===this._config.style}>Tree · Tabellone con coppa centrale</option>
          </select>
        </div>
        <div class="option">
          <label>Hide Header</label>
          <ha-switch
            .checked=${!0===this._config.hide_header}
            data-config-value="hide_header"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Compact (list mode: round in colonna)</label>
          <ha-switch
            .checked=${!0===this._config.compact}
            data-config-value="compact"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div class="option">
          <label>Tree: include Playoffs · Includi spareggi</label>
          <ha-switch
            .checked=${!0===this._config.tree_show_playoffs}
            data-config-value="tree_show_playoffs"
            @change=${this._switchChanged}
          ></ha-switch>
        </div>
        <div>
          <label class="field-label">Language · Lingua</label>
          <select data-config-value="language" @change=${this._selectChanged}>
            <option value="" ?selected=${!this._config.language}>Auto (HA locale)</option>
            <option value="en" ?selected=${"en"===this._config.language}>English</option>
            <option value="it" ?selected=${"it"===this._config.language}>Italiano</option>
            <option value="fr" ?selected=${"fr"===this._config.language}>Français</option>
            <option value="es" ?selected=${"es"===this._config.language}>Español</option>
          </select>
        </div>
      </div>
    `}})})();