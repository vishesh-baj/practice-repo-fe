import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

// Customers columnsObject
export const COLUMNS = [
  {
    Header: "S.No",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "first_name",
  },
  {
    Header: "Mobile",
    accessor: "mobile_number",
  },
  {
    Header: "No of cattles",
    accessor: "number_of_cattle_to_buy",
  },
  {
    Header: "Client",
    accessor: "client",
  },
  {
    Header: "Campaign Title",
    accessor: "campaign_title",
  },
  {
    Header: "State",
    accessor: "state",
  },
  {
    Header: "District",
    accessor: "district",
  },
  { Header: "Tehsil", accessor: "tehsil" },
  {
    Header: "Actions",
    Cell: (row) => {
      return (
        <div className="flex justify-center gap-5">
          <MdOutlineDelete
            onClick={() => console.log(row)}
            className="cursor-pointer"
            size={20}
          />
          <FiEdit className="cursor-pointer" size={20} />
        </div>
      );
    },
  },
];

export const ClientCOLUMNS = [
  {
    Header: "S.no",
    accessor: "id",
  },
  {
    Header: "Client",
    accessor: "client_name",
  },
  {
    Header: "Description",
    accessor: "descriptions",
  },
  { Header: "Mobile", accessor: "mobile_number" },
  {
    Header: "Actions",
    Cell: (row) => {
      return (
        <div className="flex justify-center gap-5">
          <MdOutlineDelete
            onClick={() => console.log(row)}
            className="cursor-pointer"
            size={20}
          />
          <FiEdit className="cursor-pointer" size={20} />
        </div>
      );
    },
  },
];
