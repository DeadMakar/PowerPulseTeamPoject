import{u as o,a as n,k as p,N as S,r as f,b as v,m as C,d as F,n as k,j as e,i as z,C as I,L as R,s as t}from"./index-d728a368.js";import{u as E,c as L,a as c}from"./index.esm-fb31d8a7.js";import{S as W}from"./StatisticsInfo-10c447ff.js";import{L as P}from"./Logo-316d3361.js";import"./bgMobile@2x-c00288ab.js";const q=o.div`
  display: flex;
  position: relative;
`,T=o.div`
  padding: 24px 0;
  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 56%;
  }
`,B=o.h2`
  @media screen and (min-width: 320px) {
    color: ${n.colorWhite};
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
`,D=o.p`
  @media screen and (min-width: 320px) {
    width: 335px;
    color: ${n.colorInput};
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
    width: 496px;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`,O=o.form``,V=o.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,m=o.label`
  position: relative;
  border-radius: 12px;
  border: transparent;
  outline: transparent;
  width: 364px;
`,h=o.input`
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

    ${({haserror:r,isValidationCompleted:s})=>p`
      border: 1px solid
        ${r?`${n.colorSecondaryRed}`:s?`${n.colorSecondaryGreen}`:`${n.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:r,isValidationCompleted:s})=>p`
      border: 1px solid
        ${r?`${n.colorSecondaryRed}`:s?`${n.colorSecondaryGreen}`:`${n.colorInput}`};

      &:hover,
      &:focus {
        ${!s&&`
        border: 1px solid ${n.colorOrange};
      `}
      }
    `}
  }

  @media screen and (min-width: 768px) {
    width: 364px;
  }

  @media screen and (min-width: 1440px) {
    padding: 14px;
    border-radius: 12px;
    width: 364px;
    font-size: 16px;
    line-height: 24px;
    transition: border-color 0.3s;

    ${({haserror:r,isValidationCompleted:s})=>p`
      border: 1px solid
        ${r?`${n.colorSecondaryRed}`:s?`${n.colorSecondaryGreen}`:`${n.colorInput}`};

      &:hover,
      &:focus {
        ${!s&&`
        border: 1px solid ${n.colorOrange};
      `}
      }
    `}
  }
`,x=o.div`
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
`,a=o.svg`
  @media screen and (min-width: 320px) {
  }

  @media screen and (min-width: 375px) {
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
  width: 16px;
  height: 16px;
`,u=o.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${n.colorWhite};
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
`,N=o.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${n.colorOrange};
    color: ${n.colorWhite};
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
      background-color: ${n.colorOrange1};
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
      background-color: ${n.colorOrange1};
    }
  }
`,U=o.div`
  display: flex;
  align-items: center;
  gap: 5px;
`,A=o.p`
  color: rgba(239, 237, 232, 0.6);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`,G=o(S)`
  color: ${n.colorWhite};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  text-decoration-line: underline;
`,Z=o.div`
  @media screen and (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 45.9%;
    left: 17.1%;
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
    margin: 0;
  }
  @media screen and (min-width: 1440px) {
    width: 45%;
  }
`,_=()=>{const[r,s]=f.useState(!1),[l,w]=f.useState(!1),j=d=>!["isValidationCompleted","haserror"].includes(d),g=()=>{s(!r),w(!1)},b=v(C),$=F(),i=E({initialValues:{name:"",email:"",password:""},validationSchema:L().shape({name:c().required("Name is required"),email:c().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:c().min(6,"Enter a valid Password").required("Password is required")}),onSubmit:(d,{resetForm:y})=>{$(k({name:d.name,email:d.email,password:d.password})),b&&y()}});return e.jsx(z,{shouldForwardProp:j,children:e.jsx(I,{children:e.jsxs(q,{children:[e.jsxs(T,{children:[e.jsx(R,{to:"/",children:e.jsx(P,{})}),e.jsx(B,{children:"Sign up"}),e.jsx(D,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(O,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(V,{children:[e.jsxs(m,{children:[e.jsx(h,{id:"name",name:"name",type:"text",placeholder:"Name",onChange:i.handleChange,value:i.values.name,haserror:!l&&i.touched.name&&i.errors.name,isValidationCompleted:!i.errors.name&&i.touched.name}),i.touched.name&&e.jsx(x,{style:{color:i.errors.name?"#D80027":"#3CBF61"},children:i.errors.name?e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error name, ${i.errors.name}`]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success name"]})})]}),e.jsxs(m,{children:[e.jsx(h,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!l&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(x,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success email"]})})]}),e.jsxs(m,{children:[e.jsx(h,{id:"password",name:"password",type:r?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!l&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:r?e.jsx(u,{onClick:g,children:e.jsx("use",{href:`${t}#icon-eye`})}):e.jsx(u,{onClick:g,children:e.jsx("use",{href:`${t}#icon-eye-off`})})}),i.touched.password&&e.jsx(x,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success password"]})})]})]}),e.jsx(N,{type:"Submit",children:"Sign Up"})]}),e.jsxs(U,{children:[e.jsx(A,{children:"Already have an account?"}),e.jsx(G,{to:"/signin",children:"Sing In"})]})]}),e.jsx(Z,{children:e.jsx(W,{})})]})})})},X=()=>e.jsx(_,{});export{X as default};
