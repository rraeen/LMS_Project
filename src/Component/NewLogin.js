import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import te_img from "./Assets/techno_elevate.png";
import { Input } from "antd";
import { Card } from "antd";
import "./newLogin.css";

import "antd/dist/antd.css";

import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function NewLogin() {
  // ____________________________________________________________states___________________________________________________________________________
  const [emp_error, setemp_error] = useState();
  const [pass_error, setpass_error] = useState();
  const [status, setstatus] = useState();
  // const [logindata, setlogindata] = useState({
  //   Admin: "Admin",
  //   Mentor: "Mentor",
  //   Mentor_pass: 123456,
  //   Admin_Pass: 123456,
  //   Employee: [],
  // });
  const [data, setdata] = useState({
    Employee_id: "",
    Employee_pass: "",
  });

  const [user, setuser] = useState({
    uname: "",
    pass: "",
  });
  // ____________________________________________________________________________________________________________________________________
  // ________________________________________________________________(Http Validation)_____________________________________________________

  let move = useNavigate();

  useEffect(() => {
    let s = localStorage.getItem("status");
    setstatus(s);
  }, []);

  if(status){
    status === "Admin"
    ? move("/Dashboard")
    : status === "Mentor"
    ? move("/Mentor")
    : status === "Employee"
    ? move("/CreateAccount")
    : move("/");
    
  }

  let httpLogin = async () => {
    try {
      let res = await axios.post("http://localhost:1337/api/auth/local", {
        identifier: data.Employee_id,
        password: data.Employee_pass,
      });
      if (res.request.status == 200) {
        let validuser = res.data.user.username;
        // console.log("login sucessfully");

        validuser === "Admin"
          ? move("/Dashboard")
          : validuser === "Mentor"
          ? move("/Mentor")
          : validuser === "Employee"
          ? move("/CreateAccount")
          : move("/");
        saveToLocal(validuser);
      }
    } catch (err) {
      console.log(err.message);
      setemp_error("*Invalid username");
      setpass_error("*Invalid password");
    }
  };

  // _________________________________________________________________________________________________________________________________________________

  // _________________________________________________________(Internal validation)_____________________________________________________________________

  let updatefun = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  let passValidation = () => {
    if (data.Employee_pass) {
      if (/^[0-9]*$/.test(data.Employee_pass)) {
        setemp_error("");
        return true;
      } else {
        setpass_error("*Invalid password");
      }
    } else {
      setpass_error("Password is required");
    }
  };

  let empValidation = () => {
    if (data.Employee_id) {
      if (/^[a-zA-Z]/.test(data.Employee_id)) {
        setemp_error("");
        return true;
      } else {
        setemp_error("*Invalid Employee id");
      }
    } else {
      setemp_error("*Emplyee Id is required");
    }
  };

  // ____________________________________________________________________________________________________________________________________
  let saveToLocal = (value) => {
    localStorage.setItem("status", value);
  };

  let savedata = () => {
    passValidation();
    empValidation();
    if (empValidation() && passValidation) {
      // loginfun();
      httpLogin();

      // let copydb = [...db];
      // copydb.push(logindata);
      // setdb(copydb);
      // localStorage.setItem("db", db);
      //   setdata({
      //     Employee_id: "",
      //     Employee_pass: "",
      //   });
    }
  };

  // let loginfun = () => {
  //   if (
  //     data.Employee_id == logindata.Admin &&
  //     data.Employee_pass == logindata.Admin_Pass
  //   ) {
  //     console.log("Admin login");
  //     // move("/Admin")
  //     saveToLocal("Admin");
  //   } else if (
  //     data.Employee_id == logindata.Mentor &&
  //     data.Employee_pass == logindata.Mentor_pass
  //   ) {
  //     console.log("Mentor login");
  //     // move("/Mentor")
  //     saveToLocal("Mentor");
  //   } else {
  //     console.log("Employee login");
  //     // move("/Employee")
  //     saveToLocal("Employee");
  //   }
  // };

  let handleDefault = (e) => {
    e.preventDefault();
  };

  // let moveToAdmin = () => {
  //   // move("/Admin")
  // };

  return (
    <div className="con">
      <Card className="card1">
        <Row className="first_row">
          <Col className="first_col" span={14}>
            <div>
              <p className="text1">
                Good thing on
                <br /> your way!
              </p>
            </div>
          </Col>
          <Col className="second_col" span={10}>
            {/* ________________________________________________________________________________________ */}
            <Col span={16} offset={4}>
              <Row>
                <img className="image2" src={te_img} alt="" />
              </Row>
              <Row>
                <p className="login_text">Login</p>
              </Row>
              <Row>
                <p className="text_e_id"> Employee ID</p>
              </Row>
              <br />
              <Row />
              <Row>
                <Input
                  className="input"
                  type="text"
                  name="Employee_id"
                  value={data.Employee_id}
                  onChange={updatefun}
                  placeholder="Enter Employee ID"
                />
              </Row>
              {emp_error && <p className="error">{emp_error}</p>}
              <Row>
                <p className="text_e_pass">Password</p>
              </Row>
              <Row>
                {" "}
                <Input.Password
                  className="input"
                  name="Employee_pass"
                  onChange={updatefun}
                  value={data.Employee_pass}
                  placeholder="Enter password"
                />
              </Row>
              {pass_error && <p className="error">{pass_error}</p>}
              <br />

              <div className="ant-col ant-col-xs-12 ant-col-sm-24">
                <Row className="btn_row " span={24}>
                  <Col>
                    {/* <Button className="btn_login" onClick={savedata}> */}
                    <button
                      style={{ textAlign: "left" }}
                      className="btnNewLogin"
                      onClick={savedata}
                    >
                      Login
                    </button>
                  </Col>
                  <br />
                  <Col>
                    <button className="btnNewCancel">Cancel</button>
                  </Col>
                </Row>
              </div>
            </Col>
            <div className="copyRight">
              <a
                style={{ fontSize: "120%", color: "white", padding: "10px" }}
                className="changePass"
              >
                <Link to="/CreateAccount"> change password</Link>
              </a>
              <hr />
              Copyright &copy; 2018 Aleercio.com
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Terms & Conditions | Privacy policy
            </div>

            {/* ____________________________________________________________________________________________ */}
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default NewLogin;
