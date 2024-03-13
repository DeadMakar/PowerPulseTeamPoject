import{f as o,h as t,j as e,H as ge,E as L,r as g,A as ye,s as x,R as ue,u as S,a as Y,d as G,N as ie,I as D,J as X,K as je,M as F,P as be,S as ve,C as $e,T as De}from"./index-ecb71782.js";import{c as B,T as Se,_ as Q,s as U,a as J,b as ke}from"./selectors-d3f90e77.js";import{i as Ie}from"./index-823a5d03.js";import{T as ze}from"./TitlePage-abe631da.js";import"./floating-ui.dom-9d61e2db.js";const Te=o.div`
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
`;const Me=({selectedDate:r,setSelectedDate:l,isOpen:n,onClose:d,setCurrentDate:h,userDateRegistration:a})=>{const c=B(new Date),p=s=>{const f=B(s);c>=f&&f>=a?(l(s),h(s),d()):L.error(`However, we don't have any data to show you. You can review the information from the day of your registration: ${a} up to today: ${c}. `,{theme:"dark"})};return e.jsxs(Be,{children:[e.jsx(Ie,{selected:r,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:n,customInput:e.jsx("div",{style:{display:"none"}}),onChange:p,minDate:new Date(a),maxDate:new Date(c)}),e.jsx(ge,{})]})},Re=({currentDate:r,setCurrentDate:l,userDateRegistration:n})=>{const[d,h]=g.useState(r),[a,c]=g.useState(!1),[p,s]=g.useState(!1),[f,w]=g.useState(!1),i=()=>{c(!a)},y=()=>{s(!0);const m=new Date(r);B(m)>n?(m.setDate(m.getDate()-1),l(m),h(m),s(!1)):(L.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${n}.`,{theme:"dark"}),s(!0))},b=()=>{w(!0);const m=B(new Date),j=new Date(d);j.setDate(d.getDate()+1),j>new Date?(L.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${m}.`,{theme:"dark"}),w(!0)):(l(j),h(j),w(!1))},v=()=>{c(!1)};return e.jsxs(Te,{children:[e.jsxs(Ae,{onClick:i,children:[e.jsx(Ce,{children:ye(d,"dd/MM/yyyy")}),e.jsx(Ee,{children:e.jsx("use",{href:x+"#icon-calendar"})})]}),e.jsx(We,{type:"button",onClick:y,children:e.jsx(Pe,{className:p?"passivePrev":"",children:e.jsx("use",{href:x+"#icon-chevron-left"})})}),e.jsx(Oe,{type:"button",onClick:b,children:e.jsx(Le,{className:f?"passiveNext":"",children:e.jsx("use",{href:x+"#icon-chevron-right"})})}),e.jsx(Me,{selectedDate:d,setSelectedDate:h,isOpen:a,onClose:v,setCurrentDate:l,userDateRegistration:n})]})};function He(r){return Object.keys(r).length===0}function Ne(r=null){const l=g.useContext(Se);return!l||He(l)?r:l}function ne(r,l){const n=Q({},l);return Object.keys(r).forEach(d=>{if(d.toString().match(/^(components|slots)$/))n[d]=Q({},r[d],n[d]);else if(d.toString().match(/^(componentsProps|slotProps)$/)){const h=r[d]||{},a=l[d];n[d]={},!a||!Object.keys(a)?n[d]=h:!h||!Object.keys(h)?n[d]=a:(n[d]=Q({},a),Object.keys(h).forEach(c=>{n[d][c]=ne(h[c],a[c])}))}else n[d]===void 0&&(n[d]=r[d])}),n}function _e(r){const{theme:l,name:n,props:d}=r;return!l||!l.components||!l.components[n]||!l.components[n].defaultProps?d:ne(l.components[n].defaultProps,d)}const Qe=typeof window<"u"?g.useLayoutEffect:g.useEffect,Ye=Qe;function Ge(r,l,n,d,h){const[a,c]=g.useState(()=>h&&n?n(r).matches:d?d(r).matches:l);return Ye(()=>{let p=!0;if(!n)return;const s=n(r),f=()=>{p&&c(s.matches)};return f(),s.addListener(f),()=>{p=!1,s.removeListener(f)}},[r,n]),a}const oe=ue["useSyncExternalStore"];function Fe(r,l,n,d,h){const a=g.useCallback(()=>l,[l]),c=g.useMemo(()=>{if(h&&n)return()=>n(r).matches;if(d!==null){const{matches:w}=d(r);return()=>w}return a},[a,r,d,h,n]),[p,s]=g.useMemo(()=>{if(n===null)return[a,()=>()=>{}];const w=n(r);return[()=>w.matches,i=>(w.addListener(i),()=>{w.removeListener(i)})]},[a,n,r]);return oe(s,p,c)}function re(r,l={}){const n=Ne(),d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:a=d?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:p=!1}=_e({name:"MuiUseMediaQuery",props:l,theme:n});let s=typeof r=="function"?r(n):r;return s=s.replace(/^@media( ?)/m,""),(oe!==void 0?Fe:Ge)(s,h,a,c,p)}const se=o.div`
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
`,ee=o.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Je=({selectedDate:r})=>{var w;const l=S(U),n=(w=l[0])==null?void 0:w.productArr,d=Y(),h=S(G),a=h==null?void 0:h.blood,c=S(J),p=re("(max-width:768px)");(i=>{if(i===void 0)return"";const y=k=>k<10?`0${k}`:k,b=y(i.getDate()),v=y(i.getMonth()+1),m=i.getFullYear();return`${b}-${v}-${m}`})(r);const f=async(i,y)=>{try{await d(X(i,y))}catch{L.error("Sorry, something went wrong, please try again",{theme:"dark"}),console.log(123)}};return e.jsxs(se,{children:[e.jsxs(de,{children:[e.jsx(le,{children:"Products"}),e.jsx(ae,{children:e.jsxs(ie,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(he,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),l&&l.length>0&&!c?p?e.jsx(R,{children:e.jsx(H,{children:n==null?void 0:n.map(i=>{var K,V,Z;const y=(K=i==null?void 0:i.productId)==null?void 0:K.title,b=i==null?void 0:i.calories,v=i==null?void 0:i.amount,m=i==null?void 0:i._id,j=(V=i==null?void 0:i.productId)==null?void 0:V.groupBloodNotAllowed,k=(Z=i==null?void 0:i.productId)==null?void 0:Z.category,M=j&&j[a]?"Yes":"No";return e.jsxs(q,{children:[e.jsx($,{children:"Title"}),e.jsx($,{children:D(y)}),e.jsx($,{children:"Category"}),e.jsx($,{children:D(k)}),e.jsxs(pe,{children:[e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Calories"}),e.jsx($,{children:b})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Weight"}),e.jsx($,{children:v})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:"Recommend"}),e.jsx($,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:M==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(ee,{children:M})]})})]}),e.jsxs(we,{style:{display:"flex",flexDirection:"column"},children:[e.jsx($,{children:""}),e.jsx($,{children:e.jsx(N,{type:"button",onClick:()=>d(X(m,r)),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},m)})})}):e.jsxs(R,{children:[e.jsxs(Ue,{children:[e.jsx(T,{children:"Title"}),e.jsx(T,{children:"Category"}),e.jsx(T,{children:"Calories"}),e.jsx(T,{children:"Weight"}),e.jsx(T,{children:"Recommend"}),e.jsx(T,{children:""})]}),e.jsx(H,{children:n==null?void 0:n.map(i=>{const y=i==null?void 0:i.productId.title,b=i==null?void 0:i.calories,v=i==null?void 0:i.amount,m=i==null?void 0:i._id,j=i==null?void 0:i.productId.groupBloodNotAllowed,k=i==null?void 0:i.productId.category,M=j&&j[a]?"Yes":"No";return e.jsxs(q,{children:[e.jsx(O,{children:D(y)}),e.jsx(O,{children:D(k)}),e.jsx(O,{children:b}),e.jsx(O,{children:v}),e.jsx(O,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:M==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(ee,{children:M})]})}),e.jsx(O,{children:e.jsx(N,{type:"button",onClick:()=>f(m,r),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},m)})})]}):e.jsx(ce,{children:"Not found products"})]})},Ke=o.ul`
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
`,u=o.li`
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
`,Ve=({selectedDate:r})=>{var p;const n=(p=S(U)[1])==null?void 0:p.exerciseArr,d=re("(max-width:768px)"),h=S(J),a=Y(),c=async s=>{try{await a(je(s,r)),await a(F(r))}catch(f){console.log(f),L.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(se,{children:[e.jsxs(de,{children:[e.jsx(le,{children:"Exercises"}),e.jsx(ae,{children:e.jsxs(ie,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(he,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),n&&n.length>0&&!h?d?e.jsx(R,{children:e.jsx(H,{children:n==null?void 0:n.map(s=>e.jsxs(te,{children:[e.jsx(u,{children:"Body Part"}),e.jsx(u,{children:D(s.exerciseId.bodyPart)}),e.jsx(u,{children:"Equipment"}),e.jsx(u,{children:D(s.exerciseId.equipment)}),e.jsx(u,{children:"Name"}),e.jsx(u,{children:D(s.exerciseId.name)}),e.jsxs(pe,{children:[e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Target"}),e.jsx(u,{children:D(s.exerciseId.target)})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Burned Calories"}),e.jsx(u,{children:s.calories})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Time"}),e.jsx(u,{children:s.time})]}),e.jsxs(we,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:""}),e.jsx(u,{children:e.jsx(N,{type:"button",onClick:()=>c(s._id),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},s._id))})}):e.jsxs(R,{children:[e.jsxs(Ke,{children:[e.jsx(I,{children:"Body Part"}),e.jsx(I,{children:"Equipment"}),e.jsx(I,{children:"Name"}),e.jsx(I,{children:"Target"}),e.jsx(I,{children:"Burned Calories"}),e.jsx(I,{children:"Time"}),e.jsx(I,{children:""})]}),e.jsx(H,{children:n.map(s=>e.jsxs(te,{children:[e.jsx(z,{children:D(s.exerciseId.bodyPart)}),e.jsx(z,{children:D(s.exerciseId.equipment)}),e.jsx(z,{children:D(s.exerciseId.name)}),e.jsx(z,{children:D(s.exerciseId.target)}),e.jsx(z,{children:s.calories}),e.jsx(z,{children:s.time}),e.jsx(z,{children:e.jsx(N,{type:"button",onClick:()=>c(s._id),children:e.jsx(_,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},s._id))})]}):e.jsx(ce,{children:"Not found exercises"})]})},Ze=o.div`
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
`,nt=r=>{var b,v,m;const l=(b=r==null?void 0:r.userDiaryInformation[0])==null?void 0:b.consumedCalories,n=(v=r==null?void 0:r.userDiaryInformation[1])==null?void 0:v.burnedCalories,d=(m=r==null?void 0:r.userDiaryInformation[1])==null?void 0:m.totalExerciseTime,h=S(G),a=h==null?void 0:h.resultBMR,[c,p]=g.useState(!1),[s,f]=g.useState(!1),w=S(J);g.useEffect(()=>{(async()=>{await F()})()},[]);const i=a-l,y=110-d;return g.useEffect(()=>{i<0&&p(!0),y<0&&f(!0)},[i,y]),e.jsxs(Ze,{children:[e.jsxs(Xe,{children:[e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-fluent_food-24-filled"})}),e.jsx(A,{children:"Daily calory intake"})]}),e.jsx(W,{children:a||"2200"})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-dumbbell"})}),e.jsx(A,{children:"Daily norm of sports"})]}),e.jsx(W,{children:"110 min"})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-fluent_food-apple-20-filled"})}),e.jsx(A,{children:"Calories consumed"})]}),e.jsx(W,{children:w?0:l})]}),e.jsxs(C,{children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-calories-1"})}),e.jsx(A,{children:"Calories burned"})]}),e.jsx(W,{children:n&&!w?n:0})]}),e.jsxs(C,{className:c?"redBg":"",children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-bubble"})}),e.jsx(A,{children:"The rest of the calories"})]}),e.jsx(W,{children:i||"0"})]}),e.jsxs(C,{className:s?"greenBg":"",children:[e.jsxs(E,{children:[e.jsx(P,{children:e.jsx("use",{href:x+"#icon-running-figure"})}),e.jsx(A,{children:"The rest of sports"})]}),e.jsxs(W,{children:[y||"110"," min"]})]})]}),e.jsxs(qe,{children:[e.jsx(et,{children:e.jsx(tt,{children:e.jsx("use",{href:x+"#icon-exclamation-mark"})})}),e.jsx(it,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ot=o.div`
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
`,xt=()=>{const r=Y(),l=S(U),n=S(ke),d=S(be),h=S(ve),{addProducts:a,addExercises:c}=l,[p,s]=g.useState(new Date),f=S(G),w=f?f.createdAt:null,i=B(p),y=B(w);return g.useEffect(()=>{(async v=>{try{await r(F(v))}catch{L.error("Sorry, something went wrong, please try again",{theme:"dark"})}})(p)},[r,i,p]),e.jsx($e,{children:n||d?e.jsx(De,{}):e.jsxs(ot,{children:[e.jsxs(rt,{children:[e.jsx(ze,{contentText:"Diary"}),e.jsx(Re,{currentDate:p,setCurrentDate:s,userDateRegistration:y})]}),e.jsxs(dt,{children:[e.jsx(nt,{userDiaryInformation:l,bmr:h}),e.jsxs(st,{children:[e.jsx(Je,{productsArray:a,currentDate:p,date:i}),e.jsx(Ve,{exercisesArray:c,date:i})]})]})]})})};export{xt as default};
