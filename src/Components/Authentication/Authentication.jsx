import React from 'react'
import './Authentication.css'

import email_icon from '../Assets/icons/email.png'
import password_icon from '../Assets/icons/password.png'
import user_icon from '../Assets/icons/person.png'

const Login = () => {
  return(
    <div className='d-block justify-content-center'>
      <div className='row'>
        <div className='col-md-4'></div>
        <div className='col-md-4'>
          <div className='card'>
            <div className='card-header'>
              <h3>Login</h3>
            </div>
            <div className='card-body'>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <img src={email_icon} alt='email' />
                </span>
                <input type='email' className='form-control' placeholder='Email' />
              </div>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <img src={password_icon} alt='password' />
                </span>
                <input type='password' className='form-control' placeholder='Password' />
              </div>
              <button className='btn btn-primary'>Login</button>

              <div className='d-flex justify-content-between p-5'>
                <a href='#'>Forgot Password?</a>
                <span>Don't have an account?<a href='#'> Register</a></span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'></div>
      </div>
    </div>
  )
};

const Authentication = () => {
  return Login()
}

export default Authentication