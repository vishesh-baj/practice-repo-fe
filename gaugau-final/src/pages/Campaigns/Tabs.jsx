import { Tab } from "@headlessui/react";
import { Fragment } from "react";
import Input from "../../components/Input/Input";

const CampaignTabs = () => {
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
              Create Campaign
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
              On-going Campaign
            </button>
          )}
        </Tab>

        {/* ... */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className=" w-full md:w-1/3  mt-10">
          <h1 className="text-xl font-bold">Create Campaign</h1>

          <br />
          <form>
            <Input
              id="client-input-01"
              type="text"
              name="client_name"
              label="Client"
              //   onChangeProp={handleChange}
              //   valueProp={newClientData.client_name}
            />
            <Input
              id="clien-input-02"
              type="text"
              name="descriptions"
              label="Company Title"
              //   onChangeProp={handleChange}
              //   valueProp={newClientData.descriptions}
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
        <Tab.Panel>Content 2</Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
};
export default CampaignTabs;
