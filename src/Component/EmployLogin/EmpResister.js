import { Col, Form, Row, Tabs } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
// import { Tabs } from 'antd';
import "./Rform.css";
import "./tab.css";
import EmpResesterForm from "./EmpResesterForm";
import { style } from "@mui/system";
import { width } from "@mui/system";
import ResisterFormCard from "./ResisterFormCard";

import {
  AddressRenderFile,
  BankDetailRenderFile,
  ContactRenderFile,
  EducationRender,

 

  

  ExperienceRenderFile,

 

  

  PrimaryRenderFile,

 

  

  SecondaryRenderfile,

 

  

  SkillRenderFile,
} from "./FormsDetails";
import CollepsFormReuse from "./CollepsFormReuse";

const { TabPane } = Tabs;

function EmpResister() {
  const [TabKey, setTabKey] = useState(1);

  console.log(TabKey);
  let nextTabFun = () => {
    TabKey < 8 && setTabKey(TabKey + 1);
  };
  let previousTabFun = () => {
    TabKey > 1 && setTabKey(TabKey - 1);
  };

  const onKeyChange = (key) => {
    setTabKey(Number(key));
  };
  return (
    <>
      {/* <div className="fullFormStyle"> */}
      {/* <div className="cardComp1"> */}
      <Row span={24}>
        <Col span={24}>
          <Tabs
            centered={true}
            defaultActiveKey="1"
            activeKey={String(TabKey)}
            onChange={onKeyChange}
          >
            <TabPane tab="Primary Info" key="1">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={<PrimaryRenderFile/>}
              />
            </TabPane>
            <TabPane tab="Secondary Info" key="2">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={<SecondaryRenderfile/>}
              />
            </TabPane>
            <TabPane tab="Education Details" key="3">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <CollepsFormReuse
                    RenderFile={<EducationRender/>}
                    header={"Education Type"}
                  />
                }
              />
            </TabPane>
            <TabPane tab="Address Details" key="4">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <CollepsFormReuse
                    RenderFile={<AddressRenderFile/>}
                    header={"Address Type"}
                  />
                }
              />
            </TabPane>
            <TabPane tab="Banks Details" key="5">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={<BankDetailRenderFile/>}
              />
            </TabPane>
            <TabPane tab="Technical skills" key="6">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <CollepsFormReuse
                    RenderFile={<SkillRenderFile/>}
                    header={"Skill Type"}
                  />
                }
              />
            </TabPane>
            <TabPane tab="Experience" key="7">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <CollepsFormReuse
                    RenderFile={<ExperienceRenderFile/>}
                    header={"Exprience Type"}
                  />
                }
              />
            </TabPane>
            <TabPane tab="Contact" key="8">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <CollepsFormReuse
                    RenderFile={<ContactRenderFile/>}
                    header={"Contact Type"}
                  />
                }
              />
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
