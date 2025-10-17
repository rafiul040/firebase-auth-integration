import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router';
import { auth } from '../Firebase/firebase.init';


const Register = () => {
  


    const handleRegister = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
            
    <div className="card mx-auto  my-50 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl font-bold">Please Register!</h1>
      <form onSubmit={handleRegister}>
        <fieldset className="fieldset">
            {/* name field */}
          <label className="label">Name</label>
          <input type="text" className="input" placeholder="Name" name="name" />
            {/* email field */}
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
            {/* password field  */}
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
      <p>Already have an account? please <Link className='underline hover:text-blue-800 text-blue-500' to='/login'>Login</Link></p>
      </div>
    </div>
    );
};

export default Register;