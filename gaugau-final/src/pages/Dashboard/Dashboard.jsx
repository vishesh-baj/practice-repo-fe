import React, { useState, useEffect } from "react";
import { dashboardData as fetchData } from "../../api/dashboard";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  useEffect(() => {
    const fetchDataA = async () => {
      const data = await fetchData();
      setDashboardData(data);
    };
    fetchDataA();
  }, []);
  // ? CHECKING IF DATA IS FETCHED AND STORED IN STATE OR NOT
  // console.log("FETCHED:", dashboardData);
  return (
    <section className="w-full h-1/2 bg-pink-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-cols-max">
      <div className="flex flex-col w-full h-full justify-center items-center bg-sky-100">
        {/* CREATE FELPER OBJECT FOR DASHBOAD */}
        <h1 className="text-3xl text-sky-500">
          {dashboardData[0].clientCount}
        </h1>
        <h1 className="text-lg">Total Clients</h1>
      </div>
      {/* CREATE HELPER OBJECT FOR DASHBOAD */}

      <div className="flex flex-col w-full h-full justify-center items-center bg-sky-100">
        <h1 className="text-3xl text-sky-500">
          {dashboardData[1].customerMessage}
        </h1>
        <h1 className="text-lg">Total Customers</h1>
      </div>

      <div className="flex flex-col w-full h-full justify-center items-center bg-sky-100">
        <h1 className="text-3xl text-sky-500">
          {dashboardData[2].campaignCount}
        </h1>
        <h1 className="text-lg">Total Campaign</h1>
      </div>
    </section>
  );
};
export default Dashboard;
