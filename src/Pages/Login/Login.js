import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
  const {logIn, providerLogin} = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');

  const handleLogin = data =>{
    console.log(data);
    setLoginError('');
    logIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
    })
    .catch(error => {
        console.error(error.message)
        setLoginError(error.message);
    })
  }

  const handleGoogleSignIn = () => {
    providerLogin()
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.error(error);
    });
  };
    
    return (
        <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {required: "Email Address is required"})}
              className="select select-bordered w-full max-w-xs"
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {required: "password is required", minLength: {value: 6, message: 'Password must be 6 charecters'}})}
              className="select select-bordered w-full max-w-xs"
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
          </div>
          <input className="btn btn-outline btn-primary w-full" value='LOGIN' type="submit" />
          <div>
            {
                loginError && <p className="text-red-600">{loginError}</p>
            }
          </div>
        </form>
        <p>New to Doctors Portal? <Link className="text-primary" to='/register'>Create a new account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
    );
};

export default Login;