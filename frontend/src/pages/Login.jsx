import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
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
        required
      />
      <input
        type="password"
        className="w-full border border-gray-600 px-3 py-2"
        placeholder="Password"
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
