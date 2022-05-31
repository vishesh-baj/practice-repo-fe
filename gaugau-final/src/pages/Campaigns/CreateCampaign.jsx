import React from "react";
import Input from "../../components/Input/Input";
import DatePicker from "../../components/DatePicker/DatePicker";
const CreateCampaign = () => {
  return (
    <div className=" w-full   mt-10">
      <h1 className="text-xl font-bold">Create Campaign</h1>

      <br />
      <form className="w-full">
        <div className="w-full md:w-1/3">
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
        </div>
        <br />

        <div>
          <h1>Criteria</h1>
          <br />
          <div className="w-full h-[60vh] bg-teal-50">
            <div className="flex gap-5">
              <h1>Start Date</h1>
              <DatePicker />

              <h1>End Date</h1>
              <DatePicker />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;
