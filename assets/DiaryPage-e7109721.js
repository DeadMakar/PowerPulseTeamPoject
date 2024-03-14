import{u as r,a as t,y as L,j as e,z as we,B as P,r as m,w as ge,s as f,R as ye,b as v,d as Y,f as F,N as ee,A as b,D as ue,E as _,F as je,G as be,H as ve,C as $e,I as De}from"./index-83a22ca1.js";import{i as Se}from"./index-ba85d21f.js";import{T as ke}from"./TitlePage-51562448.js";import{T as Ie,_ as Q}from"./emotion-element-c39617d8.browser.esm-f07a80cf.js";import"./floating-ui.dom-9d61e2db.js";const ze=r.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,Te=r.button`
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
`,Ce=r.svg`
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
`,We=r.button`
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
`,Ae=r.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Le=r.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Pe=r.div`
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
`;const Be=({selectedDate:i,setSelectedDate:l,isOpen:n,onClose:d,setCurrentDate:h,userDateRegistration:a})=>{const c=L(new Date),p=s=>{const x=L(s);c>=x&&x>=a?(l(s),h(s),d()):P.error(`However, we don't have any data to show you. You can review the information from the day of your registration: ${a} up to today: ${c}. `,{theme:"dark"})};return e.jsxs(Pe,{children:[e.jsx(Se,{selected:i,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:s=>s.substr(0,1),open:n,customInput:e.jsx("div",{style:{display:"none"}}),onChange:p,minDate:new Date(a),maxDate:new Date(c)}),e.jsx(we,{})]})},Me=({currentDate:i,setCurrentDate:l,userDateRegistration:n})=>{const[d,h]=m.useState(i),[a,c]=m.useState(!1),[p,s]=m.useState(!1),[x,o]=m.useState(!1),w=()=>{c(!a)},u=()=>{s(!0);const g=new Date(i);L(g)>n?(g.setDate(g.getDate()-1),l(g),h(g),s(!1)):(P.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${n}.`,{theme:"dark"}),s(!0))},S=()=>{o(!0);const g=L(new Date),D=new Date(d);D.setDate(d.getDate()+1),D>new Date?(P.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${g}.`,{theme:"dark"}),o(!0)):(l(D),h(D),o(!1))},$=()=>{c(!1)};return e.jsxs(ze,{children:[e.jsxs(Ee,{onClick:w,children:[e.jsx(Oe,{children:ge(d,"dd/MM/yyyy")}),e.jsx(Ce,{children:e.jsx("use",{href:f+"#icon-calendar"})})]}),e.jsx(We,{type:"button",onClick:u,children:e.jsx(Ae,{className:p?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(Te,{type:"button",onClick:S,children:e.jsx(Le,{className:x?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Be,{selectedDate:d,setSelectedDate:h,isOpen:a,onClose:$,setCurrentDate:l,userDateRegistration:n})]})};function Re(i){return Object.keys(i).length===0}function He(i=null){const l=m.useContext(Ie);return!l||Re(l)?i:l}function te(i,l){const n=Q({},l);return Object.keys(i).forEach(d=>{if(d.toString().match(/^(components|slots)$/))n[d]=Q({},i[d],n[d]);else if(d.toString().match(/^(componentsProps|slotProps)$/)){const h=i[d]||{},a=l[d];n[d]={},!a||!Object.keys(a)?n[d]=h:!h||!Object.keys(h)?n[d]=a:(n[d]=Q({},a),Object.keys(h).forEach(c=>{n[d][c]=te(h[c],a[c])}))}else n[d]===void 0&&(n[d]=i[d])}),n}function Ne(i){const{theme:l,name:n,props:d}=i;return!l||!l.components||!l.components[n]||!l.components[n].defaultProps?d:te(l.components[n].defaultProps,d)}const _e=typeof window<"u"?m.useLayoutEffect:m.useEffect,Qe=_e;function Ye(i,l,n,d,h){const[a,c]=m.useState(()=>h&&n?n(i).matches:d?d(i).matches:l);return Qe(()=>{let p=!0;if(!n)return;const s=n(i),x=()=>{p&&c(s.matches)};return x(),s.addListener(x),()=>{p=!1,s.removeListener(x)}},[i,n]),a}const ie=ye["useSyncExternalStore"];function Fe(i,l,n,d,h){const a=m.useCallback(()=>l,[l]),c=m.useMemo(()=>{if(h&&n)return()=>n(i).matches;if(d!==null){const{matches:o}=d(i);return()=>o}return a},[a,i,d,h,n]),[p,s]=m.useMemo(()=>{if(n===null)return[a,()=>()=>{}];const o=n(i);return[()=>o.matches,w=>(o.addListener(w),()=>{o.removeListener(w)})]},[a,n,i]);return ie(s,p,c)}function ne(i,l={}){const n=He(),d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:a=d?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:p=!1}=Ne({name:"MuiUseMediaQuery",props:l,theme:n});let s=typeof i=="function"?i(n):i;return s=s.replace(/^@media( ?)/m,""),(ie!==void 0?Fe:Ye)(s,h,a,c,p)}const oe=r.div`
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
`,re=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,se=r.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,de=r.div`
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
`,ae=r.p`
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
`,M=r.div`
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
`,R=r.div`
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
`,j=r.li`
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
`,he=r.div`
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
      width: 78px;
    }
  }
`,xe=r.div`
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
`,fe=r.div`
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
`,H=r.button`
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
`,N=r.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,Z=r.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,G=i=>i.diary.allDiaryInformation,Ue=i=>i.diary.isLoading,U=i=>i.diary.error,me=i=>{if(!(i instanceof Date))return null;const l=String(i.getDate()).padStart(2,"0"),n=String(i.getMonth()+1).padStart(2,"0"),d=i.getFullYear();return`${l}-${n}-${d}`},Ve=({currentDate:i})=>{var x;const l=v(G),n=(x=l[0])==null?void 0:x.productArr,d=Y(),h=v(F),a=h==null?void 0:h.blood,c=v(U),p=ne("(max-width:768px)"),s=async o=>{const w=me(i);try{await d(ue({productId:o,selectedDate:w})),await d(_(w))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(oe,{children:[e.jsxs(re,{children:[e.jsx(se,{children:"Products"}),e.jsx(de,{children:e.jsxs(ee,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(le,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),l&&l.length>0&&!c?p?e.jsx(M,{children:e.jsx(R,{children:n==null?void 0:n.map(o=>{var V,J,K;const w=(V=o==null?void 0:o.productId)==null?void 0:V.title,u=o==null?void 0:o.calories,S=o==null?void 0:o.amount,$=o==null?void 0:o._id,g=(J=o==null?void 0:o.productId)==null?void 0:J.groupBloodNotAllowed,D=(K=o==null?void 0:o.productId)==null?void 0:K.category,B=g&&g[a]?"Yes":"No";return e.jsxs(X,{children:[e.jsx(j,{children:"Title"}),e.jsx(j,{children:b(w)}),e.jsx(j,{children:"Category"}),e.jsx(j,{children:b(D)}),e.jsxs(he,{children:[e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Calories"}),e.jsx(j,{children:u})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Weight"}),e.jsx(j,{children:S})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Recommend"}),e.jsx(j,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:B==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Z,{children:B})]})})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:""}),e.jsx(j,{children:e.jsx(H,{type:"button",onClick:()=>s($),children:e.jsx(N,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},$)})})}):e.jsxs(M,{children:[e.jsxs(Ge,{children:[e.jsx(z,{children:"Title"}),e.jsx(z,{children:"Category"}),e.jsx(z,{children:"Calories"}),e.jsx(z,{children:"Weight"}),e.jsx(z,{children:"Recommend"}),e.jsx(z,{children:""})]}),e.jsx(R,{children:n==null?void 0:n.map(o=>{const w=o==null?void 0:o.productId.title,u=o==null?void 0:o.calories,S=o==null?void 0:o.amount,$=o==null?void 0:o._id,g=o==null?void 0:o.productId.groupBloodNotAllowed,D=o==null?void 0:o.productId.category,B=g&&g[a]?"Yes":"No";return e.jsxs(X,{children:[e.jsx(T,{children:b(w)}),e.jsx(T,{children:b(D)}),e.jsx(T,{children:u}),e.jsx(T,{children:S}),e.jsx(T,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:B==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Z,{children:B})]})}),e.jsx(T,{children:e.jsx(H,{type:"button",onClick:()=>s($),children:e.jsx(N,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},$)})})]}):e.jsx(ae,{children:"Not found products"})]})},Je=r.ul`
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
`,k=r.li`
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
`,q=r.ul`
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
`,I=r.li`
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
`,Ke=({currentDate:i})=>{var p;const n=(p=v(G)[1])==null?void 0:p.exerciseArr,d=ne("(max-width:768px)"),h=v(U),a=Y(),c=async s=>{const x=me(i);try{await a(je({exerciseId:s,selectedDate:x})),await a(_(x))}catch(o){console.log(o),P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(oe,{children:[e.jsxs(re,{children:[e.jsx(se,{children:"Exercises"}),e.jsx(de,{children:e.jsxs(ee,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(le,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),n&&n.length>0&&!h?d?e.jsx(M,{children:e.jsx(R,{children:n==null?void 0:n.map(s=>e.jsxs(q,{children:[e.jsx(y,{children:"Body Part"}),e.jsx(y,{children:b(s.exerciseId.bodyPart)}),e.jsx(y,{children:"Equipment"}),e.jsx(y,{children:b(s.exerciseId.equipment)}),e.jsx(y,{children:"Name"}),e.jsx(y,{children:b(s.exerciseId.name)}),e.jsxs(he,{children:[e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Target"}),e.jsx(y,{children:b(s.exerciseId.target)})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Burned Calories"}),e.jsx(y,{children:s.calories})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Time"}),e.jsx(y,{children:s.time})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(H,{type:"button",onClick:()=>c(s._id),children:e.jsx(N,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},s._id))})}):e.jsxs(M,{children:[e.jsxs(Je,{children:[e.jsx(k,{children:"Body Part"}),e.jsx(k,{children:"Equipment"}),e.jsx(k,{children:"Name"}),e.jsx(k,{children:"Target"}),e.jsx(k,{children:"Burned Calories"}),e.jsx(k,{children:"Time"}),e.jsx(k,{children:""})]}),e.jsx(R,{children:n.map(s=>e.jsxs(q,{children:[e.jsx(I,{children:b(s.exerciseId.bodyPart)}),e.jsx(I,{children:b(s.exerciseId.equipment)}),e.jsx(I,{children:b(s.exerciseId.name)}),e.jsx(I,{children:b(s.exerciseId.target)}),e.jsx(I,{children:s.calories}),e.jsx(I,{children:s.time}),e.jsx(I,{children:e.jsx(H,{type:"button",onClick:()=>c(s._id),children:e.jsx(N,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},s._id))})]}):e.jsx(ae,{children:"Not found exercises"})]})},Xe=r.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ze=r.ul`
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
`,E=r.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,W=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,qe=r.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,et=r.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,A=r.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,tt=r.svg`
  width: 24px;
  height: 24px;
`,it=r.p`
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
`,nt=i=>{var S,$,g;const l=(S=i==null?void 0:i.userDiaryInformation[0])==null?void 0:S.consumedCalories,n=($=i==null?void 0:i.userDiaryInformation[1])==null?void 0:$.burnedCalories,d=(g=i==null?void 0:i.userDiaryInformation[1])==null?void 0:g.totalExerciseTime,h=v(F),a=h==null?void 0:h.resultBMR,[c,p]=m.useState(!1),[s,x]=m.useState(!1),o=v(U);m.useEffect(()=>{(async()=>{await _()})()},[]);const w=a-l,u=110-d;return m.useEffect(()=>{w<0&&p(!0),u<0&&x(!0)},[w,u]),e.jsxs(Xe,{children:[e.jsxs(Ze,{children:[e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(E,{children:"Daily calory intake"})]}),e.jsx(W,{children:a||"2200"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(E,{children:"Daily norm of sports"})]}),e.jsx(W,{children:"110 min"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(E,{children:"Calories consumed"})]}),e.jsx(W,{children:o?0:l})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(E,{children:"Calories burned"})]}),e.jsx(W,{children:n&&!o?n:0})]}),e.jsxs(O,{className:c?"redBg":"",children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(E,{children:"The rest of the calories"})]}),e.jsx(W,{children:w||"0"})]}),e.jsxs(O,{className:s?"greenBg":"",children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(E,{children:"The rest of sports"})]}),e.jsxs(W,{children:[u||"110"," min"]})]})]}),e.jsxs(qe,{children:[e.jsx(et,{children:e.jsx(tt,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(it,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ot=r.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,rt=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,st=r.div`
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
`,dt=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,xt=()=>{const i=Y(),l=v(G),n=v(Ue),d=v(be),h=v(ve),[a,c]=m.useState(new Date),p=v(F),s=p?p.createdAt:null,x=L(a),o=L(s);return m.useEffect(()=>{(async u=>{try{await i(_(u))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}})(a)},[i,x,a]),e.jsx($e,{children:n||d?e.jsx(De,{}):e.jsxs(ot,{children:[e.jsxs(rt,{children:[e.jsx(ke,{contentText:"Diary"}),e.jsx(Me,{currentDate:a,setCurrentDate:c,userDateRegistration:o})]}),e.jsxs(dt,{children:[e.jsx(nt,{userDiaryInformation:l,bmr:h}),e.jsxs(st,{children:[e.jsx(Ve,{currentDate:a}),e.jsx(Ke,{currentDate:a})]})]})]})})};export{xt as default};
