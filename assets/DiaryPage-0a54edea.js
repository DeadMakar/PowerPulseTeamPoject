import{u as r,a as i,y as A,j as e,z as fe,B as P,r as g,w as me,s as f,R as ge,b as j,d as F,f as Y,N as X,A as we,D as _,E as ye,F as Z,G as ue,H as je,C as be}from"./index-f7e7f8d9.js";import{i as ve}from"./index-7fa9a7a1.js";import{T as $e}from"./TitlePage-7cf4e4ee.js";import{T as De,_ as N}from"./emotion-element-c39617d8.browser.esm-37465334.js";import"./floating-ui.dom-9d61e2db.js";const Se=r.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,ke=r.button`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${i.colorOrange};
    }
  }
`,ze=r.p`
  font-size: 24px;
  line-height: 1.33;
  margin: 0;
  padding: 0;
  color: ${i.colorWhite};
  font-weight: 700;
  transition: color 0.3s ease;
  margin-right: 8px;

  &:hover {
    color: ${i.colorOrange1};
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.1;
  }
`,Te=r.svg`
  width: 20px;
  height: 20px;
  stroke: ${i.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Oe=r.button`
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
      stroke: ${i.colorOrange};
    }
  }
`,Ce=r.button`
  display: flex;
  padding: 0;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: none;

  &:hover {
    > svg {
      fill: ${i.colorOrange};
    }
  }
`,Ie=r.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Ee=r.svg`
  width: 100%;
  height: 100%;
  fill: ${i.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const We=r.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 10;
`;r.button`
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
`;const Ae=({selectedDate:n,setSelectedDate:l,isOpen:o,onClose:s,setCurrentDate:a,userDateRegistration:d})=>{const h=A(new Date),x=t=>{const p=A(t);h>=p&&p>=d?(l(t),a(t),s()):P.error(`SORRY!!! You can review the information from the day of your registration: ${d} up to today: ${h}. `,{theme:"dark"})},c=t=>t<d&&t>h,m=t=>c(t)?"disabled-day":null;return e.jsxs(We,{children:[e.jsx(ve,{selected:n,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:t=>t.substr(0,1),open:o,customInput:e.jsx("div",{style:{display:"none"}}),onChange:x,minDate:new Date(d),maxDate:new Date(h),dayClassName:m}),e.jsx(fe,{})]})},Le=({currentDate:n,setCurrentDate:l,userDateRegistration:o})=>{const[s,a]=g.useState(n),[d,h]=g.useState(!1),[x,c]=g.useState(!1),[m,t]=g.useState(!1),p=()=>{h(!d)},y=()=>{c(!0);const w=new Date(n);A(w)>o?(w.setDate(w.getDate()-1),l(w),a(w),c(!1)):(P.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${o}.`,{theme:"dark"}),c(!0))},D=()=>{t(!0);const w=A(new Date),$=new Date(s);$.setDate(s.getDate()+1),$>new Date?(P.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${w}.`,{theme:"dark"}),t(!0)):(l($),a($),t(!1))},v=()=>{h(!1)};return e.jsxs(Se,{children:[e.jsxs(Oe,{onClick:p,children:[e.jsx(ze,{children:me(s,"dd/MM/yyyy")}),e.jsx(Te,{children:e.jsx("use",{href:f+"#icon-calendar"})})]}),e.jsx(Ce,{type:"button",onClick:y,children:e.jsx(Ie,{className:x?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(ke,{type:"button",onClick:D,children:e.jsx(Ee,{className:m?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Ae,{selectedDate:s,setSelectedDate:a,isOpen:d,onClose:v,setCurrentDate:l,userDateRegistration:o})]})};function Pe(n){return Object.keys(n).length===0}function Be(n=null){const l=g.useContext(De);return!l||Pe(l)?n:l}function q(n,l){const o=N({},l);return Object.keys(n).forEach(s=>{if(s.toString().match(/^(components|slots)$/))o[s]=N({},n[s],o[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const a=n[s]||{},d=l[s];o[s]={},!d||!Object.keys(d)?o[s]=a:!a||!Object.keys(a)?o[s]=d:(o[s]=N({},d),Object.keys(a).forEach(h=>{o[s][h]=q(a[h],d[h])}))}else o[s]===void 0&&(o[s]=n[s])}),o}function Me(n){const{theme:l,name:o,props:s}=n;return!l||!l.components||!l.components[o]||!l.components[o].defaultProps?s:q(l.components[o].defaultProps,s)}const Re=typeof window<"u"?g.useLayoutEffect:g.useEffect,He=Re;function Ne(n,l,o,s,a){const[d,h]=g.useState(()=>a&&o?o(n).matches:s?s(n).matches:l);return He(()=>{let x=!0;if(!o)return;const c=o(n),m=()=>{x&&h(c.matches)};return m(),c.addListener(m),()=>{x=!1,c.removeListener(m)}},[n,o]),d}const ee=ge["useSyncExternalStore"];function _e(n,l,o,s,a){const d=g.useCallback(()=>l,[l]),h=g.useMemo(()=>{if(a&&o)return()=>o(n).matches;if(s!==null){const{matches:t}=s(n);return()=>t}return d},[d,n,s,a,o]),[x,c]=g.useMemo(()=>{if(o===null)return[d,()=>()=>{}];const t=o(n);return[()=>t.matches,p=>(t.addListener(p),()=>{t.removeListener(p)})]},[d,o,n]);return ee(c,x,h)}function te(n,l={}){const o=Be(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:a=!1,matchMedia:d=s?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:x=!1}=Me({name:"MuiUseMediaQuery",props:l,theme:o});let c=typeof n=="function"?n(o):n;return c=c.replace(/^@media( ?)/m,""),(ee!==void 0?_e:Ne)(c,a,d,h,x)}const ie=r.div`
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
`,ne=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,oe=r.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,re=r.div`
  &:hover span {
    color: ${i.colorOrange1};
  }
`,se=r.span`
  color: ${i.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,de=r.p`
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
`,B=r.div`
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
`,M=r.div`
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
`,Fe=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,z=r.li`
  color: ${i.colorOrange1};
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
`,V=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,b=r.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &::first-letter {
      text-transform: uppercase;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
`,T=r.li`
  @media screen and (min-width: 768px) {
    color: ${i.colorWhite};
    border-radius: 12px;
    border: 1px solid ${i.colorInput};
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &::first-letter {
      text-transform: uppercase;
    }

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
`,le=r.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,ae=r.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${i.colorWhite};
        border-radius: 12px;
        border: 1px solid ${i.colorInput};
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
`,he=r.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${i.colorWhite};
        border-radius: 12px;
        border: 1px solid ${i.colorInput};
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
`,ce=r.div`
  > li {
    @media screen and (min-width: 320px) {
      width: 100%;

      &:nth-of-type(1) {
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        color: ${i.colorWhite};
        border-radius: 12px;
        border: 1px solid ${i.colorInput};
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
`,pe=r.div`
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
        color: ${i.colorOrange1};
        font-size: 12px;
        line-height: 1.5;
      }

      &:nth-of-type(2) {
        margin-top: 18px;
      }
    }
  }
`,R=r.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  position: relative;

  &:hover {
    > svg {
      stroke: ${i.colorOrange};
    }
  }
`,H=r.svg`
  stroke: ${i.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,J=r.span`
  @media screen and (min-width: 320px) {
    color: ${i.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Q=n=>n.diary.allDiaryInformation,Ye=n=>n.diary.isLoading,G=n=>n.diary.error,Qe=n=>n.diary.isLoadingExercise,xe=n=>{if(!(n instanceof Date))return null;const l=String(n.getDate()).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${l}-${o}-${s}`},Ge=({currentDate:n})=>{var m;const o=(m=j(Q)[0])==null?void 0:m.productArr,s=F(),a=j(Y),d=a==null?void 0:a.blood,h=j(G),x=te("(max-width:768px)"),c=async t=>{const p=xe(n);try{await s(we({productId:t,selectedDate:p}))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(oe,{children:"Products"}),e.jsx(re,{children:e.jsxs(X,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(se,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),o&&o.length>0&&!h?x?e.jsx(B,{children:e.jsx(M,{children:o==null?void 0:o.map(t=>{var U;const p=t==null?void 0:t.title,y=t==null?void 0:t.calories,D=t==null?void 0:t.amount,v=t==null?void 0:t._id,w=(U=t==null?void 0:t.productId)==null?void 0:U.groupBloodNotAllowed,$=t==null?void 0:t.category,L=w&&w[d]?"Yes":"No";return e.jsxs(V,{children:[e.jsx(b,{children:"Title"}),e.jsx(b,{children:p}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:$}),e.jsxs(le,{children:[e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Calories"}),e.jsx(b,{children:y})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Weight"}),e.jsx(b,{children:D})]}),e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Recommend"}),e.jsx(b,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:L==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(J,{children:L})]})})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:""}),e.jsx(b,{children:e.jsx(R,{type:"button",onClick:()=>c(v),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},v)})})}):e.jsxs(B,{children:[e.jsxs(Fe,{children:[e.jsx(z,{children:"Title"}),e.jsx(z,{children:"Category"}),e.jsx(z,{children:"Calories"}),e.jsx(z,{children:"Weight"}),e.jsx(z,{children:"Recommend"}),e.jsx(z,{children:""})]}),e.jsx(M,{children:o==null?void 0:o.map(t=>{const p=t==null?void 0:t.title,y=t==null?void 0:t.calories,D=t==null?void 0:t.amount,v=t==null?void 0:t._id,w=t==null?void 0:t.productId.groupBloodNotAllowed,$=t==null?void 0:t.category,L=w&&w[d]?"Yes":"No";return e.jsxs(V,{children:[e.jsx(T,{children:p}),e.jsx(T,{children:$}),e.jsx(T,{children:y}),e.jsx(T,{children:D}),e.jsx(T,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:L==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:i.colorSecondaryGreen,stroke:i.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:i.colorSecondaryRed,stroke:i.colorSecondaryRed}})}),e.jsx(J,{children:L})]})}),e.jsx(T,{children:e.jsx(R,{type:"button",onClick:()=>c(v),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},v)})})]}):e.jsx(de,{children:"Not found products"})]})},Ue=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
    /* justify-content: start; */
    margin-left: 10px;
  }
`,S=r.li`
  color: ${i.colorOrange1};
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
`,K=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,u=r.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &::first-letter {
      text-transform: uppercase;
    }

    &:first-of-type {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(3) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
      font-size: 14px;
      line-height: 1.2857;
      padding: 8px 14px;
      height: 38px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(5) {
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
    }

    &:nth-of-type(6) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 8px;
    }

    &:nth-of-type(2) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(4) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
      color: ${i.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &:nth-of-type(6) {
      color: ${i.colorWhite};
      border-radius: 12px;
      border: 1px solid ${i.colorInput};
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
`,k=r.li`
  @media screen and (min-width: 768px) {
    color: ${i.colorWhite};
    border-radius: 12px;
    border: 1px solid ${i.colorInput};
    padding: 8px 14px;
    height: 38px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 16px;
    line-height: 1.5;

    &::first-letter {
      text-transform: uppercase;
    }

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
`,Ve=({currentDate:n})=>{var m;const l=j(Q),o=j(Qe),s=(m=l[1])==null?void 0:m.exerciseArr,a=te("(max-width:768px)"),d=j(G),h=F(),x=async t=>{const p=xe(n);try{await h(ye({exerciseId:t,selectedDate:p}))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}},c=t=>{const p=Math.floor(t/60).toString().padStart(2,"0"),y=(t%60).toString().padStart(2,"0");return`${p}:${y}`};return e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(oe,{children:"Exercises"}),e.jsx(re,{children:e.jsxs(X,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(se,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:i.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),s&&s.length>0&&!d?a?e.jsx(B,{children:e.jsx(M,{children:s==null?void 0:s.map(t=>e.jsx(K,{children:o?e.jsx(_,{}):e.jsxs(e.Fragment,{children:[e.jsx(u,{children:"Body Part"}),e.jsx(u,{children:t.bodyPart}),e.jsx(u,{children:"Equipment"}),e.jsx(u,{children:t.equipment}),e.jsx(u,{children:"Name"}),e.jsx(u,{children:t.name}),e.jsxs(le,{children:[e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Target"}),e.jsx(u,{children:t.target})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Burned Calories"}),e.jsx(u,{children:t.calories})]}),e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Time"}),e.jsx(u,{children:c(t.time)})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{}),e.jsx(u,{children:e.jsx(R,{type:"button",onClick:()=>x(t._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]})},t._id))})}):e.jsx(B,{children:e.jsxs(e.Fragment,{children:[e.jsxs(Ue,{children:[e.jsx(S,{children:"Body Part"}),e.jsx(S,{children:"Equipment"}),e.jsx(S,{children:"Name"}),e.jsx(S,{children:"Target"}),e.jsx(S,{children:"Burned Calories"}),e.jsx(S,{children:"Time"}),e.jsx(S,{children:""})]}),e.jsx(M,{children:s.map(t=>e.jsx(K,{children:o?e.jsx(_,{}):e.jsxs(e.Fragment,{children:[e.jsx(k,{children:t.bodyPart}),e.jsx(k,{children:t.equipment}),e.jsx(k,{children:t.name}),e.jsx(k,{children:t.target}),e.jsx(k,{children:t.calories}),e.jsx(k,{children:c(t.time)}),e.jsx(k,{children:e.jsx(R,{type:"button",onClick:()=>x(t._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})},t._id))})]})}):e.jsx(de,{children:"Not found exercises"})]})},Je=r.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ke=r.ul`
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
      background-color: ${i.colorOrange};
    }

    &:nth-child(-n + 2) h2 {
      color: rgba(239, 237, 232, 0.8);
    }
  }
`,O=r.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 160px;
  padding: 14px 10px 14px 14px;
  background-color: ${i.colorDiaryItem};
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
`,C=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,I=r.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,E=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Xe=r.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Ze=r.div`
  width: 24px;
  height: 24px;
  background-color: ${i.colorBeige};
  border-radius: 50%;
`,W=r.svg`
  width: 20px;
  height: 20px;
  fill: ${i.colorOrange1};
`,qe=r.svg`
  width: 24px;
  height: 24px;
`,et=r.p`
  font-size: 14px;
  line-height: 18px;
  color: ${i.colorInput};

  @media screen and (max-width: 374px) {
    max-width: calc(100% - 72px);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,tt=n=>{var D,v,w;const l=(D=n==null?void 0:n.userDiaryInformation[0])==null?void 0:D.consumedCalories,o=(v=n==null?void 0:n.userDiaryInformation[1])==null?void 0:v.burnedCalories,s=(w=n==null?void 0:n.userDiaryInformation[1])==null?void 0:w.totalExerciseTime,a=j(Y),d=a==null?void 0:a.resultBMR,[h,x]=g.useState(!1),[c,m]=g.useState(!1),t=j(G);g.useEffect(()=>{(async()=>{await Z()})()},[]);const p=d-l,y=Math.round((110*60-s)/60);return g.useEffect(()=>{p<0&&x(!0),y<0&&m(!0)},[p,y]),e.jsxs(Je,{children:[e.jsxs(Ke,{children:[e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(E,{children:d||"2200"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(E,{children:"110 min"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(E,{children:t?0:l})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(E,{children:o&&!t?o:0})]}),e.jsxs(O,{className:h?"redBg":"",children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(E,{children:p||d})]}),e.jsxs(O,{className:c?"greenBg":"",children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(E,{children:[y||"110"," min"]})]})]}),e.jsxs(Xe,{children:[e.jsx(Ze,{children:e.jsx(qe,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(et,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},it=r.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,nt=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ot=r.div`
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
`,rt=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ct=()=>{const n=F(),l=j(Q),o=j(Ye),s=j(ue),a=j(je),[d,h]=g.useState(new Date),x=j(Y),c=x?x.createdAt:null,m=A(d),t=A(c);return g.useEffect(()=>{(async y=>{try{await n(Z(y))}catch{}})(d)},[n,m,d]),e.jsx(be,{children:o||s?e.jsx(_,{}):e.jsxs(it,{children:[e.jsxs(nt,{children:[e.jsx($e,{contentText:"Diary"}),e.jsx(Le,{currentDate:d,setCurrentDate:h,userDateRegistration:t})]}),e.jsxs(rt,{children:[e.jsx(tt,{userDiaryInformation:l,bmr:a}),e.jsxs(ot,{children:[e.jsx(Ge,{currentDate:d}),e.jsx(Ve,{currentDate:d})]})]})]})})};export{ct as default};
