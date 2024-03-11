import{u as n,a as t,j as e,x as ce,B as T,r as w,b as y,f as _,s as f,R as he,d as H,N as J,y as pe,z as N,A as xe,D as fe,E as me,C as we,F as ge,t as ue}from"./index-72062358.js";import{i as ye,f as je}from"./index-e206cd77.js";import{T as be}from"./TitlePage-41c85204.js";import{T as ve,_ as U,s as Y,a as $e,b as De,c as Q}from"./changeDate-8899e4c2.js";import"./floating-ui.dom-9d61e2db.js";const Se=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,ke=n.button`
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
`,Ce=n.p`
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
`,ze=n.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Ie=n.button`
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
`,Oe=n.button`
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
`,Te=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Ee=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const We=n.div`
  position: absolute;
  left: -50%;
  top: 90%;
  transform: translate(0%, 0%);
  z-index: 10;
`;n.button`
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
`;const Le=({selectedDate:i,setSelectedDate:a,isOpen:r,onClose:s,setCurrentDate:h,userDateRegistration:d,dateFormat:x})=>{const o=new Date,p=c=>c<new Date(d)||c>o,m=c=>p(c)?"disabled-day":null,l=c=>{c>=d&&c<=o?(a(c),h(c),s()):T.error(`You can review the information from the day of your registration: ${d} up to today: ${o}. `,{theme:"dark"})};return e.jsx(e.Fragment,{children:e.jsxs(We,{children:[e.jsx(ye,{selected:i,dateFormat:x,calendarStartDay:1,formatWeekDay:c=>c.substr(0,1),open:r,customInput:e.jsx("div",{style:{display:"none"}}),onChange:l,minDate:new Date(d),maxDate:o,dayClassName:m}),e.jsx(ce,{})]})})},Pe=()=>{const[i,a]=w.useState(new Date),[r,s]=w.useState(i),[h,d]=w.useState(!1),[x,o]=w.useState(!1),[p,m]=w.useState(!1),{createdAt:l}=y(_),c=l,b=()=>{d(!h)},E=()=>{o(!0);const j=new Date(i);j>c?(j.setDate(j.getDate()-1),a(j),s(j),o(!1)):(T.error(`SORRY!!! Selected date cannot be earlier than the registration date: ${c.toLocaleDateString()}.`,{theme:"dark"}),o(!0))},W=()=>{m(!0);const j=new Date,P=new Date(r);P.setDate(r.getDate()+1),P<=j?(a(P),s(P),m(!1)):(T.error(`SORRY!!! Selected date cannot be later than today's date: ${j.toLocaleDateString()}.`,{theme:"dark"}),m(!0))},L=()=>{d(!1)};return e.jsxs(Se,{children:[e.jsx(Ce,{onClick:b,children:je(r,"dd/MM/yyyy")}),e.jsx(Ie,{onClick:b,children:e.jsx(ze,{children:e.jsx("use",{href:f+"#icon-calendar"})})}),e.jsx(Oe,{type:"button",onClick:E,children:e.jsx(Te,{className:x?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(ke,{type:"button",onClick:W,children:e.jsx(Ee,{className:p?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Le,{selectedDate:r,dateFormat:"dd/MM/yyyy",setSelectedDate:s,isOpen:h,onClose:L,setCurrentDate:a,userDateRegistration:c,minDate:c})]})};function Re(i){return Object.keys(i).length===0}function Be(i=null){const a=w.useContext(ve);return!a||Re(a)?i:a}function K(i,a){const r=U({},a);return Object.keys(i).forEach(s=>{if(s.toString().match(/^(components|slots)$/))r[s]=U({},i[s],r[s]);else if(s.toString().match(/^(componentsProps|slotProps)$/)){const h=i[s]||{},d=a[s];r[s]={},!d||!Object.keys(d)?r[s]=h:!h||!Object.keys(h)?r[s]=d:(r[s]=U({},d),Object.keys(h).forEach(x=>{r[s][x]=K(h[x],d[x])}))}else r[s]===void 0&&(r[s]=i[s])}),r}function Ae(i){const{theme:a,name:r,props:s}=i;return!a||!a.components||!a.components[r]||!a.components[r].defaultProps?s:K(a.components[r].defaultProps,s)}const Me=typeof window<"u"?w.useLayoutEffect:w.useEffect,_e=Me;function Ne(i,a,r,s,h){const[d,x]=w.useState(()=>h&&r?r(i).matches:s?s(i).matches:a);return _e(()=>{let o=!0;if(!r)return;const p=r(i),m=()=>{o&&x(p.matches)};return m(),p.addListener(m),()=>{o=!1,p.removeListener(m)}},[i,r]),d}const X=he["useSyncExternalStore"];function Ue(i,a,r,s,h){const d=w.useCallback(()=>a,[a]),x=w.useMemo(()=>{if(h&&r)return()=>r(i).matches;if(s!==null){const{matches:l}=s(i);return()=>l}return d},[d,i,s,h,r]),[o,p]=w.useMemo(()=>{if(r===null)return[d,()=>()=>{}];const l=r(i);return[()=>l.matches,c=>(l.addListener(c),()=>{l.removeListener(c)})]},[d,r,i]);return X(p,o,x)}function Z(i,a={}){const r=Be(),s=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:d=s?window.matchMedia:null,ssrMatchMedia:x=null,noSsr:o=!1}=Ae({name:"MuiUseMediaQuery",props:a,theme:r});let p=typeof i=="function"?i(r):i;return p=p.replace(/^@media( ?)/m,""),(X!==void 0?Ue:Ne)(p,h,d,x,o)}const q=n.div`
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
`,ee=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,te=n.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,ie=n.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ne=n.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,oe=n.p`
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
`,R=n.div`
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
`,B=n.div`
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
`,He=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,D=n.li`
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
`,F=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,u=n.li`
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
`,S=n.li`
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
`,re=n.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,se=n.div`
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
`,de=n.div`
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
`,le=n.div`
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
`,ae=n.div`
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
`,A=n.button`
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
`,M=n.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,G=n.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ye=({productsArray:i,date:a})=>{const r=H(),h=y(_).blood,d=y(Y),x=Z("(max-width:768px)"),o=l=>l[0].toUpperCase()+l.slice(1).toLowerCase();let p;const m=async l=>{try{await r(pe(l)),await r(N(a))}catch{T.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(q,{children:[e.jsxs(ee,{children:[e.jsx(te,{children:"Products"}),e.jsx(ie,{children:e.jsxs(J,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ne,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),i&&i.length>0&&!d?x?e.jsx(R,{children:e.jsx(B,{children:i.map(l=>{const c=l.productId.groupBloodNotAllowed[h]?p="Yes":p="No";return e.jsxs(F,{children:[e.jsx(u,{children:"Title"}),e.jsx(u,{children:o(l.productId.title)}),e.jsx(u,{children:"Category"}),e.jsx(u,{children:o(l.productId.category)}),e.jsxs(re,{children:[e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Calories"}),e.jsx(u,{children:l.calories})]}),e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Weight"}),e.jsx(u,{children:l.amount})]}),e.jsxs(le,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Recommend"}),e.jsx(u,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:c==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(G,{children:p})]})})]}),e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:""}),e.jsx(u,{children:e.jsx(A,{type:"button",onClick:()=>m(l._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},l._id)})})}):e.jsxs(R,{children:[e.jsxs(He,{children:[e.jsx(D,{children:"Title"}),e.jsx(D,{children:"Category"}),e.jsx(D,{children:"Calories"}),e.jsx(D,{children:"Weight"}),e.jsx(D,{children:"Recommend"}),e.jsx(D,{children:""})]}),e.jsx(B,{children:i.map(l=>{const c=l.productId.groupBloodNotAllowed[h]?p="Yes":p="No";return e.jsxs(F,{children:[e.jsx(S,{children:o(l.productId.title)}),e.jsx(S,{children:o(l.productId.category)}),e.jsx(S,{children:l.calories}),e.jsx(S,{children:l.amount}),e.jsx(S,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:c==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(G,{children:p})]})}),e.jsx(S,{children:e.jsx(A,{type:"button",onClick:()=>m(l._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},l._id)})})]}):e.jsx(oe,{children:"Not found products"})]})},Qe=n.ul`
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
`,v=n.li`
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
`,V=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,g=n.li`
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
`,$=n.li`
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
`,Fe=({exercisesArray:i,date:a})=>{const r=Z("(max-width:768px)"),s=y(Y),h=H(),d=o=>o[0].toUpperCase()+o.slice(1).toLowerCase(),x=async o=>{try{await h(xe(o)),await h(N(a))}catch(p){console.log(p),T.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(q,{children:[e.jsxs(ee,{children:[e.jsx(te,{children:"Exercises"}),e.jsx(ie,{children:e.jsxs(J,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ne,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),i&&i.length>0&&!s?r?e.jsx(R,{children:e.jsx(B,{children:i.map(o=>e.jsxs(V,{children:[e.jsx(g,{children:"Body Part"}),e.jsx(g,{children:d(o.exerciseId.bodyPart)}),e.jsx(g,{children:"Equipment"}),e.jsx(g,{children:d(o.exerciseId.equipment)}),e.jsx(g,{children:"Name"}),e.jsx(g,{children:d(o.exerciseId.name)}),e.jsxs(re,{children:[e.jsxs(se,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:"Target"}),e.jsx(g,{children:d(o.exerciseId.target)})]}),e.jsxs(de,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:"Burned Calories"}),e.jsx(g,{children:o.calories})]}),e.jsxs(le,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:"Time"}),e.jsx(g,{children:o.time})]}),e.jsxs(ae,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{children:""}),e.jsx(g,{children:e.jsx(A,{type:"button",onClick:()=>x(o._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},o._id))})}):e.jsxs(R,{children:[e.jsxs(Qe,{children:[e.jsx(v,{children:"Body Part"}),e.jsx(v,{children:"Equipment"}),e.jsx(v,{children:"Name"}),e.jsx(v,{children:"Target"}),e.jsx(v,{children:"Burned Calories"}),e.jsx(v,{children:"Time"}),e.jsx(v,{children:""})]}),e.jsx(B,{children:i.map(o=>e.jsxs(V,{children:[e.jsx($,{children:d(o.exerciseId.bodyPart)}),e.jsx($,{children:d(o.exerciseId.equipment)}),e.jsx($,{children:d(o.exerciseId.name)}),e.jsx($,{children:d(o.exerciseId.target)}),e.jsx($,{children:o.calories}),e.jsx($,{children:o.time}),e.jsx($,{children:e.jsx(A,{type:"button",onClick:()=>x(o._id),children:e.jsx(M,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},o._id))})]}):e.jsx(oe,{children:"Not found exercises"})]})},Ge=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,Ve=n.ul`
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
`,k=n.li`
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
`,C=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,z=n.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,I=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,Je=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,Ke=n.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,O=n.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,Xe=n.svg`
  width: 24px;
  height: 24px;
`,Ze=n.p`
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
`,qe=i=>{var E,W,L;const a=(E=i==null?void 0:i.userDiaryInformation[0])==null?void 0:E.consumedCalories,r=(W=i==null?void 0:i.userDiaryInformation[1])==null?void 0:W.burnedCalories,s=(L=i==null?void 0:i.userDiaryInformation[1])==null?void 0:L.totalExerciseTime,h=y(_),d=h==null?void 0:h.resultBMR,[x,o]=w.useState(!1),[p,m]=w.useState(!1),l=y(Y);w.useEffect(()=>{(async()=>{await N()})()},[]);const c=d-a,b=110-s;return w.useEffect(()=>{c<0&&o(!0),b<0&&m(!0)},[c,b]),e.jsxs(Ge,{children:[e.jsxs(Ve,{children:[e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(z,{children:"Daily calory intake"})]}),e.jsx(I,{children:d||"2200"})]}),e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(z,{children:"Daily norm of sports"})]}),e.jsx(I,{children:"110 min"})]}),e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(z,{children:"Calories consumed"})]}),e.jsx(I,{children:l?0:a})]}),e.jsxs(k,{children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(z,{children:"Calories burned"})]}),e.jsx(I,{children:r&&!l?r:0})]}),e.jsxs(k,{className:x?"redBg":"",children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(z,{children:"The rest of the calories"})]}),e.jsx(I,{children:c||"0"})]}),e.jsxs(k,{className:p?"greenBg":"",children:[e.jsxs(C,{children:[e.jsx(O,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(z,{children:"The rest of sports"})]}),e.jsxs(I,{children:[b||"110"," min"]})]})]}),e.jsxs(Je,{children:[e.jsx(Ke,{children:e.jsx(Xe,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(Ze,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},et=n.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,tt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,it=n.div`
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
`,nt=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,at=()=>{const i=H(),a=y($e),r=y(De),s=y(fe),h=y(me),{addProducts:d,addExercises:x}=a,[o,p]=w.useState(new Date),m=y(_),l=m?m.createdAt:null,c=Q(o),b=Q(l);return w.useEffect(()=>{(async()=>{try{await i(ue()),await i(N(c))}catch{T.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[i,c,o]),e.jsx(we,{children:r||s?e.jsx(ge,{}):e.jsxs(et,{children:[e.jsxs(tt,{children:[e.jsx(be,{contentText:"Diary"}),e.jsx(Pe,{currentDate:o,setCurrentDate:p,userDateRegistration:b})]}),e.jsxs(nt,{children:[e.jsx(qe,{userDiaryInformation:a,bmr:h}),e.jsxs(it,{children:[e.jsx(Ye,{productsArray:d,date:c}),e.jsx(Fe,{exercisesArray:x,date:c})]})]})]})})};export{at as default};
