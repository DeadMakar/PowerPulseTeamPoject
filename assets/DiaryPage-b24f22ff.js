import{u as r,a as t,y as A,j as e,z as xe,B as P,r as g,w as fe,s as m,R as me,b,d as _,f as Y,N as K,A as ge,D as we,E as X,F as ye,G as ue,C as je,H as be}from"./index-7e8f680d.js";import{i as ve}from"./index-500207fa.js";import{T as $e}from"./TitlePage-7c538490.js";import{T as De,_ as N}from"./emotion-element-c39617d8.browser.esm-ac9e8d96.js";import"./floating-ui.dom-9d61e2db.js";const Se=r.div`
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
      fill: ${t.colorOrange};
    }
  }
`,ze=r.p`
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
`,Te=r.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
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
      stroke: ${t.colorOrange};
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
      fill: ${t.colorOrange};
    }
  }
`,Ie=r.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Ee=r.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
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
`;const Ae=({selectedDate:o,setSelectedDate:a,isOpen:n,onClose:s,setCurrentDate:h,userDateRegistration:d})=>{const c=A(new Date),f=i=>{const x=A(i);c>=x&&x>=d?(a(i),h(i),s()):P.error(`SORRY!!! You can review the information from the day of your registration: ${d} up to today: ${c}. `,{theme:"dark"})},p=i=>i<d&&i>c,l=i=>p(i)?"disabled-day":null;return e.jsxs(We,{children:[e.jsx(ve,{selected:o,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:i=>i.substr(0,1),open:n,customInput:e.jsx("div",{style:{display:"none"}}),onChange:f,minDate:new Date(d),maxDate:new Date(c),dayClassName:l}),e.jsx(xe,{})]})},Pe=({currentDate:o,setCurrentDate:a,userDateRegistration:n})=>{const[s,h]=g.useState(o),[d,c]=g.useState(!1),[f,p]=g.useState(!1),[l,i]=g.useState(!1),x=()=>{c(!d)},u=()=>{p(!0);const w=new Date(o);A(w)>n?(w.setDate(w.getDate()-1),a(w),h(w),p(!1)):(P.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${n}.`,{theme:"dark"}),p(!0))},D=()=>{i(!0);const w=A(new Date),$=new Date(s);$.setDate(s.getDate()+1),$>new Date?(P.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${w}.`,{theme:"dark"}),i(!0)):(a($),h($),i(!1))},v=()=>{c(!1)};return e.jsxs(Se,{children:[e.jsxs(Oe,{onClick:x,children:[e.jsx(ze,{children:fe(s,"dd/MM/yyyy")}),e.jsx(Te,{children:e.jsx("use",{href:m+"#icon-calendar"})})]}),e.jsx(Ce,{type:"button",onClick:u,children:e.jsx(Ie,{className:f?"passivePrev":"",children:e.jsx("use",{href:m+"#icon-chevron-left"})})}),e.jsx(ke,{type:"button",onClick:D,children:e.jsx(Ee,{className:l?"passiveNext":"",children:e.jsx("use",{href:m+"#icon-chevron-right"})})}),e.jsx(Ae,{selectedDate:s,setSelectedDate:h,isOpen:d,onClose:v,setCurrentDate:a,userDateRegistration:n})]})};function Le(o){return Object.keys(o).length===0}function Be(o=null){const a=g.useContext(De);return!a||Le(a)?o:a}function Z(o,a){const n=N({},a);return Object.keys(o).forEach(s=>{if(s.toString().match(/^(components|slots)$/))n[s]=N({},o[s],n[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const h=o[s]||{},d=a[s];n[s]={},!d||!Object.keys(d)?n[s]=h:!h||!Object.keys(h)?n[s]=d:(n[s]=N({},d),Object.keys(h).forEach(c=>{n[s][c]=Z(h[c],d[c])}))}else n[s]===void 0&&(n[s]=o[s])}),n}function Me(o){const{theme:a,name:n,props:s}=o;return!a||!a.components||!a.components[n]||!a.components[n].defaultProps?s:Z(a.components[n].defaultProps,s)}const Re=typeof window<"u"?g.useLayoutEffect:g.useEffect,He=Re;function Ne(o,a,n,s,h){const[d,c]=g.useState(()=>h&&n?n(o).matches:s?s(o).matches:a);return He(()=>{let f=!0;if(!n)return;const p=n(o),l=()=>{f&&c(p.matches)};return l(),p.addListener(l),()=>{f=!1,p.removeListener(l)}},[o,n]),d}const q=me["useSyncExternalStore"];function _e(o,a,n,s,h){const d=g.useCallback(()=>a,[a]),c=g.useMemo(()=>{if(h&&n)return()=>n(o).matches;if(s!==null){const{matches:i}=s(o);return()=>i}return d},[d,o,s,h,n]),[f,p]=g.useMemo(()=>{if(n===null)return[d,()=>()=>{}];const i=n(o);return[()=>i.matches,x=>(i.addListener(x),()=>{i.removeListener(x)})]},[d,n,o]);return q(p,f,c)}function ee(o,a={}){const n=Be(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:d=s?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:f=!1}=Me({name:"MuiUseMediaQuery",props:a,theme:n});let p=typeof o=="function"?o(n):o;return p=p.replace(/^@media( ?)/m,""),(q!==void 0?_e:Ne)(p,h,d,c,f)}const te=r.div`
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
`,ie=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ne=r.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,oe=r.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,re=r.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,se=r.p`
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
`,Ye=r.ul`
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
`,U=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,j=r.li`
  @media screen and (max-width: 375px) {
    width: 100%;

    &:first-of-type {
      color: ${t.colorOrange1};
      font-size: 12px;
      line-height: 1.5;
      margin-bottom: 8px;
    }

    &::first-letter {
      text-transform: uppercase;
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
`,T=r.li`
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
`,de=r.div`
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
`,ae=r.div`
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
`,he=r.div`
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
`,ce=r.div`
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
`,R=r.button`
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
`,H=r.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,V=r.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Q=o=>o.diary.allDiaryInformation,Qe=o=>o.diary.isLoading,F=o=>o.diary.error,pe=o=>{if(!(o instanceof Date))return null;const a=String(o.getDate()).padStart(2,"0"),n=String(o.getMonth()+1).padStart(2,"0"),s=o.getFullYear();return`${a}-${n}-${s}`},Fe=({currentDate:o})=>{var l;const n=(l=b(Q)[0])==null?void 0:l.productArr,s=_(),h=b(Y),d=h==null?void 0:h.blood,c=b(F),f=ee("(max-width:768px)"),p=async i=>{const x=pe(o);try{await s(ge({productId:i,selectedDate:x}))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(te,{children:[e.jsxs(ie,{children:[e.jsx(ne,{children:"Products"}),e.jsx(oe,{children:e.jsxs(K,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(re,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:m+"#icon-arrow"})})]})})]}),n&&n.length>0&&!c?f?e.jsx(B,{children:e.jsx(M,{children:n==null?void 0:n.map(i=>{var G;const x=i==null?void 0:i.title,u=i==null?void 0:i.calories,D=i==null?void 0:i.amount,v=i==null?void 0:i._id,w=(G=i==null?void 0:i.productId)==null?void 0:G.groupBloodNotAllowed,$=i==null?void 0:i.category,L=w&&w[d]?"Yes":"No";return e.jsxs(U,{children:[e.jsx(j,{children:"Title"}),e.jsx(j,{children:x}),e.jsx(j,{children:"Category"}),e.jsx(j,{children:$}),e.jsxs(le,{children:[e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Calories"}),e.jsx(j,{children:u})]}),e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Weight"}),e.jsx(j,{children:D})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Recommend"}),e.jsx(j,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:L==="Yes"?e.jsx("use",{href:m+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:m+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(V,{children:L})]})})]}),e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:""}),e.jsx(j,{children:e.jsx(R,{type:"button",onClick:()=>p(v),children:e.jsx(H,{children:e.jsx("use",{href:m+"#icon-trash-03"})})})})]})]})]},v)})})}):e.jsxs(B,{children:[e.jsxs(Ye,{children:[e.jsx(z,{children:"Title"}),e.jsx(z,{children:"Category"}),e.jsx(z,{children:"Calories"}),e.jsx(z,{children:"Weight"}),e.jsx(z,{children:"Recommend"}),e.jsx(z,{children:""})]}),e.jsx(M,{children:n==null?void 0:n.map(i=>{const x=i==null?void 0:i.title,u=i==null?void 0:i.calories,D=i==null?void 0:i.amount,v=i==null?void 0:i._id,w=i==null?void 0:i.productId.groupBloodNotAllowed,$=i==null?void 0:i.category,L=w&&w[d]?"Yes":"No";return e.jsxs(U,{children:[e.jsx(T,{children:x}),e.jsx(T,{children:$}),e.jsx(T,{children:u}),e.jsx(T,{children:D}),e.jsx(T,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:L==="Yes"?e.jsx("use",{href:m+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:m+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(V,{children:L})]})}),e.jsx(T,{children:e.jsx(R,{type:"button",onClick:()=>p(v),children:e.jsx(H,{children:e.jsx("use",{href:m+"#icon-trash-03"})})})})]},v)})})]}):e.jsx(se,{children:"Not found products"})]})},Ge=r.ul`
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
`,J=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,y=r.li`
  @media screen and (max-width: 375px) {
    width: 100%;
    margin-bottom: 8px;

    &::first-letter {
      text-transform: uppercase;
    }

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
`,k=r.li`
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
`,Ue=({currentDate:o})=>{var p;const n=(p=b(Q)[1])==null?void 0:p.exerciseArr,s=ee("(max-width:768px)"),h=b(F),d=_(),c=async l=>{const i=pe(o);try{await d(we({exerciseId:l,selectedDate:i}))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}},f=l=>{const i=Math.floor(l/60).toString().padStart(2,"0"),x=(l%60).toString().padStart(2,"0");return`${i}:${x}`};return e.jsxs(te,{children:[e.jsxs(ie,{children:[e.jsx(ne,{children:"Exercises"}),e.jsx(oe,{children:e.jsxs(K,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(re,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:m+"#icon-arrow"})})]})})]}),n&&n.length>0&&!h?s?e.jsx(B,{children:e.jsx(M,{children:n==null?void 0:n.map(l=>e.jsxs(J,{children:[e.jsx(y,{children:"Body Part"}),e.jsx(y,{children:l.bodyPart}),e.jsx(y,{children:"Equipment"}),e.jsx(y,{children:l.equipment}),e.jsx(y,{children:"Name"}),e.jsx(y,{children:l.name}),e.jsxs(le,{children:[e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Target"}),e.jsx(y,{children:l.target})]}),e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Burned Calories"}),e.jsx(y,{children:l.calories})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Time"}),e.jsx(y,{children:f(l.time)})]}),e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(R,{type:"button",onClick:()=>c(l._id),children:e.jsx(H,{children:e.jsx("use",{href:m+"#icon-trash-03"})})})})]})]})]},l._id))})}):e.jsxs(B,{children:[e.jsxs(Ge,{children:[e.jsx(S,{children:"Body Part"}),e.jsx(S,{children:"Equipment"}),e.jsx(S,{children:"Name"}),e.jsx(S,{children:"Target"}),e.jsx(S,{children:"Burned Calories"}),e.jsx(S,{children:"Time"}),e.jsx(S,{children:""})]}),e.jsx(M,{children:n.map(l=>e.jsxs(J,{children:[e.jsx(k,{children:l.bodyPart}),e.jsx(k,{children:l.equipment}),e.jsx(k,{children:l.name}),e.jsx(k,{children:l.target}),e.jsx(k,{children:l.calories}),e.jsx(k,{children:f(l.time)}),e.jsx(k,{children:e.jsx(R,{type:"button",onClick:()=>c(l._id),children:e.jsx(H,{children:e.jsx("use",{href:m+"#icon-trash-03"})})})})]},l._id))})]}):e.jsx(se,{children:"Not found exercises"})]})},Ve=r.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Je=r.ul`
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
`,O=r.li`
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
`,Ke=r.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Xe=r.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,W=r.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Ze=r.svg`
  width: 24px;
  height: 24px;
`,qe=r.p`
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
`,et=o=>{var D,v,w;const a=(D=o==null?void 0:o.userDiaryInformation[0])==null?void 0:D.consumedCalories,n=(v=o==null?void 0:o.userDiaryInformation[1])==null?void 0:v.burnedCalories,s=(w=o==null?void 0:o.userDiaryInformation[1])==null?void 0:w.totalExerciseTime,h=b(Y),d=h==null?void 0:h.resultBMR,[c,f]=g.useState(!1),[p,l]=g.useState(!1),i=b(F);g.useEffect(()=>{(async()=>{await X()})()},[]);const x=d-a,u=Math.round((110*60-s)/60);return g.useEffect(()=>{x<0&&f(!0),u<0&&l(!0)},[x,u]),e.jsxs(Ve,{children:[e.jsxs(Je,{children:[e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:m+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(E,{children:d||"2200"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:m+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(E,{children:"110 min"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:m+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(E,{children:i?0:a})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:m+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(E,{children:n&&!i?n:0})]}),e.jsxs(O,{className:c?"redBg":"",children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:m+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(E,{children:x||"0"})]}),e.jsxs(O,{className:p?"greenBg":"",children:[e.jsxs(C,{children:[e.jsx(W,{children:e.jsx("use",{href:m+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(E,{children:[u||"110"," min"]})]})]}),e.jsxs(Ke,{children:[e.jsx(Xe,{children:e.jsx(Ze,{children:e.jsx("use",{href:m+"#icon-exclamation-mark"})})}),e.jsx(qe,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},tt=r.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,it=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,nt=r.div`
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
`,ot=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ht=()=>{const o=_(),a=b(Q),n=b(Qe),s=b(ye),h=b(ue),[d,c]=g.useState(new Date),f=b(Y),p=f?f.createdAt:null,l=A(d),i=A(p);return g.useEffect(()=>{(async u=>{try{await o(X(u))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}})(d)},[o,l,d]),e.jsx(je,{children:n||s?e.jsx(be,{}):e.jsxs(tt,{children:[e.jsxs(it,{children:[e.jsx($e,{contentText:"Diary"}),e.jsx(Pe,{currentDate:d,setCurrentDate:c,userDateRegistration:i})]}),e.jsxs(ot,{children:[e.jsx(et,{userDiaryInformation:a,bmr:h}),e.jsxs(nt,{children:[e.jsx(Fe,{currentDate:d}),e.jsx(Ue,{currentDate:d})]})]})]})})};export{ht as default};
