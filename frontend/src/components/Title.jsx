import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="mb-3 inline-flex items-center gap-2">
      <p className="text-gray-500">
        {text1}
        <span className="font-medium text-gray-800">{text2}</span>{" "}
      </p>
      <p className="h-[1px] w-8 bg-gray-700 sm:h-[1px] sm:w-12"></p>
    </div>
  );
};

export default Title;
