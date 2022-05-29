import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Campaigns from "./pages/Campaigns/Campaigns";
import Clients from "./pages/Clients/Clients";
import Customers from "./pages/Customers/Customers";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import { PATHS } from "./routes/paths";
// import routes from "./routes/routes";
const routes = [
  { key: "route01", path: PATHS.login, element: <Login /> },
  { key: "route02", path: PATHS.dashboard, element: <Dashboard /> },
  { key: "route03", path: PATHS.customers, element: <Customers /> },
  { key: "route04", path: PATHS.clients, element: <Clients /> },
  { key: "route05", path: PATHS.campaigns, element: <Campaigns /> },
];

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Layout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                exact={true}
                element={route.element}
              />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter> */}
      <h1 className="text-4xl">Calss</h1>
    </div>
  );
};
export default App;
