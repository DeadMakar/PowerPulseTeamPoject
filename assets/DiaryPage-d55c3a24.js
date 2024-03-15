import{u as r,a as t,y as L,j as e,z as we,B as P,r as w,w as ge,s as x,R as ye,b as v,d as Y,f as Q,N as ee,A as b,D as ue,E as F,F as je,G as be,H as ve,C as $e,I as De}from"./index-f96a4d42.js";import{i as Se}from"./index-98cc3807.js";import{T as ke}from"./TitlePage-280695d3.js";import{T as Ie,_}from"./emotion-element-c39617d8.browser.esm-ba24c660.js";import"./floating-ui.dom-9d61e2db.js";const ze=r.div`
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
`;const Be=({selectedDate:n,setSelectedDate:l,isOpen:o,onClose:s,setCurrentDate:h,userDateRegistration:a})=>{const c=L(new Date),p=i=>{const f=L(i);c>=f&&f>=a?(l(i),h(i),s()):P.error(`SORRY!!! You can review the information from the day of your registration: ${a} up to today: ${c}. `,{theme:"dark"})},d=i=>i<a&&i>c,m=i=>d(i)?"disabled-day":null;return e.jsxs(Pe,{children:[e.jsx(Se,{selected:n,dateFormat:"dd/MM/yyyy",calendarStartDay:1,formatWeekDay:i=>i.substr(0,1),open:o,customInput:e.jsx("div",{style:{display:"none"}}),onChange:p,minDate:new Date(a),maxDate:new Date(c),dayClassName:m}),e.jsx(we,{})]})},Me=({currentDate:n,setCurrentDate:l,userDateRegistration:o})=>{const[s,h]=w.useState(n),[a,c]=w.useState(!1),[p,d]=w.useState(!1),[m,i]=w.useState(!1),f=()=>{c(!a)},u=()=>{d(!0);const g=new Date(n);L(g)>o?(g.setDate(g.getDate()-1),l(g),h(g),d(!1)):(P.error(`However, we don't have any data to show you. Selected date cannot be earlier than the registration date: ${o}.`,{theme:"dark"}),d(!0))},S=()=>{i(!0);const g=L(new Date),D=new Date(s);D.setDate(s.getDate()+1),D>new Date?(P.error(`However, we don't have any data to show you. Selected date cannot be later than today's date: ${g}.`,{theme:"dark"}),i(!0)):(l(D),h(D),i(!1))},$=()=>{c(!1)};return e.jsxs(ze,{children:[e.jsxs(Ee,{onClick:f,children:[e.jsx(Oe,{children:ge(s,"dd/MM/yyyy")}),e.jsx(Ce,{children:e.jsx("use",{href:x+"#icon-calendar"})})]}),e.jsx(We,{type:"button",onClick:u,children:e.jsx(Ae,{className:p?"passivePrev":"",children:e.jsx("use",{href:x+"#icon-chevron-left"})})}),e.jsx(Te,{type:"button",onClick:S,children:e.jsx(Le,{className:m?"passiveNext":"",children:e.jsx("use",{href:x+"#icon-chevron-right"})})}),e.jsx(Be,{selectedDate:s,setSelectedDate:h,isOpen:a,onClose:$,setCurrentDate:l,userDateRegistration:o})]})};function Re(n){return Object.keys(n).length===0}function He(n=null){const l=w.useContext(Ie);return!l||Re(l)?n:l}function te(n,l){const o=_({},l);return Object.keys(n).forEach(s=>{if(s.toString().match(/^(components|slots)$/))o[s]=_({},n[s],o[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const h=n[s]||{},a=l[s];o[s]={},!a||!Object.keys(a)?o[s]=h:!h||!Object.keys(h)?o[s]=a:(o[s]=_({},a),Object.keys(h).forEach(c=>{o[s][c]=te(h[c],a[c])}))}else o[s]===void 0&&(o[s]=n[s])}),o}function Ne(n){const{theme:l,name:o,props:s}=n;return!l||!l.components||!l.components[o]||!l.components[o].defaultProps?s:te(l.components[o].defaultProps,s)}const _e=typeof window<"u"?w.useLayoutEffect:w.useEffect,Ye=_e;function Qe(n,l,o,s,h){const[a,c]=w.useState(()=>h&&o?o(n).matches:s?s(n).matches:l);return Ye(()=>{let p=!0;if(!o)return;const d=o(n),m=()=>{p&&c(d.matches)};return m(),d.addListener(m),()=>{p=!1,d.removeListener(m)}},[n,o]),a}const ie=ye["useSyncExternalStore"];function Fe(n,l,o,s,h){const a=w.useCallback(()=>l,[l]),c=w.useMemo(()=>{if(h&&o)return()=>o(n).matches;if(s!==null){const{matches:i}=s(n);return()=>i}return a},[a,n,s,h,o]),[p,d]=w.useMemo(()=>{if(o===null)return[a,()=>()=>{}];const i=o(n);return[()=>i.matches,f=>(i.addListener(f),()=>{i.removeListener(f)})]},[a,o,n]);return ie(d,p,c)}function ne(n,l={}){const o=He(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:a=s?window.matchMedia:null,ssrMatchMedia:c=null,noSsr:p=!1}=Ne({name:"MuiUseMediaQuery",props:l,theme:o});let d=typeof n=="function"?n(o):n;return d=d.replace(/^@media( ?)/m,""),(ie!==void 0?Fe:Qe)(d,h,a,c,p)}const oe=r.div`
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
`,G=n=>n.diary.allDiaryInformation,Ue=n=>n.diary.isLoading,U=n=>n.diary.error,me=n=>{if(!(n instanceof Date))return null;const l=String(n.getDate()).padStart(2,"0"),o=String(n.getMonth()+1).padStart(2,"0"),s=n.getFullYear();return`${l}-${o}-${s}`},Ve=({currentDate:n})=>{var m;const l=v(G),o=(m=l[0])==null?void 0:m.productArr,s=Y(),h=v(Q),a=h==null?void 0:h.blood,c=v(U),p=ne("(max-width:768px)"),d=async i=>{const f=me(n);try{await s(ue({productId:i,selectedDate:f})),await s(F(f))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(oe,{children:[e.jsxs(re,{children:[e.jsx(se,{children:"Products"}),e.jsx(de,{children:e.jsxs(ee,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(le,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),l&&l.length>0&&!c?p?e.jsx(M,{children:e.jsx(R,{children:o==null?void 0:o.map(i=>{var V,J,K;const f=(V=i==null?void 0:i.productId)==null?void 0:V.title,u=i==null?void 0:i.calories,S=i==null?void 0:i.amount,$=i==null?void 0:i._id,g=(J=i==null?void 0:i.productId)==null?void 0:J.groupBloodNotAllowed,D=(K=i==null?void 0:i.productId)==null?void 0:K.category,B=g&&g[a]?"Yes":"No";return e.jsxs(X,{children:[e.jsx(j,{children:"Title"}),e.jsx(j,{children:b(f)}),e.jsx(j,{children:"Category"}),e.jsx(j,{children:b(D)}),e.jsxs(he,{children:[e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Calories"}),e.jsx(j,{children:u})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Weight"}),e.jsx(j,{children:S})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:"Recommend"}),e.jsx(j,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:B==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Z,{children:B})]})})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(j,{children:""}),e.jsx(j,{children:e.jsx(H,{type:"button",onClick:()=>d($),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},$)})})}):e.jsxs(M,{children:[e.jsxs(Ge,{children:[e.jsx(z,{children:"Title"}),e.jsx(z,{children:"Category"}),e.jsx(z,{children:"Calories"}),e.jsx(z,{children:"Weight"}),e.jsx(z,{children:"Recommend"}),e.jsx(z,{children:""})]}),e.jsx(R,{children:o==null?void 0:o.map(i=>{const f=i==null?void 0:i.productId.title,u=i==null?void 0:i.calories,S=i==null?void 0:i.amount,$=i==null?void 0:i._id,g=i==null?void 0:i.productId.groupBloodNotAllowed,D=i==null?void 0:i.productId.category,B=g&&g[a]?"Yes":"No";return e.jsxs(X,{children:[e.jsx(T,{children:b(f)}),e.jsx(T,{children:b(D)}),e.jsx(T,{children:u}),e.jsx(T,{children:S}),e.jsx(T,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:B==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(Z,{children:B})]})}),e.jsx(T,{children:e.jsx(H,{type:"button",onClick:()=>d($),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},$)})})]}):e.jsx(ae,{children:"Not found products"})]})},Je=r.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
    /* justify-content: start; */
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
`,Ke=({currentDate:n})=>{var p;const o=(p=v(G)[1])==null?void 0:p.exerciseArr,s=ne("(max-width:768px)"),h=v(U),a=Y(),c=async d=>{const m=me(n);try{await a(je({exerciseId:d,selectedDate:m}))}catch(i){console.log(i),P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(oe,{children:[e.jsxs(re,{children:[e.jsx(se,{children:"Exercises"}),e.jsx(de,{children:e.jsxs(ee,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(le,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),o&&o.length>0&&!h?s?e.jsx(M,{children:e.jsx(R,{children:o==null?void 0:o.map(d=>e.jsxs(q,{children:[e.jsx(y,{children:"Body Part"}),e.jsx(y,{children:b(d.exerciseId.bodyPart)}),e.jsx(y,{children:"Equipment"}),e.jsx(y,{children:b(d.exerciseId.equipment)}),e.jsx(y,{children:"Name"}),e.jsx(y,{children:b(d.exerciseId.name)}),e.jsxs(he,{children:[e.jsxs(ce,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Target"}),e.jsx(y,{children:b(d.exerciseId.target)})]}),e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Burned Calories"}),e.jsx(y,{children:d.calories})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Time"}),e.jsx(y,{children:d.time})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(H,{type:"button",onClick:()=>c(d._id),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},d._id))})}):e.jsxs(M,{children:[e.jsxs(Je,{children:[e.jsx(k,{children:"Body Part"}),e.jsx(k,{children:"Equipment"}),e.jsx(k,{children:"Name"}),e.jsx(k,{children:"Target"}),e.jsx(k,{children:"Burned Calories"}),e.jsx(k,{children:"Time"}),e.jsx(k,{children:""})]}),e.jsx(R,{children:o.map(d=>e.jsxs(q,{children:[e.jsx(I,{children:b(d.exerciseId.bodyPart)}),e.jsx(I,{children:b(d.exerciseId.equipment)}),e.jsx(I,{children:b(d.exerciseId.name)}),e.jsx(I,{children:b(d.exerciseId.target)}),e.jsx(I,{children:d.calories}),e.jsx(I,{children:d.time}),e.jsx(I,{children:e.jsx(H,{type:"button",onClick:()=>c(d._id),children:e.jsx(N,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},d._id))})]}):e.jsx(ae,{children:"Not found exercises"})]})},Xe=r.div`
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
`,nt=n=>{var S,$,g;const l=(S=n==null?void 0:n.userDiaryInformation[0])==null?void 0:S.consumedCalories,o=($=n==null?void 0:n.userDiaryInformation[1])==null?void 0:$.burnedCalories,s=(g=n==null?void 0:n.userDiaryInformation[1])==null?void 0:g.totalExerciseTime,h=v(Q),a=h==null?void 0:h.resultBMR,[c,p]=w.useState(!1),[d,m]=w.useState(!1),i=v(U);w.useEffect(()=>{(async()=>{await F()})()},[]);const f=a-l,u=110-s;return w.useEffect(()=>{f<0&&p(!0),u<0&&m(!0)},[f,u]),e.jsxs(Xe,{children:[e.jsxs(Ze,{children:[e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:x+"#icon-fluent_food-24-filled"})}),e.jsx(E,{children:"Daily calory intake"})]}),e.jsx(W,{children:a||"2200"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:x+"#icon-dumbbell"})}),e.jsx(E,{children:"Daily norm of sports"})]}),e.jsx(W,{children:"110 min"})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:x+"#icon-fluent_food-apple-20-filled"})}),e.jsx(E,{children:"Calories consumed"})]}),e.jsx(W,{children:i?0:l})]}),e.jsxs(O,{children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:x+"#icon-calories-1"})}),e.jsx(E,{children:"Calories burned"})]}),e.jsx(W,{children:o&&!i?o:0})]}),e.jsxs(O,{className:c?"redBg":"",children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:x+"#icon-bubble"})}),e.jsx(E,{children:"The rest of the calories"})]}),e.jsx(W,{children:f||"0"})]}),e.jsxs(O,{className:d?"greenBg":"",children:[e.jsxs(C,{children:[e.jsx(A,{children:e.jsx("use",{href:x+"#icon-running-figure"})}),e.jsx(E,{children:"The rest of sports"})]}),e.jsxs(W,{children:[u||"110"," min"]})]})]}),e.jsxs(qe,{children:[e.jsx(et,{children:e.jsx(tt,{children:e.jsx("use",{href:x+"#icon-exclamation-mark"})})}),e.jsx(it,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},ot=r.div`
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
`,xt=()=>{const n=Y(),l=v(G),o=v(Ue),s=v(be),h=v(ve),[a,c]=w.useState(new Date),p=v(Q),d=p?p.createdAt:null,m=L(a),i=L(d);return w.useEffect(()=>{(async u=>{try{await n(F(u))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}})(a)},[n,m,a]),e.jsx($e,{children:o||s?e.jsx(De,{}):e.jsxs(ot,{children:[e.jsxs(rt,{children:[e.jsx(ke,{contentText:"Diary"}),e.jsx(Me,{currentDate:a,setCurrentDate:c,userDateRegistration:i})]}),e.jsxs(dt,{children:[e.jsx(nt,{userDiaryInformation:l,bmr:h}),e.jsxs(st,{children:[e.jsx(Ve,{currentDate:a}),e.jsx(Ke,{currentDate:a})]})]})]})})};export{xt as default};
