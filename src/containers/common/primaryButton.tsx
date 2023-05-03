import React, { MouseEventHandler } from 'react'
interface IPrpos{
title:string,
onClick:MouseEventHandler<HTMLButtonElement>
    
}
function PrimaryButton(props:IPrpos) {
  return (
    <div className=' text-3xl  font-black pt-2 pb-2 mt-5 bg-mainColor text-white rounded text-center'>
   <button onClick={props.onClick}>
{props.title}
   </button>
   </div>
  )
}

export default PrimaryButton