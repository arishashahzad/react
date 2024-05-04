// import React, { useState } from 'react'
// import Button from '../resueable/button'
// import Input from '../resueable/input'
// const Signup = () => {
//     const[formData,setFormData]=useState({fname:"",lname:"",email:"",password:""})

//     const changeEvent=(e)=>{
//         setFormData({...formData,[e.target.name]:e.target.value});

//     }
   


//     const btnclickevent=()=>{
//            let storage=localStorage.getItem("users")
//            if(storage){
//             let parseData=JSON.parse(storage)
//             let isUserExist=parseData.find((val)=>{
//                 return val.email.toLowerCase()==formData.email.toLowerCase()
//             })

//             if(isUserExist){
//                 alert("users alerady exist")
//             }else{
//                 localStorage.setItem("users",JSON.stringify([...parseData,formData]))
//                 alert("user has been created")
//             }

//            } else{

//             localStorage.setItem("users",JSON.stringify([formData]))
//             alert("users has been created")
//            }
//     }
//   return (
//    <>
   
// <Input inputtype="fname" inputname="text" changeevent={changeEvent} placeholder="enter your name"/>
// <Input inputtype="lname" inputname="text" changeevent={changeEvent} placeholder="enter your name"/>
// <Input inputtype="email" inputname="email" changeevent={changeEvent} placeholder="enter your name"/>
// <Input inputtype="password" inputname="password" changeevent={changeEvent} placeholder="enter your name"/>


// <Button btntext="signup" btnclickevent={btnclickevent} />
//    </>
//   )
// }



// export default Signup

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../resueable/button';

const Signup = () => {

    const validationSchema= Yup.object().shape({
        fname: Yup.string()
          .min(5, 'Name must be at least 2 characters')
          .max(70, 'Name must be at most 70 characters')
          .required(' full Name is required'),
          lname: Yup.string()
          .min(5, 'Name must be at least 2 characters')
          .max(70, 'Name must be at most 70 characters')
          .required(' last Name is required'),
        email: Yup.string()
          .email('Invalid email')
          .required('Email is required'),
        password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
     
     
      });


  const btnclickevent = async (formData) => {
    let storage=localStorage.getItem("users")
               if(storage){
                let parseData=JSON.parse(storage)
                let isUserExist=parseData.find((val)=>{
                    return val.email.toLowerCase()==formData.email.toLowerCase()
                })
    
                if(isUserExist){
                    alert("users alerady exist")
                }else{
                    localStorage.setItem("users",JSON.stringify([...parseData,formData]))
                    alert("user has been created")
                }
    
               } else{
    
                localStorage.setItem("users",JSON.stringify([formData]))
                alert("users has been created")
               }
        

  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
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
      <h2 style={{textAlign:"center"}}>Sign Up</h2>
      <Formik
        initialValues={{
          fname: '',
          lname: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={btnclickevent}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="fname"
              placeholder="First Name"
              className="form-control"
              style={formControlStyle}
            />
            <ErrorMessage name="fname" component="div" className="error" style={errorStyle} />
            <Field
              type="text"
              name="lname"
              placeholder="Last Name"
              className="form-control"
              style={formControlStyle}
            />
            <ErrorMessage name="lname" component="div" className="error" style={errorStyle} />
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
              btntext="Sign Up"
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

export default Signup;
