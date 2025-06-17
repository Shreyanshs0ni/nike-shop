import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-auto mt-14 flex w-[90%] flex-col items-center gap-4 text-gray-800 sm:max-w-96"
    >
      <div className="mt-10 mb-2 inline-flex items-center gap-2">
        <p className="league-script-regular text-5xl"> {currentState}</p>
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full border border-gray-600 px-3 py-2"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full border border-gray-600 px-3 py-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <input
        type="password"
        className="w-full border border-gray-600 px-3 py-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <div className="mt-[-8px] flex w-full justify-between text-sm">
        <p className="cursor-pointer text-gray-500 underline-offset-2 hover:underline">
          Forgot your password?
        </p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer text-gray-500 underline-offset-2 hover:underline"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create Account
          </p>
        ) : (
          <p
            className="cursor-pointer text-gray-500 underline-offset-2 hover:underline"
            onClick={() => setCurrentState("Login")}
          >
            Login here
          </p>
        )}
      </div>
      <button className="mt-4 cursor-pointer border border-gray-600 bg-white px-12 py-2 font-light text-black shadow-gray-800 transition-shadow duration-300 hover:shadow-[-3px_5px_1px]">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
