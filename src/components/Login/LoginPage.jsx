import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="container">
        <div className="card">
            <div className="container-label">bigTeenz <span></span></div>
            <div className="container-icon">
                <div className="circle"><i className='bi bi-chevron-right'></i></div>
            </div>

            <div className="container-form">
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id='email' placeholder='your email address' />

                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' placeholder='password' />

                    <div className="change-password">
                        forgot password <a href="g">click here</a>
                    </div>
                    <button type='submit'>Join meeting</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage