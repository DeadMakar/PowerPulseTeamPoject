import{u as l,L as u,I as x,e as g,j as e,a as s,N as f,b as w,d as p,J as b,K as v,M as k,r as c,C as j,A as d,O as y,P as E,B as $}from"./index-dfe625f8.js";import{s as C}from"./sprite-ecd86371.js";import{n as i,b as L,a as B}from"./trainingGym-1@2x-9e148616.js";import{T as z}from"./TitlePage-670bff6c.js";import"./emotion-element-c39617d8.browser.esm-8d2e4b8d.js";const I=l.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,P=l(u)`
  color: rgba(239, 237, 232, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  word-wrap: break-word;

  color: ${t=>t.isactive==="true"?"#EFEDE8":""};
  position: relative;

  &:after {
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: ${t=>t.isactive==="true"?"4px":"0"};
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
`,D=()=>{const t=["Body parts","Muscles","Equipment"],{filter:a}=x(),r=g(),n=a;return e.jsx(e.Fragment,{children:e.jsx(I,{children:t.map(o=>e.jsx("li",{children:e.jsx(P,{to:`/exercises/${o}`,state:{from:r},isactive:o===n?"true":"false",children:o})},o))})})},F=i.div`
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
`;i.div`
  text-align: center;
`;i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;const O=i.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`,S=i.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: ${s.colorInput};
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
    stroke: ${s.colorInput};
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    color: ${s.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${s.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`,M=i.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${L});
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
`;i.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
  }
`;i(f)`
  position: relative;
  display: block;
  color: ${s.colorInput};

  &.active {
    color: ${s.colorWhite};

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: ${s.colorBlack};
      border-radius: 2px;
    }
  }
`;i.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;const J=()=>{const t=w(),a=p(b),r=p(v),{filter:n,filterList:o}=x(),h=k(),m=g();return c.useEffect(()=>{(async()=>{n!==void 0&&o!==void 0&&o.trim()!==""?t(E({filter:n})):$.info("We are still awaiting for data",{theme:"dark"})})()},[t,n,o]),e.jsx(M,{children:e.jsx(j,{children:e.jsx(O,{children:a?e.jsx(d,{}):e.jsxs("div",{children:[n!==void 0&&m.pathname.endsWith(n.replace(" ","%20"))?null:e.jsxs(S,{onClick:()=>h(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:C+"#icon-arrow-left"})}),"Back"]}),e.jsxs(F,{children:[e.jsx(z,{contentText:"Exercises"}),e.jsx(D,{})]}),a&&!r&&e.jsx(d,{}),e.jsx(c.Suspense,{fallback:e.jsx(d,{}),children:e.jsx(y,{})})]})})})})};export{J as default};
