import React from "react";

const Input = ({ id, type, name, label, onChangeProp }) => {
  return (
    <>
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          name={name}
          onChange={onChangeProp}
          id={id}
          type={type}
          className="w-full flex-1 mt-4 px-4 py-2 border border-gray-700 focus:border-sky-400 outline-none"
        />
      </div>
      <br />
      <br />
    </>
  );
};

export default Input;
