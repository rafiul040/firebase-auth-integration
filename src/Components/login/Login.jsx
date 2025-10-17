import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/Auth Context/AuthContext';

const Login = () => {

  const { signInUser } = use(AuthContext);


  const handleLogin = () => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password)

    signInUser(email, password)
    .then(result => {
      console.log(result)
      event.target.reset()
    })
    .catch(error => {
      console.log(error)
    })
  }


    return (

    
    <div className="card mx-auto  my-50 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl font-bold">Login now!</h1>
      <form onSubmit={handleLogin}>
        <fieldset className="fieldset">
            {/* email field */}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          {/* password field */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <p>New To Our Website? Please <Link className='underline text-blue-400 hover:text-blue-600' to='/register'>Register</Link></p>
      </div>
    </div>

    );
};

export default Login;