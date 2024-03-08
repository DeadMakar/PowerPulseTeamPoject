import{u as i,a as t,j as e,o as de,B as O,r as g,R as ae,b as R,i as u,s as F,N as G,p as le,q as B,t as pe,v as he,w as ce,C as xe,x as fe,y as me}from"./index-2598d726.js";import{s as x}from"./sprite-befbd1dd.js";import{i as ge,f as we}from"./index-a0f2d2f1.js";import{T as ye}from"./TitlePage-cdfdf635.js";import{u as ue,g as je}from"./getThemeProps-bb787d8e.js";import"./emotion-element-c39617d8.browser.esm-dff41c5e.js";const be=i.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,ve=i.button`
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
`,De=i.p`
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
`,$e=i.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ie=i.button`
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
`,Se=i.button`
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
`,ke=i.svg`
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
`;const Oe=({selectedDate:o,setSelectedDate:a,isOpen:s,onClose:c,setCurrentDate:h,userDateRegistration:d,dateFormat:f})=>{const n=new Date,l=p=>p<new Date(d)||p>n,m=p=>l(p)?"disabled-day":null,r=p=>{p>=d&&p<=n?(a(p),h(p),c()):O.error(`You can review the information from the day of your registration: ${d} up to today: ${n}. `,{theme:"dark"})};return e.jsx(e.Fragment,{children:e.jsxs(Ce,{children:[e.jsx(ge,{selected:o,dateFormat:f,calendarStartDay:1,formatWeekDay:p=>p.substr(0,1),open:s,customInput:e.jsx("div",{style:{display:"none"}}),onChange:r,minDate:new Date(d),maxDate:n,dayClassName:m}),e.jsx(de,{})]})})},Te=()=>{const[o,a]=g.useState(new Date),[s,c]=g.useState(o),[h,d]=g.useState(!1),[f,n]=g.useState(!1),[l,m]=g.useState(!1),r=new Date("2024-02-01"),p=()=>{d(!h)},P=()=>{n(!0);const j=new Date(o);j>r?(j.setDate(j.getDate()-1),a(j),c(j),n(!1)):(O.error(`SORRY!!! Selected date cannot be earlier than the registration date: ${r.toLocaleDateString()}.`,{theme:"dark"}),n(!0))},M=()=>{m(!0);const j=new Date,T=new Date(s);T.setDate(s.getDate()+1),T<=j?(a(T),c(T),m(!1)):(O.error(`SORRY!!! Selected date cannot be later than today's date: ${j.toLocaleDateString()}.`,{theme:"dark"}),m(!0))},_=()=>{d(!1)};return e.jsxs(be,{children:[e.jsx(De,{onClick:p,children:we(s,"dd/MM/yyyy")}),e.jsx(Ie,{onClick:p,children:e.jsx($e,{children:e.jsx("use",{href:x+"#icon-calendar"})})}),e.jsx(Se,{type:"button",onClick:P,children:e.jsx(ke,{className:f?"passivePrev":"",children:e.jsx("use",{href:x+"#icon-chevron-left"})})}),e.jsx(ve,{type:"button",onClick:M,children:e.jsx(ze,{className:l?"passiveNext":"",children:e.jsx("use",{href:x+"#icon-chevron-right"})})}),e.jsx(Oe,{selectedDate:s,dateFormat:"dd/MM/yyyy",setSelectedDate:c,isOpen:h,onClose:_,setCurrentDate:a,userDateRegistration:r,minDate:r})]})},We=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ee=We;function Le(o,a,s,c,h){const[d,f]=g.useState(()=>h&&s?s(o).matches:c?c(o).matches:a);return Ee(()=>{let n=!0;if(!s)return;const l=s(o),m=()=>{n&&f(l.matches)};return m(),l.addListener(m),()=>{n=!1,l.removeListener(m)}},[o,s]),d}const V=ae["useSyncExternalStore"];function Ne(o,a,s,c,h){const d=g.useCallback(()=>a,[a]),f=g.useMemo(()=>{if(h&&s)return()=>s(o).matches;if(c!==null){const{matches:r}=c(o);return()=>r}return d},[d,o,c,h,s]),[n,l]=g.useMemo(()=>{if(s===null)return[d,()=>()=>{}];const r=s(o);return[()=>r.matches,p=>(r.addListener(p),()=>{r.removeListener(p)})]},[d,s,o]);return V(l,n,f)}function J(o,a={}){const s=ue(),c=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:d=c?window.matchMedia:null,ssrMatchMedia:f=null,noSsr:n=!1}=je({name:"MuiUseMediaQuery",props:a,theme:s});let l=typeof o=="function"?o(s):o;return l=l.replace(/^@media( ?)/m,""),(V!==void 0?Ne:Le)(l,h,d,f,n)}const K=i.div`
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
`,X=i.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Z=i.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,q=i.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ee=i.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,te=i.p`
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
`,E=i.div`
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
`,D=i.li`
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
`,ie=i.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
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
      width: 79px;

      &:nth-of-type(2) {
        margin-bottom: 40px;
      }
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
      width: 78px;
    }
  }
`,re=i.div`
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
`,se=i.div`
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
`,L=i.button`
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
`,N=i.svg`
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
`,Re=o=>o.diary.allDiaryInformation,Be=o=>o.diary.isLoading,A=o=>o.diary.error,Ae=({productsArray:o,date:a})=>{const s=R(),h=u(F).blood,d=u(A),f=J("(max-width:768px)"),n=r=>r[0].toUpperCase()+r.slice(1).toLowerCase();let l;const m=async r=>{try{await s(le(r)),await s(B(a))}catch{O.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(K,{children:[e.jsxs(X,{children:[e.jsx(Z,{children:"Products"}),e.jsx(q,{children:e.jsxs(G,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ee,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),o&&o.length>0&&!d?f?e.jsx(W,{children:e.jsx(E,{children:o.map(r=>{const p=r.productId.groupBloodNotAllowed[h]?l="Yes":l="No";return e.jsxs(U,{children:[e.jsx(y,{children:"Title"}),e.jsx(y,{children:n(r.productId.title)}),e.jsx(y,{children:"Category"}),e.jsx(y,{children:n(r.productId.category)}),e.jsxs(ie,{children:[e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Calories"}),e.jsx(y,{children:r.calories})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Weight"}),e.jsx(y,{children:r.amount})]}),e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Recommend"}),e.jsx(y,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Y,{children:l})]})})]}),e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(L,{type:"button",onClick:()=>m(r._id),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},r._id)})})}):e.jsxs(W,{children:[e.jsxs(Pe,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"}),e.jsx(D,{children:""})]}),e.jsx(E,{children:o.map(r=>{const p=r.productId.groupBloodNotAllowed[h]?l="Yes":l="No";return e.jsxs(U,{children:[e.jsx($,{children:n(r.productId.title)}),e.jsx($,{children:n(r.productId.category)}),e.jsx($,{children:r.calories}),e.jsx($,{children:r.amount}),e.jsx($,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:p==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Y,{children:l})]})}),e.jsx($,{children:e.jsx(L,{type:"button",onClick:()=>m(r._id),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},r._id)})})]}):e.jsx(te,{children:"Not found products"})]})},Me=i.ul`
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
`,_e=({exercisesArray:o,date:a})=>{const s=J("(max-width:768px)"),c=u(A),h=R(),d=n=>n[0].toUpperCase()+n.slice(1).toLowerCase(),f=async n=>{try{await h(pe(n)),await h(B(a))}catch(l){console.log(l),O.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(K,{children:[e.jsxs(X,{children:[e.jsx(Z,{children:"Exercises"}),e.jsx(q,{children:e.jsxs(G,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ee,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),o&&o.length>0&&!c?s?e.jsx(W,{children:e.jsx(E,{children:o.map(n=>e.jsxs(H,{children:[e.jsx(w,{children:"Body Part"}),e.jsx(w,{children:d(n.exerciseId.bodyPart)}),e.jsx(w,{children:"Equipment"}),e.jsx(w,{children:d(n.exerciseId.equipment)}),e.jsx(w,{children:"Name"}),e.jsx(w,{children:d(n.exerciseId.name)}),e.jsxs(ie,{children:[e.jsxs(ne,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Target"}),e.jsx(w,{children:d(n.exerciseId.target)})]}),e.jsxs(oe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Burned Calories"}),e.jsx(w,{children:n.calories})]}),e.jsxs(re,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:"Time"}),e.jsx(w,{children:n.time})]}),e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(w,{children:""}),e.jsx(w,{children:e.jsx(L,{type:"button",onClick:()=>f(n._id),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},n._id))})}):e.jsxs(W,{children:[e.jsxs(Me,{children:[e.jsx(b,{children:"Body Part"}),e.jsx(b,{children:"Equipment"}),e.jsx(b,{children:"Name"}),e.jsx(b,{children:"Target"}),e.jsx(b,{children:"Burned Calories"}),e.jsx(b,{children:"Time"}),e.jsx(b,{children:""})]}),e.jsx(E,{children:o.map(n=>e.jsxs(H,{children:[e.jsx(v,{children:d(n.exerciseId.bodyPart)}),e.jsx(v,{children:d(n.exerciseId.equipment)}),e.jsx(v,{children:d(n.exerciseId.name)}),e.jsx(v,{children:d(n.exerciseId.target)}),e.jsx(v,{children:n.calories}),e.jsx(v,{children:n.time}),e.jsx(v,{children:e.jsx(L,{type:"button",onClick:()=>f(n._id),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},n._id))})]}):e.jsx(te,{children:"Not found exercises"})]})},Ue=i.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ye=i.ul`
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
`,I=i.li`
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
`,S=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,k=i.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,z=i.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,He=i.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Qe=i.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,C=i.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Fe=i.svg`
  width: 24px;
  height: 24px;
`,Ge=i.p`
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
`,Ve=({userDiaryInformation:o,bmr:a})=>{const{burnedCalories:s,consumedCalories:c,remainingCalories:h,remainingSports:d}=o||{},[f,n]=g.useState(!1),l=u(A);return g.useEffect(()=>{h<0&&n(!0)},[h]),e.jsxs(Ue,{children:[e.jsxs(Ye,{children:[e.jsxs(I,{children:[e.jsxs(S,{children:[e.jsx(C,{children:e.jsx("use",{href:x+"#icon-fluent_food-24-filled"})}),e.jsx(k,{children:"Daily calory intake"})]}),e.jsx(z,{children:a&&a!==null&&a!==0?a:2200})]}),e.jsxs(I,{children:[e.jsxs(S,{children:[e.jsx(C,{children:e.jsx("use",{href:x+"#icon-dumbbell"})}),e.jsx(k,{children:"Daily norm of sports"})]}),e.jsx(z,{children:"110 min"})]}),e.jsxs(I,{children:[e.jsxs(S,{children:[e.jsx(C,{children:e.jsx("use",{href:x+"#icon-fluent_food-apple-20-filled"})}),e.jsx(k,{children:"Calories consumed"})]}),e.jsx(z,{children:c&&!l?c:0})]}),e.jsxs(I,{children:[e.jsxs(S,{children:[e.jsx(C,{children:e.jsx("use",{href:x+"#icon-calories-1"})}),e.jsx(k,{children:"Calories burned"})]}),e.jsx(z,{children:s&&!l?s:0})]}),e.jsxs(I,{className:f?"redBg":"",children:[e.jsxs(S,{children:[e.jsx(C,{children:e.jsx("use",{href:x+"#icon-bubble"})}),e.jsx(k,{children:"The rest of the calories"})]}),e.jsx(z,{children:h&&!l?h:a||0})]}),e.jsxs(I,{className:f?"greenBg":"",children:[e.jsxs(S,{children:[e.jsx(C,{children:e.jsx("use",{href:x+"#icon-running-figure"})}),e.jsx(k,{children:"The rest of sports"})]}),e.jsxs(z,{children:[d&&!l?d:110," min"]})]})]}),e.jsxs(He,{children:[e.jsx(Qe,{children:e.jsx(Fe,{children:e.jsx("use",{href:x+"#icon-exclamation-mark"})})}),e.jsx(Ge,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},Je=i.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,Ke=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,Xe=i.div`
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
`,Ze=i.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,Q=o=>{const a=new Date(o),s=String(a.getDate()).padStart(2,"0"),c=String(a.getMonth()+1).padStart(2,"0"),h=a.getFullYear();return`${s}/${c}/${h}`},rt=()=>{const o=R(),a=u(Re),s=u(Be),c=u(he),h=u(ce),{addProducts:d,addExercises:f}=a,[n,l]=g.useState(new Date),m=u(F),r=m?m.createdAt:null,p=Q(n),P=Q(r);return g.useEffect(()=>{(async()=>{try{await o(me()),await o(B(p))}catch{O.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[o,p,n]),e.jsx(xe,{children:s||c?e.jsx(fe,{}):e.jsxs(Je,{children:[e.jsxs(Ke,{children:[e.jsx(ye,{contentText:"Diary"}),e.jsx(Te,{currentDate:n,setCurrentDate:l,userDateRegistration:P})]}),e.jsxs(Ze,{children:[e.jsx(Ve,{userDiaryInformation:a,bmr:h}),e.jsxs(Xe,{children:[e.jsx(Ae,{productsArray:d,date:p}),e.jsx(_e,{exercisesArray:f,date:p})]})]})]})})};export{rt as default};
