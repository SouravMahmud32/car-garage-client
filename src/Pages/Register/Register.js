import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from 'axios';

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { providerLogin, createUser, updateUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log(data);
    const {password, ...rest} = data;
    setRegisterError("");
    axios.post('http://localhost:5000/users', rest)
    .then(res => console.log(res))
    .catch(error => console.error(error))

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            // saveUser(data.name, data.email);
            navigate('/');
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  const handleGoogleSignUp = () => {
    providerLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name")}
              className="select select-bordered w-full max-w-xs"
            />
          </div>
          <div>
            <select {...register("role")} className="select select-bordered mt-9 w-full max-w-xs">
              <option disabled selected>
                Register as
              </option>
              <option value={'buyer'}>Buyer</option>
              <option value={'seller'}>Seller</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="select select-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 charecters",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message: "password must be strong",
                },
              })}
              className="select select-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-outline btn-primary w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {registerError && <p className="text-red-600">{registerError}</p>}
        </form>
        <p>
          Alredy have an account{" "}
          <Link className="text-primary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignUp}
          className="btn btn-outline btn-primary w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Register;
