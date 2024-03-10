import{g as xe,r as pe,c as ge,u as W,a as H,N as he,L as ye,j as h,b as be,l as _e,d as je,s as we,e as Ee,O as Oe,Q as Te}from"./index-5f00c27c.js";import{s as q}from"./sprite-860dcfb5.js";import{L as Pe}from"./Logo-7b13fe98.js";import{L as Ce,a as Se,b as Re}from"./LogOutBtn-e09eb89e.js";import{T as Me}from"./TitlePage-f8a51597.js";var me={exports:{}};(function(w,Z){(function(J,z){w.exports=z(pe)})(ge,B=>(()=>{var J={"./node_modules/css-mediaquery/index.js":(j,t)=>{t.match=a,t.parse=o;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,y=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,m=/^(?:(min|max)-)?(.+)/,p=/(em|rem|px|cm|mm|in|pt|pc)?$/,r=/(dpi|dpcm|dppx)?$/;function a(v,s){return o(v).some(function(x){var k=x.inverse,b=x.type==="all"||s.type===x.type;if(b&&k||!(b||k))return!1;var $=x.expressions.every(function(l){var O=l.feature,R=l.modifier,T=l.value,g=s[O];if(!g)return!1;switch(O){case"orientation":case"scan":return g.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=c(T),g=c(g);break;case"resolution":T=i(T),g=i(g);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=f(T),g=f(g);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,g=parseInt(g,10)||0;break}switch(R){case"min":return g>=T;case"max":return g<=T;default:return g===T}});return $&&!k||!$&&k})}function o(v){return v.split(",").map(function(s){s=s.trim();var x=s.match(n),k=x[1],b=x[2],$=x[3]||"",l={};return l.inverse=!!k&&k.toLowerCase()==="not",l.type=b?b.toLowerCase():"all",$=$.match(/\([^\)]+\)/g)||[],l.expressions=$.map(function(O){var R=O.match(y),T=R[1].toLowerCase().match(m);return{modifier:T[1],feature:T[2],value:R[2]}}),l})}function f(v){var s=Number(v),x;return s||(x=v.match(/^(\d+)\s*\/\s*(\d+)$/),s=x[1]/x[2]),s}function i(v){var s=parseFloat(v),x=String(v).match(r)[1];switch(x){case"dpcm":return s/2.54;case"dppx":return s*96;default:return s}}function c(v){var s=parseFloat(v),x=String(v).match(p)[1];switch(x){case"em":return s*16;case"rem":return s*16;case"cm":return s*96/2.54;case"mm":return s*96/2.54/10;case"in":return s*96;case"pt":return s*72;case"pc":return s*72/12;default:return s}}},"./node_modules/hyphenate-style-name/index.js":(j,t,n)=>{n.r(t),n.d(t,{default:()=>o});var y=/[A-Z]/g,m=/^ms-/,p={};function r(f){return"-"+f.toLowerCase()}function a(f){if(p.hasOwnProperty(f))return p[f];var i=f.replace(y,r);return p[f]=m.test(i)?"-"+i:i}const o=a},"./node_modules/matchmediaquery/index.js":(j,t,n)=>{var y=n("./node_modules/css-mediaquery/index.js").match,m=typeof window<"u"?window.matchMedia:null;function p(a,o,f){var i=this;if(m&&!f){var c=m.call(window,a);this.matches=c.matches,this.media=c.media,c.addListener(x)}else this.matches=y(a,o),this.media=a;this.addListener=v,this.removeListener=s,this.dispose=k;function v(b){c&&c.addListener(b)}function s(b){c&&c.removeListener(b)}function x(b){i.matches=b.matches,i.media=b.media}function k(){c&&c.removeListener(x)}}function r(a,o,f){return new p(a,o,f)}j.exports=r},"./node_modules/object-assign/index.js":j=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function m(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function p(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var a={},o=0;o<10;o++)a["_"+String.fromCharCode(o)]=o;var f=Object.getOwnPropertyNames(a).map(function(c){return a[c]});if(f.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(c){i[c]=c}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}j.exports=p()?Object.assign:function(r,a){for(var o,f=m(r),i,c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var v in o)n.call(o,v)&&(f[v]=o[v]);if(t){i=t(o);for(var s=0;s<i.length;s++)y.call(o,i[s])&&(f[i[s]]=o[i[s]])}}return f}},"./node_modules/prop-types/checkPropTypes.js":(j,t,n)=>{var y=function(){};{var m=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),p={},r=n("./node_modules/prop-types/lib/has.js");y=function(o){var f="Warning: "+o;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}}}function a(o,f,i,c,v){for(var s in o)if(r(o,s)){var x;try{if(typeof o[s]!="function"){var k=Error((c||"React class")+": "+i+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw k.name="Invariant Violation",k}x=o[s](f,s,c,i,null,m)}catch($){x=$}if(x&&!(x instanceof Error)&&y((c||"React class")+": type specification of "+i+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof x+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),x instanceof Error&&!(x.message in p)){p[x.message]=!0;var b=v?v():"";y("Failed "+i+" type: "+x.message+(b??""))}}}a.resetWarningCache=function(){p={}},j.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":(j,t,n)=>{var y=n("./node_modules/react-is/index.js"),m=n("./node_modules/object-assign/index.js"),p=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),r=n("./node_modules/prop-types/lib/has.js"),a=n("./node_modules/prop-types/checkPropTypes.js"),o=function(){};o=function(i){var c="Warning: "+i;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}};function f(){return null}j.exports=function(i,c){var v=typeof Symbol=="function"&&Symbol.iterator,s="@@iterator";function x(e){var d=e&&(v&&e[v]||e[s]);if(typeof d=="function")return d}var k="<<anonymous>>",b={array:R("array"),bigint:R("bigint"),bool:R("boolean"),func:R("function"),number:R("number"),object:R("object"),string:R("string"),symbol:R("symbol"),any:T(),arrayOf:g,element:Q(),elementType:Y(),instanceOf:X,node:ie(),objectOf:ae,oneOf:ne,oneOfType:oe,shape:se,exact:ue};function $(e,d){return e===d?e!==0||1/e===1/d:e!==e&&d!==d}function l(e,d){this.message=e,this.data=d&&typeof d=="object"?d:{},this.stack=""}l.prototype=Error.prototype;function O(e){var d={},S=0;function P(M,E,C,A,L,I,u){if(A=A||k,I=I||C,u!==p){if(c){var D=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw D.name="Invariant Violation",D}else if(typeof console<"u"){var U=A+":"+C;!d[U]&&S<3&&(o("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+A+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),d[U]=!0,S++)}}return E[C]==null?M?E[C]===null?new l("The "+L+" `"+I+"` is marked as required "+("in `"+A+"`, but its value is `null`.")):new l("The "+L+" `"+I+"` is marked as required in "+("`"+A+"`, but its value is `undefined`.")):null:e(E,C,A,L,I)}var _=P.bind(null,!1);return _.isRequired=P.bind(null,!0),_}function R(e){function d(S,P,_,M,E,C){var A=S[P],L=F(A);if(L!==e){var I=G(A);return new l("Invalid "+M+" `"+E+"` of type "+("`"+I+"` supplied to `"+_+"`, expected ")+("`"+e+"`."),{expectedType:e})}return null}return O(d)}function T(){return O(f)}function g(e){function d(S,P,_,M,E){if(typeof e!="function")return new l("Property `"+E+"` of component `"+_+"` has invalid PropType notation inside arrayOf.");var C=S[P];if(!Array.isArray(C)){var A=F(C);return new l("Invalid "+M+" `"+E+"` of type "+("`"+A+"` supplied to `"+_+"`, expected an array."))}for(var L=0;L<C.length;L++){var I=e(C,L,_,M,E+"["+L+"]",p);if(I instanceof Error)return I}return null}return O(d)}function Q(){function e(d,S,P,_,M){var E=d[S];if(!i(E)){var C=F(E);return new l("Invalid "+_+" `"+M+"` of type "+("`"+C+"` supplied to `"+P+"`, expected a single ReactElement."))}return null}return O(e)}function Y(){function e(d,S,P,_,M){var E=d[S];if(!y.isValidElementType(E)){var C=F(E);return new l("Invalid "+_+" `"+M+"` of type "+("`"+C+"` supplied to `"+P+"`, expected a single ReactElement type."))}return null}return O(e)}function X(e){function d(S,P,_,M,E){if(!(S[P]instanceof e)){var C=e.name||k,A=te(S[P]);return new l("Invalid "+M+" `"+E+"` of type "+("`"+A+"` supplied to `"+_+"`, expected ")+("instance of `"+C+"`."))}return null}return O(d)}function ne(e){if(!Array.isArray(e))return arguments.length>1?o("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):o("Invalid argument supplied to oneOf, expected an array."),f;function d(S,P,_,M,E){for(var C=S[P],A=0;A<e.length;A++)if($(C,e[A]))return null;var L=JSON.stringify(e,function(u,D){var U=G(D);return U==="symbol"?String(D):D});return new l("Invalid "+M+" `"+E+"` of value `"+String(C)+"` "+("supplied to `"+_+"`, expected one of "+L+"."))}return O(d)}function ae(e){function d(S,P,_,M,E){if(typeof e!="function")return new l("Property `"+E+"` of component `"+_+"` has invalid PropType notation inside objectOf.");var C=S[P],A=F(C);if(A!=="object")return new l("Invalid "+M+" `"+E+"` of type "+("`"+A+"` supplied to `"+_+"`, expected an object."));for(var L in C)if(r(C,L)){var I=e(C,L,_,M,E+"."+L,p);if(I instanceof Error)return I}return null}return O(d)}function oe(e){if(!Array.isArray(e))return o("Invalid argument supplied to oneOfType, expected an instance of array."),f;for(var d=0;d<e.length;d++){var S=e[d];if(typeof S!="function")return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+de(S)+" at index "+d+"."),f}function P(_,M,E,C,A){for(var L=[],I=0;I<e.length;I++){var u=e[I],D=u(_,M,E,C,A,p);if(D==null)return null;D.data&&r(D.data,"expectedType")&&L.push(D.data.expectedType)}var U=L.length>0?", expected one of type ["+L.join(", ")+"]":"";return new l("Invalid "+C+" `"+A+"` supplied to "+("`"+E+"`"+U+"."))}return O(P)}function ie(){function e(d,S,P,_,M){return V(d[S])?null:new l("Invalid "+_+" `"+M+"` supplied to "+("`"+P+"`, expected a ReactNode."))}return O(e)}function ee(e,d,S,P,_){return new l((e||"React class")+": "+d+" type `"+S+"."+P+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+_+"`.")}function se(e){function d(S,P,_,M,E){var C=S[P],A=F(C);if(A!=="object")return new l("Invalid "+M+" `"+E+"` of type `"+A+"` "+("supplied to `"+_+"`, expected `object`."));for(var L in e){var I=e[L];if(typeof I!="function")return ee(_,M,E,L,G(I));var u=I(C,L,_,M,E+"."+L,p);if(u)return u}return null}return O(d)}function ue(e){function d(S,P,_,M,E){var C=S[P],A=F(C);if(A!=="object")return new l("Invalid "+M+" `"+E+"` of type `"+A+"` "+("supplied to `"+_+"`, expected `object`."));var L=m({},S[P],e);for(var I in L){var u=e[I];if(r(e,I)&&typeof u!="function")return ee(_,M,E,I,G(u));if(!u)return new l("Invalid "+M+" `"+E+"` key `"+I+"` supplied to `"+_+"`.\nBad object: "+JSON.stringify(S[P],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(e),null,"  "));var D=u(C,I,_,M,E+"."+I,p);if(D)return D}return null}return O(d)}function V(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(V);if(e===null||i(e))return!0;var d=x(e);if(d){var S=d.call(e),P;if(d!==e.entries){for(;!(P=S.next()).done;)if(!V(P.value))return!1}else for(;!(P=S.next()).done;){var _=P.value;if(_&&!V(_[1]))return!1}}else return!1;return!0;default:return!1}}function ce(e,d){return e==="symbol"?!0:d?d["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&d instanceof Symbol:!1}function F(e){var d=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":ce(d,e)?"symbol":d}function G(e){if(typeof e>"u"||e===null)return""+e;var d=F(e);if(d==="object"){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return d}function de(e){var d=G(e);switch(d){case"array":case"object":return"an "+d;case"boolean":case"date":case"regexp":return"a "+d;default:return d}}function te(e){return!e.constructor||!e.constructor.name?k:e.constructor.name}return b.checkPropTypes=a,b.resetWarningCache=a.resetWarningCache,b.PropTypes=b,b}},"./node_modules/prop-types/index.js":(j,t,n)=>{{var y=n("./node_modules/react-is/index.js"),m=!0;j.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(y.isElement,m)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":j=>{var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";j.exports=t},"./node_modules/prop-types/lib/has.js":j=>{j.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(j,t)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n=typeof Symbol=="function"&&Symbol.for,y=n?Symbol.for("react.element"):60103,m=n?Symbol.for("react.portal"):60106,p=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,i=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,v=n?Symbol.for("react.forward_ref"):60112,s=n?Symbol.for("react.suspense"):60113,x=n?Symbol.for("react.suspense_list"):60120,k=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,$=n?Symbol.for("react.block"):60121,l=n?Symbol.for("react.fundamental"):60117,O=n?Symbol.for("react.responder"):60118,R=n?Symbol.for("react.scope"):60119;function T(u){return typeof u=="string"||typeof u=="function"||u===p||u===c||u===a||u===r||u===s||u===x||typeof u=="object"&&u!==null&&(u.$$typeof===b||u.$$typeof===k||u.$$typeof===o||u.$$typeof===f||u.$$typeof===v||u.$$typeof===l||u.$$typeof===O||u.$$typeof===R||u.$$typeof===$)}function g(u){if(typeof u=="object"&&u!==null){var D=u.$$typeof;switch(D){case y:var U=u.type;switch(U){case i:case c:case p:case a:case r:case s:return U;default:var ve=U&&U.$$typeof;switch(ve){case f:case v:case b:case k:case o:return ve;default:return D}}case m:return D}}}var Q=i,Y=c,X=f,ne=o,ae=y,oe=v,ie=p,ee=b,se=k,ue=m,V=a,ce=r,F=s,G=!1;function de(u){return G||(G=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),te(u)||g(u)===i}function te(u){return g(u)===c}function e(u){return g(u)===f}function d(u){return g(u)===o}function S(u){return typeof u=="object"&&u!==null&&u.$$typeof===y}function P(u){return g(u)===v}function _(u){return g(u)===p}function M(u){return g(u)===b}function E(u){return g(u)===k}function C(u){return g(u)===m}function A(u){return g(u)===a}function L(u){return g(u)===r}function I(u){return g(u)===s}t.AsyncMode=Q,t.ConcurrentMode=Y,t.ContextConsumer=X,t.ContextProvider=ne,t.Element=ae,t.ForwardRef=oe,t.Fragment=ie,t.Lazy=ee,t.Memo=se,t.Portal=ue,t.Profiler=V,t.StrictMode=ce,t.Suspense=F,t.isAsyncMode=de,t.isConcurrentMode=te,t.isContextConsumer=e,t.isContextProvider=d,t.isElement=S,t.isForwardRef=P,t.isFragment=_,t.isLazy=M,t.isMemo=E,t.isPortal=C,t.isProfiler=A,t.isStrictMode=L,t.isSuspense=I,t.isValidElementType=T,t.typeOf=g})()},"./node_modules/react-is/index.js":(j,t,n)=>{j.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(j,t,n)=>{n.r(t),n.d(t,{shallowEqualArrays:()=>m,shallowEqualObjects:()=>y});function y(p,r){if(p===r)return!0;if(!p||!r)return!1;var a=Object.keys(p),o=Object.keys(r),f=a.length;if(o.length!==f)return!1;for(var i=0;i<f;i++){var c=a[i];if(p[c]!==r[c]||!Object.prototype.hasOwnProperty.call(r,c))return!1}return!0}function m(p,r){if(p===r)return!0;if(!p||!r)return!1;var a=p.length;if(r.length!==a)return!1;for(var o=0;o<a;o++)if(p[o]!==r[o])return!1;return!0}},"./src/Component.ts":function(j,t,n){var y=this&&this.__rest||function(a,o){var f={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&o.indexOf(i)<0&&(f[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(a);c<i.length;c++)o.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(a,i[c])&&(f[i[c]]=a[i[c]]);return f},m=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0});var p=m(n("./src/useMediaQuery.ts")),r=function(a){var o=a.children,f=a.device,i=a.onChange,c=y(a,["children","device","onChange"]),v=(0,p.default)(c,f,i);return typeof o=="function"?o(v):v?o:null};t.default=r},"./src/Context.ts":(j,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var y=n("react"),m=(0,y.createContext)(void 0);t.default=m},"./src/index.ts":function(j,t,n){var y=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var m=y(n("./src/useMediaQuery.ts"));t.useMediaQuery=m.default;var p=y(n("./src/Component.ts"));t.default=p.default;var r=y(n("./src/toQuery.ts"));t.toQuery=r.default;var a=y(n("./src/Context.ts"));t.Context=a.default},"./src/mediaQuery.ts":function(j,t,n){var y=this&&this.__assign||function(){return y=Object.assign||function(s){for(var x,k=1,b=arguments.length;k<b;k++){x=arguments[k];for(var $ in x)Object.prototype.hasOwnProperty.call(x,$)&&(s[$]=x[$])}return s},y.apply(this,arguments)},m=this&&this.__rest||function(s,x){var k={};for(var b in s)Object.prototype.hasOwnProperty.call(s,b)&&x.indexOf(b)<0&&(k[b]=s[b]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,b=Object.getOwnPropertySymbols(s);$<b.length;$++)x.indexOf(b[$])<0&&Object.prototype.propertyIsEnumerable.call(s,b[$])&&(k[b[$]]=s[b[$]]);return k},p=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0});var r=p(n("./node_modules/prop-types/index.js")),a=r.default.oneOfType([r.default.string,r.default.number]),o={all:r.default.bool,grid:r.default.bool,aural:r.default.bool,braille:r.default.bool,handheld:r.default.bool,print:r.default.bool,projection:r.default.bool,screen:r.default.bool,tty:r.default.bool,tv:r.default.bool,embossed:r.default.bool},f={orientation:r.default.oneOf(["portrait","landscape"]),scan:r.default.oneOf(["progressive","interlace"]),aspectRatio:r.default.string,deviceAspectRatio:r.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:r.default.bool,colorIndex:r.default.bool,monochrome:r.default.bool,resolution:a,type:Object.keys(o)};f.type;var i=m(f,["type"]),c=y({minAspectRatio:r.default.string,maxAspectRatio:r.default.string,minDeviceAspectRatio:r.default.string,maxDeviceAspectRatio:r.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:r.default.number,maxColor:r.default.number,minColorIndex:r.default.number,maxColorIndex:r.default.number,minMonochrome:r.default.number,maxMonochrome:r.default.number,minResolution:a,maxResolution:a},i),v=y(y({},o),c);t.default={all:v,types:o,matchers:f,features:c}},"./src/toQuery.ts":function(j,t,n){var y=this&&this.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(t,"__esModule",{value:!0});var m=y(n("./node_modules/hyphenate-style-name/index.js")),p=y(n("./src/mediaQuery.ts")),r=function(i){return"not ".concat(i)},a=function(i,c){var v=(0,m.default)(i);return typeof c=="number"&&(c="".concat(c,"px")),c===!0?v:c===!1?r(v):"(".concat(v,": ").concat(c,")")},o=function(i){return i.join(" and ")},f=function(i){var c=[];return Object.keys(p.default.all).forEach(function(v){var s=i[v];s!=null&&c.push(a(v,s))}),o(c)};t.default=f},"./src/useMediaQuery.ts":function(j,t,n){var y=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(t,"__esModule",{value:!0});var m=n("react"),p=y(n("./node_modules/matchmediaquery/index.js")),r=y(n("./node_modules/hyphenate-style-name/index.js")),a=n("./node_modules/shallow-equal/dist/index.esm.js"),o=y(n("./src/toQuery.ts")),f=y(n("./src/Context.ts")),i=function(l){return l.query||(0,o.default)(l)},c=function(l){if(l){var O=Object.keys(l);return O.reduce(function(R,T){return R[(0,r.default)(T)]=l[T],R},{})}},v=function(){var l=(0,m.useRef)(!1);return(0,m.useEffect)(function(){l.current=!0},[]),l.current},s=function(l){var O=(0,m.useContext)(f.default),R=function(){return c(l)||c(O)},T=(0,m.useState)(R),g=T[0],Q=T[1];return(0,m.useEffect)(function(){var Y=R();(0,a.shallowEqualObjects)(g,Y)||Q(Y)},[l,O]),g},x=function(l){var O=function(){return i(l)},R=(0,m.useState)(O),T=R[0],g=R[1];return(0,m.useEffect)(function(){var Q=O();T!==Q&&g(Q)},[l]),T},k=function(l,O){var R=function(){return(0,p.default)(l,O||{},!!O)},T=(0,m.useState)(R),g=T[0],Q=T[1],Y=v();return(0,m.useEffect)(function(){if(Y){var X=R();return Q(X),function(){X&&X.dispose()}}},[l,O]),g},b=function(l){var O=(0,m.useState)(l.matches),R=O[0],T=O[1];return(0,m.useEffect)(function(){var g=function(Q){T(Q.matches)};return l.addListener(g),T(l.matches),function(){l.removeListener(g)}},[l]),R},$=function(l,O,R){var T=s(O),g=x(l);if(!g)throw new Error("Invalid or missing MediaQuery!");var Q=k(g,T),Y=b(Q),X=v();return(0,m.useEffect)(function(){X&&R&&R(Y)},[Y]),(0,m.useEffect)(function(){return function(){Q&&Q.dispose()}},[]),Y};t.default=$},react:j=>{j.exports=B}},z={};function K(j){var t=z[j];if(t!==void 0)return t.exports;var n=z[j]={exports:{}};return J[j].call(n.exports,n,n.exports,K),n.exports}K.d=(j,t)=>{for(var n in t)K.o(t,n)&&!K.o(j,n)&&Object.defineProperty(j,n,{enumerable:!0,get:t[n]})},K.o=(j,t)=>Object.prototype.hasOwnProperty.call(j,t),K.r=j=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(j,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(j,"__esModule",{value:!0})};var N=K("./src/index.ts");return N})())})(me);var Ae=me.exports;const re=xe(Ae),Ie=W.div`
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  @media (max-width: 374px) {
    padding: 12px 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    padding: 19px 26px;
  }

  @media (min-width: 1440px) {
    padding: 20px 96px;
  }
`,ke=W.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`,Le=W.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,$e=W.div`
  display: flex;
  gap: 16px;
`,le=W(he)`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 27px;
  color: rgba(239, 237, 232, 1);
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${H.colorOrange};
  }
  &.active {
    background-color: ${H.colorOrange};
  }
`,De=W(ye)`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(239, 237, 232, 1);
  background-color: transparent;
  border-radius: 12px;
`,We=W.svg`
  width: ${w=>w.size||"28px"};
  height: ${w=>w.size||"28px"};
  fill: ${w=>w.color||"none"};
  stroke: ${w=>w.color||"rgba(239, 237, 232, 0.3)"};
  stroke-width: 1.5px;
  display: block;

  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${H.colorOrange};
  }
`,Qe=W.svg`
  width: ${w=>w.size||"24px"};
  height: ${w=>w.size||"24px"};
  fill: ${w=>w.color||"none"};
  stroke: ${w=>w.color||"rgba(239, 237, 232, 0.3)"};
  display: block;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${H.colorOrange};
  }
  @media screen and (min-width: 768px) {
    width: ${w=>w.size||"28px"};
    height: ${w=>w.size||"28px"};
  }
`,Ye=W.div`
  border: 1px solid ${H.colorOrange};
  border-radius: 50%;
  width: 37px;
  height: 37px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,ze=W.svg`
  width: ${w=>w.size||"28px"};
  height: ${w=>w.size||"28px"};
  fill: ${w=>w.color||"rgba(239, 237, 232, 0.1)"};
  display: block;
  transition: fill 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;
`,Ue=()=>h.jsxs(h.Fragment,{children:[h.jsx(Qe,{children:h.jsx("use",{href:`${q}#icon-settings-01`})}),h.jsx(Ye,{children:h.jsx(ze,{children:h.jsx("use",{href:`${q}#icon-gridicons_user`})})})]}),He=W.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${H.colorBlack};
  z-index: 1000;
`,Fe=W.div`
  z-index: 1001;
  position: relative;
  right: 0;
  margin-left: auto;
  height: 100vh;
  background-color: ${H.colorOrange};
  padding: 26px 32px 32px 32px;

  @media (max-width: 374px) {
    max-width: 200px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 200px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 350px;
  }
`,Be=W.svg`
  stroke-width: 2px;
  width: 32px;
  height: 32px;
  fill: ${H.colorWhite};
`,Ke=W.div`
  position: absolute;
  width: 32px;
  height: 32px;
  stroke: white;
  top: 26px;
  right: 32px;
`,Xe=W.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translateY(100%);
`,fe=W(he)`
  color: ${H.colorWhite};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  font-size: 16px;

  &.active {
    border-color: ${H.colorWhite};
  }
`,Ge=W(Ce)`
  position: absolute;
  bottom: 32px;
  left: 32px;
`,Je=W.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${H.colorWhite};
`,Ze=({onClick:w})=>{const Z=be(),B=()=>{Z(_e()),w()},J=N=>{N.code==="Escape"&&w()},z=()=>{w()},K=N=>{N.currentTarget===N.target&&w()};return pe.useEffect(()=>(window.addEventListener("keydown",J),()=>{window.removeEventListener("keydown",J)})),h.jsx(He,{onClick:K,children:h.jsxs(Fe,{children:[h.jsx(Ke,{onClick:z,children:h.jsx(Be,{children:h.jsx("use",{href:`${q}#icon-x`})})}),h.jsxs(Xe,{children:[h.jsx(fe,{to:"/diary",onClick:z,children:"Diary"}),h.jsx(fe,{to:"/products",onClick:z,children:"Products"}),h.jsx(fe,{to:"/exercises",onClick:z,children:"Exercises"})]}),h.jsxs(Ge,{to:"/welcome",onClick:B,children:[h.jsx(Je,{children:"Logout"}),h.jsx(Se,{children:h.jsx("use",{href:`${q}#icon-log-out-02`})})]})]})})},Ne=()=>{const[w,Z]=pe.useState(!1),B=()=>{Z(z=>!z)},J=je(we);return h.jsxs(Ie,{children:[h.jsxs(ke,{children:[h.jsx(ye,{to:"/",children:h.jsx(Pe,{})}),J&&h.jsxs(Le,{children:[h.jsx(re,{minWidth:1440,children:h.jsxs($e,{children:[h.jsx(le,{to:"/diary",children:"Diary"}),h.jsx(le,{to:"/products",children:"Products"}),h.jsx(le,{to:"/exercises",children:"Exercises"})]})}),h.jsx(De,{to:"/profile",children:h.jsx(Ue,{})}),h.jsx(re,{minWidth:1440,children:h.jsx(Re,{})}),h.jsx(re,{maxWidth:1439,children:h.jsx(We,{onClick:B,children:h.jsx("use",{href:`${q}#icon-menu`})})})]})]}),h.jsx(re,{maxWidth:1439,children:w&&h.jsx(Ze,{onClick:B})})]})},nt=()=>{const w=Ee(),Z=["/diary","/profile","/exercises","/products"].includes(w.pathname)||w.pathname.startsWith("/diary"),B=w.pathname==="/"&&h.jsx(Me,{contentText:"Diary"});return h.jsxs(h.Fragment,{children:[(Z||B)&&h.jsx(Ne,{}),h.jsx(Oe,{}),h.jsx(Te,{})]})};export{nt as default};
