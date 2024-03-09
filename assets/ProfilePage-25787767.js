import{u as r,a,b as I,d as te,m as ie,r as f,n as ce,o as B,j as t,c as _,g as de,p as le,B as U,q as pe,C as xe}from"./index-7a87f269.js";import{T as he}from"./TitlePage-65212c44.js";import{s as u}from"./sprite-2052518c.js";import{b as ge}from"./LogOutBtn-31483304.js";import{c as me,a as E,b as k,F as re,d as fe,e as be}from"./index.esm-b5cd3113.js";import{g as R,f as ue,i as ye,a as ve}from"./index-671c2725.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const je=r.div`
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
`,We=r.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    gap: 8px;
  }
`,Ce=r.p`
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
`,F=r.li`
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
`,L=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,P=r.h2`
  font-size: 12px;
  line-height: 1.33;
  color: rgba(239, 237, 232, 0.8);

  @media screen and (min-width: 768px) {
    text-wrap: nowrap;
    line-height: 1.5;
  }
`,N=r.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.11;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.33;
  }
`,Ie=r.div`
  width: 24px;
  height: 24px;
  background-color: ${a.colorBeige};
  border-radius: 50%;
`,Y=r.svg`
  width: 20px;
  height: 20px;
  fill: ${a.colorOrange1};
`,Be=r.svg`
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
`,De=r.div`
  display: flex;
  align-items: end;
  justify-content: end;
  margin-top: 57px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`,Ue="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGcAAABmCAYAAADWHY9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUuSURBVHgB7d3dTttIFAfw8WccOw6OMGxBSNsiEN2+wd7Bc+zL7LvsxUr7EvRqr3YvYTciol0VIW2AJiWNY3v8UR/cSDRS1KaMPcdwfjdFqoqD/4w9X2fKGCGEEEIIIYQQQgghhBBCCCHkuyisoc7Ozlrr66qlaaYWhtxQVV2b/12WJWma8tSydH5zk4X7+/sRa6BGhZPnuXp93XcYszqMqd/82SGszU374+vX/0RHR0cJa4jGhDMcnnQUxXFXCWVR2aKsyfb2dsAaAH04x8fH+sHBtmcYbZMJwvks7vcvx9hbEepwIJhXr35cv/8+EQVa0enpfzeYA0IbTpXBzGEPCGU48OIfDt9sVBnMXNlZeHGlKErGkFEZQqPRuVtHMACuA9djCKELBx5naWo4rEZwPRg3MWTQhQM9MyaB42ToWg+qcE5O/jBFdplXAdfF1npQhdPpvKz1cbYIpoMYIqjCsayOlFYzZ5pumyGCJhx4pNXVQ1tmNgvVohsv9TPchyacbncHy00xGBJowmm11pCE8z+1nEWKsolituL6WkNzT1DOEJASmnDyfJgzBHw/RTPHhiacKPqQMhR+QPI5EIWzs/NzzHCgcBYVU/bFTcmkPtpg+aD4HJwhgapDoGmp1LV90+yh2qWDKhzYxsQk8jxvyhBBFQ7sL4PNF0wCzvUY0yMNoBvnTKfqhEmwtbU1YsigCwdaj6bxWh8vcL2yQ4ILyhmCXu+3CfScWA3gOr3erpTW+jVot0bB1P1w+MavemvU5uaLa4ytBqDeVFhlQNiDAagnPuHGwQ0U3YODnhn2YEBjNrJfXl7amhY+cD9blvu+dasoz1CNZ5ZpWgmIdnV12s7ztrNaSDAt5Hz0fX+KcWfnMo0vngrDtqEVVDW6VzzVSi0r5mkap00uniKEEELq0rgOQVmGeGDq+kjVdUubTKaq5/WU6TT4YszGeZS6rpMlSZhubNgJY89RLaR9C+wzBMUNf2uORlnLMGwzDCP9IQW7AAa0UALf66lFD+55jLlrjS4cCKQYy9hJolt1VByUsw9u0O/3Y2zlh2jCgXEL1MjIKgEB86CwlMJLDed7D32oGpbzCqTdkKurf11soSySHVLtNwYeX92u5sku91iFrJBqCwceYbe3F14c56iqx1YRBOPZ+fnNpK6OQy3hNLG1LPN5ke59HWOmysMpDxRyu+zRCSYbGy8r3XtQaTjlS99GeQCDGNUGVFk4jz+YueoCqiScpxPMXDUBCd/gAWv9TysYYLvlzy2W0HBgxtgw4jX2BHW7ehd+fiaQ0HB2d9ddzCP+KsEZBqLP7REWDoxlbNtDdQJG3USfnyMsnHY76TAi9PQpIeHk+a9qq+WgO69MBmg95SLhwwn5JoPBL2iOJEFCyJqUkHDW1mIK5wtijmgREg6Wo1GwEHVEi5BvMh6PsZwhgILv+0JmrIWEI7PQFhvLMnixnCCkKlxYV3pr6/f3pqlILVWXDep+Op1nN0wQ4e8KMXU0zVLVMnZlL/J37/5sdzo/tZLkQ/txTulkeRAoYRzHQVUlJrUtU89raYqJUaOZYWU55ya3rNndf5i0t7fHq94tKuUm5flfxsVFrFvWvm6aoTGbRbqmwWMQQ2hZnqZJGkUGd90kK36huKzdoKh+g8tpj7+1wWBNdRxHK5rZ3XsrCALd81RlOi3HD1DJNv839yvaFkGF2/zr4qVw9zXn/O5P27YTOIAvSXpZmr7NB4OIHx4eZk0qSySEEEIIIYQQQgghhBBCCCGELPEJ3h5PPY4a9AgAAAAASUVORK5CYII=",Ee=()=>{const e=I(),i=te(ie),[n,s]=f.useState(null),[h,l]=f.useState((i==null?void 0:i.avatarURL)??Ue),p=new FileReader;return p.onloadend=()=>{l(p.result)},f.useEffect(()=>{n&&(l(URL.createObjectURL(n)),p.readAsDataURL(n),e(ce(n)),e(B()))},[n]),t.jsxs(je,{children:[t.jsxs(we,{children:[t.jsx(ke,{id:"image-file",type:"file",accept:"image/*",src:h,alt:"User avatar image",onChange:y=>s(y.target.files[0])}),t.jsx(Ae,{htmlFor:"image-file",children:t.jsx(Se,{children:t.jsx("use",{href:`${u}#icon-check-mark-1`})})}),t.jsx(_e,{src:h,alt:"User avatar image"})]}),t.jsxs(We,{children:[t.jsxs(Ce,{children:[" ",i==null?void 0:i.userName]}),t.jsx($e,{children:"User"})]}),t.jsxs(ze,{children:[t.jsxs(F,{children:[t.jsxs(L,{children:[t.jsx(Y,{children:t.jsx("use",{href:`${u}#icon-fluent_food-24-filled`})}),t.jsx(P,{children:"Daily calorie intake"})]}),t.jsx(N,{children:(i==null?void 0:i.resultBMR)??"0"})]}),t.jsxs(F,{children:[t.jsxs(L,{children:[t.jsx(Y,{children:t.jsx("use",{href:u+"#icon-dumbbell"})}),t.jsx(P,{children:"Daily physical activity"})]}),t.jsxs(N,{children:[(i==null?void 0:i.trainingTime)??"110"," min"]})]})]}),t.jsxs("div",{children:[t.jsxs(Oe,{children:[t.jsx(Ie,{children:t.jsx(Be,{children:t.jsx("use",{href:u+"#icon-exclamation-mark"})})}),t.jsx(Te,{children:"We understand that each individual is unique, so the entire approach to diet is relative and tailored to your unique body and goals."})]}),t.jsx(De,{children:t.jsx(ge,{colorSvg:"#E6533C"})})]})]})},Re=me().shape({name:E().required("Name is required"),height:k().min(150,"Height must be minimum 150 cm").max(300,"The value must be no more then 300 cm").required("Please fill your height"),currentWeight:k().min(35,"Current weight must be minimum 35 kg").max(270,"The value must be no more then 270 kg").required("Please fill your current weight"),desiredWeight:k().min(35,"Desired weight must be minimum 35 kg").max(270,"Desired weight must be no more then 270 kg").required("Please fill your desired weight"),blood:k().oneOf([1,2,3,4],"Please choose your blood type").required("Please choose your blood type"),sex:E().oneOf(["male","female"],"Please choose your gender").required("Please choose your gender"),levelActivity:k().oneOf([1,2,3,4,5],"Please choose your level activity").required("Please choose your level activity")}),b=r.p`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(239, 237, 232, 0.5);

  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
    margin-bottom: 8px;
  }
`,z=r(re)`
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
`,T=r(z)`
  width: 160px;
  margin: 0;

  @media screen and (min-width: 768px) {
    width: 168px;
    height: 52px;
  }

  @media screen and (min-width: 1440px) {
    width: 168px;
  }
`,Fe=r(T)`
  width: 161px;

  @media screen and (min-width: 768px) {
    width: 159px;
  }

  @media screen and (min-width: 1440px) {
    width: 159px;
  }
`,Le=r(T)`
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
`,Pe=r.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 14px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`,Ne=r.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
`;var Ye=Math.ceil,Me=Math.max;function qe(e,i,n,s){for(var h=-1,l=Me(Ye((i-e)/(n||1)),0),p=Array(l);l--;)p[s?l:++h]=e,e+=n;return p}var Ge=qe;function He(e,i){return e===i||e!==e&&i!==i}var Qe=He,Ve=typeof _=="object"&&_&&_.Object===Object&&_,Xe=Ve,Je=Xe,Ke=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Je||Ke||Function("return this")(),et=Ze,tt=et,it=tt.Symbol,ne=it,M=ne,ae=Object.prototype,rt=ae.hasOwnProperty,nt=ae.toString,A=M?M.toStringTag:void 0;function at(e){var i=rt.call(e,A),n=e[A];try{e[A]=void 0;var s=!0}catch{}var h=nt.call(e);return s&&(i?e[A]=n:delete e[A]),h}var ot=at,st=Object.prototype,ct=st.toString;function dt(e){return ct.call(e)}var lt=dt,q=ne,pt=ot,xt=lt,ht="[object Null]",gt="[object Undefined]",G=q?q.toStringTag:void 0;function mt(e){return e==null?e===void 0?gt:ht:G&&G in Object(e)?pt(e):xt(e)}var oe=mt;function ft(e){var i=typeof e;return e!=null&&(i=="object"||i=="function")}var O=ft,bt=oe,ut=O,yt="[object AsyncFunction]",vt="[object Function]",jt="[object GeneratorFunction]",wt="[object Proxy]";function kt(e){if(!ut(e))return!1;var i=bt(e);return i==vt||i==jt||i==yt||i==wt}var At=kt,St=9007199254740991;function _t(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=St}var Wt=_t,Ct=At,$t=Wt;function zt(e){return e!=null&&$t(e.length)&&!Ct(e)}var It=zt,Bt=9007199254740991,Tt=/^(?:0|[1-9]\d*)$/;function Ot(e,i){var n=typeof e;return i=i??Bt,!!i&&(n=="number"||n!="symbol"&&Tt.test(e))&&e>-1&&e%1==0&&e<i}var Dt=Ot,Ut=Qe,Et=It,Rt=Dt,Ft=O;function Lt(e,i,n){if(!Ft(n))return!1;var s=typeof i;return(s=="number"?Et(n)&&Rt(i,n.length):s=="string"&&i in n)?Ut(n[i],e):!1}var Pt=Lt,Nt=/\s/;function Yt(e){for(var i=e.length;i--&&Nt.test(e.charAt(i)););return i}var Mt=Yt,qt=Mt,Gt=/^\s+/;function Ht(e){return e&&e.slice(0,qt(e)+1).replace(Gt,"")}var Qt=Ht;function Vt(e){return e!=null&&typeof e=="object"}var Xt=Vt,Jt=oe,Kt=Xt,Zt="[object Symbol]";function ei(e){return typeof e=="symbol"||Kt(e)&&Jt(e)==Zt}var ti=ei,ii=Qt,H=O,ri=ti,Q=0/0,ni=/^[-+]0x[0-9a-f]+$/i,ai=/^0b[01]+$/i,oi=/^0o[0-7]+$/i,si=parseInt;function ci(e){if(typeof e=="number")return e;if(ri(e))return Q;if(H(e)){var i=typeof e.valueOf=="function"?e.valueOf():e;e=H(i)?i+"":i}if(typeof e!="string")return e===0?e:+e;e=ii(e);var n=ai.test(e);return n||oi.test(e)?si(e.slice(2),n?2:8):ni.test(e)?Q:+e}var di=ci,li=di,V=1/0,pi=17976931348623157e292;function xi(e){if(!e)return e===0?e:0;if(e=li(e),e===V||e===-V){var i=e<0?-1:1;return i*pi}return e===e?e:0}var hi=xi,gi=Ge,mi=Pt,$=hi;function fi(e){return function(i,n,s){return s&&typeof s!="number"&&mi(i,n,s)&&(n=s=void 0),i=$(i),n===void 0?(n=i,i=0):n=$(n),s=s===void 0?i<n?1:-1:$(s),gi(i,n,s,e)}}var bi=fi,ui=bi,yi=ui(),vi=yi;const ji=de(vi),wi=r.div`
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
`,ki=r.button`
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
`,Ai=r.svg`
  width: 18px;
  height: 18px;
  stroke: ${a.colorWhite};
  fill: transparent;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    stroke: ${a.colorOrange};
  }
`,Si=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,X=r.svg`
  width: 8px;
  height: 12px;
  stroke: ${a.colorWhite};
  fill: ${a.colorWhite};
  cursor: pointer;
`,_i=r.p`
  color: ${a.colorWhite};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.32px;
`,J=r.select`
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
`,K=r.option`
  background-color: ${a.colorOrange};
  height: 2px;
`,Wi=le`
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
`,Ci=({onDateChange:e,savedBirthday:i})=>{const[n,s]=f.useState(i==="00.00.0000"?new Date:new Date(i)),h=ji(1950,R(new Date)+1,1),l=["January","February","March","April","May","June","July","August","September","October","November","December"],p=({date:d,decreaseMonth:v,increaseMonth:W,changeYear:C,changeMonth:c})=>t.jsxs(Si,{children:[t.jsx(X,{onClick:v,children:t.jsx("use",{href:u+"#icon-chevron-left"})}),t.jsxs(_i,{children:[t.jsx(J,{value:l[ve(d)],onChange:({target:{value:o}})=>c(l.indexOf(o)),children:l.map(o=>t.jsx(K,{value:o,children:o},o))}),t.jsx(J,{value:R(d),onChange:({target:{value:o}})=>C(o),children:h.map(o=>t.jsx(K,{value:o,children:o},o))})]}),t.jsx(X,{onClick:W,children:t.jsx("use",{href:u+"#icon-chevron-right"})})]}),y=f.forwardRef(({onClick:d},v)=>t.jsx(wi,{children:t.jsxs(ki,{type:"button",onClick:d,ref:v,children:[ue(n,"dd.MM.yyyy"),t.jsx(Ai,{onClick:d,ref:v,children:t.jsx("use",{href:`${u}#icon-calendar`})})]})}));return y.displayName="CustomInput",t.jsxs(t.Fragment,{children:[t.jsx(ye,{selected:n,onChange:d=>{s(d),e(d)},customInput:t.jsx(y,{}),dateFormat:"dd.MM.yyyy",calendarStartDay:1,formatWeekDay:d=>d.substr(0,2),renderCustomHeader:d=>t.jsx(p,{...d,value:i})}),t.jsx(Wi,{})]})},$i=({errors:e,touched:i,onDateChange:n,savedBirthday:s,userEmail:h})=>t.jsxs(t.Fragment,{children:[t.jsxs(Ne,{children:[t.jsxs("label",{children:[t.jsx(b,{children:"Name "}),t.jsx(z,{name:"name",type:"text",autoComplete:"off"}),e.name&&i.name&&t.jsx(m,{children:e.name})]}),t.jsxs("label",{children:[t.jsx(b,{children:"Email "}),t.jsx(z,{style:{color:" rgba(239, 237, 232, 0.6)"},name:"email",type:"text",autoComplete:"off",disabled:!0,value:h}),e.email&&i.email&&t.jsx(m,{children:e.email})]})]}),t.jsxs(Pe,{children:[t.jsxs("label",{children:[t.jsx(b,{children:"Height "}),t.jsx(T,{name:"height",type:"number"}),e.height&&i.height&&t.jsx(m,{children:e.height})]}),t.jsxs("label",{children:[t.jsx(b,{children:"Current Weight "}),t.jsx(Fe,{name:"currentWeight",type:"number"}),e.currentWeight&&i.currentWeight&&t.jsx(m,{children:e.currentWeight})]}),t.jsxs("label",{children:[t.jsx(b,{children:" Desired Weight"}),t.jsx(Le,{name:"desiredWeight",type:"number"}),e.desiredWeight&&i.desiredWeight&&t.jsx(m,{children:e.desiredWeight})]}),t.jsxs("label",{children:[t.jsx(b,{children:"Date of birth "}),t.jsx(Ci,{savedBirthday:s,name:"birthday",onDateChange:n})]})]})]}),zi=r.label`
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
`,Ii=r(re)`
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
`,g=({name:e,value:i,text:n})=>t.jsxs(zi,{children:[t.jsx(Ii,{type:"radio",name:e,value:i}),t.jsx(Bi,{}),n]}),Ti=r.div`
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 36px;
  }

  @media (min-width: 1440px) {
    margin-top: 0;
  }
`,Z=r.label`
  display: flex;
  flex-direction: column;
`,Oi=r.div`
  display: flex;

  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`,ee=r.div`
  display: flex;
  gap: 8px;
  flex-direction: row;
`,Di=r.div`
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
`,Ei=r.button`
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
`,Ri=()=>{const e=I(),i=te(ie),n={name:(i==null?void 0:i.userName)??"",email:i==null?void 0:i.email,height:(i==null?void 0:i.height)??0,currentWeight:(i==null?void 0:i.currentWeight)??0,desiredWeight:(i==null?void 0:i.desiredWeight)??0,blood:i!=null&&i.blood?i==null?void 0:i.blood.toString():0,sex:(i==null?void 0:i.sex)??0,levelActivity:i!=null&&i.levelActivity?i==null?void 0:i.levelActivity.toString():0},[s,h]=f.useState((i==null?void 0:i.birthday)||"00.00.0000"),[l,p]=f.useState(!0),y=c=>{const o=c.getDate(),x=c.getMonth()+1,j=c.getFullYear(),w=o<10?"0"+o:o,S=x<10?"0"+x:x;return`${w}.${S}.${j}`},d=c=>{const[o,x,j]=c.split("."),w=new Date(j,x-1,o);return new Date().getFullYear()-w.getFullYear()},v=c=>{const o=y(c);h(o),d(o)<18&&(U.error("Sorry, but only adults can use our app.",{theme:"dark"}),p(!0))},W=c=>{const o=Object.keys(c).some(x=>c[x]!==n[x]);p(!o)},C=c=>{const{name:o,height:x,currentWeight:j,desiredWeight:w,blood:S,sex:D,levelActivity:se}=c;if(d(s)<18){U.error("Sorry, but only adults can use our app.",{theme:"dark"}),p(!0);return}e(pe({userName:o,height:x,currentWeight:j,desiredWeight:w,birthday:s,blood:Number(S),sex:D,levelActivity:Number(se)})),p(!0),e(B())};return t.jsx(Ti,{children:t.jsx(fe,{initialValues:n,validationSchema:Re,onSubmit:c=>{C(c)},children:({errors:c,touched:o})=>t.jsxs(be,{onChange:x=>W(x),children:[t.jsx($i,{errors:c,touched:o,onDateChange:v,savedBirthday:s,userEmail:n.email}),t.jsxs(Di,{children:[t.jsx(b,{children:"Blood"}),t.jsxs(Oi,{children:[t.jsxs(Z,{children:[t.jsxs(ee,{children:[t.jsx(g,{name:"blood",value:"1",text:"1"}),t.jsx(g,{name:"blood",value:"2",text:"2"}),t.jsx(g,{name:"blood",value:"3",text:"3"}),t.jsx(g,{name:"blood",value:"4",text:"4"})]}),c.blood&&o.blood&&t.jsx(m,{children:c.blood})]}),t.jsxs(Z,{children:[t.jsxs(ee,{children:[t.jsx(g,{name:"sex",value:"male",text:"Male"}),t.jsx(g,{name:"sex",value:"female",text:"Female"})]}),c.sex&&o.sex&&t.jsx(m,{children:c.sex})]})]})]}),t.jsxs(Ui,{children:[t.jsx(g,{name:"levelActivity",value:"1",text:"Sedentary lifestyle (little or no physical activity)"}),t.jsx(g,{name:"levelActivity",value:"2",text:"Light activity (light exercises/sports 1-3 days per week)"}),t.jsx(g,{name:"levelActivity",value:"3",text:"Moderately active (moderate exercises/sports 3-5 days per week)"}),t.jsx(g,{name:"levelActivity",value:"4",text:"Very active (intense exercises/sports 6-7 days per week)"}),t.jsx(g,{name:"levelActivity",value:"5",text:"Extremely active (very strenuous exercises/sports and physical work)"}),c.levelActivity&&o.levelActivity&&t.jsx(m,{children:c.levelActivity})]}),t.jsx(Ei,{type:"submit",disabled:l,children:"Save"})]})})})},Fi=r.div`
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
`,Vi=()=>{const e=I();return f.useEffect(()=>{e(B())},[e]),t.jsx(xe,{children:t.jsxs(Li,{children:[t.jsx(he,{contentText:"Profile Settings"}),t.jsxs(Fi,{children:[t.jsx(Ee,{}),t.jsx(Ri,{})]})]})})};export{Vi as default};
