import{u as i,k as se,j as e,B as C,r as m,R as ae,a as R,h as u,s as de,N as G,o as le,p as P,q as pe,t as ce,v as he,w as xe,C as fe,x as ge,y as me}from"./index-0bf735f7.js";import{s as x}from"./sprite-8de2d76c.js";import{g as t}from"./root-786e29f7.js";import{i as we,f as ye}from"./index-0723721f.js";import{T as ue}from"./TitlePage-656fa80d.js";import{u as je,g as be}from"./getThemeProps-6ef4f17c.js";import"./emotion-element-c39617d8.browser.esm-52e4bd35.js";const ve=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,ke=i.button`
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
`,$e=i.p`
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
`,De=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,_e=i.button`
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
`,Ie=i.button`
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
`,Se=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,ze=i.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Ce=i.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 10;
`;i.button`
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
`;const Oe=se`
  .react-datepicker__wrapper {
    position: absolute;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 9px 18px;
    background-color: ${t.colorOrange1};
    font-family: 'Roboto';
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;

  }
   .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header {
    position: relative;
    background-color:  ${t.colorOrange1};
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    color: ${t.colorWhite};
    font-family: 'Roboto';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
    text-align: center;
    position: relative;
    
  }
  .react-datepicker__day-name {
    margin: 0;
    padding: 8px 8px;
    color: rgba(239, 237, 232, 0.50);
    font-family: 'RobotoMedium';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.28px;
  }
  span.react-datepicker__navigation-icon {
    margin-top: 24px;
    display: none;
  }
  .react-datepicker__aria-live {
    display: none;
  }
  button.react-datepicker__navigation {
    background-color: ${t.colorOrange1};
    position: absolute;
    transform: rotate(45deg);
    border: 2px solid ${t.colorWhite};
  }
  .react-datepicker__navigation--previous {
    left: 12px;
    width: 10px;
    height: 10px;
    top: 18px;
  }
  .react-datepicker__navigation--next {
    right: 12px;
    width: 10px;
    height: 10px;
    top: 14px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: ${t.colorWhite};

  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${t.colorWhite};
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: ${t.colorWhite};
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.28px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: ${t.colorBlack};
    color: ${t.colorWhite};
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: ${t.colorWhite};
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${t.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:${t.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
   display: none;
  }
`,We=({selectedDate:o,setSelectedDate:d,isOpen:r,onClose:c,setCurrentDate:p,userDateRegistration:a,dateFormat:f})=>{const n=new Date,l=h=>{h>=a&&h<=n?(d(h),p(h),c()):C.error(`You can review the information from the day of your registration: ${a} up to today: ${n}. `,{theme:"dark"})};return e.jsxs(Ce,{children:[e.jsx(we,{selected:o,dateFormat:f,calendarStartDay:1,formatWeekDay:h=>h.substr(0,1),open:r,customInput:e.jsx("div",{style:{display:"none"}}),onChange:l,minDate:new Date(a),maxDate:n}),e.jsx(Oe,{})]})},Te=()=>{const[o,d]=m.useState(new Date),[r,c]=m.useState(o),[p,a]=m.useState(!1),[f,n]=m.useState(!1),[l,h]=m.useState(!1),s=new Date("2024-02-01"),g=()=>{a(!p)},N=()=>{n(!0);const j=new Date(o);j>s?(j.setDate(j.getDate()-1),d(j),c(j),n(!1)):(C.error(`SORRY!!! Selected date cannot be earlier than the registration date: ${s.toLocaleDateString()}.`,{theme:"dark"}),n(!0))},A=()=>{h(!0);const j=new Date,O=new Date(r);O.setDate(r.getDate()+1),O<=j?(d(O),c(O),h(!1)):(C.error(`SORRY!!! Selected date cannot be later than today's date: ${j.toLocaleDateString()}.`,{theme:"dark"}),h(!0))},M=()=>{a(!1)};return e.jsxs(ve,{children:[e.jsx($e,{onClick:g,children:ye(r,"dd/MM/yyyy")}),e.jsx(_e,{onClick:g,children:e.jsx(De,{children:e.jsx("use",{href:x+"#icon-calendar"})})}),e.jsx(Ie,{type:"button",onClick:N,children:e.jsx(Se,{className:f?"passivePrev":"",children:e.jsx("use",{href:x+"#icon-chevron-left"})})}),e.jsx(ke,{type:"button",onClick:A,children:e.jsx(ze,{className:l?"passiveNext":"",children:e.jsx("use",{href:x+"#icon-chevron-right"})})}),e.jsx(We,{selectedDate:r,dateFormat:"dd/MM/yyyy",setSelectedDate:c,isOpen:p,onClose:M,setCurrentDate:d,userDateRegistration:s,minDate:s})]})},Ee=typeof window<"u"?m.useLayoutEffect:m.useEffect,Le=Ee;function Ne(o,d,r,c,p){const[a,f]=m.useState(()=>p&&r?r(o).matches:c?c(o).matches:d);return Le(()=>{let n=!0;if(!r)return;const l=r(o),h=()=>{n&&f(l.matches)};return h(),l.addListener(h),()=>{n=!1,l.removeListener(h)}},[o,r]),a}const F=ae["useSyncExternalStore"];function Re(o,d,r,c,p){const a=m.useCallback(()=>d,[d]),f=m.useMemo(()=>{if(p&&r)return()=>r(o).matches;if(c!==null){const{matches:s}=c(o);return()=>s}return a},[a,o,c,p,r]),[n,l]=m.useMemo(()=>{if(r===null)return[a,()=>()=>{}];const s=r(o);return[()=>s.matches,g=>(s.addListener(g),()=>{s.removeListener(g)})]},[a,r,o]);return F(l,n,f)}function V(o,d={}){const r=je(),c=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:p=!1,matchMedia:a=c?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:n=!1}=be({name:"MuiUseMediaQuery",props:d,theme:r});let l=typeof o=="function"?o(r):o;return l=l.replace(/^@media( ?)/m,""),(F!==void 0?Re:Ne)(l,p,a,f,n)}const J=i.div`
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
`,K=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,X=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,Z=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,q=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ee=i.p`
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
`,W=i.div`
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
`,T=i.div`
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
`,Pe=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,k=i.li`
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
`,U=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,y=i.li`
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
`,$=i.li`
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
`,te=i.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,ie=i.div`
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
`,ne=i.div`
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
`,oe=i.div`
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
`,re=i.div`
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
`,E=i.button`
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
`,L=i.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,Y=i.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Be=o=>o.diary.allDiaryInformation,Ae=o=>o.diary.isLoading,B=o=>o.diary.error,Me=({productsArray:o,date:d})=>{const r=R(),p=u(de).blood,a=u(B),f=V("(max-width:768px)"),n=s=>s[0].toUpperCase()+s.slice(1).toLowerCase();let l;const h=async s=>{try{await r(le(s)),await r(P(d))}catch{C.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(X,{children:"Products"}),e.jsx(Z,{children:e.jsxs(G,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(q,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),o&&o.length>0&&!a?f?e.jsx(W,{children:e.jsx(T,{children:o.map(s=>{const g=s.productId.groupBloodNotAllowed[p]?l="Yes":l="No";return e.jsxs(U,{children:[e.jsx(y,{children:"Title"}),e.jsx(y,{children:n(s.productId.title)}),e.jsx(y,{children:"Category"}),e.jsx(y,{children:n(s.productId.category)}),e.jsxs(te,{children:[e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Calories"}),e.jsx(y,{children:s.calories})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Weight"}),e.jsx(y,{children:s.amount})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Recommend"}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:g==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Y,{children:l})]})})]}),e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(E,{type:"button",onClick:()=>h(s._id),children:e.jsx(L,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},s._id)})})}):e.jsxs(W,{children:[e.jsxs(Pe,{children:[e.jsx(k,{children:"Title"}),e.jsx(k,{children:"Category"}),e.jsx(k,{children:"Calories"}),e.jsx(k,{children:"Weight"}),e.jsx(k,{children:"Recommend"}),e.jsx(k,{children:""})]}),e.jsx(T,{children:o.map(s=>{const g=s.productId.groupBloodNotAllowed[p]?l="Yes":l="No";return e.jsxs(U,{children:[e.jsx($,{children:n(s.productId.title)}),e.jsx($,{children:n(s.productId.category)}),e.jsx($,{children:s.calories}),e.jsx($,{children:s.amount}),e.jsx($,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:g==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Y,{children:l})]})}),e.jsx($,{children:e.jsx(E,{type:"button",onClick:()=>h(s._id),children:e.jsx(L,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},s._id)})})]}):e.jsx(ee,{children:"Not found products"})]})},Ue=i.ul`
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
`,b=i.li`
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
`,H=i.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,w=i.li`
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
`,v=i.li`
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
`,Ye=({exercisesArray:o,date:d})=>{const r=V("(max-width:768px)"),c=u(B),p=R(),a=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),f=async n=>{try{await p(pe(n)),await p(P(d))}catch(l){console.log(l),C.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(X,{children:"Exercises"}),e.jsx(Z,{children:e.jsxs(G,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(q,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),o&&o.length>0&&!c?r?e.jsx(W,{children:e.jsx(T,{children:o.map(n=>e.jsxs(H,{children:[e.jsx(w,{children:"Body Part"}),e.jsx(w,{children:a(n.exerciseId.bodyPart)}),e.jsx(w,{children:"Equipment"}),e.jsx(w,{children:a(n.exerciseId.equipment)}),e.jsx(w,{children:"Name"}),e.jsx(w,{children:a(n.exerciseId.name)}),e.jsxs(te,{children:[e.jsxs(ie,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Target"}),e.jsx(w,{children:a(n.exerciseId.target)})]}),e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Burned Calories"}),e.jsx(w,{children:n.calories})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Time"}),e.jsx(w,{children:n.time})]}),e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:""}),e.jsx(w,{children:e.jsx(E,{type:"button",onClick:()=>f(n._id),children:e.jsx(L,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(W,{children:[e.jsxs(Ue,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"}),e.jsx(b,{children:""})]}),e.jsx(T,{children:o.map(n=>e.jsxs(H,{children:[e.jsx(v,{children:a(n.exerciseId.bodyPart)}),e.jsx(v,{children:a(n.exerciseId.equipment)}),e.jsx(v,{children:a(n.exerciseId.name)}),e.jsx(v,{children:a(n.exerciseId.target)}),e.jsx(v,{children:n.calories}),e.jsx(v,{children:n.time}),e.jsx(v,{children:e.jsx(E,{type:"button",onClick:()=>f(n._id),children:e.jsx(L,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(ee,{children:"Not found exercises"})]})},He=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Qe=i.ul`
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
`,D=i.li`
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
`,_=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,I=i.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,S=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Ge=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Fe=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,z=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Ve=i.svg`
  width: 24px;
  height: 24px;
`,Je=i.p`
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
`,Ke=({userDiaryInformation:o,bmr:d})=>{const{burnedCalories:r,consumedCalories:c,remainingCalories:p,remainingSports:a}=o||{},[f,n]=m.useState(!1),l=u(B);return m.useEffect(()=>{p<0&&n(!0)},[p]),e.jsxs(He,{children:[e.jsxs(Qe,{children:[e.jsxs(D,{children:[e.jsxs(_,{children:[e.jsx(z,{children:e.jsx("use",{href:x+"#icon-fluent_food-24-filled"})}),e.jsx(I,{children:"Daily calory intake"})]}),e.jsx(S,{children:d&&d!==null&&d!==0?d:2200})]}),e.jsxs(D,{children:[e.jsxs(_,{children:[e.jsx(z,{children:e.jsx("use",{href:x+"#icon-dumbbell"})}),e.jsx(I,{children:"Daily norm of sports"})]}),e.jsx(S,{children:"110 min"})]}),e.jsxs(D,{children:[e.jsxs(_,{children:[e.jsx(z,{children:e.jsx("use",{href:x+"#icon-fluent_food-apple-20-filled"})}),e.jsx(I,{children:"Calories consumed"})]}),e.jsx(S,{children:c&&!l?c:0})]}),e.jsxs(D,{children:[e.jsxs(_,{children:[e.jsx(z,{children:e.jsx("use",{href:x+"#icon-calories-1"})}),e.jsx(I,{children:"Calories burned"})]}),e.jsx(S,{children:r&&!l?r:0})]}),e.jsxs(D,{className:f?"redBg":"",children:[e.jsxs(_,{children:[e.jsx(z,{children:e.jsx("use",{href:x+"#icon-bubble"})}),e.jsx(I,{children:"The rest of the calories"})]}),e.jsx(S,{children:p&&!l?p:d||0})]}),e.jsxs(D,{className:f?"greenBg":"",children:[e.jsxs(_,{children:[e.jsx(z,{children:e.jsx("use",{href:x+"#icon-running-figure"})}),e.jsx(I,{children:"The rest of sports"})]}),e.jsxs(S,{children:[a&&!l?a:110," min"]})]})]}),e.jsxs(Ge,{children:[e.jsx(Fe,{children:e.jsx(Ve,{children:e.jsx("use",{href:x+"#icon-exclamation-mark"})})}),e.jsx(Je,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Xe=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Ze=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,qe=i.div`
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
`,et=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Q=o=>{const d=new Date(o),r=String(d.getDate()).padStart(2,"0"),c=String(d.getMonth()+1).padStart(2,"0"),p=d.getFullYear();return`${r}/${c}/${p}`},dt=()=>{const o=R(),d=u(Be),r=u(Ae),c=u(ce),p=u(he),{addProducts:a,addExercises:f}=d,[n,l]=m.useState(new Date),h=u(xe),s=h?h.createdAt:null,g=Q(n),N=Q(s);return m.useEffect(()=>{(async()=>{try{await o(me()),await o(P(g))}catch{C.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[o,g,n]),e.jsx(fe,{children:r||c?e.jsx(ge,{}):e.jsxs(Xe,{children:[e.jsxs(Ze,{children:[e.jsx(ue,{contentText:"Diary"}),e.jsx(Te,{currentDate:n,setCurrentDate:l,userDateRegistration:N})]}),e.jsxs(et,{children:[e.jsx(Ke,{userDiaryInformation:d,bmr:p}),e.jsxs(qe,{children:[e.jsx(Me,{productsArray:a,date:g}),e.jsx(Ye,{exercisesArray:f,date:g})]})]})]})})};export{dt as default};
