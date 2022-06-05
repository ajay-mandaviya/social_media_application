import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components";
import { loginUserThunk } from "./authSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passWordVisible, setPassWordVisible] = useState(false);
  const { loading, token } = useSelector((state) => state.authReducer);

  // username: "adarshbalika",
  // password: "adarshBalika123",
  // username: "ajay",
  // password: "ajay123",
  const [loginUser, setLoginUser] = useState({
    userName: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    dispatch(
      loginUserThunk({
        username: loginUser.userName,
        password: loginUser.password,
      })
    )
      .unwrap()
      .then(({ foundUser }) => {
        toast.success(`Hey Welcome Back ${foundUser.username}`);
      })
      .catch((error) => {
        toast.error("Some thing went wrong");
      });
  };

  const handleGuestLogin = (e) => {
    e.preventDefault();
    dispatch(
      loginUserThunk({
        username: "ajay",
        password: "ajay123",
      })
    )
      .unwrap()
      .then(({ foundUser }) => {
        toast.success(`Hey Welcome Back ${foundUser.username}`);
      })
      .catch((error) => {
        toast.error("Some thing went wrong");
      });
  };

  useEffect(() => {
    // if (token) {
    //   navigate("/");
    // }
  }, [token]);

  return (
    <div className="flex justify-center w-full h-screen items-center bg-gray-100">
      <div className="bg-white p-4 w-96">
        <div className="text-center">
          <h3 className="text-3xl text-sky-600	">Hey Welcome Back!</h3>
          <p className="text-base m-auto">Login To Continue</p>
        </div>
        <form onSubmit={handleUserLogin}>
          <Input
            lable={"User Name"}
            type={"text"}
            placeholder="Enter Your User Name"
            name={"userName"}
            value={loginUser.userName}
            onChange={handleInputChange}
          />
          <div className="relative">
            <Input
              lable={"Pass Word"}
              type={passWordVisible ? "text" : "password"}
              placeholder="Enter Your Password"
              name={"password"}
              value={loginUser.password}
              onChange={handleInputChange}
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
          <div>
            <button
              disabled={loading}
              className="btn-primary bg-sky-500/100  rounded-md w-full py-2 text-white my-2 disabled:bg-sky-400"
              type="submit"
            >
              {loading ? "Login....." : "Login"}
            </button>
            <button
              disabled={loading}
              onClick={handleGuestLogin}
              className="btn-primary bg-sky-500/100  rounded-md w-full py-2 text-white disabled:bg-sky-400"
            >
              Guest Login
            </button>
          </div>
        </form>
        <div className="text-center my-2 cursor-pointer">
          <p>
            Not Have an account ?
            <Link to={"/signup"} className="underline font-bold	ml-1">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
