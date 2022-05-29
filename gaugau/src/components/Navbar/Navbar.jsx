import React from "react";
import { AiOutlinePoweroff, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="w-full flex justify-end">
      <nav className="w-full h-[8vh] px-10  flex justify-between items-center bg-white drop-shadow-lg">
        {/* active tab heading */}
        <AiOutlineMenu size={20} />
        <div className="flex justify-between w-3/4">
          <h1 className=" text-lg ml-9 md:ml-0  md:text-xl lg:text-3xl font-semibold">
            Dashboard
          </h1>
          <div className="flex justify-center items-center gap-2">
            <AiOutlinePoweroff size={20} />
            <h1 className="text-lg hidden md:block md:mr-10">Logout</h1>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
