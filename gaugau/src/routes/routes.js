import { PATHS } from "./PATHS";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Customers from "../pages/Customers/Customers";
import Clients from "../pages/Clients/Clients";
import Campaigns from "../pages/Campaigns/Campaigns";

const routes = [
  { path: PATHS.login, element: <Login /> },
  { path: PATHS.dashboard, element: <Dashboard /> },
  { path: PATHS.customers, element: <Customers /> },
  { path: PATHS.clients, element: <Clients /> },
  { path: PATHS.campaigns, element: <Campaigns /> },
];

export default routes;
