import React from 'react'
import LoginContaner from 'src/containers/common/LoginContaner'
import ExampleContainer from 'src/containers/user/example-container'
import LoginForm from './LoginForm'
import NavBar from './nav-bar'
function LoginComponnent() {
  return (
   
  <div className='grid grid-cols-2'>
  <ExampleContainer float_dirextion='float-left' color='bg-white' context={<LoginContaner/>}/>

  <ExampleContainer float_dirextion='float-left' color='bg-mainColor' context={<NavBar/>}/>

  </div>
  )
}

export default LoginComponnent