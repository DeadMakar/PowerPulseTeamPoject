import{u as i,j as e,a as t,N as m,r as a,O as g}from"./index-432be38e.js";import{n,b as u,a as f,S as w}from"./SectionTemplate-4e3c7192.js";import{T as b}from"./TitlePage-cf5976d9.js";import{s as c}from"./sprite-9d6f7fc2.js";import"./emotion-element-c39617d8.browser.esm-500b2463.js";const j=i.h3`
  color: inherit;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,s=({children:o})=>e.jsx(j,{children:o}),v="/PowerPulseTeamPoject/assets/thumbUp-0ef3bf28.png",y=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 48px 89px;

  @media screen and (min-width: 768px) {
    padding: 64px 134px;
  }
`,k=i.img`
  width: 118px;
  margin-bottom: 27px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
  }
`,S=i.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 1.33;
  color: ${t.colorWhite};
  margin-bottom: 16px;
`,x=i.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
`,$=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  /* margin-bottom: 24px; */

  @media screen and (min-width: 768px) {
    /* margin-bottom: 32px; */
  }
`,l=i.span`
  color: #e6533c;
`,W=i.a`
  display: block;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${t.colorWhite};

  border-radius: 12px;
  padding: 12px 32px;
  width: 157px;
  height: 42px;
  color: ${t.colorWhite};
  background-color: ${t.colorOrange};
  margin-bottom: 16px;

  margin-top: 24px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 32px;
    height: 52px;
  }
`,z=i.a`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`,M=i.svg`
  stroke: rgba(239, 237, 232, 0.3);
  width: 16px;
  height: 16px;
  margin-left: 8px;
`,O=({exerciseTime:o,caloriesBurned:r})=>e.jsxs(y,{children:[e.jsx(k,{src:v}),e.jsx(S,{children:"Well done"}),e.jsxs($,{children:[e.jsxs(x,{children:["Your time: ",e.jsxs(l,{children:["3 ",o," minutes"]})]}),e.jsxs(x,{children:["Burned calories: ",e.jsxs(l,{children:[" 150 ",r," "]})]})]}),e.jsx(W,{href:"",children:"Next product"})," ",e.jsxs(z,{href:"",children:["to the Diary"," ",e.jsx(M,{children:e.jsx("use",{href:`${c}#icon-arrow`})})]})]}),T=i.div`
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;

  width: 100vw;
  height: 100vh;

  /* background-color: #10100f; */
`,B=i.div`
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
`,C=i.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  stroke: ${t.colorWhite};

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }

  &:hover,
  &:focus {
    stroke: ${t.colorOrange};
  }
`,E=({children:o})=>e.jsx(T,{children:e.jsxs(B,{children:[e.jsx(C,{children:e.jsx("use",{href:`${c}#icon-x`})}),o]})});n.div`
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
`;n.div`
  text-align: center;
`;n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
`;n.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid transparent;
  /* border: 2px solid red; */
`;n.a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 6px;
  gap: 8px;
  color: ${t.colorInput};
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
    stroke: ${t.colorInput};
    width: 10px;
    height: 10px;
    transition: stroke 0.3s ease;
    @media (min-width: 768px) {
      width: 16px;
      height: 16px;
    }
  }

  &:hover {
    color: ${t.colorOrange1};
    cursor: pointer;

    > svg {
      stroke: ${t.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`;const D=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;

  @media (min-width: 768px) {
    gap: 32px;
  }
  @media (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${u});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: contain;
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1440px),
    screen and (min-resolution: 192dpi) and (min-width: 1440px),
    screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${f});
  }
`,L=n.ul`
  display: flex;
  gap: 28px;
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
  }
`,d=n(m)`
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
`,P=n.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,G=()=>{const[o,r]=a.useState(!1),p=()=>{r(h=>!h)};return e.jsx(D,{children:e.jsxs(w,{children:[e.jsxs(P,{children:[e.jsx(b,{children:"Exercises"}),e.jsxs(L,{children:[e.jsx("li",{children:e.jsx(d,{to:"body parts",children:e.jsx(s,{children:"Body parts"})})}),e.jsx("li",{children:e.jsx(d,{to:"muscles",children:e.jsx(s,{children:"Muscles"})})}),e.jsx("li",{children:e.jsx(d,{to:"equipment",children:e.jsx(s,{children:"Equipment"})})})]})]}),e.jsxs(a.Suspense,{fallback:e.jsx("p",{children:"Loader"}),children:[o&&e.jsx(E,{onClick:p,children:e.jsx(O,{onClick:p})}),e.jsx(g,{})]})]})})};export{G as default};
