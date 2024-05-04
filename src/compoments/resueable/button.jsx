import React from 'react'

const Button = ({btntext,btnclickevent,style, ...props}) => {
  return (
   <button {...props} onClick={btnclickevent} style={style} >{btntext}</button>
  )
}

export default Button