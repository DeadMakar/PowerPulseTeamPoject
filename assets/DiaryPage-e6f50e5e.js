import{u as n,a as t,j as e,t as ae,B as O,r as g,R as he,d as B,b as u,q as G,N as V,v as ce,w as M,x as pe,y as xe,z as fe,C as me,A as ge,n as we}from"./index-a1a4f167.js";import{s as f}from"./sprite-b425b0d6.js";import{i as ye,f as ue}from"./index-b6e77970.js";import{T as je}from"./TitlePage-9ccabe44.js";import{T as be,_ as A}from"./emotion-element-c39617d8.browser.esm-de186826.js";import"./floating-ui.dom-9d61e2db.js";const ve=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,De=n.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${t.colorOrange};
    }
  }
`,$e=n.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${t.colorWhite};
  font-weight: 700;
  transition: color 0.3s ease;
  margin-right: 8px;

  &:hover {
    color: ${t.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,Se=n.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ie=n.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 40px;
  background-color: transparent;
  gap: 8px;
  border: none;

  @media screen and (max-width: 767px) {
    margin-right: 20px;
    gap: 6px;
  }

  &:hover {
    > svg {
      stroke: ${t.colorOrange};
    }
  }
`,ke=n.button`
  display: flex;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${t.colorOrange};
    }
  }
`,Ce=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ze=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Oe=n.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 10;
`;n.button`
  width: 195px;
  color: #ffffff;
  background: inherit;
  border-radius: 8px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;const Te=({selectedDate:i,setSelectedDate:s,isOpen:o,onClose:d,setCurrentDate:h,userDateRegistration:l,dateFormat:x})=>{const r=new Date,c=p=>p<new Date(l)||p>r,m=p=>c(p)?"disabled-day":null,a=p=>{p>=l&&p<=r?(s(p),h(p),d()):O.error(`You can review the information from the day of your registration: ${l} up to today: ${r}. `,{theme:"dark"})};return e.jsx(e.Fragment,{children:e.jsxs(Oe,{children:[e.jsx(ye,{selected:i,dateFormat:x,calendarStartDay:1,formatWeekDay:p=>p.substr(0,1),open:o,customInput:e.jsx("div",{style:{display:"none"}}),onChange:a,minDate:new Date(l),maxDate:r,dayClassName:m}),e.jsx(ae,{})]})})},Ee=()=>{const[i,s]=g.useState(new Date),[o,d]=g.useState(i),[h,l]=g.useState(!1),[x,r]=g.useState(!1),[c,m]=g.useState(!1),a=new Date("2024-02-01"),p=()=>{l(!h)},R=()=>{r(!0);const j=new Date(i);j>a?(j.setDate(j.getDate()-1),s(j),d(j),r(!1)):(O.error(`SORRY!!! Selected date cannot be earlier than the registration date: ${a.toLocaleDateString()}.`,{theme:"dark"}),r(!0))},N=()=>{m(!0);const j=new Date,T=new Date(o);T.setDate(o.getDate()+1),T<=j?(s(T),d(T),m(!1)):(O.error(`SORRY!!! Selected date cannot be later than today's date: ${j.toLocaleDateString()}.`,{theme:"dark"}),m(!0))},U=()=>{l(!1)};return e.jsxs(ve,{children:[e.jsx($e,{onClick:p,children:ue(o,"dd/MM/yyyy")}),e.jsx(Ie,{onClick:p,children:e.jsx(Se,{children:e.jsx("use",{href:f+"#icon-calendar"})})}),e.jsx(ke,{type:"button",onClick:R,children:e.jsx(Ce,{className:x?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(De,{type:"button",onClick:N,children:e.jsx(ze,{className:c?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Te,{selectedDate:o,dateFormat:"dd/MM/yyyy",setSelectedDate:d,isOpen:h,onClose:U,setCurrentDate:s,userDateRegistration:a,minDate:a})]})};function We(i){return Object.keys(i).length===0}function Le(i=null){const s=g.useContext(be);return!s||We(s)?i:s}function J(i,s){const o=A({},s);return Object.keys(i).forEach(d=>{if(d.toString().match(/^(components|slots)$/))o[d]=A({},i[d],o[d]);else if(d.toString().match(/^(componentsProps|slotProps)$/)){const h=i[d]||{},l=s[d];o[d]={},!l||!Object.keys(l)?o[d]=h:!h||!Object.keys(h)?o[d]=l:(o[d]=A({},l),Object.keys(h).forEach(x=>{o[d][x]=J(h[x],l[x])}))}else o[d]===void 0&&(o[d]=i[d])}),o}function Pe(i){const{theme:s,name:o,props:d}=i;return!s||!s.components||!s.components[o]||!s.components[o].defaultProps?d:J(s.components[o].defaultProps,d)}const Re=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ae=Re;function Be(i,s,o,d,h){const[l,x]=g.useState(()=>h&&o?o(i).matches:d?d(i).matches:s);return Ae(()=>{let r=!0;if(!o)return;const c=o(i),m=()=>{r&&x(c.matches)};return m(),c.addListener(m),()=>{r=!1,c.removeListener(m)}},[i,o]),l}const K=he["useSyncExternalStore"];function Me(i,s,o,d,h){const l=g.useCallback(()=>s,[s]),x=g.useMemo(()=>{if(h&&o)return()=>o(i).matches;if(d!==null){const{matches:a}=d(i);return()=>a}return l},[l,i,d,h,o]),[r,c]=g.useMemo(()=>{if(o===null)return[l,()=>()=>{}];const a=o(i);return[()=>a.matches,p=>(a.addListener(p),()=>{a.removeListener(p)})]},[l,o,i]);return K(c,r,x)}function X(i,s={}){const o=Le(),d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:l=d?window.matchMedia:null,ssrMatchMedia:x=null,noSsr:r=!1}=Pe({name:"MuiUseMediaQuery",props:s,theme:o});let c=typeof i=="function"?i(o):i;return c=c.replace(/^@media( ?)/m,""),(K!==void 0?Me:Be)(c,h,l,x,r)}const Z=n.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 16px;
  height: 335px;
  width: 100%;
  border: 1px solid #efede820;
  border-radius: 12px;
  background-color: #efede80d;

  @media (min-width: 768px) {
    gap: 16px;
    height: 236px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    width: 826px;
  }

  @media screen and (max-width: 768px) {
    max-height: 335px;
  }
`,q=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ee=n.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,te=n.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ie=n.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ne=n.p`
  color: #efede84d;
  font-size: 14px;
  line-height: 1.2857;
  text-align: center;
  margin-top: 125px;

  @media (min-width: 768px) {
    margin-top: 65px;
    font-size: 16px;
    line-height: 1.5;
  }
`,E=n.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;

  @media screen and (min-width: 375px) {
    width: 297px;
  }

  @media screen and (min-width: 768px) {
    width: 656px;
    height: 234px;
  }

  @media screen and (min-width: 1440px) {
    width: 762px;
  }
`,W=n.div`
  overflow: auto;

  @media screen and (min-width: 768px) {
    height: 138px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: rgba(239, 237, 232, 0.1);
  }

  @media screen and (max-width: 768px) {
    height: 285px;
  }
`,_e=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,D=n.li`
  color: ${t.colorOrange1};
  font-size: 12px;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 204px;
    }

    &:nth-of-type(2) {
      width: 128px;
    }

    &:nth-of-type(3) {
      width: 90px;
    }

    &:nth-of-type(4) {
      width: 90px;
    }

    &:nth-of-type(5) {
      width: 80px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }

    &:nth-of-type(2) {
      width: 166px;
    }

    &:nth-of-type(3) {
      width: 105px;
    }

    &:nth-of-type(4) {
      width: 105px;
    }

    &:nth-of-type(5) {
      width: 110px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }
`,Y=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,y=n.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }
`,$=n.li`
  @media screen and (min-width: 768px) {
    color: ${t.colorWhite};
    border-radius: 12px;
    border: 1px solid ${t.colorInput};
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &:first-of-type {
      width: 204px;
    }

    &:nth-of-type(2) {
      width: 128px;
    }

    &:nth-of-type(3) {
      width: 90px;
    }

    &:nth-of-type(4) {
      width: 90px;
    }

    &:nth-of-type(5) {
      width: 80px;
    }

    &:nth-of-type(6) {
      width: 20px;
      border: none;
      padding: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 212px;
    }

    &:nth-of-type(2) {
      width: 166px;
    }

    &:nth-of-type(3) {
      width: 105px;
    }

    &:nth-of-type(4) {
      width: 105px;
    }

    &:nth-of-type(5) {
      width: 110px;
    }

    &:nth-of-type(6) {
      width: 20px;
    }
  }
`,oe=n.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,re=n.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${t.colorWhite};
        border-radius: 12px;
        border: 1px solid ${t.colorInput};
        font-size: 14px;
        line-height: 1.2857;
        padding: 8px 14px;
        height: 38px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
    }
  }
`,se=n.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${t.colorWhite};
        border-radius: 12px;
        border: 1px solid ${t.colorInput};
        font-size: 14px;
        line-height: 1.2857;
        padding: 8px 14px;
        height: 38px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 78px;
    }
  }
`,de=n.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${t.colorWhite};
        border-radius: 12px;
        border: 1px solid ${t.colorInput};
        font-size: 14px;
        line-height: 1.2857;
        padding: 8px 14px;
        height: 38px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 74px;
    }
  }
`,le=n.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        display: none;
      }

      &:nth-of-type(2) {
        height: 38px;
        border: none;
        padding: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }

    @media screen and (min-width: 375px) {
      width: 20px;

      &:nth-of-type(1) {
        display: block;
        color: ${t.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,L=n.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${t.colorOrange};
    }
  }
`,P=n.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,H=n.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ne=i=>i.diary.allDiaryInformation,Ue=i=>i.diary.isLoading,_=i=>i.diary.error,Ye=({productsArray:i,date:s})=>{const o=B(),h=u(G).blood,l=u(_),x=X("(max-width:768px)"),r=a=>a[0].toUpperCase()+a.slice(1).toLowerCase();let c;const m=async a=>{try{await o(ce(a)),await o(M(s))}catch{O.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(Z,{children:[e.jsxs(q,{children:[e.jsx(ee,{children:"Products"}),e.jsx(te,{children:e.jsxs(V,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ie,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),i&&i.length>0&&!l?x?e.jsx(E,{children:e.jsx(W,{children:i.map(a=>{const p=a.productId.groupBloodNotAllowed[h]?c="Yes":c="No";return e.jsxs(Y,{children:[e.jsx(y,{children:"Title"}),e.jsx(y,{children:r(a.productId.title)}),e.jsx(y,{children:"Category"}),e.jsx(y,{children:r(a.productId.category)}),e.jsxs(oe,{children:[e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Calories"}),e.jsx(y,{children:a.calories})]}),e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Weight"}),e.jsx(y,{children:a.amount})]}),e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Recommend"}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(H,{children:c})]})})]}),e.jsxs(le,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(L,{type:"button",onClick:()=>m(a._id),children:e.jsx(P,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},a._id)})})}):e.jsxs(E,{children:[e.jsxs(_e,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"}),e.jsx(D,{children:""})]}),e.jsx(W,{children:i.map(a=>{const p=a.productId.groupBloodNotAllowed[h]?c="Yes":c="No";return e.jsxs(Y,{children:[e.jsx($,{children:r(a.productId.title)}),e.jsx($,{children:r(a.productId.category)}),e.jsx($,{children:a.calories}),e.jsx($,{children:a.amount}),e.jsx($,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(H,{children:c})]})}),e.jsx($,{children:e.jsx(L,{type:"button",onClick:()=>m(a._id),children:e.jsx(P,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},a._id)})})]}):e.jsx(ne,{children:"Not found products"})]})},He=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
    justify-content: start;
  }
`,b=n.li`
  color: ${t.colorOrange1};
  font-size: 12px;
  line-height: 1.5;
  display: block;

  @media screen and (min-width: 768px) {
    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 32px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`,Q=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,w=n.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(5) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  @media screen and (min-width: 375px) {
    width: 290px;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(3) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }

    &:nth-of-type(5) {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      color: ${t.colorWhite};
      border-radius: 12px;
      border: 1px solid ${t.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 16px;
    }
  }
`,v=n.li`
  @media screen and (min-width: 768px) {
    color: ${t.colorWhite};
    border-radius: 12px;
    border: 1px solid ${t.colorInput};
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &:first-of-type {
      width: 90px;
    }

    &:nth-of-type(2) {
      width: 132px;
    }

    &:nth-of-type(3) {
      width: 128px;
    }

    &:nth-of-type(4) {
      width: 84px;
    }

    &:nth-of-type(5) {
      width: 78px;
    }

    &:nth-of-type(6) {
      width: 72px;
    }

    &:nth-of-type(7) {
      width: 20px;
      border: none;
      padding: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    &:first-of-type {
      width: 115px;
    }

    &:nth-of-type(2) {
      width: 157px;
    }

    &:nth-of-type(3) {
      width: 131px;
    }

    &:nth-of-type(4) {
      width: 106px;
    }

    &:nth-of-type(5) {
      width: 91px;
    }

    &:nth-of-type(6) {
      width: 82px;
    }

    &:nth-of-type(7) {
      width: 20px;
    }
  }
`,Qe=({exercisesArray:i,date:s})=>{const o=X("(max-width:768px)"),d=u(_),h=B(),l=r=>r[0].toUpperCase()+r.slice(1).toLowerCase(),x=async r=>{try{await h(pe(r)),await h(M(s))}catch(c){console.log(c),O.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(Z,{children:[e.jsxs(q,{children:[e.jsx(ee,{children:"Exercises"}),e.jsx(te,{children:e.jsxs(V,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ie,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),i&&i.length>0&&!d?o?e.jsx(E,{children:e.jsx(W,{children:i.map(r=>e.jsxs(Q,{children:[e.jsx(w,{children:"Body Part"}),e.jsx(w,{children:l(r.exerciseId.bodyPart)}),e.jsx(w,{children:"Equipment"}),e.jsx(w,{children:l(r.exerciseId.equipment)}),e.jsx(w,{children:"Name"}),e.jsx(w,{children:l(r.exerciseId.name)}),e.jsxs(oe,{children:[e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Target"}),e.jsx(w,{children:l(r.exerciseId.target)})]}),e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Burned Calories"}),e.jsx(w,{children:r.calories})]}),e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Time"}),e.jsx(w,{children:r.time})]}),e.jsxs(le,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:""}),e.jsx(w,{children:e.jsx(L,{type:"button",onClick:()=>x(r._id),children:e.jsx(P,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},r._id))})}):e.jsxs(E,{children:[e.jsxs(He,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"}),e.jsx(b,{children:""})]}),e.jsx(W,{children:i.map(r=>e.jsxs(Q,{children:[e.jsx(v,{children:l(r.exerciseId.bodyPart)}),e.jsx(v,{children:l(r.exerciseId.equipment)}),e.jsx(v,{children:l(r.exerciseId.name)}),e.jsx(v,{children:l(r.exerciseId.target)}),e.jsx(v,{children:r.calories}),e.jsx(v,{children:r.time}),e.jsx(v,{children:e.jsx(L,{type:"button",onClick:()=>x(r._id),children:e.jsx(P,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},r._id))})]}):e.jsx(ne,{children:"Not found exercises"})]})},Fe=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ge=n.ul`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 13px;
  row-gap: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    gap: 16px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    height: 252px;
    flex-direction: column;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 48px;
  }

  > li {
    &:nth-child(-n + 2) {
      background-color: ${t.colorOrange};
    }

    &:nth-child(-n + 2) h2 {
      color: rgba(239, 237, 232, 0.8);
    }
  }
`,S=n.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 160px;
  padding: 14px 10px 14px 14px;
  background-color: ${t.colorDiaryItem};
  border-radius: 12px;
  border: 1px solid #efede833;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
    height: 96px;
    width: 100%;
    :not(:last-of-type) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 187px;
    height: 116px;
    padding: 18px;
  }

  &.redBg {
    border: 1px solid #e9101d;
  }

  &.greenBg {
    border: 1px solid #3cbf61;
  }
`,I=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,k=n.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,C=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Ve=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Je=n.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,z=n.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Ke=n.svg`
  width: 24px;
  height: 24px;
`,Xe=n.p`
  font-size: 14px;
  line-height: 18px;
  color: ${t.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Ze=({userDiaryInformation:i,bmr:s})=>{const{burnedCalories:o,consumedCalories:d,remainingCalories:h,remainingSports:l}=i||{},[x,r]=g.useState(!1),c=u(_);return g.useEffect(()=>{h<0&&r(!0)},[h]),e.jsxs(Fe,{children:[e.jsxs(Ge,{children:[e.jsxs(S,{children:[e.jsxs(I,{children:[e.jsx(z,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(k,{children:"Daily calory intake"})]}),e.jsx(C,{children:s&&s!==null&&s!==0?s:2200})]}),e.jsxs(S,{children:[e.jsxs(I,{children:[e.jsx(z,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(k,{children:"Daily norm of sports"})]}),e.jsx(C,{children:"110 min"})]}),e.jsxs(S,{children:[e.jsxs(I,{children:[e.jsx(z,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(k,{children:"Calories consumed"})]}),e.jsx(C,{children:d&&!c?d:0})]}),e.jsxs(S,{children:[e.jsxs(I,{children:[e.jsx(z,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(k,{children:"Calories burned"})]}),e.jsx(C,{children:o&&!c?o:0})]}),e.jsxs(S,{className:x?"redBg":"",children:[e.jsxs(I,{children:[e.jsx(z,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(k,{children:"The rest of the calories"})]}),e.jsx(C,{children:h&&!c?h:s||0})]}),e.jsxs(S,{className:x?"greenBg":"",children:[e.jsxs(I,{children:[e.jsx(z,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(k,{children:"The rest of sports"})]}),e.jsxs(C,{children:[l&&!c?l:110," min"]})]})]}),e.jsxs(Ve,{children:[e.jsx(Je,{children:e.jsx(Ke,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(Xe,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},qe=n.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,et=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,tt=n.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
    width: 826px;
  }
`,it=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,F=i=>{const s=new Date(i),o=String(s.getDate()).padStart(2,"0"),d=String(s.getMonth()+1).padStart(2,"0"),h=s.getFullYear();return`${o}/${d}/${h}`},at=()=>{const i=B(),s=u(Ne),o=u(Ue),d=u(xe),h=u(fe),{addProducts:l,addExercises:x}=s,[r,c]=g.useState(new Date),m=u(G),a=m?m.createdAt:null,p=F(r),R=F(a);return g.useEffect(()=>{(async()=>{try{await i(we()),await i(M(p))}catch{O.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[i,p,r]),e.jsx(me,{children:o||d?e.jsx(ge,{}):e.jsxs(qe,{children:[e.jsxs(et,{children:[e.jsx(je,{contentText:"Diary"}),e.jsx(Ee,{currentDate:r,setCurrentDate:c,userDateRegistration:R})]}),e.jsxs(it,{children:[e.jsx(Ze,{userDiaryInformation:s,bmr:h}),e.jsxs(tt,{children:[e.jsx(Ye,{productsArray:l,date:p}),e.jsx(Qe,{exercisesArray:x,date:p})]})]})]})})};export{at as default};
