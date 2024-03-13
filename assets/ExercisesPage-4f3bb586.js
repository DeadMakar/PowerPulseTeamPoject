import{u as t,L as m,a7 as l,h as x,j as e,a as o,d as u,b as d,a8 as f,a9 as w,aa as b,r as c,C as j,P as p,s as v,ab as k,O as E,D as y,ac as C}from"./index-f9efd9c2.js";import{T as P}from"./TitlePage-86106f0a.js";const L=t.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,$=t(m)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${i=>i.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: ${i=>i.isactive==="true"?"4px":"0"};
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
`,z=()=>{const i=["Body parts","Muscles","Equipment"],{filter:a}=l(),r=x(),s=a;return e.jsx(e.Fragment,{children:e.jsx(L,{children:i.map(n=>e.jsx("li",{children:e.jsx($,{to:`/exercises/${n}`,state:{from:r},isactive:n===s?"true":"false",children:n})},n))})})},B="/PowerPulseTeamPoject/assets/trainingGym-1-78b576d3.jpg",F="/PowerPulseTeamPoject/assets/trainingGym-1@2x-7f8d3593.jpg",D=t.div`
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
`,O=t.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: ${o.colorInput};
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
    stroke: ${o.colorInput};
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
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
`,G=t.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${B});
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
`,W=()=>{const i=u(),a=d(f),r=d(w),{filter:s,filterList:n}=l(),g=b(),h=x();return c.useEffect(()=>{(async()=>{s===void 0?y.info("We are still awating for data",{theme:"dark"}):i(C(s))})()},[i,s]),e.jsx(G,{children:e.jsx(j,{children:e.jsx(T,{children:a?e.jsx(p,{}):e.jsxs("div",{children:[s!==void 0&&h.pathname.endsWith(s.replace(" ","%20"))?null:e.jsxs(O,{onClick:()=>g(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:v+"#icon-arrow-left"})}),"Back"," "]}),e.jsxs(D,{children:[e.jsx(P,{contentText:n?k(n.split(" ")[0]):"Exercises"}),e.jsx(z,{})]}),a&&!r&&e.jsx(p,{}),e.jsx(e.Fragment,{children:e.jsx(c.Suspense,{children:e.jsx(E,{})})})]})})})})};export{W as default};
