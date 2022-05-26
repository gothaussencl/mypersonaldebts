"use strict";(self.webpackChunkmyDebts=self.webpackChunkmyDebts||[]).push([[495],{4495:(Vt,F,d)=>{d.r(F),d.d(F,{HomeModule:()=>Wt});var m=d(9808),I=d(522),n=d(7587),K=d(8814),b=d(4234),W=d(2712),V=d(9067);const G=["mat-button",""],Q=["*"],et=["mat-button","mat-flat-button","mat-icon-button","mat-raised-button","mat-stroked-button","mat-mini-fab","mat-fab"],nt=(0,b.pj)((0,b.Id)((0,b.Kr)(class{constructor(r){this._elementRef=r}})));let ot=(()=>{class r extends nt{constructor(t,o,s){super(t),this._focusMonitor=o,this._animationMode=s,this.isRoundButton=this._hasHostAttributes("mat-fab","mat-mini-fab"),this.isIconButton=this._hasHostAttributes("mat-icon-button");for(const i of et)this._hasHostAttributes(i)&&this._getHostElement().classList.add(i);t.nativeElement.classList.add("mat-button-base"),this.isRoundButton&&(this.color="accent")}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}focus(t,o){t?this._focusMonitor.focusVia(this._getHostElement(),t,o):this._getHostElement().focus(o)}_getHostElement(){return this._elementRef.nativeElement}_isRippleDisabled(){return this.disableRipple||this.disabled}_hasHostAttributes(...t){return t.some(o=>this._getHostElement().hasAttribute(o))}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(n.SBq),n.Y36(V.tE),n.Y36(W.Qb,8))},r.\u0275cmp=n.Xpm({type:r,selectors:[["button","mat-button",""],["button","mat-raised-button",""],["button","mat-icon-button",""],["button","mat-fab",""],["button","mat-mini-fab",""],["button","mat-stroked-button",""],["button","mat-flat-button",""]],viewQuery:function(t,o){if(1&t&&n.Gf(b.wG,5),2&t){let s;n.iGM(s=n.CRH())&&(o.ripple=s.first)}},hostAttrs:[1,"mat-focus-indicator"],hostVars:5,hostBindings:function(t,o){2&t&&(n.uIk("disabled",o.disabled||null),n.ekj("_mat-animation-noopable","NoopAnimations"===o._animationMode)("mat-button-disabled",o.disabled))},inputs:{disabled:"disabled",disableRipple:"disableRipple",color:"color"},exportAs:["matButton"],features:[n.qOj],attrs:G,ngContentSelectors:Q,decls:4,vars:5,consts:[[1,"mat-button-wrapper"],["matRipple","",1,"mat-button-ripple",3,"matRippleDisabled","matRippleCentered","matRippleTrigger"],[1,"mat-button-focus-overlay"]],template:function(t,o){1&t&&(n.F$t(),n.TgZ(0,"span",0),n.Hsn(1),n.qZA(),n._UZ(2,"span",1)(3,"span",2)),2&t&&(n.xp6(2),n.ekj("mat-button-ripple-round",o.isRoundButton||o.isIconButton),n.Q6J("matRippleDisabled",o._isRippleDisabled())("matRippleCentered",o.isIconButton)("matRippleTrigger",o._getHostElement()))},directives:[b.wG],styles:[".mat-button .mat-button-focus-overlay,.mat-icon-button .mat-button-focus-overlay{opacity:0}.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:.04}@media(hover: none){.mat-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay,.mat-stroked-button:hover:not(.mat-button-disabled) .mat-button-focus-overlay{opacity:0}}.mat-button,.mat-icon-button,.mat-stroked-button,.mat-flat-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-button.mat-button-disabled,.mat-icon-button.mat-button-disabled,.mat-stroked-button.mat-button-disabled,.mat-flat-button.mat-button-disabled{cursor:default}.mat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-button.cdk-program-focused .mat-button-focus-overlay,.mat-icon-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-icon-button.cdk-program-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-stroked-button.cdk-program-focused .mat-button-focus-overlay,.mat-flat-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-flat-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-button::-moz-focus-inner,.mat-icon-button::-moz-focus-inner,.mat-stroked-button::-moz-focus-inner,.mat-flat-button::-moz-focus-inner{border:0}.mat-raised-button{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-raised-button::-moz-focus-inner{border:0}.mat-raised-button.mat-button-disabled{cursor:default}.mat-raised-button.cdk-keyboard-focused .mat-button-focus-overlay,.mat-raised-button.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-raised-button::-moz-focus-inner{border:0}._mat-animation-noopable.mat-raised-button{transition:none;animation:none}.mat-stroked-button{border:1px solid currentColor;padding:0 15px;line-height:34px}.mat-stroked-button .mat-button-ripple.mat-ripple,.mat-stroked-button .mat-button-focus-overlay{top:-1px;left:-1px;right:-1px;bottom:-1px}.mat-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:56px;height:56px;padding:0;flex-shrink:0}.mat-fab::-moz-focus-inner{border:0}.mat-fab.mat-button-disabled{cursor:default}.mat-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-fab{transition:none;animation:none}.mat-fab .mat-button-wrapper{padding:16px 0;display:inline-block;line-height:24px}.mat-mini-fab{box-sizing:border-box;position:relative;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;display:inline-block;white-space:nowrap;text-decoration:none;vertical-align:baseline;text-align:center;margin:0;min-width:64px;line-height:36px;padding:0 16px;border-radius:4px;overflow:visible;transform:translate3d(0, 0, 0);transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);min-width:0;border-radius:50%;width:40px;height:40px;padding:0;flex-shrink:0}.mat-mini-fab::-moz-focus-inner{border:0}.mat-mini-fab.mat-button-disabled{cursor:default}.mat-mini-fab.cdk-keyboard-focused .mat-button-focus-overlay,.mat-mini-fab.cdk-program-focused .mat-button-focus-overlay{opacity:.12}.mat-mini-fab::-moz-focus-inner{border:0}._mat-animation-noopable.mat-mini-fab{transition:none;animation:none}.mat-mini-fab .mat-button-wrapper{padding:8px 0;display:inline-block;line-height:24px}.mat-icon-button{padding:0;min-width:0;width:40px;height:40px;flex-shrink:0;line-height:40px;border-radius:50%}.mat-icon-button i,.mat-icon-button .mat-icon{line-height:24px}.mat-button-ripple.mat-ripple,.mat-button-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-button-ripple.mat-ripple:not(:empty){transform:translateZ(0)}.mat-button-focus-overlay{opacity:0;transition:opacity 200ms cubic-bezier(0.35, 0, 0.25, 1),background-color 200ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-button-focus-overlay{transition:none}.mat-button-ripple-round{border-radius:50%;z-index:1}.mat-button .mat-button-wrapper>*,.mat-flat-button .mat-button-wrapper>*,.mat-stroked-button .mat-button-wrapper>*,.mat-raised-button .mat-button-wrapper>*,.mat-icon-button .mat-button-wrapper>*,.mat-fab .mat-button-wrapper>*,.mat-mini-fab .mat-button-wrapper>*{vertical-align:middle}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button{display:inline-flex;justify-content:center;align-items:center;font-size:inherit;width:2.5em;height:2.5em}.cdk-high-contrast-active .mat-button,.cdk-high-contrast-active .mat-flat-button,.cdk-high-contrast-active .mat-raised-button,.cdk-high-contrast-active .mat-icon-button,.cdk-high-contrast-active .mat-fab,.cdk-high-contrast-active .mat-mini-fab{outline:solid 1px}.cdk-high-contrast-active .mat-button-base.cdk-keyboard-focused,.cdk-high-contrast-active .mat-button-base.cdk-program-focused{outline:solid 3px}\n"],encapsulation:2,changeDetection:0}),r})(),rt=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[b.si,b.BQ],b.BQ]}),r})();var st=d(3191),C=d(9646),it=d(2843),at=d(4128),ct=d(727),H=d(8505),g=d(4004),lt=d(262),dt=d(8746),ut=d(3099),pt=d(5698),ht=d(4351),mt=d(9300);class ft{}class v{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?this.lazyInit="string"==typeof e?()=>{this.headers=new Map,e.split("\n").forEach(t=>{const o=t.indexOf(":");if(o>0){const s=t.slice(0,o),i=s.toLowerCase(),a=t.slice(o+1).trim();this.maybeSetNormalizedName(s,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:()=>{this.headers=new Map,Object.keys(e).forEach(t=>{let o=e[t];const s=t.toLowerCase();"string"==typeof o&&(o=[o]),o.length>0&&(this.headers.set(s,o),this.maybeSetNormalizedName(t,s))})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof v?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){const t=new v;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof v?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let o=e.value;if("string"==typeof o&&(o=[o]),0===o.length)return;this.maybeSetNormalizedName(e.name,t);const s=("a"===e.op?this.headers.get(t):void 0)||[];s.push(...o),this.headers.set(t,s);break;case"d":const i=e.value;if(i){let a=this.headers.get(t);if(!a)return;a=a.filter(c=>-1===i.indexOf(c)),0===a.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}else this.headers.delete(t),this.normalizedNames.delete(t)}}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}}class bt{encodeKey(e){return O(e)}encodeValue(e){return O(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const vt=/%(\d[a-f0-9])/gi,yt={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function O(r){return encodeURIComponent(r).replace(vt,(e,t)=>{var o;return null!==(o=yt[t])&&void 0!==o?o:e})}function P(r){return`${r}`}class y{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new bt,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function gt(r,e){const t=new Map;return r.length>0&&r.replace(/^\?/,"").split("&").forEach(s=>{const i=s.indexOf("="),[a,c]=-1==i?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,i)),e.decodeValue(s.slice(i+1))],l=t.get(a)||[];l.push(c),t.set(a,l)}),t}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{const o=e.fromObject[t];this.map.set(t,Array.isArray(o)?o:[o])})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach(o=>{const s=e[o];Array.isArray(s)?s.forEach(i=>{t.push({param:o,value:i,op:"a"})}):t.push({param:o,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map(o=>t+"="+this.encoder.encodeValue(o)).join("&")}).filter(e=>""!==e).join("&")}clone(e){const t=new y({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(P(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let o=this.map.get(e.param)||[];const s=o.indexOf(P(e.value));-1!==s&&o.splice(s,1),o.length>0?this.map.set(e.param,o):this.map.delete(e.param)}}}),this.cloneFrom=this.updates=null)}}class xt{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function D(r){return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer}function B(r){return"undefined"!=typeof Blob&&r instanceof Blob}function z(r){return"undefined"!=typeof FormData&&r instanceof FormData}class w{constructor(e,t,o,s){let i;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function _t(r){switch(r){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||s?(this.body=void 0!==o?o:null,i=s):i=o,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new v),this.context||(this.context=new xt),this.params){const a=this.params.toString();if(0===a.length)this.urlWithParams=t;else{const c=t.indexOf("?");this.urlWithParams=t+(-1===c?"?":c<t.length-1?"&":"")+a}}else this.params=new y,this.urlWithParams=t}serializeBody(){return null===this.body?null:D(this.body)||B(this.body)||z(this.body)||function Ct(r){return"undefined"!=typeof URLSearchParams&&r instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof y?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||z(this.body)?null:B(this.body)?this.body.type||null:D(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof y?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){var t;const o=e.method||this.method,s=e.url||this.url,i=e.responseType||this.responseType,a=void 0!==e.body?e.body:this.body,c=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,l=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let p=e.headers||this.headers,f=e.params||this.params;const N=null!==(t=e.context)&&void 0!==t?t:this.context;return void 0!==e.setHeaders&&(p=Object.keys(e.setHeaders).reduce((_,h)=>_.set(h,e.setHeaders[h]),p)),e.setParams&&(f=Object.keys(e.setParams).reduce((_,h)=>_.set(h,e.setParams[h]),f)),new w(o,s,a,{params:f,headers:p,context:N,reportProgress:l,responseType:i,withCredentials:c})}}var u=(()=>((u=u||{})[u.Sent=0]="Sent",u[u.UploadProgress=1]="UploadProgress",u[u.ResponseHeader=2]="ResponseHeader",u[u.DownloadProgress=3]="DownloadProgress",u[u.Response=4]="Response",u[u.User=5]="User",u))();class M extends class wt{constructor(e,t=200,o="OK"){this.headers=e.headers||new v,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||o,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}{constructor(e={}){super(e),this.type=u.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new M({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}function A(r,e){return{body:e,headers:r.headers,context:r.context,observe:r.observe,params:r.params,reportProgress:r.reportProgress,responseType:r.responseType,withCredentials:r.withCredentials}}let L=(()=>{class r{constructor(t){this.handler=t}request(t,o,s={}){let i;if(t instanceof w)i=t;else{let l,p;l=s.headers instanceof v?s.headers:new v(s.headers),s.params&&(p=s.params instanceof y?s.params:new y({fromObject:s.params})),i=new w(t,o,void 0!==s.body?s.body:null,{headers:l,context:s.context,params:p,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const a=(0,C.of)(i).pipe((0,ht.b)(l=>this.handler.handle(l)));if(t instanceof w||"events"===s.observe)return a;const c=a.pipe((0,mt.h)(l=>l instanceof M));switch(s.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return c.pipe((0,g.U)(l=>{if(null!==l.body&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return c.pipe((0,g.U)(l=>{if(null!==l.body&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return c.pipe((0,g.U)(l=>{if(null!==l.body&&"string"!=typeof l.body)throw new Error("Response is not a string.");return l.body}));default:return c.pipe((0,g.U)(l=>l.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(t,o={}){return this.request("DELETE",t,o)}get(t,o={}){return this.request("GET",t,o)}head(t,o={}){return this.request("HEAD",t,o)}jsonp(t,o){return this.request("JSONP",t,{params:(new y).append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,o={}){return this.request("OPTIONS",t,o)}patch(t,o,s={}){return this.request("PATCH",t,A(s,o))}post(t,o,s={}){return this.request("POST",t,A(s,o))}put(t,o,s={}){return this.request("PUT",t,A(s,o))}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(ft))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac}),r})();var q=d(2313);const kt=["*"];let T;function E(r){var e;return(null===(e=function It(){if(void 0===T&&(T=null,"undefined"!=typeof window)){const r=window;void 0!==r.trustedTypes&&(T=r.trustedTypes.createPolicy("angular#components",{createHTML:e=>e}))}return T}())||void 0===e?void 0:e.createHTML(r))||r}function j(r){return Error(`Unable to find icon with the name "${r}"`)}function X(r){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`)}function J(r){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`)}class x{constructor(e,t,o){this.url=e,this.svgText=t,this.options=o}}let S=(()=>{class r{constructor(t,o,s,i){this._httpClient=t,this._sanitizer=o,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass="material-icons",this._document=s}addSvgIcon(t,o,s){return this.addSvgIconInNamespace("",t,o,s)}addSvgIconLiteral(t,o,s){return this.addSvgIconLiteralInNamespace("",t,o,s)}addSvgIconInNamespace(t,o,s,i){return this._addSvgIconConfig(t,o,new x(s,null,i))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,o,s,i){const a=this._sanitizer.sanitize(n.q3G.HTML,s);if(!a)throw J(s);const c=E(a);return this._addSvgIconConfig(t,o,new x("",c,i))}addSvgIconSet(t,o){return this.addSvgIconSetInNamespace("",t,o)}addSvgIconSetLiteral(t,o){return this.addSvgIconSetLiteralInNamespace("",t,o)}addSvgIconSetInNamespace(t,o,s){return this._addSvgIconSetConfig(t,new x(o,null,s))}addSvgIconSetLiteralInNamespace(t,o,s){const i=this._sanitizer.sanitize(n.q3G.HTML,o);if(!i)throw J(o);const a=E(i);return this._addSvgIconSetConfig(t,new x("",a,s))}registerFontClassAlias(t,o=t){return this._fontCssClassesByAlias.set(t,o),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const o=this._sanitizer.sanitize(n.q3G.RESOURCE_URL,t);if(!o)throw X(t);const s=this._cachedIconsByUrl.get(o);return s?(0,C.of)(R(s)):this._loadSvgIconFromConfig(new x(t,null)).pipe((0,H.b)(i=>this._cachedIconsByUrl.set(o,i)),(0,g.U)(i=>R(i)))}getNamedSvgIcon(t,o=""){const s=Z(o,t);let i=this._svgIconConfigs.get(s);if(i)return this._getSvgFromConfig(i);if(i=this._getIconConfigFromResolvers(o,t),i)return this._svgIconConfigs.set(s,i),this._getSvgFromConfig(i);const a=this._iconSetConfigs.get(o);return a?this._getSvgFromIconSetConfigs(t,a):(0,it._)(j(s))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,C.of)(R(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,g.U)(o=>R(o)))}_getSvgFromIconSetConfigs(t,o){const s=this._extractIconWithNameFromAnySet(t,o);if(s)return(0,C.of)(s);const i=o.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe((0,lt.K)(c=>{const p=`Loading icon set URL: ${this._sanitizer.sanitize(n.q3G.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(p)),(0,C.of)(null)})));return(0,at.D)(i).pipe((0,g.U)(()=>{const a=this._extractIconWithNameFromAnySet(t,o);if(!a)throw j(t);return a}))}_extractIconWithNameFromAnySet(t,o){for(let s=o.length-1;s>=0;s--){const i=o[s];if(i.svgText&&i.svgText.toString().indexOf(t)>-1){const a=this._svgElementFromConfig(i),c=this._extractSvgIconFromSet(a,t,i.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,H.b)(o=>t.svgText=o),(0,g.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,C.of)(null):this._fetchIcon(t).pipe((0,H.b)(o=>t.svgText=o))}_extractSvgIconFromSet(t,o,s){const i=t.querySelector(`[id="${o}"]`);if(!i)return null;const a=i.cloneNode(!0);if(a.removeAttribute("id"),"svg"===a.nodeName.toLowerCase())return this._setSvgAttributes(a,s);if("symbol"===a.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(a),s);const c=this._svgElementFromString(E("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,s)}_svgElementFromString(t){const o=this._document.createElement("DIV");o.innerHTML=t;const s=o.querySelector("svg");if(!s)throw Error("<svg> tag not found");return s}_toSvgElement(t){const o=this._svgElementFromString(E("<svg></svg>")),s=t.attributes;for(let i=0;i<s.length;i++){const{name:a,value:c}=s[i];"id"!==a&&o.setAttribute(a,c)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&o.appendChild(t.childNodes[i].cloneNode(!0));return o}_setSvgAttributes(t,o){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),o&&o.viewBox&&t.setAttribute("viewBox",o.viewBox),t}_fetchIcon(t){var o;const{url:s,options:i}=t,a=null!==(o=null==i?void 0:i.withCredentials)&&void 0!==o&&o;if(!this._httpClient)throw function Tt(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==s)throw Error(`Cannot fetch icon from URL "${s}".`);const c=this._sanitizer.sanitize(n.q3G.RESOURCE_URL,s);if(!c)throw X(s);const l=this._inProgressUrlFetches.get(c);if(l)return l;const p=this._httpClient.get(c,{responseType:"text",withCredentials:a}).pipe((0,g.U)(f=>E(f)),(0,dt.x)(()=>this._inProgressUrlFetches.delete(c)),(0,ut.B)());return this._inProgressUrlFetches.set(c,p),p}_addSvgIconConfig(t,o,s){return this._svgIconConfigs.set(Z(t,o),s),this}_addSvgIconSetConfig(t,o){const s=this._iconSetConfigs.get(t);return s?s.push(o):this._iconSetConfigs.set(t,[o]),this}_svgElementFromConfig(t){if(!t.svgElement){const o=this._svgElementFromString(t.svgText);this._setSvgAttributes(o,t.options),t.svgElement=o}return t.svgElement}_getIconConfigFromResolvers(t,o){for(let s=0;s<this._resolvers.length;s++){const i=this._resolvers[s](o,t);if(i)return Rt(i)?new x(i.url,null,i.options):new x(i,null)}}}return r.\u0275fac=function(t){return new(t||r)(n.LFG(L,8),n.LFG(q.H7),n.LFG(m.K0,8),n.LFG(n.qLn))},r.\u0275prov=n.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();function R(r){return r.cloneNode(!0)}function Z(r,e){return r+":"+e}function Rt(r){return!(!r.url||!r.options)}const Ht=(0,b.pj)(class{constructor(r){this._elementRef=r}}),Mt=new n.OlP("mat-icon-location",{providedIn:"root",factory:function At(){const r=(0,n.f3M)(m.K0),e=r?r.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}}),$=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Nt=$.map(r=>`[${r}]`).join(", "),Ft=/^url\(['"]?#(.*?)['"]?\)$/;let Ot=(()=>{class r extends Ht{constructor(t,o,s,i,a){super(t),this._iconRegistry=o,this._location=i,this._errorHandler=a,this._inline=!1,this._currentIconFetch=ct.w0.EMPTY,s||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=(0,st.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const o=this._cleanupFontValue(t);o!==this._fontSet&&(this._fontSet=o,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const o=this._cleanupFontValue(t);o!==this._fontIcon&&(this._fontIcon=o,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const o=t.split(":");switch(o.length){case 1:return["",o[0]];case 2:return o;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const o=this._location.getPathname();o!==this._previousPath&&(this._previousPath=o,this._prependPathToReferences(o))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const o=this._location.getPathname();this._previousPath=o,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(o),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let o=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();o--;){const s=t.childNodes[o];(1!==s.nodeType||"svg"===s.nodeName.toLowerCase())&&s.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,o=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();o!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),o&&t.classList.add(o),this._previousFontSetClass=o),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const o=this._elementsWithExternalReferences;o&&o.forEach((s,i)=>{s.forEach(a=>{i.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){const o=t.querySelectorAll(Nt),s=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<o.length;i++)$.forEach(a=>{const c=o[i],l=c.getAttribute(a),p=l?l.match(Ft):null;if(p){let f=s.get(c);f||(f=[],s.set(c,f)),f.push({name:a,value:p[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[o,s]=this._splitIconName(t);o&&(this._svgNamespace=o),s&&(this._svgName=s),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(s,o).pipe((0,pt.q)(1)).subscribe(i=>this._setSvgElement(i),i=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${o}:${s}! ${i.message}`))})}}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(n.SBq),n.Y36(S),n.$8M("aria-hidden"),n.Y36(Mt),n.Y36(n.qLn))},r.\u0275cmp=n.Xpm({type:r,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,o){2&t&&(n.uIk("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet),n.ekj("mat-icon-inline",o.inline)("mat-icon-no-color","primary"!==o.color&&"accent"!==o.color&&"warn"!==o.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[n.qOj],ngContentSelectors:kt,decls:1,vars:0,template:function(t,o){1&t&&(n.F$t(),n.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),r})(),Pt=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[b.BQ],b.BQ]}),r})();function Dt(r,e){1&r&&(n.TgZ(0,"div"),n._uU(1,"Mastercard Gold Santander"),n.qZA())}function Bt(r,e){1&r&&(n.TgZ(0,"div"),n._uU(1,"American Express Platinum Santander"),n.qZA())}function zt(r,e){1&r&&(n.TgZ(0,"div"),n._uU(1,"Visa Platinum BCI"),n.qZA())}function Ut(r,e){if(1&r&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&r){const t=n.oxw().$implicit;n.xp6(1),n.hij("Otro - ",t.otro,"")}}function Lt(r,e){1&r&&(n.TgZ(0,"span",12),n._uU(1,"Pagado"),n.qZA())}function qt(r,e){1&r&&(n.TgZ(0,"span",13),n._uU(1,"No Pagado"),n.qZA())}function jt(r,e){if(1&r){const t=n.EpF();n.TgZ(0,"button",14),n.NdJ("click",function(){n.CHM(t);const s=n.oxw().$implicit;return n.oxw().pagado(s)}),n._uU(1," Pagado "),n.qZA()}}function Xt(r,e){if(1&r){const t=n.EpF();n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.ALo(7,"date"),n.qZA(),n.TgZ(8,"td"),n._uU(9),n.ALo(10,"date"),n.qZA(),n.TgZ(11,"td"),n._uU(12),n.qZA(),n.TgZ(13,"td"),n._uU(14),n.qZA(),n.TgZ(15,"td"),n._uU(16),n.ALo(17,"currency"),n.qZA(),n.TgZ(18,"td")(19,"div",5),n.YNc(20,Dt,2,0,"div",6),n.YNc(21,Bt,2,0,"div",6),n.YNc(22,zt,2,0,"div",6),n.YNc(23,Ut,2,1,"div",6),n.qZA()(),n.TgZ(24,"td")(25,"div",5),n.YNc(26,Lt,2,0,"span",7),n.YNc(27,qt,2,0,"span",8),n.qZA()(),n.TgZ(28,"td")(29,"button",9),n.NdJ("click",function(){const i=n.CHM(t).$implicit;return n.oxw().delete(i)}),n._uU(30," Borrar "),n.qZA(),n.YNc(31,jt,2,0,"button",10),n.TgZ(32,"button",11),n.NdJ("click",function(){const i=n.CHM(t).$implicit;return n.oxw().editar(i)}),n._uU(33," Editar "),n.qZA()()()}if(2&r){const t=e.$implicit,o=e.index,s=n.oxw();n.xp6(2),n.Oqu(o+1),n.xp6(2),n.Oqu(t.nombre),n.xp6(2),n.Oqu(n.xi3(7,16,t.fecha,"dd-MM-yyyy")),n.xp6(3),n.Oqu(n.xi3(10,19,s.dateNow,"dd-MM-yyyy")),n.xp6(3),n.Oqu(t.cuotas),n.xp6(2),n.hij(" ",s.getRestantes(t)," "),n.xp6(2),n.Oqu(n.Dn7(17,22,t.monto,"CLP","symbol-narrow")),n.xp6(3),n.Q6J("ngSwitch",t.origen),n.xp6(1),n.Q6J("ngSwitchCase","1"),n.xp6(1),n.Q6J("ngSwitchCase","2"),n.xp6(1),n.Q6J("ngSwitchCase","3"),n.xp6(1),n.Q6J("ngSwitchCase","4"),n.xp6(2),n.Q6J("ngSwitch",s.getPagoActual(t)),n.xp6(1),n.Q6J("ngSwitchCase",!0),n.xp6(1),n.Q6J("ngSwitchCase",!1),n.xp6(4),n.Q6J("ngIf",s.getPagoActual(t))}}let Jt=(()=>{class r{constructor(t){this.router=t,this.debts=[],this.deleteEvent=new n.vpe,this.pagadoEvent=new n.vpe,this.dateNow=new Date}ngOnInit(){}delete(t){this.deleteEvent.emit(t)}pagado(t){this.pagadoEvent.emit(t)}getPagoActual(t){return!!t.pagos.find(o=>{let s=(0,m.p6)(this.dateNow,"yyyy-MM","en");return(0,m.p6)(o,"yyyy-MM","en")===s})}getTotal(){return this.debts.reduce((t,o)=>t+o.monto,0)}getRestantes(t){return t.cuotas-t.pagos.length}editar(t){this.router.navigateByUrl(`/edit-debt/${t.uid}`)}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(I.F0))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-tabla-registros"]],inputs:{debts:"debts"},outputs:{deleteEvent:"deleteEvent",pagadoEvent:"pagadoEvent"},decls:33,vars:6,consts:[[1,"pt-4"],[1,"table","table-hover","table-striped-columns","table-bordered"],[4,"ngFor","ngForOf"],["colspan","9",1,"text-end"],[1,"text-end"],[3,"ngSwitch"],[4,"ngSwitchCase"],["class","badge bg-success",4,"ngSwitchCase"],["class","badge bg-danger",4,"ngSwitchCase"],[1,"btn","btn-sm","btn-danger",3,"click"],["class","btn btn-sm btn-success",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-warning",3,"click"],[1,"badge","bg-success"],[1,"badge","bg-danger"],[1,"btn","btn-sm","btn-success",3,"click"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),n._uU(5,"#"),n.qZA(),n.TgZ(6,"th"),n._uU(7,"Nombre"),n.qZA(),n.TgZ(8,"th"),n._uU(9,"Fecha"),n.qZA(),n.TgZ(10,"th"),n._uU(11,"Fecha Actual"),n.qZA(),n.TgZ(12,"th"),n._uU(13,"Cuotas"),n.qZA(),n.TgZ(14,"th"),n._uU(15,"Cuotas Rest"),n.qZA(),n.TgZ(16,"th"),n._uU(17,"Monto"),n.qZA(),n.TgZ(18,"th"),n._uU(19,"Origen"),n.qZA(),n.TgZ(20,"th"),n._uU(21,"Estado Mes"),n.qZA(),n.TgZ(22,"th"),n._uU(23,"Acciones"),n.qZA()()(),n.TgZ(24,"tbody"),n.YNc(25,Xt,34,26,"tr",2),n.TgZ(26,"tr")(27,"td",3)(28,"b"),n._uU(29,"TOTAL"),n.qZA()(),n.TgZ(30,"td",4),n._uU(31),n.ALo(32,"currency"),n.qZA()()()()()),2&t&&(n.xp6(25),n.Q6J("ngForOf",o.debts),n.xp6(6),n.hij(" ",n.Dn7(32,2,o.getTotal(),"CLP","symbol-narrow")," "))},directives:[m.sg,m.RF,m.n9,m.O5],pipes:[m.uU,m.H9],styles:[""]}),r})();const Zt=[{path:"",component:(()=>{class r{constructor(t,o){this.router=t,this._debts=o}ngOnInit(){}getDebts(){this._debts.loadDebts()}delete(t){this._debts.delete(t)}pagado(t){this._debts.pagado(t)}}return r.\u0275fac=function(t){return new(t||r)(n.Y36(I.F0),n.Y36(K.E))},r.\u0275cmp=n.Xpm({type:r,selectors:[["app-home"]],decls:13,vars:1,consts:[[1,"container"],[1,"row"],[1,"col-md-6"],[1,"col-md-6","text-end"],["mat-fab","","color","primary","aria-label","Example icon button with a delete icon",3,"click"],["aria-hidden","false","aria-label","Example home icon"],[1,"col-md-12"],[3,"debts","deleteEvent","pagadoEvent"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),n._uU(4,"Listado de Deudas"),n.qZA()(),n.TgZ(5,"div",3)(6,"button",4),n.NdJ("click",function(){return o.router.navigateByUrl("/add-debt")}),n.TgZ(7,"mat-icon",5),n._uU(8,"add"),n.qZA()()()()(),n.TgZ(9,"div",0)(10,"div",1)(11,"div",6)(12,"app-tabla-registros",7),n.NdJ("deleteEvent",function(i){return o.delete(i)})("pagadoEvent",function(i){return o.pagado(i)}),n.qZA()()()()),2&t&&(n.xp6(12),n.Q6J("debts",o._debts.debts))},directives:[ot,Ot,Jt],styles:[""]}),r})()}];let $t=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[I.Bz.forChild(Zt)],I.Bz]}),r})();var Yt=d(9224),Kt=d(5642);let Wt=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.oAB({type:r}),r.\u0275inj=n.cJS({imports:[[m.ez,$t,Pt,rt,Yt.QW,Kt.K]]}),r})()}}]);