import{u as n,a as o,k as l,N as $,r as m,d as y,n as S,o as v,p as x,t as C,j as e,i as F,C as k,L as z,s}from"./index-19fad259.js";import{S as I}from"./StatisticsInfo-e81bd206.js";import{L as R}from"./Logo-8f1d7975.js";import"./bgMobile@2x-c00288ab.js";const E=n.div`
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) {
  }
`,L=n.div`
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 48%;
    margin-right: 178px;
  }
`,W=n.h2`
  @media screen and (min-width: 320px) {
    color: ${o.colorWhite};
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-top: 90px;
    margin-bottom: 14px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-top: 140px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 151px;
  }
`,P=n.p`
  @media screen and (min-width: 320px) {
    width: 335px;
    color: ${o.colorInput};
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 28px;
    position: sticky;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
    width: 496px;
  }

  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`,D=n.form``,O=n.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,h=n.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,g=n.input`
  @media screen and (min-width: 320px) {
    width: 300px;
    color: rgba(239, 237, 232, 0.6);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    background-color: transparent;
    outline: none;
    padding: 14px;
    border-radius: 12px;

    ${({haserror:r,isValidationCompleted:t})=>l`
      border: 1px solid
        ${r?`${o.colorSecondaryRed}`:t?`${o.colorSecondaryGreen}`:`${o.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${o.colorOrange};
      `}
      }
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:r,isValidationCompleted:t})=>l`
      border: 1px solid
        ${r?`${o.colorSecondaryRed}`:t?`${o.colorSecondaryGreen}`:`${o.colorInput}`};
    `}
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({haserror:r,isValidationCompleted:t})=>l`
      border: 1px solid
        ${r?`${o.colorSecondaryRed}`:t?`${o.colorSecondaryGreen}`:`${o.colorInput}`};

      &:hover,
      &:focus {
        ${!t&&`
        border: 1px solid ${o.colorOrange};
      `}
      }
    `}
  }
`,f=n.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${o.colorWhite};
  cursor: pointer;

  @media screen and (min-width: 320px) {
    top: 30%;
    right: 22%;
  }

  @media screen and (min-width: 375px) {
    top: 30%;
    right: 12%;
  }

  @media screen and (min-width: 768px) {
    right: 5%;
  }

  @media screen and (min-width: 1440px) {
  }
`,w=n.div`
  display: flex;
  gap: 4px;
  position: absolute;
  bottom: -35%;
  left: 0%;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.12px;
`,d=n.svg`
  width: 16px;
  height: 16px;
`,q=n.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${o.colorOrange};
    color: ${o.colorWhite};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    outline: none;
    border: transparent;
    margin-top: 28px;
    margin-bottom: 12px;

    &:hover,
    &:focus {
      background-color: ${o.colorOrange1};
    }
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    width: 190px;
    padding: 16px 60px;
    font-size: 20px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    width: 192px;

    &:hover,
    &:focus {
      background-color: ${o.colorOrange1};
    }
  }
`,B=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,T=n.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,V=n($)`
  color: ${o.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,G=n.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 55%;
    left: 17.1%;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }
  @media screen and (min-width: 1440px) {
    width: 52%;
  }
`,A=()=>{const[r,t]=m.useState(!1),[p,u]=m.useState(!1),b=a=>!["isValidationCompleted"].includes(a),j=y(),c=()=>{t(!r),u(!1)},i=S({initialValues:{email:"",password:""},validationSchema:v().shape({email:x().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:x().min(6,"at least 6 characters").required("Password is required")}),onSubmit:a=>{j(C({email:a.email,password:a.password})),i.resetForm()}});return e.jsx(F,{shouldForwardProp:b,children:e.jsx(k,{children:e.jsxs(E,{children:[e.jsxs(L,{children:[e.jsx(z,{to:"/",children:e.jsx(R,{})}),e.jsx(W,{children:"Sign in"}),e.jsx(P,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(D,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(O,{children:[e.jsxs(h,{children:[e.jsx(g,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!p&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(w,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success email"]})})]}),e.jsxs(h,{children:[e.jsx(g,{id:"password",name:"password",type:r?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!p&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:r?e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye`})}):e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye-off`})})}),i.touched.password&&e.jsx(w,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success password"]})})]})]}),e.jsx(q,{type:"Submit",children:"Sign In"})]}),e.jsxs(B,{children:[e.jsx(T,{children:"Don’t have an account?"}),e.jsx(V,{to:"/signup",children:"Sing Up"})]})]}),e.jsx(G,{children:e.jsx(I,{})})]})})})},H=()=>e.jsx(A,{});export{H as default};
