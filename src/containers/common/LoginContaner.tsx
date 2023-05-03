import React from 'react'
import LoginForm from 'src/components/common/LoginForm'
import PrimaryButton from 'src/containers/common/primaryButton'
function LoginContaner() {
  return (
    <div className='font-cairo  w-[402px] '>
        <p className='	text-3xl text-center text-gray-light text-3xl font-black pb-[50px]' >تسجيل الدخول</p>
      <LoginForm title='البريد الإلكتروني' placeholder='البريد الإلكتروني' forrgetPass='' rememberMe={false}/>
      <LoginForm title=' كلمة المرور' placeholder=' كلمة المرور' forrgetPass='هل نسيت كلمة المرور؟' rememberMe={true}/>
<PrimaryButton title=' دخول' onClick={()=>{}}/>
    </div>
  )
}
export default LoginContaner

