import{u as n,a as t,j as e,G as ye,D as P,r as g,b as v,f as F,s as x,R as je,d as V,N as ne,H as be,I as U,J as ve,K as $e,M as De,C as Se,P as ke,x as Ie}from"./index-f161ba50.js";import{i as Ce,f as ze}from"./index-063ab9ce.js";import{T as Te}from"./TitlePage-9a344e9d.js";import{T as Oe,_ as K,s as oe,a as Z,n as X,b as Ee,c as q}from"./changeDate-17108e7c.js";import"./floating-ui.dom-9d61e2db.js";const We=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,Le=n.button`
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
`,Pe=n.p`
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
`,Re=n.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Be=n.button`
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
`,Me=n.button`
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
`,Ae=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Ne=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const _e=n.div`
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
`;const He=({selectedDate:i,setSelectedDate:l,isOpen:s,onClose:d,setCurrentDate:c,userDateRegistration:a,dateFormat:p})=>{const o=new Date,h=r=>r<new Date(a)||r>o,f=r=>h(r)?"disabled-day":null,m=r=>{r>=a&&r<=o?(l(r),c(r),d()):P.error(`You can review the information from the day of your registration: ${a} up to today: ${o}. `,{theme:"dark"})};return e.jsx(e.Fragment,{children:e.jsxs(_e,{children:[e.jsx(Ce,{selected:i,dateFormat:p,calendarStartDay:1,formatWeekDay:r=>r.substr(0,1),open:s,customInput:e.jsx("div",{style:{display:"none"}}),onChange:m,minDate:new Date(a),maxDate:o,dayClassName:f}),e.jsx(ye,{})]})})},Ye=()=>{const[i,l]=g.useState(new Date),[s,d]=g.useState(i),[c,a]=g.useState(!1),[p,o]=g.useState(!1),[h,f]=g.useState(!1),{createdAt:m}=v(F),r=m||new Date,w=()=>{a(!c)},$=()=>{o(!0);const u=new Date(i);u>r?(u.setDate(u.getDate()-1),l(u),d(u),o(!1)):(P.error(`SORRY!!! Selected date cannot be earlier than the registration date: ${r.toLocaleDateString()}.`,{theme:"dark"}),o(!0))},D=()=>{f(!0);const u=new Date,j=new Date(s);j.setDate(s.getDate()+1),j<=u?(l(j),d(j),f(!1)):(P.error(`SORRY!!! Selected date cannot be later than today's date: ${u.toLocaleDateString()}.`,{theme:"dark"}),f(!0))},S=()=>{a(!1)};return e.jsxs(We,{children:[e.jsx(Pe,{onClick:w,children:ze(s,"dd/MM/yyyy")}),e.jsx(Be,{onClick:w,children:e.jsx(Re,{children:e.jsx("use",{href:x+"#icon-calendar"})})}),e.jsx(Me,{type:"button",onClick:$,children:e.jsx(Ae,{className:p?"passivePrev":"",children:e.jsx("use",{href:x+"#icon-chevron-left"})})}),e.jsx(Le,{type:"button",onClick:D,children:e.jsx(Ne,{className:h?"passiveNext":"",children:e.jsx("use",{href:x+"#icon-chevron-right"})})}),e.jsx(He,{selectedDate:s,dateFormat:"dd/MM/yyyy",setSelectedDate:d,isOpen:c,onClose:S,setCurrentDate:l,userDateRegistration:r,minDate:r})]})};function Qe(i){return Object.keys(i).length===0}function Ge(i=null){const l=g.useContext(Oe);return!l||Qe(l)?i:l}function re(i,l){const s=K({},l);return Object.keys(i).forEach(d=>{if(d.toString().match(/^(components|slots)$/))s[d]=K({},i[d],s[d]);else if(d.toString().match(/^(componentsProps|slotProps)$/)){const c=i[d]||{},a=l[d];s[d]={},!a||!Object.keys(a)?s[d]=c:!c||!Object.keys(c)?s[d]=a:(s[d]=K({},a),Object.keys(c).forEach(p=>{s[d][p]=re(c[p],a[p])}))}else s[d]===void 0&&(s[d]=i[d])}),s}function Fe(i){const{theme:l,name:s,props:d}=i;return!l||!l.components||!l.components[s]||!l.components[s].defaultProps?d:re(l.components[s].defaultProps,d)}const Ue=typeof window<"u"?g.useLayoutEffect:g.useEffect,Je=Ue;function Ke(i,l,s,d,c){const[a,p]=g.useState(()=>c&&s?s(i).matches:d?d(i).matches:l);return Je(()=>{let o=!0;if(!s)return;const h=s(i),f=()=>{o&&p(h.matches)};return f(),h.addListener(f),()=>{o=!1,h.removeListener(f)}},[i,s]),a}const se=je["useSyncExternalStore"];function Ve(i,l,s,d,c){const a=g.useCallback(()=>l,[l]),p=g.useMemo(()=>{if(c&&s)return()=>s(i).matches;if(d!==null){const{matches:m}=d(i);return()=>m}return a},[a,i,d,c,s]),[o,h]=g.useMemo(()=>{if(s===null)return[a,()=>()=>{}];const m=s(i);return[()=>m.matches,r=>(m.addListener(r),()=>{m.removeListener(r)})]},[a,s,i]);return se(h,o,p)}function de(i,l={}){const s=Ge(),d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:c=!1,matchMedia:a=d?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:o=!1}=Fe({name:"MuiUseMediaQuery",props:l,theme:s});let h=typeof i=="function"?i(s):i;return h=h.replace(/^@media( ?)/m,""),(se!==void 0?Ve:Ke)(h,c,a,p,o)}const le=n.div`
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
`,ae=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,ce=n.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,pe=n.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,he=n.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,xe=n.p`
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
`,H=n.div`
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
`,Y=n.div`
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
`,Ze=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,C=n.li`
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
`,ee=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,b=n.li`
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
`,z=n.li`
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
`,fe=n.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,me=n.div`
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
`,ge=n.div`
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
`,we=n.div`
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
`,ue=n.div`
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
`,Q=n.button`
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
`,G=n.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,te=n.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Xe=({currentDate:i})=>{const l=v(oe),s=V(),d=v(F),c=d==null?void 0:d.blood,a=v(Z),p=de("(max-width:768px)");let o;const f=(r=>{const w=j=>j<10?`0${j}`:j,$=w(r.getDate()),D=w(r.getMonth()+1),S=r.getFullYear();return`${$}-${D}-${S}`})(i),m=async r=>{try{await s(be(r,i)),await s(U(f(i)))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(le,{children:[e.jsxs(ae,{children:[e.jsx(ce,{children:"Products"}),e.jsx(pe,{children:e.jsxs(ne,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(he,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),l&&l.length>0&&!a?p?e.jsx(H,{children:e.jsx(Y,{children:l.map(({productArr:r})=>{var R,B,M,A,N,_;const w=(R=r[0])==null?void 0:R.productId.title,$=(B=r[0])==null?void 0:B.calories,D=(M=r[0])==null?void 0:M.amount,S=(A=r[0])==null?void 0:A._id,u=(N=r[0])==null?void 0:N.productId.groupBloodNotAllowed,j=(_=r[0])==null?void 0:_.productId.category,J=u[c]?"Yes":"No";return e.jsxs(ee,{children:[e.jsx(b,{children:"Title"}),e.jsx(b,{children:w}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:j}),e.jsxs(fe,{children:[e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Calories"}),e.jsx(b,{children:$})]}),e.jsxs(ge,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Weight"}),e.jsx(b,{children:D})]}),e.jsxs(we,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Recommend"}),e.jsx(b,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:J==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(te,{children:o})]})})]}),e.jsxs(ue,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:""}),e.jsx(b,{children:e.jsx(Q,{type:"button",onClick:()=>m(S),children:e.jsx(G,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},X())})})}):e.jsxs(H,{children:[e.jsxs(Ze,{children:[e.jsx(C,{children:"Title"}),e.jsx(C,{children:"Category"}),e.jsx(C,{children:"Calories"}),e.jsx(C,{children:"Weight"}),e.jsx(C,{children:"Recommend"}),e.jsx(C,{children:""})]}),e.jsx(Y,{children:l.map(({productArr:r})=>{var R,B,M,A,N,_;const w=(R=r[0])==null?void 0:R.productId.title,$=(B=r[0])==null?void 0:B.calories,D=(M=r[0])==null?void 0:M.amount,S=(A=r[0])==null?void 0:A._id,u=(N=r[0])==null?void 0:N.productId.groupBloodNotAllowed,j=(_=r[0])==null?void 0:_.productId.category,J=u[c]?"Yes":"No";return e.jsxs(ee,{children:[e.jsx(z,{children:w}),e.jsx(z,{children:j}),e.jsx(z,{children:$}),e.jsx(z,{children:D}),e.jsx(z,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:J==="Yes"?e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:x+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(te,{children:o})]})}),e.jsx(z,{children:e.jsx(Q,{type:"button",onClick:()=>m(S),children:e.jsx(G,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},X())})})]}):e.jsx(xe,{children:"Not found products"})]})},qe=n.ul`
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
`,k=n.li`
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
`,ie=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 8px;
    margin-bottom: 8px;
    flex-wrap: nowrap;
  }
`,y=n.li`
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
`,I=n.li`
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
`,et=({exercisesArray:i,date:l})=>{const s=de("(max-width:768px)"),d=v(Z),c=V(),a=o=>o[0].toUpperCase()+o.slice(1).toLowerCase(),p=async o=>{try{await c(ve(o)),await c(U(l))}catch(h){console.log(h),P.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(le,{children:[e.jsxs(ae,{children:[e.jsx(ce,{children:"Exercises"}),e.jsx(pe,{children:e.jsxs(ne,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(he,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:x+"#icon-arrow"})})]})})]}),i&&i.length>0&&!d?s?e.jsx(H,{children:e.jsx(Y,{children:i.map(o=>e.jsxs(ie,{children:[e.jsx(y,{children:"Body Part"}),e.jsx(y,{children:a(o.exerciseId.bodyPart)}),e.jsx(y,{children:"Equipment"}),e.jsx(y,{children:a(o.exerciseId.equipment)}),e.jsx(y,{children:"Name"}),e.jsx(y,{children:a(o.exerciseId.name)}),e.jsxs(fe,{children:[e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Target"}),e.jsx(y,{children:a(o.exerciseId.target)})]}),e.jsxs(ge,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Burned Calories"}),e.jsx(y,{children:o.calories})]}),e.jsxs(we,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:"Time"}),e.jsx(y,{children:o.time})]}),e.jsxs(ue,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(y,{children:""}),e.jsx(y,{children:e.jsx(Q,{type:"button",onClick:()=>p(o._id),children:e.jsx(G,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]})]})]},o._id))})}):e.jsxs(H,{children:[e.jsxs(qe,{children:[e.jsx(k,{children:"Body Part"}),e.jsx(k,{children:"Equipment"}),e.jsx(k,{children:"Name"}),e.jsx(k,{children:"Target"}),e.jsx(k,{children:"Burned Calories"}),e.jsx(k,{children:"Time"}),e.jsx(k,{children:""})]}),e.jsx(Y,{children:i.map(o=>e.jsxs(ie,{children:[e.jsx(I,{children:a(o.exerciseId.bodyPart)}),e.jsx(I,{children:a(o.exerciseId.equipment)}),e.jsx(I,{children:a(o.exerciseId.name)}),e.jsx(I,{children:a(o.exerciseId.target)}),e.jsx(I,{children:o.calories}),e.jsx(I,{children:o.time}),e.jsx(I,{children:e.jsx(Q,{type:"button",onClick:()=>p(o._id),children:e.jsx(G,{children:e.jsx("use",{href:x+"#icon-trash-03"})})})})]},o._id))})]}):e.jsx(xe,{children:"Not found exercises"})]})},tt=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,it=n.ul`
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
`,T=n.li`
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
`,O=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,E=n.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,W=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,nt=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,ot=n.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,L=n.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,rt=n.svg`
  width: 24px;
  height: 24px;
`,st=n.p`
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
`,dt=i=>{var $,D,S;const l=($=i==null?void 0:i.userDiaryInformation[0])==null?void 0:$.consumedCalories,s=(D=i==null?void 0:i.userDiaryInformation[1])==null?void 0:D.burnedCalories,d=(S=i==null?void 0:i.userDiaryInformation[1])==null?void 0:S.totalExerciseTime,c=v(F),a=c==null?void 0:c.resultBMR,[p,o]=g.useState(!1),[h,f]=g.useState(!1),m=v(Z);g.useEffect(()=>{(async()=>{await U()})()},[]);const r=a-l,w=110-d;return g.useEffect(()=>{r<0&&o(!0),w<0&&f(!0)},[r,w]),e.jsxs(tt,{children:[e.jsxs(it,{children:[e.jsxs(T,{children:[e.jsxs(O,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-fluent_food-24-filled"})}),e.jsx(E,{children:"Daily calory intake"})]}),e.jsx(W,{children:a||"2200"})]}),e.jsxs(T,{children:[e.jsxs(O,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-dumbbell"})}),e.jsx(E,{children:"Daily norm of sports"})]}),e.jsx(W,{children:"110 min"})]}),e.jsxs(T,{children:[e.jsxs(O,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-fluent_food-apple-20-filled"})}),e.jsx(E,{children:"Calories consumed"})]}),e.jsx(W,{children:m?0:l})]}),e.jsxs(T,{children:[e.jsxs(O,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-calories-1"})}),e.jsx(E,{children:"Calories burned"})]}),e.jsx(W,{children:s&&!m?s:0})]}),e.jsxs(T,{className:p?"redBg":"",children:[e.jsxs(O,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-bubble"})}),e.jsx(E,{children:"The rest of the calories"})]}),e.jsx(W,{children:r||"0"})]}),e.jsxs(T,{className:h?"greenBg":"",children:[e.jsxs(O,{children:[e.jsx(L,{children:e.jsx("use",{href:x+"#icon-running-figure"})}),e.jsx(E,{children:"The rest of sports"})]}),e.jsxs(W,{children:[w||"110"," min"]})]})]}),e.jsxs(nt,{children:[e.jsx(ot,{children:e.jsx(rt,{children:e.jsx("use",{href:x+"#icon-exclamation-mark"})})}),e.jsx(st,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},lt=n.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,at=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,ct=n.div`
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
`,pt=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,wt=()=>{const i=V(),l=v(oe),s=v(Ee),d=v($e),c=v(De),{addProducts:a,addExercises:p}=l,[o,h]=g.useState(new Date),f=v(F),m=f?f.createdAt:null,r=q(o),w=q(m);return g.useEffect(()=>{(async()=>{try{await i(Ie()),await i(U(r))}catch{P.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[i,r,o]),e.jsx(Se,{children:s||d?e.jsx(ke,{}):e.jsxs(lt,{children:[e.jsxs(at,{children:[e.jsx(Te,{contentText:"Diary"}),e.jsx(Ye,{currentDate:o,setCurrentDate:h,userDateRegistration:w})]}),e.jsxs(pt,{children:[e.jsx(dt,{userDiaryInformation:l,bmr:c}),e.jsxs(ct,{children:[e.jsx(Xe,{productsArray:a,currentDate:o,date:r}),e.jsx(et,{exercisesArray:p,date:r})]})]})]})})};export{wt as default};
