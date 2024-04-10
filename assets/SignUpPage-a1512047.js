import{u as o,a as r,k as p,N as S,r as u,b as v,m as C,d as F,n as N,j as e,i as k,C as z,L as I,s as t}from"./index-486639af.js";import{u as R,c as E,a as c}from"./index.esm-e528de55.js";import{S as L}from"./StatisticsInfo-af5c4836.js";import{L as W}from"./Logo-49e10bc2.js";import"./bgMobile@2x-c00288ab.js";const P=o.div`
  display: flex;
  position: relative;
`,q=o.div`
  padding: 24px 0;
  @media screen and (min-width: 768px) {
    padding: 32px 0;
  }
  @media screen and (min-width: 1440px) {
    width: 56%;
  }
`,T=o.h2`
  @media screen and (min-width: 320px) {
    color: ${r.colorWhite};
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
`,B=o.p`
  @media screen and (min-width: 320px) {
    width: 335px;
    color: ${r.colorInput};
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
`,D=o.form``,O=o.div`
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

    ${({haserror:n,isValidationCompleted:s})=>p`
      border: 1px solid
        ${n?`${r.colorSecondaryRed}`:s?`${r.colorSecondaryGreen}`:`${r.colorInput}`};
    `}
  }

  @media screen and (min-width: 375px) {
    width: 335px;
    ${({haserror:n,isValidationCompleted:s})=>p`
      border: 1px solid
        ${n?`${r.colorSecondaryRed}`:s?`${r.colorSecondaryGreen}`:`${r.colorInput}`};

      &:hover,
      &:focus {
        ${!s&&`
        border: 1px solid ${r.colorOrange};
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

    ${({haserror:n,isValidationCompleted:s})=>p`
      border: 1px solid
        ${n?`${r.colorSecondaryRed}`:s?`${r.colorSecondaryGreen}`:`${r.colorInput}`};

      &:hover,
      &:focus {
        ${!s&&`
        border: 1px solid ${r.colorOrange};
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
`,f=o.svg`
  position: absolute;
  width: 20px;
  height: 20px;
  fill: ${r.colorWhite};
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
`,V=o.button`
  @media screen and (min-width: 320px) {
    position: sticky;
    display: flex;
    padding: 12px 40px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 140px;
    border-radius: 12px;
    background-color: ${r.colorOrange};
    color: ${r.colorWhite};
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
      background-color: ${r.colorOrange1};
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
      background-color: ${r.colorOrange1};
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
  color: ${r.colorWhite};
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
`,_=()=>{const[n,s]=u.useState(!1),[l,w]=u.useState(!1),j=d=>!["isValidationCompleted","haserror"].includes(d),g=()=>{s(!n),w(!1)},b=v(C),$=F(),i=R({initialValues:{userName:"",email:"",password:""},validationSchema:E().shape({userName:c().required("Name is required"),email:c().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Example: test@gmail.com").email("Invalid email").required("Email is required"),password:c().min(6,"Enter a valid Password").required("Password is required")}),onSubmit:(d,{resetForm:y})=>{$(N({userName:d.userName,email:d.email,password:d.password})),b&&y()}});return e.jsx(k,{shouldForwardProp:j,children:e.jsx(z,{children:e.jsxs(P,{children:[e.jsxs(q,{children:[e.jsx(I,{to:"/",children:e.jsx(W,{})}),e.jsx(T,{children:"Sign up"}),e.jsx(B,{children:"Thank you for your interest in our platform. To complete the registration process, please provide us with the following information."}),e.jsxs(D,{autoComplete:"off",onSubmit:i.handleSubmit,children:[e.jsxs(O,{children:[e.jsxs(m,{children:[e.jsx(h,{id:"name",name:"userName",type:"text",placeholder:"Name",onChange:i.handleChange,value:i.values.userName,haserror:!l&&i.touched.userName&&i.errors.userName,isValidationCompleted:!i.errors.userName&&i.touched.userName}),i.touched.userName&&e.jsx(x,{style:{color:i.errors.userName?"#D80027":"#3CBF61"},children:i.errors.userName?e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error name, ${i.errors.userName}`]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success name"]})})]}),e.jsxs(m,{children:[e.jsx(h,{id:"email",name:"email",type:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,haserror:!l&&i.touched.email&&i.errors.email,isValidationCompleted:!i.errors.email&&i.touched.email}),i.touched.email&&e.jsx(x,{style:{color:i.errors.email?"#D80027":"#3CBF61"},children:i.errors.email?e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error email. ${i.errors.email}`]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success email"]})})]}),e.jsxs(m,{children:[e.jsx(h,{id:"password",name:"password",type:n?"text":"password",placeholder:"Password",onChange:i.handleChange,value:i.values.password,haserror:!l&&i.touched.password&&i.errors.password,isValidationCompleted:!i.errors.password&&i.touched.password}),e.jsx(e.Fragment,{children:n?e.jsx(f,{onClick:g,children:e.jsx("use",{href:`${t}#icon-eye`})}):e.jsx(f,{onClick:g,children:e.jsx("use",{href:`${t}#icon-eye-off`})})}),i.touched.password&&e.jsx(x,{style:{color:i.errors.password?"#D80027":"#3CBF61"},children:i.errors.password?e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-red`})}),`Error password, ${i.errors.password}`]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsx("use",{href:`${t}#icon-green`})}),"Success password"]})})]})]}),e.jsx(V,{type:"Submit",children:"Sign Up"})]}),e.jsxs(U,{children:[e.jsx(A,{children:"Already have an account?"}),e.jsx(G,{to:"/signin",children:"Sing In"})]})]}),e.jsx(Z,{children:e.jsx(L,{})})]})})})},X=()=>e.jsx(_,{});export{X as default};
