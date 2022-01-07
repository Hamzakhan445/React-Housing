import React, { useState, useEffect } from "react";
import User from "../HomeComp/User";
import RegisterBox from "./RegisterBox";

const LoginBox = (reg) => {
  const [userEmail, setUserEmail] = useState("Hamza@gmail.com");
  const [userPassword, setUserPassword] = useState("1234");
 
  if (userEmail == "Hamza@gmail.com" && userPassword == 1234) {
    return <User />;
  } else {
  }

  return (
    <>
      <div className="loginbox active-content">
        <form action="">
          <div className="form">
            <button type="button">
              <i className="fa fa-envelope"></i>
            </button>
            <input type="text" placeholder="Email" name="email" />
          </div>

          <div className="form">
            <button type="button">
              <i className="fa fa-key"></i>
            </button>
            <input type="password" placeholder="Password" name="pwd" />
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-success w-100"
          />

          <span className="d-flex justify-content-end">
            <a href="#" className="nav-link text-right ">
              Forgot Password
            </a>
          </span>
        </form>
      </div>
    </>
  );
};

export default LoginBox;
