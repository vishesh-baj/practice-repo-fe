import { MdOutlineDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
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
    Cell: (
      <div className="flex justify-center gap-5">
        <MdOutlineDelete className="cursor-pointer" size={20} />
        <FiEdit className="cursor-pointer" size={20} />
      </div>
    ),
  },
];
