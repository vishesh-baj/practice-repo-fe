import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import Input from "../../components/Input/Input";
import { GoSettings } from "react-icons/go";
import CloseButton from "../../assets/close.svg";
import DatePicker from "../../components/DatePicker/DatePicker";
const CampaignTabs = () => {
  const [settingsSidebarToggle, setSettingsSidebarToggle] = useState(false);

  const [filterObject, setFilterObject] = useState({});

  const handleClick = () => {
    setSettingsSidebarToggle(!settingsSidebarToggle);
    console.log(settingsSidebarToggle);
  };

  const handleChange = (e) => {
    console.log("Change occured", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Form");
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
          <form className="flex flex-col">
            <Input
              id="client-input-01"
              type="text"
              name="client_name"
              label="Client"
              //   onChangeProp={handleChange}
              //   valueProp={newClientData.client_name}
            />
            <Input
              id="client-input-02"
              type="text"
              name="descriptions"
              label="Campaign Title"
              //   onChangeProp={handleChange}
              //   valueProp={newClientData.descriptions}
            />

            <div className="flex gap-5">
              <button className="w-1/2 text-primaryColor bg-white shadow-md py-2 px-4">
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 text-gray-50 bg-primaryColor py-2 px-4"
              >
                Publish
              </button>
            </div>
          </form>
        </Tab.Panel>
        <Tab.Panel>
          <div>
            <h1>Here Datatable will come</h1>
            <button
              onClick={handleClick}
              className="px-5 py-2 flex justify-center gap-2 border-black border "
            >
              <GoSettings size={20} />
              <span>Filter</span>
            </button>

            {/* right settings bar */}
            <div
              className={`absolute ${
                settingsSidebarToggle
                  ? "translate-x-[0%]"
                  : "translate-x-[100%]"
              } right-0 top-[3.7em] w-[100%] md:w-[30vw] h-[92vh] bg-white drop-shadow-lg px-5 transform transition ease-in-out duration-300`}
            >
              <img
                onClick={handleClick}
                className="absolute right-5 top-5 cursor-pointer"
                src={CloseButton}
                alt="close"
                width={20}
              />
              <div className="relative">
                <form className="mt-20">
                  <Input
                    label="Client"
                    id="campaign-input-01"
                    type="text"
                    name="client"
                    placeholder={"Select"}
                    onChangeProp={handleChange}
                  />
                  <Input
                    label="Campaign Title"
                    id="campaign-input-01"
                    type="text"
                    name="client"
                    onChangeProp={handleChange}
                  />

                  <h1>Date filter comes here</h1>
                  <DatePicker />

                  <div>
                    <div className="flex gap-5">
                      <button
                        onClick={handleClick}
                        className="w-1/2 text-primaryColor bg-white shadow-md py-2 px-4"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleClick}
                        type="submit"
                        className="w-1/2 text-gray-50 bg-primaryColor py-2 px-4"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Tab.Panel>
        {/* ... */}
      </Tab.Panels>
    </Tab.Group>
  );
};
export default CampaignTabs;
