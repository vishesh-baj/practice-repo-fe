import React, { useState, useEffect } from "react";
import { getClients } from "../../api/clients";
import ClientsTabs from "./Tabs";
const Clients = () => {
  const [clientsData, setClientsData] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      const fetchData = await getClients();
      setClientsData(fetchData);
      console.log(fetchData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ClientsTabs data={clientsData} />
    </div>
  );
};
export default Clients;
