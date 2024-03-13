import{u as o,a as t,j as e,H as we,E as L,r as g,A as ge,s as x,R as ye,b as D,d as G,f as F,N as te,I as ue,J as Q,K as je,M as be,P as ve,C as $e,S as De}from"./index-89f37fa7.js";import{c as B,T as Se,_ as Y,s as U,a as J,b as ke}from"./selectors-0bcec465.js";import{i as Ie}from"./index-71c3a081.js";import{T as ze}from"./TitlePage-cbb94e12.js";import"./floating-ui.dom-9d61e2db.js";const Te=o.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,Oe=o.button`
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
`,Ce=o.p`
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
`,Ee=o.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ae=o.button`
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
`,We=o.button`
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
`,Pe=o.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Le=o.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Be=o.div`
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
`;const Me=({selectedDate:r,setSelectedDate:l,isOpen:i,onClose:d,setCurrentDate:h,userDateRegistration:a})=>{const c=B(new Date),p=s=>{const f=B(s);c>=f&&f>=a?(l(s),h(s),d()):L.error(`However, we don't have any data to show you. You can review the information from the day of your registration: ${a} up to today: ${c}. `,{theme:"dark"})};return e.jsxs(Be,{children:[e.jsx(Ie,{selected:r,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:i,customInput:e.jsx("div",{style:{display:"none"}}),onChange:p,minDate:new Date(a),maxDate:new Date(c)}),e.jsx(we,{})]})},Re=({currentDate:r,setCurrentDate:l,userDateRegistration:i})=>{const[d,h]=g.useState(r),[a,c]=g.useState(!1),[p,s]=g.useState(!1),[f,m]=g.useState(!1),y=()=>{c(!a)},n=()=>{s(!0);const w=new Date(r);B(w)>i?(w.setDate(w.getDate()-1),l(w),h(w),s(!1)):(L.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${i}.`,{theme:"dark"}),s(!0))},b=()=>{m(!0);const w=B(new Date),u=new Date(d);u.setDate(d.getDate()+1),u>new Date?(L.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${w}.`,{theme:"dark"}),m(!0)):(l(u),h(u),m(!1))},v=()=>{c(!1)};return e.jsxs(Te,{children:[e.jsxs(Ae,{onClick:y,children:[e.jsx(Ce,{children:ge(d,"dd/MM/yyyy")}),e.jsx(Ee,{children:e.jsx("use",{href:x+"#icon-calendar"})})]}),e.jsx(We,{type:"button",onClick:n,children:e.jsx(Pe,{className:p?"passivePrev":"",children:e.jsx("use",{href:x+"#icon-chevron-left"})})}),e.jsx(Oe,{type:"button",onClick:b,children:e.jsx(Le,{className:f?"passiveNext":"",children:e.jsx("use",{href:x+"#icon-chevron-right"})})}),e.jsx(Me,{selectedDate:d,setSelectedDate:h,isOpen:a,onClose:v,setCurrentDate:l,userDateRegistration:i})]})};function He(r){return Object.keys(r).length===0}function Ne(r=null){const l=g.useContext(Se);return!l||He(l)?r:l}function ie(r,l){const i=Y({},l);return Object.keys(r).forEach(d=>{if(d.toString().match(/^(components|slots)$/))i[d]=Y({},r[d],i[d]);else if(d.toString().match(/^(componentsProps|slotProps)$/)){const h=r[d]||{},a=l[d];i[d]={},!a||!Object.keys(a)?i[d]=h:!h||!Object.keys(h)?i[d]=a:(i[d]=Y({},a),Object.keys(h).forEach(c=>{i[d][c]=ie(h[c],a[c])}))}else i[d]===void 0&&(i[d]=r[d])}),i}function _e(r){const{theme:l,name:i,props:d}=r;return!l||!l.components||!l.components[i]||!l.components[i].defaultProps?d:ie(l.components[i].defaultProps,d)}const Qe=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ye=Qe;function Ge(r,l,i,d,h){const[a,c]=g.useState(()=>h&&i?i(r).matches:d?d(r).matches:l);return Ye(()=>{let p=!0;if(!i)return;const s=i(r),f=()=>{p&&c(s.matches)};return f(),s.addListener(f),()=>{p=!1,s.removeListener(f)}},[r,i]),a}const ne=ye["useSyncExternalStore"];function Fe(r,l,i,d,h){const a=g.useCallback(()=>l,[l]),c=g.useMemo(()=>{if(h&&i)return()=>i(r).matches;if(d!==null){const{matches:m}=d(r);return()=>m}return a},[a,r,d,h,i]),[p,s]=g.useMemo(()=>{if(i===null)return[a,()=>()=>{}];const m=i(r);return[()=>m.matches,y=>(m.addListener(y),()=>{m.removeListener(y)})]},[a,i,r]);return ne(s,p,c)}function oe(r,l={}){const i=Ne(),d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:a=d?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:p=!1}=_e({name:"MuiUseMediaQuery",props:l,theme:i});let s=typeof r=="function"?r(i):r;return s=s.replace(/^@media( ?)/m,""),(ne!==void 0?Fe:Ge)(s,h,a,c,p)}const re=o.div`
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
`,se=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,de=o.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,le=o.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ae=o.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,he=o.p`
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
`,R=o.div`
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
`,H=o.div`
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
`,Ue=o.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,T=o.li`
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
`,X=o.ul`
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
`,O=o.li`
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
`,ce=o.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,pe=o.div`
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
      width: 78px;
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
      width: 74px;
    }
  }
`,me=o.div`
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
`,N=o.button`
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
`,_=o.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,q=o.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Je=({selectedDate:r})=>{var y;const l=D(U),i=(y=l[0])==null?void 0:y.productArr,d=G(),h=D(F),a=h==null?void 0:h.blood,c=D(J),p=oe("(max-width:768px)"),f=(n=>{if(n===void 0)return"";const b=S=>S<10?`0${S}`:S,v=b(n.getDate()),w=b(n.getMonth()+1),u=n.getFullYear();return`${v}-${w}-${u}`})(r),m=async n=>{try{await d(ue(n,r)),await d(Q(f(r)))}catch{L.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsx(de,{children:"Products"}),e.jsx(le,{children:e.jsxs(te,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ae,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),l&&l.length>0&&!c?p?e.jsx(R,{children:e.jsx(H,{children:i==null?void 0:i.map(n=>{var K,V,Z;const b=(K=n==null?void 0:n.productId)==null?void 0:K.title,v=n==null?void 0:n.calories,w=n==null?void 0:n.amount,u=n==null?void 0:n._id,z=(V=n==null?void 0:n.productId)==null?void 0:V.groupBloodNotAllowed,S=(Z=n==null?void 0:n.productId)==null?void 0:Z.category,M=z&&z[a]?"Yes":"No";return e.jsxs(X,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:b}),e.jsx($,{children:"Category"}),e.jsx($,{children:S}),e.jsxs(ce,{children:[e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Calories"}),e.jsx($,{children:v})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Weight"}),e.jsx($,{children:w})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Recommend"}),e.jsx($,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:M==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(q,{children:M})]})})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:""}),e.jsx($,{children:e.jsx(N,{type:"button",onClick:()=>m(u),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},u)})})}):e.jsxs(R,{children:[e.jsxs(Ue,{children:[e.jsx(T,{children:"Title"}),e.jsx(T,{children:"Category"}),e.jsx(T,{children:"Calories"}),e.jsx(T,{children:"Weight"}),e.jsx(T,{children:"Recommend"}),e.jsx(T,{children:""})]}),e.jsx(H,{children:i==null?void 0:i.map(n=>{const b=n==null?void 0:n.productId.title,v=n==null?void 0:n.calories,w=n==null?void 0:n.amount,u=n==null?void 0:n._id,z=n==null?void 0:n.productId.groupBloodNotAllowed,S=n==null?void 0:n.productId.category,M=z&&z[a]?"Yes":"No";return e.jsxs(X,{children:[e.jsx(O,{children:b}),e.jsx(O,{children:S}),e.jsx(O,{children:v}),e.jsx(O,{children:w}),e.jsx(O,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:M==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(q,{children:M})]})}),e.jsx(O,{children:e.jsx(N,{type:"button",onClick:()=>m(u),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},u)})})]}):e.jsx(he,{children:"Not found products"})]})},Ke=o.ul`
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
`,k=o.li`
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
`,ee=o.ul`
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
`,I=o.li`
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
`,Ve=({selectedDate:r})=>{var p;const i=(p=D(U)[1])==null?void 0:p.exerciseArr,d=oe("(max-width:768px)"),h=D(J),a=G(),c=async s=>{try{await a(je(s,r)),await a(Q(r))}catch(f){console.log(f),L.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(re,{children:[e.jsxs(se,{children:[e.jsx(de,{children:"Exercises"}),e.jsx(le,{children:e.jsxs(te,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ae,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),i&&i.length>0&&!h?d?e.jsx(R,{children:e.jsx(H,{children:i==null?void 0:i.map(s=>e.jsxs(ee,{children:[e.jsx(j,{children:"Body Part"}),e.jsx(j,{children:s.exerciseId.bodyPart}),e.jsx(j,{children:"Equipment"}),e.jsx(j,{children:s.exerciseId.equipment}),e.jsx(j,{children:"Name"}),e.jsx(j,{children:s.exerciseId.name}),e.jsxs(ce,{children:[e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Target"}),e.jsx(j,{children:s.exerciseId.target})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Burned Calories"}),e.jsx(j,{children:s.calories})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Time"}),e.jsx(j,{children:s.time})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:""}),e.jsx(j,{children:e.jsx(N,{type:"button",onClick:()=>c(s._id),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},s._id))})}):e.jsxs(R,{children:[e.jsxs(Ke,{children:[e.jsx(k,{children:"Body Part"}),e.jsx(k,{children:"Equipment"}),e.jsx(k,{children:"Name"}),e.jsx(k,{children:"Target"}),e.jsx(k,{children:"Burned Calories"}),e.jsx(k,{children:"Time"}),e.jsx(k,{children:""})]}),e.jsx(H,{children:i.map(s=>e.jsxs(ee,{children:[e.jsx(I,{children:s.exerciseId.bodyPart}),e.jsx(I,{children:s.exerciseId.equipment}),e.jsx(I,{children:s.exerciseId.name}),e.jsx(I,{children:s.exerciseId.target}),e.jsx(I,{children:s.calories}),e.jsx(I,{children:s.time}),e.jsx(I,{children:e.jsx(N,{type:"button",onClick:()=>c(s._id),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},s._id))})]}):e.jsx(he,{children:"Not found exercises"})]})},Ze=o.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Xe=o.ul`
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
`,C=o.li`
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
`,E=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,A=o.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,W=o.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,qe=o.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,et=o.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,P=o.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,tt=o.svg`
  width: 24px;
  height: 24px;
`,it=o.p`
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
`,nt=r=>{var b,v,w;const l=(b=r==null?void 0:r.userDiaryInformation[0])==null?void 0:b.consumedCalories,i=(v=r==null?void 0:r.userDiaryInformation[1])==null?void 0:v.burnedCalories,d=(w=r==null?void 0:r.userDiaryInformation[1])==null?void 0:w.totalExerciseTime,h=D(F),a=h==null?void 0:h.resultBMR,[c,p]=g.useState(!1),[s,f]=g.useState(!1),m=D(J);g.useEffect(()=>{(async()=>{await Q()})()},[]);const y=a-l,n=110-d;return g.useEffect(()=>{y<0&&p(!0),n<0&&f(!0)},[y,n]),e.jsxs(Ze,{children:[e.jsxs(Xe,{children:[e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-fluent_food-24-filled"})}),e.jsx(A,{children:"Daily calory intake"})]}),e.jsx(W,{children:a||"2200"})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-dumbbell"})}),e.jsx(A,{children:"Daily norm of sports"})]}),e.jsx(W,{children:"110 min"})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-fluent_food-apple-20-filled"})}),e.jsx(A,{children:"Calories consumed"})]}),e.jsx(W,{children:m?0:l})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-calories-1"})}),e.jsx(A,{children:"Calories burned"})]}),e.jsx(W,{children:i&&!m?i:0})]}),e.jsxs(C,{className:c?"redBg":"",children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-bubble"})}),e.jsx(A,{children:"The rest of the calories"})]}),e.jsx(W,{children:y||"0"})]}),e.jsxs(C,{className:s?"greenBg":"",children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-running-figure"})}),e.jsx(A,{children:"The rest of sports"})]}),e.jsxs(W,{children:[n||"110"," min"]})]})]}),e.jsxs(qe,{children:[e.jsx(et,{children:e.jsx(tt,{children:e.jsx("use",{href:x+"#icon-exclamation-mark"})})}),e.jsx(it,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ot=o.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,rt=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,st=o.div`
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
`,dt=o.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,xt=()=>{const r=G(),l=D(U),i=D(ke),d=D(be),h=D(ve),{addProducts:a,addExercises:c}=l,[p,s]=g.useState(new Date),f=D(F),m=f?f.createdAt:null,y=B(p),n=B(m);return console.log(y),g.useEffect(()=>{(async v=>{try{await r(Q(v))}catch{L.error("Sorry, something went wrong, please try again",{theme:"dark"})}})(p)},[r,y,p]),e.jsx($e,{children:i||d?e.jsx(De,{}):e.jsxs(ot,{children:[e.jsxs(rt,{children:[e.jsx(ze,{contentText:"Diary"}),e.jsx(Re,{currentDate:p,setCurrentDate:s,userDateRegistration:n})]}),e.jsxs(dt,{children:[e.jsx(nt,{userDiaryInformation:l,bmr:h}),e.jsxs(st,{children:[e.jsx(Je,{productsArray:a,currentDate:p,date:y}),e.jsx(Ve,{exercisesArray:c,date:y})]})]})]})})};export{xt as default};
