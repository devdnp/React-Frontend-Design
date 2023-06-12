import React from 'react'
import './Auth.css'
import Logo from '../../img/logo1.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="WebName">
                <h1>DevDnp Sol</h1>
                <h6>Learning patiently about something</h6>
            </div>
        </div>
        <LogIn/>
    </div>
  )
};

function LogIn() {
    return (
      <div className="a-right">
        <form className="InfoForm AuthForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="InfoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="InfoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button InfoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }



function SignUp(){

    return (
        <div className="a-right">
            <form className="InfoForm AuthForm">

                <h3>Sign up</h3>

                <div>
                    <input type="text" className="InfoInput" placeholder='First Name' name='firstname'/>
                    <input type="text" className="InfoInput" placeholder='Last Name' name='lastname'/>
                </div>

                <div>
                <input type="text" className="InfoInput" placeholder='User Name' name='username'/>
                </div>

                <div>
                <input type="text" className="InfoInput" placeholder='Enter Password' name='password'/>
                <input type="text" className="InfoInput" placeholder='Confirm password' name='confirmpswd'/>
                </div>

                <div>
                    <span style={{fontSize:'12px'}}>
                        Alrady have an account ? login!
                    </span>
                </div>
                <button className="button InfoButton" type='submit'>Sign Up</button>

            </form>
        </div>
    )
}

export default Auth