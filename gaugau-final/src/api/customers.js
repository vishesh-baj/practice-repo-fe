import axios from "axios";
import { URL } from "./constants";
// GET ALL CUSTOMERS
export const getCustomer = async () => {
  const response = await axios.get(`${URL}/customerList`);
  const customerData = await response.data;
  console.log("FETCHED-CUSTOMER-DATA", customerData);
  return customerData;
};
