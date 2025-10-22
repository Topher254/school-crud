import React from 'react'

const Button = (props) => {
    const baseStyles = 'px-4 text-white py-2 rounded-full shadow font-bold';
    let variantStyles='';
    let buttonSize="";

  if (props.variant==="primary"){
    variantStyles='bg-blue-500 hover:bg-blue-600 cursor-pointer'
  }else if(props.variant==="second"){
    variantStyles='bg-green-500 hover:bg-green-600 cursor-pointer'
  }else if (props.variant==="danger") {
    variantStyles='bg-red-500 hover:bg-red-700 cursor-pointer'
    
  }
if(props.bsize==="sm"){
    buttonSize="w-32"
}else if (props.bsize==="md") {
    buttonSize="w-48"
    
}else if (props.bsize==="lg") {
    buttonSize="w-64"
    
}

  return (
    <div>
      <button
      className={`${baseStyles} ${variantStyles} ${buttonSize}`}
      >{props.children}</button>
    </div>
  )
}

export default Button
