import{u as n,a as t,j as e,G as ge,D as B,r as m,b as v,f as Y,s as f,R as we,d as U,N as ee,H as ye,I as Q,J as ue,K as je,M as be,C as ve,P as $e,x as De}from"./index-932768f7.js";import{i as Se,f as ke}from"./index-e37e0d77.js";import{T as Ie}from"./TitlePage-2c08270b.js";import{T as Ce,_ as F,s as te,a as J,n as K,b as ze,c as V}from"./changeDate-92ab98e1.js";import"./floating-ui.dom-9d61e2db.js";const Te=n.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`,Oe=n.button`
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
`,Ee=n.p`
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
`,We=n.svg`
  width: 20px;
  height: 20px;
  stroke: ${t.colorOrange1};
  transition: stroke 0.3s ease;

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,Le=n.button`
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
`,Ae=n.button`
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
`,Pe=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passivePrev {
    fill: rgba(239, 237, 232, 0.2);
  }
`,Re=n.svg`
  width: 100%;
  height: 100%;
  fill: ${t.colorWhite};
  transition: fill 0.3s ease;

  &.passiveNext {
    fill: rgba(239, 237, 232, 0.2);
  }
`;const Be=n.div`
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
`;const Me=({selectedDate:i,setSelectedDate:a,isOpen:o,onClose:d,setCurrentDate:h,userDateRegistration:l,dateFormat:p})=>{const r=new Date,x=c=>c<new Date(l)||c>r,g=c=>x(c)?"disabled-day":null,w=c=>{c>=l&&c<=r?(a(c),h(c),d()):B.error(`You can review the information from the day of your registration: ${l} up to today: ${r}. `,{theme:"dark"})};return e.jsx(e.Fragment,{children:e.jsxs(Be,{children:[e.jsx(Se,{selected:i,dateFormat:p,calendarStartDay:1,formatWeekDay:c=>c.substr(0,1),open:o,customInput:e.jsx("div",{style:{display:"none"}}),onChange:w,minDate:new Date(l),maxDate:r,dayClassName:g}),e.jsx(ge,{})]})})},Ne=()=>{const[i,a]=m.useState(new Date),[o,d]=m.useState(i),[h,l]=m.useState(!1),[p,r]=m.useState(!1),[x,g]=m.useState(!1),{createdAt:w}=v(Y),c=w,$=()=>{l(!h)},D=new Date(c),s=()=>{r(!0);const y=new Date(i);y>D?(y.setDate(y.getDate()-1),a(y),d(y),r(!1)):(B.error(`SORRY!!! Selected date cannot be earlier than the registration date: ${D.toLocaleDateString()}.`,{theme:"dark"}),r(!0))},j=()=>{g(!0);const y=new Date,S=new Date(o);S.setDate(o.getDate()+1),S<=y?(a(S),d(S),g(!1)):(B.error(`SORRY!!! Selected date cannot be later than today's date: ${y.toLocaleDateString()}.`,{theme:"dark"}),g(!0))},k=()=>{l(!1)};return e.jsxs(Te,{children:[e.jsx(Ee,{onClick:$,children:ke(o,"dd/MM/yyyy")}),e.jsx(Le,{onClick:$,children:e.jsx(We,{children:e.jsx("use",{href:f+"#icon-calendar"})})}),e.jsx(Ae,{type:"button",onClick:s,children:e.jsx(Pe,{className:p?"passivePrev":"",children:e.jsx("use",{href:f+"#icon-chevron-left"})})}),e.jsx(Oe,{type:"button",onClick:j,children:e.jsx(Re,{className:x?"passiveNext":"",children:e.jsx("use",{href:f+"#icon-chevron-right"})})}),e.jsx(Me,{selectedDate:o,dateFormat:"dd/MM/yyyy",setSelectedDate:d,isOpen:h,onClose:k,setCurrentDate:a,userDateRegistration:D,minDate:D})]})};function _e(i){return Object.keys(i).length===0}function He(i=null){const a=m.useContext(Ce);return!a||_e(a)?i:a}function ie(i,a){const o=F({},a);return Object.keys(i).forEach(d=>{if(d.toString().match(/^(components|slots)$/))o[d]=F({},i[d],o[d]);else if(d.toString().match(/^(componentsProps|slotProps)$/)){const h=i[d]||{},l=a[d];o[d]={},!l||!Object.keys(l)?o[d]=h:!h||!Object.keys(h)?o[d]=l:(o[d]=F({},l),Object.keys(h).forEach(p=>{o[d][p]=ie(h[p],l[p])}))}else o[d]===void 0&&(o[d]=i[d])}),o}function Ye(i){const{theme:a,name:o,props:d}=i;return!a||!a.components||!a.components[o]||!a.components[o].defaultProps?d:ie(a.components[o].defaultProps,d)}const Qe=typeof window<"u"?m.useLayoutEffect:m.useEffect,Ge=Qe;function Fe(i,a,o,d,h){const[l,p]=m.useState(()=>h&&o?o(i).matches:d?d(i).matches:a);return Ge(()=>{let r=!0;if(!o)return;const x=o(i),g=()=>{r&&p(x.matches)};return g(),x.addListener(g),()=>{r=!1,x.removeListener(g)}},[i,o]),l}const ne=we["useSyncExternalStore"];function Ue(i,a,o,d,h){const l=m.useCallback(()=>a,[a]),p=m.useMemo(()=>{if(h&&o)return()=>o(i).matches;if(d!==null){const{matches:w}=d(i);return()=>w}return l},[l,i,d,h,o]),[r,x]=m.useMemo(()=>{if(o===null)return[l,()=>()=>{}];const w=o(i);return[()=>w.matches,c=>(w.addListener(c),()=>{w.removeListener(c)})]},[l,o,i]);return ne(x,r,p)}function oe(i,a={}){const o=He(),d=typeof window<"u"&&typeof window.matchMedia<"u",{defaultMatches:h=!1,matchMedia:l=d?window.matchMedia:null,ssrMatchMedia:p=null,noSsr:r=!1}=Ye({name:"MuiUseMediaQuery",props:a,theme:o});let x=typeof i=="function"?i(o):i;return x=x.replace(/^@media( ?)/m,""),(ne!==void 0?Ue:Fe)(x,h,l,p,r)}const se=n.div`
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
`,re=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,de=n.p`
  color: #efede880;
  font-size: 14px;
  line-height: 1.2857;
`,le=n.div`
  &:hover span {
    color: ${t.colorOrange1};
  }
`,ae=n.span`
  color: ${t.colorOrange};
  font-size: 14px;
  line-height: 1.2857;
  font-weight: 500;
  transition: color 300ms;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`,he=n.p`
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
`,M=n.div`
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
`,N=n.div`
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
`,Je=n.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
`,O=n.li`
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
`,Z=n.ul`
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
`,E=n.li`
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
`,ce=n.div`
  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
`,pe=n.div`
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
`,xe=n.div`
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
`,fe=n.div`
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
`,me=n.div`
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
`,_=n.button`
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
`,H=n.svg`
  stroke: ${t.colorOrange1};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: stroke 0.3s ease;
`,X=n.span`
  @media screen and (min-width: 320px) {
    color: ${t.colorWhite};
    line-height: 1.28571;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ke=({currentDate:i})=>{var $,D;const a=v(te);console.log(($=a[0])==null?void 0:$.productArr);const o=(D=a[0])==null?void 0:D.productArr,d=U(),h=v(Y),l=h==null?void 0:h.blood,p=v(J),r=oe("(max-width:768px)");let x;const w=(s=>{const j=I=>I<10?`0${I}`:I,k=j(s.getDate()),y=j(s.getMonth()+1),S=s.getFullYear();return`${k}-${y}-${S}`})(i),c=async s=>{try{await d(ye(s,i)),await d(Q(w(i)))}catch{B.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(se,{children:[e.jsxs(re,{children:[e.jsx(de,{children:"Products"}),e.jsx(le,{children:e.jsxs(ee,{to:"/products",style:{display:"flex",alignItems:"center"},children:[e.jsx(ae,{children:"Add product"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),a&&a.length>0&&!p?r?e.jsx(M,{children:e.jsx(N,{children:o.map(({product:s})=>{const j=s==null?void 0:s.productId.title,k=s==null?void 0:s.calories,y=s==null?void 0:s.amount,S=s==null?void 0:s._id,T=s==null?void 0:s.productId.groupBloodNotAllowed,I=s==null?void 0:s.productId.category,G=T&&T[l]?"Yes":"No";return e.jsxs(Z,{children:[e.jsx(b,{children:"Title"}),e.jsx(b,{children:j}),e.jsx(b,{children:"Category"}),e.jsx(b,{children:I}),e.jsxs(ce,{children:[e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Calories"}),e.jsx(b,{children:k})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Weight"}),e.jsx(b,{children:y})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:"Recommend"}),e.jsx(b,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:G==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(X,{children:x})]})})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(b,{children:""}),e.jsx(b,{children:e.jsx(_,{type:"button",onClick:()=>c(S),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},K())})})}):e.jsxs(M,{children:[e.jsxs(Je,{children:[e.jsx(O,{children:"Title"}),e.jsx(O,{children:"Category"}),e.jsx(O,{children:"Calories"}),e.jsx(O,{children:"Weight"}),e.jsx(O,{children:"Recommend"}),e.jsx(O,{children:""})]}),e.jsx(N,{children:o==null?void 0:o.map(({product:s})=>{const j=s==null?void 0:s.productId.title,k=s==null?void 0:s.calories,y=s==null?void 0:s.amount,S=s==null?void 0:s._id,T=s==null?void 0:s.productId.groupBloodNotAllowed,I=s==null?void 0:s.productId.category,G=T&&T[l]?"Yes":"No";return e.jsxs(Z,{children:[e.jsx(E,{children:j}),e.jsx(E,{children:I}),e.jsx(E,{children:k}),e.jsx(E,{children:y}),e.jsx(E,{children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",height:"24px"},children:[e.jsx("svg",{style:{width:"14px",height:"14px"},children:G==="Yes"?e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryGreen,stroke:t.colorSecondaryGreen}}):e.jsx("use",{href:f+"#icon-Ellipse-82",style:{fill:t.colorSecondaryRed,stroke:t.colorSecondaryRed}})}),e.jsx(X,{children:x})]})}),e.jsx(E,{children:e.jsx(_,{type:"button",onClick:()=>c(S),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},K())})})]}):e.jsx(he,{children:"Not found products"})]})},Ve=n.ul`
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
`,C=n.li`
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
`,q=n.ul`
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
`,Ze=({exercisesArray:i,date:a})=>{const o=oe("(max-width:768px)"),d=v(J),h=U(),l=r=>r[0].toUpperCase()+r.slice(1).toLowerCase(),p=async r=>{try{await h(ue(r)),await h(Q(a))}catch(x){console.log(x),B.error("Sorry, something went wrong, please try again",{theme:"dark"})}};return e.jsxs(se,{children:[e.jsxs(re,{children:[e.jsx(de,{children:"Exercises"}),e.jsx(le,{children:e.jsxs(ee,{to:"/exercises",style:{display:"flex",alignItems:"center"},children:[e.jsx(ae,{children:"Add exercises"}),e.jsx("svg",{style:{width:"16px",height:"16px",marginLeft:"8px",stroke:t.colorOrange},children:e.jsx("use",{href:f+"#icon-arrow"})})]})})]}),i&&i.length>0&&!d?o?e.jsx(M,{children:e.jsx(N,{children:i.map(r=>e.jsxs(q,{children:[e.jsx(u,{children:"Body Part"}),e.jsx(u,{children:l(r.exerciseId.bodyPart)}),e.jsx(u,{children:"Equipment"}),e.jsx(u,{children:l(r.exerciseId.equipment)}),e.jsx(u,{children:"Name"}),e.jsx(u,{children:l(r.exerciseId.name)}),e.jsxs(ce,{children:[e.jsxs(pe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Target"}),e.jsx(u,{children:l(r.exerciseId.target)})]}),e.jsxs(xe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Burned Calories"}),e.jsx(u,{children:r.calories})]}),e.jsxs(fe,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:"Time"}),e.jsx(u,{children:r.time})]}),e.jsxs(me,{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{children:""}),e.jsx(u,{children:e.jsx(_,{type:"button",onClick:()=>p(r._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]})]})]},r._id))})}):e.jsxs(M,{children:[e.jsxs(Ve,{children:[e.jsx(C,{children:"Body Part"}),e.jsx(C,{children:"Equipment"}),e.jsx(C,{children:"Name"}),e.jsx(C,{children:"Target"}),e.jsx(C,{children:"Burned Calories"}),e.jsx(C,{children:"Time"}),e.jsx(C,{children:""})]}),e.jsx(N,{children:i.map(r=>e.jsxs(q,{children:[e.jsx(z,{children:l(r.exerciseId.bodyPart)}),e.jsx(z,{children:l(r.exerciseId.equipment)}),e.jsx(z,{children:l(r.exerciseId.name)}),e.jsx(z,{children:l(r.exerciseId.target)}),e.jsx(z,{children:r.calories}),e.jsx(z,{children:r.time}),e.jsx(z,{children:e.jsx(_,{type:"button",onClick:()=>p(r._id),children:e.jsx(H,{children:e.jsx("use",{href:f+"#icon-trash-03"})})})})]},r._id))})]}):e.jsx(he,{children:"Not found exercises"})]})},Xe=n.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    width: 593px;
  }

  @media screen and (min-width: 1440px) {
    width: 390px;
  }
`,qe=n.ul`
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
`,W=n.li`
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
`,L=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 28px;
`,A=n.h2`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rgba(239, 237, 232, 0.4);

  @media screen and (min-width: 768px) {
    white-space: nowrap;
    line-height: 18px;
  }
`,P=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,et=n.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 374px) {
    margin: 0 auto;
  }
`,tt=n.div`
  width: 24px;
  height: 24px;
  background-color: ${t.colorBeige};
  border-radius: 50%;
`,R=n.svg`
  width: 20px;
  height: 20px;
  fill: ${t.colorOrange1};
`,it=n.svg`
  width: 24px;
  height: 24px;
`,nt=n.p`
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
`,ot=i=>{var D,s,j;const a=(D=i==null?void 0:i.userDiaryInformation[0])==null?void 0:D.consumedCalories,o=(s=i==null?void 0:i.userDiaryInformation[1])==null?void 0:s.burnedCalories,d=(j=i==null?void 0:i.userDiaryInformation[1])==null?void 0:j.totalExerciseTime,h=v(Y),l=h==null?void 0:h.resultBMR,[p,r]=m.useState(!1),[x,g]=m.useState(!1),w=v(J);m.useEffect(()=>{(async()=>{await Q()})()},[]);const c=l-a,$=110-d;return m.useEffect(()=>{c<0&&r(!0),$<0&&g(!0)},[c,$]),e.jsxs(Xe,{children:[e.jsxs(qe,{children:[e.jsxs(W,{children:[e.jsxs(L,{children:[e.jsx(R,{children:e.jsx("use",{href:f+"#icon-fluent_food-24-filled"})}),e.jsx(A,{children:"Daily calory intake"})]}),e.jsx(P,{children:l||"2200"})]}),e.jsxs(W,{children:[e.jsxs(L,{children:[e.jsx(R,{children:e.jsx("use",{href:f+"#icon-dumbbell"})}),e.jsx(A,{children:"Daily norm of sports"})]}),e.jsx(P,{children:"110 min"})]}),e.jsxs(W,{children:[e.jsxs(L,{children:[e.jsx(R,{children:e.jsx("use",{href:f+"#icon-fluent_food-apple-20-filled"})}),e.jsx(A,{children:"Calories consumed"})]}),e.jsx(P,{children:w?0:a})]}),e.jsxs(W,{children:[e.jsxs(L,{children:[e.jsx(R,{children:e.jsx("use",{href:f+"#icon-calories-1"})}),e.jsx(A,{children:"Calories burned"})]}),e.jsx(P,{children:o&&!w?o:0})]}),e.jsxs(W,{className:p?"redBg":"",children:[e.jsxs(L,{children:[e.jsx(R,{children:e.jsx("use",{href:f+"#icon-bubble"})}),e.jsx(A,{children:"The rest of the calories"})]}),e.jsx(P,{children:c||"0"})]}),e.jsxs(W,{className:x?"greenBg":"",children:[e.jsxs(L,{children:[e.jsx(R,{children:e.jsx("use",{href:f+"#icon-running-figure"})}),e.jsx(A,{children:"The rest of sports"})]}),e.jsxs(P,{children:[$||"110"," min"]})]})]}),e.jsxs(et,{children:[e.jsx(tt,{children:e.jsx(it,{children:e.jsx("use",{href:f+"#icon-exclamation-mark"})})}),e.jsx(nt,{children:"Record all your meals in a calorie diary every day. This will help me be aware of my nutrition and make me responsible for my choices."})]})]})},st=n.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 80px 0;

  @media screen and (min-width: 768px) {
    padding: 72px 0 64px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 72px 0 68px 0;
  }
`,rt=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`,dt=n.div`
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
`,lt=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`,ft=()=>{const i=U(),a=v(te),o=v(ze),d=v(je),h=v(be),{addProducts:l,addExercises:p}=a,[r,x]=m.useState(new Date),g=v(Y),w=g?g.createdAt:null,c=V(r),$=V(w);return m.useEffect(()=>{(async()=>{try{await i(De()),await i(Q(c))}catch{B.error("Sorry, something went wrong, please try again",{theme:"dark"})}})()},[i,c,r]),e.jsx(ve,{children:o||d?e.jsx($e,{}):e.jsxs(st,{children:[e.jsxs(rt,{children:[e.jsx(Ie,{contentText:"Diary"}),e.jsx(Ne,{currentDate:r,setCurrentDate:x,userDateRegistration:$})]}),e.jsxs(lt,{children:[e.jsx(ot,{userDiaryInformation:a,bmr:h}),e.jsxs(dt,{children:[e.jsx(Ke,{productsArray:l,currentDate:r,date:c}),e.jsx(Ze,{exercisesArray:p,date:c})]})]})]})})};export{ft as default};
