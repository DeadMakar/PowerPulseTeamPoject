import{u as r,a,b as ie,i as re,s as ne,r as y,k as ue,j as t,c as z,g as fe,m as be,n as ye,C as ve}from"./index-05128ddf.js";import{T as je}from"./TitlePage-bb190f23.js";import{s as b}from"./sprite-f17de334.js";import{b as we}from"./LogOutBtn-8d02b89b.js";import{c as ke,a as R,b as W,F as ae,d as Ae,e as Se}from"./index.esm-79ca1fc2.js";import{g as F,f as We,i as _e,a as Ce}from"./index-e0f09074.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const $e=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,ze=r.div`
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
`,Ie=r.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;

  cursor: pointer;
`,Be=r.label`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`,Te=r.svg`
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
`,Oe=r.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100%;
  object-fit: cover;
`,De=r.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 8px;
  }
`,Ue=r.p`
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,Ee=r.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.5);
`,Re=r.ul`
  margin: 36px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    margin: 32px 0;
    gap: 16px;
    justify-content: center;
  }
`,L=r.li`
  width: 157px;
  height: 96px;
  padding: 14px;
  background-color: ${a.colorOrange};
  border-radius: 12px;
  border: 1px solid #efede833;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 214px;
    height: 108px;
    padding: 18px;
  }
`,P=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,N=r.h2`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 1.5;
  }
`,Y=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Fe=r.div`
  width: 24px;
  height: 24px;
  background-color: ${a.colorBeige};
  border-radius: 50%;
`,M=r.svg`
  width: 20px;
  height: 20px;
  fill: ${a.colorOrange1};
`,Le=r.svg`
  width: 24px;
  height: 24px;
`,Pe=r.p`
  font-size: 14px;
  line-height: 18px;

  color: ${a.colorInput};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ne=r.div`
  display: flex;
  gap: 8px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,Ye=r.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 57px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`,Me="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUuSURBVHgB7d3dTttIFAfw8WccOw6OMGxBSNsiEN2+wd7Bc+zL7LvsxUr7EvRqr3YvYTciol0VIW2AJiWNY3v8UR/cSDRS1KaMPcdwfjdFqoqD/4w9X2fKGCGEEEIIIYQQQgghhBBCCCHkuyisoc7Ozlrr66qlaaYWhtxQVV2b/12WJWma8tSydH5zk4X7+/sRa6BGhZPnuXp93XcYszqMqd/82SGszU374+vX/0RHR0cJa4jGhDMcnnQUxXFXCWVR2aKsyfb2dsAaAH04x8fH+sHBtmcYbZMJwvks7vcvx9hbEepwIJhXr35cv/8+EQVa0enpfzeYA0IbTpXBzGEPCGU48OIfDt9sVBnMXNlZeHGlKErGkFEZQqPRuVtHMACuA9djCKELBx5naWo4rEZwPRg3MWTQhQM9MyaB42ToWg+qcE5O/jBFdplXAdfF1npQhdPpvKz1cbYIpoMYIqjCsayOlFYzZ5pumyGCJhx4pNXVQ1tmNgvVohsv9TPchyacbncHy00xGBJowmm11pCE8z+1nEWKsolituL6WkNzT1DOEJASmnDyfJgzBHw/RTPHhiacKPqQMhR+QPI5EIWzs/NzzHCgcBYVU/bFTcmkPtpg+aD4HJwhgapDoGmp1LV90+yh2qWDKhzYxsQk8jxvyhBBFQ7sL4PNF0wCzvUY0yMNoBvnTKfqhEmwtbU1YsigCwdaj6bxWh8vcL2yQ4ILyhmCXu+3CfScWA3gOr3erpTW+jVot0bB1P1w+MavemvU5uaLa4ytBqDeVFhlQNiDAagnPuHGwQ0U3YODnhn2YEBjNrJfXl7amhY+cD9blvu+dasoz1CNZ5ZpWgmIdnV12s7ztrNaSDAt5Hz0fX+KcWfnMo0vngrDtqEVVDW6VzzVSi0r5mkap00uniKEEELq0rgOQVmGeGDq+kjVdUubTKaq5/WU6TT4YszGeZS6rpMlSZhubNgJY89RLaR9C+wzBMUNf2uORlnLMGwzDCP9IQW7AAa0UALf66lFD+55jLlrjS4cCKQYy9hJolt1VByUsw9u0O/3Y2zlh2jCgXEL1MjIKgEB86CwlMJLDed7D32oGpbzCqTdkKurf11soSySHVLtNwYeX92u5sku91iFrJBqCwceYbe3F14c56iqx1YRBOPZ+fnNpK6OQy3hNLG1LPN5ke59HWOmysMpDxRyu+zRCSYbGy8r3XtQaTjlS99GeQCDGNUGVFk4jz+YueoCqiScpxPMXDUBCd/gAWv9TysYYLvlzy2W0HBgxtgw4jX2BHW7ehd+fiaQ0HB2d9ddzCP+KsEZBqLP7REWDoxlbNtDdQJG3USfnyMsnHY76TAi9PQpIeHk+a9qq+WgO69MBmg95SLhwwn5JoPBL2iOJEFCyJqUkHDW1mIK5wtijmgREg6Wo1GwEHVEi5BvMh6PsZwhgILv+0JmrIWEI7PQFhvLMnixnCCkKlxYV3pr6/f3pqlILVWXDep+Op1nN0wQ4e8KMXU0zVLVMnZlL/J37/5sdzo/tZLkQ/txTulkeRAoYRzHQVUlJrUtU89raYqJUaOZYWU55ya3rNndf5i0t7fHq94tKuUm5flfxsVFrFvWvm6aoTGbRbqmwWMQQ2hZnqZJGkUGd90kK36huKzdoKh+g8tpj7+1wWBNdRxHK5rZ3XsrCALd81RlOi3HD1DJNv839yvaFkGF2/zr4qVw9zXn/O5P27YTOIAvSXpZmr7NB4OIHx4eZk0qSySEEEIIIYQQQgghhBBCCCGELPEJ3h5PPY4a9AgAAAAASUVORK5CYII=",qe=()=>{const e=ie(),i=re(ne),[n,o]=y.useState(null),[h,p]=y.useState(i.avatar??Me),m=new FileReader;return m.onloadend=()=>{p(m.result)},y.useEffect(()=>{n&&(p(URL.createObjectURL(n)),m.readAsDataURL(n),e(ue(n)),console.log(123))},[n]),t.jsxs($e,{children:[t.jsxs(ze,{children:[t.jsx(Ie,{id:"image-file",type:"file",accept:"image/*",src:h,alt:"User avatar image",onChange:v=>o(v.target.files[0])}),t.jsx(Be,{htmlFor:"image-file",children:t.jsx(Te,{children:t.jsx("use",{href:`${b}#icon-check-mark-1`})})}),t.jsx(Oe,{src:h,alt:"User avatar image"})]}),t.jsxs(De,{children:[t.jsxs(Ue,{children:[" ",i.name]}),t.jsx(Ee,{children:"User"})]}),t.jsxs(Re,{children:[t.jsxs(L,{children:[t.jsxs(P,{children:[t.jsx(M,{children:t.jsx("use",{href:`${b}#icon-fluent_food-24-filled`})}),t.jsx(N,{children:"Daily calorie intake"})]}),t.jsx(Y,{children:i.bmr??"0"})]}),t.jsxs(L,{children:[t.jsxs(P,{children:[t.jsx(M,{children:t.jsx("use",{href:b+"#icon-dumbbell"})}),t.jsx(N,{children:"Daily physical activity"})]}),t.jsxs(Y,{children:[i.trainingTime??"110"," min"]})]})]}),t.jsxs("div",{children:[t.jsxs(Ne,{children:[t.jsx(Fe,{children:t.jsx(Le,{children:t.jsx("use",{href:b+"#icon-exclamation-mark"})})}),t.jsx(Pe,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),t.jsx(Ye,{children:t.jsx(we,{colorSvg:"#E6533C"})})]})]})},Ge=ke().shape({name:R().required("Name is required"),height:W().min(150,"Height must be minimum 150 cm").max(300,"The value must be no more then 300 cm").required("Please fill your height"),currentWeight:W().min(35,"Current weight must be minimum 35 kg").max(270,"The value must be no more then 270 kg").required("Please fill your current weight"),desiredWeight:W().min(35,"Desired weight must be minimum 35 kg").max(270,"Desired weight must be no more then 270 kg").required("Please fill your desired weight"),blood:W().oneOf([1,2,3,4],"Please choose your blood type").required("Please choose your blood type"),sex:R().oneOf(["male","female"],"Please choose your gender").required("Please choose your gender"),levelActivity:W().oneOf([1,2,3,4,5],"Please choose your level activity").required("Please choose your level activity")}),f=r.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.5);

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-bottom: 8px;
  }
`,T=r(ae)`
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
`,O=r(T)`
  width: 160px;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 168px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    width: 168px;
  }
`,He=r(O)`
  width: 161px;

  @media screen and (min-width: 768px) {
    width: 159px;
  }

  @media screen and (min-width: 1440px) {
    width: 159px;
  }
`,Qe=r(O)`
  @media screen and (min-width: 768px) {
    width: 140px;
  }

  @media screen and (min-width: 1440px) {
    width: 140px;
  }
`,u=r.div`
  width: 160px;
  font-size: 10px;
  line-height: 1.2;
  color: ${a.colorSecondaryRed};
`,Ve=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Xe=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`;var Je=Math.ceil,Ke=Math.max;function Ze(e,i,n,o){for(var h=-1,p=Ke(Je((i-e)/(n||1)),0),m=Array(p);p--;)m[o?p:++h]=e,e+=n;return m}var et=Ze;function tt(e,i){return e===i||e!==e&&i!==i}var it=tt,rt=typeof z=="object"&&z&&z.Object===Object&&z,nt=rt,at=nt,ot=typeof self=="object"&&self&&self.Object===Object&&self,st=at||ot||Function("return this")(),ct=st,dt=ct,lt=dt.Symbol,oe=lt,q=oe,se=Object.prototype,pt=se.hasOwnProperty,xt=se.toString,_=q?q.toStringTag:void 0;function ht(e){var i=pt.call(e,_),n=e[_];try{e[_]=void 0;var o=!0}catch{}var h=xt.call(e);return o&&(i?e[_]=n:delete e[_]),h}var gt=ht,mt=Object.prototype,ut=mt.toString;function ft(e){return ut.call(e)}var bt=ft,G=oe,yt=gt,vt=bt,jt="[object Null]",wt="[object Undefined]",H=G?G.toStringTag:void 0;function kt(e){return e==null?e===void 0?wt:jt:H&&H in Object(e)?yt(e):vt(e)}var ce=kt;function At(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}var D=At,St=ce,Wt=D,_t="[object AsyncFunction]",Ct="[object Function]",$t="[object GeneratorFunction]",zt="[object Proxy]";function It(e){if(!Wt(e))return!1;var i=St(e);return i==Ct||i==$t||i==_t||i==zt}var Bt=It,Tt=9007199254740991;function Ot(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Tt}var Dt=Ot,Ut=Bt,Et=Dt;function Rt(e){return e!=null&&Et(e.length)&&!Ut(e)}var Ft=Rt,Lt=9007199254740991,Pt=/^(?:0|[1-9]\d*)$/;function Nt(e,i){var n=typeof e;return i=i??Lt,!!i&&(n=="number"||n!="symbol"&&Pt.test(e))&&e>-1&&e%1==0&&e<i}var Yt=Nt,Mt=it,qt=Ft,Gt=Yt,Ht=D;function Qt(e,i,n){if(!Ht(n))return!1;var o=typeof i;return(o=="number"?qt(n)&&Gt(i,n.length):o=="string"&&i in n)?Mt(n[i],e):!1}var Vt=Qt,Xt=/\s/;function Jt(e){for(var i=e.length;i--&&Xt.test(e.charAt(i)););return i}var Kt=Jt,Zt=Kt,ei=/^\s+/;function ti(e){return e&&e.slice(0,Zt(e)+1).replace(ei,"")}var ii=ti;function ri(e){return e!=null&&typeof e=="object"}var ni=ri,ai=ce,oi=ni,si="[object Symbol]";function ci(e){return typeof e=="symbol"||oi(e)&&ai(e)==si}var di=ci,li=ii,Q=D,pi=di,V=0/0,xi=/^[-+]0x[0-9a-f]+$/i,hi=/^0b[01]+$/i,gi=/^0o[0-7]+$/i,mi=parseInt;function ui(e){if(typeof e=="number")return e;if(pi(e))return V;if(Q(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=Q(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=li(e);var n=hi.test(e);return n||gi.test(e)?mi(e.slice(2),n?2:8):xi.test(e)?V:+e}var fi=ui,bi=fi,X=1/0,yi=17976931348623157e292;function vi(e){if(!e)return e===0?e:0;if(e=bi(e),e===X||e===-X){var i=e<0?-1:1;return i*yi}return e===e?e:0}var ji=vi,wi=et,ki=Vt,B=ji;function Ai(e){return function(i,n,o){return o&&typeof o!="number"&&ki(i,n,o)&&(n=o=void 0),i=B(i),n===void 0?(n=i,i=0):n=B(n),o=o===void 0?i<n?1:-1:B(o),wi(i,n,o,e)}}var Si=Ai,Wi=Si,_i=Wi(),Ci=_i;const $i=fe(Ci),zi=r.div`
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
`,Ii=r.button`
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
`,Bi=r.svg`
  width: 18px;
  height: 18px;
  stroke: ${a.colorWhite};
  fill: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${a.colorOrange};
  }
`,Ti=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,J=r.svg`
  width: 8px;
  height: 12px;
  stroke: ${a.colorWhite};
  fill: ${a.colorWhite};
  cursor: pointer;
`,Oi=r.p`
  color: ${a.colorWhite};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`,K=r.select`
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
`,Z=r.option`
  background-color: ${a.colorOrange};
  height: 2px;
`,Di=be`
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
`,Ui=({onDateChange:e,savedBirthday:i})=>{const[n,o]=y.useState(i==="00.00.0000"?new Date:new Date(i)),h=$i(1950,F(new Date)+1,1),p=["January","February","March","April","May","June","July","August","September","October","November","December"],m=({date:d,decreaseMonth:j,increaseMonth:C,changeYear:$,changeMonth:A})=>t.jsxs(Ti,{children:[t.jsx(J,{onClick:j,children:t.jsx("use",{href:b+"#icon-chevron-left"})}),t.jsxs(Oi,{children:[t.jsx(K,{value:p[Ce(d)],onChange:({target:{value:x}})=>A(p.indexOf(x)),children:p.map(x=>t.jsx(Z,{value:x,children:x},x))}),t.jsx(K,{value:F(d),onChange:({target:{value:x}})=>$(x),children:h.map(x=>t.jsx(Z,{value:x,children:x},x))})]}),t.jsx(J,{onClick:C,children:t.jsx("use",{href:b+"#icon-chevron-right"})})]}),v=y.forwardRef(({onClick:d},j)=>t.jsx(zi,{children:t.jsxs(Ii,{type:"button",onClick:d,ref:j,children:[We(n,"dd.MM.yyyy"),t.jsx(Bi,{onClick:d,ref:j,children:t.jsx("use",{href:`${b}#icon-calendar`})})]})}));return v.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(_e,{selected:n,onChange:d=>{o(d),e(d)},customInput:t.jsx(v,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,2),renderCustomHeader:d=>t.jsx(m,{...d,value:i})}),t.jsx(Di,{})]})},Ei=({errors:e,touched:i,onDateChange:n,savedBirthday:o,userEmail:h})=>t.jsxs(t.Fragment,{children:[t.jsxs(Xe,{children:[t.jsxs("label",{children:[t.jsx(f,{children:"Name "}),t.jsx(T,{name:"name",type:"text",autoComplete:"off"}),e.name&&i.name&&t.jsx(u,{children:e.name})]}),t.jsxs("label",{children:[t.jsx(f,{children:"Email "}),t.jsx(T,{style:{color:" rgba(239, 237, 232, 0.6)"},name:"email",type:"text",autoComplete:"off",disabled:!0,value:h}),e.email&&i.email&&t.jsx(u,{children:e.email})]})]}),t.jsxs(Ve,{children:[t.jsxs("label",{children:[t.jsx(f,{children:"Height "}),t.jsx(O,{name:"height",type:"number"}),e.height&&i.height&&t.jsx(u,{children:e.height})]}),t.jsxs("label",{children:[t.jsx(f,{children:"Current Weight "}),t.jsx(He,{name:"currentWeight",type:"number"}),e.currentWeight&&i.currentWeight&&t.jsx(u,{children:e.currentWeight})]}),t.jsxs("label",{children:[t.jsx(f,{children:" Desired Weight"}),t.jsx(Qe,{name:"desiredWeight",type:"number"}),e.desiredWeight&&i.desiredWeight&&t.jsx(u,{children:e.desiredWeight})]}),t.jsxs("label",{children:[t.jsx(f,{children:"Date of birth "}),t.jsx(Ui,{savedBirthday:o,name:"birthday",onDateChange:n})]})]})]}),Ri=r.label`
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
`,Fi=r(ae)`
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
`,Li=r.span`
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
`,g=({name:e,value:i,text:n})=>t.jsxs(Ri,{children:[t.jsx(Fi,{type:"radio",name:e,value:i}),t.jsx(Li,{}),n]}),Pi=r.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,ee=r.label`
  display: flex;
  flex-direction: column;
`,Ni=r.div`
  display: flex;

  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`,te=r.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`,Yi=r.div`
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`,Mi=r.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 38px;
  padding-right: 10px;
`,qi=r.button`
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
`,Gi=()=>{const e=ie(),i=re(ne),{name:n,email:o,height:h,currentWeight:p,desiredWeight:m,birthday:v,blood:d,sex:j,levelActivity:C}=i,$={name:n,email:o,height:h??0,currentWeight:p??0,desiredWeight:m??0,blood:d?d.toString():0,sex:j??0,levelActivity:C?C.toString():0},[A,x]=y.useState(v||"00.00.0000"),de=s=>{const c=s.getDate(),l=s.getMonth()+1,w=s.getFullYear(),k=c<10?"0"+c:c,S=l<10?"0"+l:l;return`${k}.${S}.${w}`},le=s=>{const[c,l,w]=s.split("."),k=new Date(w,l-1,c);return new Date().getFullYear()-k.getFullYear()},pe=s=>{const c=de(s);x(c),le(c)<18&&(console.log("Sorry, but only adults can use our app."),U(!0))},[xe,U]=y.useState(!0),he=s=>{const c=Object.keys(s).some(l=>s[l]!==$[l]);U(!c),console.log(s)},ge=s=>{const{name:c,height:l,currentWeight:w,desiredWeight:k,blood:S,sex:I,levelActivity:E}=s,me={name:c,height:l,currentWeight:w,desiredWeight:k,birthdayNew:A,blood:Number(S),sex:I,levelActivity:Number(E)};e(ye({name:c,height:l,currentWeight:w,desiredWeight:k,birthday:A,blood:Number(S),sex:I,levelActivity:Number(E)})),console.log(me)};return t.jsx(Pi,{children:t.jsx(Ae,{initialValues:$,validationSchema:Ge,onSubmit:s=>{ge(s)},children:({errors:s,touched:c})=>t.jsxs(Se,{onChange:l=>he(l),children:[t.jsx(Ei,{errors:s,touched:c,onDateChange:pe,savedBirthday:A,userEmail:o}),t.jsxs(Yi,{children:[t.jsx(f,{children:"Blood"}),t.jsxs(Ni,{children:[t.jsxs(ee,{children:[t.jsxs(te,{children:[t.jsx(g,{name:"blood",value:"1",text:"1"}),t.jsx(g,{name:"blood",value:"2",text:"2"}),t.jsx(g,{name:"blood",value:"3",text:"3"}),t.jsx(g,{name:"blood",value:"4",text:"4"})]}),s.blood&&c.blood&&t.jsx(u,{children:s.blood})]}),t.jsxs(ee,{children:[t.jsxs(te,{children:[t.jsx(g,{name:"sex",value:"male",text:"Male"}),t.jsx(g,{name:"sex",value:"female",text:"Female"})]}),s.sex&&c.sex&&t.jsx(u,{children:s.sex})]})]})]}),t.jsxs(Mi,{children:[t.jsx(g,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),t.jsx(g,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),t.jsx(g,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),t.jsx(g,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),t.jsx(g,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"}),s.levelActivity&&c.levelActivity&&t.jsx(u,{children:s.levelActivity})]}),t.jsx(qi,{type:"submit",disabled:xe,children:"Save"})]})})})},Hi=r.div`
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
`,tr=()=>t.jsxs(ve,{children:[t.jsx(je,{contentText:"Profile Settings"}),t.jsxs(Hi,{children:[t.jsx(qe,{}),t.jsx(Gi,{})]})]});export{tr as default};
