import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import Input from "../../components/Input/Input";
import { postClient } from "../../api/clients";
import DataTable from "../../components/DataTable/DataTable";
import { ClientCOLUMNS } from "../../helpers/helperObjects";

const ClientsTabs = ({ data }) => {
  const [newClientData, setNewClientData] = useState({
    client_name: "",
    mobile_number: "",
    descriptions: "",
  });
  const handleChange = (e) => {
    setNewClientData({ ...newClientData, [e.target.name]: e.target.value });
    console.log(newClientData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postClient(newClientData);
    setNewClientData({ client_name: "", mobile_number: "", descriptions: "" });
  };

  return (
    <Tab.Group>
      <Tab.List className="w-full flex gap-5 justify-between">
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "bg-primaryColor text-white py-3 px-3 w-1/2"
                  : "bg-gray-200 text-black py-3 px-3 w-1/2"
              }
            >
              New Client
            </button>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button
              className={
                selected
                  ? "bg-primaryColor text-white py-3 px-3 w-1/2"
                  : "bg-gray-200 text-black py-3 px-3 w-1/2"
              }
            >
              Client View
            </button>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className=" w-full md:w-1/3  mt-10">
          <h1 className="text-xl font-bold">Add Client</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <Input
              id="client-input-01"
              type="text"
              name="client_name"
              label="Name"
              onChangeProp={handleChange}
              valueProp={newClientData.client_name}
            />
            <Input
              id="clien-input-02"
              type="text"
              name="descriptions"
              label="Description"
              onChangeProp={handleChange}
              valueProp={newClientData.descriptions}
            />
            <Input
              id="clien-input-03"
              type="phone"
              name="mobile_number"
              label="Mobile"
              onChangeProp={handleChange}
              valueProp={newClientData.mobile_number}
            />
            <div className="flex gap-5">
              <button className="w-1/2 text-primaryColor bg-white shadow-md py-2 px-4">
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 text-white bg-primaryColor py-2 px-4"
              >
                Save
              </button>
            </div>
          </form>
        </Tab.Panel>
        <Tab.Panel>
          <DataTable customerColumns={ClientCOLUMNS} customerData={data} />
        </Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ClientsTabs;
