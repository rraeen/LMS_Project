import React, { useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import te_img from "./Assets/techno_elevate.png";
import { Input } from "antd";
import { Card } from "antd";
import "./newLogin.css";

import 'antd/dist/antd.css';
import { useNavigate } from "react-router";

function NewLogin() {
    let move=useNavigate()
    const [db, setdb] = useState([])
  const [logindata, setlogindata] = useState({
    Admin: "Admin",
    Mentor: "Mentor",
    Mentor_pass: 123456,
    Admin_Pass: 123456,
    Employee: [],
  });
  const [data, setdata] = useState({
    Employee_id: "",
    Employee_pass: "",
  });
  const [emp_error, setemp_error] = useState();
  const [pass_error, setpass_error] = useState();

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
  let saveToLocal=(value)=>{
      localStorage.setItem("status",value)
  }

  let savedata=()=>{
    passValidation()
    empValidation()
      if(empValidation() && passValidation){
          loginfun()
          let copydb=[...db]
          copydb.push(logindata)
          setdb(copydb)
          localStorage.setItem("db",db)
          setdata({
          Employee_id: "",
          Employee_pass: ""})
      }

  }

  let loginfun = () => {
    if (
      data.Employee_id == logindata.Admin &&
      data.Employee_pass == logindata.Admin_Pass
    ) {
      console.log("Admin login");
      move("/Admin")
      saveToLocal("Admin")

    } else if (
      data.Employee_id == logindata.Mentor &&
      data.Employee_pass == logindata.Mentor_pass
    ) {
      console.log("Mentor login");
      move("/Mentor")
      saveToLocal("Mentor")
    } else {
      console.log("Employee login");
      move("/Employee")
      saveToLocal("Employee")
    }
  };

  let handleDefault = (e) => {
    e.preventDefault();
  };

let moveToAdmin=()=>{
    move("/Admin")
}

  return (
    <div className="container">
      <Card className="card1">
        <Row className="first_row">
          <Col className="first_col" sx={24} span={14}>
            <div>
              <p className="text1">
                Good thing on
                <br /> your way!
              </p>
            </div>
          </Col>
          <Col className="second_col" sx={24} span={10}>
            {/* ________________________________________________________________________________________ */}

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
            {emp_error&&<p className="error">{emp_error}</p>}
            <Row>
              <p className="text_e_pass">Password</p>
            </Row>
            <Row>
              {" "}
              <Input
                className="input"
                type="password"
                name="Employee_pass"
                onChange={updatefun}
                value={data.Employee_pass}
                placeholder="Enter password"
              />
            </Row>
            {pass_error&&<p className="error">{pass_error}</p>}
            <br />

            <div className="ant-col ant-col-xs-12 ant-col-sm-24">
              <Row className="btn_row " span={24}>
                <Col>
                  <Button
                    className="btn_login"
                    
                    onClick={savedata}
                  >
                    Login
                  </Button>
                </Col>
                <br />
                <Col>
                  <Button
                    className="btn_cancel"
                   
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="copyRight">
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

