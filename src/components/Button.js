import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm font-medium cursor-pointer whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;
