import{u as t,L as h,a7 as l,h as p,j as e,a,d as m,b as c,a8 as u,a9 as f,aa as b,r as d,C as v,s as w,ab as j,P as k,O as E,D as y,ac as C}from"./index-b2771b47.js";import{T as L}from"./TitlePage-5a9ffa84.js";const $=t.ul`
  display: flex;
  margin-top: 20px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,P=t(h)`
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
`,z=()=>{const i=["Body parts","Muscles","Equipment"],{filter:o}=l(),r=p(),s=o;return e.jsx(e.Fragment,{children:e.jsx($,{children:i.map(n=>e.jsx("li",{children:e.jsx(P,{to:`/exercises/${n}`,state:{from:r},isactive:n===s?"true":"false",children:n})},n))})})},B="/PowerPulseTeamPoject/assets/trainingGym-1@2x-7f8d3593.jpg",F=t.div`
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
`;const D=t.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,O=t.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  gap: 8px;
  color: ${a.colorInput};
  font-size: 14px;
  line-height: 1.29;
  transition: color 0.3s ease;

  @media (min-width: 768px) {
    top: 30px;
    font-size: 16px;
    line-height: 1.5;
  }

  > svg {
    stroke: ${a.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${a.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${a.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,T=t.div`
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
      url(${B});
  }
`,M=()=>{const i=m(),o=c(u),r=c(f),{filter:s,filterList:n}=l(),x=b(),g=p();return d.useEffect(()=>{(async()=>{s===void 0?y.info("We are still awating for data",{theme:"dark"}):i(C(s))})()},[i,s]),e.jsx(T,{children:e.jsx(v,{children:e.jsx(D,{children:e.jsxs("div",{children:[s!==void 0&&g.pathname.endsWith(s.replace(" ","%20"))?null:e.jsxs(O,{onClick:()=>x(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:w+"#icon-arrow-left"})}),"Back"," "]}),e.jsxs(F,{children:[e.jsx(L,{contentText:n?j(n.split(" ")[0]):"Exercises"}),e.jsx(z,{})]}),o&&!r?e.jsx(k,{}):e.jsx(e.Fragment,{children:e.jsx(d.Suspense,{children:e.jsx(E,{})})})]})})})})};export{M as default};
