import { Col, Form, Row, Tabs } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";

import "./Rform.css";
import "./tab.css";
import EmpResesterForm from "./EmpResesterForm";

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
import useKey from "./HandleKey/useKey";

const { TabPane } = Tabs;

function EmpResister() {
  const [resisterFormData, setresisterFormData] = useState({});

  let sendFormData = (obj) => {
    setresisterFormData({ ...resisterFormData, ...obj });
  };
  console.log(resisterFormData);

  const [TabKey, setTabKey] = useState(1);

  // ______________________________(usekey handle)_______________________________________
  const LeftArrow = () => {
    // console.log("Left Arrow pressed");
    TabKey > 1 && setTabKey(TabKey - 1);
  };
  const RightArrowFun = () => {
    // console.log("Right Arrow pressed");
    TabKey < 8 && setTabKey(TabKey + 1);
  };

  useKey("ArrowLeft", LeftArrow);
  useKey("ArrowRight", RightArrowFun);
  // ____________________________________________________________________________________________

  // ________________________(next &  previous  button handle)___________________________________

  // console.log(TabKey);
  let nextTabFun = () => {
    localStorage.setItem("newUser",resisterFormData)
    TabKey < 8 && setTabKey(TabKey + 1);

  };
  let previousTabFun = () => {
    TabKey > 1 && setTabKey(TabKey - 1);
  };

  const onKeyChange = (key) => {
    setTabKey(Number(key));
  };
  // ________________________________________________________________________________________________
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
                renderFile={<PrimaryRenderFile sendFormData={sendFormData} />}
              />
            </TabPane>
            <TabPane tab="Secondary Info" key="2">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={<SecondaryRenderfile sendFormData={sendFormData} />}
              />
            </TabPane>
            <TabPane tab="Education Details" key="3">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <CollepsFormReuse
                    RenderFile={<EducationRender sendFormData={sendFormData} />}
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
                    RenderFile={
                      <AddressRenderFile sendFormData={sendFormData} />
                    }
                    header={"Address Type"}
                  />
                }
              />
            </TabPane>
            <TabPane tab="Banks Details" key="5">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <BankDetailRenderFile sendFormData={sendFormData} />
                }
              />
            </TabPane>
            <TabPane tab="Technical skills" key="6">
              <ResisterFormCard
                nextFun={nextTabFun}
                previousFun={previousTabFun}
                renderFile={
                  <CollepsFormReuse
                    RenderFile={<SkillRenderFile sendFormData={sendFormData} />}
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
                    RenderFile={
                      <ExperienceRenderFile sendFormData={sendFormData} />
                    }
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
                    RenderFile={
                      <ContactRenderFile sendFormData={sendFormData} />
                    }
                    header={"Contact Type"}
                  />
                }
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
      <br />

      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default EmpResister;
