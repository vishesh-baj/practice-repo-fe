import React, { useEffect } from "react";
import { getClients } from "../../api/clients";
import ClientsTabs from "./Tabs";
const Clients = () => {
  useEffect(() => {
    let fetchData = async () => {
      const fetchData = await getClients();
      console.log(fetchData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ClientsTabs />
    </div>
  );
};
export default Clients;
