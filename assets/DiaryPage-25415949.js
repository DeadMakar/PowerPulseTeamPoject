import{u as n,a as t,j as e,w as ce,B as T,r as g,b as u,v as _,s as f,R as he,d as Y,N as J,x as pe,y as N,z as xe,A as fe,D as me,C as ge,E as we,p as ye}from"./index-cacb06d7.js";import{i as ue,f as je}from"./index-fa28a842.js";import{T as be}from"./TitlePage-3e05bb4d.js";import{T as ve,_ as U}from"./emotion-element-c39617d8.browser.esm-089c0ae9.js";import"./floating-ui.dom-9d61e2db.js";const $e=n.div`
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
`,Se=n.p`
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
`,ke=n.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ce=n.button`
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
`,Ie=n.button`
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
`,ze=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Oe=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Te=n.div`
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
`;const Ee=({selectedDate:i,setSelectedDate:d,isOpen:o,onClose:s,setCurrentDate:h,userDateRegistration:l,dateFormat:x})=>{const r=new Date,p=c=>c<new Date(l)||c>r,m=c=>p(c)?"disabled-day":null,a=c=>{c>=l&&c<=r?(d(c),h(c),s()):T.error(`You can review the information from the day of your registration: ${l} up to today: ${r}. `,{theme:"dark"})};return e.jsx(e.Fragment,{children:e.jsxs(Te,{children:[e.jsx(ue,{selected:i,dateFormat:x,calendarStartDay:1,formatWeekDay:c=>c.substr(0,1),open:o,customInput:e.jsx("div",{style:{display:"none"}}),onChange:a,minDate:new Date(l),maxDate:r,dayClassName:m}),e.jsx(ce,{})]})})},We=()=>{const[i,d]=g.useState(new Date),[o,s]=g.useState(i),[h,l]=g.useState(!1),[x,r]=g.useState(!1),[p,m]=g.useState(!1),{createdAt:a}=u(_),c=a,b=()=>{l(!h)},E=()=>{r(!0);const j=new Date(i);j>c?(j.setDate(j.getDate()-1),d(j),s(j),r(!1)):(T.error(`SORRY!!! Selected date cannot be earlier than the registration date: ${c.toLocaleDateString()}.`,{theme:"dark"}),r(!0))},W=()=>{m(!0);const j=new Date,P=new Date(o);P.setDate(o.getDate()+1),P<=j?(d(P),s(P),m(!1)):(T.error(`SORRY!!! Selected date cannot be later than today's date: ${j.toLocaleDateString()}.`,{theme:"dark"}),m(!0))},L=()=>{l(!1)};return e.jsxs($e,{children:[e.jsx(Se,{onClick:b,children:je(o,"dd/MM/yyyy")}),e.jsx(Ce,{onClick:b,children:e.jsx(ke,{children:e.jsx("use",{href:f+"#icon-calendar"})})}),e.jsx(Ie,{type:"button",onClick:E,children:e.jsx(ze,{className:x?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(De,{type:"button",onClick:W,children:e.jsx(Oe,{className:p?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Ee,{selectedDate:o,dateFormat:"dd/MM/yyyy",setSelectedDate:s,isOpen:h,onClose:L,setCurrentDate:d,userDateRegistration:c,minDate:c})]})};function Le(i){return Object.keys(i).length===0}function Pe(i=null){const d=g.useContext(ve);return!d||Le(d)?i:d}function K(i,d){const o=U({},d);return Object.keys(i).forEach(s=>{if(s.toString().match(/^(components|slots)$/))o[s]=U({},i[s],o[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const h=i[s]||{},l=d[s];o[s]={},!l||!Object.keys(l)?o[s]=h:!h||!Object.keys(h)?o[s]=l:(o[s]=U({},l),Object.keys(h).forEach(x=>{o[s][x]=K(h[x],l[x])}))}else o[s]===void 0&&(o[s]=i[s])}),o}function Re(i){const{theme:d,name:o,props:s}=i;return!d||!d.components||!d.components[o]||!d.components[o].defaultProps?s:K(d.components[o].defaultProps,s)}const Be=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ae=Be;function Me(i,d,o,s,h){const[l,x]=g.useState(()=>h&&o?o(i).matches:s?s(i).matches:d);return Ae(()=>{let r=!0;if(!o)return;const p=o(i),m=()=>{r&&x(p.matches)};return m(),p.addListener(m),()=>{r=!1,p.removeListener(m)}},[i,o]),l}const X=he["useSyncExternalStore"];function _e(i,d,o,s,h){const l=g.useCallback(()=>d,[d]),x=g.useMemo(()=>{if(h&&o)return()=>o(i).matches;if(s!==null){const{matches:a}=s(i);return()=>a}return l},[l,i,s,h,o]),[r,p]=g.useMemo(()=>{if(o===null)return[l,()=>()=>{}];const a=o(i);return[()=>a.matches,c=>(a.addListener(c),()=>{a.removeListener(c)})]},[l,o,i]);return X(p,r,x)}function Z(i,d={}){const o=Pe(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:l=s?window.matchMedia:null,ssrMatchMedia:x=null,noSsr:r=!1}=Re({name:"MuiUseMediaQuery",props:d,theme:o});let p=typeof i=="function"?i(o):i;return p=p.replace(/^@media( ?)/m,""),(X!==void 0?_e:Me)(p,h,l,x,r)}const q=n.div`
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
`,ee=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,te=n.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,ie=n.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ne=n.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,oe=n.p`
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
`,R=n.div`
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
`,B=n.div`
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
`,Ne=n.ul`
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
`,S=n.li`
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
`,re=n.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
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
      width: 78px;
    }
  }
`,le=n.div`
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
`,ae=n.div`
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
`,A=n.button`
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
`,M=n.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,F=n.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ue=i=>i.diary.allDiaryInformation,Ye=i=>i.diary.isLoading,H=i=>i.diary.error,He=({productsArray:i,date:d})=>{const o=Y(),h=u(_).blood,l=u(H),x=Z("(max-width:768px)"),r=a=>a[0].toUpperCase()+a.slice(1).toLowerCase();let p;const m=async a=>{try{await o(pe(a)),await o(N(d))}catch{T.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(q,{children:[e.jsxs(ee,{children:[e.jsx(te,{children:"Products"}),e.jsx(ie,{children:e.jsxs(J,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ne,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),i&&i.length>0&&!l?x?e.jsx(R,{children:e.jsx(B,{children:i.map(a=>{const c=a.productId.groupBloodNotAllowed[h]?p="Yes":p="No";return e.jsxs(Q,{children:[e.jsx(y,{children:"Title"}),e.jsx(y,{children:r(a.productId.title)}),e.jsx(y,{children:"Category"}),e.jsx(y,{children:r(a.productId.category)}),e.jsxs(re,{children:[e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Calories"}),e.jsx(y,{children:a.calories})]}),e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Weight"}),e.jsx(y,{children:a.amount})]}),e.jsxs(le,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Recommend"}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:c==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(F,{children:p})]})})]}),e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(A,{type:"button",onClick:()=>m(a._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},a._id)})})}):e.jsxs(R,{children:[e.jsxs(Ne,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"}),e.jsx(D,{children:""})]}),e.jsx(B,{children:i.map(a=>{const c=a.productId.groupBloodNotAllowed[h]?p="Yes":p="No";return e.jsxs(Q,{children:[e.jsx(S,{children:r(a.productId.title)}),e.jsx(S,{children:r(a.productId.category)}),e.jsx(S,{children:a.calories}),e.jsx(S,{children:a.amount}),e.jsx(S,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:c==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(F,{children:p})]})}),e.jsx(S,{children:e.jsx(A,{type:"button",onClick:()=>m(a._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},a._id)})})]}):e.jsx(oe,{children:"Not found products"})]})},Qe=n.ul`
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
`,v=n.li`
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
`,G=n.ul`
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
`,Fe=({exercisesArray:i,date:d})=>{const o=Z("(max-width:768px)"),s=u(H),h=Y(),l=r=>r[0].toUpperCase()+r.slice(1).toLowerCase(),x=async r=>{try{await h(xe(r)),await h(N(d))}catch(p){console.log(p),T.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(q,{children:[e.jsxs(ee,{children:[e.jsx(te,{children:"Exercises"}),e.jsx(ie,{children:e.jsxs(J,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ne,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),i&&i.length>0&&!s?o?e.jsx(R,{children:e.jsx(B,{children:i.map(r=>e.jsxs(G,{children:[e.jsx(w,{children:"Body Part"}),e.jsx(w,{children:l(r.exerciseId.bodyPart)}),e.jsx(w,{children:"Equipment"}),e.jsx(w,{children:l(r.exerciseId.equipment)}),e.jsx(w,{children:"Name"}),e.jsx(w,{children:l(r.exerciseId.name)}),e.jsxs(re,{children:[e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Target"}),e.jsx(w,{children:l(r.exerciseId.target)})]}),e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Burned Calories"}),e.jsx(w,{children:r.calories})]}),e.jsxs(le,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Time"}),e.jsx(w,{children:r.time})]}),e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:""}),e.jsx(w,{children:e.jsx(A,{type:"button",onClick:()=>x(r._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},r._id))})}):e.jsxs(R,{children:[e.jsxs(Qe,{children:[e.jsx(v,{children:"Body Part"}),e.jsx(v,{children:"Equipment"}),e.jsx(v,{children:"Name"}),e.jsx(v,{children:"Target"}),e.jsx(v,{children:"Burned Calories"}),e.jsx(v,{children:"Time"}),e.jsx(v,{children:""})]}),e.jsx(B,{children:i.map(r=>e.jsxs(G,{children:[e.jsx($,{children:l(r.exerciseId.bodyPart)}),e.jsx($,{children:l(r.exerciseId.equipment)}),e.jsx($,{children:l(r.exerciseId.name)}),e.jsx($,{children:l(r.exerciseId.target)}),e.jsx($,{children:r.calories}),e.jsx($,{children:r.time}),e.jsx($,{children:e.jsx(A,{type:"button",onClick:()=>x(r._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},r._id))})]}):e.jsx(oe,{children:"Not found exercises"})]})},Ge=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ve=n.ul`
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
`,k=n.li`
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
`,C=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,I=n.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,z=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Je=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Ke=n.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,O=n.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Xe=n.svg`
  width: 24px;
  height: 24px;
`,Ze=n.p`
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
`,qe=i=>{var E,W,L;const d=(E=i==null?void 0:i.userDiaryInformation[0])==null?void 0:E.consumedCalories,o=(W=i==null?void 0:i.userDiaryInformation[1])==null?void 0:W.burnedCalories,s=(L=i==null?void 0:i.userDiaryInformation[1])==null?void 0:L.totalExerciseTime,h=u(_),l=h==null?void 0:h.resultBMR,[x,r]=g.useState(!1),[p,m]=g.useState(!1),a=u(H);g.useEffect(()=>{(async()=>{await N()})()},[]);const c=l-d,b=110-s;return g.useEffect(()=>{c<0&&r(!0),b<0&&m(!0)},[c,b]),e.jsxs(Ge,{children:[e.jsxs(Ve,{children:[e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(z,{children:l||"2200"})]}),e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(z,{children:"110 min"})]}),e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(z,{children:a?0:d})]}),e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(z,{children:o&&!a?o:0})]}),e.jsxs(k,{className:x?"redBg":"",children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(z,{children:c||"0"})]}),e.jsxs(k,{className:p?"greenBg":"",children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(z,{children:[b||"110"," min"]})]})]}),e.jsxs(Je,{children:[e.jsx(Ke,{children:e.jsx(Xe,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(Ze,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},et=n.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,tt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,it=n.div`
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
`,nt=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,V=i=>{const d=new Date(i),o=String(d.getDate()).padStart(2,"0"),s=String(d.getMonth()+1).padStart(2,"0"),h=d.getFullYear();return`${o}/${s}/${h}`},at=()=>{const i=Y(),d=u(Ue),o=u(Ye),s=u(fe),h=u(me),{addProducts:l,addExercises:x}=d,[r,p]=g.useState(new Date),m=u(_),a=m?m.createdAt:null,c=V(r),b=V(a);return g.useEffect(()=>{(async()=>{try{await i(ye()),await i(N(c))}catch{T.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[i,c,r]),e.jsx(ge,{children:o||s?e.jsx(we,{}):e.jsxs(et,{children:[e.jsxs(tt,{children:[e.jsx(be,{contentText:"Diary"}),e.jsx(We,{currentDate:r,setCurrentDate:p,userDateRegistration:b})]}),e.jsxs(nt,{children:[e.jsx(qe,{userDiaryInformation:d,bmr:h}),e.jsxs(it,{children:[e.jsx(He,{productsArray:l,date:c}),e.jsx(Fe,{exercisesArray:x,date:c})]})]})]})})};export{at as default};
