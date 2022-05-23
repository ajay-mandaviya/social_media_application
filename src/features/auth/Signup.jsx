import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { signupThunk } from "./authSlice";
import { signupValidate } from "./validateForm";

export const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.authReducer);
  const [passWordVisible, setPassWordVisible] = useState(false);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleSignpChange = (e) => {
    const { name, value } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const isInfoValidate = signupValidate(newUser, formError, setFormError);
    if (isInfoValidate) {
      dispatch(signupThunk(newUser))
        .unwrap()
        .then(({ createdUser }) => {
          toast.success(`Hey  ${createdUser.username} Welcome to App `);
        })
        .catch((error) => {
          console.log("error in signup");
          toast.error("Some thing went wrong");
        });
    }
  };

  const onFocus = () => {
    setFormError({
      ...formError,
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <div className="flex justify-center w-full min-h-[100vh] items-center bg-gray-100 p-6">
        <div className="bg-white p-4 w-96 mt-8 h-full">
          <div className="text-center">
            <h3 className="text-3xl text-sky-600	">Sign up AppName</h3>
          </div>
          <form onSubmit={handleSignup}>
            <Input
              name={"username"}
              lable={"User Name"}
              value={newUser.username}
              type={"text"}
              placeholder="Enter Your Username"
              onChange={handleSignpChange}
              Inputerror={formError.nameError}
              handleOnFocus={onFocus}
            />

            <Input
              name={"email"}
              lable={"Email"}
              value={newUser.email}
              type={"email"}
              placeholder="Enter Your Email"
              Inputerror={formError.emailError}
              onChange={handleSignpChange}
              handleOnFocus={onFocus}
            />
            <div className="relative">
              <Input
                name={"password"}
                lable={"Password"}
                value={newUser.password}
                type={passWordVisible ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={handleSignpChange}
                Inputerror={formError.passwordError}
                handleOnFocus={onFocus}
              />
              <button
                type="button"
                onClick={() => {
                  setPassWordVisible(!passWordVisible);
                }}
                className="absolute top-[30px] right-[5px]"
              >
                {passWordVisible ? (
                  <i className="fa-regular fa-eye"></i>
                ) : (
                  <i className="fa-regular fa-eye-slash"></i>
                )}
              </button>
            </div>

            <Input
              name={"confirmPassword"}
              lable={"Confirm Password"}
              value={newUser.confirmPassword}
              type={"password"}
              placeholder="Enter ConfirmPassword"
              Inputerror={formError.confirmPasswordError}
              onChange={handleSignpChange}
              handleOnFocus={onFocus}
            />
            <div>
              <button className="btn-primary bg-sky-500/100  rounded-md w-full py-2 text-white my-2 disabled:bg-sky-400">
                Sign up
              </button>
            </div>
          </form>
          <div className="text-center my-2 cursor-pointer">
            <p>
              Already Have an account ?
              <Link to={"/login"} className="underline font-bold	ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
// Ajay010320@
