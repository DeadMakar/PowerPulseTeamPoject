import{I as D,r as g,u as N,L as G,J as $,e as z,j as i,a as f,N as q,b as A,d as F,K as M,M as R,P as W,C as J,A as j,O as K,S as U,B as V}from"./index-1e801f3e.js";import{s as H}from"./sprite-492061c2.js";import{_ as Q,w as X,T as Y,g as Z,s as ee,r as te,u as ie,i as re}from"./emotion-element-c39617d8.browser.esm-0b5662b0.js";import{T as ae}from"./TitlePage-be66bbff.js";var ne=D,oe=function(e){return e!=="theme"},O=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?ne:oe},T=function(e,n,a){var t;if(n){var s=n.shouldForwardProp;t=e.__emotion_forwardProp&&s?function(c){return e.__emotion_forwardProp(c)&&s(c)}:s}return typeof t!="function"&&a&&(t=e.__emotion_forwardProp),t},se=function(e){var n=e.cache,a=e.serialized,t=e.isStringTag;return te(n,a,t),ie(function(){return re(n,a,t)}),null},le=function r(e,n){var a=e.__emotion_real===e,t=a&&e.__emotion_base||e,s,c;n!==void 0&&(s=n.label,c=n.target);var x=T(e,n,a),k=x||O(t),P=!k("as");return function(){var m=arguments,p=a&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&p.push("label:"+s+";"),m[0]==null||m[0].raw===void 0)p.push.apply(p,m);else{p.push(m[0][0]);for(var L=m.length,v=1;v<L;v++)p.push(m[v],m[0][v])}var l=X(function(o,u,I){var _=P&&o.as||t,h="",E=[],b=o;if(o.theme==null){b={};for(var S in o)b[S]=o[S];b.theme=g.useContext(Y)}typeof o.className=="string"?h=Z(u.registered,E,o.className):o.className!=null&&(h=o.className+" ");var C=ee(p.concat(E),u.registered,b);h+=u.key+"-"+C.name,c!==void 0&&(h+=" "+c);var B=P&&x===void 0?O(_):k,w={};for(var y in o)P&&y==="as"||B(y)&&(w[y]=o[y]);return w.className=h,w.ref=I,g.createElement(g.Fragment,null,g.createElement(se,{cache:u,serialized:C,isStringTag:typeof _=="string"}),g.createElement(_,w))});return l.displayName=s!==void 0?s:"Styled("+(typeof t=="string"?t:t.displayName||t.name||"Component")+")",l.defaultProps=e.defaultProps,l.__emotion_real=l,l.__emotion_base=t,l.__emotion_styles=p,l.__emotion_forwardProp=x,Object.defineProperty(l,"toString",{value:function(){return"."+c}}),l.withComponent=function(o,u){return r(o,Q({},n,u,{shouldForwardProp:T(l,u,!0)})).apply(void 0,p)},l}},de=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],d=le.bind();de.forEach(function(r){d[r]=d(r)});const ce=N.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,pe=N(G)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${r=>r.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: ${r=>r.isactive==="true"?"4px":"0"};
    background-color: #e6533c;
    border-radius: 2px;
    content: '';
    transition: height 0.3s;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }

  @media (max-width: 374px) {
    font-size: 18px;
  }
`,me=()=>{const r=["Body parts","Muscles","Equipment"],{filter:e}=$(),n=z(),a=e;return i.jsx(i.Fragment,{children:i.jsx(ce,{children:r.map(t=>i.jsx("li",{children:i.jsx(pe,{to:`/exercises/${t}`,state:{from:n},isactive:t===a?"true":"false",children:t})},t))})})},ue="/PowerPulseTeamPoject/assets/trainingGym-1-78b576d3.jpg",ge="/PowerPulseTeamPoject/assets/trainingGym-1@2x-7f8d3593.jpg",fe=d.div`
  /* border: 2px solid red;
  position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;

    margin-top: 78px;
    margin-bottom: 70px;
  }

  @media (max-width: 374px) {
  }
`;d.div`
  text-align: center;
`;d.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const he=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,xe=d.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: ${f.colorInput};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.167;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.167;
  }

  > svg {
    stroke: ${f.colorInput};
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    color: ${f.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${f.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,ve=d.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${ue});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${ge});
  }
`;d.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
  }
`;d(q)`
  position: relative;
  display: block;
  color: ${f.colorInput};

  &.active {
    color: ${f.colorWhite};

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: ${f.colorBlack};
      border-radius: 2px;
    }
  }
`;d.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;const _e=()=>{const r=A(),e=F(M),n=F(R),{filter:a,filterList:t}=$(),s=W(),c=z();return g.useEffect(()=>{(async()=>{a!==void 0&&t!==void 0&&t.trim()!==""?r(U({filter:a})):V.info("We are still awaiting for data",{theme:"dark"})})()},[r,a,t]),i.jsx(ve,{children:i.jsx(J,{children:i.jsx(he,{children:e?i.jsx(j,{}):i.jsxs("div",{children:[a!==void 0&&c.pathname.endsWith(a.replace(" ","%20"))?null:i.jsxs(xe,{onClick:()=>s(-1),children:[i.jsx("svg",{style:{fill:"none"},children:i.jsx("use",{href:H+"#icon-arrow-left"})}),"Back"]}),i.jsxs(fe,{children:[i.jsx(ae,{contentText:"Exercises"}),i.jsx(me,{})]}),e&&!n&&i.jsx(j,{}),i.jsx(g.Suspense,{fallback:i.jsx(j,{}),children:i.jsx(K,{})})]})})})})};export{_e as default};
