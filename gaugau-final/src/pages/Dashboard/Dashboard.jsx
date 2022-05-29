import React from "react";

const Dashboard = () => {
  return (
    <section className="w-full h-full bg-pink-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-cols-max">
      <div className="flex flex-col w-full h-full justify-center items-center bg-sky-100">
        {/* CREATE FELPER OBJECT FOR DASHBOAD */}
        <h1 className="text-3xl text-sky-500"> 01</h1>
        <h1 className="text-lg">Total Clients</h1>
      </div>
      <div className="flex w-full h-full justify-center items-center bg-rose-500">
        02
      </div>
      <div className="flex w-full h-full justify-center items-center bg-rose-500">
        03
      </div>
      <div className="flex w-full h-full justify-center items-center bg-rose-500">
        04
      </div>
      <div className="flex w-full h-full justify-center items-center bg-rose-500">
        05
      </div>
    </section>
  );
};

export default Dashboard;
