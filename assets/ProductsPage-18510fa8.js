import{r as p,u as M,a as b,a6 as $t,d as Pe,j as m,s as ee,J as Ae,O as jt,ad as oe,B as Me,ae as Ht,af as Wt,ag as je,ah as be,ai as Ut,aj as _t,ak as Nt,al as zt,am as Gt,A as Yt,an as qt,b as ae,f as Kt,ao as Xt,ap as Jt,C as Zt}from"./index-865ff0dd.js";import{T as Qt}from"./TitlePage-dcd69589.js";import{h as en,E as tn,c as nn,s as rn,_ as w}from"./emotion-element-c39617d8.browser.esm-3b5ebf26.js";import{e as on,F as ut,d as an}from"./index.esm-8c8b6ade.js";import{b as un}from"./floating-ui.dom-9d61e2db.js";function sn(n,e){if(n==null)return{};var r={},o=Object.keys(n),t,a;for(a=0;a<o.length;a++)t=o[a],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}var S=function(e,r){var o=arguments;if(r==null||!en.call(r,"css"))return p.createElement.apply(void 0,o);var t=o.length,a=new Array(t);a[0]=tn,a[1]=nn(e,r);for(var u=2;u<t;u++)a[u]=o[u];return p.createElement.apply(null,a)};function Ve(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return rn(e)}var ln=function(){var e=Ve.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function te(n){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(n)}function cn(n,e){if(te(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var o=r.call(n,e||"default");if(te(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function st(n){var e=cn(n,"string");return te(e)=="symbol"?e:String(e)}function Oe(n,e){return Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},Oe(n,e)}function dn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}const pn="/PowerPulseTeamPoject/assets/products-bg-b7e77cea.jpg",fn="/PowerPulseTeamPoject/assets/products-bg@2x-9876be0a.jpg",hn=M.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${pn});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${fn});
  }
`,mn=M.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;

  @media (min-width: 768px) {
    gap: 32px;
    margin-top: 72px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,gn=M.div`
  overflow: auto;
  margin-top: 32px;

  @media (min-width: 768px) {
    width: 704px;
    height: 70vh;
  }

  @media (min-width: 1440px) {
    width: 850px;
    margin-top: 28px;
  }

  &::-webkit-scrollbar {
    background: rgba(239, 237, 232, 0.1);
    border-radius: 12px;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${b.colorOrange1};
    border-radius: 12px;
  }
`,vn=n=>n.products.productsArray,bn=n=>n.products.productsCategories,lt=n=>n.products.isLoadingProducts;function ie(n,e,r){return e=st(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function He(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,o)}return r}function y(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?He(Object(r),!0).forEach(function(o){ie(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):He(Object(r)).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}function xn(n){if(Array.isArray(n))return n}function En(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var o,t,a,u,l=[],i=!0,s=!1;try{if(a=(r=r.call(n)).next,e===0){if(Object(r)!==r)return;i=!1}else for(;!(i=(o=a.call(r)).done)&&(l.push(o.value),l.length!==e);i=!0);}catch(c){s=!0,t=c}finally{try{if(!i&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function we(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,o=new Array(e);r<e;r++)o[r]=n[r];return o}function ct(n,e){if(n){if(typeof n=="string")return we(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return we(n,e)}}function Cn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(n,e){return xn(n)||En(n,e)||ct(n,e)||Cn()}function K(n,e){if(n==null)return{};var r=sn(n,e),o,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)o=a[t],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}var Sn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function yn(n){var e=n.defaultInputValue,r=e===void 0?"":e,o=n.defaultMenuIsOpen,t=o===void 0?!1:o,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,i=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,f=n.onMenuOpen,v=n.value,x=K(n,Sn),E=p.useState(l!==void 0?l:r),h=q(E,2),g=h[0],P=h[1],D=p.useState(i!==void 0?i:t),I=q(D,2),A=I[0],C=I[1],O=p.useState(v!==void 0?v:u),F=q(O,2),V=F[0],B=F[1],j=p.useCallback(function(W,X){typeof s=="function"&&s(W,X),B(W)},[s]),$=p.useCallback(function(W,X){var J;typeof c=="function"&&(J=c(W,X)),P(J!==void 0?J:W)},[c]),N=p.useCallback(function(){typeof f=="function"&&f(),C(!0)},[f]),z=p.useCallback(function(){typeof d=="function"&&d(),C(!1)},[d]),T=l!==void 0?l:g,k=i!==void 0?i:A,_=v!==void 0?v:V;return y(y({},x),{},{inputValue:T,menuIsOpen:k,onChange:j,onInputChange:$,onMenuClose:z,onMenuOpen:N,value:_})}function Fn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function We(n,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,st(o.key),o)}}function On(n,e,r){return e&&We(n.prototype,e),r&&We(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function wn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Oe(n,e)}function fe(n){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},fe(n)}function dt(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dt=function(){return!!n})()}function Dn(n,e){if(e&&(te(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return dn(n)}function In(n){var e=dt();return function(){var o=fe(n),t;if(e){var a=fe(this).constructor;t=Reflect.construct(o,arguments,a)}else t=o.apply(this,arguments);return Dn(this,t)}}function Pn(n){if(Array.isArray(n))return we(n)}function An(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Le(n){return Pn(n)||An(n)||ct(n)||Mn()}function Vn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var De=p.useLayoutEffect,Ln=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],he=function(){};function kn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function Rn(n,e){for(var r=arguments.length,o=new Array(r>2?r-2:0),t=2;t<r;t++)o[t-2]=arguments[t];var a=[].concat(o);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(kn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var Ue=function(e){return Nn(e)?e.filter(Boolean):te(e)==="object"&&e!==null?[e]:[]},pt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=K(e,Ln);return y({},r)},L=function(e,r,o){var t=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(r,e),className:t(o??{},u(r,e),l)}};function ve(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Tn(n){return ve(n)?window.innerHeight:n.clientHeight}function ft(n){return ve(n)?window.pageYOffset:n.scrollTop}function me(n,e){if(ve(n)){window.scrollTo(0,e);return}n.scrollTop=e}function Bn(n){var e=getComputedStyle(n),r=e.position==="absolute",o=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(r&&e.position==="static")&&o.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function $n(n,e,r,o){return r*((n=n/o-1)*n*n+1)+e}function le(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:he,t=ft(n),a=e-t,u=10,l=0;function i(){l+=u;var s=$n(l,t,a,r);me(n,s),l<r?window.requestAnimationFrame(i):o(n)}i()}function _e(n,e){var r=n.getBoundingClientRect(),o=e.getBoundingClientRect(),t=e.offsetHeight/3;o.bottom+t>r.bottom?me(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):o.top-t<r.top&&me(n,Math.max(e.offsetTop-t,0))}function jn(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Ne(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Hn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var ht=!1,Wn={get passive(){return ht=!0}},ce=typeof window<"u"?window:{};ce.addEventListener&&ce.removeEventListener&&(ce.addEventListener("p",he,Wn),ce.removeEventListener("p",he,!1));var Un=ht;function _n(n){return n!=null}function Nn(n){return Array.isArray(n)}function de(n,e,r){return n?e:r}var zn=function(e){for(var r=arguments.length,o=new Array(r>1?r-1:0),t=1;t<r;t++)o[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var l=q(u,1),i=l[0];return!o.includes(i)});return a.reduce(function(u,l){var i=q(l,2),s=i[0],c=i[1];return u[s]=c,u},{})},Gn=["children","innerProps"],Yn=["children","innerProps"];function qn(n){var e=n.maxHeight,r=n.menuEl,o=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,i=Bn(r),s={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return s;var c=i.getBoundingClientRect(),d=c.height,f=r.getBoundingClientRect(),v=f.bottom,x=f.height,E=f.top,h=r.offsetParent.getBoundingClientRect(),g=h.top,P=u?window.innerHeight:Tn(i),D=ft(i),I=parseInt(getComputedStyle(r).marginBottom,10),A=parseInt(getComputedStyle(r).marginTop,10),C=g-A,O=P-E,F=C+D,V=d-D-E,B=v-P+D+I,j=D+E-A,$=160;switch(t){case"auto":case"bottom":if(O>=x)return{placement:"bottom",maxHeight:e};if(V>=x&&!u)return a&&le(i,B,$),{placement:"bottom",maxHeight:e};if(!u&&V>=o||u&&O>=o){a&&le(i,B,$);var N=u?O-I:V-I;return{placement:"bottom",maxHeight:N}}if(t==="auto"||u){var z=e,T=u?C:F;return T>=o&&(z=Math.min(T-I-l,e)),{placement:"top",maxHeight:z}}if(t==="bottom")return a&&me(i,B),{placement:"bottom",maxHeight:e};break;case"top":if(C>=x)return{placement:"top",maxHeight:e};if(F>=x&&!u)return a&&le(i,j,$),{placement:"top",maxHeight:e};if(!u&&F>=o||u&&C>=o){var k=e;return(!u&&F>=o||u&&C>=o)&&(k=u?C-A:F-A),a&&le(i,j,$),{placement:"top",maxHeight:k}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function Kn(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var mt=function(e){return e==="auto"?"bottom":e},Xn=function(e,r){var o,t=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,i=a.colors;return y((o={label:"menu"},ie(o,Kn(t),"100%"),ie(o,"position","absolute"),ie(o,"width","100%"),ie(o,"zIndex",1),o),r?{}:{backgroundColor:i.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},gt=p.createContext(null),Jn=function(e){var r=e.children,o=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,i=e.theme,s=p.useContext(gt)||{},c=s.setPortalPlacement,d=p.useRef(null),f=p.useState(t),v=q(f,2),x=v[0],E=v[1],h=p.useState(null),g=q(h,2),P=g[0],D=g[1],I=i.spacing.controlHeight;return De(function(){var A=d.current;if(A){var C=u==="fixed",O=l&&!C,F=qn({maxHeight:t,menuEl:A,minHeight:o,placement:a,shouldScroll:O,isFixedPosition:C,controlHeight:I});E(F.maxHeight),D(F.placement),c==null||c(F.placement)}},[t,a,u,l,o,c,I]),r({ref:d,placerProps:y(y({},e),{},{placement:P||mt(a),maxHeight:x})})},Zn=function(e){var r=e.children,o=e.innerRef,t=e.innerProps;return S("div",w({},L(e,"menu",{menu:!0}),{ref:o},t),r)},Qn=Zn,er=function(e,r){var o=e.maxHeight,t=e.theme.spacing.baseUnit;return y({maxHeight:o,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:t,paddingTop:t})},tr=function(e){var r=e.children,o=e.innerProps,t=e.innerRef,a=e.isMulti;return S("div",w({},L(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},o),r)},vt=function(e,r){var o=e.theme,t=o.spacing.baseUnit,a=o.colors;return y({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},nr=vt,rr=vt,or=function(e){var r=e.children,o=r===void 0?"No options":r,t=e.innerProps,a=K(e,Gn);return S("div",w({},L(y(y({},a),{},{children:o,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),o)},ir=function(e){var r=e.children,o=r===void 0?"Loading...":r,t=e.innerProps,a=K(e,Yn);return S("div",w({},L(y(y({},a),{},{children:o,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),o)},ar=function(e){var r=e.rect,o=e.offset,t=e.position;return{left:r.left,position:t,top:o,width:r.width,zIndex:1}},ur=function(e){var r=e.appendTo,o=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,i=p.useRef(null),s=p.useRef(null),c=p.useState(mt(u)),d=q(c,2),f=d[0],v=d[1],x=p.useMemo(function(){return{setPortalPlacement:v}},[]),E=p.useState(null),h=q(E,2),g=h[0],P=h[1],D=p.useCallback(function(){if(t){var O=jn(t),F=l==="fixed"?0:window.pageYOffset,V=O[f]+F;(V!==(g==null?void 0:g.offset)||O.left!==(g==null?void 0:g.rect.left)||O.width!==(g==null?void 0:g.rect.width))&&P({offset:V,rect:O})}},[t,l,f,g==null?void 0:g.offset,g==null?void 0:g.rect.left,g==null?void 0:g.rect.width]);De(function(){D()},[D]);var I=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&i.current&&(s.current=un(t,i.current,D,{elementResize:"ResizeObserver"in window}))},[t,D]);De(function(){I()},[I]);var A=p.useCallback(function(O){i.current=O,I()},[I]);if(!r&&l!=="fixed"||!g)return null;var C=S("div",w({ref:A},L(y(y({},e),{},{offset:g.offset,position:l,rect:g.rect}),"menuPortal",{"menu-portal":!0}),a),o);return S(gt.Provider,{value:x},r?$t.createPortal(C,r):C)},sr=function(e){var r=e.isDisabled,o=e.isRtl;return{label:"container",direction:o?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},lr=function(e){var r=e.children,o=e.innerProps,t=e.isDisabled,a=e.isRtl;return S("div",w({},L(e,"container",{"--is-disabled":t,"--is-rtl":a}),o),r)},cr=function(e,r){var o=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return y({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(o.baseUnit/2,"px ").concat(o.baseUnit*2,"px")})},dr=function(e){var r=e.children,o=e.innerProps,t=e.isMulti,a=e.hasValue;return S("div",w({},L(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),o),r)},pr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},fr=function(e){var r=e.children,o=e.innerProps;return S("div",w({},L(e,"indicatorsContainer",{indicators:!0}),o),r)},ze,hr=["size"],mr=["innerProps","isRtl","size"],gr={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},bt=function(e){var r=e.size,o=K(e,hr);return S("svg",w({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:gr},o))},ke=function(e){return S(bt,w({size:20},e),S("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},xt=function(e){return S(bt,w({size:20},e),S("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Et=function(e,r){var o=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return y({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:o?u.neutral60:u.neutral20,padding:a*2,":hover":{color:o?u.neutral80:u.neutral40}})},vr=Et,br=function(e){var r=e.children,o=e.innerProps;return S("div",w({},L(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),o),r||S(xt,null))},xr=Et,Er=function(e){var r=e.children,o=e.innerProps;return S("div",w({},L(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),o),r||S(ke,null))},Cr=function(e,r){var o=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return y({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:o?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},Sr=function(e){var r=e.innerProps;return S("span",w({},r,L(e,"indicatorSeparator",{"indicator-separator":!0})))},yr=ln(ze||(ze=Vn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),Fr=function(e,r){var o=e.isFocused,t=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return y({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},r?{}:{color:o?u.neutral60:u.neutral20,padding:l*2})},xe=function(e){var r=e.delay,o=e.offset;return S("span",{css:Ve({animation:"".concat(yr," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:o?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},Or=function(e){var r=e.innerProps,o=e.isRtl,t=e.size,a=t===void 0?4:t,u=K(e,mr);return S("div",w({},L(y(y({},u),{},{innerProps:r,isRtl:o,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),S(xe,{delay:0,offset:o}),S(xe,{delay:160,offset:!0}),S(xe,{delay:320,offset:!o}))},wr=function(e,r){var o=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,i=a.spacing;return y({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:i.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:o?u.neutral5:u.neutral0,borderColor:o?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},Dr=function(e){var r=e.children,o=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return S("div",w({ref:a},L(e,"control",{control:!0,"control--is-disabled":o,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":o||void 0}),r)},Ir=Dr,Pr=["data"],Ar=function(e,r){var o=e.theme.spacing;return r?{}:{paddingBottom:o.baseUnit*2,paddingTop:o.baseUnit*2}},Mr=function(e){var r=e.children,o=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,i=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return S("div",w({},L(e,"group",{group:!0}),i),S(u,w({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:o}),s),S("div",null,r))},Vr=function(e,r){var o=e.theme,t=o.colors,a=o.spacing;return y({label:"group",cursor:"default",display:"block"},r?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},Lr=function(e){var r=pt(e);r.data;var o=K(r,Pr);return S("div",w({},L(e,"groupHeading",{"group-heading":!0}),o))},kr=Mr,Rr=["innerRef","isDisabled","isHidden","inputClassName"],Tr=function(e,r){var o=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,l=a.colors;return y(y({visibility:o?"hidden":"visible",transform:t?"translateZ(0)":""},Br),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Ct={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Br={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":y({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ct)},$r=function(e){return y({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Ct)},jr=function(e){var r=e.cx,o=e.value,t=pt(e),a=t.innerRef,u=t.isDisabled,l=t.isHidden,i=t.inputClassName,s=K(t,Rr);return S("div",w({},L(e,"input",{"input-container":!0}),{"data-value":o||""}),S("input",w({className:r({input:!0},i),ref:a,style:$r(l),disabled:u},s)))},Hr=jr,Wr=function(e,r){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors;return y({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},Ur=function(e,r){var o=e.theme,t=o.borderRadius,a=o.colors,u=e.cropWithEllipsis;return y({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},_r=function(e,r){var o=e.theme,t=o.spacing,a=o.borderRadius,u=o.colors,l=e.isFocused;return y({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},St=function(e){var r=e.children,o=e.innerProps;return S("div",o,r)},Nr=St,zr=St;function Gr(n){var e=n.children,r=n.innerProps;return S("div",w({role:"button"},r),e||S(ke,{size:14}))}var Yr=function(e){var r=e.children,o=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,i=e.selectProps,s=o.Container,c=o.Label,d=o.Remove;return S(s,{data:t,innerProps:y(y({},L(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:i},S(c,{data:t,innerProps:y({},L(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:i},r),S(d,{data:t,innerProps:y(y({},L(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:i}))},qr=Yr,Kr=function(e,r){var o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,i=u.colors;return y({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?i.primary:t?i.primary25:"transparent",color:o?i.neutral20:a?i.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:o?void 0:a?i.primary:i.primary50}})},Xr=function(e){var r=e.children,o=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return S("div",w({},L(e,"option",{option:!0,"option--is-disabled":o,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":o},l),r)},Jr=Xr,Zr=function(e,r){var o=e.theme,t=o.spacing,a=o.colors;return y({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},Qr=function(e){var r=e.children,o=e.innerProps;return S("div",w({},L(e,"placeholder",{placeholder:!0}),o),r)},eo=Qr,to=function(e,r){var o=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return y({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:o?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},no=function(e){var r=e.children,o=e.isDisabled,t=e.innerProps;return S("div",w({},L(e,"singleValue",{"single-value":!0,"single-value--is-disabled":o}),t),r)},ro=no,oo={ClearIndicator:Er,Control:Ir,DropdownIndicator:br,DownChevron:xt,CrossIcon:ke,Group:kr,GroupHeading:Lr,IndicatorsContainer:fr,IndicatorSeparator:Sr,Input:Hr,LoadingIndicator:Or,Menu:Qn,MenuList:tr,MenuPortal:ur,LoadingMessage:ir,NoOptionsMessage:or,MultiValue:qr,MultiValueContainer:Nr,MultiValueLabel:zr,MultiValueRemove:Gr,Option:Jr,Placeholder:eo,SelectContainer:lr,SingleValue:ro,ValueContainer:dr},io=function(e){return y(y({},oo),e.components)},Ge=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function ao(n,e){return!!(n===e||Ge(n)&&Ge(e))}function uo(n,e){if(n.length!==e.length)return!1;for(var r=0;r<n.length;r++)if(!ao(n[r],e[r]))return!1;return!0}function so(n,e){e===void 0&&(e=uo);var r=null;function o(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(r&&r.lastThis===this&&e(t,r.lastArgs))return r.lastResult;var u=n.apply(this,t);return r={lastResult:u,lastArgs:t,lastThis:this},u}return o.clear=function(){r=null},o}var lo={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},co=function(e){return S("span",w({css:lo},e))},Ye=co,po={guidance:function(e){var r=e.isSearchable,o=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(o?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,o=e.label,t=o===void 0?"":o,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var r=e.context,o=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,i=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(E,h){return E&&E.length?"".concat(E.indexOf(h)+1," of ").concat(E.length):""};if(r==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,o),".");if(r==="menu"&&c){var f=i?" disabled":"",v="".concat(s?" selected":"").concat(f);return"".concat(u).concat(v,", ").concat(d(t,o),".")}return""},onFilter:function(e){var r=e.inputValue,o=e.resultsMessage;return"".concat(o).concat(r?" for search term "+r:"",".")}},fo=function(e){var r=e.ariaSelection,o=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,i=e.selectProps,s=e.id,c=e.isAppleDevice,d=i.ariaLiveMessages,f=i.getOptionLabel,v=i.inputValue,x=i.isMulti,E=i.isOptionDisabled,h=i.isSearchable,g=i.menuIsOpen,P=i.options,D=i.screenReaderStatus,I=i.tabSelectsValue,A=i.isLoading,C=i["aria-label"],O=i["aria-live"],F=p.useMemo(function(){return y(y({},po),d||{})},[d]),V=p.useMemo(function(){var T="";if(r&&F.onChange){var k=r.option,_=r.options,W=r.removedValue,X=r.removedValues,J=r.value,ue=function(Y){return Array.isArray(Y)?null:Y},R=W||k||ue(J),H=R?f(R):"",G=_||X||void 0,Z=G?G.map(f):[],U=y({isDisabled:R&&E(R,l),label:H,labels:Z},r);T=F.onChange(U)}return T},[r,F,E,l,f]),B=p.useMemo(function(){var T="",k=o||t,_=!!(o&&l&&l.includes(o));if(k&&F.onFocus){var W={focused:k,label:f(k),isDisabled:E(k,l),isSelected:_,options:a,context:k===o?"menu":"value",selectValue:l,isAppleDevice:c};T=F.onFocus(W)}return T},[o,t,f,E,F,a,l,c]),j=p.useMemo(function(){var T="";if(g&&P.length&&!A&&F.onFilter){var k=D({count:a.length});T=F.onFilter({inputValue:v,resultsMessage:k})}return T},[a,v,g,F,P,D,A]),$=(r==null?void 0:r.action)==="initial-input-focus",N=p.useMemo(function(){var T="";if(F.guidance){var k=t?"value":g?"menu":"input";T=F.guidance({"aria-label":C,context:k,isDisabled:o&&E(o,l),isMulti:x,isSearchable:h,tabSelectsValue:I,isInitialFocus:$})}return T},[C,o,t,x,E,h,g,F,l,I,$]),z=S(p.Fragment,null,S("span",{id:"aria-selection"},V),S("span",{id:"aria-focused"},B),S("span",{id:"aria-results"},j),S("span",{id:"aria-guidance"},N));return S(p.Fragment,null,S(Ye,{id:s},$&&z),S(Ye,{"aria-live":O,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!$&&z))},ho=fo,Ie=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],mo=new RegExp("["+Ie.map(function(n){return n.letters}).join("")+"]","g"),yt={};for(var Ee=0;Ee<Ie.length;Ee++)for(var Ce=Ie[Ee],Se=0;Se<Ce.letters.length;Se++)yt[Ce.letters[Se]]=Ce.base;var Ft=function(e){return e.replace(mo,function(r){return yt[r]})},go=so(Ft),qe=function(e){return e.replace(/^\s+|\s+$/g,"")},vo=function(e){return"".concat(e.label," ").concat(e.value)},bo=function(e){return function(r,o){if(r.data.__isNew__)return!0;var t=y({ignoreCase:!0,ignoreAccents:!0,stringify:vo,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,i=t.trim,s=t.matchFrom,c=i?qe(o):o,d=i?qe(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=go(c),d=Ft(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},xo=["innerRef"];function Eo(n){var e=n.innerRef,r=K(n,xo),o=zn(r,"onExited","in","enter","exit","appear");return S("input",w({ref:e},o,{css:Ve({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var Co=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function So(n){var e=n.isEnabled,r=n.onBottomArrive,o=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),i=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(h,g){if(s.current!==null){var P=s.current,D=P.scrollTop,I=P.scrollHeight,A=P.clientHeight,C=s.current,O=g>0,F=I-A-D,V=!1;F>g&&u.current&&(o&&o(h),u.current=!1),O&&l.current&&(a&&a(h),l.current=!1),O&&g>F?(r&&!u.current&&r(h),C.scrollTop=I,V=!0,u.current=!0):!O&&-g>D&&(t&&!l.current&&t(h),C.scrollTop=0,V=!0,l.current=!0),V&&Co(h)}},[r,o,t,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),f=p.useCallback(function(h){i.current=h.changedTouches[0].clientY},[]),v=p.useCallback(function(h){var g=i.current-h.changedTouches[0].clientY;c(h,g)},[c]),x=p.useCallback(function(h){if(h){var g=Un?{passive:!1}:!1;h.addEventListener("wheel",d,g),h.addEventListener("touchstart",f,g),h.addEventListener("touchmove",v,g)}},[v,f,d]),E=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",f,!1),h.removeEventListener("touchmove",v,!1))},[v,f,d]);return p.useEffect(function(){if(e){var h=s.current;return x(h),function(){E(h)}}},[e,x,E]),function(h){s.current=h}}var Ke=["boxSizing","height","overflow","paddingRight","position"],Xe={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Je(n){n.preventDefault()}function Ze(n){n.stopPropagation()}function Qe(){var n=this.scrollTop,e=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===e&&(this.scrollTop=n-1)}function et(){return"ontouchstart"in window||navigator.maxTouchPoints}var tt=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,ne={capture:!1,passive:!1};function yo(n){var e=n.isEnabled,r=n.accountForScrollbars,o=r===void 0?!0:r,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(i){if(tt){var s=document.body,c=s&&s.style;if(o&&Ke.forEach(function(x){var E=c&&c[x];t.current[x]=E}),o&&re<1){var d=parseInt(t.current.paddingRight,10)||0,f=document.body?document.body.clientWidth:0,v=window.innerWidth-f+d||0;Object.keys(Xe).forEach(function(x){var E=Xe[x];c&&(c[x]=E)}),c&&(c.paddingRight="".concat(v,"px"))}s&&et()&&(s.addEventListener("touchmove",Je,ne),i&&(i.addEventListener("touchstart",Qe,ne),i.addEventListener("touchmove",Ze,ne))),re+=1}},[o]),l=p.useCallback(function(i){if(tt){var s=document.body,c=s&&s.style;re=Math.max(re-1,0),o&&re<1&&Ke.forEach(function(d){var f=t.current[d];c&&(c[d]=f)}),s&&et()&&(s.removeEventListener("touchmove",Je,ne),i&&(i.removeEventListener("touchstart",Qe,ne),i.removeEventListener("touchmove",Ze,ne)))}},[o]);return p.useEffect(function(){if(e){var i=a.current;return u(i),function(){l(i)}}},[e,u,l]),function(i){a.current=i}}var Fo=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},Oo={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function wo(n){var e=n.children,r=n.lockEnabled,o=n.captureEnabled,t=o===void 0?!0:o,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,i=n.onTopLeave,s=So({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:i}),c=yo({isEnabled:r}),d=function(v){s(v),c(v)};return S(p.Fragment,null,r&&S("div",{onClick:Fo,css:Oo}),e(d))}var Do={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},Io=function(e){var r=e.name,o=e.onFocus;return S("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:o,css:Do,value:"",onChange:function(){}})},Po=Io;function Re(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ao(){return Re(/^iPhone/i)}function Ot(){return Re(/^Mac/i)}function Mo(){return Re(/^iPad/i)||Ot()&&navigator.maxTouchPoints>1}function Vo(){return Ao()||Mo()}function Lo(){return Ot()||Vo()}var ko=function(e){return e.label},Ro=function(e){return e.label},To=function(e){return e.value},Bo=function(e){return!!e.isDisabled},$o={clearIndicator:xr,container:sr,control:wr,dropdownIndicator:vr,group:Ar,groupHeading:Vr,indicatorsContainer:pr,indicatorSeparator:Cr,input:Tr,loadingIndicator:Fr,loadingMessage:rr,menu:Xn,menuList:er,menuPortal:ar,multiValue:Wr,multiValueLabel:Ur,multiValueRemove:_r,noOptionsMessage:nr,option:Kr,placeholder:Zr,singleValue:to,valueContainer:cr},jo={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Ho=4,wt=4,Wo=38,Uo=wt*2,_o={baseUnit:wt,controlHeight:Wo,menuGutter:Uo},ye={borderRadius:Ho,colors:jo,spacing:_o},No={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Ne(),captureMenuScroll:!Ne(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:bo(),formatGroupLabel:ko,getOptionLabel:Ro,getOptionValue:To,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Bo,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Hn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function nt(n,e,r,o){var t=Pt(n,e,r),a=At(n,e,r),u=It(n,e),l=ge(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:l,index:o}}function pe(n,e){return n.options.map(function(r,o){if("options"in r){var t=r.options.map(function(u,l){return nt(n,u,e,l)}).filter(function(u){return ot(n,u)});return t.length>0?{type:"group",data:r,options:t,index:o}:void 0}var a=nt(n,r,e,o);return ot(n,a)?a:void 0}).filter(_n)}function Dt(n){return n.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Le(r.options.map(function(o){return o.data}))):e.push(r.data),e},[])}function rt(n,e){return n.reduce(function(r,o){return o.type==="group"?r.push.apply(r,Le(o.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(o.index,"-").concat(t.index)}}))):r.push({data:o.data,id:"".concat(e,"-").concat(o.index)}),r},[])}function zo(n,e){return Dt(pe(n,e))}function ot(n,e){var r=n.inputValue,o=r===void 0?"":r,t=e.data,a=e.isSelected,u=e.label,l=e.value;return(!Vt(n)||!a)&&Mt(n,{label:u,value:l,data:t},o)}function Go(n,e){var r=n.focusedValue,o=n.selectValue,t=o.indexOf(r);if(t>-1){var a=e.indexOf(r);if(a>-1)return r;if(t<e.length)return e[t]}return null}function Yo(n,e){var r=n.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var Fe=function(e,r){var o,t=(o=e.find(function(a){return a.data===r}))===null||o===void 0?void 0:o.id;return t||null},It=function(e,r){return e.getOptionLabel(r)},ge=function(e,r){return e.getOptionValue(r)};function Pt(n,e,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,r):!1}function At(n,e,r){if(r.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,r);var o=ge(n,e);return r.some(function(t){return ge(n,t)===o})}function Mt(n,e,r){return n.filterOption?n.filterOption(e,r):!0}var Vt=function(e){var r=e.hideSelectedOptions,o=e.isMulti;return r===void 0?o:r},qo=1,Lt=function(n){wn(r,n);var e=In(r);function r(o){var t;if(Fn(this,r),t=e.call(this,o),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=Lo(),t.controlRef=null,t.getControlRef=function(i){t.controlRef=i},t.focusedOptionRef=null,t.getFocusedOptionRef=function(i){t.focusedOptionRef=i},t.menuListRef=null,t.getMenuListRef=function(i){t.menuListRef=i},t.inputRef=null,t.getInputRef=function(i){t.inputRef=i},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(i,s){var c=t.props,d=c.onChange,f=c.name;s.name=f,t.ariaOnChange(i,s),d(i,s)},t.setValue=function(i,s,c){var d=t.props,f=d.closeMenuOnSelect,v=d.isMulti,x=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:x}),f&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(i,{action:s,option:c})},t.selectOption=function(i){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,f=s.name,v=t.state.selectValue,x=d&&t.isOptionSelected(i,v),E=t.isOptionDisabled(i,v);if(x){var h=t.getOptionValue(i);t.setValue(v.filter(function(g){return t.getOptionValue(g)!==h}),"deselect-option",i)}else if(!E)d?t.setValue([].concat(Le(v),[i]),"select-option",i):t.setValue(i,"select-option");else{t.ariaOnChange(i,{action:"select-option",option:i,name:f});return}c&&t.blurInput()},t.removeValue=function(i){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(i),f=c.filter(function(x){return t.getOptionValue(x)!==d}),v=de(s,f,f[0]||null);t.onChange(v,{action:"remove-value",removedValue:i}),t.focusInput()},t.clearValue=function(){var i=t.state.selectValue;t.onChange(de(t.props.isMulti,[],null),{action:"clear",removedValues:i})},t.popValue=function(){var i=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),f=de(i,d,d[0]||null);t.onChange(f,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(i){return Fe(t.state.focusableOptionsWithIds,i)},t.getFocusableOptionsWithIds=function(){return rt(pe(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return Rn.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(i){return It(t.props,i)},t.getOptionValue=function(i){return ge(t.props,i)},t.getStyles=function(i,s){var c=t.props.unstyled,d=$o[i](s,c);d.boxSizing="border-box";var f=t.props.styles[i];return f?f(d,s):d},t.getClassNames=function(i,s){var c,d;return(c=(d=t.props.classNames)[i])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(i){return"".concat(t.state.instancePrefix,"-").concat(i)},t.getComponents=function(){return io(t.props)},t.buildCategorizedOptions=function(){return pe(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Dt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(i,s){t.setState({ariaSelection:y({value:i},s)})},t.onMenuMouseDown=function(i){i.button===0&&(i.stopPropagation(),i.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(i){t.blockOptionHover=!1},t.onControlMouseDown=function(i){if(!i.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),i.target.tagName!=="INPUT"&&i.target.tagName!=="TEXTAREA"&&i.preventDefault()}},t.onDropdownIndicatorMouseDown=function(i){if(!(i&&i.type==="mousedown"&&i.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),i.preventDefault()}},t.onClearIndicatorMouseDown=function(i){i&&i.type==="mousedown"&&i.button!==0||(t.clearValue(),i.preventDefault(),t.openAfterFocus=!1,i.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(i){typeof t.props.closeMenuOnScroll=="boolean"?i.target instanceof HTMLElement&&ve(i.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(i)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(i){var s=i.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(i){var s=i.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),f=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||f>v}},t.onTouchEnd=function(i){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(i.target)&&t.menuListRef&&!t.menuListRef.contains(i.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(i){t.userIsDragging||t.onControlMouseDown(i)},t.onClearIndicatorTouchEnd=function(i){t.userIsDragging||t.onClearIndicatorMouseDown(i)},t.onDropdownIndicatorTouchEnd=function(i){t.userIsDragging||t.onDropdownIndicatorMouseDown(i)},t.handleInputChange=function(i){var s=t.props.inputValue,c=i.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(i){t.props.onFocus&&t.props.onFocus(i),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(i){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(i),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(i){if(!(t.blockOptionHover||t.state.focusedOption===i)){var s=t.getFocusableOptions(),c=s.indexOf(i);t.setState({focusedOption:i,focusedOptionId:c>-1?t.getFocusedOptionId(i):null})}},t.shouldHideSelectedOptions=function(){return Vt(t.props)},t.onValueInputFocus=function(i){i.preventDefault(),i.stopPropagation(),t.focus()},t.onKeyDown=function(i){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,f=s.escapeClearsValue,v=s.inputValue,x=s.isClearable,E=s.isDisabled,h=s.menuIsOpen,g=s.onKeyDown,P=s.tabSelectsValue,D=s.openMenuOnFocus,I=t.state,A=I.focusedOption,C=I.focusedValue,O=I.selectValue;if(!E&&!(typeof g=="function"&&(g(i),i.defaultPrevented))){switch(t.blockOptionHover=!0,i.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(C)t.removeValue(C);else{if(!d)return;c?t.popValue():x&&t.clearValue()}break;case"Tab":if(t.isComposing||i.shiftKey||!h||!P||!A||D&&t.isOptionSelected(A,O))return;t.selectOption(A);break;case"Enter":if(i.keyCode===229)break;if(h){if(!A||t.isComposing)return;t.selectOption(A);break}return;case"Escape":h?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):x&&f&&t.clearValue();break;case" ":if(v)return;if(!h){t.openMenu("first");break}if(!A)return;t.selectOption(A);break;case"ArrowUp":h?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":h?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!h)return;t.focusOption("pageup");break;case"PageDown":if(!h)return;t.focusOption("pagedown");break;case"Home":if(!h)return;t.focusOption("first");break;case"End":if(!h)return;t.focusOption("last");break;default:return}i.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++qo),t.state.selectValue=Ue(o.value),o.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[l],t.state.focusedOptionId=Fe(a,u[l])}return t}return On(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&_e(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,i=this.state.isFocused;(i&&!u&&t.isDisabled||i&&l&&!t.menuIsOpen)&&this.focusInput(),i&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!i&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(_e(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,l=u.selectValue,i=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(i&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var i=u.indexOf(l);l||(i=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":i===0?c=0:i===-1?c=s:c=i-1;break;case"next":i>-1&&i<s&&(c=i+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var i=0,s=l.indexOf(u);u||(s=-1),t==="up"?i=s>0?s-1:l.length-1:t==="down"?i=(s+1)%l.length:t==="pageup"?(i=s-a,i<0&&(i=0)):t==="pagedown"?(i=s+a,i>l.length-1&&(i=l.length-1)):t==="last"&&(i=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[i],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[i])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ye):y(y({},ye),this.props.theme):ye}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,i=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,f=d.isMulti,v=d.isRtl,x=d.options,E=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:l,getValue:i,hasValue:E,isMulti:f,isRtl:v,options:x,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return Pt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return At(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Mt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,l=t.inputId,i=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,f=t.required,v=this.getComponents(),x=v.Input,E=this.state,h=E.inputIsHidden,g=E.ariaSelection,P=this.commonProps,D=l||this.getElementId("input"),I=y(y(y({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":f,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(g==null?void 0:g.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(x,w({},P,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:D,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:i},I)):p.createElement(Eo,w({id:D,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:he,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},I))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,i=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,f=this.commonProps,v=this.props,x=v.controlShouldRenderValue,E=v.isDisabled,h=v.isMulti,g=v.inputValue,P=v.placeholder,D=this.state,I=D.selectValue,A=D.focusedValue,C=D.isFocused;if(!this.hasValue()||!x)return g?null:p.createElement(d,w({},f,{key:"placeholder",isDisabled:E,isFocused:C,innerProps:{id:this.getElementId("placeholder")}}),P);if(h)return I.map(function(F,V){var B=F===A,j="".concat(t.getOptionLabel(F),"-").concat(t.getOptionValue(F));return p.createElement(u,w({},f,{components:{Container:l,Label:i,Remove:s},isFocused:B,isDisabled:E,key:j,index:V,removeProps:{onClick:function(){return t.removeValue(F)},onTouchEnd:function(){return t.removeValue(F)},onMouseDown:function(N){N.preventDefault()}},data:F}),t.formatOptionLabel(F,"value"))});if(g)return null;var O=I[0];return p.createElement(c,w({},f,{data:O,isDisabled:E}),this.formatOptionLabel(O,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,l=this.props,i=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||i||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,l=this.props,i=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isDisabled:i,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,i=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,w({},l,{isDisabled:i,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,i=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:s,isDisabled:l,isFocused:i}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,i=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,f=a.NoOptionsMessage,v=a.Option,x=this.commonProps,E=this.state.focusedOption,h=this.props,g=h.captureMenuScroll,P=h.inputValue,D=h.isLoading,I=h.loadingMessage,A=h.minMenuHeight,C=h.maxMenuHeight,O=h.menuIsOpen,F=h.menuPlacement,V=h.menuPosition,B=h.menuPortalTarget,j=h.menuShouldBlockScroll,$=h.menuShouldScrollIntoView,N=h.noOptionsMessage,z=h.onMenuScrollToTop,T=h.onMenuScrollToBottom;if(!O)return null;var k=function(H,G){var Z=H.type,U=H.data,Q=H.isDisabled,Y=H.isSelected,se=H.label,Rt=H.value,Te=E===U,Be=Q?void 0:function(){return t.onOptionHover(U)},Tt=Q?void 0:function(){return t.selectOption(U)},$e="".concat(t.getElementId("option"),"-").concat(G),Bt={id:$e,onClick:Tt,onMouseMove:Be,onMouseOver:Be,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:Y};return p.createElement(v,w({},x,{innerProps:Bt,data:U,isDisabled:Q,isSelected:Y,key:$e,label:se,type:Z,value:Rt,isFocused:Te,innerRef:Te?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var H=R.data,G=R.options,Z=R.index,U="".concat(t.getElementId("group"),"-").concat(Z),Q="".concat(U,"-heading");return p.createElement(u,w({},x,{key:U,data:H,options:G,Heading:l,headingProps:{id:Q,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(Y){return k(Y,"".concat(Z,"-").concat(Y.index))}))}else if(R.type==="option")return k(R,"".concat(R.index))});else if(D){var W=I({inputValue:P});if(W===null)return null;_=p.createElement(d,x,W)}else{var X=N({inputValue:P});if(X===null)return null;_=p.createElement(f,x,X)}var J={minMenuHeight:A,maxMenuHeight:C,menuPlacement:F,menuPosition:V,menuShouldScrollIntoView:$},ue=p.createElement(Jn,w({},x,J),function(R){var H=R.ref,G=R.placerProps,Z=G.placement,U=G.maxHeight;return p.createElement(i,w({},x,J,{innerRef:H,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:D,placement:Z}),p.createElement(wo,{captureEnabled:g,onTopArrive:z,onBottomArrive:T,lockEnabled:j},function(Q){return p.createElement(s,w({},x,{innerRef:function(se){t.getMenuListRef(se),Q(se)},innerProps:{role:"listbox","aria-multiselectable":x.isMulti,id:t.getElementId("listbox")},isLoading:D,maxHeight:U,focusedOption:E}),_)}))});return B||V==="fixed"?p.createElement(c,w({},x,{appendTo:B,controlElement:this.controlRef,menuPlacement:F,menuPosition:V}),ue):ue}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,l=a.isDisabled,i=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(Po,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(i)if(u){var f=d.map(function(E){return t.getOptionValue(E)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:f})}else{var v=d.length>0?d.map(function(E,h){return p.createElement("input",{key:"i-".concat(h),name:s,type:"hidden",value:t.getOptionValue(E)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,v)}else{var x=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:x})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,i=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(ho,w({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:i,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,i=t.ValueContainer,s=this.props,c=s.className,d=s.id,f=s.isDisabled,v=s.menuIsOpen,x=this.state.isFocused,E=this.commonProps=this.getCommonProps();return p.createElement(l,w({},E,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:f,isFocused:x}),this.renderLiveRegion(),p.createElement(a,w({},E,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:f,isFocused:x,menuIsOpen:v}),p.createElement(i,w({},E,{isDisabled:f}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,w({},E,{isDisabled:f}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,i=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,f=a.instancePrefix,v=t.options,x=t.value,E=t.menuIsOpen,h=t.inputValue,g=t.isMulti,P=Ue(x),D={};if(u&&(x!==u.value||v!==u.options||E!==u.menuIsOpen||h!==u.inputValue)){var I=E?zo(t,P):[],A=E?rt(pe(t,P),"".concat(f,"-option")):[],C=l?Go(a,P):null,O=Yo(a,I),F=Fe(A,O);D={selectValue:P,focusedOption:O,focusedOptionId:F,focusableOptionsWithIds:A,focusedValue:C,clearFocusValueOnUpdate:!1}}var V=i!=null&&t!==u?{inputIsHidden:i,inputIsHiddenAfterUpdate:void 0}:{},B=s,j=c&&d;return c&&!j&&(B={value:de(g,P,P[0]||null),options:P,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&(B=null),y(y(y({},D),V),{},{prevProps:t,ariaSelection:B,prevWasFocused:j})}}]),r}(p.Component);Lt.defaultProps=No;var Ko=p.forwardRef(function(n,e){var r=yn(n);return p.createElement(Lt,w({ref:e},r))}),it=Ko;const Xo="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let at=(n=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(n));for(;n--;)e+=Xo[r[n]&63];return e};const Jo=M.form`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1440px) {
    &:before {
      content: 'Filters';
      position: absolute;
      top: -24px;
      right: 0;
      color: rgba(239, 237, 232, 0.5);
      font-size: 14px;
      line-height: 1.2857;
      word-wrap: break-word;
    }
  }
`,Zo=M.div`
  position: relative;
`,Qo=M.input`
  width: 100%;
  padding: 14px 68px 14px 14px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${b.colorInput};
  background: transparent;
  color: ${b.colorWhite};
  font-size: 14px;
  line-height: 1.42857;

  ::placeholder {
    color: ${b.colorWhite};
    font-size: 14px;
    line-height: 1.42857;
    font-weight: 400;
    word-wrap: break-word;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid ${b.colorOrange};
  }

  @media (min-width: 768px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`,ei=M.div`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    display: block;
    width: 18px;
    height: 18px;
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;

    &:hover > svg {
      stroke: ${b.colorBeige};
    }
  }
`,ti=M.svg`
  stroke: ${b.colorWhite};
  transition: stroke 0.3s ease;
`,ni=M.svg`
  stroke: ${b.colorOrange};
  transition: stroke 0.3s ease;
`,ri=M.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,oi={singleValue:n=>({...n,color:`${b.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${b.colorBeige}`:`${b.colorWhite}`,backgroundColor:"transparent",width:"146px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${b.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${b.colorOrange}`},":active":{border:`1px solid ${b.colorOrange}`},":focus":{outline:"none",border:`1px solid ${b.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"192px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:e,isDisabled:r,isFocused:o,isSelected:t})=>({...n,color:t?`${b.colorOrange1}`:o?`${b.colorBeige}`:e?`${b.colorBeige}`:`${b.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:r?"none":t?`${b.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${b.colorInput}`:"none"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${b.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${b.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${b.colorWhite}`})},ii={singleValue:n=>({...n,color:`${b.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${b.colorBeige}`:`${b.colorWhite}`,backgroundColor:"transparent",width:"173px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${b.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${b.colorOrange}`},":active":{border:`1px solid ${b.colorOrange}`},":focus":{outline:"none",border:`1px solid ${b.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"204px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:e,isDisabled:r,isFocused:o,isSelected:t})=>({...n,color:t?`${b.colorOrange1}`:o?`${b.colorBeige}`:e?`${b.colorBeige}`:`${b.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:r?"none":t?`${b.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${b.colorInput}`:"transparent"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${b.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${b.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${b.colorWhite}`})},ai=M.p`
  display: flex;
  color: ${b.colorSecondaryRed};
  font-size: 12px;
  margin: 0;
  line-height: 1.5;
  position: absolute;
  word-wrap: break-word;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${b.colorOrange};
  }
`,ui=({categories:n})=>{const e=Pe(),[r,o]=p.useState(!1),[t,a]=p.useState(""),[u,l]=p.useState(!1),[i,s]=p.useState(""),[c,d]=p.useState(""),[f,v]=p.useState(""),x=n.map(C=>C[0].toUpperCase()+C.slice(1).toLowerCase()),E=C=>[...C.map(O=>({value:O,label:O}))],h=[{value:"all",label:"All"},{value:"recommended",label:"Recommended"},{value:"not-recommended",label:"Not recommended"}],g=C=>{C&&C.preventDefault();const O={title:i||"",category:c||"",groupBloodNotAllowed:f||"all"};if(!(i.length<=40))a(`Please enter up to 30 characters, now ${i.length}`),l(!0);else{a(""),l(!1);try{e(oe(O))}catch{Me.error("Sorry, something went wrong, please try again",{theme:"dark"})}}},P=C=>{const O=C.target.value;o(O.length>0),s(O)},D=()=>{o(!1),s(""),e(oe({title:"",category:c||"",groupBloodNotAllowed:f||"all"}))},I=C=>{const O=C?C.value:null;d(O),e(oe({title:i||"",category:O||"",groupBloodNotAllowed:f||"all"}))},A=C=>{const O=C?C.value.toLowerCase():"all";v(O),e(oe({title:i||"",category:c||"",groupBloodNotAllowed:O||"all"}))};return m.jsxs(m.Fragment,{children:[m.jsxs(Jo,{onSubmit:g,noValidate:!0,children:[m.jsxs(Zo,{children:[m.jsx(Qo,{type:"text",name:"title",placeholder:"Search",value:i,onChange:P}),m.jsxs(ei,{children:[r&&m.jsx("button",{type:"button",onClick:D,children:m.jsx(ni,{children:m.jsx("use",{href:ee+"#icon-x"})})}),m.jsx("button",{type:"submit",children:m.jsx(ti,{children:m.jsx("use",{href:ee+"#icon-search"})})})]}),u&&m.jsxs(ai,{children:[m.jsx("svg",{children:m.jsx("use",{href:ee+"#icon-checkbox-circle-fill"})}),t]})]}),m.jsxs(ri,{children:[m.jsx(it,{id:at(),options:E(x),value:E(x).find(C=>C.value===c),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:I,placeholder:"Categories",styles:oi}),m.jsx(it,{id:at(),options:h,value:h.find(C=>C.value===f),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:A,placeholder:"All",styles:ii})]})]}),m.jsx(p.Suspense,{fallback:m.jsx(Ae,{}),children:m.jsx(jt,{})})]})},si=M.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`,li=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 64px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    margin-top: 132px;
    width: 580px;
  }

  @media (min-width: 1440px) {
    margin-top: 136px;
  }
`,ci=M.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${b.colorInput};

  > span {
    color: ${b.colorOrange};
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,di=M.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${b.colorOrange};

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,pi=({product:n,type:e,handleOpenModal:r})=>{const o=d=>[...d.map(f=>f[0].toUpperCase()+f.slice(1).toLowerCase())],{title:t,category:a,calories:u,weight:l}=n,i=o([t])[0],s=o([a])[0];let c;return e?c="Recommended":c="Not recommended",m.jsxs(Ht,{children:[m.jsx(Wt,{children:"DIET"}),m.jsxs("div",{style:{display:"flex",gap:"16px",alignSelf:"flex-end",flexWrap:"wrap"},children:[m.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[m.jsx(je,{children:e?m.jsx("use",{href:ee+"#icon-Ellipse-82",style:{fill:b.colorSecondaryGreen,stroke:b.colorSecondaryGreen}}):m.jsx("use",{href:ee+"#icon-Ellipse-82",style:{fill:b.colorSecondaryRed,stroke:b.colorSecondaryRed}})}),m.jsx(be,{children:c})]}),m.jsxs(Ut,{onClick:()=>r(n),children:["Add",m.jsx(je,{style:{width:"16px",height:"16px"},children:m.jsx("use",{href:ee+"#icon-arrow",style:{stroke:b.colorOrange}})})]})]}),m.jsxs(_t,{children:[m.jsx("svg",{style:{flexShrink:0,width:"24px",height:"24px"},children:m.jsx("use",{href:ee+"#icon-food-svgrepo-com",fill:"#e6533c"})}),m.jsx(Nt,{children:i})]}),m.jsxs(zt,{children:[m.jsxs(be,{children:[m.jsx("span",{children:"Calories:"}),u]}),m.jsxs(Gt,{children:[m.jsx("span",{children:"Category:"}),s]}),m.jsxs(be,{children:[m.jsx("span",{children:"Weight:"}),l]})]})]})},fi=M.div`
  padding: 48px 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,hi=M(on)`
  /* display: flex;
  flex-direction: column; */
  /* position: relative; */

  /* min-width: 335px;
  min-height: 280px; */

  /* padding: 48px 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px; */
  /* } */
`,mi=M.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;

  position: relative;
  justify-content: center;
  align-items: сenter;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  /* min-width: 335px;
  min-height: 280px; */
`,gi=M(ut)`
  border: 1px solid ${b.colorOrange};
  border-radius: 12px;
  padding: 8px 14px;
  width: 287px;
  height: 34px;
  /* width: 100%; */
  /* width: 287px; */
  @media screen and (min-width: 768px) {
    width: 244px;
    height: 40px;
  }
  color: ${b.colorWhite};
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: rgba(239, 237, 232, 0.4);
  }
`,vi=M(ut)`
  border: 1px solid ${b.colorOrange};
  border-radius: 12px;
  padding: 8px 14px;
  width: 100%;
  height: 34px;
  color: ${b.colorWhite};
  background-color: transparent;
  outline: none;

  position: relative;

  &::placeholder {
    color: rgba(239, 237, 232, 0.4);
  }
  width: 287px;
  @media screen and (min-width: 768px) {
    width: 155px;
    height: 40px;
  }
`,bi=M.span`
  position: absolute;
  right: 14px;
  bottom: 8px;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
  @media screen and (min-width: 768px) {
    bottom: 11px;
  }
`,xi=M.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`,Ei=M.span`
  color: #e6533c;
`,Ci=M.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`,kt=M.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${b.colorWhite};
  border: 0;
  border-radius: 12px;
  padding: 12px 32px;
  width: 151px;
  height: 42px;
  background-color: ${b.colorOrange};
  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,Si=M(kt)`
  color: ${b.colorWhite};
  /* background-color: ${b.colorBlack}; */
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  width: 121px;
  @media screen and (min-width: 768px) {
    width: 142px;
  }
`,yi=({productCategory:n,productTitle:e,calories:r,productId:o,onClick:t,closeModallAddProductForm:a})=>{const u=Pe(),[l,i]=p.useState({productId:"",date:"",amount:"",calories:"",title:"",category:""}),[s,c]=p.useState(0),[d,f]=p.useState(""),[v,x]=p.useState(!1),g=Yt(new Date).split("/"),P=`${g[0]}-${g[1]}-${g[2]}`,D=e[0].toUpperCase()+e.slice(1).toLowerCase(),I=async()=>{try{a(),t(l.calories),u(qt(l))}catch{Me.error("Sorry, something went wrong, please try again",{theme:"dark"})}},A=C=>{const O=parseFloat(C.target.value),F=parseFloat(r);if(!isNaN(O)&&!isNaN(F)){const V=Math.round(O*F/100);c(V),i({productId:o,date:P,amount:O,calories:V,title:e,category:n}),f(""),x(!1)}else c(r),i({productId:"",date:"",amount:"",calories:"",title:"",category:""})};return m.jsx(fi,{children:m.jsx(an,{initialValues:{name:"",mass:""},onSubmit:I,children:m.jsxs(hi,{children:[m.jsxs(mi,{children:[m.jsx(gi,{type:"text",name:"name",value:D,disabled:!0}),m.jsx(vi,{type:"number",name:"calories",autoComplete:"off",required:!0,step:"1",min:"1",max:"1000",onChange:A}),m.jsx(bi,{children:"grams"})]}),m.jsxs(xi,{children:["Calories: ",m.jsx(Ei,{children:s})]}),m.jsxs(Ci,{children:[m.jsx(kt,{type:"submit",children:"Add to diary"}),m.jsx(Si,{type:"button",onClick:()=>a(),children:"Cancel"})]})]})})})},Fi=M.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 89px;

  @media screen and (min-width: 768px) {
    padding: 64px 137px;
  }
`,Oi=M.img`
  width: 123px;
  height: 84px;

  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,wi=M.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  color: ${b.colorWhite};
  margin-bottom: 16px;
`,Di=M.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Ii=M.span`
  color: #e6533c;
`,Pi=M.button`
  /* display: block; */

  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${b.colorWhite};

  border-color: transparent;
  border-radius: 12px;
  /* padding: 12px 32px; */
  width: 157px;
  height: 42px;

  color: ${b.colorWhite};
  background-color: ${b.colorOrange};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    /* padding: 14px 32px; */
    height: 52px;
    line-height: 1.5;
  }
`,Ai=M.a`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`,Mi=M.svg`
  stroke: rgba(239, 237, 232, 0.3);
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,Vi="/PowerPulseTeamPoject/assets/avocado-46dd5bc9.png",Li=({calories:n,closeModalAddProductSuccess:e})=>m.jsxs(Fi,{children:[m.jsx(Oi,{src:Vi}),m.jsx(wi,{children:"Well done"}),m.jsxs(Di,{children:["Calories: ",m.jsx(Ii,{children:n})]}),m.jsx(Pi,{type:"button",onClick:()=>e(),children:"Next product"}),m.jsxs(Ai,{href:"/PowerPulseTeamPoject/diary",children:["to the Diary",m.jsx(Mi,{children:m.jsx("use",{href:`${ee}#icon-arrow`})})]})]}),ki=({products:n})=>{const e=ae(lt),[r,o]=p.useState(null),[t,a]=p.useState(!1),[u,l]=p.useState(null),i=f=>{a(!0),o(f),l(f),document.body.style.overflow="hidden"},s=()=>{t&&a(!1),o(null),l(null),document.body.style.overflow="visible"},d=ae(Kt).blood;return m.jsxs(m.Fragment,{children:[e&&m.jsx(Ae,{}),!e&&(n==null?void 0:n.length)>0&&m.jsx(si,{children:n.map(f=>m.jsx(pi,{product:f,type:f.groupBloodNotAllowed[d],handleOpenModal:i},f._id))}),!e&&(n==null?void 0:n.length)<=0&&m.jsxs(li,{children:[m.jsxs(ci,{children:[m.jsx("span",{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),m.jsx(di,{children:"Try changing the search parameters."})]}),r&&m.jsx(Xt,{isOpen:t,onRequestClose:s,children:typeof u=="object"?m.jsx(yi,{closeModallAddProductForm:s,calories:r.calories,productTitle:r.title,productId:r._id,product:u,onClick:i,productCategory:r.category}):m.jsx(Li,{calories:u,closeModalAddProductSuccess:s})})]})},Hi=()=>{const n=Pe(),e=ae(lt),r=ae(bn),o=ae(vn);return p.useEffect(()=>{(async()=>{try{await n(oe({title:"",category:null,groupBloodNotAllowed:"all"}))}catch{Me.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[n]),p.useEffect(()=>{n(Jt())},[n]),m.jsx(hn,{children:m.jsxs(Zt,{children:[m.jsxs(mn,{children:[m.jsx(Qt,{contentText:"Products"}),m.jsx(ui,{categories:r})]}),e?m.jsx(Ae,{}):m.jsx(gn,{children:m.jsx(ki,{products:o})})]})})};export{Hi as default};