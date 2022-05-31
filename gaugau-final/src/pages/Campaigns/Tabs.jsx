import { Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import { GoSettings } from "react-icons/go";
import Input from "../../components/Input/Input";
import CloseButton from "../../assets/close.svg";
import { motion } from "framer-motion";
import CreateCampaign from "./CreateCampaign";
const CampaignTabs = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleChange = (e) => {
    console.log("Clicked");
  };
  const handleClick = () => {
    setToggleSidebar(!toggleSidebar);
    console.log(toggleSidebar);
  };

  return (
    <Tab.Group>
      {/* TAB LISTS */}
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
      {/* TABS LISTS */}
      <Tab.Panels>
        <Tab.Panel>
          <CreateCampaign />
        </Tab.Panel>
        <Tab.Panel className="relative">
          <h1>Here Datatable will come</h1>
          <button
            onClick={handleClick}
            className="px-5 py-2 flex justify-center gap-2 border-black border cursor-pointer"
          >
            <GoSettings size={20} />
            <span>Filter</span>
          </button>

          {/* right settings bar */}
          {/* NEED TO ADD REACT STATE  */}
          <motion.div
            animate={{ type: "spring" }}
            className={`absolute ${
              toggleSidebar ? "visible opacity-100" : "invisible opacity-0"
            }
               -right-10 -top-[5.49em] w-screen md:w-[30vw]  h-[92vh] bg-white drop-shadow-lg px-5 transition ease-in-out duration-500`}
          >
            <img
              onClick={handleClick}
              className=" top-5 right-5 absolute"
              src={CloseButton}
              alt="close"
              width={20}
            />

            <div>
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

                {/* DATEPICKER */}
                <h1>HERE DATEPICKER WILL COME</h1>

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
            </div>
          </motion.div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
export default CampaignTabs;
