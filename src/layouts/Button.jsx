import React from "react";

const Button = ({ backgroundColor, title }) => {
  return (
    <div>
      <button
        className={` ${backgroundColor} text-black rounded-md px-8 py-1 font-medium hover:bg-[#8482FF] hover:text-white transition-all`}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
