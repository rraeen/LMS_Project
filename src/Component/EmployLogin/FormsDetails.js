import {InputComp, InputCompNum} from "./InputComp";
import React, { useState } from "react";
import InputDateComp from "./InputDateComp";
import InputDropDown from "./InputDropDown";
import { Col, Form, Row, Collapse, Button } from "antd";
import "./FormDetails.css";
import { CaretRightOutlined, PlusCircleOutlined, UpOutlined } from "@ant-design/icons";
import { border, textAlign } from "@mui/system";

const { Panel } = Collapse;
let designation = ["mentor", "Technical Head", "Employee"];
let gender = ["Male", "Female", "Other"];
let nationality = ["America", "China", "India", "South Africa"];
let emp_status = ["Fresher", "Exprienced", "Tranee"];
export const primaryRenderFile = (
  <>
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col>
            <InputComp text="Employee ID" />
          </Col>
          <Col>
            {" "}
            <InputComp text="Employee Name" />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <InputDateComp text="Date of Joining" />
          </Col>
          <Col>
            <InputDateComp text="Date of Birth" />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputComp text="E-mail ID" />{" "}
          </Col>
          <Col>
            <InputComp text="Blood group" />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <InputDropDown text="Designation" dropOption={designation} />
          </Col>
          <Col>
            <InputDropDown text="Gender" dropOption={gender} />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputDropDown text="Nationality" dropOption={nationality} />
          </Col>
          <Col>
            <InputDropDown text="Employee Status" dropOption={emp_status} />
          </Col>
        </Row>
      </Col>
    </Form>
  </>
);

export const secondaryRenderfile = (
  <>
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col>
            <InputComp text="Pan No." />
          </Col>
          <Col>
            {" "}
            <InputComp text="Aadhar No." />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <InputComp text="Father Name." />
          </Col>
          <Col>
            {" "}
            <InputComp text="Mother Name" />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <InputComp text="Spouse Name." />
          </Col>
          <Col>
            {" "}
            <InputComp text="Passport No." />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <InputDropDown
              text="Marital status"
              dropOption={["Married", "Unmarried"]}
            />
          </Col>
        </Row>
      </Col>
    </Form>
  </>
);

export const EducationRender = (
  <Form style={{ margin: "2%", maxWidth: "100%" }}>
    <Col>
      <Row>
        <Col>
          <InputDropDown
            text="Education Type"
            dropOption={["BE", "B.tech", "BCA", "BSc"]}
          />
        </Col>
        <Col>
          {" "}
          <InputComp text="Year of Passing" />{" "}
        </Col>
      </Row>
      <Row>
        <Col>
          <InputComp text="Percentage (%)" />
        </Col>
        <Col>
          <InputDropDown
            text="University Name"
            dropOption={["DU", "AMU", "BHU", "Jamya"]}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputComp text="Institute Name" />
        </Col>
        <Col>
          <InputComp text="Specilization" />
        </Col>
      </Row>
      <Row>
        <Col>
          <InputDropDown
            text="Satate"
            dropOption={[
              "Bihar",
              "Bangal",
              "Utter pradesh",
              "Ranchi",
              "Karnataka",
            ]}
          />
        </Col>
        <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </Row>
    </Col>
  </Form>
);

export const BankDetailRenderFile = (
  <>
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col>
            <InputComp text="Account No." />
          </Col>
          <Col>
            {" "}
            <InputComp text="Bank Name" />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <InputDropDown
              text="Account Type"
              dropOption={["Saving A/c", "Current A/c", "Joint A/c"]}
            />
          </Col>
          <Col>
            <InputComp text="IFSC Code" />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputDropDown
              text="Branch"
              dropOption={["Saving A/c", "Current A/c", "Joint A/c"]}
            />
          </Col>
          <Col>
            <InputDropDown
              text="State"
              dropOption={["Saving A/c", "Current A/c", "Joint A/c"]}
            />
          </Col>
        </Row>
       
       
      </Col>
    </Form>
  </>
);

// const text = (
    



// )`
  
// `;





export const AddressRenderFile=(
   
             
              <Form style={{ margin: "2%", maxWidth: "100%" }}>
            <Col>
              <Row>
                <Col span={20}>
                  <InputDropDown text="Address Type" dropOption={["Local Address","Permament Address","Current Address"]}/>
                </Col>
                <Col>
                  {" "}
                  <InputComp text="Door No." />{" "}
                </Col>
              </Row>
              <Row>
              <Col>
                  {" "}
                  <InputComp text="Street" />{" "}
                </Col>
                <Col>
                  {" "}
                  <InputComp text="Locality" />{" "}
                </Col>
                  
              </Row>
              <Row>
              <Col>
                  {" "}
                  <InputDropDown text="City" dropOption={["Mumbai","Kolkat","Delhi","Bangalore"]}/>{" "}
                </Col>
                <Col>
                  {" "}
                  <InputDropDown text="State" dropOption={["Arunachal Pradesh","Bihar","Bangal","Jharkhand","Udisha","Karnataka", "Maharastra"]} />
                </Col>
                </Row>
              <Row>
              <Col>
                  {" "}
                  <InputComp text="Pin Code" />{" "}
                </Col>
                <Col>
                  {" "}
                  <InputComp text="Land Mark" />{" "}
                </Col>
      
              </Row>
              </Col>
          </Form>
)



export const SkillRenderFile=(

    <Form style={{ margin: "2%", maxWidth: "100%" }}>
    <Col>
      <Row>
        <Col span={20}>
          <InputComp text="Skill Type" />
        </Col>
        <Col>
          {" "}
          <InputComp text="Skill Rating" />
        </Col>
      </Row>
     
      <Row>
      <Col>
          {" "}
          <InputDropDown text="Year of Exprience" dropOption={[1,2,3,4,5]}/>{" "}
        </Col>
      
        </Row>
     
      </Col>
  </Form>
)

export const experienceRenderFile=(


    <Form style={{ margin: "2%", maxWidth: "100%" }}>
    <Col>
      <Row>
        <Col span={20}>
          <InputComp text="Company Name"/>
        </Col>
        <Col>
          {" "}
          <InputComp text="Year of Experience" />{" "}
        </Col>
      </Row>
      <Row>
      <Col>
          {" "}
          <InputComp text="Date of Joining" />{" "}
        </Col>
        <Col>
          {" "}
          <InputComp text="Date of Relieving" />{" "}
        </Col>
          
      </Row>
      <Row>
      <Col>
          {" "}
          <InputDropDown text="Designation" dropOption={["HR","Technical Head","Team Lead","Senior Dev. Eng.","juniar Eng."]}/>{" "}
        </Col>
       
        </Row>
     
      </Col>
  </Form>


)

export const ContactRenderFile=(

    <Form style={{ margin: "2%", maxWidth: "100%" }}>
    <Col>
      <Row>
        <Col span={20}>
          <InputComp text="Contact Type" />
        </Col>
        <Col>
          {" "}
          <InputCompNum text="Contact Number"/>{" "}
        </Col>
      </Row>
     
     
      </Col>
  </Form>
)
