import{j as e,r as s,aJ as h,B as a,aB as m,aC as f,T as j,aK as y}from"./index-C6KZfdT0.js";import{a as v}from"./axios-BWYlR7gC.js";import{T as p}from"./TextField-LRRH-Lw2.js";import{B as C}from"./Button-iNozNWMr.js";import{C as w}from"./CircularProgress-Bl0nTlxR.js";import"./Select-CIAGasw8.js";const b=()=>e.jsx("div",{style:{position:"fixed",bottom:"10px",right:"10px",backgroundColor:"#fff",padding:"5px 10px",borderRadius:"5px",boxShadow:"0 2px 5px rgba(0, 0, 0, 0.1)",zIndex:1e3},children:e.jsxs("p",{style:{margin:0,fontSize:"14px",color:"#333"},children:["Version: ","1.3.1"]})}),T=()=>{const[o,c]=s.useState(""),[i,x]=s.useState(""),[n,l]=s.useState(!1),u=h(),g=async()=>{var t,d;l(!0);try{const r=await v.post("http://localhost:5000/api/user/login",{email:o,password:i},{withCredentials:!0});localStorage.setItem("user",JSON.stringify(r.data)),u("/dashboard")}catch(r){console.error("Error logging in:",((d=(t=r.response)==null?void 0:t.data)==null?void 0:d.message)||r.message),alert("Invalid email or password. Please try again.")}finally{l(!1)}};return e.jsxs(a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",p:2,children:[e.jsx(m,{sx:{width:{xs:"100%",sm:"400px"}},children:e.jsxs(f,{children:[e.jsx(j,{variant:"h5",gutterBottom:!0,children:"Login"}),e.jsxs(a,{component:"form",noValidate:!0,autoComplete:"off",mt:2,display:"flex",flexDirection:"column",gap:2,children:[e.jsx(p,{label:"Email Address",variant:"outlined",fullWidth:!0,value:o,onChange:t=>c(t.target.value),required:!0}),e.jsx(p,{label:"Password",type:"password",variant:"outlined",fullWidth:!0,value:i,onChange:t=>x(t.target.value),required:!0}),e.jsx(a,{display:"flex",justifyContent:"space-between",alignItems:"center",children:e.jsx(C,{variant:"contained",color:"primary",fullWidth:!0,onClick:g,disabled:n,children:n?e.jsx(w,{size:24,color:"inherit"}):"Login"})})]}),e.jsx(a,{mt:2,textAlign:"center",children:e.jsx(y,{href:"/forgot-password",variant:"body2",underline:"none",children:"Forgot Password?"})})]})}),e.jsx(b,{})]})};export{T as default};
