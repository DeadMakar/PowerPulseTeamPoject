import{u as o,a as t,j as e,H as ge,E as B,r as g,A as ye,s as x,R as ue,b as S,d as F,f as U,N as ie,I as D,J as je,K as Y,M as be,P as ve,S as $e,C as De,T as Se}from"./index-c5859d1c.js";import{c as M,T as ke,_ as G,s as J,a as K,b as Ie}from"./selectors-f0e0141a.js";import{i as ze}from"./index-01f55346.js";import{T as Te}from"./TitlePage-5016a009.js";import"./floating-ui.dom-9d61e2db.js";const Oe=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,Ce=o.button`
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
`,Ee=o.p`
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
`,Ae=o.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,We=o.button`
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
`,Pe=o.button`
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
`,Le=o.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Be=o.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Me=o.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 10;
`;o.button`
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
`;const Re=({selectedDate:r,setSelectedDate:l,isOpen:i,onClose:d,setCurrentDate:h,userDateRegistration:a})=>{const c=M(new Date),p=s=>{const f=M(s);c>=f&&f>=a?(l(s),h(s),d()):B.error(`However, we don't have any data to show you. You can review the information from the day of your registration: ${a} up to today: ${c}. `,{theme:"dark"})};return e.jsxs(Me,{children:[e.jsx(ze,{selected:r,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:i,customInput:e.jsx("div",{style:{display:"none"}}),onChange:p,minDate:new Date(a),maxDate:new Date(c)}),e.jsx(ge,{})]})},He=({currentDate:r,setCurrentDate:l,userDateRegistration:i})=>{const[d,h]=g.useState(r),[a,c]=g.useState(!1),[p,s]=g.useState(!1),[f,m]=g.useState(!1),y=()=>{c(!a)},n=()=>{s(!0);const w=new Date(r);M(w)>i?(w.setDate(w.getDate()-1),l(w),h(w),s(!1)):(B.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${i}.`,{theme:"dark"}),s(!0))},b=()=>{m(!0);const w=M(new Date),u=new Date(d);u.setDate(d.getDate()+1),u>new Date?(B.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${w}.`,{theme:"dark"}),m(!0)):(l(u),h(u),m(!1))},v=()=>{c(!1)};return e.jsxs(Oe,{children:[e.jsxs(We,{onClick:y,children:[e.jsx(Ee,{children:ye(d,"dd/MM/yyyy")}),e.jsx(Ae,{children:e.jsx("use",{href:x+"#icon-calendar"})})]}),e.jsx(Pe,{type:"button",onClick:n,children:e.jsx(Le,{className:p?"passivePrev":"",children:e.jsx("use",{href:x+"#icon-chevron-left"})})}),e.jsx(Ce,{type:"button",onClick:b,children:e.jsx(Be,{className:f?"passiveNext":"",children:e.jsx("use",{href:x+"#icon-chevron-right"})})}),e.jsx(Re,{selectedDate:d,setSelectedDate:h,isOpen:a,onClose:v,setCurrentDate:l,userDateRegistration:i})]})};function Ne(r){return Object.keys(r).length===0}function _e(r=null){const l=g.useContext(ke);return!l||Ne(l)?r:l}function ne(r,l){const i=G({},l);return Object.keys(r).forEach(d=>{if(d.toString().match(/^(components|slots)$/))i[d]=G({},r[d],i[d]);else if(d.toString().match(/^(componentsProps|slotProps)$/)){const h=r[d]||{},a=l[d];i[d]={},!a||!Object.keys(a)?i[d]=h:!h||!Object.keys(h)?i[d]=a:(i[d]=G({},a),Object.keys(h).forEach(c=>{i[d][c]=ne(h[c],a[c])}))}else i[d]===void 0&&(i[d]=r[d])}),i}function Qe(r){const{theme:l,name:i,props:d}=r;return!l||!l.components||!l.components[i]||!l.components[i].defaultProps?d:ne(l.components[i].defaultProps,d)}const Ye=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ge=Ye;function Fe(r,l,i,d,h){const[a,c]=g.useState(()=>h&&i?i(r).matches:d?d(r).matches:l);return Ge(()=>{let p=!0;if(!i)return;const s=i(r),f=()=>{p&&c(s.matches)};return f(),s.addListener(f),()=>{p=!1,s.removeListener(f)}},[r,i]),a}const oe=ue["useSyncExternalStore"];function Ue(r,l,i,d,h){const a=g.useCallback(()=>l,[l]),c=g.useMemo(()=>{if(h&&i)return()=>i(r).matches;if(d!==null){const{matches:m}=d(r);return()=>m}return a},[a,r,d,h,i]),[p,s]=g.useMemo(()=>{if(i===null)return[a,()=>()=>{}];const m=i(r);return[()=>m.matches,y=>(m.addListener(y),()=>{m.removeListener(y)})]},[a,i,r]);return oe(s,p,c)}function re(r,l={}){const i=_e(),d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:a=d?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:p=!1}=Qe({name:"MuiUseMediaQuery",props:l,theme:i});let s=typeof r=="function"?r(i):r;return s=s.replace(/^@media( ?)/m,""),(oe!==void 0?Ue:Fe)(s,h,a,c,p)}const se=o.div`
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
`,de=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,le=o.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,ae=o.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,he=o.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,ce=o.p`
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
`,H=o.div`
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
`,N=o.div`
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
`,Je=o.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,O=o.li`
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
`,q=o.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,$=o.li`
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
`,C=o.li`
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
`,pe=o.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,xe=o.div`
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
`,fe=o.div`
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
`,me=o.div`
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
`,we=o.div`
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
`,_=o.button`
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
`,Q=o.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,ee=o.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ke=({selectedDate:r})=>{var y;const l=S(J),i=(y=l[0])==null?void 0:y.productArr,d=F(),h=S(U),a=h==null?void 0:h.blood,c=S(K),p=re("(max-width:768px)"),f=(n=>{if(n===void 0)return"";const b=k=>k<10?`0${k}`:k,v=b(n.getDate()),w=b(n.getMonth()+1),u=n.getFullYear();return`${v}-${w}-${u}`})(r),m=async n=>{try{await d(je(n,r)),await d(Y(f(r)))}catch{B.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(se,{children:[e.jsxs(de,{children:[e.jsx(le,{children:"Products"}),e.jsx(ae,{children:e.jsxs(ie,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(he,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),l&&l.length>0&&!c?p?e.jsx(H,{children:e.jsx(N,{children:i==null?void 0:i.map(n=>{var V,Z,X;const b=(V=n==null?void 0:n.productId)==null?void 0:V.title,v=n==null?void 0:n.calories,w=n==null?void 0:n.amount,u=n==null?void 0:n._id,T=(Z=n==null?void 0:n.productId)==null?void 0:Z.groupBloodNotAllowed,k=(X=n==null?void 0:n.productId)==null?void 0:X.category,R=T&&T[a]?"Yes":"No";return e.jsxs(q,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:D(b)}),e.jsx($,{children:"Category"}),e.jsx($,{children:D(k)}),e.jsxs(pe,{children:[e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Calories"}),e.jsx($,{children:v})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Weight"}),e.jsx($,{children:w})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Recommend"}),e.jsx($,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:R==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(ee,{children:R})]})})]}),e.jsxs(we,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:""}),e.jsx($,{children:e.jsx(_,{type:"button",onClick:()=>m(u),children:e.jsx(Q,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},u)})})}):e.jsxs(H,{children:[e.jsxs(Je,{children:[e.jsx(O,{children:"Title"}),e.jsx(O,{children:"Category"}),e.jsx(O,{children:"Calories"}),e.jsx(O,{children:"Weight"}),e.jsx(O,{children:"Recommend"}),e.jsx(O,{children:""})]}),e.jsx(N,{children:i==null?void 0:i.map(n=>{const b=n==null?void 0:n.productId.title,v=n==null?void 0:n.calories,w=n==null?void 0:n.amount,u=n==null?void 0:n._id,T=n==null?void 0:n.productId.groupBloodNotAllowed,k=n==null?void 0:n.productId.category,R=T&&T[a]?"Yes":"No";return e.jsxs(q,{children:[e.jsx(C,{children:D(b)}),e.jsx(C,{children:D(k)}),e.jsx(C,{children:v}),e.jsx(C,{children:w}),e.jsx(C,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:R==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(ee,{children:R})]})}),e.jsx(C,{children:e.jsx(_,{type:"button",onClick:()=>m(u),children:e.jsx(Q,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},u)})})]}):e.jsx(ce,{children:"Not found products"})]})},Ve=o.ul`
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
`,I=o.li`
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
`,te=o.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,j=o.li`
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
`,z=o.li`
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
`,Ze=({selectedDate:r})=>{var p;const i=(p=S(J)[1])==null?void 0:p.exerciseArr,d=re("(max-width:768px)"),h=S(K),a=F(),c=async s=>{try{await a(be(s,r)),await a(Y(r))}catch(f){console.log(f),B.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(se,{children:[e.jsxs(de,{children:[e.jsx(le,{children:"Exercises"}),e.jsx(ae,{children:e.jsxs(ie,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(he,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),i&&i.length>0&&!h?d?e.jsx(H,{children:e.jsx(N,{children:i==null?void 0:i.map(s=>e.jsxs(te,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:D(s.exerciseId.bodyPart)}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:D(s.exerciseId.equipment)}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:D(s.exerciseId.name)}),e.jsxs(pe,{children:[e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Target"}),e.jsx(j,{children:D(s.exerciseId.target)})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:s.calories})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Time"}),e.jsx(j,{children:s.time})]}),e.jsxs(we,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:""}),e.jsx(j,{children:e.jsx(_,{type:"button",onClick:()=>c(s._id),children:e.jsx(Q,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},s._id))})}):e.jsxs(H,{children:[e.jsxs(Ve,{children:[e.jsx(I,{children:"Body Part"}),e.jsx(I,{children:"Equipment"}),e.jsx(I,{children:"Name"}),e.jsx(I,{children:"Target"}),e.jsx(I,{children:"Burned Calories"}),e.jsx(I,{children:"Time"}),e.jsx(I,{children:""})]}),e.jsx(N,{children:i.map(s=>e.jsxs(te,{children:[e.jsx(z,{children:D(s.exerciseId.bodyPart)}),e.jsx(z,{children:D(s.exerciseId.equipment)}),e.jsx(z,{children:D(s.exerciseId.name)}),e.jsx(z,{children:D(s.exerciseId.target)}),e.jsx(z,{children:s.calories}),e.jsx(z,{children:s.time}),e.jsx(z,{children:e.jsx(_,{type:"button",onClick:()=>c(s._id),children:e.jsx(Q,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},s._id))})]}):e.jsx(ce,{children:"Not found exercises"})]})},Xe=o.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,qe=o.ul`
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
`,E=o.li`
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
`,A=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,W=o.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,P=o.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,et=o.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,tt=o.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,L=o.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,it=o.svg`
  width: 24px;
  height: 24px;
`,nt=o.p`
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
`,ot=r=>{var b,v,w;const l=(b=r==null?void 0:r.userDiaryInformation[0])==null?void 0:b.consumedCalories,i=(v=r==null?void 0:r.userDiaryInformation[1])==null?void 0:v.burnedCalories,d=(w=r==null?void 0:r.userDiaryInformation[1])==null?void 0:w.totalExerciseTime,h=S(U),a=h==null?void 0:h.resultBMR,[c,p]=g.useState(!1),[s,f]=g.useState(!1),m=S(K);g.useEffect(()=>{(async()=>{await Y()})()},[]);const y=a-l,n=110-d;return g.useEffect(()=>{y<0&&p(!0),n<0&&f(!0)},[y,n]),e.jsxs(Xe,{children:[e.jsxs(qe,{children:[e.jsxs(E,{children:[e.jsxs(A,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-fluent_food-24-filled"})}),e.jsx(W,{children:"Daily calory intake"})]}),e.jsx(P,{children:a||"2200"})]}),e.jsxs(E,{children:[e.jsxs(A,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-dumbbell"})}),e.jsx(W,{children:"Daily norm of sports"})]}),e.jsx(P,{children:"110 min"})]}),e.jsxs(E,{children:[e.jsxs(A,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-fluent_food-apple-20-filled"})}),e.jsx(W,{children:"Calories consumed"})]}),e.jsx(P,{children:m?0:l})]}),e.jsxs(E,{children:[e.jsxs(A,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-calories-1"})}),e.jsx(W,{children:"Calories burned"})]}),e.jsx(P,{children:i&&!m?i:0})]}),e.jsxs(E,{className:c?"redBg":"",children:[e.jsxs(A,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-bubble"})}),e.jsx(W,{children:"The rest of the calories"})]}),e.jsx(P,{children:y||"0"})]}),e.jsxs(E,{className:s?"greenBg":"",children:[e.jsxs(A,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-running-figure"})}),e.jsx(W,{children:"The rest of sports"})]}),e.jsxs(P,{children:[n||"110"," min"]})]})]}),e.jsxs(et,{children:[e.jsx(tt,{children:e.jsx(it,{children:e.jsx("use",{href:x+"#icon-exclamation-mark"})})}),e.jsx(nt,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},rt=o.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,st=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,dt=o.div`
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
`,lt=o.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ft=()=>{const r=F(),l=S(J),i=S(Ie),d=S(ve),h=S($e),{addProducts:a,addExercises:c}=l,[p,s]=g.useState(new Date),f=S(U),m=f?f.createdAt:null,y=M(p),n=M(m);return console.log(y),g.useEffect(()=>{(async v=>{try{await r(Y(v))}catch{B.error("Sorry, something went wrong, please try again",{theme:"dark"})}})(p)},[r,y,p]),e.jsx(De,{children:i||d?e.jsx(Se,{}):e.jsxs(rt,{children:[e.jsxs(st,{children:[e.jsx(Te,{contentText:"Diary"}),e.jsx(He,{currentDate:p,setCurrentDate:s,userDateRegistration:n})]}),e.jsxs(lt,{children:[e.jsx(ot,{userDiaryInformation:l,bmr:h}),e.jsxs(dt,{children:[e.jsx(Ke,{productsArray:a,currentDate:p,date:y}),e.jsx(Ze,{exercisesArray:c,date:y})]})]})]})})};export{ft as default};
