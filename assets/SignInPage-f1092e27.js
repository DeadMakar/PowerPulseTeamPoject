import{u as n,a as o,h as l,N as $,r as m,d as y,k as S,j as e,f as v,C}from"./index-a1a4f167.js";import{u as F}from"./formik.esm-b9c738da.js";import{c as z,a as x}from"./index.esm-b4193bdf.js";import{S as k}from"./StatisticsInfo-3aee1060.js";import{s}from"./sprite-b425b0d6.js";import"./bgMobile@2x-c00288ab.js";const I=n.div`
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) {
  }
`,R=n.div`
  padding: 24px 0;

  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 48%;
    margin-right: 178px;
  }
`,E=n.h2`
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
`,W=n.p`
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
`,P=n.form``,D=n.div`
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
`,L=n.button`
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
`,O=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,q=n.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,B=n($)`
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
`,T=n.div`
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
`,V=()=>{const[r,t]=m.useState(!1),[p,u]=m.useState(!1),b=a=>!["isValidationCompleted"].includes(a),j=y(),c=()=>{t(!r),u(!1)},i=F({initialValues:{email:"",password:""},validationSchema:z().shape({email:x().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:x().min(6,"at least 6 characters").required("Password is required")}),onSubmit:a=>{j(S({email:a.email,password:a.password})),i.resetForm()}});return e.jsx(v,{shouldForwardProp:b,children:e.jsx(C,{children:e.jsxs(I,{children:[e.jsxs(R,{children:[e.jsx(E,{children:"Sign in"}),e.jsx(W,{children:"Welcome! Please enter your credentials to login to the platform:"}),e.jsxs(P,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsx(g,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!p&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(w,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success email"]})})]}),e.jsxs(h,{children:[e.jsx(g,{id:"password",name:"password",type:r?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!p&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:r?e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye`})}):e.jsx(f,{onClick:c,children:e.jsx("use",{href:`${s}#icon-eye-off`})})}),i.touched.password&&e.jsx(w,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(d,{children:e.jsx("use",{href:`${s}#icon-green`})}),"Success password"]})})]})]}),e.jsx(L,{type:"Submit",children:"Sign In"})]}),e.jsxs(O,{children:[e.jsx(q,{children:"Don’t have an account?"}),e.jsx(B,{to:"/signup",children:"Sing Up"})]})]}),e.jsx(T,{children:e.jsx(k,{})})]})})})},H=()=>e.jsx(V,{});export{H as default};
