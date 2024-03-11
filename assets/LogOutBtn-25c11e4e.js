import{u as s,a as e,L as a,d as i,j as o,l as r,s as l}from"./index-cacb06d7.js";const c=s.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${e.colorWhite};
`,g=s.svg`
  fill: transparent;
  stroke: ${t=>t.$colorSvg};
  width: 20px;
  height: 20px;
  @media (min-width: 1440px) {
    stroke: ${e.colorOrange};
  }
`,p=s(a)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(239, 237, 232, 1);
  font-size: 16px;
`,h=({colorSvg:t="rgba(239, 237, 232, 1)"})=>{const n=i();return o.jsxs(p,{to:"/welcome",onClick:()=>n(r()),children:[o.jsx(c,{children:"Logout"}),o.jsx(g,{$colorSvg:t,children:o.jsx("use",{href:`${l}#icon-log-out-01`})})]})};export{p as L,g as a,h as b};
