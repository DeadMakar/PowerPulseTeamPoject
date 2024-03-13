import{g as ge,r as ve,c as be,u as D,a as B,N as he,b as ne,j as p,s as q,d as _e,l as we,e as me,f as je,L as Ee,h as Oe,O as Te,Q as Ce}from"./index-4b31ef27.js";import{L as Pe}from"./Logo-5e4c310b.js";import{L as Se,a as Re,b as Me}from"./LogOutBtn-30feb754.js";var xe={exports:{}};(function(g,G){(function(N,Y){g.exports=Y(ve)})(be,K=>(()=>{var N={"./node_modules/css-mediaquery/index.js":(j,t)=>{t.match=a,t.parse=o;var n=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,y=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,m=/^(?:(min|max)-)?(.+)/,v=/(em|rem|px|cm|mm|in|pt|pc)?$/,r=/(dpi|dpcm|dppx)?$/;function a(h,s){return o(h).some(function(x){var L=x.inverse,_=x.type==="all"||s.type===x.type;if(_&&L||!(_||L))return!1;var $=x.expressions.every(function(l){var O=l.feature,R=l.modifier,T=l.value,b=s[O];if(!b)return!1;switch(O){case"orientation":case"scan":return b.toLowerCase()===T.toLowerCase();case"width":case"height":case"device-width":case"device-height":T=c(T),b=c(b);break;case"resolution":T=i(T),b=i(b);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":T=f(T),b=f(b);break;case"grid":case"color":case"color-index":case"monochrome":T=parseInt(T,10)||1,b=parseInt(b,10)||0;break}switch(R){case"min":return b>=T;case"max":return b<=T;default:return b===T}});return $&&!L||!$&&L})}function o(h){return h.split(",").map(function(s){s=s.trim();var x=s.match(n),L=x[1],_=x[2],$=x[3]||"",l={};return l.inverse=!!L&&L.toLowerCase()==="not",l.type=_?_.toLowerCase():"all",$=$.match(/\([^\)]+\)/g)||[],l.expressions=$.map(function(O){var R=O.match(y),T=R[1].toLowerCase().match(m);return{modifier:T[1],feature:T[2],value:R[2]}}),l})}function f(h){var s=Number(h),x;return s||(x=h.match(/^(\d+)\s*\/\s*(\d+)$/),s=x[1]/x[2]),s}function i(h){var s=parseFloat(h),x=String(h).match(r)[1];switch(x){case"dpcm":return s/2.54;case"dppx":return s*96;default:return s}}function c(h){var s=parseFloat(h),x=String(h).match(v)[1];switch(x){case"em":return s*16;case"rem":return s*16;case"cm":return s*96/2.54;case"mm":return s*96/2.54/10;case"in":return s*96;case"pt":return s*72;case"pc":return s*72/12;default:return s}}},"./node_modules/hyphenate-style-name/index.js":(j,t,n)=>{n.r(t),n.d(t,{default:()=>o});var y=/[A-Z]/g,m=/^ms-/,v={};function r(f){return"-"+f.toLowerCase()}function a(f){if(v.hasOwnProperty(f))return v[f];var i=f.replace(y,r);return v[f]=m.test(i)?"-"+i:i}const o=a},"./node_modules/matchmediaquery/index.js":(j,t,n)=>{var y=n("./node_modules/css-mediaquery/index.js").match,m=typeof window<"u"?window.matchMedia:null;function v(a,o,f){var i=this;if(m&&!f){var c=m.call(window,a);this.matches=c.matches,this.media=c.media,c.addListener(x)}else this.matches=y(a,o),this.media=a;this.addListener=h,this.removeListener=s,this.dispose=L;function h(_){c&&c.addListener(_)}function s(_){c&&c.removeListener(_)}function x(_){i.matches=_.matches,i.media=_.media}function L(){c&&c.removeListener(x)}}function r(a,o,f){return new v(a,o,f)}j.exports=r},"./node_modules/object-assign/index.js":j=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;function m(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function v(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var a={},o=0;o<10;o++)a["_"+String.fromCharCode(o)]=o;var f=Object.getOwnPropertyNames(a).map(function(c){return a[c]});if(f.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(c){i[c]=c}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}j.exports=v()?Object.assign:function(r,a){for(var o,f=m(r),i,c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var h in o)n.call(o,h)&&(f[h]=o[h]);if(t){i=t(o);for(var s=0;s<i.length;s++)y.call(o,i[s])&&(f[i[s]]=o[i[s]])}}return f}},"./node_modules/prop-types/checkPropTypes.js":(j,t,n)=>{var y=function(){};{var m=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v={},r=n("./node_modules/prop-types/lib/has.js");y=function(o){var f="Warning: "+o;typeof console<"u"&&console.error(f);try{throw new Error(f)}catch{}}}function a(o,f,i,c,h){for(var s in o)if(r(o,s)){var x;try{if(typeof o[s]!="function"){var L=Error((c||"React class")+": "+i+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof o[s]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw L.name="Invariant Violation",L}x=o[s](f,s,c,i,null,m)}catch($){x=$}if(x&&!(x instanceof Error)&&y((c||"React class")+": type specification of "+i+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof x+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),x instanceof Error&&!(x.message in v)){v[x.message]=!0;var _=h?h():"";y("Failed "+i+" type: "+x.message+(_??""))}}}a.resetWarningCache=function(){v={}},j.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":(j,t,n)=>{var y=n("./node_modules/react-is/index.js"),m=n("./node_modules/object-assign/index.js"),v=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),r=n("./node_modules/prop-types/lib/has.js"),a=n("./node_modules/prop-types/checkPropTypes.js"),o=function(){};o=function(i){var c="Warning: "+i;typeof console<"u"&&console.error(c);try{throw new Error(c)}catch{}};function f(){return null}j.exports=function(i,c){var h=typeof Symbol=="function"&&Symbol.iterator,s="@@iterator";function x(e){var d=e&&(h&&e[h]||e[s]);if(typeof d=="function")return d}var L="<<anonymous>>",_={array:R("array"),bigint:R("bigint"),bool:R("boolean"),func:R("function"),number:R("number"),object:R("object"),string:R("string"),symbol:R("symbol"),any:T(),arrayOf:b,element:W(),elementType:U(),instanceOf:X,node:se(),objectOf:oe,oneOf:ae,oneOfType:ie,shape:ue,exact:ce};function $(e,d){return e===d?e!==0||1/e===1/d:e!==e&&d!==d}function l(e,d){this.message=e,this.data=d&&typeof d=="object"?d:{},this.stack=""}l.prototype=Error.prototype;function O(e){var d={},S=0;function C(M,E,P,A,k,I,u){if(A=A||L,I=I||P,u!==v){if(c){var Q=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Q.name="Invariant Violation",Q}else if(typeof console<"u"){var H=A+":"+P;!d[H]&&S<3&&(o("You are manually calling a React.PropTypes validation function for the `"+I+"` prop on `"+A+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),d[H]=!0,S++)}}return E[P]==null?M?E[P]===null?new l("The "+k+" `"+I+"` is marked as required "+("in `"+A+"`, but its value is `null`.")):new l("The "+k+" `"+I+"` is marked as required in "+("`"+A+"`, but its value is `undefined`.")):null:e(E,P,A,k,I)}var w=C.bind(null,!1);return w.isRequired=C.bind(null,!0),w}function R(e){function d(S,C,w,M,E,P){var A=S[C],k=F(A);if(k!==e){var I=Z(A);return new l("Invalid "+M+" `"+E+"` of type "+("`"+I+"` supplied to `"+w+"`, expected ")+("`"+e+"`."),{expectedType:e})}return null}return O(d)}function T(){return O(f)}function b(e){function d(S,C,w,M,E){if(typeof e!="function")return new l("Property `"+E+"` of component `"+w+"` has invalid PropType notation inside arrayOf.");var P=S[C];if(!Array.isArray(P)){var A=F(P);return new l("Invalid "+M+" `"+E+"` of type "+("`"+A+"` supplied to `"+w+"`, expected an array."))}for(var k=0;k<P.length;k++){var I=e(P,k,w,M,E+"["+k+"]",v);if(I instanceof Error)return I}return null}return O(d)}function W(){function e(d,S,C,w,M){var E=d[S];if(!i(E)){var P=F(E);return new l("Invalid "+w+" `"+M+"` of type "+("`"+P+"` supplied to `"+C+"`, expected a single ReactElement."))}return null}return O(e)}function U(){function e(d,S,C,w,M){var E=d[S];if(!y.isValidElementType(E)){var P=F(E);return new l("Invalid "+w+" `"+M+"` of type "+("`"+P+"` supplied to `"+C+"`, expected a single ReactElement type."))}return null}return O(e)}function X(e){function d(S,C,w,M,E){if(!(S[C]instanceof e)){var P=e.name||L,A=te(S[C]);return new l("Invalid "+M+" `"+E+"` of type "+("`"+A+"` supplied to `"+w+"`, expected ")+("instance of `"+P+"`."))}return null}return O(d)}function ae(e){if(!Array.isArray(e))return arguments.length>1?o("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):o("Invalid argument supplied to oneOf, expected an array."),f;function d(S,C,w,M,E){for(var P=S[C],A=0;A<e.length;A++)if($(P,e[A]))return null;var k=JSON.stringify(e,function(u,Q){var H=Z(Q);return H==="symbol"?String(Q):Q});return new l("Invalid "+M+" `"+E+"` of value `"+String(P)+"` "+("supplied to `"+w+"`, expected one of "+k+"."))}return O(d)}function oe(e){function d(S,C,w,M,E){if(typeof e!="function")return new l("Property `"+E+"` of component `"+w+"` has invalid PropType notation inside objectOf.");var P=S[C],A=F(P);if(A!=="object")return new l("Invalid "+M+" `"+E+"` of type "+("`"+A+"` supplied to `"+w+"`, expected an object."));for(var k in P)if(r(P,k)){var I=e(P,k,w,M,E+"."+k,v);if(I instanceof Error)return I}return null}return O(d)}function ie(e){if(!Array.isArray(e))return o("Invalid argument supplied to oneOfType, expected an instance of array."),f;for(var d=0;d<e.length;d++){var S=e[d];if(typeof S!="function")return o("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+le(S)+" at index "+d+"."),f}function C(w,M,E,P,A){for(var k=[],I=0;I<e.length;I++){var u=e[I],Q=u(w,M,E,P,A,v);if(Q==null)return null;Q.data&&r(Q.data,"expectedType")&&k.push(Q.data.expectedType)}var H=k.length>0?", expected one of type ["+k.join(", ")+"]":"";return new l("Invalid "+P+" `"+A+"` supplied to "+("`"+E+"`"+H+"."))}return O(C)}function se(){function e(d,S,C,w,M){return V(d[S])?null:new l("Invalid "+w+" `"+M+"` supplied to "+("`"+C+"`, expected a ReactNode."))}return O(e)}function ee(e,d,S,C,w){return new l((e||"React class")+": "+d+" type `"+S+"."+C+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+w+"`.")}function ue(e){function d(S,C,w,M,E){var P=S[C],A=F(P);if(A!=="object")return new l("Invalid "+M+" `"+E+"` of type `"+A+"` "+("supplied to `"+w+"`, expected `object`."));for(var k in e){var I=e[k];if(typeof I!="function")return ee(w,M,E,k,Z(I));var u=I(P,k,w,M,E+"."+k,v);if(u)return u}return null}return O(d)}function ce(e){function d(S,C,w,M,E){var P=S[C],A=F(P);if(A!=="object")return new l("Invalid "+M+" `"+E+"` of type `"+A+"` "+("supplied to `"+w+"`, expected `object`."));var k=m({},S[C],e);for(var I in k){var u=e[I];if(r(e,I)&&typeof u!="function")return ee(w,M,E,I,Z(u));if(!u)return new l("Invalid "+M+" `"+E+"` key `"+I+"` supplied to `"+w+"`.\nBad object: "+JSON.stringify(S[C],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(e),null,"  "));var Q=u(P,I,w,M,E+"."+I,v);if(Q)return Q}return null}return O(d)}function V(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(V);if(e===null||i(e))return!0;var d=x(e);if(d){var S=d.call(e),C;if(d!==e.entries){for(;!(C=S.next()).done;)if(!V(C.value))return!1}else for(;!(C=S.next()).done;){var w=C.value;if(w&&!V(w[1]))return!1}}else return!1;return!0;default:return!1}}function de(e,d){return e==="symbol"?!0:d?d["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&d instanceof Symbol:!1}function F(e){var d=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":de(d,e)?"symbol":d}function Z(e){if(typeof e>"u"||e===null)return""+e;var d=F(e);if(d==="object"){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return d}function le(e){var d=Z(e);switch(d){case"array":case"object":return"an "+d;case"boolean":case"date":case"regexp":return"a "+d;default:return d}}function te(e){return!e.constructor||!e.constructor.name?L:e.constructor.name}return _.checkPropTypes=a,_.resetWarningCache=a.resetWarningCache,_.PropTypes=_,_}},"./node_modules/prop-types/index.js":(j,t,n)=>{{var y=n("./node_modules/react-is/index.js"),m=!0;j.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(y.isElement,m)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":j=>{var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";j.exports=t},"./node_modules/prop-types/lib/has.js":j=>{j.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(j,t)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var n=typeof Symbol=="function"&&Symbol.for,y=n?Symbol.for("react.element"):60103,m=n?Symbol.for("react.portal"):60106,v=n?Symbol.for("react.fragment"):60107,r=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,f=n?Symbol.for("react.context"):60110,i=n?Symbol.for("react.async_mode"):60111,c=n?Symbol.for("react.concurrent_mode"):60111,h=n?Symbol.for("react.forward_ref"):60112,s=n?Symbol.for("react.suspense"):60113,x=n?Symbol.for("react.suspense_list"):60120,L=n?Symbol.for("react.memo"):60115,_=n?Symbol.for("react.lazy"):60116,$=n?Symbol.for("react.block"):60121,l=n?Symbol.for("react.fundamental"):60117,O=n?Symbol.for("react.responder"):60118,R=n?Symbol.for("react.scope"):60119;function T(u){return typeof u=="string"||typeof u=="function"||u===v||u===c||u===a||u===r||u===s||u===x||typeof u=="object"&&u!==null&&(u.$$typeof===_||u.$$typeof===L||u.$$typeof===o||u.$$typeof===f||u.$$typeof===h||u.$$typeof===l||u.$$typeof===O||u.$$typeof===R||u.$$typeof===$)}function b(u){if(typeof u=="object"&&u!==null){var Q=u.$$typeof;switch(Q){case y:var H=u.type;switch(H){case i:case c:case v:case a:case r:case s:return H;default:var ye=H&&H.$$typeof;switch(ye){case f:case h:case _:case L:case o:return ye;default:return Q}}case m:return Q}}}var W=i,U=c,X=f,ae=o,oe=y,ie=h,se=v,ee=_,ue=L,ce=m,V=a,de=r,F=s,Z=!1;function le(u){return Z||(Z=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),te(u)||b(u)===i}function te(u){return b(u)===c}function e(u){return b(u)===f}function d(u){return b(u)===o}function S(u){return typeof u=="object"&&u!==null&&u.$$typeof===y}function C(u){return b(u)===h}function w(u){return b(u)===v}function M(u){return b(u)===_}function E(u){return b(u)===L}function P(u){return b(u)===m}function A(u){return b(u)===a}function k(u){return b(u)===r}function I(u){return b(u)===s}t.AsyncMode=W,t.ConcurrentMode=U,t.ContextConsumer=X,t.ContextProvider=ae,t.Element=oe,t.ForwardRef=ie,t.Fragment=se,t.Lazy=ee,t.Memo=ue,t.Portal=ce,t.Profiler=V,t.StrictMode=de,t.Suspense=F,t.isAsyncMode=le,t.isConcurrentMode=te,t.isContextConsumer=e,t.isContextProvider=d,t.isElement=S,t.isForwardRef=C,t.isFragment=w,t.isLazy=M,t.isMemo=E,t.isPortal=P,t.isProfiler=A,t.isStrictMode=k,t.isSuspense=I,t.isValidElementType=T,t.typeOf=b})()},"./node_modules/react-is/index.js":(j,t,n)=>{j.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(j,t,n)=>{n.r(t),n.d(t,{shallowEqualArrays:()=>m,shallowEqualObjects:()=>y});function y(v,r){if(v===r)return!0;if(!v||!r)return!1;var a=Object.keys(v),o=Object.keys(r),f=a.length;if(o.length!==f)return!1;for(var i=0;i<f;i++){var c=a[i];if(v[c]!==r[c]||!Object.prototype.hasOwnProperty.call(r,c))return!1}return!0}function m(v,r){if(v===r)return!0;if(!v||!r)return!1;var a=v.length;if(r.length!==a)return!1;for(var o=0;o<a;o++)if(v[o]!==r[o])return!1;return!0}},"./src/Component.ts":function(j,t,n){var y=this&&this.__rest||function(a,o){var f={};for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&o.indexOf(i)<0&&(f[i]=a[i]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(a);c<i.length;c++)o.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(a,i[c])&&(f[i[c]]=a[i[c]]);return f},m=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(t,"__esModule",{value:!0});var v=m(n("./src/useMediaQuery.ts")),r=function(a){var o=a.children,f=a.device,i=a.onChange,c=y(a,["children","device","onChange"]),h=(0,v.default)(c,f,i);return typeof o=="function"?o(h):h?o:null};t.default=r},"./src/Context.ts":(j,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var y=n("react"),m=(0,y.createContext)(void 0);t.default=m},"./src/index.ts":function(j,t,n){var y=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var m=y(n("./src/useMediaQuery.ts"));t.useMediaQuery=m.default;var v=y(n("./src/Component.ts"));t.default=v.default;var r=y(n("./src/toQuery.ts"));t.toQuery=r.default;var a=y(n("./src/Context.ts"));t.Context=a.default},"./src/mediaQuery.ts":function(j,t,n){var y=this&&this.__assign||function(){return y=Object.assign||function(s){for(var x,L=1,_=arguments.length;L<_;L++){x=arguments[L];for(var $ in x)Object.prototype.hasOwnProperty.call(x,$)&&(s[$]=x[$])}return s},y.apply(this,arguments)},m=this&&this.__rest||function(s,x){var L={};for(var _ in s)Object.prototype.hasOwnProperty.call(s,_)&&x.indexOf(_)<0&&(L[_]=s[_]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var $=0,_=Object.getOwnPropertySymbols(s);$<_.length;$++)x.indexOf(_[$])<0&&Object.prototype.propertyIsEnumerable.call(s,_[$])&&(L[_[$]]=s[_[$]]);return L},v=this&&this.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(t,"__esModule",{value:!0});var r=v(n("./node_modules/prop-types/index.js")),a=r.default.oneOfType([r.default.string,r.default.number]),o={all:r.default.bool,grid:r.default.bool,aural:r.default.bool,braille:r.default.bool,handheld:r.default.bool,print:r.default.bool,projection:r.default.bool,screen:r.default.bool,tty:r.default.bool,tv:r.default.bool,embossed:r.default.bool},f={orientation:r.default.oneOf(["portrait","landscape"]),scan:r.default.oneOf(["progressive","interlace"]),aspectRatio:r.default.string,deviceAspectRatio:r.default.string,height:a,deviceHeight:a,width:a,deviceWidth:a,color:r.default.bool,colorIndex:r.default.bool,monochrome:r.default.bool,resolution:a,type:Object.keys(o)};f.type;var i=m(f,["type"]),c=y({minAspectRatio:r.default.string,maxAspectRatio:r.default.string,minDeviceAspectRatio:r.default.string,maxDeviceAspectRatio:r.default.string,minHeight:a,maxHeight:a,minDeviceHeight:a,maxDeviceHeight:a,minWidth:a,maxWidth:a,minDeviceWidth:a,maxDeviceWidth:a,minColor:r.default.number,maxColor:r.default.number,minColorIndex:r.default.number,maxColorIndex:r.default.number,minMonochrome:r.default.number,maxMonochrome:r.default.number,minResolution:a,maxResolution:a},i),h=y(y({},o),c);t.default={all:h,types:o,matchers:f,features:c}},"./src/toQuery.ts":function(j,t,n){var y=this&&this.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(t,"__esModule",{value:!0});var m=y(n("./node_modules/hyphenate-style-name/index.js")),v=y(n("./src/mediaQuery.ts")),r=function(i){return"not ".concat(i)},a=function(i,c){var h=(0,m.default)(i);return typeof c=="number"&&(c="".concat(c,"px")),c===!0?h:c===!1?r(h):"(".concat(h,": ").concat(c,")")},o=function(i){return i.join(" and ")},f=function(i){var c=[];return Object.keys(v.default.all).forEach(function(h){var s=i[h];s!=null&&c.push(a(h,s))}),o(c)};t.default=f},"./src/useMediaQuery.ts":function(j,t,n){var y=this&&this.__importDefault||function(l){return l&&l.__esModule?l:{default:l}};Object.defineProperty(t,"__esModule",{value:!0});var m=n("react"),v=y(n("./node_modules/matchmediaquery/index.js")),r=y(n("./node_modules/hyphenate-style-name/index.js")),a=n("./node_modules/shallow-equal/dist/index.esm.js"),o=y(n("./src/toQuery.ts")),f=y(n("./src/Context.ts")),i=function(l){return l.query||(0,o.default)(l)},c=function(l){if(l){var O=Object.keys(l);return O.reduce(function(R,T){return R[(0,r.default)(T)]=l[T],R},{})}},h=function(){var l=(0,m.useRef)(!1);return(0,m.useEffect)(function(){l.current=!0},[]),l.current},s=function(l){var O=(0,m.useContext)(f.default),R=function(){return c(l)||c(O)},T=(0,m.useState)(R),b=T[0],W=T[1];return(0,m.useEffect)(function(){var U=R();(0,a.shallowEqualObjects)(b,U)||W(U)},[l,O]),b},x=function(l){var O=function(){return i(l)},R=(0,m.useState)(O),T=R[0],b=R[1];return(0,m.useEffect)(function(){var W=O();T!==W&&b(W)},[l]),T},L=function(l,O){var R=function(){return(0,v.default)(l,O||{},!!O)},T=(0,m.useState)(R),b=T[0],W=T[1],U=h();return(0,m.useEffect)(function(){if(U){var X=R();return W(X),function(){X&&X.dispose()}}},[l,O]),b},_=function(l){var O=(0,m.useState)(l.matches),R=O[0],T=O[1];return(0,m.useEffect)(function(){var b=function(W){T(W.matches)};return l.addListener(b),T(l.matches),function(){l.removeListener(b)}},[l]),R},$=function(l,O,R){var T=s(O),b=x(l);if(!b)throw new Error("Invalid or missing MediaQuery!");var W=L(b,T),U=_(W),X=h();return(0,m.useEffect)(function(){X&&R&&R(U)},[U]),(0,m.useEffect)(function(){return function(){W&&W.dispose()}},[]),U};t.default=$},react:j=>{j.exports=K}},Y={};function z(j){var t=Y[j];if(t!==void 0)return t.exports;var n=Y[j]={exports:{}};return N[j].call(n.exports,n,n.exports,z),n.exports}z.d=(j,t)=>{for(var n in t)z.o(t,n)&&!z.o(j,n)&&Object.defineProperty(j,n,{enumerable:!0,get:t[n]})},z.o=(j,t)=>Object.prototype.hasOwnProperty.call(j,t),z.r=j=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(j,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(j,"__esModule",{value:!0})};var J=z("./src/index.ts");return J})())})(xe);var Ae=xe.exports;const re=ge(Ae),Ie=D.div`
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
`,Le=D.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`,ke=D.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,$e=D.div`
  display: flex;
  gap: 16px;
`,fe=D(he)`
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
    background-color: ${B.colorOrange};
  }
  &.active {
    background-color: ${B.colorOrange};
  }
`,De=D(he)`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(239, 237, 232, 1);
  background-color: transparent;
  border-radius: 12px;
`,Qe=D.svg`
  width: ${g=>g.size||"28px"};
  height: ${g=>g.size||"28px"};
  fill: ${g=>g.color||"none"};
  stroke: ${g=>g.color||"rgba(239, 237, 232, 0.3)"};
  stroke-width: 1.5px;
  display: block;

  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${B.colorOrange};
  }
`,We=D.svg`
  width: ${g=>g.size||"24px"};
  height: ${g=>g.size||"24px"};
  fill: ${g=>g.color||"none"};
  stroke: ${g=>g.color||"rgba(239, 237, 232, 0.3)"};
  display: block;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${B.colorOrange};
  }
  @media screen and (min-width: 768px) {
    width: ${g=>g.size||"28px"};
    height: ${g=>g.size||"28px"};
  }
`,Ye=D.div`
  border: 1px solid ${B.colorOrange};
  border-radius: 50%;
  width: 37px;
  height: 37px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,Ue=D.svg`
  width: ${g=>g.size||"28px"};
  height: ${g=>g.size||"28px"};
  fill: ${g=>g.color||"rgba(239, 237, 232, 0.1)"};
  display: block;
  transition: fill 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;
`,ze=D.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`,He=()=>{const{user:g}=ne(G=>G.auth);return p.jsxs(p.Fragment,{children:[p.jsx(We,{children:p.jsx("use",{href:`${q}#icon-settings-01`})}),p.jsx(Ye,{children:g!=null&&g.avatarURL?p.jsx(p.Fragment,{children:p.jsx(ze,{src:g.avatarURL,alt:"User Avatar"})}):p.jsx(Ue,{children:p.jsx("use",{href:`${q}#icon-gridicons_user`})})})]})},Fe=D.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
`,Be=D.div`
  z-index: 1001;
  position: relative;
  right: 0;
  margin-left: auto;
  height: 100vh;
  background-color: ${B.colorOrange};
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
`,Ke=D.svg`
  stroke-width: 2px;
  width: 32px;
  height: 32px;
  fill: ${B.colorWhite};
`,Xe=D.div`
  position: absolute;
  width: 32px;
  height: 32px;
  stroke: white;
  top: 26px;
  right: 32px;
`,Ge=D.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translateY(100%);
`,pe=D(he)`
  color: ${B.colorWhite};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  font-size: 16px;

  &.active {
    border-color: ${B.colorWhite};
  }
`,Je=D(Se)`
  position: absolute;
  bottom: 32px;
  left: 32px;
`,Ze=D.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${B.colorWhite};
`,Ne=({onClick:g})=>{const G=_e(),K=()=>{G(we()),g()},N=J=>{J.code==="Escape"&&g()},Y=()=>{g()},z=J=>{J.currentTarget===J.target&&g()};return ve.useEffect(()=>(window.addEventListener("keydown",N),()=>{window.removeEventListener("keydown",N)})),p.jsx(Fe,{onClick:z,children:p.jsxs(Be,{children:[p.jsx(Xe,{onClick:Y,children:p.jsx(Ke,{children:p.jsx("use",{href:`${q}#icon-x`})})}),p.jsxs(Ge,{children:[p.jsx(pe,{to:"/diary",onClick:Y,children:"Diary"}),p.jsx(pe,{to:"/products",onClick:Y,children:"Products"}),p.jsx(pe,{to:"/exercises",onClick:Y,children:"Exercises"})]}),p.jsxs(Je,{to:"/welcome",onClick:K,children:[p.jsx(Ze,{children:"Logout"}),p.jsx(Re,{children:p.jsx("use",{href:`${q}#icon-log-out-02`})})]})]})})},Ve=()=>{const[g,G]=ve.useState(!1),K=()=>{G(J=>!J)},N=ne(me),Y=ne(je),z=Y==null?void 0:Y.userMetrics;return p.jsxs(Ie,{children:[p.jsxs(Le,{children:[p.jsx(Ee,{to:"/diary",children:p.jsx(Pe,{})}),N&&z&&p.jsxs(ke,{children:[p.jsx(re,{minWidth:1440,children:p.jsxs($e,{children:[p.jsx(fe,{to:"/diary",activeclassname:"active",exact:"true",children:"Diary"}),p.jsx(fe,{to:"/products",activeclassname:"active",exact:"true",children:"Products"}),p.jsx(fe,{to:"/exercises",activeclassname:"active",exact:"true",children:"Exercises"})]})}),p.jsx(De,{to:"/profile",children:p.jsx(He,{})}),p.jsx(re,{minWidth:1440,children:p.jsx(Me,{})}),p.jsx(re,{maxWidth:1439,children:p.jsx(Qe,{onClick:K,children:p.jsx("use",{href:`${q}#icon-menu`})})})]})]}),p.jsx(re,{maxWidth:1439,children:g&&p.jsx(Ne,{onClick:K})})]})},rt=()=>{const g=Oe(),G=ne(me),K=["/diary","/profile","/exercises","/products"].includes(g.pathname)||g.pathname==="/"&&G;return p.jsxs(p.Fragment,{children:[K&&p.jsx(Ve,{}),p.jsx(Te,{}),p.jsx(Ce,{})]})};export{rt as default};
