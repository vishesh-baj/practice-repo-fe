import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="flex py-4 space-x-2 justify-center bg-black text-white font-light mt-5">
      <h1>{message}</h1>
    </div>
  );
};

export default Toast;
