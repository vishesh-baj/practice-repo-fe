import React, { useState, useEffect } from "react";
import { dashboardData as fetchData } from "../../api/dashboard";
import { startCase } from "lodash";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  useEffect(() => {
    const fetchDataA = async () => {
      const data = await fetchData();
      setDashboardData(data);
    };
    fetchDataA();
  }, []);
  console.log("FETCHED:", dashboardData);
  return (
    <section className="w-full h-auto bg-pink-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-cols-max">
      {/* CHECKING IF DATA IS FETCHED AND STORED IN STATE OR NOT */}
      {dashboardData.length > 0 &&
        dashboardData.map((item) => (
          <div className="flex flex-col w-full h-[25vh] justify-center items-center bg-sky-100">
            {/* CREATE FELPER OBJECT FOR DASHBOAD */}
            <h1 className="text-4xl font-bold text-primaryColor mb-5">
              {Object.entries(item)[0][1]}
            </h1>
            {/* CONVERT TO APPROPRATE STRING */}
            <h1>{startCase(Object.entries(item)[0][0])}</h1>
          </div>
        ))}
    </section>
  );
};
export default Dashboard;
