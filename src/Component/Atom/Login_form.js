import { Button, Input } from "antd";
import { Row } from "antd";
import React from "react";
import { Col } from "antd";
import Input_ from "./Input_";
import BtnLogin from "./BtnLogin";
import logo1 from "../Assets/techno_elevate.png";
// import './Atom.css'

function Login_form() {
  return (
    <>
      <Row>
        <Col
          style={{ border: "1px solid green" }}
          className="container"
          xs={12}
        >
          <Row justify="center">
            <Col span={12}>
              <Row style={{ border: "1px solid red" }}>
                <center>
                  <img
                    style={{
                      border: "1px solid blue",
                      width: "100%",
                      height: "auto",
                    }}
                    className="image2"
                    src={logo1}
                    alt=""
                  />
                </center>
              </Row>
            </Col>
          </Row>
          <Row center="xs">
            <p className="login_text" style={{ fontSize: "2vw" }}>
              Login
            </p>
          </Row>
          <Row style={{ border: "1px solid red" }} justify="center">
            <Col style={{ border: "1px solid blue" }} span={12}>
              <Row>
                <Col offset={2}>
                  <h5 className="text_e_id" style={{ fontSize: "1.25vw" }}>
                    {" "}
                    Employee ID
                  </h5>
                </Col>
              </Row>
              <Row>
                <Input_ />
              </Row>

              {/* {emp_error&&<p className="error">{emp_error}</p>} */}

              <Col offset={2}>
                <h5 className="text_e_pass" style={{ fontSize: "1.25vw" }}>
                  Password
                </h5>
              </Col>
              <Row>
                <Input_ />
              </Row>

              {/* {pass_error&&<p className="error">{pass_error}</p>} */}
              <Row justify="center">
                <BtnLogin width="43%" marginTop="1rem" />
                <BtnLogin
                  value="Cancel"
                  className="transform"
                  width="43%"
                  bg_color="black"
                  marginTop="1rem"
                />
              </Row>
            </Col>
          </Row>

          <div className="copyRight">
            <hr />
            <p style={{ textAlign: "center", fontSize: "1.25vw" }}>
              {" "}
              Copyright &copy; 2018 Aleercio.com
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Terms & Conditions | Privacy
              policy
            </p>
          </div>
        </Col>
      </Row>
    </>

    
  );
}
export default Login_form;
