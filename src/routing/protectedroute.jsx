// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// const Protectedroute = ({compoment}) => {
//     let isUserLogedIn=localStorage.getItem("isUserLogedIn")
//     let navigate=useNavigate()
//     if(!isUserLogedIn){
//         return (
//           useEffect(()=>{
//             navigate("/login")
//         },[])
//     )
//     }else{
//   return (
//     <compoment/>
//   )

// }
// }

// export default Protectedroute


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component }) => {
  const isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, [isUserLoggedIn, navigate]);

  return isUserLoggedIn ? <Component /> : null;
};

export default ProtectedRoute;
