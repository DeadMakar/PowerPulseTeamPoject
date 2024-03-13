import{u as r,a,d as Z,b as ee,f as te,r as y,w as ce,x as ie,j as t,s as b,o as de,p as T,y as k,F as re,c as _,g as le,z as pe,A as xe,B as he,D as O,E as ge,C as me}from"./index-932768f7.js";import{T as ue}from"./TitlePage-2c08270b.js";import{b as fe}from"./LogOutBtn-16cd980d.js";import{g as U,f as be,i as ye,a as ve}from"./index-e37e0d77.js";import"./floating-ui.dom-9d61e2db.js";const je=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,we=r.div`
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
`,ke=r.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;

  cursor: pointer;
`,Ae=r.label`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`,Se=r.svg`
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
`,_e=r.img`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 100%;
  object-fit: cover;
`,Ce=r.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 8px;
  }
`,We=r.p`
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.17;
  }
`,$e=r.p`
  font-size: 14px;
  line-height: 1.29;
  color: rgba(239, 237, 232, 0.5);
`,ze=r.ul`
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
`,D=r.li`
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
`,R=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,E=r.h2`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 1.5;
  }
`,L=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Be=r.div`
  width: 24px;
  height: 24px;
  background-color: ${a.colorBeige};
  border-radius: 50%;
`,F=r.svg`
  width: 20px;
  height: 20px;
  fill: ${a.colorOrange1};
`,Ie=r.svg`
  width: 24px;
  height: 24px;
`,Te=r.p`
  font-size: 14px;
  line-height: 18px;

  color: ${a.colorInput};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`,Oe=r.div`
  display: flex;
  gap: 8px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 439px;
  }
`,Ue=r.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 57px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`,P="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUuSURBVHgB7d3dTttIFAfw8WccOw6OMGxBSNsiEN2+wd7Bc+zL7LvsxUr7EvRqr3YvYTciol0VIW2AJiWNY3v8UR/cSDRS1KaMPcdwfjdFqoqD/4w9X2fKGCGEEEIIIYQQQgghhBBCCCHkuyisoc7Ozlrr66qlaaYWhtxQVV2b/12WJWma8tSydH5zk4X7+/sRa6BGhZPnuXp93XcYszqMqd/82SGszU374+vX/0RHR0cJa4jGhDMcnnQUxXFXCWVR2aKsyfb2dsAaAH04x8fH+sHBtmcYbZMJwvks7vcvx9hbEepwIJhXr35cv/8+EQVa0enpfzeYA0IbTpXBzGEPCGU48OIfDt9sVBnMXNlZeHGlKErGkFEZQqPRuVtHMACuA9djCKELBx5naWo4rEZwPRg3MWTQhQM9MyaB42ToWg+qcE5O/jBFdplXAdfF1npQhdPpvKz1cbYIpoMYIqjCsayOlFYzZ5pumyGCJhx4pNXVQ1tmNgvVohsv9TPchyacbncHy00xGBJowmm11pCE8z+1nEWKsolituL6WkNzT1DOEJASmnDyfJgzBHw/RTPHhiacKPqQMhR+QPI5EIWzs/NzzHCgcBYVU/bFTcmkPtpg+aD4HJwhgapDoGmp1LV90+yh2qWDKhzYxsQk8jxvyhBBFQ7sL4PNF0wCzvUY0yMNoBvnTKfqhEmwtbU1YsigCwdaj6bxWh8vcL2yQ4ILyhmCXu+3CfScWA3gOr3erpTW+jVot0bB1P1w+MavemvU5uaLa4ytBqDeVFhlQNiDAagnPuHGwQ0U3YODnhn2YEBjNrJfXl7amhY+cD9blvu+dasoz1CNZ5ZpWgmIdnV12s7ztrNaSDAt5Hz0fX+KcWfnMo0vngrDtqEVVDW6VzzVSi0r5mkap00uniKEEELq0rgOQVmGeGDq+kjVdUubTKaq5/WU6TT4YszGeZS6rpMlSZhubNgJY89RLaR9C+wzBMUNf2uORlnLMGwzDCP9IQW7AAa0UALf66lFD+55jLlrjS4cCKQYy9hJolt1VByUsw9u0O/3Y2zlh2jCgXEL1MjIKgEB86CwlMJLDed7D32oGpbzCqTdkKurf11soSySHVLtNwYeX92u5sku91iFrJBqCwceYbe3F14c56iqx1YRBOPZ+fnNpK6OQy3hNLG1LPN5ke59HWOmysMpDxRyu+zRCSYbGy8r3XtQaTjlS99GeQCDGNUGVFk4jz+YueoCqiScpxPMXDUBCd/gAWv9TysYYLvlzy2W0HBgxtgw4jX2BHW7ehd+fiaQ0HB2d9ddzCP+KsEZBqLP7REWDoxlbNtDdQJG3USfnyMsnHY76TAi9PQpIeHk+a9qq+WgO69MBmg95SLhwwn5JoPBL2iOJEFCyJqUkHDW1mIK5wtijmgREg6Wo1GwEHVEi5BvMh6PsZwhgILv+0JmrIWEI7PQFhvLMnixnCCkKlxYV3pr6/f3pqlILVWXDep+Op1nN0wQ4e8KMXU0zVLVMnZlL/J37/5sdzo/tZLkQ/txTulkeRAoYRzHQVUlJrUtU89raYqJUaOZYWU55ya3rNndf5i0t7fHq94tKuUm5flfxsVFrFvWvm6aoTGbRbqmwWMQQ2hZnqZJGkUGd90kK36huKzdoKh+g8tpj7+1wWBNdRxHK5rZ3XsrCALd81RlOi3HD1DJNv839yvaFkGF2/zr4qVw9zXn/O5P27YTOIAvSXpZmr7NB4OIHx4eZk0qSySEEEIIIYQQQgghhBBCCCGELPEJ3h5PPY4a9AgAAAAASUVORK5CYII=",De=()=>{const e=Z(),i=ee(te),[n,c]=y.useState(null),[h,l]=y.useState(i.avatarURL),g=new FileReader;return g.onloadend=()=>{l(g.result)},y.useEffect(()=>{n&&(l(URL.createObjectURL(n)),g.readAsDataURL(n),e(ce(n)),setTimeout(()=>e(ie()),4e3))},[n]),t.jsxs(je,{children:[t.jsxs(we,{children:[t.jsx(ke,{id:"image-file",type:"file",accept:"image/*",src:h||i.avatarURL||P,alt:"User avatar image",onChange:u=>c(u.target.files[0])}),t.jsx(Ae,{htmlFor:"image-file",children:t.jsx(Se,{children:t.jsx("use",{href:`${b}#icon-check-mark-1`})})}),t.jsx(_e,{src:h||i.avatarURL||P,alt:"User avatar image"})]}),t.jsxs(Ce,{children:[t.jsxs(We,{children:[" ",i.userName]}),t.jsx($e,{children:"User"})]}),t.jsxs(ze,{children:[t.jsxs(D,{children:[t.jsxs(R,{children:[t.jsx(F,{children:t.jsx("use",{href:`${b}#icon-fluent_food-24-filled`})}),t.jsx(E,{children:"Daily calorie intake"})]}),t.jsx(L,{children:i.resultBMR||"0"})]}),t.jsxs(D,{children:[t.jsxs(R,{children:[t.jsx(F,{children:t.jsx("use",{href:b+"#icon-dumbbell"})}),t.jsx(E,{children:"Daily physical activity"})]}),t.jsxs(L,{children:[i.trainingTime||"110"," min"]})]})]}),t.jsxs("div",{children:[t.jsxs(Oe,{children:[t.jsx(Be,{children:t.jsx(Ie,{children:t.jsx("use",{href:b+"#icon-exclamation-mark"})})}),t.jsx(Te,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),t.jsx(Ue,{children:t.jsx(fe,{colorSvg:"#E6533C"})})]})]})},Re=de().shape({name:T().required("Name is required"),height:k().min(150,"Height must be minimum 150 cm").max(300,"The value must be no more then 300 cm").required("Please fill your height"),currentWeight:k().min(35,"Current weight must be minimum 35 kg").max(270,"The value must be no more then 270 kg").required("Please fill your current weight"),desiredWeight:k().min(35,"Desired weight must be minimum 35 kg").max(270,"Desired weight must be no more then 270 kg").required("Please fill your desired weight"),blood:k().oneOf([1,2,3,4],"Please choose your blood type").required("Please choose your blood type"),sex:T().oneOf(["male","female"],"Please choose your gender").required("Please choose your gender"),levelActivity:k().oneOf([1,2,3,4,5],"Please choose your level activity").required("Please choose your level activity")}),f=r.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.5);

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-bottom: 8px;
  }
`,$=r(re)`
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
`,z=r($)`
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
`,Ee=r(z)`
  width: 161px;

  @media screen and (min-width: 768px) {
    width: 159px;
  }

  @media screen and (min-width: 1440px) {
    width: 159px;
  }
`,Le=r(z)`
  @media screen and (min-width: 768px) {
    width: 140px;
  }

  @media screen and (min-width: 1440px) {
    width: 140px;
  }
`,m=r.div`
  width: 160px;
  font-size: 10px;
  line-height: 1.2;
  color: ${a.colorSecondaryRed};
`,Fe=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Pe=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`;var Ye=Math.ceil,Ne=Math.max;function Me(e,i,n,c){for(var h=-1,l=Ne(Ye((i-e)/(n||1)),0),g=Array(l);l--;)g[c?l:++h]=e,e+=n;return g}var qe=Me;function Ge(e,i){return e===i||e!==e&&i!==i}var He=Ge,Qe=typeof _=="object"&&_&&_.Object===Object&&_,Ve=Qe,Xe=Ve,Je=typeof self=="object"&&self&&self.Object===Object&&self,Ke=Xe||Je||Function("return this")(),Ze=Ke,et=Ze,tt=et.Symbol,ne=tt,Y=ne,ae=Object.prototype,it=ae.hasOwnProperty,rt=ae.toString,A=Y?Y.toStringTag:void 0;function nt(e){var i=it.call(e,A),n=e[A];try{e[A]=void 0;var c=!0}catch{}var h=rt.call(e);return c&&(i?e[A]=n:delete e[A]),h}var at=nt,ot=Object.prototype,st=ot.toString;function ct(e){return st.call(e)}var dt=ct,N=ne,lt=at,pt=dt,xt="[object Null]",ht="[object Undefined]",M=N?N.toStringTag:void 0;function gt(e){return e==null?e===void 0?ht:xt:M&&M in Object(e)?lt(e):pt(e)}var oe=gt;function mt(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}var B=mt,ut=oe,ft=B,bt="[object AsyncFunction]",yt="[object Function]",vt="[object GeneratorFunction]",jt="[object Proxy]";function wt(e){if(!ft(e))return!1;var i=ut(e);return i==yt||i==vt||i==bt||i==jt}var kt=wt,At=9007199254740991;function St(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=At}var _t=St,Ct=kt,Wt=_t;function $t(e){return e!=null&&Wt(e.length)&&!Ct(e)}var zt=$t,Bt=9007199254740991,It=/^(?:0|[1-9]\d*)$/;function Tt(e,i){var n=typeof e;return i=i??Bt,!!i&&(n=="number"||n!="symbol"&&It.test(e))&&e>-1&&e%1==0&&e<i}var Ot=Tt,Ut=He,Dt=zt,Rt=Ot,Et=B;function Lt(e,i,n){if(!Et(n))return!1;var c=typeof i;return(c=="number"?Dt(n)&&Rt(i,n.length):c=="string"&&i in n)?Ut(n[i],e):!1}var Ft=Lt,Pt=/\s/;function Yt(e){for(var i=e.length;i--&&Pt.test(e.charAt(i)););return i}var Nt=Yt,Mt=Nt,qt=/^\s+/;function Gt(e){return e&&e.slice(0,Mt(e)+1).replace(qt,"")}var Ht=Gt;function Qt(e){return e!=null&&typeof e=="object"}var Vt=Qt,Xt=oe,Jt=Vt,Kt="[object Symbol]";function Zt(e){return typeof e=="symbol"||Jt(e)&&Xt(e)==Kt}var ei=Zt,ti=Ht,q=B,ii=ei,G=0/0,ri=/^[-+]0x[0-9a-f]+$/i,ni=/^0b[01]+$/i,ai=/^0o[0-7]+$/i,oi=parseInt;function si(e){if(typeof e=="number")return e;if(ii(e))return G;if(q(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=q(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=ti(e);var n=ni.test(e);return n||ai.test(e)?oi(e.slice(2),n?2:8):ri.test(e)?G:+e}var ci=si,di=ci,H=1/0,li=17976931348623157e292;function pi(e){if(!e)return e===0?e:0;if(e=di(e),e===H||e===-H){var i=e<0?-1:1;return i*li}return e===e?e:0}var xi=pi,hi=qe,gi=Ft,W=xi;function mi(e){return function(i,n,c){return c&&typeof c!="number"&&gi(i,n,c)&&(n=c=void 0),i=W(i),n===void 0?(n=i,i=0):n=W(n),c=c===void 0?i<n?1:-1:W(c),hi(i,n,c,e)}}var ui=mi,fi=ui,bi=fi(),yi=bi;const vi=le(yi),ji=r.div`
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
`,wi=r.button`
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
`,ki=r.svg`
  width: 18px;
  height: 18px;
  stroke: ${a.colorWhite};
  fill: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${a.colorOrange};
  }
`,Ai=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,Q=r.svg`
  width: 8px;
  height: 12px;
  stroke: ${a.colorWhite};
  fill: ${a.colorWhite};
  cursor: pointer;
`,Si=r.p`
  color: ${a.colorWhite};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`,V=r.select`
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
`,X=r.option`
  background-color: ${a.colorOrange};
  height: 2px;
`,_i=pe`
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
`,Ci=({onDateChange:e,savedBirthday:i})=>{const[n,c]=y.useState(i==="00.00.0000"?new Date:new Date(i)),h=vi(1950,U(new Date)+1,1),l=["January","February","March","April","May","June","July","August","September","October","November","December"],g=({date:p,decreaseMonth:v,increaseMonth:C,changeYear:s,changeMonth:d})=>t.jsxs(Ai,{children:[t.jsx(Q,{onClick:v,children:t.jsx("use",{href:b+"#icon-chevron-left"})}),t.jsxs(Si,{children:[t.jsx(V,{value:l[ve(p)],onChange:({target:{value:o}})=>d(l.indexOf(o)),children:l.map(o=>t.jsx(X,{value:o,children:o},o))}),t.jsx(V,{value:U(p),onChange:({target:{value:o}})=>s(o),children:h.map(o=>t.jsx(X,{value:o,children:o},o))})]}),t.jsx(Q,{onClick:C,children:t.jsx("use",{href:b+"#icon-chevron-right"})})]}),u=y.forwardRef(({onClick:p},v)=>t.jsx(ji,{children:t.jsxs(wi,{type:"button",onClick:p,ref:v,children:[be(n,"dd.MM.yyyy"),t.jsx(ki,{onClick:p,ref:v,children:t.jsx("use",{href:`${b}#icon-calendar`})})]})}));return u.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(ye,{selected:n,onChange:p=>{c(p),e(p)},customInput:t.jsx(u,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:p=>p.substr(0,2),renderCustomHeader:p=>t.jsx(g,{...p,value:i})}),t.jsx(_i,{})]})},Wi=({errors:e,touched:i,onDateChange:n,savedBirthday:c})=>t.jsxs(t.Fragment,{children:[t.jsxs(Pe,{children:[t.jsxs("label",{children:[t.jsx(f,{children:"Name "}),t.jsx($,{name:"name",type:"text",autoComplete:"off"}),e.name&&i.name&&t.jsx(m,{children:e.name})]}),t.jsxs("label",{children:[t.jsx(f,{children:"Email "}),t.jsx($,{style:{color:" rgba(239, 237, 232, 0.6)"},name:"email",type:"text",autoComplete:"off",disabled:!0}),e.email&&i.email&&t.jsx(m,{children:e.email})]})]}),t.jsxs(Fe,{children:[t.jsxs("label",{children:[t.jsx(f,{children:"Height "}),t.jsx(z,{name:"height",type:"number",placeholder:"0"}),e.height&&i.height&&t.jsx(m,{children:e.height})]}),t.jsxs("label",{children:[t.jsx(f,{children:"Current Weight "}),t.jsx(Ee,{name:"currentWeight",type:"number",placeholder:"0"}),e.currentWeight&&i.currentWeight&&t.jsx(m,{children:e.currentWeight})]}),t.jsxs("label",{children:[t.jsx(f,{children:" Desired Weight"}),t.jsx(Le,{name:"desiredWeight",type:"number",placeholder:"0"}),e.desiredWeight&&i.desiredWeight&&t.jsx(m,{children:e.desiredWeight})]}),t.jsxs("label",{children:[t.jsx(f,{children:"Date of birth "}),t.jsx(Ci,{savedBirthday:c,name:"birthday",onDateChange:n})]})]})]}),$i=r.label`
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
`,zi=r(re)`
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
`,Bi=r.span`
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
`,x=({name:e,value:i,text:n})=>t.jsxs($i,{children:[t.jsx(zi,{type:"radio",name:e,value:i}),t.jsx(Bi,{}),n]}),Ii=r.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,J=r.label`
  display: flex;
  flex-direction: column;
`,Ti=r.div`
  display: flex;

  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`,K=r.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`,Oi=r.div`
  margin-top: 20px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`,Ui=r.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 38px;
  padding-right: 10px;
`,Di=r.button`
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
`,Ri=()=>{const e=Z(),i=ee(te),[n,c]=y.useState(i.birthday||"00.00.0000"),[h,l]=y.useState(!0),g=s=>{const d=s.getDate(),o=s.getMonth()+1,j=s.getFullYear(),w=d<10?"0"+d:d,S=o<10?"0"+o:o;return`${w}.${S}.${j}`},u=s=>{const[d,o,j]=s.split("."),w=new Date(j,o-1,d);return new Date().getFullYear()-w.getFullYear()},p=s=>{const d=g(s);c(d),u(d)<18&&(O.error("Sorry, but only adults can use our app.",{theme:"dark"}),l(!0))},v=s=>{const d=Object.keys(s).some(o=>s[o]!==i[o]);l(!d)},C=s=>{const{name:d,height:o,currentWeight:j,desiredWeight:w,blood:S,sex:I,levelActivity:se}=s;if(u(n)<18){O.error("Sorry, but only adults can use our app.",{theme:"dark"}),l(!0);return}e(ge({userName:d,height:o,currentWeight:j,desiredWeight:w,birthday:n,blood:Number(S),sex:I,levelActivity:Number(se)})),l(!0),e(ie())};return t.jsx(Ii,{children:t.jsx(xe,{initialValues:i,validationSchema:Re,onSubmit:s=>{C(s)},children:({errors:s,touched:d})=>t.jsxs(he,{onChange:o=>v(o),children:[t.jsx(Wi,{errors:s,touched:d,onDateChange:p,savedBirthday:n}),t.jsxs(Oi,{children:[t.jsx(f,{children:"Blood"}),t.jsxs(Ti,{children:[t.jsxs(J,{children:[t.jsxs(K,{children:[t.jsx(x,{name:"blood",value:"1",text:"1"}),t.jsx(x,{name:"blood",value:"2",text:"2"}),t.jsx(x,{name:"blood",value:"3",text:"3"}),t.jsx(x,{name:"blood",value:"4",text:"4"})]}),s.blood&&d.blood&&t.jsx(m,{children:s.blood})]}),t.jsxs(J,{children:[t.jsxs(K,{children:[t.jsx(x,{name:"sex",value:"male",text:"Male"}),t.jsx(x,{name:"sex",value:"female",text:"Female"})]}),s.sex&&d.sex&&t.jsx(m,{children:s.sex})]})]})]}),t.jsxs(Ui,{children:[t.jsx(x,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),t.jsx(x,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),t.jsx(x,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),t.jsx(x,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),t.jsx(x,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"}),s.levelActivity&&d.levelActivity&&t.jsx(m,{children:s.levelActivity})]}),t.jsx(Di,{type:"submit",disabled:h,children:"Save"})]})})})},Ei=r.div`
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
`,Li=r.div`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }
`,Gi=()=>t.jsx(me,{children:t.jsxs(Li,{children:[t.jsx(ue,{contentText:"Profile Settings"}),t.jsxs(Ei,{children:[t.jsx(De,{}),t.jsx(Ri,{})]})]})});export{Gi as default};
