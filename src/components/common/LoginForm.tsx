import React from 'react'
import {Link} from 'react-router-dom'
interface LoginProps{
    title:string,
    placeholder:string,
    forrgetPass:string,
    rememberMe:boolean
}
function LoginForm(props:LoginProps) {
  return (
    <>

 <label className='text-gray-light'>
<p className='pt-2 pb-3'>{props.title} </p>
<input className='h-full w-[400px] border-2 border-gray-light rounded pt-2 pb-2 pr-4'  placeholder={props.placeholder} />
<Link className='underline text-sm ' to={''}>{props.forrgetPass}</Link>
</label>
 <div className='float-left'>
    {props.rememberMe? 
   <div className="flex mt-1 items-center font-bold">
       <label  className="ml-1 text-sm font-cairo text-gray-light ">تذكرني ؟</label>

   <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
</div>
    :''}
 </div>
</>
  )
}

export default LoginForm