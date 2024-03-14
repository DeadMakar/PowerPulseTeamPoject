import{f as o,h as t,N as e}from"./index-6b19034e.js";import{a}from"./LogOutBtn.styled-8ec66b77.js";const s=o.div`
  border-bottom: 1px solid rgba(239, 237, 232, 0.2);
  @media (max-width: 374px) {
    padding: 12px 18px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    padding: 12px 20px;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    padding: 19px 26px;
  }

  @media (min-width: 1440px) {
    padding: 20px 96px;
  }
`,d=o.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`,p=o.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,x=o.div`
  display: flex;
  gap: 16px;
`,c=o(e)`
  font-size: 16px;
  line-height: 24px;
  padding: 10px 27px;
  color: rgba(239, 237, 232, 1);
  background-color: transparent;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${t.colorOrange};
  }
  &.active {
    background-color: ${t.colorOrange};
  }
`,l=o(e)`
  display: flex;
  align-items: center;
  gap: 14px;
  color: rgba(239, 237, 232, 1);
  background-color: transparent;
  border-radius: 12px;
`,h=o.svg`
  width: ${i=>i.size||"28px"};
  height: ${i=>i.size||"28px"};
  fill: ${i=>i.color||"none"};
  stroke: ${i=>i.color||"rgba(239, 237, 232, 0.3)"};
  stroke-width: 1.5px;
  display: block;

  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${t.colorOrange};
  }
`,g=o.svg`
  width: ${i=>i.size||"24px"};
  height: ${i=>i.size||"24px"};
  fill: ${i=>i.color||"none"};
  stroke: ${i=>i.color||"rgba(239, 237, 232, 0.3)"};
  display: block;
  transition: stroke 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    stroke: ${t.colorOrange};
  }
  @media screen and (min-width: 768px) {
    width: ${i=>i.size||"28px"};
    height: ${i=>i.size||"28px"};
  }
`,b=o.div`
  border: 1px solid ${t.colorOrange};
  border-radius: 50%;
  width: 37px;
  height: 37px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`,m=o.svg`
  width: ${i=>i.size||"28px"};
  height: ${i=>i.size||"28px"};
  fill: ${i=>i.color||"rgba(239, 237, 232, 0.1)"};
  display: block;
  transition: fill 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
  transform: translate(50%, 50%);
  bottom: 50%;
  right: 50%;
`,w=o.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
  }
`,u=o.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  
`,f=o.div`
  z-index: 1001;
  position: relative;
  right: 0;
  margin-left: auto;
  height: 100vh;
  background-color: ${t.colorOrange};
  padding: 26px 32px 32px 32px;

  @media (max-width: 374px) {
    max-width: 200px;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 200px;
  }

  @media (min-width: 769px) and (max-width: 1440px) {
    width: 350px;
  }
`,v=o.svg`
  stroke-width: 2px;
  width: 32px;
  height: 32px;
  fill: ${t.colorWhite};
`,k=o.div`
  position: absolute;
  width: 32px;
  height: 32px;
  stroke: white;
  top: 26px;
  right: 32px;
`,$=o.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  transform: translateY(100%);
`,z=o(e)`
  color: ${t.colorWhite};
  padding: 10px 27px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 12px;

  font-size: 16px;

  &.active {
    border-color: ${t.colorWhite};
  }
`,y=o(a)`
  position: absolute;
  bottom: 32px;
  left: 32px;
`,N=o.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: ${t.colorWhite};
`;export{u as B,k as C,s as H,g as I,y as L,f as M,$ as N,N as S,b as U,w as a,m as b,v as c,z as d,d as e,p as f,x as g,c as h,l as i,h as j};
