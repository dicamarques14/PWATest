var dt=Object.defineProperty;var ut=(o,t,e)=>t in o?dt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var k=(o,t,e)=>(ut(o,typeof t!="symbol"?t+"":t,e),e);import pt from"https://cdn.jsdelivr.net/npm/u8-mqtt/esm/web/index.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=window,W=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),J=new WeakMap;let rt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(W&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=J.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&J.set(e,t))}return t}toString(){return this.cssText}};const $t=o=>new rt(typeof o=="string"?o:o+"",void 0,K),vt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new rt(e,o,K)},ft=(o,t)=>{W?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},Z=W?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return $t(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const O=window,F=O.trustedTypes,_t=F?F.emptyScript:"",G=O.reactiveElementPolyfillSupport,B={toAttribute(o,t){switch(t){case Boolean:o=o?_t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},lt=(o,t)=>t!==o&&(t==t||o==o),L={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:lt},D="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=L){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||L}static finalize(){if(this.hasOwnProperty(D))return!1;this[D]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Z(s))}else t!==void 0&&e.push(Z(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ft(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=L){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:B).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=s.getPropertyOptions(n),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:B;this._$El=n,this[n]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||lt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};g[D]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},G==null||G({ReactiveElement:g}),((R=O.reactiveElementVersions)!==null&&R!==void 0?R:O.reactiveElementVersions=[]).push("1.6.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var j;const M=window,A=M.trustedTypes,Q=A?A.createPolicy("lit-html",{createHTML:o=>o}):void 0,V="$lit$",v=`lit$${(Math.random()+"").slice(9)}$`,ht="?"+v,mt=`<${ht}>`,m=document,w=()=>m.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",at=Array.isArray,gt=o=>at(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",z=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,f=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tt=/'/g,et=/"/g,ct=/^(?:script|style|textarea|title)$/i,At=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),it=At(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),st=new WeakMap,_=m.createTreeWalker(m,129,null,!1),yt=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=E;for(let l=0;l<e;l++){const h=o[l];let $,a,d=-1,p=0;for(;p<h.length&&(r.lastIndex=p,a=r.exec(h),a!==null);)p=r.lastIndex,r===E?a[1]==="!--"?r=X:a[1]!==void 0?r=Y:a[2]!==void 0?(ct.test(a[2])&&(s=RegExp("</"+a[2],"g")),r=f):a[3]!==void 0&&(r=f):r===f?a[0]===">"?(r=s??E,d=-1):a[1]===void 0?d=-2:(d=r.lastIndex-a[2].length,$=a[1],r=a[3]===void 0?f:a[3]==='"'?et:tt):r===et||r===tt?r=f:r===X||r===Y?r=E:(r=f,s=void 0);const U=r===f&&o[l+1].startsWith("/>")?" ":"";n+=r===E?h+mt:d>=0?(i.push($),h.slice(0,d)+V+h.slice(d)+v+U):h+v+(d===-2?(i.push(void 0),l):U)}const c=n+(o[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Q!==void 0?Q.createHTML(c):c,i]};class x{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const c=t.length-1,l=this.parts,[h,$]=yt(t,e);if(this.el=x.createElement(h,i),_.currentNode=this.el.content,e===2){const a=this.el.content,d=a.firstChild;d.remove(),a.append(...d.childNodes)}for(;(s=_.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const a=[];for(const d of s.getAttributeNames())if(d.endsWith(V)||d.startsWith(v)){const p=$[r++];if(a.push(d),p!==void 0){const U=s.getAttribute(p.toLowerCase()+V).split(v),H=/([.?@])?(.*)/.exec(p);l.push({type:1,index:n,name:H[2],strings:U,ctor:H[1]==="."?Et:H[1]==="?"?wt:H[1]==="@"?Ct:T})}else l.push({type:6,index:n})}for(const d of a)s.removeAttribute(d)}if(ct.test(s.tagName)){const a=s.textContent.split(v),d=a.length-1;if(d>0){s.textContent=A?A.emptyScript:"";for(let p=0;p<d;p++)s.append(a[p],w()),_.nextNode(),l.push({type:2,index:++n});s.append(a[d],w())}}}else if(s.nodeType===8)if(s.data===ht)l.push({type:2,index:n});else{let a=-1;for(;(a=s.data.indexOf(v,a+1))!==-1;)l.push({type:7,index:n}),a+=v.length-1}n++}}static createElement(t,e){const i=m.createElement("template");return i.innerHTML=t,i}}function b(o,t,e=o,i){var s,n,r,c;if(t===y)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const h=C(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((n=l==null?void 0:l._$AO)===null||n===void 0||n.call(l,!1),h===void 0?l=void 0:(l=new h(o),l._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=b(o,l._$AS(o,t.values),l,i)),t}class bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:m).importNode(i,!0);_.currentNode=n;let r=_.nextNode(),c=0,l=0,h=s[0];for(;h!==void 0;){if(c===h.index){let $;h.type===2?$=new P(r,r.nextSibling,this,t):h.type===1?$=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&($=new xt(r,this,t)),this._$AV.push($),h=s[++l]}c!==(h==null?void 0:h.index)&&(r=_.nextNode(),c++)}return _.currentNode=m,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,s){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(n=s==null?void 0:s.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),C(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):gt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=x.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const r=new bt(n,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=st.get(t.strings);return e===void 0&&st.set(t.strings,e=new x(t)),e}T(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new P(this.k(w()),this.k(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class T{constructor(t,e,i,s,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=b(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==y,r&&(this._$AH=t);else{const c=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=b(this,c[i+l],e,l),h===y&&(h=this._$AH[l]),r||(r=!C(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}r&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const St=A?A.emptyScript:"";class wt extends T{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,St):this.element.removeAttribute(this.name)}}class Ct extends T{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=b(this,t,e,0))!==null&&i!==void 0?i:u)===y)return;const s=this._$AH,n=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const ot=M.litHtmlPolyfillSupport;ot==null||ot(x,P),((j=M.litHtmlVersions)!==null&&j!==void 0?j:M.litHtmlVersions=[]).push("2.7.4");const Pt=(o,t,e)=>{var i,s;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new P(t.insertBefore(w(),c),c,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q,I;class S extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return y}}S.finalized=!0,S._$litElement$=!0,(q=globalThis.litElementHydrateSupport)===null||q===void 0||q.call(globalThis,{LitElement:S});const nt=globalThis.litElementPolyfillSupport;nt==null||nt({LitElement:S});((I=globalThis.litElementVersions)!==null&&I!==void 0?I:globalThis.litElementVersions=[]).push("3.3.2");class Ut extends S{constructor(){super();k(this,"clientMqtt");k(this,"values");console.log("my-elem:construct"),this.docsHint="Click on the Vite and Lit logos to learn more",this.count=0,this.connMqtt()}static get properties(){return{docsHint:{type:String},count:{type:Number}}}async connMqtt(){const e="mqttjs_"+Math.random().toString(16).substr(2,8);this.clientMqtt=pt().with_websock("wss://thedg.servebeer.com:9090").with_autoreconnect(),await this.clientMqtt.connect({client_id:e,username:"cam1",password:"cam1"})}render(){return console.log("render",this.values),this.values!=null?(console.log(this.values),it`
        <p style="font-size:2em">
        ${this.values.appPerfil.nome}
        </p>
        <div>
        <img src="${this.values.appPerfil.imagem}" class="logo"></img>
        </div>
        <div class="card">
          <button @click=${this._onClick2} part="button">
            Abrir Portão 🚪
          </button> 
        </div>
        <p class="read-the-docs">${this.docsHint}</p>
      `):it`
        <div class="card">
          <button @click=${this._onClick2} part="button">
            Abrir Portão 🚪
          </button> 
        </div>
        <p class="read-the-docs">${this.docsHint}</p>
      `}_onClick(){this.count++}_onClick2(){this.clientMqtt.send("main/gate/","Hello from mqtt_client")}async firstUpdated(){await this.fetchData()}async fetchData(){let e;e=await fetch("./json_profiles/quinta_azevinho.json").then(i=>i.json()),e!=null&&(this.values=e,this.requestUpdate(),console.log("did"))}static get styles(){return vt`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 3em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `}}window.customElements.define("my-element",Ut);
