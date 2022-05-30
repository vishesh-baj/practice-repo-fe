import React, { useState, useEffect } from "react";
import { getCustomer } from "../../api/customers";
import DataTable from "../../components/DataTable/DataTable";
import { COLUMNS } from "../../helpers/helperObjects";
const Customers = () => {
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    let fetchCustomerData = async () => {
      const response = await getCustomer();
      setCustomerData(response.Message);
    };
    fetchCustomerData();
  }, []);

  console.log(customerData);

  return (
    <div>
      <DataTable customerData={customerData} customerColumns={COLUMNS} />
    </div>
  );
};

export default Customers;
