import{u as e,a as n,N as o,j as i}from"./index-72062358.js";import{L as t}from"./Logo-4881b654.js";import{b as d,a as r,c as a,d as s,e as p,f as l}from"./bgMobile@2x-c00288ab.js";const c=e.div`
  display: flex;
`,x=e.div`
  height: 100vh;
  width: 36%;
  background-image: url(${d});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right bottom;

  @media screen and (min-device-pixel-radio: 2) and (min-width: 320px),
    screen and (min-resolution: 192dpi) and (min-width: 320px),
    screen and (min-resolution: 2dppx) and (min-width: 320px) {
    background-image: url(${r});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${a});
    width: 45%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 768px),
      screen and (min-resolution: 192dpi) and (min-width: 768px),
      screen and (min-resolution: 2dppx) and (min-width: 768px) {
      background-image: url(${s});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${p});
    width: 54%;

    @media screen and (min-device-pixel-radio: 2) and (min-width: 1440px),
      screen and (min-resolution: 192dpi) and (min-width: 1440px),
      screen and (min-resolution: 2dppx) and (min-width: 1440px) {
      background-image: url(${l});
    }
  }
`,h=e.div`
  background-color: ${n.colorOrange};
  height: 100vh;
  flex: 1;
`,m=e.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  @media screen and (min-width: 320px) {
    padding: 20px;
  }

  @media screen and (min-width: 375px) {
    padding: 24px 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 32px 96px;
    /* width: 669px; */
  }
`,g=e.div`
  display: flex;
  flex-direction: column;
  transform: translateY(20vh);
`,u=e.h2`
  color: ${n.colorWhite};
  margin-bottom: 14px;
  font-size: 66px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.66px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 160px;
    line-height: 0.9375;
    letter-spacing: 1.6px;
  }
`,b=e.p`
  color: ${n.colorWhite};
  font-size: 14px;
  line-height: 1.28571;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,w=e(o)`
  display: inline-flex;
  padding: 12px 38px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: ${n.colorWhite};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  border-radius: 12px;
  border: 1px solid ${n.colorInput};
  width: 147px;

  transition: stroke 0.3s ease;

  &:hover {
    border: 1px solid ${n.colorBeige};
  }

  @media screen and (min-width: 768px) {
    padding: 16px 58px;
    width: 204px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`;e(e.svg)`
  width: 14px;
  height: 14px;
  fill: ${n.colorWhite};
`;const $=()=>i.jsxs(c,{children:[i.jsx(h,{children:i.jsxs(m,{children:[i.jsx(t,{fill:"#EFEDE8"}),i.jsxs(g,{children:[i.jsx(u,{children:"404"}),i.jsx(b,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),i.jsx(w,{to:"/welcome",children:"Go Home"})]})]})}),i.jsx(x,{})]});export{$ as default};