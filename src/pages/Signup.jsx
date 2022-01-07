import React, { useState } from "react";
import MainHeading from "../HomeComp/MainHeading";
import LoginBox from "../HomeComp/LoginBox";
import RegisterBox from "../HomeComp/RegisterBox";
import ForgotBox from "../HomeComp/ForgotBox";

const Signup = () => {
  const [toggle, setToggle] = useState(1);

  const show = (index) => {
    setToggle(index);
  };
 
  return (
    <>
      <div className="signup pt-3 ">
        <MainHeading text="SIGN UP & LOGIN HERE " />

        <div className="signup_section">
          <div className="container-md">
            <div className="row justify-content-between align-items-center ">
              <div className="col-lg-5 m-3 tabs_box">
                <div className="tabs_wrapper">
                  <div
                    className={toggle === 1 ? "tabbox active" : "tabbox"}
                    id="tab1"
                    onClick={() => show(1)}
                  >
                    <i className="fa fa-user"> </i>
                    <br />
                    <p> Profile </p>
                  </div>

                  <div
                    className={toggle === 2 ? "tabbox  active registertab" : "tabbbox"}
                    id="tab2"
                    onClick={() => show(2)}
                  >
                    <i className="fa fa-edit"> </i>
                    <br />
                    <p> Register </p>
                  </div>

                  <div
                    className={toggle === 3 ? "tabbox active" : "tabbbox"}
                    id="tab3"
                    onClick={() => show(3)}
                  >
                    <i className="fa fa-lock"> </i>
                    <br />
                    <p> Forgot Password? </p>
                  </div>
                </div>
              </div>
              `
              <div className="col-lg-6 p-4 bg-white text-dark ">
                <div className={toggle === 1 ? "active-content" : "content"}>
                  <LoginBox />
                </div>

                <div
                  className={
                    toggle === 2 ? "content active-content" : "content"
                  }
                >
                  <RegisterBox />
                </div>

                <div
                  className={
                    toggle === 3 ? "content active-content" : "content"
                  }
                >
                  <ForgotBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
