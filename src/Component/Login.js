import React from "react";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col } from "antd";
import img from "./Assets/img.png";
import te_img from "./Assets/techno_elevate.png";
import { Input } from "antd";

function Login() {
  return (
    <>
     
      <Row>
      <Row className="container">
        <Col className="item1" span={24}>
          <img className="back_img" src={img} alt="" />
        </Col>
      </Row>
      <Row>
        <Col className="side1" span={14}>
          <div>
            
            <p className="text1">Good thing on<br/> your way!</p>
          </div>
        </Col>
        <Col className="side2" span={10}>
{/* ________________________________________________________________________________________ */}
          <img  className="image2" src={te_img} alt="" />
          <p className="login_text" >Login</p>
          <p className="text_e_id"> Employee ID</p>
          <Input className="input"  />
          <p className="text_e_pass">Password</p>
          <Input className="input" /><br/>
         
         <div><Button className="btn_login" >Login</Button><br/>
          <Button className="btn_cancel" >Cancel</Button></div> 
          
{/* ____________________________________________________________________________________________ */}
        </Col>
        </Row>
      </Row>
         {/* <Row className="position_bottom">
        <Col className="side1_text" span={14}> 
              
        
        </Col>
        <Col className="side2_text" span={10}> hello</Col>
        </Row> 
      </Row>
      </Row> */}
    </>
  );
}

export default Login;
