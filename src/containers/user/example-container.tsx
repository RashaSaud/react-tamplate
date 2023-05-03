import React, { ReactElement } from 'react';

interface IProps{
  color:string,
  context: ReactElement
  float_dirextion:string

}
export default function ExampleContainer(props:IProps){
  return (
   
    <div className={` ${props.color}  `}>

      <div className='flex h-screen items-center justify-center'>
      {props.context}

      </div>
   
    </div>

  )
}