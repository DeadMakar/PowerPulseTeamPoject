import{u as r,a as t,y as L,j as e,z as me,B as A,r as g,w as ge,s as f,R as we,A as ye,b as j,d as Y,f as Q,N as Z,D as ue,E as je,F as q,G as be,H as ve,C as $e,I as De}from"./index-53c3d858.js";import{i as Se}from"./index-05baa002.js";import{T as ke}from"./TitlePage-5cd4af8c.js";import{T as ze,_}from"./emotion-element-c39617d8.browser.esm-bf5e3d79.js";import"./floating-ui.dom-9d61e2db.js";const Te=r.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,Ce=r.button`
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
`,Oe=r.p`
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
`,Ie=r.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ee=r.button`
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
`,Pe=r.button`
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
`,Le=r.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,We=r.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Ae=r.div`
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
`;const Be=({selectedDate:i,setSelectedDate:a,isOpen:o,onClose:l,setCurrentDate:c,userDateRegistration:d})=>{const h=L(new Date),x=s=>{const n=L(s);h>=n&&n>=d?(a(s),c(s),l()):A.error(`SORRY!!! You can review the information from the day of your registration: ${d} up to today: ${h}. `,{theme:"dark"})},p=s=>s<d&&s>h,m=s=>p(s)?"disabled-day":null;return e.jsxs(Ae,{children:[e.jsx(Se,{selected:i,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:o,customInput:e.jsx("div",{style:{display:"none"}}),onChange:x,minDate:new Date(d),maxDate:new Date(h),dayClassName:m}),e.jsx(me,{})]})},Me=({currentDate:i,setCurrentDate:a,userDateRegistration:o})=>{const[l,c]=g.useState(i),[d,h]=g.useState(!1),[x,p]=g.useState(!1),[m,s]=g.useState(!1),n=()=>{h(!d)},w=()=>{p(!0);const y=new Date(i);L(y)>o?(y.setDate(y.getDate()-1),a(y),c(y),p(!1)):(A.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${o}.`,{theme:"dark"}),p(!0))},$=()=>{s(!0);const y=L(new Date),b=new Date(l);b.setDate(l.getDate()+1),b>new Date?(A.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${y}.`,{theme:"dark"}),s(!0)):(a(b),c(b),s(!1))},D=()=>{h(!1)};return e.jsxs(Te,{children:[e.jsxs(Ee,{onClick:n,children:[e.jsx(Oe,{children:ge(l,"dd/MM/yyyy")}),e.jsx(Ie,{children:e.jsx("use",{href:f+"#icon-calendar"})})]}),e.jsx(Pe,{type:"button",onClick:w,children:e.jsx(Le,{className:x?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(Ce,{type:"button",onClick:$,children:e.jsx(We,{className:m?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Be,{selectedDate:l,setSelectedDate:c,isOpen:d,onClose:D,setCurrentDate:a,userDateRegistration:o})]})};function Re(i){return Object.keys(i).length===0}function He(i=null){const a=g.useContext(ze);return!a||Re(a)?i:a}function ee(i,a){const o=_({},a);return Object.keys(i).forEach(l=>{if(l.toString().match(/^(components|slots)$/))o[l]=_({},i[l],o[l]);else if(l.toString().match(/^(componentsProps|slotProps)$/)){const c=i[l]||{},d=a[l];o[l]={},!d||!Object.keys(d)?o[l]=c:!c||!Object.keys(c)?o[l]=d:(o[l]=_({},d),Object.keys(c).forEach(h=>{o[l][h]=ee(c[h],d[h])}))}else o[l]===void 0&&(o[l]=i[l])}),o}function Ne(i){const{theme:a,name:o,props:l}=i;return!a||!a.components||!a.components[o]||!a.components[o].defaultProps?l:ee(a.components[o].defaultProps,l)}const Fe=typeof window<"u"?g.useLayoutEffect:g.useEffect,_e=Fe;function Ye(i,a,o,l,c){const[d,h]=g.useState(()=>c&&o?o(i).matches:l?l(i).matches:a);return _e(()=>{let x=!0;if(!o)return;const p=o(i),m=()=>{x&&h(p.matches)};return m(),p.addListener(m),()=>{x=!1,p.removeListener(m)}},[i,o]),d}const te=we["useSyncExternalStore"];function Qe(i,a,o,l,c){const d=g.useCallback(()=>a,[a]),h=g.useMemo(()=>{if(c&&o)return()=>o(i).matches;if(l!==null){const{matches:s}=l(i);return()=>s}return d},[d,i,l,c,o]),[x,p]=g.useMemo(()=>{if(o===null)return[d,()=>()=>{}];const s=o(i);return[()=>s.matches,n=>(s.addListener(n),()=>{s.removeListener(n)})]},[d,o,i]);return te(p,x,h)}function ie(i,a={}){const o=He(),l=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:c=!1,matchMedia:d=l?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:x=!1}=Ne({name:"MuiUseMediaQuery",props:a,theme:o});let p=typeof i=="function"?i(o):i;return p=p.replace(/^@media( ?)/m,""),(te!==void 0?Qe:Ye)(p,c,d,h,x)}const ne=r.div`
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
`,oe=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,re=r.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,se=r.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,le=r.span`
  color: ${t.colorOrange};
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
`,Ge=r.ul`
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
`,v=r.li`
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
`,ae=r.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,ce=r.div`
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
      width: 78px;
    }
  }
`,pe=r.div`
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
`,xe=r.div`
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
`,K=r.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,G=i=>i.diary.allDiaryInformation,Ue=i=>i.diary.isLoading,U=i=>i.diary.error,Ve=i=>i.diary.isLoadingProducts,Je=i=>i.diary.isLoadingExercise,fe=i=>{if(!(i instanceof Date))return null;const a=String(i.getDate()).padStart(2,"0"),o=String(i.getMonth()+1).padStart(2,"0"),l=i.getFullYear();return`${a}-${o}-${l}`},Ke=ye`
  0% {
    clip: rect(0, 0, 100px, 0);
    opacity: 0.4;
  }
  4% {
    clip: rect(0, 66.66667px, 100px, 0);
    opacity: 0.6;
  }
  15% {
    clip: rect(0, 133.33333px, 100px, 0);
    opacity: 0.8;
  }
  20% {
    clip: rect(0, 300px, 100px, 0);
    opacity: 1;
  }
  80% {
    clip: rect(0, 300px, 100px, 0);
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    clip: rect(0, 300px, 100px, 0);
    opacity: 0;
  }
`,Xe=r.div`
  height: 100px;
  width: 200px;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`,Ze=r.div`
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200px 100px" enable-background="new 0 0 200px 100px" xml:space="preserve"><polyline fill="none" stroke-width="3px" stroke="rgb(255, 68, 51)" points="2.4,58.7 70.8,58.7 76.1,46.2 81.1,58.7 89.9,58.7 93.8,66.5 102.8,22.7 110.6,78.7 115.3,58.7 126.4,58.7 134.4,54.7 142.4,58.7 197.8,58.7 "/></svg>')
    0 0 no-repeat;
  animation: ${Ke} 2s linear infinite;
`,N=()=>e.jsx(Xe,{children:e.jsx(Ze,{})}),qe=({currentDate:i})=>{var s;const o=(s=j(G)[0])==null?void 0:s.productArr,l=j(Ve),c=Y(),d=j(Q),h=d==null?void 0:d.blood,x=j(U),p=ie("(max-width:768px)"),m=async n=>{const w=fe(i);try{await c(ue({productId:n,selectedDate:w}))}catch{A.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(ne,{children:[e.jsxs(oe,{children:[e.jsx(re,{children:"Products"}),e.jsx(se,{children:e.jsxs(Z,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(le,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),o&&o.length>0&&!x?p?e.jsx(B,{children:l?e.jsx(N,{}):e.jsx(e.Fragment,{children:e.jsx(M,{children:o==null?void 0:o.map(n=>{var V;const w=n==null?void 0:n.title,$=n==null?void 0:n.calories,D=n==null?void 0:n.amount,y=n==null?void 0:n._id,b=(V=n==null?void 0:n.productId)==null?void 0:V.groupBloodNotAllowed,F=n==null?void 0:n.category,W=b&&b[h]?"Yes":"No";return e.jsxs(J,{children:[e.jsx(v,{children:"Title"}),e.jsx(v,{children:w}),e.jsx(v,{children:"Category"}),e.jsx(v,{children:F}),e.jsxs(ae,{children:[e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(v,{children:"Calories"}),e.jsx(v,{children:$})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(v,{children:"Weight"}),e.jsx(v,{children:D})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(v,{children:"Recommend"}),e.jsx(v,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:W==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(K,{children:W})]})})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(v,{children:""}),e.jsx(v,{children:e.jsx(R,{type:"button",onClick:()=>m(y),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},y)})})})}):e.jsx(B,{children:l?e.jsx(N,{}):e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{children:[e.jsx(z,{children:"Title"}),e.jsx(z,{children:"Category"}),e.jsx(z,{children:"Calories"}),e.jsx(z,{children:"Weight"}),e.jsx(z,{children:"Recommend"}),e.jsx(z,{children:""})]}),e.jsx(M,{children:o==null?void 0:o.map(n=>{const w=n==null?void 0:n.title,$=n==null?void 0:n.calories,D=n==null?void 0:n.amount,y=n==null?void 0:n._id,b=n==null?void 0:n.productId.groupBloodNotAllowed,F=n==null?void 0:n.category,W=b&&b[h]?"Yes":"No";return e.jsxs(J,{children:[e.jsx(T,{children:w}),e.jsx(T,{children:F}),e.jsx(T,{children:$}),e.jsx(T,{children:D}),e.jsx(T,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:W==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(K,{children:W})]})}),e.jsx(T,{children:e.jsx(R,{type:"button",onClick:()=>m(y),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},y)})})]})}):e.jsx(de,{children:"Not found products"})]})},et=r.ul`
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
`,X=r.ul`
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
`,tt=({currentDate:i})=>{var m;const a=j(G),o=j(Je),l=(m=a[1])==null?void 0:m.exerciseArr,c=ie("(max-width:768px)"),d=j(U),h=Y(),x=async s=>{const n=fe(i);try{await h(je({exerciseId:s,selectedDate:n}))}catch{A.error("Sorry, something went wrong, please try again",{theme:"dark"})}},p=s=>{const n=Math.floor(s/60).toString().padStart(2,"0"),w=(s%60).toString().padStart(2,"0");return`${n}:${w}`};return e.jsxs(ne,{children:[e.jsxs(oe,{children:[e.jsx(re,{children:"Exercises"}),e.jsx(se,{children:e.jsxs(Z,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(le,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),l&&l.length>0&&!d?c?e.jsx(B,{children:o?e.jsx(N,{}):e.jsx(e.Fragment,{children:e.jsx(M,{children:l==null?void 0:l.map(s=>e.jsxs(X,{children:[e.jsx(u,{children:"Body Part"}),e.jsx(u,{children:s.bodyPart}),e.jsx(u,{children:"Equipment"}),e.jsx(u,{children:s.equipment}),e.jsx(u,{children:"Name"}),e.jsx(u,{children:s.name}),e.jsxs(ae,{children:[e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Target"}),e.jsx(u,{children:s.target})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Burned Calories"}),e.jsx(u,{children:s.calories})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Time"}),e.jsx(u,{children:p(s.time)})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{}),e.jsx(u,{children:e.jsx(R,{type:"button",onClick:()=>x(s._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},s._id))})})}):e.jsx(B,{children:o?e.jsx(N,{}):e.jsxs(e.Fragment,{children:[e.jsxs(et,{children:[e.jsx(S,{children:"Body Part"}),e.jsx(S,{children:"Equipment"}),e.jsx(S,{children:"Name"}),e.jsx(S,{children:"Target"}),e.jsx(S,{children:"Burned Calories"}),e.jsx(S,{children:"Time"}),e.jsx(S,{children:""})]}),e.jsx(M,{children:l.map(s=>e.jsxs(X,{children:[e.jsx(k,{children:s.bodyPart}),e.jsx(k,{children:s.equipment}),e.jsx(k,{children:s.name}),e.jsx(k,{children:s.target}),e.jsx(k,{children:s.calories}),e.jsx(k,{children:p(s.time)}),e.jsx(k,{children:e.jsx(R,{type:"button",onClick:()=>x(s._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},s._id))})]})}):e.jsx(de,{children:"Not found exercises"})]})},it=r.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,nt=r.ul`
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
`,C=r.li`
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
`,O=r.div`
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
`,ot=r.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,rt=r.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,P=r.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,st=r.svg`
  width: 24px;
  height: 24px;
`,lt=r.p`
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
`,dt=i=>{var $,D,y;const a=($=i==null?void 0:i.userDiaryInformation[0])==null?void 0:$.consumedCalories,o=(D=i==null?void 0:i.userDiaryInformation[1])==null?void 0:D.burnedCalories,l=(y=i==null?void 0:i.userDiaryInformation[1])==null?void 0:y.totalExerciseTime,c=j(Q),d=c==null?void 0:c.resultBMR,[h,x]=g.useState(!1),[p,m]=g.useState(!1),s=j(U);g.useEffect(()=>{(async()=>{await q()})()},[]);const n=d-a,w=Math.round((110*60-l)/60);return g.useEffect(()=>{n<0&&x(!0),w<0&&m(!0)},[n,w]),e.jsxs(it,{children:[e.jsxs(nt,{children:[e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(E,{children:d||"2200"})]}),e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(E,{children:"110 min"})]}),e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(E,{children:s?0:a})]}),e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(E,{children:o&&!s?o:0})]}),e.jsxs(C,{className:h?"redBg":"",children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(E,{children:n||d})]}),e.jsxs(C,{className:p?"greenBg":"",children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(E,{children:[w||"110"," min"]})]})]}),e.jsxs(ot,{children:[e.jsx(rt,{children:e.jsx(st,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(lt,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},at=r.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,ct=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ht=r.div`
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
`,pt=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,yt=()=>{const i=Y(),a=j(G),o=j(Ue),l=j(be),c=j(ve),[d,h]=g.useState(new Date),x=j(Q),p=x?x.createdAt:null,m=L(d),s=L(p);return g.useEffect(()=>{(async w=>{try{await i(q(w))}catch{}})(d)},[i,m,d]),e.jsx($e,{children:o||l?e.jsx(De,{}):e.jsxs(at,{children:[e.jsxs(ct,{children:[e.jsx(ke,{contentText:"Diary"}),e.jsx(Me,{currentDate:d,setCurrentDate:h,userDateRegistration:s})]}),e.jsxs(pt,{children:[e.jsx(dt,{userDiaryInformation:a,bmr:c}),e.jsxs(ht,{children:[e.jsx(qe,{currentDate:d}),e.jsx(tt,{currentDate:d})]})]})]})})};export{yt as default};
