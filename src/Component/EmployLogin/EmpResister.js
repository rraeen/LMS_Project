import { Col, Form, Row, Tabs } from "antd";
import React from "react";
import "antd/dist/antd.css";
// import { Tabs } from 'antd';
import "./Rform.css";
import "./tab.css";
import EmpResesterForm from "./EmpResesterForm";
import { style } from "@mui/system";
import { width } from "@mui/system";
import ResisterFormCard from "./ResisterFormCard";

import { AddressRenderFile, BankDetailRenderFile, ContactRenderFile, EducationRender, EducationRenderFile, experienceRenderFile, primaryRenderFile, secondaryRenderfile, SkillRenderFile } from "./FormsDetails";
import CollepsFormReuse from './CollepsFormReuse';

const { TabPane } = Tabs;


function EmpResister() {
 
  
 

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
    {/* <div className="fullFormStyle"> */}
        {/* <div className="cardComp1"> */}
      <Row span={24}>
        <Col span={24} >
          <Tabs centered={true} defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="Primary Info" key="1">
              <ResisterFormCard renderFile={primaryRenderFile} />
            </TabPane>
            <TabPane tab="Secondary Info" key="2">
            <ResisterFormCard renderFile={secondaryRenderfile} />
            </TabPane>
            <TabPane tab="Education Details" key="3">
            <ResisterFormCard renderFile={<CollepsFormReuse RenderFile={EducationRender} header={"Education Type"}/>}/>
            </TabPane>
            <TabPane tab="Address Details" key="4">
            <ResisterFormCard renderFile={<CollepsFormReuse RenderFile={AddressRenderFile} header={"Address Type"}/>}/>
            </TabPane>
            <TabPane tab="Banks Details" key="5">
            <ResisterFormCard renderFile={BankDetailRenderFile} />
            </TabPane>
            <TabPane tab="Technical skills" key="6">
            <ResisterFormCard renderFile={<CollepsFormReuse RenderFile={SkillRenderFile} header={"Skill Type"}/>}/>
            </TabPane>
            <TabPane tab="Experience" key="7">
            <ResisterFormCard renderFile={<CollepsFormReuse RenderFile={experienceRenderFile} header={"Exprience Type"}/>}/>
            </TabPane>
            <TabPane tab="Contact" key="8">
            <ResisterFormCard renderFile={<CollepsFormReuse RenderFile={ContactRenderFile} header={"Contact Type"}/>}/>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default EmpResister;
