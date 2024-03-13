import{f as t,L as h,av as p,e as l,j as e,h as o,a as m,u as c,aw as u,ax as f,ay as v,r as d,C as w,s as b,I as j,T as k,O as E,E as y,az as C}from"./index-ecb71782.js";import{T as L}from"./TitlePage-abe631da.js";import"./Logo.styled-b5e006e0.js";import"./MobileMenu.styled-688b45ba.js";import"./LogOutBtn.styled-4ab70f19.js";const $=t.ul`
  display: flex;
  margin-top: 20px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,z=t(h)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${i=>i.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: ${i=>i.isactive==="true"?"4px":"0"};
    background-color: #ef8964;
    border-radius: 2px;
    content: '';
    transition: height 0.3s;
  }

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,B=()=>{const i=["Body parts","Muscles","Equipment"],{filter:a}=p(),r=l(),s=a;return e.jsx(e.Fragment,{children:e.jsx($,{children:i.map(n=>e.jsx("li",{children:e.jsx(z,{to:`/exercises/${n}`,state:{from:r},isactive:n===s?"true":"false",children:n})},n))})})},F="/PowerPulseTeamPoject/assets/trainingGym-1@2x-7f8d3593.jpg",P=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 40px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 78px;
    margin-bottom: 70px;
  }
`;t.div`
  text-align: center;
`;t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const T=t.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,I=t.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  gap: 8px;
  color: ${o.colorInput};
  font-size: 14px;
  line-height: 1.29;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 30px;
    font-size: 16px;
    line-height: 1.5;
  }

  > svg {
    stroke: ${o.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${o.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${o.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,O=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%);
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${F});
  }
`,q=()=>{const i=m(),a=c(u),r=c(f),{filter:s,filterList:n}=p(),x=v(),g=l();return d.useEffect(()=>{(async()=>{s===void 0?y.info("We are still awating for data",{theme:"dark"}):i(C(s))})()},[i,s]),e.jsx(O,{children:e.jsx(w,{children:e.jsx(T,{children:e.jsxs("div",{children:[s!==void 0&&g.pathname.endsWith(s.replace(" ","%20"))?null:e.jsxs(I,{onClick:()=>x(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:b+"#icon-arrow-left"})}),"Back"," "]}),e.jsxs(P,{children:[e.jsx(L,{contentText:n?j(n.split(" ")[0]):"Exercises"}),e.jsx(B,{})]}),a&&!r?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx(d.Suspense,{children:e.jsx(E,{})})})]})})})})};export{q as default};
