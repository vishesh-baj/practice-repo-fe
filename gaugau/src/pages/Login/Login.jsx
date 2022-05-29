import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input/Input";
import { PATHS } from "../../routes/paths";
import LoginWrapper from "./LoginWrapper";
const Login = () => {
  // ? Login States __________________________________________
  const [loginObject, setLoginObject] = useState({
    email: "",
    password: "",
  });

  // UseNavigate
  const navigate = useNavigate();
  // ? Login Functions _______________________________________
  // handle input changes
  const handleChange = (e) => {
    setLoginObject({ ...loginObject, [e.target.name]: e.target.value });
    console.log(loginObject);
  };
  // handle submit change
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginObject);
    // TODO should be converted to state in future
    let logged = true;
    // TODO check if user is logged and navigate to dashboard
    logged && navigate(PATHS.dashboard);
  };
  // LOGIN JSX
  return (
    <LoginWrapper>
      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          name="email"
          label="Email ID"
          onChangeProp={handleChange}
        />

        <Input
          id="password"
          type="password"
          name="password"
          label="Password"
          onChangeProp={handleChange}
        />
        {/* ! to be converted to custom button in future */}
        <div className="flex justify-center">
          <button className="px-4 py-2 w-1/2 bg-sky-400">Login</button>
        </div>
      </form>
    </LoginWrapper>
  );
};
export default Login;
