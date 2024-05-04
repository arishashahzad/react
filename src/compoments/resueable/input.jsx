import React from 'react'

const Input = ({inputtype,inputname,changeevent,...props}) => {
  return (
 <input {...props} type={inputtype} name={inputname} onChange={(e)=>{changeevent(e)}}></input>
  )
}

export default Input;

