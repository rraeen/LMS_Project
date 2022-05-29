import { Card, Col, Row } from "antd";
import React from "react";
import '../Atom/Atom.css'
import Login_form from "./Login_form";

function Card_({ height = "", width = "" }) {
  return (
    <Card style={{ height: height, width: width }} className="card">
      <Row style={{ height:"100%"}}>
          <Col span={12}>
          <div>
              <p className="text1">
                Good thing on
                <br /> your way!
              </p>
            </div>
          
          </Col>
          <Col span={12} style={{border:'1px solid blue' }}>
               
          </Col>

      </Row>
      
    </Card>
  );
}

export default Card_;
