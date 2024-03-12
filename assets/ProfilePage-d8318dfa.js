import{u as n,a,d as I,r as m,w as oe,x as W,j as t,s as y,o as se,p as U,y as k,F as te,c as _,g as ce,z as de,A as le,B as pe,D as E,E as xe,b as he,f as ge,C as me}from"./index-f161ba50.js";import{T as fe}from"./TitlePage-9a344e9d.js";import{b as be}from"./LogOutBtn-a538c672.js";import{g as R,f as ye,i as ue,a as ve}from"./index-063ab9ce.js";import"./floating-ui.dom-9d61e2db.js";const je=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,we=n.div`
  position: relative;
  width: 90px;
  height: 90px;
  background-color: rgba(48, 48, 48, 0.3);
  border-radius: 100%;

  stroke-width: 1px;

  border: 1px solid ${a.colorOrange};

  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid ${a.colorBeige};
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,ke=n.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;

  cursor: pointer;
`,Ae=n.label`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`,Se=n.svg`
  width: 24px;
  height: 24px;
  bottom: 0;
  right: 50%;
  z-index: 5;

  transition: stroke 0.3s ease;

  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${a.colorBeige};
  }

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`,_e=n.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100%;
  object-fit: cover;
`,We=n.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 8px;
  }
`,Ce=n.p`
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,$e=n.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.5);
`,ze=n.ul`
  margin: 36px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;

  @media screen and (min-width: 768px) {
    margin: 32px 0;
    gap: 16px;
    justify-content: center;
  }
`,F=n.li`
  width: 157px;
  height: 96px;
  padding: 14px;
  background-color: ${a.colorOrange};
  border-radius: 12px;
  border: 1px solid #efede833;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 374px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 18px;
  }
`,L=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,P=n.h2`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 1.5;
  }
`,N=n.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Be=n.div`
  width: 24px;
  height: 24px;
  background-color: ${a.colorBeige};
  border-radius: 50%;
`,Y=n.svg`
  width: 20px;
  height: 20px;
  fill: ${a.colorOrange1};
`,Ie=n.svg`
  width: 24px;
  height: 24px;
`,Te=n.p`
  font-size: 14px;
  line-height: 18px;

  color: ${a.colorInput};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Oe=n.div`
  display: flex;
  gap: 8px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,De=n.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 57px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`,Ue="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUuSURBVHgB7d3dTttIFAfw8WccOw6OMGxBSNsiEN2+wd7Bc+zL7LvsxUr7EvRqr3YvYTciol0VIW2AJiWNY3v8UR/cSDRS1KaMPcdwfjdFqoqD/4w9X2fKGCGEEEIIIYQQQgghhBBCCCHkuyisoc7Ozlrr66qlaaYWhtxQVV2b/12WJWma8tSydH5zk4X7+/sRa6BGhZPnuXp93XcYszqMqd/82SGszU374+vX/0RHR0cJa4jGhDMcnnQUxXFXCWVR2aKsyfb2dsAaAH04x8fH+sHBtmcYbZMJwvks7vcvx9hbEepwIJhXr35cv/8+EQVa0enpfzeYA0IbTpXBzGEPCGU48OIfDt9sVBnMXNlZeHGlKErGkFEZQqPRuVtHMACuA9djCKELBx5naWo4rEZwPRg3MWTQhQM9MyaB42ToWg+qcE5O/jBFdplXAdfF1npQhdPpvKz1cbYIpoMYIqjCsayOlFYzZ5pumyGCJhx4pNXVQ1tmNgvVohsv9TPchyacbncHy00xGBJowmm11pCE8z+1nEWKsolituL6WkNzT1DOEJASmnDyfJgzBHw/RTPHhiacKPqQMhR+QPI5EIWzs/NzzHCgcBYVU/bFTcmkPtpg+aD4HJwhgapDoGmp1LV90+yh2qWDKhzYxsQk8jxvyhBBFQ7sL4PNF0wCzvUY0yMNoBvnTKfqhEmwtbU1YsigCwdaj6bxWh8vcL2yQ4ILyhmCXu+3CfScWA3gOr3erpTW+jVot0bB1P1w+MavemvU5uaLa4ytBqDeVFhlQNiDAagnPuHGwQ0U3YODnhn2YEBjNrJfXl7amhY+cD9blvu+dasoz1CNZ5ZpWgmIdnV12s7ztrNaSDAt5Hz0fX+KcWfnMo0vngrDtqEVVDW6VzzVSi0r5mkap00uniKEEELq0rgOQVmGeGDq+kjVdUubTKaq5/WU6TT4YszGeZS6rpMlSZhubNgJY89RLaR9C+wzBMUNf2uORlnLMGwzDCP9IQW7AAa0UALf66lFD+55jLlrjS4cCKQYy9hJolt1VByUsw9u0O/3Y2zlh2jCgXEL1MjIKgEB86CwlMJLDed7D32oGpbzCqTdkKurf11soSySHVLtNwYeX92u5sku91iFrJBqCwceYbe3F14c56iqx1YRBOPZ+fnNpK6OQy3hNLG1LPN5ke59HWOmysMpDxRyu+zRCSYbGy8r3XtQaTjlS99GeQCDGNUGVFk4jz+YueoCqiScpxPMXDUBCd/gAWv9TysYYLvlzy2W0HBgxtgw4jX2BHW7ehd+fiaQ0HB2d9ddzCP+KsEZBqLP7REWDoxlbNtDdQJG3USfnyMsnHY76TAi9PQpIeHk+a9qq+WgO69MBmg95SLhwwn5JoPBL2iOJEFCyJqUkHDW1mIK5wtijmgREg6Wo1GwEHVEi5BvMh6PsZwhgILv+0JmrIWEI7PQFhvLMnixnCCkKlxYV3pr6/f3pqlILVWXDep+Op1nN0wQ4e8KMXU0zVLVMnZlL/J37/5sdzo/tZLkQ/txTulkeRAoYRzHQVUlJrUtU89raYqJUaOZYWU55ya3rNndf5i0t7fHq94tKuUm5flfxsVFrFvWvm6aoTGbRbqmwWMQQ2hZnqZJGkUGd90kK36huKzdoKh+g8tpj7+1wWBNdRxHK5rZ3XsrCALd81RlOi3HD1DJNv839yvaFkGF2/zr4qVw9zXn/O5P27YTOIAvSXpZmr7NB4OIHx4eZk0qSySEEEIIIYQQQgghhBBCCCGELPEJ3h5PPY4a9AgAAAAASUVORK5CYII=",Ee=({user:e})=>{const i=I(),[r,s]=m.useState(null),[g,l]=m.useState((e==null?void 0:e.avatarURL)||Ue),p=new FileReader;return p.onloadend=()=>{l(p.result)},m.useEffect(()=>{r&&(l(URL.createObjectURL(r)),p.readAsDataURL(r),i(oe(r)),i(W()))},[r]),t.jsxs(je,{children:[t.jsxs(we,{children:[t.jsx(ke,{id:"image-file",type:"file",accept:"image/*",src:g,alt:"User avatar image",onChange:u=>s(u.target.files[0])}),t.jsx(Ae,{htmlFor:"image-file",children:t.jsx(Se,{children:t.jsx("use",{href:`${y}#icon-check-mark-1`})})}),t.jsx(_e,{src:g,alt:"User avatar image"})]}),t.jsxs(We,{children:[t.jsxs(Ce,{children:[" ",e==null?void 0:e.userName]}),t.jsx($e,{children:"User"})]}),t.jsxs(ze,{children:[t.jsxs(F,{children:[t.jsxs(L,{children:[t.jsx(Y,{children:t.jsx("use",{href:`${y}#icon-fluent_food-24-filled`})}),t.jsx(P,{children:"Daily calorie intake"})]}),t.jsx(N,{children:(e==null?void 0:e.resultBMR)||"0"})]}),t.jsxs(F,{children:[t.jsxs(L,{children:[t.jsx(Y,{children:t.jsx("use",{href:y+"#icon-dumbbell"})}),t.jsx(P,{children:"Daily physical activity"})]}),t.jsxs(N,{children:[(e==null?void 0:e.trainingTime)||"110"," min"]})]})]}),t.jsxs("div",{children:[t.jsxs(Oe,{children:[t.jsx(Be,{children:t.jsx(Ie,{children:t.jsx("use",{href:y+"#icon-exclamation-mark"})})}),t.jsx(Te,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),t.jsx(De,{children:t.jsx(be,{colorSvg:"#E6533C"})})]})]})},Re=se().shape({name:U().required("Name is required"),height:k().min(150,"Height must be minimum 150 cm").max(300,"The value must be no more then 300 cm").required("Please fill your height"),currentWeight:k().min(35,"Current weight must be minimum 35 kg").max(270,"The value must be no more then 270 kg").required("Please fill your current weight"),desiredWeight:k().min(35,"Desired weight must be minimum 35 kg").max(270,"Desired weight must be no more then 270 kg").required("Please fill your desired weight"),blood:k().oneOf([1,2,3,4],"Please choose your blood type").required("Please choose your blood type"),sex:U().oneOf(["male","female"],"Please choose your gender").required("Please choose your gender"),levelActivity:k().oneOf([1,2,3,4,5],"Please choose your level activity").required("Please choose your level activity")}),b=n.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.5);

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-bottom: 8px;
  }
`,B=n(te)`
  border: 1px solid rgba(239, 237, 232, 0.3);
  border-radius: 12px;
  padding: 14px;
  width: 335px;
  height: 46px;

  color: ${a.colorWhite};

  font-size: 14px;
  line-height: 1.29;

  background-color: transparent;
  cursor: pointer;

  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    width: 341px;
    height: 52px;

    font-size: 16px;
    line-height: 1.5;
  }

  @media screen and (min-width: 1440px) {
    width: 341px;
  }
`,T=n(B)`
  width: 160px;
  margin: 0;

  &::placeholder {
    color: ${a.colorWhite};

    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (min-width: 768px) {
    width: 168px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    width: 168px;
  }
`,Fe=n(T)`
  width: 161px;

  @media screen and (min-width: 768px) {
    width: 159px;
  }

  @media screen and (min-width: 1440px) {
    width: 159px;
  }
`,Le=n(T)`
  @media screen and (min-width: 768px) {
    width: 140px;
  }

  @media screen and (min-width: 1440px) {
    width: 140px;
  }
`,f=n.div`
  width: 160px;
  font-size: 10px;
  line-height: 1.2;
  color: ${a.colorSecondaryRed};
`,Pe=n.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Ne=n.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`;var Ye=Math.ceil,Me=Math.max;function qe(e,i,r,s){for(var g=-1,l=Me(Ye((i-e)/(r||1)),0),p=Array(l);l--;)p[s?l:++g]=e,e+=r;return p}var Ge=qe;function He(e,i){return e===i||e!==e&&i!==i}var Qe=He,Ve=typeof _=="object"&&_&&_.Object===Object&&_,Xe=Ve,Je=Xe,Ke=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Je||Ke||Function("return this")(),et=Ze,tt=et,it=tt.Symbol,ie=it,M=ie,ne=Object.prototype,nt=ne.hasOwnProperty,rt=ne.toString,A=M?M.toStringTag:void 0;function at(e){var i=nt.call(e,A),r=e[A];try{e[A]=void 0;var s=!0}catch{}var g=rt.call(e);return s&&(i?e[A]=r:delete e[A]),g}var ot=at,st=Object.prototype,ct=st.toString;function dt(e){return ct.call(e)}var lt=dt,q=ie,pt=ot,xt=lt,ht="[object Null]",gt="[object Undefined]",G=q?q.toStringTag:void 0;function mt(e){return e==null?e===void 0?gt:ht:G&&G in Object(e)?pt(e):xt(e)}var re=mt;function ft(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}var O=ft,bt=re,yt=O,ut="[object AsyncFunction]",vt="[object Function]",jt="[object GeneratorFunction]",wt="[object Proxy]";function kt(e){if(!yt(e))return!1;var i=bt(e);return i==vt||i==jt||i==ut||i==wt}var At=kt,St=9007199254740991;function _t(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=St}var Wt=_t,Ct=At,$t=Wt;function zt(e){return e!=null&&$t(e.length)&&!Ct(e)}var Bt=zt,It=9007199254740991,Tt=/^(?:0|[1-9]\d*)$/;function Ot(e,i){var r=typeof e;return i=i??It,!!i&&(r=="number"||r!="symbol"&&Tt.test(e))&&e>-1&&e%1==0&&e<i}var Dt=Ot,Ut=Qe,Et=Bt,Rt=Dt,Ft=O;function Lt(e,i,r){if(!Ft(r))return!1;var s=typeof i;return(s=="number"?Et(r)&&Rt(i,r.length):s=="string"&&i in r)?Ut(r[i],e):!1}var Pt=Lt,Nt=/\s/;function Yt(e){for(var i=e.length;i--&&Nt.test(e.charAt(i)););return i}var Mt=Yt,qt=Mt,Gt=/^\s+/;function Ht(e){return e&&e.slice(0,qt(e)+1).replace(Gt,"")}var Qt=Ht;function Vt(e){return e!=null&&typeof e=="object"}var Xt=Vt,Jt=re,Kt=Xt,Zt="[object Symbol]";function ei(e){return typeof e=="symbol"||Kt(e)&&Jt(e)==Zt}var ti=ei,ii=Qt,H=O,ni=ti,Q=0/0,ri=/^[-+]0x[0-9a-f]+$/i,ai=/^0b[01]+$/i,oi=/^0o[0-7]+$/i,si=parseInt;function ci(e){if(typeof e=="number")return e;if(ni(e))return Q;if(H(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=H(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=ii(e);var r=ai.test(e);return r||oi.test(e)?si(e.slice(2),r?2:8):ri.test(e)?Q:+e}var di=ci,li=di,V=1/0,pi=17976931348623157e292;function xi(e){if(!e)return e===0?e:0;if(e=li(e),e===V||e===-V){var i=e<0?-1:1;return i*pi}return e===e?e:0}var hi=xi,gi=Ge,mi=Pt,z=hi;function fi(e){return function(i,r,s){return s&&typeof s!="number"&&mi(i,r,s)&&(r=s=void 0),i=z(i),r===void 0?(r=i,i=0):r=z(r),s=s===void 0?i<r?1:-1:z(s),gi(i,r,s,e)}}var bi=fi,yi=bi,ui=yi(),vi=ui;const ji=ce(vi),wi=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border-color: rgba(239, 237, 232, 0.3);
  padding: 15px;
  font-size: 14px;
  height: 52px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  width: 161px;

  @media screen and (min-width: 768px) {
    width: 187px;
  }

  @media screen and (min-width: 1440px) {
    width: 187px;
  }
`,ki=n.button`
  color: ${a.colorWhite};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`,Ai=n.svg`
  width: 18px;
  height: 18px;
  stroke: ${a.colorWhite};
  fill: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${a.colorOrange};
  }
`,Si=n.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,X=n.svg`
  width: 8px;
  height: 12px;
  stroke: ${a.colorWhite};
  fill: ${a.colorWhite};
  cursor: pointer;
`,_i=n.p`
  color: ${a.colorWhite};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`,J=n.select`
  color: ${a.colorWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  background-color: transparent;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  /* padding: 2px 30px 2px 2px; */
  border: none;

  overflow: hidden;
`,K=n.option`
  background-color: ${a.colorOrange};
  height: 2px;
`,Wi=de`
  .react-datepicker__wrapper {
    position: absolute;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 9px 18px;
    background-color: ${a.colorOrange1};
    font-family: 'Roboto';
    border-radius: 8px;

      transform: translate(-70%, -90%);
 

    @media screen and (min-width: 768px) {
  transform: translate(-65%, 0%);
  }

  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;

  }
   .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header {
    position: relative;
    background-color:  ${a.colorOrange1};
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
    color: ${a.colorWhite};
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
    background-color: ${a.colorOrange1};
    position: absolute;
    transform: rotate(45deg);
    border: 2px solid ${a.colorWhite};
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
    border-color: ${a.colorWhite};

  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${a.colorWhite};
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
    color: ${a.colorWhite};
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
    background-color: ${a.colorBlack};
    color: ${a.colorWhite};
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: ${a.colorWhite};
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: ${a.colorWhite};
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:${a.colorWhite};
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
`,Ci=({onDateChange:e,savedBirthday:i})=>{const[r,s]=m.useState(i==="00.00.0000"?new Date:new Date(i)),g=ji(1950,R(new Date)+1,1),l=["January","February","March","April","May","June","July","August","September","October","November","December"],p=({date:d,decreaseMonth:v,increaseMonth:C,changeYear:$,changeMonth:c})=>t.jsxs(Si,{children:[t.jsx(X,{onClick:v,children:t.jsx("use",{href:y+"#icon-chevron-left"})}),t.jsxs(_i,{children:[t.jsx(J,{value:l[ve(d)],onChange:({target:{value:o}})=>c(l.indexOf(o)),children:l.map(o=>t.jsx(K,{value:o,children:o},o))}),t.jsx(J,{value:R(d),onChange:({target:{value:o}})=>$(o),children:g.map(o=>t.jsx(K,{value:o,children:o},o))})]}),t.jsx(X,{onClick:C,children:t.jsx("use",{href:y+"#icon-chevron-right"})})]}),u=m.forwardRef(({onClick:d},v)=>t.jsx(wi,{children:t.jsxs(ki,{type:"button",onClick:d,ref:v,children:[ye(r,"dd.MM.yyyy"),t.jsx(Ai,{onClick:d,ref:v,children:t.jsx("use",{href:`${y}#icon-calendar`})})]})}));return u.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(ue,{selected:r,onChange:d=>{s(d),e(d)},customInput:t.jsx(u,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,2),renderCustomHeader:d=>t.jsx(p,{...d,value:i})}),t.jsx(Wi,{})]})},$i=({errors:e,touched:i,onDateChange:r,savedBirthday:s})=>t.jsxs(t.Fragment,{children:[t.jsxs(Ne,{children:[t.jsxs("label",{children:[t.jsx(b,{children:"Name "}),t.jsx(B,{name:"name",type:"text",autoComplete:"off"}),e.name&&i.name&&t.jsx(f,{children:e.name})]}),t.jsxs("label",{children:[t.jsx(b,{children:"Email "}),t.jsx(B,{style:{color:" rgba(239, 237, 232, 0.6)"},name:"email",type:"text",autoComplete:"off",disabled:!0}),e.email&&i.email&&t.jsx(f,{children:e.email})]})]}),t.jsxs(Pe,{children:[t.jsxs("label",{children:[t.jsx(b,{children:"Height "}),t.jsx(T,{name:"height",type:"number",placeholder:"0"}),e.height&&i.height&&t.jsx(f,{children:e.height})]}),t.jsxs("label",{children:[t.jsx(b,{children:"Current Weight "}),t.jsx(Fe,{name:"currentWeight",type:"number",placeholder:"0"}),e.currentWeight&&i.currentWeight&&t.jsx(f,{children:e.currentWeight})]}),t.jsxs("label",{children:[t.jsx(b,{children:" Desired Weight"}),t.jsx(Le,{name:"desiredWeight",type:"number",placeholder:"0"}),e.desiredWeight&&i.desiredWeight&&t.jsx(f,{children:e.desiredWeight})]}),t.jsxs("label",{children:[t.jsx(b,{children:"Date of birth "}),t.jsx(Ci,{savedBirthday:s,name:"birthday",onDateChange:r})]})]})]}),zi=n.label`
  display: flex;
  font-size: 14px;
  line-height: 1.29;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  align-items: center;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Bi=n(te)`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-sizing: border-box;
  border-radius: 10px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  outline: none;

  position: relative;
  visibility: hidden;
  &:checked + span {
    border: 2px solid #ef8964;
  }
  &:checked + span:after {
    opacity: 1;
  }
`,Ii=n.span`
  box-sizing: border-box;
  left: -4px;
  width: 18px;
  height: 18px;
  border: 2px solid #9a9a9a;
  border-radius: 50%;
  display: flex;
  position: relative;

  margin-right: 5px;

  padding: 1px;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    background: #ef8964;
    position: absolute;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
    padding: 2px;
  }
`,h=({name:e,value:i,text:r})=>t.jsxs(zi,{children:[t.jsx(Bi,{type:"radio",name:e,value:i}),t.jsx(Ii,{}),r]}),Ti=n.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,Z=n.label`
  display: flex;
  flex-direction: column;
`,Oi=n.div`
  display: flex;

  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`,ee=n.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`,Di=n.div`
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`,Ui=n.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 38px;
  padding-right: 10px;
`,Ei=n.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.12;
  color: rgba(239, 237, 232, 0.6);
  padding: 12px 40px;
  border-radius: 12px;
  border-color: transparent;
  background-color: ${a.colorOrange};

  &:hover,
  &:focus {
    color: ${a.colorWhite};
  }
  &:disabled {
    background-color: ${a.colorBlack};
    border: 1px solid rgba(239, 237, 232, 0.3);
    color: rgba(239, 237, 232, 0.6);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 16px 50px;
  }
`,Ri=({user:e})=>{const i=I();m.useEffect(()=>{i(W())},[i]);const r={name:e==null?void 0:e.userName,email:e==null?void 0:e.email,height:e==null?void 0:e.height,currentWeight:e==null?void 0:e.currentWeight,desiredWeight:e==null?void 0:e.desiredWeight,blood:(e==null?void 0:e.blood)&&(e==null?void 0:e.blood.toString()),sex:e==null?void 0:e.sex,levelActivity:(e==null?void 0:e.levelActivity)&&(e==null?void 0:e.levelActivity.toString())},[s,g]=m.useState((e==null?void 0:e.birthday)||"00.00.0000"),[l,p]=m.useState(!0),u=c=>{const o=c.getDate(),x=c.getMonth()+1,j=c.getFullYear(),w=o<10?"0"+o:o,S=x<10?"0"+x:x;return`${w}.${S}.${j}`},d=c=>{const[o,x,j]=c.split("."),w=new Date(j,x-1,o);return new Date().getFullYear()-w.getFullYear()},v=c=>{const o=u(c);g(o),d(o)<18&&(E.error("Sorry, but only adults can use our app.",{theme:"dark"}),p(!0))},C=c=>{const o=Object.keys(c).some(x=>c[x]!==r[x]);p(!o)},$=c=>{const{name:o,height:x,currentWeight:j,desiredWeight:w,blood:S,sex:D,levelActivity:ae}=c;if(d(s)<18){E.error("Sorry, but only adults can use our app.",{theme:"dark"}),p(!0);return}i(xe({userName:o,height:x,currentWeight:j,desiredWeight:w,birthday:s,blood:Number(S),sex:D,levelActivity:Number(ae)})),p(!0),i(W())};return t.jsx(Ti,{children:t.jsx(le,{initialValues:r,validationSchema:Re,onSubmit:c=>{$(c)},children:({errors:c,touched:o})=>t.jsxs(pe,{onChange:x=>C(x),children:[t.jsx($i,{errors:c,touched:o,onDateChange:v,savedBirthday:s}),t.jsxs(Di,{children:[t.jsx(b,{children:"Blood"}),t.jsxs(Oi,{children:[t.jsxs(Z,{children:[t.jsxs(ee,{children:[t.jsx(h,{name:"blood",value:"1",text:"1"}),t.jsx(h,{name:"blood",value:"2",text:"2"}),t.jsx(h,{name:"blood",value:"3",text:"3"}),t.jsx(h,{name:"blood",value:"4",text:"4"})]}),c.blood&&o.blood&&t.jsx(f,{children:c.blood})]}),t.jsxs(Z,{children:[t.jsxs(ee,{children:[t.jsx(h,{name:"sex",value:"male",text:"Male"}),t.jsx(h,{name:"sex",value:"female",text:"Female"})]}),c.sex&&o.sex&&t.jsx(f,{children:c.sex})]})]})]}),t.jsxs(Ui,{children:[t.jsx(h,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),t.jsx(h,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),t.jsx(h,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),t.jsx(h,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),t.jsx(h,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"}),c.levelActivity&&o.levelActivity&&t.jsx(f,{children:c.levelActivity})]}),t.jsx(Ei,{type:"submit",disabled:l,children:"Save"})]})})})},Fi=n.div`
  margin-top: 40px;
  padding-bottom: 44px;

  @media screen and (min-width: 768px) {
    margin-top: 62px;
    padding-bottom: 54px;
  }

  @media (min-width: 1440px) {
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 60%;
      transform: translateX(-50%);
      width: 1px;
      background-color: rgba(239, 237, 232, 0.2);
    }

    margin-top: 30px;

    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    position: relative;
    padding-bottom: 44px;
  }
`,Li=n.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }
`,Hi=()=>{const e=I();m.useEffect(()=>{e(W())},[e]);const i=he(ge);return t.jsx(me,{children:t.jsxs(Li,{children:[t.jsx(fe,{contentText:"Profile Settings"}),t.jsxs(Fi,{children:[t.jsx(Ee,{user:i}),t.jsx(Ri,{user:i})]})]})})};export{Hi as default};
