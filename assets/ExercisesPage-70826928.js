import{u as l,L as u,I as x,H as g,j as e,a,N as f,b,d as p,J as w,K as v,M as j,r as c,C as k,z as d,O as y,P as E,B as C}from"./index-3fdcfdcc.js";import{s as L}from"./sprite-963ba911.js";import{n as i,b as $,a as z}from"./trainingGym-1@2x-8171da17.js";import{T as B}from"./TitlePage-9ffb12b8.js";import"./emotion-element-c39617d8.browser.esm-a3bdf878.js";const P=l.ul`
  display: flex;
  margin-top: 28px;
  gap: 28px;

  @media (min-width: 768px) {
    gap: 32px;
  }
`,D=l(u)`
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
`,F=()=>{const t=["Body parts","Muscles","Equipment"],{filter:s}=x(),r=g(),n=s;return e.jsx(e.Fragment,{children:e.jsx(P,{children:t.map(o=>e.jsx("li",{children:e.jsx(D,{to:`/exercises/${o}`,state:{from:r},isactive:o===n?"true":"false",children:o})},o))})})},I=i.div`
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
  color: ${a.colorInput};
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
    stroke: ${a.colorInput};
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
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
      url(${$});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${z});
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
  color: rgba(239, 237, 232, 0.4);

  &.active {
    color: var(--color-text);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: var(--color-main-one);
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
`;const J=()=>{const t=b(),s=p(w),r=p(v),{filter:n,filterList:o}=x(),h=j(),m=g();return c.useEffect(()=>{(async()=>{n!==void 0&&o!==void 0&&o.trim()!==""?t(E({filter:n})):C.info("We are still awaiting for data",{theme:"dark"})})()},[t,n,o]),e.jsx(M,{children:e.jsx(k,{children:e.jsx(O,{children:s?e.jsx(d,{}):e.jsxs("div",{children:[n!==void 0&&m.pathname.endsWith(n.replace(" ","%20"))?null:e.jsxs(S,{onClick:()=>h(-1),children:[e.jsx("svg",{style:{fill:"none"},children:e.jsx("use",{href:L+"#icon-arrow-left"})}),"Back"]}),e.jsxs(I,{children:[e.jsx(B,{contentText:"Exercises"}),e.jsx(F,{})]}),s&&!r&&e.jsx(d,{}),e.jsx(c.Suspense,{fallback:e.jsx(d,{}),children:e.jsx(y,{})})]})})})})};export{J as default};
