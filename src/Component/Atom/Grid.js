import { Col, Row } from "antd";
import React from "react";
import logo1 from "../Assets/logo1.png";

function Grid() {
  return (
    <>
      <Row justify="center">
        <Col style={{border:"1px solid red"}} span={12}>
            <center><img className="image2" src={logo1} alt="" /></center> 
        </Col>
      </Row>


      <Row justify="center">
      <Col style={{border:"1px solid red"}} span={12}>col-4</Col>
      
    </Row>
    </>
  );
}

export default Grid;
