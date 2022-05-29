import { PATHS } from "./paths";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Customers from "../pages/Customers/Customers";
import Clients from "../pages/Clients/Clients";
import Campaigns from "../pages/Campaigns/Campaigns";
const routes = [
  { key: "route01", path: PATHS.login, element: <Login /> },
  { key: "route02", path: PATHS.dashboard, element: <Dashboard /> },
  { key: "route03", path: PATHS.customers, element: <Customers /> },
  { key: "route04", path: PATHS.clients, element: <Clients /> },
  { key: "route05", path: PATHS.campaigns, element: <Campaigns /> },
];

export default routes;
