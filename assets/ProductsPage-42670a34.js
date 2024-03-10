import{r as p,u as O,a as g,D as Bt,b as at,j as f,A as Pe,O as jt,G as ie,B as ut,d as ae,q as Ht,H as Wt,C as Ut}from"./index-1e801f3e.js";import{T as _t}from"./TitlePage-be66bbff.js";import{h as zt,E as Nt,c as Gt,s as Yt,_ as w}from"./emotion-element-c39617d8.browser.esm-0b5662b0.js";import{b as qt,F as Kt,a as Xt}from"./formik.esm-933dd189.js";import{b as Zt}from"./floating-ui.dom-9d61e2db.js";import{s as q}from"./sprite-492061c2.js";function Jt(n,e){if(n==null)return{};var r={},i=Object.keys(n),t,a;for(a=0;a<i.length;a++)t=i[a],!(e.indexOf(t)>=0)&&(r[t]=n[t]);return r}var C=function(e,r){var i=arguments;if(r==null||!zt.call(r,"css"))return p.createElement.apply(void 0,i);var t=i.length,a=new Array(t);a[0]=Nt,a[1]=Gt(e,r);for(var u=2;u<t;u++)a[u]=i[u];return p.createElement.apply(null,a)};function Ae(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return Yt(e)}var Qt=function(){var e=Ae.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function te(n){"@babel/helpers - typeof";return te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te(n)}function en(n,e){if(te(n)!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var i=r.call(n,e||"default");if(te(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function st(n){var e=en(n,"string");return te(e)=="symbol"?e:String(e)}function Fe(n,e){return Fe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,t){return i.__proto__=t,i},Fe(n,e)}function tn(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}const nn="/PowerPulseTeamPoject/assets/products-bg-b7e77cea.jpg",rn="/PowerPulseTeamPoject/assets/products-bg@2x-9876be0a.jpg",on=O.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }

  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${nn});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${rn});
  }
`,an=O.div`
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
`,un=O.div`
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
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${g.colorOrange1};
    border-radius: 12px;
  }
`,sn=n=>n.products.productsArray,ln=n=>n.products.productsCategories,lt=n=>n.products.isLoadingProducts;function oe(n,e,r){return e=st(e),e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function $e(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})),r.push.apply(r,i)}return r}function S(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?$e(Object(r),!0).forEach(function(i){oe(n,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):$e(Object(r)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(r,i))})}return n}function cn(n){if(Array.isArray(n))return n}function dn(n,e){var r=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(r!=null){var i,t,a,u,l=[],o=!0,s=!1;try{if(a=(r=r.call(n)).next,e===0){if(Object(r)!==r)return;o=!1}else for(;!(o=(i=a.call(r)).done)&&(l.push(i.value),l.length!==e);o=!0);}catch(c){s=!0,t=c}finally{try{if(!o&&r.return!=null&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw t}}return l}}function Oe(n,e){(e==null||e>n.length)&&(e=n.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=n[r];return i}function ct(n,e){if(n){if(typeof n=="string")return Oe(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);if(r==="Object"&&n.constructor&&(r=n.constructor.name),r==="Map"||r==="Set")return Array.from(n);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Oe(n,e)}}function pn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function K(n,e){return cn(n)||dn(n,e)||ct(n,e)||pn()}function X(n,e){if(n==null)return{};var r=Jt(n,e),i,t;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var fn=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function hn(n){var e=n.defaultInputValue,r=e===void 0?"":e,i=n.defaultMenuIsOpen,t=i===void 0?!1:i,a=n.defaultValue,u=a===void 0?null:a,l=n.inputValue,o=n.menuIsOpen,s=n.onChange,c=n.onInputChange,d=n.onMenuClose,m=n.onMenuOpen,v=n.value,E=X(n,fn),x=p.useState(l!==void 0?l:r),h=K(x,2),b=h[0],A=h[1],I=p.useState(o!==void 0?o:t),P=K(I,2),M=P[0],y=P[1],D=p.useState(v!==void 0?v:u),F=K(D,2),V=F[0],$=F[1],j=p.useCallback(function(W,Z){typeof s=="function"&&s(W,Z),$(W)},[s]),B=p.useCallback(function(W,Z){var J;typeof c=="function"&&(J=c(W,Z)),A(J!==void 0?J:W)},[c]),z=p.useCallback(function(){typeof m=="function"&&m(),y(!0)},[m]),N=p.useCallback(function(){typeof d=="function"&&d(),y(!1)},[d]),T=l!==void 0?l:b,L=o!==void 0?o:M,_=v!==void 0?v:V;return S(S({},E),{},{inputValue:T,menuIsOpen:L,onChange:j,onInputChange:B,onMenuClose:N,onMenuOpen:z,value:_})}function mn(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Be(n,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,st(i.key),i)}}function gn(n,e,r){return e&&Be(n.prototype,e),r&&Be(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function vn(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&Fe(n,e)}function fe(n){return fe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},fe(n)}function dt(){try{var n=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(dt=function(){return!!n})()}function bn(n,e){if(e&&(te(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tn(n)}function xn(n){var e=dt();return function(){var i=fe(n),t;if(e){var a=fe(this).constructor;t=Reflect.construct(i,arguments,a)}else t=i.apply(this,arguments);return bn(this,t)}}function En(n){if(Array.isArray(n))return Oe(n)}function Cn(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Sn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Me(n){return En(n)||Cn(n)||ct(n)||Sn()}function yn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var De=p.useLayoutEffect,wn=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],he=function(){};function Fn(n,e){return e?e[0]==="-"?n+e:n+"__"+e:n}function On(n,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),t=2;t<r;t++)i[t-2]=arguments[t];var a=[].concat(i);if(e&&n)for(var u in e)e.hasOwnProperty(u)&&e[u]&&a.push("".concat(Fn(n,u)));return a.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var je=function(e){return Rn(e)?e.filter(Boolean):te(e)==="object"&&e!==null?[e]:[]},pt=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var r=X(e,wn);return S({},r)},k=function(e,r,i){var t=e.cx,a=e.getStyles,u=e.getClassNames,l=e.className;return{css:a(r,e),className:t(i??{},u(r,e),l)}};function ve(n){return[document.documentElement,document.body,window].indexOf(n)>-1}function Dn(n){return ve(n)?window.innerHeight:n.clientHeight}function ft(n){return ve(n)?window.pageYOffset:n.scrollTop}function me(n,e){if(ve(n)){window.scrollTo(0,e);return}n.scrollTop=e}function In(n){var e=getComputedStyle(n),r=e.position==="absolute",i=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var t=n;t=t.parentElement;)if(e=getComputedStyle(t),!(r&&e.position==="static")&&i.test(e.overflow+e.overflowY+e.overflowX))return t;return document.documentElement}function Pn(n,e,r,i){return r*((n=n/i-1)*n*n+1)+e}function le(n,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:he,t=ft(n),a=e-t,u=10,l=0;function o(){l+=u;var s=Pn(l,t,a,r);me(n,s),l<r?window.requestAnimationFrame(o):i(n)}o()}function He(n,e){var r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),t=e.offsetHeight/3;i.bottom+t>r.bottom?me(n,Math.min(e.offsetTop+e.clientHeight-n.offsetHeight+t,n.scrollHeight)):i.top-t<r.top&&me(n,Math.max(e.offsetTop-t,0))}function An(n){var e=n.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function We(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function Mn(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var ht=!1,Vn={get passive(){return ht=!0}},ce=typeof window<"u"?window:{};ce.addEventListener&&ce.removeEventListener&&(ce.addEventListener("p",he,Vn),ce.removeEventListener("p",he,!1));var kn=ht;function Ln(n){return n!=null}function Rn(n){return Array.isArray(n)}function de(n,e,r){return n?e:r}var Tn=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),t=1;t<r;t++)i[t-1]=arguments[t];var a=Object.entries(e).filter(function(u){var l=K(u,1),o=l[0];return!i.includes(o)});return a.reduce(function(u,l){var o=K(l,2),s=o[0],c=o[1];return u[s]=c,u},{})},$n=["children","innerProps"],Bn=["children","innerProps"];function jn(n){var e=n.maxHeight,r=n.menuEl,i=n.minHeight,t=n.placement,a=n.shouldScroll,u=n.isFixedPosition,l=n.controlHeight,o=In(r),s={placement:"bottom",maxHeight:e};if(!r||!r.offsetParent)return s;var c=o.getBoundingClientRect(),d=c.height,m=r.getBoundingClientRect(),v=m.bottom,E=m.height,x=m.top,h=r.offsetParent.getBoundingClientRect(),b=h.top,A=u?window.innerHeight:Dn(o),I=ft(o),P=parseInt(getComputedStyle(r).marginBottom,10),M=parseInt(getComputedStyle(r).marginTop,10),y=b-M,D=A-x,F=y+I,V=d-I-x,$=v-A+I+P,j=I+x-M,B=160;switch(t){case"auto":case"bottom":if(D>=E)return{placement:"bottom",maxHeight:e};if(V>=E&&!u)return a&&le(o,$,B),{placement:"bottom",maxHeight:e};if(!u&&V>=i||u&&D>=i){a&&le(o,$,B);var z=u?D-P:V-P;return{placement:"bottom",maxHeight:z}}if(t==="auto"||u){var N=e,T=u?y:F;return T>=i&&(N=Math.min(T-P-l,e)),{placement:"top",maxHeight:N}}if(t==="bottom")return a&&me(o,$),{placement:"bottom",maxHeight:e};break;case"top":if(y>=E)return{placement:"top",maxHeight:e};if(F>=E&&!u)return a&&le(o,j,B),{placement:"top",maxHeight:e};if(!u&&F>=i||u&&y>=i){var L=e;return(!u&&F>=i||u&&y>=i)&&(L=u?y-M:F-M),a&&le(o,j,B),{placement:"top",maxHeight:L}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(t,'".'))}return s}function Hn(n){var e={bottom:"top",top:"bottom"};return n?e[n]:"bottom"}var mt=function(e){return e==="auto"?"bottom":e},Wn=function(e,r){var i,t=e.placement,a=e.theme,u=a.borderRadius,l=a.spacing,o=a.colors;return S((i={label:"menu"},oe(i,Hn(t),"100%"),oe(i,"position","absolute"),oe(i,"width","100%"),oe(i,"zIndex",1),i),r?{}:{backgroundColor:o.neutral0,borderRadius:u,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},gt=p.createContext(null),Un=function(e){var r=e.children,i=e.minMenuHeight,t=e.maxMenuHeight,a=e.menuPlacement,u=e.menuPosition,l=e.menuShouldScrollIntoView,o=e.theme,s=p.useContext(gt)||{},c=s.setPortalPlacement,d=p.useRef(null),m=p.useState(t),v=K(m,2),E=v[0],x=v[1],h=p.useState(null),b=K(h,2),A=b[0],I=b[1],P=o.spacing.controlHeight;return De(function(){var M=d.current;if(M){var y=u==="fixed",D=l&&!y,F=jn({maxHeight:t,menuEl:M,minHeight:i,placement:a,shouldScroll:D,isFixedPosition:y,controlHeight:P});x(F.maxHeight),I(F.placement),c==null||c(F.placement)}},[t,a,u,l,i,c,P]),r({ref:d,placerProps:S(S({},e),{},{placement:A||mt(a),maxHeight:E})})},_n=function(e){var r=e.children,i=e.innerRef,t=e.innerProps;return C("div",w({},k(e,"menu",{menu:!0}),{ref:i},t),r)},zn=_n,Nn=function(e,r){var i=e.maxHeight,t=e.theme.spacing.baseUnit;return S({maxHeight:i,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},r?{}:{paddingBottom:t,paddingTop:t})},Gn=function(e){var r=e.children,i=e.innerProps,t=e.innerRef,a=e.isMulti;return C("div",w({},k(e,"menuList",{"menu-list":!0,"menu-list--is-multi":a}),{ref:t},i),r)},vt=function(e,r){var i=e.theme,t=i.spacing.baseUnit,a=i.colors;return S({textAlign:"center"},r?{}:{color:a.neutral40,padding:"".concat(t*2,"px ").concat(t*3,"px")})},Yn=vt,qn=vt,Kn=function(e){var r=e.children,i=r===void 0?"No options":r,t=e.innerProps,a=X(e,$n);return C("div",w({},k(S(S({},a),{},{children:i,innerProps:t}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),t),i)},Xn=function(e){var r=e.children,i=r===void 0?"Loading...":r,t=e.innerProps,a=X(e,Bn);return C("div",w({},k(S(S({},a),{},{children:i,innerProps:t}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),t),i)},Zn=function(e){var r=e.rect,i=e.offset,t=e.position;return{left:r.left,position:t,top:i,width:r.width,zIndex:1}},Jn=function(e){var r=e.appendTo,i=e.children,t=e.controlElement,a=e.innerProps,u=e.menuPlacement,l=e.menuPosition,o=p.useRef(null),s=p.useRef(null),c=p.useState(mt(u)),d=K(c,2),m=d[0],v=d[1],E=p.useMemo(function(){return{setPortalPlacement:v}},[]),x=p.useState(null),h=K(x,2),b=h[0],A=h[1],I=p.useCallback(function(){if(t){var D=An(t),F=l==="fixed"?0:window.pageYOffset,V=D[m]+F;(V!==(b==null?void 0:b.offset)||D.left!==(b==null?void 0:b.rect.left)||D.width!==(b==null?void 0:b.rect.width))&&A({offset:V,rect:D})}},[t,l,m,b==null?void 0:b.offset,b==null?void 0:b.rect.left,b==null?void 0:b.rect.width]);De(function(){I()},[I]);var P=p.useCallback(function(){typeof s.current=="function"&&(s.current(),s.current=null),t&&o.current&&(s.current=Zt(t,o.current,I,{elementResize:"ResizeObserver"in window}))},[t,I]);De(function(){P()},[P]);var M=p.useCallback(function(D){o.current=D,P()},[P]);if(!r&&l!=="fixed"||!b)return null;var y=C("div",w({ref:M},k(S(S({},e),{},{offset:b.offset,position:l,rect:b.rect}),"menuPortal",{"menu-portal":!0}),a),i);return C(gt.Provider,{value:E},r?Bt.createPortal(y,r):y)},Qn=function(e){var r=e.isDisabled,i=e.isRtl;return{label:"container",direction:i?"rtl":void 0,pointerEvents:r?"none":void 0,position:"relative"}},er=function(e){var r=e.children,i=e.innerProps,t=e.isDisabled,a=e.isRtl;return C("div",w({},k(e,"container",{"--is-disabled":t,"--is-rtl":a}),i),r)},tr=function(e,r){var i=e.theme.spacing,t=e.isMulti,a=e.hasValue,u=e.selectProps.controlShouldRenderValue;return S({alignItems:"center",display:t&&a&&u?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},r?{}:{padding:"".concat(i.baseUnit/2,"px ").concat(i.baseUnit*2,"px")})},nr=function(e){var r=e.children,i=e.innerProps,t=e.isMulti,a=e.hasValue;return C("div",w({},k(e,"valueContainer",{"value-container":!0,"value-container--is-multi":t,"value-container--has-value":a}),i),r)},rr=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},ir=function(e){var r=e.children,i=e.innerProps;return C("div",w({},k(e,"indicatorsContainer",{indicators:!0}),i),r)},Ue,or=["size"],ar=["innerProps","isRtl","size"],ur={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},bt=function(e){var r=e.size,i=X(e,or);return C("svg",w({height:r,width:r,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:ur},i))},Ve=function(e){return C(bt,w({size:20},e),C("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},xt=function(e){return C(bt,w({size:20},e),C("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},Et=function(e,r){var i=e.isFocused,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorContainer",display:"flex",transition:"color 150ms"},r?{}:{color:i?u.neutral60:u.neutral20,padding:a*2,":hover":{color:i?u.neutral80:u.neutral40}})},sr=Et,lr=function(e){var r=e.children,i=e.innerProps;return C("div",w({},k(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),i),r||C(xt,null))},cr=Et,dr=function(e){var r=e.children,i=e.innerProps;return C("div",w({},k(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),i),r||C(Ve,null))},pr=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing.baseUnit,u=t.colors;return S({label:"indicatorSeparator",alignSelf:"stretch",width:1},r?{}:{backgroundColor:i?u.neutral10:u.neutral20,marginBottom:a*2,marginTop:a*2})},fr=function(e){var r=e.innerProps;return C("span",w({},r,k(e,"indicatorSeparator",{"indicator-separator":!0})))},hr=Qt(Ue||(Ue=yn([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),mr=function(e,r){var i=e.isFocused,t=e.size,a=e.theme,u=a.colors,l=a.spacing.baseUnit;return S({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:t,lineHeight:1,marginRight:t,textAlign:"center",verticalAlign:"middle"},r?{}:{color:i?u.neutral60:u.neutral20,padding:l*2})},be=function(e){var r=e.delay,i=e.offset;return C("span",{css:Ae({animation:"".concat(hr," 1s ease-in-out ").concat(r,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:i?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},gr=function(e){var r=e.innerProps,i=e.isRtl,t=e.size,a=t===void 0?4:t,u=X(e,ar);return C("div",w({},k(S(S({},u),{},{innerProps:r,isRtl:i,size:a}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),r),C(be,{delay:0,offset:i}),C(be,{delay:160,offset:!0}),C(be,{delay:320,offset:!i}))},vr=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.theme,u=a.colors,l=a.borderRadius,o=a.spacing;return S({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:o.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},r?{}:{backgroundColor:i?u.neutral5:u.neutral0,borderColor:i?u.neutral10:t?u.primary:u.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:t?"0 0 0 1px ".concat(u.primary):void 0,"&:hover":{borderColor:t?u.primary:u.neutral30}})},br=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.innerRef,u=e.innerProps,l=e.menuIsOpen;return C("div",w({ref:a},k(e,"control",{control:!0,"control--is-disabled":i,"control--is-focused":t,"control--menu-is-open":l}),u,{"aria-disabled":i||void 0}),r)},xr=br,Er=["data"],Cr=function(e,r){var i=e.theme.spacing;return r?{}:{paddingBottom:i.baseUnit*2,paddingTop:i.baseUnit*2}},Sr=function(e){var r=e.children,i=e.cx,t=e.getStyles,a=e.getClassNames,u=e.Heading,l=e.headingProps,o=e.innerProps,s=e.label,c=e.theme,d=e.selectProps;return C("div",w({},k(e,"group",{group:!0}),o),C(u,w({},l,{selectProps:d,theme:c,getStyles:t,getClassNames:a,cx:i}),s),C("div",null,r))},yr=function(e,r){var i=e.theme,t=i.colors,a=i.spacing;return S({label:"group",cursor:"default",display:"block"},r?{}:{color:t.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:a.baseUnit*3,paddingRight:a.baseUnit*3,textTransform:"uppercase"})},wr=function(e){var r=pt(e);r.data;var i=X(r,Er);return C("div",w({},k(e,"groupHeading",{"group-heading":!0}),i))},Fr=Sr,Or=["innerRef","isDisabled","isHidden","inputClassName"],Dr=function(e,r){var i=e.isDisabled,t=e.value,a=e.theme,u=a.spacing,l=a.colors;return S(S({visibility:i?"hidden":"visible",transform:t?"translateZ(0)":""},Ir),r?{}:{margin:u.baseUnit/2,paddingBottom:u.baseUnit/2,paddingTop:u.baseUnit/2,color:l.neutral80})},Ct={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},Ir={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":S({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},Ct)},Pr=function(e){return S({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},Ct)},Ar=function(e){var r=e.cx,i=e.value,t=pt(e),a=t.innerRef,u=t.isDisabled,l=t.isHidden,o=t.inputClassName,s=X(t,Or);return C("div",w({},k(e,"input",{"input-container":!0}),{"data-value":i||""}),C("input",w({className:r({input:!0},o),ref:a,style:Pr(l),disabled:u},s)))},Mr=Ar,Vr=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors;return S({label:"multiValue",display:"flex",minWidth:0},r?{}:{backgroundColor:u.neutral10,borderRadius:a/2,margin:t.baseUnit/2})},kr=function(e,r){var i=e.theme,t=i.borderRadius,a=i.colors,u=e.cropWithEllipsis;return S({overflow:"hidden",textOverflow:u||u===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},r?{}:{borderRadius:t/2,color:a.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},Lr=function(e,r){var i=e.theme,t=i.spacing,a=i.borderRadius,u=i.colors,l=e.isFocused;return S({alignItems:"center",display:"flex"},r?{}:{borderRadius:a/2,backgroundColor:l?u.dangerLight:void 0,paddingLeft:t.baseUnit,paddingRight:t.baseUnit,":hover":{backgroundColor:u.dangerLight,color:u.danger}})},St=function(e){var r=e.children,i=e.innerProps;return C("div",i,r)},Rr=St,Tr=St;function $r(n){var e=n.children,r=n.innerProps;return C("div",w({role:"button"},r),e||C(Ve,{size:14}))}var Br=function(e){var r=e.children,i=e.components,t=e.data,a=e.innerProps,u=e.isDisabled,l=e.removeProps,o=e.selectProps,s=i.Container,c=i.Label,d=i.Remove;return C(s,{data:t,innerProps:S(S({},k(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":u})),a),selectProps:o},C(c,{data:t,innerProps:S({},k(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:o},r),C(d,{data:t,innerProps:S(S({},k(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(r||"option")},l),selectProps:o}))},jr=Br,Hr=function(e,r){var i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.theme,l=u.spacing,o=u.colors;return S({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},r?{}:{backgroundColor:a?o.primary:t?o.primary25:"transparent",color:i?o.neutral20:a?o.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:i?void 0:a?o.primary:o.primary50}})},Wr=function(e){var r=e.children,i=e.isDisabled,t=e.isFocused,a=e.isSelected,u=e.innerRef,l=e.innerProps;return C("div",w({},k(e,"option",{option:!0,"option--is-disabled":i,"option--is-focused":t,"option--is-selected":a}),{ref:u,"aria-disabled":i},l),r)},Ur=Wr,_r=function(e,r){var i=e.theme,t=i.spacing,a=i.colors;return S({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},r?{}:{color:a.neutral50,marginLeft:t.baseUnit/2,marginRight:t.baseUnit/2})},zr=function(e){var r=e.children,i=e.innerProps;return C("div",w({},k(e,"placeholder",{placeholder:!0}),i),r)},Nr=zr,Gr=function(e,r){var i=e.isDisabled,t=e.theme,a=t.spacing,u=t.colors;return S({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r?{}:{color:i?u.neutral40:u.neutral80,marginLeft:a.baseUnit/2,marginRight:a.baseUnit/2})},Yr=function(e){var r=e.children,i=e.isDisabled,t=e.innerProps;return C("div",w({},k(e,"singleValue",{"single-value":!0,"single-value--is-disabled":i}),t),r)},qr=Yr,Kr={ClearIndicator:dr,Control:xr,DropdownIndicator:lr,DownChevron:xt,CrossIcon:Ve,Group:Fr,GroupHeading:wr,IndicatorsContainer:ir,IndicatorSeparator:fr,Input:Mr,LoadingIndicator:gr,Menu:zn,MenuList:Gn,MenuPortal:Jn,LoadingMessage:Xn,NoOptionsMessage:Kn,MultiValue:jr,MultiValueContainer:Rr,MultiValueLabel:Tr,MultiValueRemove:$r,Option:Ur,Placeholder:Nr,SelectContainer:er,SingleValue:qr,ValueContainer:nr},Xr=function(e){return S(S({},Kr),e.components)},_e=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Zr(n,e){return!!(n===e||_e(n)&&_e(e))}function Jr(n,e){if(n.length!==e.length)return!1;for(var r=0;r<n.length;r++)if(!Zr(n[r],e[r]))return!1;return!0}function Qr(n,e){e===void 0&&(e=Jr);var r=null;function i(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];if(r&&r.lastThis===this&&e(t,r.lastArgs))return r.lastResult;var u=n.apply(this,t);return r={lastResult:u,lastArgs:t,lastThis:this},u}return i.clear=function(){r=null},i}var ei={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},ti=function(e){return C("span",w({css:ei},e))},ze=ti,ni={guidance:function(e){var r=e.isSearchable,i=e.isMulti,t=e.tabSelectsValue,a=e.context,u=e.isInitialFocus;switch(a){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(t?", press Tab to select the option and exit the menu":"",".");case"input":return u?"".concat(e["aria-label"]||"Select"," is focused ").concat(r?",type to refine list":"",", press Down to open the menu, ").concat(i?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var r=e.action,i=e.label,t=i===void 0?"":i,a=e.labels,u=e.isDisabled;switch(r){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(t,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(a.length>1?"s":""," ").concat(a.join(","),", selected.");case"select-option":return u?"option ".concat(t," is disabled. Select another option."):"option ".concat(t,", selected.");default:return""}},onFocus:function(e){var r=e.context,i=e.focused,t=e.options,a=e.label,u=a===void 0?"":a,l=e.selectValue,o=e.isDisabled,s=e.isSelected,c=e.isAppleDevice,d=function(x,h){return x&&x.length?"".concat(x.indexOf(h)+1," of ").concat(x.length):""};if(r==="value"&&l)return"value ".concat(u," focused, ").concat(d(l,i),".");if(r==="menu"&&c){var m=o?" disabled":"",v="".concat(s?" selected":"").concat(m);return"".concat(u).concat(v,", ").concat(d(t,i),".")}return""},onFilter:function(e){var r=e.inputValue,i=e.resultsMessage;return"".concat(i).concat(r?" for search term "+r:"",".")}},ri=function(e){var r=e.ariaSelection,i=e.focusedOption,t=e.focusedValue,a=e.focusableOptions,u=e.isFocused,l=e.selectValue,o=e.selectProps,s=e.id,c=e.isAppleDevice,d=o.ariaLiveMessages,m=o.getOptionLabel,v=o.inputValue,E=o.isMulti,x=o.isOptionDisabled,h=o.isSearchable,b=o.menuIsOpen,A=o.options,I=o.screenReaderStatus,P=o.tabSelectsValue,M=o.isLoading,y=o["aria-label"],D=o["aria-live"],F=p.useMemo(function(){return S(S({},ni),d||{})},[d]),V=p.useMemo(function(){var T="";if(r&&F.onChange){var L=r.option,_=r.options,W=r.removedValue,Z=r.removedValues,J=r.value,ue=function(Y){return Array.isArray(Y)?null:Y},R=W||L||ue(J),H=R?m(R):"",G=_||Z||void 0,Q=G?G.map(m):[],U=S({isDisabled:R&&x(R,l),label:H,labels:Q},r);T=F.onChange(U)}return T},[r,F,x,l,m]),$=p.useMemo(function(){var T="",L=i||t,_=!!(i&&l&&l.includes(i));if(L&&F.onFocus){var W={focused:L,label:m(L),isDisabled:x(L,l),isSelected:_,options:a,context:L===i?"menu":"value",selectValue:l,isAppleDevice:c};T=F.onFocus(W)}return T},[i,t,m,x,F,a,l,c]),j=p.useMemo(function(){var T="";if(b&&A.length&&!M&&F.onFilter){var L=I({count:a.length});T=F.onFilter({inputValue:v,resultsMessage:L})}return T},[a,v,b,F,A,I,M]),B=(r==null?void 0:r.action)==="initial-input-focus",z=p.useMemo(function(){var T="";if(F.guidance){var L=t?"value":b?"menu":"input";T=F.guidance({"aria-label":y,context:L,isDisabled:i&&x(i,l),isMulti:E,isSearchable:h,tabSelectsValue:P,isInitialFocus:B})}return T},[y,i,t,E,x,h,b,F,l,P,B]),N=C(p.Fragment,null,C("span",{id:"aria-selection"},V),C("span",{id:"aria-focused"},$),C("span",{id:"aria-results"},j),C("span",{id:"aria-guidance"},z));return C(p.Fragment,null,C(ze,{id:s},B&&N),C(ze,{"aria-live":D,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},u&&!B&&N))},ii=ri,Ie=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],oi=new RegExp("["+Ie.map(function(n){return n.letters}).join("")+"]","g"),yt={};for(var xe=0;xe<Ie.length;xe++)for(var Ee=Ie[xe],Ce=0;Ce<Ee.letters.length;Ce++)yt[Ee.letters[Ce]]=Ee.base;var wt=function(e){return e.replace(oi,function(r){return yt[r]})},ai=Qr(wt),Ne=function(e){return e.replace(/^\s+|\s+$/g,"")},ui=function(e){return"".concat(e.label," ").concat(e.value)},si=function(e){return function(r,i){if(r.data.__isNew__)return!0;var t=S({ignoreCase:!0,ignoreAccents:!0,stringify:ui,trim:!0,matchFrom:"any"},e),a=t.ignoreCase,u=t.ignoreAccents,l=t.stringify,o=t.trim,s=t.matchFrom,c=o?Ne(i):i,d=o?Ne(l(r)):l(r);return a&&(c=c.toLowerCase(),d=d.toLowerCase()),u&&(c=ai(c),d=wt(d)),s==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},li=["innerRef"];function ci(n){var e=n.innerRef,r=X(n,li),i=Tn(r,"onExited","in","enter","exit","appear");return C("input",w({ref:e},i,{css:Ae({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var di=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function pi(n){var e=n.isEnabled,r=n.onBottomArrive,i=n.onBottomLeave,t=n.onTopArrive,a=n.onTopLeave,u=p.useRef(!1),l=p.useRef(!1),o=p.useRef(0),s=p.useRef(null),c=p.useCallback(function(h,b){if(s.current!==null){var A=s.current,I=A.scrollTop,P=A.scrollHeight,M=A.clientHeight,y=s.current,D=b>0,F=P-M-I,V=!1;F>b&&u.current&&(i&&i(h),u.current=!1),D&&l.current&&(a&&a(h),l.current=!1),D&&b>F?(r&&!u.current&&r(h),y.scrollTop=P,V=!0,u.current=!0):!D&&-b>I&&(t&&!l.current&&t(h),y.scrollTop=0,V=!0,l.current=!0),V&&di(h)}},[r,i,t,a]),d=p.useCallback(function(h){c(h,h.deltaY)},[c]),m=p.useCallback(function(h){o.current=h.changedTouches[0].clientY},[]),v=p.useCallback(function(h){var b=o.current-h.changedTouches[0].clientY;c(h,b)},[c]),E=p.useCallback(function(h){if(h){var b=kn?{passive:!1}:!1;h.addEventListener("wheel",d,b),h.addEventListener("touchstart",m,b),h.addEventListener("touchmove",v,b)}},[v,m,d]),x=p.useCallback(function(h){h&&(h.removeEventListener("wheel",d,!1),h.removeEventListener("touchstart",m,!1),h.removeEventListener("touchmove",v,!1))},[v,m,d]);return p.useEffect(function(){if(e){var h=s.current;return E(h),function(){x(h)}}},[e,E,x]),function(h){s.current=h}}var Ge=["boxSizing","height","overflow","paddingRight","position"],Ye={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function qe(n){n.preventDefault()}function Ke(n){n.stopPropagation()}function Xe(){var n=this.scrollTop,e=this.scrollHeight,r=n+this.offsetHeight;n===0?this.scrollTop=1:r===e&&(this.scrollTop=n-1)}function Ze(){return"ontouchstart"in window||navigator.maxTouchPoints}var Je=!!(typeof window<"u"&&window.document&&window.document.createElement),re=0,ne={capture:!1,passive:!1};function fi(n){var e=n.isEnabled,r=n.accountForScrollbars,i=r===void 0?!0:r,t=p.useRef({}),a=p.useRef(null),u=p.useCallback(function(o){if(Je){var s=document.body,c=s&&s.style;if(i&&Ge.forEach(function(E){var x=c&&c[E];t.current[E]=x}),i&&re<1){var d=parseInt(t.current.paddingRight,10)||0,m=document.body?document.body.clientWidth:0,v=window.innerWidth-m+d||0;Object.keys(Ye).forEach(function(E){var x=Ye[E];c&&(c[E]=x)}),c&&(c.paddingRight="".concat(v,"px"))}s&&Ze()&&(s.addEventListener("touchmove",qe,ne),o&&(o.addEventListener("touchstart",Xe,ne),o.addEventListener("touchmove",Ke,ne))),re+=1}},[i]),l=p.useCallback(function(o){if(Je){var s=document.body,c=s&&s.style;re=Math.max(re-1,0),i&&re<1&&Ge.forEach(function(d){var m=t.current[d];c&&(c[d]=m)}),s&&Ze()&&(s.removeEventListener("touchmove",qe,ne),o&&(o.removeEventListener("touchstart",Xe,ne),o.removeEventListener("touchmove",Ke,ne)))}},[i]);return p.useEffect(function(){if(e){var o=a.current;return u(o),function(){l(o)}}},[e,u,l]),function(o){a.current=o}}var hi=function(e){var r=e.target;return r.ownerDocument.activeElement&&r.ownerDocument.activeElement.blur()},mi={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function gi(n){var e=n.children,r=n.lockEnabled,i=n.captureEnabled,t=i===void 0?!0:i,a=n.onBottomArrive,u=n.onBottomLeave,l=n.onTopArrive,o=n.onTopLeave,s=pi({isEnabled:t,onBottomArrive:a,onBottomLeave:u,onTopArrive:l,onTopLeave:o}),c=fi({isEnabled:r}),d=function(v){s(v),c(v)};return C(p.Fragment,null,r&&C("div",{onClick:hi,css:mi}),e(d))}var vi={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},bi=function(e){var r=e.name,i=e.onFocus;return C("input",{required:!0,name:r,tabIndex:-1,"aria-hidden":"true",onFocus:i,css:vi,value:"",onChange:function(){}})},xi=bi;function ke(n){var e;return typeof window<"u"&&window.navigator!=null?n.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ei(){return ke(/^iPhone/i)}function Ft(){return ke(/^Mac/i)}function Ci(){return ke(/^iPad/i)||Ft()&&navigator.maxTouchPoints>1}function Si(){return Ei()||Ci()}function yi(){return Ft()||Si()}var wi=function(e){return e.label},Fi=function(e){return e.label},Oi=function(e){return e.value},Di=function(e){return!!e.isDisabled},Ii={clearIndicator:cr,container:Qn,control:vr,dropdownIndicator:sr,group:Cr,groupHeading:yr,indicatorsContainer:rr,indicatorSeparator:pr,input:Dr,loadingIndicator:mr,loadingMessage:qn,menu:Wn,menuList:Nn,menuPortal:Zn,multiValue:Vr,multiValueLabel:kr,multiValueRemove:Lr,noOptionsMessage:Yn,option:Hr,placeholder:_r,singleValue:Gr,valueContainer:tr},Pi={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},Ai=4,Ot=4,Mi=38,Vi=Ot*2,ki={baseUnit:Ot,controlHeight:Mi,menuGutter:Vi},Se={borderRadius:Ai,colors:Pi,spacing:ki},Li={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:We(),captureMenuScroll:!We(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:si(),formatGroupLabel:wi,getOptionLabel:Fi,getOptionValue:Oi,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Di,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!Mn(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var r=e.count;return"".concat(r," result").concat(r!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Qe(n,e,r,i){var t=Pt(n,e,r),a=At(n,e,r),u=It(n,e),l=ge(n,e);return{type:"option",data:e,isDisabled:t,isSelected:a,label:u,value:l,index:i}}function pe(n,e){return n.options.map(function(r,i){if("options"in r){var t=r.options.map(function(u,l){return Qe(n,u,e,l)}).filter(function(u){return tt(n,u)});return t.length>0?{type:"group",data:r,options:t,index:i}:void 0}var a=Qe(n,r,e,i);return tt(n,a)?a:void 0}).filter(Ln)}function Dt(n){return n.reduce(function(e,r){return r.type==="group"?e.push.apply(e,Me(r.options.map(function(i){return i.data}))):e.push(r.data),e},[])}function et(n,e){return n.reduce(function(r,i){return i.type==="group"?r.push.apply(r,Me(i.options.map(function(t){return{data:t.data,id:"".concat(e,"-").concat(i.index,"-").concat(t.index)}}))):r.push({data:i.data,id:"".concat(e,"-").concat(i.index)}),r},[])}function Ri(n,e){return Dt(pe(n,e))}function tt(n,e){var r=n.inputValue,i=r===void 0?"":r,t=e.data,a=e.isSelected,u=e.label,l=e.value;return(!Vt(n)||!a)&&Mt(n,{label:u,value:l,data:t},i)}function Ti(n,e){var r=n.focusedValue,i=n.selectValue,t=i.indexOf(r);if(t>-1){var a=e.indexOf(r);if(a>-1)return r;if(t<e.length)return e[t]}return null}function $i(n,e){var r=n.focusedOption;return r&&e.indexOf(r)>-1?r:e[0]}var ye=function(e,r){var i,t=(i=e.find(function(a){return a.data===r}))===null||i===void 0?void 0:i.id;return t||null},It=function(e,r){return e.getOptionLabel(r)},ge=function(e,r){return e.getOptionValue(r)};function Pt(n,e,r){return typeof n.isOptionDisabled=="function"?n.isOptionDisabled(e,r):!1}function At(n,e,r){if(r.indexOf(e)>-1)return!0;if(typeof n.isOptionSelected=="function")return n.isOptionSelected(e,r);var i=ge(n,e);return r.some(function(t){return ge(n,t)===i})}function Mt(n,e,r){return n.filterOption?n.filterOption(e,r):!0}var Vt=function(e){var r=e.hideSelectedOptions,i=e.isMulti;return r===void 0?i:r},Bi=1,kt=function(n){vn(r,n);var e=xn(r);function r(i){var t;if(mn(this,r),t=e.call(this,i),t.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},t.blockOptionHover=!1,t.isComposing=!1,t.commonProps=void 0,t.initialTouchX=0,t.initialTouchY=0,t.openAfterFocus=!1,t.scrollToFocusedOptionOnUpdate=!1,t.userIsDragging=void 0,t.isAppleDevice=yi(),t.controlRef=null,t.getControlRef=function(o){t.controlRef=o},t.focusedOptionRef=null,t.getFocusedOptionRef=function(o){t.focusedOptionRef=o},t.menuListRef=null,t.getMenuListRef=function(o){t.menuListRef=o},t.inputRef=null,t.getInputRef=function(o){t.inputRef=o},t.focus=t.focusInput,t.blur=t.blurInput,t.onChange=function(o,s){var c=t.props,d=c.onChange,m=c.name;s.name=m,t.ariaOnChange(o,s),d(o,s)},t.setValue=function(o,s,c){var d=t.props,m=d.closeMenuOnSelect,v=d.isMulti,E=d.inputValue;t.onInputChange("",{action:"set-value",prevInputValue:E}),m&&(t.setState({inputIsHiddenAfterUpdate:!v}),t.onMenuClose()),t.setState({clearFocusValueOnUpdate:!0}),t.onChange(o,{action:s,option:c})},t.selectOption=function(o){var s=t.props,c=s.blurInputOnSelect,d=s.isMulti,m=s.name,v=t.state.selectValue,E=d&&t.isOptionSelected(o,v),x=t.isOptionDisabled(o,v);if(E){var h=t.getOptionValue(o);t.setValue(v.filter(function(b){return t.getOptionValue(b)!==h}),"deselect-option",o)}else if(!x)d?t.setValue([].concat(Me(v),[o]),"select-option",o):t.setValue(o,"select-option");else{t.ariaOnChange(o,{action:"select-option",option:o,name:m});return}c&&t.blurInput()},t.removeValue=function(o){var s=t.props.isMulti,c=t.state.selectValue,d=t.getOptionValue(o),m=c.filter(function(E){return t.getOptionValue(E)!==d}),v=de(s,m,m[0]||null);t.onChange(v,{action:"remove-value",removedValue:o}),t.focusInput()},t.clearValue=function(){var o=t.state.selectValue;t.onChange(de(t.props.isMulti,[],null),{action:"clear",removedValues:o})},t.popValue=function(){var o=t.props.isMulti,s=t.state.selectValue,c=s[s.length-1],d=s.slice(0,s.length-1),m=de(o,d,d[0]||null);t.onChange(m,{action:"pop-value",removedValue:c})},t.getFocusedOptionId=function(o){return ye(t.state.focusableOptionsWithIds,o)},t.getFocusableOptionsWithIds=function(){return et(pe(t.props,t.state.selectValue),t.getElementId("option"))},t.getValue=function(){return t.state.selectValue},t.cx=function(){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return On.apply(void 0,[t.props.classNamePrefix].concat(s))},t.getOptionLabel=function(o){return It(t.props,o)},t.getOptionValue=function(o){return ge(t.props,o)},t.getStyles=function(o,s){var c=t.props.unstyled,d=Ii[o](s,c);d.boxSizing="border-box";var m=t.props.styles[o];return m?m(d,s):d},t.getClassNames=function(o,s){var c,d;return(c=(d=t.props.classNames)[o])===null||c===void 0?void 0:c.call(d,s)},t.getElementId=function(o){return"".concat(t.state.instancePrefix,"-").concat(o)},t.getComponents=function(){return Xr(t.props)},t.buildCategorizedOptions=function(){return pe(t.props,t.state.selectValue)},t.getCategorizedOptions=function(){return t.props.menuIsOpen?t.buildCategorizedOptions():[]},t.buildFocusableOptions=function(){return Dt(t.buildCategorizedOptions())},t.getFocusableOptions=function(){return t.props.menuIsOpen?t.buildFocusableOptions():[]},t.ariaOnChange=function(o,s){t.setState({ariaSelection:S({value:o},s)})},t.onMenuMouseDown=function(o){o.button===0&&(o.stopPropagation(),o.preventDefault(),t.focusInput())},t.onMenuMouseMove=function(o){t.blockOptionHover=!1},t.onControlMouseDown=function(o){if(!o.defaultPrevented){var s=t.props.openMenuOnClick;t.state.isFocused?t.props.menuIsOpen?o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&t.onMenuClose():s&&t.openMenu("first"):(s&&(t.openAfterFocus=!0),t.focusInput()),o.target.tagName!=="INPUT"&&o.target.tagName!=="TEXTAREA"&&o.preventDefault()}},t.onDropdownIndicatorMouseDown=function(o){if(!(o&&o.type==="mousedown"&&o.button!==0)&&!t.props.isDisabled){var s=t.props,c=s.isMulti,d=s.menuIsOpen;t.focusInput(),d?(t.setState({inputIsHiddenAfterUpdate:!c}),t.onMenuClose()):t.openMenu("first"),o.preventDefault()}},t.onClearIndicatorMouseDown=function(o){o&&o.type==="mousedown"&&o.button!==0||(t.clearValue(),o.preventDefault(),t.openAfterFocus=!1,o.type==="touchend"?t.focusInput():setTimeout(function(){return t.focusInput()}))},t.onScroll=function(o){typeof t.props.closeMenuOnScroll=="boolean"?o.target instanceof HTMLElement&&ve(o.target)&&t.props.onMenuClose():typeof t.props.closeMenuOnScroll=="function"&&t.props.closeMenuOnScroll(o)&&t.props.onMenuClose()},t.onCompositionStart=function(){t.isComposing=!0},t.onCompositionEnd=function(){t.isComposing=!1},t.onTouchStart=function(o){var s=o.touches,c=s&&s.item(0);c&&(t.initialTouchX=c.clientX,t.initialTouchY=c.clientY,t.userIsDragging=!1)},t.onTouchMove=function(o){var s=o.touches,c=s&&s.item(0);if(c){var d=Math.abs(c.clientX-t.initialTouchX),m=Math.abs(c.clientY-t.initialTouchY),v=5;t.userIsDragging=d>v||m>v}},t.onTouchEnd=function(o){t.userIsDragging||(t.controlRef&&!t.controlRef.contains(o.target)&&t.menuListRef&&!t.menuListRef.contains(o.target)&&t.blurInput(),t.initialTouchX=0,t.initialTouchY=0)},t.onControlTouchEnd=function(o){t.userIsDragging||t.onControlMouseDown(o)},t.onClearIndicatorTouchEnd=function(o){t.userIsDragging||t.onClearIndicatorMouseDown(o)},t.onDropdownIndicatorTouchEnd=function(o){t.userIsDragging||t.onDropdownIndicatorMouseDown(o)},t.handleInputChange=function(o){var s=t.props.inputValue,c=o.currentTarget.value;t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange(c,{action:"input-change",prevInputValue:s}),t.props.menuIsOpen||t.onMenuOpen()},t.onInputFocus=function(o){t.props.onFocus&&t.props.onFocus(o),t.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(t.openAfterFocus||t.props.openMenuOnFocus)&&t.openMenu("first"),t.openAfterFocus=!1},t.onInputBlur=function(o){var s=t.props.inputValue;if(t.menuListRef&&t.menuListRef.contains(document.activeElement)){t.inputRef.focus();return}t.props.onBlur&&t.props.onBlur(o),t.onInputChange("",{action:"input-blur",prevInputValue:s}),t.onMenuClose(),t.setState({focusedValue:null,isFocused:!1})},t.onOptionHover=function(o){if(!(t.blockOptionHover||t.state.focusedOption===o)){var s=t.getFocusableOptions(),c=s.indexOf(o);t.setState({focusedOption:o,focusedOptionId:c>-1?t.getFocusedOptionId(o):null})}},t.shouldHideSelectedOptions=function(){return Vt(t.props)},t.onValueInputFocus=function(o){o.preventDefault(),o.stopPropagation(),t.focus()},t.onKeyDown=function(o){var s=t.props,c=s.isMulti,d=s.backspaceRemovesValue,m=s.escapeClearsValue,v=s.inputValue,E=s.isClearable,x=s.isDisabled,h=s.menuIsOpen,b=s.onKeyDown,A=s.tabSelectsValue,I=s.openMenuOnFocus,P=t.state,M=P.focusedOption,y=P.focusedValue,D=P.selectValue;if(!x&&!(typeof b=="function"&&(b(o),o.defaultPrevented))){switch(t.blockOptionHover=!0,o.key){case"ArrowLeft":if(!c||v)return;t.focusValue("previous");break;case"ArrowRight":if(!c||v)return;t.focusValue("next");break;case"Delete":case"Backspace":if(v)return;if(y)t.removeValue(y);else{if(!d)return;c?t.popValue():E&&t.clearValue()}break;case"Tab":if(t.isComposing||o.shiftKey||!h||!A||!M||I&&t.isOptionSelected(M,D))return;t.selectOption(M);break;case"Enter":if(o.keyCode===229)break;if(h){if(!M||t.isComposing)return;t.selectOption(M);break}return;case"Escape":h?(t.setState({inputIsHiddenAfterUpdate:!1}),t.onInputChange("",{action:"menu-close",prevInputValue:v}),t.onMenuClose()):E&&m&&t.clearValue();break;case" ":if(v)return;if(!h){t.openMenu("first");break}if(!M)return;t.selectOption(M);break;case"ArrowUp":h?t.focusOption("up"):t.openMenu("last");break;case"ArrowDown":h?t.focusOption("down"):t.openMenu("first");break;case"PageUp":if(!h)return;t.focusOption("pageup");break;case"PageDown":if(!h)return;t.focusOption("pagedown");break;case"Home":if(!h)return;t.focusOption("first");break;case"End":if(!h)return;t.focusOption("last");break;default:return}o.preventDefault()}},t.state.instancePrefix="react-select-"+(t.props.instanceId||++Bi),t.state.selectValue=je(i.value),i.menuIsOpen&&t.state.selectValue.length){var a=t.getFocusableOptionsWithIds(),u=t.buildFocusableOptions(),l=u.indexOf(t.state.selectValue[0]);t.state.focusableOptionsWithIds=a,t.state.focusedOption=u[l],t.state.focusedOptionId=ye(a,u[l])}return t}return gn(r,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&He(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(t){var a=this.props,u=a.isDisabled,l=a.menuIsOpen,o=this.state.isFocused;(o&&!u&&t.isDisabled||o&&l&&!t.menuIsOpen)&&this.focusInput(),o&&u&&!t.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!o&&!u&&t.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(He(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(t,a){this.props.onInputChange(t,a)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(t){var a=this,u=this.state,l=u.selectValue,o=u.isFocused,s=this.buildFocusableOptions(),c=t==="first"?0:s.length-1;if(!this.props.isMulti){var d=s.indexOf(l[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(o&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:s[c],focusedOptionId:this.getFocusedOptionId(s[c])},function(){return a.onMenuOpen()})}},{key:"focusValue",value:function(t){var a=this.state,u=a.selectValue,l=a.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var o=u.indexOf(l);l||(o=-1);var s=u.length-1,c=-1;if(u.length){switch(t){case"previous":o===0?c=0:o===-1?c=s:c=o-1;break;case"next":o>-1&&o<s&&(c=o+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:u[c]})}}}},{key:"focusOption",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",a=this.props.pageSize,u=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var o=0,s=l.indexOf(u);u||(s=-1),t==="up"?o=s>0?s-1:l.length-1:t==="down"?o=(s+1)%l.length:t==="pageup"?(o=s-a,o<0&&(o=0)):t==="pagedown"?(o=s+a,o>l.length-1&&(o=l.length-1)):t==="last"&&(o=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[o],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[o])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(Se):S(S({},Se),this.props.theme):Se}},{key:"getCommonProps",value:function(){var t=this.clearValue,a=this.cx,u=this.getStyles,l=this.getClassNames,o=this.getValue,s=this.selectOption,c=this.setValue,d=this.props,m=d.isMulti,v=d.isRtl,E=d.options,x=this.hasValue();return{clearValue:t,cx:a,getStyles:u,getClassNames:l,getValue:o,hasValue:x,isMulti:m,isRtl:v,options:E,selectOption:s,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var t=this.state.selectValue;return t.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var t=this.props,a=t.isClearable,u=t.isMulti;return a===void 0?u:a}},{key:"isOptionDisabled",value:function(t,a){return Pt(this.props,t,a)}},{key:"isOptionSelected",value:function(t,a){return At(this.props,t,a)}},{key:"filterOption",value:function(t,a){return Mt(this.props,t,a)}},{key:"formatOptionLabel",value:function(t,a){if(typeof this.props.formatOptionLabel=="function"){var u=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(t,{context:a,inputValue:u,selectValue:l})}else return this.getOptionLabel(t)}},{key:"formatGroupLabel",value:function(t){return this.props.formatGroupLabel(t)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var t=this.props,a=t.isDisabled,u=t.isSearchable,l=t.inputId,o=t.inputValue,s=t.tabIndex,c=t.form,d=t.menuIsOpen,m=t.required,v=this.getComponents(),E=v.Input,x=this.state,h=x.inputIsHidden,b=x.ariaSelection,A=this.commonProps,I=l||this.getElementId("input"),P=S(S(S({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":m,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!u&&{"aria-readonly":!0}),this.hasValue()?(b==null?void 0:b.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return u?p.createElement(E,w({},A,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:I,innerRef:this.getInputRef,isDisabled:a,isHidden:h,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:s,form:c,type:"text",value:o},P)):p.createElement(ci,w({id:I,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:he,onFocus:this.onInputFocus,disabled:a,tabIndex:s,inputMode:"none",form:c,value:""},P))}},{key:"renderPlaceholderOrValue",value:function(){var t=this,a=this.getComponents(),u=a.MultiValue,l=a.MultiValueContainer,o=a.MultiValueLabel,s=a.MultiValueRemove,c=a.SingleValue,d=a.Placeholder,m=this.commonProps,v=this.props,E=v.controlShouldRenderValue,x=v.isDisabled,h=v.isMulti,b=v.inputValue,A=v.placeholder,I=this.state,P=I.selectValue,M=I.focusedValue,y=I.isFocused;if(!this.hasValue()||!E)return b?null:p.createElement(d,w({},m,{key:"placeholder",isDisabled:x,isFocused:y,innerProps:{id:this.getElementId("placeholder")}}),A);if(h)return P.map(function(F,V){var $=F===M,j="".concat(t.getOptionLabel(F),"-").concat(t.getOptionValue(F));return p.createElement(u,w({},m,{components:{Container:l,Label:o,Remove:s},isFocused:$,isDisabled:x,key:j,index:V,removeProps:{onClick:function(){return t.removeValue(F)},onTouchEnd:function(){return t.removeValue(F)},onMouseDown:function(z){z.preventDefault()}},data:F}),t.formatOptionLabel(F,"value"))});if(b)return null;var D=P[0];return p.createElement(c,w({},m,{data:D,isDisabled:x}),this.formatOptionLabel(D,"value"))}},{key:"renderClearIndicator",value:function(){var t=this.getComponents(),a=t.ClearIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!a||o||!this.hasValue()||s)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var t=this.getComponents(),a=t.LoadingIndicator,u=this.commonProps,l=this.props,o=l.isDisabled,s=l.isLoading,c=this.state.isFocused;if(!a||!s)return null;var d={"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:d,isDisabled:o,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator,u=t.IndicatorSeparator;if(!a||!u)return null;var l=this.commonProps,o=this.props.isDisabled,s=this.state.isFocused;return p.createElement(u,w({},l,{isDisabled:o,isFocused:s}))}},{key:"renderDropdownIndicator",value:function(){var t=this.getComponents(),a=t.DropdownIndicator;if(!a)return null;var u=this.commonProps,l=this.props.isDisabled,o=this.state.isFocused,s={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return p.createElement(a,w({},u,{innerProps:s,isDisabled:l,isFocused:o}))}},{key:"renderMenu",value:function(){var t=this,a=this.getComponents(),u=a.Group,l=a.GroupHeading,o=a.Menu,s=a.MenuList,c=a.MenuPortal,d=a.LoadingMessage,m=a.NoOptionsMessage,v=a.Option,E=this.commonProps,x=this.state.focusedOption,h=this.props,b=h.captureMenuScroll,A=h.inputValue,I=h.isLoading,P=h.loadingMessage,M=h.minMenuHeight,y=h.maxMenuHeight,D=h.menuIsOpen,F=h.menuPlacement,V=h.menuPosition,$=h.menuPortalTarget,j=h.menuShouldBlockScroll,B=h.menuShouldScrollIntoView,z=h.noOptionsMessage,N=h.onMenuScrollToTop,T=h.onMenuScrollToBottom;if(!D)return null;var L=function(H,G){var Q=H.type,U=H.data,ee=H.isDisabled,Y=H.isSelected,se=H.label,Rt=H.value,Le=x===U,Re=ee?void 0:function(){return t.onOptionHover(U)},Tt=ee?void 0:function(){return t.selectOption(U)},Te="".concat(t.getElementId("option"),"-").concat(G),$t={id:Te,onClick:Tt,onMouseMove:Re,onMouseOver:Re,tabIndex:-1,role:"option","aria-selected":t.isAppleDevice?void 0:Y};return p.createElement(v,w({},E,{innerProps:$t,data:U,isDisabled:ee,isSelected:Y,key:Te,label:se,type:Q,value:Rt,isFocused:Le,innerRef:Le?t.getFocusedOptionRef:void 0}),t.formatOptionLabel(H.data,"menu"))},_;if(this.hasOptions())_=this.getCategorizedOptions().map(function(R){if(R.type==="group"){var H=R.data,G=R.options,Q=R.index,U="".concat(t.getElementId("group"),"-").concat(Q),ee="".concat(U,"-heading");return p.createElement(u,w({},E,{key:U,data:H,options:G,Heading:l,headingProps:{id:ee,data:R.data},label:t.formatGroupLabel(R.data)}),R.options.map(function(Y){return L(Y,"".concat(Q,"-").concat(Y.index))}))}else if(R.type==="option")return L(R,"".concat(R.index))});else if(I){var W=P({inputValue:A});if(W===null)return null;_=p.createElement(d,E,W)}else{var Z=z({inputValue:A});if(Z===null)return null;_=p.createElement(m,E,Z)}var J={minMenuHeight:M,maxMenuHeight:y,menuPlacement:F,menuPosition:V,menuShouldScrollIntoView:B},ue=p.createElement(Un,w({},E,J),function(R){var H=R.ref,G=R.placerProps,Q=G.placement,U=G.maxHeight;return p.createElement(o,w({},E,J,{innerRef:H,innerProps:{onMouseDown:t.onMenuMouseDown,onMouseMove:t.onMenuMouseMove},isLoading:I,placement:Q}),p.createElement(gi,{captureEnabled:b,onTopArrive:N,onBottomArrive:T,lockEnabled:j},function(ee){return p.createElement(s,w({},E,{innerRef:function(se){t.getMenuListRef(se),ee(se)},innerProps:{role:"listbox","aria-multiselectable":E.isMulti,id:t.getElementId("listbox")},isLoading:I,maxHeight:U,focusedOption:x}),_)}))});return $||V==="fixed"?p.createElement(c,w({},E,{appendTo:$,controlElement:this.controlRef,menuPlacement:F,menuPosition:V}),ue):ue}},{key:"renderFormField",value:function(){var t=this,a=this.props,u=a.delimiter,l=a.isDisabled,o=a.isMulti,s=a.name,c=a.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!l)return p.createElement(xi,{name:s,onFocus:this.onValueInputFocus});if(!(!s||l))if(o)if(u){var m=d.map(function(x){return t.getOptionValue(x)}).join(u);return p.createElement("input",{name:s,type:"hidden",value:m})}else{var v=d.length>0?d.map(function(x,h){return p.createElement("input",{key:"i-".concat(h),name:s,type:"hidden",value:t.getOptionValue(x)})}):p.createElement("input",{name:s,type:"hidden",value:""});return p.createElement("div",null,v)}else{var E=d[0]?this.getOptionValue(d[0]):"";return p.createElement("input",{name:s,type:"hidden",value:E})}}},{key:"renderLiveRegion",value:function(){var t=this.commonProps,a=this.state,u=a.ariaSelection,l=a.focusedOption,o=a.focusedValue,s=a.isFocused,c=a.selectValue,d=this.getFocusableOptions();return p.createElement(ii,w({},t,{id:this.getElementId("live-region"),ariaSelection:u,focusedOption:l,focusedValue:o,isFocused:s,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var t=this.getComponents(),a=t.Control,u=t.IndicatorsContainer,l=t.SelectContainer,o=t.ValueContainer,s=this.props,c=s.className,d=s.id,m=s.isDisabled,v=s.menuIsOpen,E=this.state.isFocused,x=this.commonProps=this.getCommonProps();return p.createElement(l,w({},x,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:m,isFocused:E}),this.renderLiveRegion(),p.createElement(a,w({},x,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:m,isFocused:E,menuIsOpen:v}),p.createElement(o,w({},x,{isDisabled:m}),this.renderPlaceholderOrValue(),this.renderInput()),p.createElement(u,w({},x,{isDisabled:m}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(t,a){var u=a.prevProps,l=a.clearFocusValueOnUpdate,o=a.inputIsHiddenAfterUpdate,s=a.ariaSelection,c=a.isFocused,d=a.prevWasFocused,m=a.instancePrefix,v=t.options,E=t.value,x=t.menuIsOpen,h=t.inputValue,b=t.isMulti,A=je(E),I={};if(u&&(E!==u.value||v!==u.options||x!==u.menuIsOpen||h!==u.inputValue)){var P=x?Ri(t,A):[],M=x?et(pe(t,A),"".concat(m,"-option")):[],y=l?Ti(a,A):null,D=$i(a,P),F=ye(M,D);I={selectValue:A,focusedOption:D,focusedOptionId:F,focusableOptionsWithIds:M,focusedValue:y,clearFocusValueOnUpdate:!1}}var V=o!=null&&t!==u?{inputIsHidden:o,inputIsHiddenAfterUpdate:void 0}:{},$=s,j=c&&d;return c&&!j&&($={value:de(b,A,A[0]||null),options:A,action:"initial-input-focus"},j=!d),(s==null?void 0:s.action)==="initial-input-focus"&&($=null),S(S(S({},I),V),{},{prevProps:t,ariaSelection:$,prevWasFocused:j})}}]),r}(p.Component);kt.defaultProps=Li;var ji=p.forwardRef(function(n,e){var r=hn(n);return p.createElement(kt,w({ref:e},r))}),nt=ji;const Hi="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let rt=(n=21)=>{let e="",r=crypto.getRandomValues(new Uint8Array(n));for(;n--;)e+=Hi[r[n]&63];return e};const Wi=O.form`
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
`,Ui=O.div`
  position: relative;
`,_i=O.input`
  width: 100%;
  padding: 14px 68px 14px 14px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid ${g.colorInput};
  background: transparent;
  color: ${g.colorWhite};
  font-size: 14px;
  line-height: 1.42857;

  ::placeholder {
    color: ${g.colorWhite};
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
    border: 1px solid ${g.colorOrange};
  }

  @media (min-width: 768px) {
    width: 236px;
    height: 52px;
    font-size: 16px;
    line-height: 1.5;
  }
`,zi=O.div`
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
      stroke: ${g.colorBeige};
    }
  }
`,Ni=O.svg`
  stroke: ${g.colorWhite};
  transition: stroke 0.3s ease;
`,Gi=O.svg`
  stroke: ${g.colorOrange};
  transition: stroke 0.3s ease;
`,Yi=O.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`,qi={singleValue:n=>({...n,color:`${g.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${g.colorBeige}`:`${g.colorWhite}`,backgroundColor:"transparent",width:"146px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${g.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${g.colorOrange}`},":active":{border:`1px solid ${g.colorOrange}`},":focus":{outline:"none",border:`1px solid ${g.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"192px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:e,isDisabled:r,isFocused:i,isSelected:t})=>({...n,color:t?`${g.colorOrange1}`:i?`${g.colorBeige}`:e?`${g.colorBeige}`:`${g.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:r?"none":t?`${g.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${g.colorInput}`:"none"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${g.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${g.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${g.colorWhite}`})},Ki={singleValue:n=>({...n,color:`${g.colorWhite}`}),control:(n,{isSelected:e})=>({...n,display:"flex",color:e?`${g.colorBeige}`:`${g.colorWhite}`,backgroundColor:"transparent",width:"173px",borderRadius:"12px",padding:"14px",lineHeight:"1.2857",fontSize:"14px",fontWeight:"400",outline:"none",border:`1px solid ${g.colorInput}`,boxShadow:"none",cursor:"pointer",wordWrap:"break-word",":hover":{border:`1px solid ${g.colorOrange}`},":active":{border:`1px solid ${g.colorOrange}`},":focus":{outline:"none",border:`1px solid ${g.colorOrange}`},"@media (min-width: 768px)":{fontSize:"16px",lineHeight:"1.5",width:"204px",height:"52px"},"@media (max-width: 375px)":{width:"88vw"}}),option:(n,{isHover:e,isDisabled:r,isFocused:i,isSelected:t})=>({...n,color:t?`${g.colorOrange1}`:i?`${g.colorBeige}`:e?`${g.colorBeige}`:`${g.colorWhite}`,fontSize:"14px",fontWeight:"400",lineHeight:"1.2857",cursor:"pointer",backgroundColor:r?"none":t?`${g.colorInput}`:"transparent",":active":{...n[":active"],backgroundColor:t?`${g.colorInput}`:"transparent"}}),menu:n=>({...n,backgroundColor:"#1C1C1C",padding:"14px",borderRadius:"12px",border:"none"}),menuList:n=>({...n,boxSizing:"content-box","&::-webkit-scrollbar":{width:"6px",position:"relative"},"&::-webkit-scrollbar-thumb":{borderRadius:"12px",background:"rgba(239, 237, 232, 0.1)"},"&::-webkit-scrollbar-track":{background:"transparent"}}),indicatorSeparator:()=>({display:"none"}),valueContainer:n=>({...n,padding:"0px",margin:"0px"}),clearIndicator:n=>({...n,padding:0,color:`${g.colorOrange}`,cursor:"pointer"}),dropdownIndicator:(n,e)=>({...n,padding:0,color:`${g.colorWhite}`,transition:"all .3s ease",transform:e.selectProps.menuIsOpen?"rotate(180deg)":null}),placeholder:n=>({...n,color:`${g.colorWhite}`})},Xi=O.p`
  display: flex;
  color: ${g.colorSecondaryRed};
  font-size: 12px;
  margin: 0;
  line-height: 1.5;
  position: absolute;
  word-wrap: break-word;

  > svg {
    width: 16px;
    height: 16px;
    fill: ${g.colorOrange};
  }
`,Zi=({categories:n})=>{const e=at(),[r,i]=p.useState(!1),[t,a]=p.useState(""),[u,l]=p.useState(!1),[o,s]=p.useState(""),[c,d]=p.useState(null),[m,v]=p.useState(null),E=n.map(y=>y[0].toUpperCase()+y.slice(1).toLowerCase()),x=y=>[...y.map(D=>({value:D,label:D}))],h=[{value:"all",label:"All"},{value:"recommended",label:"Recommended"},{value:"not-recommended",label:"Not recommended"}],b=y=>{y&&y.preventDefault();const D={title:o||"",category:c||null,filter:m||"all"};if(!(o.length<=40))a(`Please enter up to 30 characters, now ${o.length}`),l(!0);else{a(""),l(!1);try{e(ie(D))}catch{ut.error("Sorry, something went wrong, please try again",{theme:"dark"})}}},A=y=>{const D=y.target.value;i(D.length>0),s(D)},I=()=>{i(!1),s(""),e(ie({title:"",category:c||null,filter:m||"all"}))},P=y=>{const D=y?y.value:null;d(D),e(ie({title:o||"",category:D,filter:m||"all"}))},M=y=>{const D=y?y.value.toLowerCase():"all";v(D),e(ie({title:o||"",category:c||null,filter:D}))};return f.jsxs(f.Fragment,{children:[f.jsxs(Wi,{onSubmit:b,noValidate:!0,children:[f.jsxs(Ui,{children:[f.jsx(_i,{type:"text",name:"title",placeholder:"Search",value:o,onChange:A}),f.jsxs(zi,{children:[r&&f.jsx("button",{type:"button",onClick:I,children:f.jsx(Gi,{children:f.jsx("use",{href:q+"#icon-x"})})}),f.jsx("button",{type:"submit",children:f.jsx(Ni,{children:f.jsx("use",{href:q+"#icon-search"})})})]}),u&&f.jsxs(Xi,{children:[f.jsx("svg",{children:f.jsx("use",{href:q+"#icon-checkbox-circle-fill"})}),t]})]}),f.jsxs(Yi,{children:[f.jsx(nt,{id:rt(),options:x(E),value:x(E).find(y=>y.value===c),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:P,placeholder:"Categories",styles:qi}),f.jsx(nt,{id:rt(),options:h,value:h.find(y=>y.value===m),isSearchable:!1,isMulti:!1,isClearable:!0,onChange:M,placeholder:"All",styles:Ki})]})]}),f.jsx(p.Suspense,{fallback:f.jsx(Pe,{}),children:f.jsx(jt,{})})]})},Ji=O.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 768px) {
    gap: 32px 16px;
  }
`,Qi=O.div`
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
`,eo=O.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${g.colorInput};

  > span {
    color: ${g.colorOrange};
  }

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,to=O.p`
  line-height: 1.2857;
  word-wrap: break-word;
  color: ${g.colorOrange};

  @media (min-width: 768px) {
    line-height: 1.5;
    font-weight: 16px;
  }
`,no=O.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 12px;
  border: 1px rgba(239, 237, 232, 0.2) solid;

  @media (min-width: 320px) {
    width: 87vw;
  }

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 1440px) {
    width: 405px;
  }
`,ro=O.div`
  position: absolute;
  padding: 5px 7.5px;
  background: rgba(239, 237, 232, 0.05);
  border-radius: 4px;
  color: white;
  font-size: 12px;
  font-weight: 700;
  word-wrap: break-word;
`,it=O.svg`
  width: 14px;
  height: 14px;
`,we=O.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${g.colorWhite};
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;
`,io=O.p`
  > span {
    color: rgba(239, 237, 232, 0.4);
  }

  display: flex;
  gap: 4px;
  color: ${g.colorWhite};
  font-size: 12px;
  line-height: 1.5;
  word-wrap: break-word;
  white-space: nowrap;

  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`,oo=O.h2`
  color: ${g.colorWhite};
  font-size: 20px;
  line-height: 1.2;
  word-wrap: break-word;
  white-space: nowrap;
  overflow: auto;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`,ao=O.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${g.colorOrange};
  gap: 8px;
  width: 49px;
  height: 18px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;

  font-size: 14px;
  line-height: 1.2857;
  word-wrap: break-word;

  @media (min-width: 768px) {
    width: 53px;
    font-size: 16px;
    line-height: 1.5;
  }

  transition: color 0.3s ease;

  &:hover {
    color: ${g.colorOrange1};
  }
`,uo=O.div`
  display: flex;
  gap: 16px;
  margin-top: 41px;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 30px;
  }

  @media (max-width: 335px) {
    flex-wrap: wrap;
  }
`,so=O.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
  align-items: center;
`,lo=({product:n,type:e,handleOpenModal:r})=>{const i=d=>[...d.map(m=>m[0].toUpperCase()+m.slice(1).toLowerCase())],{title:t,category:a,calories:u,weight:l}=n,o=i([t])[0],s=i([a])[0];let c;return e?c="Recommended":c="Not recommended",f.jsxs(no,{children:[f.jsx(ro,{children:"DIET"}),f.jsxs("div",{style:{display:"flex",gap:"16px",alignSelf:"flex-end",flexWrap:"wrap"},children:[f.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[f.jsx(it,{children:e?f.jsx("use",{href:q+"#icon-Ellipse-82",style:{fill:g.colorSecondaryGreen,stroke:g.colorSecondaryGreen}}):f.jsx("use",{href:q+"#icon-Ellipse-82",style:{fill:g.colorSecondaryRed,stroke:g.colorSecondaryRed}})}),f.jsx(we,{children:c})]}),f.jsxs(ao,{onClick:()=>r(n),children:["Add",f.jsx(it,{style:{width:"16px",height:"16px"},children:f.jsx("use",{href:q+"#icon-arrow",style:{stroke:g.colorOrange}})})]})]}),f.jsxs(uo,{children:[f.jsx("svg",{style:{flexShrink:0,width:"24px",height:"24px"},children:f.jsx("use",{href:q+"#icon-running-stick-figure-svgrepo-com-1"})}),f.jsx(oo,{children:o})]}),f.jsxs(so,{children:[f.jsxs(we,{children:[f.jsx("span",{children:"Calories:"}),u]}),f.jsxs(io,{children:[f.jsx("span",{children:"Category:"}),s]}),f.jsxs(we,{children:[f.jsx("span",{children:"Weight:"}),l]})]})]})},co=O.div`
  position: fixed;
  top: 0;
  left: 0;
  /* padding: 0 20px; */

  width: 100vw;
  height: 100vh;

  /* background-color: #10100f; */
`,po=O.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;
  background-color: #10100f;

  /* padding: 48px 24px; */

  /* @media screen and (max-width: 374px) {
    min-width: 300px;
    min-height: 362px;
  } */

  /* @media screen and (min-width: 375px) {
    min-width: 335px;
    min-height: 362px;
  } */

  /* @media screen and (min-width: 768px) {
    min-width: 430px;
    min-height: 428px;
    padding: 64px 24px;
  } */
`,fo=O.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  stroke: ${g.colorWhite};

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }

  &:hover,
  &:focus {
    stroke: ${g.colorOrange};
  }
`,ho=({children:n})=>f.jsx(co,{children:f.jsxs(po,{children:[f.jsx(fo,{children:f.jsx("use",{href:`${q}#icon-x`})}),n]})}),mo=O(qt)`
  display: flex;
  flex-direction: column;
  /* position: relative; */

  /* min-width: 335px;
  min-height: 280px; */

  padding: 48px 24px;

  @media screen and (min-width: 768px) {
    padding: 48px 32px;
  }
`,go=O.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  position: relative;
  /* justify-content: center;
  align-items: сenter; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`,ot=O(Kt)`
  border: 1px solid ${g.colorOrange};
  border-radius: 12px;
  padding: 8px 14px;
  /* max-width: 287px; */
  /* min-height: 34px; */
  width: 100%;
  color: ${g.colorWhite};
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: rgba(239, 237, 232, 0.4);
  }
`,vo=O.div`
  position: relative;
`,bo=O.span`
  position: absolute;
  right: 14px;
  bottom: 10px;

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgba(239, 237, 232, 0.4);
`,xo=O.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Eo=O.span`
  color: #e6533c;
`,Co=O.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`,Lt=O.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: ${g.colorWhite};
  border: 0;
  border-radius: 12px;
  padding: 12px 32px;
  min-width: 151px;
  min-height: 42px;
  background-color: ${g.colorOrange};
`,So=O(Lt)`
  color: ${g.colorWhite};
  /* background-color: ${g.colorBlack}; */
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
`,yo=({caloriesPlus:n,onAddProduct:e})=>f.jsx(Xt,{onSubmit:(r,i)=>{e(r),i.resetForm()},children:f.jsxs(mo,{children:[f.jsxs(go,{children:[f.jsx(ot,{type:"text",name:"name",placeholder:"Banana"}),f.jsxs(vo,{children:[f.jsx(ot,{type:"text",name:"mass"}),f.jsx(bo,{children:"grams"})]})]}),f.jsxs(xo,{children:["Calories: ",f.jsxs(Eo,{children:["96 ",n]})]}),f.jsxs(Co,{children:[f.jsx(Lt,{type:"submit",children:"Add to diary"}),f.jsx(So,{type:"button",children:"Cancel "})]})]})}),wo=O.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 89px;

  @media screen and (min-width: 768px) {
    padding: 64px 137px;
  }
`,Fo=O.img`
  width: 123px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Oo=O.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  color: ${g.colorWhite};
  margin-bottom: 16px;
`,Do=O.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,Io=O.span`
  color: #e6533c;
`,Po=O.a`
  display: block;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${g.colorWhite};

  border-radius: 12px;
  padding: 12px 32px;
  min-width: 157px;
  /* height: 42px; */
  color: ${g.colorWhite};
  background-color: ${g.colorOrange};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    height: 52px;
  }
`,Ao=O.a`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`,Mo=O.svg`
  stroke: rgba(239, 237, 232, 0.3);
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,Vo="/PowerPulseTeamPoject/assets/avocado-46dd5bc9.png",ko=({caloriesPlus:n})=>f.jsxs(wo,{children:[f.jsx(Fo,{src:Vo}),f.jsx(Oo,{children:"Well done"}),f.jsxs(Do,{children:["Calories: ",f.jsxs(Io,{children:["96 ",n]})]}),f.jsx(Po,{href:"",children:"Next product"})," ",f.jsxs(Ao,{href:"/PowerPulseTeamPoject/diary",children:["to the Diary",f.jsx(Mo,{children:f.jsx("use",{href:`${q}#icon-arrow`})})]})]}),Lo=({products:n})=>{const e=ae(lt),[r,i]=p.useState(null),[t,a]=p.useState(!1),[u,l]=p.useState(null),o=m=>{a(!0),i(m),l(m)},s=()=>{t&&a(!1),i(null),l(null)},d=ae(Ht).blood;return f.jsxs(f.Fragment,{children:[e&&f.jsx(Pe,{}),!e&&n.length>0&&f.jsx(Ji,{children:n.map(m=>f.jsx(lo,{product:m,type:m.groupBloodNotAllowed[d],handleOpenModal:o},m._id))}),!e&&n.length<=0&&f.jsxs(Qi,{children:[f.jsxs(eo,{children:[f.jsx("span",{children:"Sorry, no results were found"})," for the product filters you selected. You may want to consider other search options to find the product you want. Our range is wide and you have the opportunity to find more options that suit your needs."]}),f.jsx(to,{children:"Try changing the search parameters."})]}),r&&f.jsx(ho,{isOpen:t,onRequestClose:s,children:typeof u=="object"?f.jsx(yo,{closeModallAddProductForm:s,calories:r.calories,productTitle:r.title,productId:r._id,product:u,onClick:o}):f.jsx(ko,{calories:u,closeModalAddProductSuccess:s})})]})},Wo=()=>{const n=at(),e=ae(lt),r=ae(ln),i=ae(sn);return p.useEffect(()=>{(async()=>{try{await n(ie({title:"",category:null,filter:"all"}))}catch{ut.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[n]),p.useEffect(()=>{n(Wt())},[n]),f.jsx(on,{children:f.jsxs(Ut,{children:[f.jsxs(an,{children:[f.jsx(_t,{title:"Products Page"}),f.jsx(Zi,{categories:r.map(t=>t.title)})]}),e?f.jsx(Pe,{}):f.jsx(un,{children:f.jsx(Lo,{products:i})})]})})};export{Wo as default};
