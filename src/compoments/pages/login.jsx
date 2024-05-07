import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '../resueable/button';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const handleLogin = async (values) => {
    try {
      const storage = localStorage.getItem("users");
      if (storage) {
        const parseData = JSON.parse(storage);
        const isUserExist = parseData.find((val) => val.email === values.email);
    
        if (isUserExist) {
          if (values.password === isUserExist.password) {
            localStorage.setItem("isUserLoggedIn", true);
            alert("User has been logged in");
          } else {
            alert("Invalid password");
          }
        } else {
          alert("No record found for this email");
        }
      } else {
        alert("No user records found");
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      alert("An error occurred during login");
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
