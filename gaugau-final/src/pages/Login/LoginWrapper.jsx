import React from "react";

const LoginWrapper = ({ children }) => {
  return (
    <div>
      <div className="w-screen h-screen flex">
        {/* div 1 */}
        <div className="md:w-1/2 hidden md:block h-screen bg-black"></div>
        {/* div 2 */}
        <div className="md:w-1/2 w-screen  h-screen flex  items-center justify-center">
          {/* admin login form */}

          <div className="w-3/4">
            <h1 className="text-center text-3xl">Gaugau Admin</h1>
            <br />
            <br />
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
