// import React, { useState } from 'react'
// import Input from '../resueable/input'
// import Button from '../resueable/button'

// const Login = () => {
//     const[formData,setFormData]=useState({email:"",password:""})
//     const inputValue=(e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value});

//     }

//     const loginclick=()=>{
// let storage=localStorage.getItem("users")
// if(storage){
//     let parseData=JSON.parse(storage)
//     let  isUserExist=parseData.find((val)=>{
//         return val.email==formData.email
//     })

//     if(isUserExist){
//         if(formData.password==isUserExist.password){
//             localStorage.setItem("[is user loged in.......",true)
//             alert("users has been loged")
//         }else{
//             alert("invail password")
//         }

//     }else{
//         alert("np record found")
//     }
// }else{
//     alert("no record found")
// }
//     }
//     console.log(formData)
//   return (
// <>
// <Input inputtype="email" inputname="email" changeevent={inputValue} placeholder="enter your name"/>
// <Input inputtype="password" inputname="password" changeevent={inputValue} placeholder="enter your name"/>


// <Button btntext="signup" btnclickevent={loginclick} />
//    </>
//   )
// }

// export default Login

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '../resueable/button';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});
const Login = () => {
  const handleLogin = (values) => {
    let storage = localStorage.getItem("users");
    if (storage) {
      let parseData = JSON.parse(storage);
      let isUserExist = parseData.find((val) => {
        return val.email === values.email;
      });

      if (isUserExist) {
        if (values.password === isUserExist.password) {
          localStorage.setItem("isUserLoggedIn", true);
          alert("User has been logged in");
        } else {
          alert("Invalid password");
        }
      } else {
        alert("No record found");
      }
    } else {
      alert("No records found");
    }
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
  };

  const formControlStyle = {
    padding: '8px',
    borderRadius: '10px',
    width: '95%',
    border: '2px solid #ccc',
    marginBottom: '10px',
    fontSize: '14px',
  };
  
  const errorStyle = {
    color: 'red',
    marginTop: '5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    background: '#0056b3',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{textAlign:"center"}}>Login</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              style={formControlStyle}
            />
            <ErrorMessage name="email" component="div" className="error" style={errorStyle} />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              style={formControlStyle}
            />
            <ErrorMessage name="password" component="div" className="error" style={errorStyle} />
            <Button
              type="submit"
              btntext="Login"
              disabled={isSubmitting}
              style={buttonStyle}
              hoverStyle={buttonHoverStyle}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
