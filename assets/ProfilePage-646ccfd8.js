import{u as r,a as O,h as re,s as ne,r as b,i as ue,j as t,c as $,g as fe,k as be,m as ye,n as ve,C as je}from"./index-0bf735f7.js";import{T as we}from"./TitlePage-656fa80d.js";import{s as v}from"./sprite-8de2d76c.js";import{g as a}from"./root-786e29f7.js";import{b as ke}from"./LogOutBtn-07cb907e.js";import{c as Ae,a as F,b as W,F as ae,d as Se,e as We}from"./index.esm-522fd79b.js";import{g as L,f as _e,i as Ce,a as $e}from"./index-0723721f.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const ze=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ie=r.div`
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
`,Be=r.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;

  cursor: pointer;
`,Te=r.label`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`,Oe=r.svg`
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
`,De=r.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100%;
  object-fit: cover;
`,Ue=r.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 8px;
  }
`,Ee=r.p`
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,Re=r.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.5);
`,Fe=r.ul`
  margin: 36px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media screen and (min-width: 768px) {
    margin: 32px 0;
    gap: 16px;
    justify-content: center;
  }
`,P=r.li`
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
`,N=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Y=r.h2`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 1.5;
  }
`,M=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Le=r.div`
  width: 24px;
  height: 24px;
  background-color: ${a.colorBeige};
  border-radius: 50%;
`,q=r.svg`
  width: 20px;
  height: 20px;
  fill: ${a.colorOrange1};
`,Pe=r.svg`
  width: 24px;
  height: 24px;
`,Ne=r.p`
  font-size: 14px;
  line-height: 18px;

  color: ${a.colorInput};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Ye=r.div`
  display: flex;
  gap: 8px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,Me=r.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 57px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`,qe="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUuSURBVHgB7d3dTttIFAfw8WccOw6OMGxBSNsiEN2+wd7Bc+zL7LvsxUr7EvRqr3YvYTciol0VIW2AJiWNY3v8UR/cSDRS1KaMPcdwfjdFqoqD/4w9X2fKGCGEEEIIIYQQQgghhBBCCCHkuyisoc7Ozlrr66qlaaYWhtxQVV2b/12WJWma8tSydH5zk4X7+/sRa6BGhZPnuXp93XcYszqMqd/82SGszU374+vX/0RHR0cJa4jGhDMcnnQUxXFXCWVR2aKsyfb2dsAaAH04x8fH+sHBtmcYbZMJwvks7vcvx9hbEepwIJhXr35cv/8+EQVa0enpfzeYA0IbTpXBzGEPCGU48OIfDt9sVBnMXNlZeHGlKErGkFEZQqPRuVtHMACuA9djCKELBx5naWo4rEZwPRg3MWTQhQM9MyaB42ToWg+qcE5O/jBFdplXAdfF1npQhdPpvKz1cbYIpoMYIqjCsayOlFYzZ5pumyGCJhx4pNXVQ1tmNgvVohsv9TPchyacbncHy00xGBJowmm11pCE8z+1nEWKsolituL6WkNzT1DOEJASmnDyfJgzBHw/RTPHhiacKPqQMhR+QPI5EIWzs/NzzHCgcBYVU/bFTcmkPtpg+aD4HJwhgapDoGmp1LV90+yh2qWDKhzYxsQk8jxvyhBBFQ7sL4PNF0wCzvUY0yMNoBvnTKfqhEmwtbU1YsigCwdaj6bxWh8vcL2yQ4ILyhmCXu+3CfScWA3gOr3erpTW+jVot0bB1P1w+MavemvU5uaLa4ytBqDeVFhlQNiDAagnPuHGwQ0U3YODnhn2YEBjNrJfXl7amhY+cD9blvu+dasoz1CNZ5ZpWgmIdnV12s7ztrNaSDAt5Hz0fX+KcWfnMo0vngrDtqEVVDW6VzzVSi0r5mkap00uniKEEELq0rgOQVmGeGDq+kjVdUubTKaq5/WU6TT4YszGeZS6rpMlSZhubNgJY89RLaR9C+wzBMUNf2uORlnLMGwzDCP9IQW7AAa0UALf66lFD+55jLlrjS4cCKQYy9hJolt1VByUsw9u0O/3Y2zlh2jCgXEL1MjIKgEB86CwlMJLDed7D32oGpbzCqTdkKurf11soSySHVLtNwYeX92u5sku91iFrJBqCwceYbe3F14c56iqx1YRBOPZ+fnNpK6OQy3hNLG1LPN5ke59HWOmysMpDxRyu+zRCSYbGy8r3XtQaTjlS99GeQCDGNUGVFk4jz+YueoCqiScpxPMXDUBCd/gAWv9TysYYLvlzy2W0HBgxtgw4jX2BHW7ehd+fiaQ0HB2d9ddzCP+KsEZBqLP7REWDoxlbNtDdQJG3USfnyMsnHY76TAi9PQpIeHk+a9qq+WgO69MBmg95SLhwwn5JoPBL2iOJEFCyJqUkHDW1mIK5wtijmgREg6Wo1GwEHVEi5BvMh6PsZwhgILv+0JmrIWEI7PQFhvLMnixnCCkKlxYV3pr6/f3pqlILVWXDep+Op1nN0wQ4e8KMXU0zVLVMnZlL/J37/5sdzo/tZLkQ/txTulkeRAoYRzHQVUlJrUtU89raYqJUaOZYWU55ya3rNndf5i0t7fHq94tKuUm5flfxsVFrFvWvm6aoTGbRbqmwWMQQ2hZnqZJGkUGd90kK36huKzdoKh+g8tpj7+1wWBNdRxHK5rZ3XsrCALd81RlOi3HD1DJNv839yvaFkGF2/zr4qVw9zXn/O5P27YTOIAvSXpZmr7NB4OIHx4eZk0qSySEEEIIIYQQQgghhBBCCCGELPEJ3h5PPY4a9AgAAAAASUVORK5CYII=",Ge=()=>{const e=O(),i=re(ne),[n,o]=b.useState(null),[h,p]=b.useState(i.avatar===""?qe:i.avatar),m=new FileReader;return m.onloadend=()=>{p(m.result)},b.useEffect(()=>{n&&(p(URL.createObjectURL(n)),m.readAsDataURL(n),e(ue(n)),console.log(123))},[n]),t.jsxs(ze,{children:[t.jsxs(Ie,{children:[t.jsx(Be,{id:"image-file",type:"file",accept:"image/*",src:h,alt:"User avatar image",onChange:u=>o(u.target.files[0])}),t.jsx(Te,{htmlFor:"image-file",children:t.jsx(Oe,{children:t.jsx("use",{href:`${v}#icon-check-mark-1`})})}),t.jsx(De,{src:h,alt:"User avatar image"})]}),t.jsxs(Ue,{children:[t.jsxs(Ee,{children:[" ",i.name]}),t.jsx(Re,{children:"User"})]}),t.jsxs(Fe,{children:[t.jsxs(P,{children:[t.jsxs(N,{children:[t.jsx(q,{children:t.jsx("use",{href:`${v}#icon-fluent_food-24-filled`})}),t.jsx(Y,{children:"Daily calorie intake"})]}),t.jsx(M,{children:i.bmr})]}),t.jsxs(P,{children:[t.jsxs(N,{children:[t.jsx(q,{children:t.jsx("use",{href:v+"#icon-dumbbell"})}),t.jsx(Y,{children:"Daily physical activity"})]}),t.jsxs(M,{children:[i.trainingTime," min"]})]})]}),t.jsxs("div",{children:[t.jsxs(Ye,{children:[t.jsx(Le,{children:t.jsx(Pe,{children:t.jsx("use",{href:v+"#icon-exclamation-mark"})})}),t.jsx(Ne,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),t.jsx(Me,{children:t.jsx(ke,{colorSvg:"#E6533C"})})]})]})},He=Ae().shape({name:F().required("Name is required"),height:W().min(150,"Height must be minimum 150 cm").max(300,"The value must be no more then 300 cm").required("Please fill your height"),currentWeight:W().min(35,"Current weight must be minimum 35 kg").max(270,"The value must be no more then 270 kg").required("Please fill your current weight"),desiredWeight:W().min(35,"Desired weight must be minimum 35 kg").max(270,"Desired weight must be no more then 270 kg").required("Please fill your desired weight"),blood:W().oneOf([1,2,3,4],"Please choose your blood type").required("Please choose your blood type"),sex:F().oneOf(["male","female"],"Please choose your gender").required("Please choose your gender"),levelActivity:W().oneOf([1,2,3,4,5],"Please choose your level activity").required("Please choose your level activity")}),y=r.p`
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
`,D=r(T)`
  width: 160px;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 168px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    width: 168px;
  }
`,Qe=r(D)`
  width: 161px;

  @media screen and (min-width: 768px) {
    width: 159px;
  }

  @media screen and (min-width: 1440px) {
    width: 159px;
  }
`,Ve=r(D)`
  @media screen and (min-width: 768px) {
    width: 140px;
  }

  @media screen and (min-width: 1440px) {
    width: 140px;
  }
`,f=r.div`
  width: 160px;
  font-size: 10px;
  line-height: 1.2;
  color: ${a.colorSecondaryRed};
`,Xe=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Je=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`;var Ke=Math.ceil,Ze=Math.max;function et(e,i,n,o){for(var h=-1,p=Ze(Ke((i-e)/(n||1)),0),m=Array(p);p--;)m[o?p:++h]=e,e+=n;return m}var tt=et;function it(e,i){return e===i||e!==e&&i!==i}var rt=it,nt=typeof $=="object"&&$&&$.Object===Object&&$,at=nt,ot=at,st=typeof self=="object"&&self&&self.Object===Object&&self,ct=ot||st||Function("return this")(),dt=ct,lt=dt,pt=lt.Symbol,oe=pt,G=oe,se=Object.prototype,xt=se.hasOwnProperty,ht=se.toString,_=G?G.toStringTag:void 0;function gt(e){var i=xt.call(e,_),n=e[_];try{e[_]=void 0;var o=!0}catch{}var h=ht.call(e);return o&&(i?e[_]=n:delete e[_]),h}var mt=gt,ut=Object.prototype,ft=ut.toString;function bt(e){return ft.call(e)}var yt=bt,H=oe,vt=mt,jt=yt,wt="[object Null]",kt="[object Undefined]",Q=H?H.toStringTag:void 0;function At(e){return e==null?e===void 0?kt:wt:Q&&Q in Object(e)?vt(e):jt(e)}var ce=At;function St(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}var U=St,Wt=ce,_t=U,Ct="[object AsyncFunction]",$t="[object Function]",zt="[object GeneratorFunction]",It="[object Proxy]";function Bt(e){if(!_t(e))return!1;var i=Wt(e);return i==$t||i==zt||i==Ct||i==It}var Tt=Bt,Ot=9007199254740991;function Dt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Ot}var Ut=Dt,Et=Tt,Rt=Ut;function Ft(e){return e!=null&&Rt(e.length)&&!Et(e)}var Lt=Ft,Pt=9007199254740991,Nt=/^(?:0|[1-9]\d*)$/;function Yt(e,i){var n=typeof e;return i=i??Pt,!!i&&(n=="number"||n!="symbol"&&Nt.test(e))&&e>-1&&e%1==0&&e<i}var Mt=Yt,qt=rt,Gt=Lt,Ht=Mt,Qt=U;function Vt(e,i,n){if(!Qt(n))return!1;var o=typeof i;return(o=="number"?Gt(n)&&Ht(i,n.length):o=="string"&&i in n)?qt(n[i],e):!1}var Xt=Vt,Jt=/\s/;function Kt(e){for(var i=e.length;i--&&Jt.test(e.charAt(i)););return i}var Zt=Kt,ei=Zt,ti=/^\s+/;function ii(e){return e&&e.slice(0,ei(e)+1).replace(ti,"")}var ri=ii;function ni(e){return e!=null&&typeof e=="object"}var ai=ni,oi=ce,si=ai,ci="[object Symbol]";function di(e){return typeof e=="symbol"||si(e)&&oi(e)==ci}var li=di,pi=ri,V=U,xi=li,X=0/0,hi=/^[-+]0x[0-9a-f]+$/i,gi=/^0b[01]+$/i,mi=/^0o[0-7]+$/i,ui=parseInt;function fi(e){if(typeof e=="number")return e;if(xi(e))return X;if(V(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=V(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=pi(e);var n=gi.test(e);return n||mi.test(e)?ui(e.slice(2),n?2:8):hi.test(e)?X:+e}var bi=fi,yi=bi,J=1/0,vi=17976931348623157e292;function ji(e){if(!e)return e===0?e:0;if(e=yi(e),e===J||e===-J){var i=e<0?-1:1;return i*vi}return e===e?e:0}var wi=ji,ki=tt,Ai=Xt,B=wi;function Si(e){return function(i,n,o){return o&&typeof o!="number"&&Ai(i,n,o)&&(n=o=void 0),i=B(i),n===void 0?(n=i,i=0):n=B(n),o=o===void 0?i<n?1:-1:B(o),ki(i,n,o,e)}}var Wi=Si,_i=Wi,Ci=_i(),$i=Ci;const zi=fe($i),Ii=r.div`
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
`,Bi=r.button`
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
`,Ti=r.svg`
  width: 18px;
  height: 18px;
  stroke: ${a.colorWhite};
  fill: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${a.colorOrange};
  }
`,Oi=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,K=r.svg`
  width: 8px;
  height: 12px;
  stroke: ${a.colorWhite};
  fill: ${a.colorWhite};
  cursor: pointer;
`,Di=r.p`
  color: ${a.colorWhite};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`,Z=r.select`
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
`,ee=r.option`
  background-color: ${a.colorOrange};
  height: 2px;
`,Ui=be`
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
`,Ei=({onDateChange:e,savedBirthday:i})=>{const[n,o]=b.useState(i==="00.00.0000"?new Date:new Date(i)),h=zi(1950,L(new Date)+1,1),p=["January","February","March","April","May","June","July","August","September","October","November","December"],m=({date:d,decreaseMonth:j,increaseMonth:z,changeYear:A,changeMonth:C})=>t.jsxs(Oi,{children:[t.jsx(K,{onClick:j,children:t.jsx("use",{href:v+"#icon-chevron-left"})}),t.jsxs(Di,{children:[t.jsx(Z,{value:p[$e(d)],onChange:({target:{value:x}})=>C(p.indexOf(x)),children:p.map(x=>t.jsx(ee,{value:x,children:x},x))}),t.jsx(Z,{value:L(d),onChange:({target:{value:x}})=>A(x),children:h.map(x=>t.jsx(ee,{value:x,children:x},x))})]}),t.jsx(K,{onClick:z,children:t.jsx("use",{href:v+"#icon-chevron-right"})})]}),u=b.forwardRef(({onClick:d},j)=>t.jsx(Ii,{children:t.jsxs(Bi,{type:"button",onClick:d,ref:j,children:[_e(n,"dd.MM.yyyy"),t.jsx(Ti,{onClick:d,ref:j,children:t.jsx("use",{href:`${v}#icon-calendar`})})]})}));return u.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(Ce,{selected:n,onChange:d=>{o(d),e(d)},customInput:t.jsx(u,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,2),renderCustomHeader:d=>t.jsx(m,{...d,value:i})}),t.jsx(Ui,{})]})},Ri=({errors:e,touched:i,onDateChange:n,savedBirthday:o,userEmail:h})=>t.jsxs(t.Fragment,{children:[t.jsxs(Je,{children:[t.jsxs("label",{children:[t.jsx(y,{children:"Name "}),t.jsx(T,{name:"name",type:"text",autoComplete:"off"}),e.name&&i.name&&t.jsx(f,{children:e.name})]}),t.jsxs("label",{children:[t.jsx(y,{children:"Email "}),t.jsx(T,{style:{color:" rgba(239, 237, 232, 0.6)"},name:"email",type:"text",autoComplete:"off",disabled:!0,value:h}),e.email&&i.email&&t.jsx(f,{children:e.email})]})]}),t.jsxs(Xe,{children:[t.jsxs("label",{children:[t.jsx(y,{children:"Height "}),t.jsx(D,{name:"height",type:"number"}),e.height&&i.height&&t.jsx(f,{children:e.height})]}),t.jsxs("label",{children:[t.jsx(y,{children:"Current Weight "}),t.jsx(Qe,{name:"currentWeight",type:"number"}),e.currentWeight&&i.currentWeight&&t.jsx(f,{children:e.currentWeight})]}),t.jsxs("label",{children:[t.jsx(y,{children:" Desired Weight"}),t.jsx(Ve,{name:"desiredWeight",type:"number"}),e.desiredWeight&&i.desiredWeight&&t.jsx(f,{children:e.desiredWeight})]}),t.jsxs("label",{children:[t.jsx(y,{children:"Date of birth "}),t.jsx(Ei,{savedBirthday:o,name:"birthday",onDateChange:n})]})]})]}),Fi=r.label`
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
`,Li=r(ae)`
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
`,Pi=r.span`
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
`,g=({name:e,value:i,text:n})=>t.jsxs(Fi,{children:[t.jsx(Li,{type:"radio",name:e,value:i}),t.jsx(Pi,{}),n]}),Ni=r.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,te=r.label`
  display: flex;
  flex-direction: column;
`,Yi=r.div`
  display: flex;

  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`,ie=r.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`,Mi=r.div`
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`,qi=r.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 38px;
  padding-right: 10px;
`,Gi=r.button`
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
`,Hi=()=>{const e=O(),i=re(ne),{name:n,email:o,height:h,currentWeight:p,desiredWeight:m,birthday:u,blood:d,sex:j,levelActivity:z}=i,A={name:n,email:o,height:h,currentWeight:p,desiredWeight:m,birthday:u,blood:d.toString(),sex:j,levelActivity:z.toString()};console.log(A.name);const[C,x]=b.useState(u),de=s=>{const c=s.getDate(),l=s.getMonth()+1,w=s.getFullYear(),k=c<10?"0"+c:c,S=l<10?"0"+l:l;return`${k}.${S}.${w}`},le=s=>{const[c,l,w]=s.split("."),k=new Date(w,l-1,c);return new Date().getFullYear()-k.getFullYear()},pe=s=>{const c=de(s);x(c),le(c)<18&&(console.log("Sorry, but only adults can use our app."),E(!0))},[xe,E]=b.useState(!0),he=s=>{const c=Object.keys(s).some(l=>s[l]!==A[l]);E(!c),console.log(s)},ge=s=>{const{name:c,height:l,currentWeight:w,desiredWeight:k,blood:S,sex:I,levelActivity:R}=s,me={name:c,height:l,currentWeight:w,desiredWeight:k,birthdayNew:C,blood:Number(S),sex:I,levelActivity:Number(R)};e(ye({name:c,height:l,currentWeight:w,desiredWeight:k,birthday:C,blood:Number(S),sex:I,levelActivity:Number(R)})),console.log(me)};return t.jsx(Ni,{children:t.jsx(Se,{initialValues:A,validationSchema:He,onSubmit:s=>{ge(s)},children:({errors:s,touched:c})=>t.jsxs(We,{onChange:l=>he(l),children:[t.jsx(Ri,{errors:s,touched:c,onDateChange:pe,savedBirthday:u,userEmail:o}),t.jsxs(Mi,{children:[t.jsx(y,{children:"Blood"}),t.jsxs(Yi,{children:[t.jsxs(te,{children:[t.jsxs(ie,{children:[t.jsx(g,{name:"blood",value:"1",text:"1"}),t.jsx(g,{name:"blood",value:"2",text:"2"}),t.jsx(g,{name:"blood",value:"3",text:"3"}),t.jsx(g,{name:"blood",value:"4",text:"4"})]}),s.blood&&c.blood&&t.jsx(f,{children:s.blood})]}),t.jsxs(te,{children:[t.jsxs(ie,{children:[t.jsx(g,{name:"sex",value:"male",text:"Male"}),t.jsx(g,{name:"sex",value:"female",text:"Female"})]}),s.sex&&c.sex&&t.jsx(f,{children:s.sex})]})]})]}),t.jsxs(qi,{children:[t.jsx(g,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),t.jsx(g,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),t.jsx(g,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),t.jsx(g,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),t.jsx(g,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"}),s.levelActivity&&c.levelActivity&&t.jsx(f,{children:s.levelActivity})]}),t.jsx(Gi,{type:"submit",disabled:xe,children:"Save"})]})})})},Qi=r.div`
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
`,rr=()=>{const e=O();return b.useEffect(()=>{e(ve())},[]),t.jsxs(je,{children:[t.jsx(we,{contentText:"Profile Settings"}),t.jsxs(Qi,{children:[t.jsx(Ge,{}),t.jsx(Hi,{})]})]})};export{rr as default};
