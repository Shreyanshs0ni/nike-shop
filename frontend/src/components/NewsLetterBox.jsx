import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        ITS BETTER AS A MEMBER
      </p>
      <p className="mt-3 text-gray-400">
        Move, Shop, Customize and Celebrate with the best of Nike.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="mx-auto my-6 flex w-full items-center gap-3 border border-gray-200 pl-3 sm:w-1/2"
      >
        {" "}
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full outline-none sm:flex-1"
          required
        />
        <button
          type="submit"
          className="bg-black px-10 py-4 text-xs text-white"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
