import{u as s,L as i,a as n,j as o,l as a}from"./index-0bf735f7.js";import{s as l}from"./sprite-8de2d76c.js";import{g as e}from"./root-786e29f7.js";const c=s.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${e.colorWhite};
`,g=s.svg`
  fill: transparent;
  stroke: ${t=>t.$colorSvg};
  width: 20px;
  height: 20px;
  /* @media (min-width: 1440px) {
    stroke: ${e.colorOrange};
  } */
`,p=s(i)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(239, 237, 232, 1);
  font-size: 16px;
`,m=({colorSvg:t="rgba(239, 237, 232, 1)"})=>{const r=n();return o.jsxs(p,{to:"/welcome",onClick:()=>r(a()),children:[o.jsx(c,{children:"Logout"}),o.jsx(g,{$colorSvg:t,children:o.jsx("use",{href:`${l}#icon-log-out-01`})})]})};export{p as L,g as a,m as b};
