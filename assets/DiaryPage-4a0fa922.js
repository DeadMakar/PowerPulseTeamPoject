import{u as r,a as t,y as L,j as e,z as fe,B as A,r as y,w as me,s as f,R as ge,A as we,b as j,d as Y,f as Q,N as Z,D as ye,E as ue,F as je,G as be,C as ve,H as $e,I as De}from"./index-97c0f8cc.js";import{i as Se}from"./index-5789e8b6.js";import{T as ke}from"./TitlePage-db80d45c.js";import{T as ze,_}from"./emotion-element-c39617d8.browser.esm-38d20052.js";import"./floating-ui.dom-9d61e2db.js";const Te=r.div`
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
`;const Be=({selectedDate:i,setSelectedDate:a,isOpen:o,onClose:l,setCurrentDate:c,userDateRegistration:d})=>{const h=L(new Date),x=s=>{const n=L(s);h>=n&&n>=d?(a(s),c(s),l()):A.error(`SORRY!!! You can review the information from the day of your registration: ${d} up to today: ${h}. `,{theme:"dark"})},p=s=>s<d&&s>h,m=s=>p(s)?"disabled-day":null;return e.jsxs(Ae,{children:[e.jsx(Se,{selected:i,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:o,customInput:e.jsx("div",{style:{display:"none"}}),onChange:x,minDate:new Date(d),maxDate:new Date(h),dayClassName:m}),e.jsx(fe,{})]})},Me=({currentDate:i,setCurrentDate:a,userDateRegistration:o})=>{const[l,c]=y.useState(i),[d,h]=y.useState(!1),[x,p]=y.useState(!1),[m,s]=y.useState(!1),n=()=>{h(!d)},g=()=>{p(!0);const w=new Date(i);L(w)>o?(w.setDate(w.getDate()-1),a(w),c(w),p(!1)):(A.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${o}.`,{theme:"dark"}),p(!0))},$=()=>{s(!0);const w=L(new Date),v=new Date(l);v.setDate(l.getDate()+1),v>new Date?(A.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${w}.`,{theme:"dark"}),s(!0)):(a(v),c(v),s(!1))},D=()=>{h(!1)};return e.jsxs(Te,{children:[e.jsxs(Ee,{onClick:n,children:[e.jsx(Oe,{children:me(l,"dd/MM/yyyy")}),e.jsx(Ie,{children:e.jsx("use",{href:f+"#icon-calendar"})})]}),e.jsx(Pe,{type:"button",onClick:g,children:e.jsx(Le,{className:x?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(Ce,{type:"button",onClick:$,children:e.jsx(We,{className:m?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Be,{selectedDate:l,setSelectedDate:c,isOpen:d,onClose:D,setCurrentDate:a,userDateRegistration:o})]})};function Re(i){return Object.keys(i).length===0}function He(i=null){const a=y.useContext(ze);return!a||Re(a)?i:a}function q(i,a){const o=_({},a);return Object.keys(i).forEach(l=>{if(l.toString().match(/^(components|slots)$/))o[l]=_({},i[l],o[l]);else if(l.toString().match(/^(componentsProps|slotProps)$/)){const c=i[l]||{},d=a[l];o[l]={},!d||!Object.keys(d)?o[l]=c:!c||!Object.keys(c)?o[l]=d:(o[l]=_({},d),Object.keys(c).forEach(h=>{o[l][h]=q(c[h],d[h])}))}else o[l]===void 0&&(o[l]=i[l])}),o}function Ne(i){const{theme:a,name:o,props:l}=i;return!a||!a.components||!a.components[o]||!a.components[o].defaultProps?l:q(a.components[o].defaultProps,l)}const Fe=typeof window<"u"?y.useLayoutEffect:y.useEffect,_e=Fe;function Ye(i,a,o,l,c){const[d,h]=y.useState(()=>c&&o?o(i).matches:l?l(i).matches:a);return _e(()=>{let x=!0;if(!o)return;const p=o(i),m=()=>{x&&h(p.matches)};return m(),p.addListener(m),()=>{x=!1,p.removeListener(m)}},[i,o]),d}const ee=ge["useSyncExternalStore"];function Qe(i,a,o,l,c){const d=y.useCallback(()=>a,[a]),h=y.useMemo(()=>{if(c&&o)return()=>o(i).matches;if(l!==null){const{matches:s}=l(i);return()=>s}return d},[d,i,l,c,o]),[x,p]=y.useMemo(()=>{if(o===null)return[d,()=>()=>{}];const s=o(i);return[()=>s.matches,n=>(s.addListener(n),()=>{s.removeListener(n)})]},[d,o,i]);return ee(p,x,h)}function te(i,a={}){const o=He(),l=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:c=!1,matchMedia:d=l?window.matchMedia:null,ssrMatchMedia:h=null,noSsr:x=!1}=Ne({name:"MuiUseMediaQuery",props:a,theme:o});let p=typeof i=="function"?i(o):i;return p=p.replace(/^@media( ?)/m,""),(ee!==void 0?Qe:Ye)(p,c,d,h,x)}const ie=r.div`
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
    color: ${t.colorOrange1};
  }
`,se=r.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,le=r.p`
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
`,b=r.li`
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
`,de=r.div`
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
`,G=i=>i.diary.allDiaryInformation,Ue=i=>i.diary.isLoading,U=i=>i.diary.error,Ve=i=>i.diary.isLoadingProducts,Je=i=>i.diary.isLoadingExercise,xe=i=>{if(!(i instanceof Date))return null;const a=String(i.getDate()).padStart(2,"0"),o=String(i.getMonth()+1).padStart(2,"0"),l=i.getFullYear();return`${a}-${o}-${l}`},Ke=we`
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
`,N=()=>e.jsx(Xe,{children:e.jsx(Ze,{})}),qe=({currentDate:i})=>{var s;const o=(s=j(G)[0])==null?void 0:s.productArr,l=j(Ve),c=Y(),d=j(Q),h=d==null?void 0:d.blood,x=j(U),p=te("(max-width:768px)"),m=async n=>{const g=xe(i);try{await c(ye({productId:n,selectedDate:g}))}catch{A.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(oe,{children:"Products"}),e.jsx(re,{children:e.jsxs(Z,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(se,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),o&&o.length>0&&!x?p?e.jsx(B,{children:l?e.jsx(N,{}):e.jsx(e.Fragment,{children:e.jsx(M,{children:o==null?void 0:o.map(n=>{var V;const g=n==null?void 0:n.title,$=n==null?void 0:n.calories,D=n==null?void 0:n.amount,w=n==null?void 0:n._id,v=(V=n==null?void 0:n.productId)==null?void 0:V.groupBloodNotAllowed,F=n==null?void 0:n.category,W=v&&v[h]?"Yes":"No";return e.jsxs(J,{children:[e.jsx(b,{children:"Title"}),e.jsx(b,{children:g}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:F}),e.jsxs(de,{children:[e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Calories"}),e.jsx(b,{children:$})]}),e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Weight"}),e.jsx(b,{children:D})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Recommend"}),e.jsx(b,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:W==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(K,{children:W})]})})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:""}),e.jsx(b,{children:e.jsx(R,{type:"button",onClick:()=>m(w),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},w)})})})}):e.jsx(B,{children:l?e.jsx(N,{}):e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{children:[e.jsx(z,{children:"Title"}),e.jsx(z,{children:"Category"}),e.jsx(z,{children:"Calories"}),e.jsx(z,{children:"Weight"}),e.jsx(z,{children:"Recommend"}),e.jsx(z,{children:""})]}),e.jsx(M,{children:o==null?void 0:o.map(n=>{const g=n==null?void 0:n.title,$=n==null?void 0:n.calories,D=n==null?void 0:n.amount,w=n==null?void 0:n._id,v=n==null?void 0:n.productId.groupBloodNotAllowed,F=n==null?void 0:n.category,W=v&&v[h]?"Yes":"No";return e.jsxs(J,{children:[e.jsx(T,{children:g}),e.jsx(T,{children:F}),e.jsx(T,{children:$}),e.jsx(T,{children:D}),e.jsx(T,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:W==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(K,{children:W})]})}),e.jsx(T,{children:e.jsx(R,{type:"button",onClick:()=>m(w),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},w)})})]})}):e.jsx(le,{children:"Not found products"})]})},et=r.ul`
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
`,tt=({currentDate:i})=>{var m;const a=j(G),o=j(Je),l=(m=a[1])==null?void 0:m.exerciseArr,c=te("(max-width:768px)"),d=j(U),h=Y(),x=async s=>{const n=xe(i);try{await h(ue({exerciseId:s,selectedDate:n}))}catch{A.error("Sorry, something went wrong, please try again",{theme:"dark"})}},p=s=>{const n=Math.floor(s/60).toString().padStart(2,"0"),g=(s%60).toString().padStart(2,"0");return`${n}:${g}`};return e.jsxs(ie,{children:[e.jsxs(ne,{children:[e.jsx(oe,{children:"Exercises"}),e.jsx(re,{children:e.jsxs(Z,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(se,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),l&&l.length>0&&!d?c?e.jsx(B,{children:o?e.jsx(N,{}):e.jsx(e.Fragment,{children:e.jsx(M,{children:l==null?void 0:l.map(s=>e.jsxs(X,{children:[e.jsx(u,{children:"Body Part"}),e.jsx(u,{children:s.bodyPart}),e.jsx(u,{children:"Equipment"}),e.jsx(u,{children:s.equipment}),e.jsx(u,{children:"Name"}),e.jsx(u,{children:s.name}),e.jsxs(de,{children:[e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Target"}),e.jsx(u,{children:s.target})]}),e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Burned Calories"}),e.jsx(u,{children:s.calories})]}),e.jsxs(he,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Time"}),e.jsx(u,{children:p(s.time)})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{}),e.jsx(u,{children:e.jsx(R,{type:"button",onClick:()=>x(s._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},s._id))})})}):e.jsx(B,{children:o?e.jsx(N,{}):e.jsxs(e.Fragment,{children:[e.jsxs(et,{children:[e.jsx(S,{children:"Body Part"}),e.jsx(S,{children:"Equipment"}),e.jsx(S,{children:"Name"}),e.jsx(S,{children:"Target"}),e.jsx(S,{children:"Burned Calories"}),e.jsx(S,{children:"Time"}),e.jsx(S,{children:""})]}),e.jsx(M,{children:l.map(s=>e.jsxs(X,{children:[e.jsx(k,{children:s.bodyPart}),e.jsx(k,{children:s.equipment}),e.jsx(k,{children:s.name}),e.jsx(k,{children:s.target}),e.jsx(k,{children:s.calories}),e.jsx(k,{children:p(s.time)}),e.jsx(k,{children:e.jsx(R,{type:"button",onClick:()=>x(s._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},s._id))})]})}):e.jsx(le,{children:"Not found exercises"})]})},it=r.div`
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
`,dt=i=>{var $,D,w;const a=($=i==null?void 0:i.userDiaryInformation[0])==null?void 0:$.consumedCalories,o=(D=i==null?void 0:i.userDiaryInformation[1])==null?void 0:D.burnedCalories,l=(w=i==null?void 0:i.userDiaryInformation[1])==null?void 0:w.totalExerciseTime,c=j(Q),d=c==null?void 0:c.resultBMR,[h,x]=y.useState(!1),[p,m]=y.useState(!1),s=j(U),n=d-a,g=Math.round((110*60-l)/60);return y.useEffect(()=>{n<0&&x(!0),g<0&&m(!0)},[n,g]),e.jsxs(it,{children:[e.jsxs(nt,{children:[e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(E,{children:d||"2200"})]}),e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(E,{children:"110 min"})]}),e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(E,{children:s?0:a})]}),e.jsxs(C,{children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(E,{children:o&&!s?o:0})]}),e.jsxs(C,{className:h?"redBg":"",children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(E,{children:n||d})]}),e.jsxs(C,{className:p?"greenBg":"",children:[e.jsxs(O,{children:[e.jsx(P,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(E,{children:[g||"110"," min"]})]})]}),e.jsxs(ot,{children:[e.jsx(rt,{children:e.jsx(st,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(lt,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},at=r.div`
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
`,yt=()=>{const i=Y(),a=j(G),o=j(Ue),l=j(je),c=j(be),[d,h]=y.useState(new Date),x=j(Q),p=x?x.createdAt:null,m=L(d),s=L(p);return y.useEffect(()=>{(async g=>{try{await i(De(g))}catch{}})(d)},[i,m,d]),e.jsx(ve,{children:o||l?e.jsx($e,{}):e.jsxs(at,{children:[e.jsxs(ct,{children:[e.jsx(ke,{contentText:"Diary"}),e.jsx(Me,{currentDate:d,setCurrentDate:h,userDateRegistration:s})]}),e.jsxs(pt,{children:[e.jsx(dt,{userDiaryInformation:a,bmr:c}),e.jsxs(ht,{children:[e.jsx(qe,{currentDate:d}),e.jsx(tt,{currentDate:d})]})]})]})})};export{yt as default};
