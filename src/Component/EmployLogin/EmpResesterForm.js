import React from "react";
import Pop_newBatch from "./../Atom/Form_Popup/Pop_newBatch";
import DateComp from "./../Atom/FormComp/DateComp";
import DropComp from "./../Atom/FormComp/DropComp";
import { Form, Row, Col } from "antd";
import { width } from "@mui/system";
import "./Rform.css";

function EmpResesterForm() {
  return (
    <>
      <Form style={{margin:"0px"}}>
          <Col>
        <Row>
          <Col>
      <Pop_newBatch text="Employee ID" />    
           
          </Col>
          <Col> <Pop_newBatch text="Employee Name"/>    </Col>
        </Row>
        <Row>
          <Col><DateComp value="Date of Joining" /></Col>
          <Col><DateComp value="Date of Birth"/></Col>
        </Row>
        <Row>
          <Col><Pop_newBatch text="E-mail ID"/> </Col>
          <Col><Pop_newBatch text="Blood group"/> </Col>
        </Row>
        <Row >
          {/* <Col style={{margin:"10px"}}> <DropComp value="Designation"/></Col>
          <Col style={{margin:"10px"}}> <DropComp value="Gender" /></Col> */}
        </Row>
        {/* <Row>
          <Col style={{margin:"10px"}}> <DropComp value="Nationality" /></Col>
          <Col style={{margin:"10px"}}> <DropComp value="Employee Status" /></Col>
        </Row> */}
        </Col>
      </Form>

      {/* <Row>
        <Col >
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
        </Col>
        <Col>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Row></Row>
        </Col>
      </Row> */}
    </>
  );
}

export default EmpResesterForm;
