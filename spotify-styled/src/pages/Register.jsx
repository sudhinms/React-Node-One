import React from 'react'
import MainContainer from '../styles/registerStyle'
import { Link } from 'react-router-dom'
import Login from './Login'

function Register() {
  return (
    <MainContainer>
    <div className='container2'>
      <form action="">
      <h2 className='heading'>Register</h2>
      <label htmlFor="email" className='labels'>Email</label>
      <input type="email" onChange={(e)=>setVal(e.target.value)} className='inp' placeholder='email' id='email'/>
      <label htmlFor="password" className='labels' id='label1'>Username</label>
      <input type="text" className='inp' placeholder='username' id='username'/>
      <label htmlFor="password" className='labels' id='label2'>Password</label>
      <input type="password" className='inp' placeholder='password' id='password'/>
      <label htmlFor="password" className='labels' id='label2'>Confirm password</label>
      <input type="password" className='inp' placeholder='confirm password' id='cpassword'/>
      <label htmlFor="checkbtn" id='showpasswd'><input type="checkbox" id='checkbtn'/>  show password</label>
      <input type="submit" className='inp' value="SIGHN UP" id='submitbtn'/>
      </form>
      <h5 className='para2'>Already have an account? <a href="./Login">Sign in</a></h5>
    </div>
    </MainContainer>
  )
}

export default Register
