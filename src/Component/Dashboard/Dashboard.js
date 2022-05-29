import { Button, Col, Layout, } from "antd";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
import logo from "../Assets/logo1.png";
// import batch1 from "../Assets/batch1.png";
// import batch from "../Assets/batch.png";
// import team from "../Assets/team.png";
// import add from "../Assets/add.png";
import "antd/dist/antd.css";

import { Input, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Card } from "antd";
// import { Radio } from "antd";
import BtnFun from "./BtnFun";
import Table_card from "./Table_card";
import Employee from "../Page/Employee";
import Mentor from "./../Page/Mentor";

const { Header, Sider, Content } = Layout;

// ____________________________________________________________________________________________

//   _____________________________________________________________________________________

function Dashboard() {
    const [sidebarData, setsidebarData] = useState("admin")
    const [tech, settech] = useState(["react","angular","javascript"])
    // ________________________________________button__________________________________________________
    const [placement, SetPlacement] = useState('');

    // const placementChange = (e) => {
    //     SetPlacement(e.target.value);
    //   };
  // ________________________________________________________________________________________
  useEffect(() => {

    console.log(sidebarData);
    
  
   
    
  })
  
  
let sideBar=(data)=>{
    setsidebarData(data)
}
  //   _____________________________________________________________________________________

  return (
    <Layout>
      <Header className="navbar">
        <Row between="xs">
          <Col xs={8}>
            <img src={logo} alt="" />
          </Col>
          <Col xs={8}>
            <Input
              placeholder="Search Mentor/Employee"
              prefix={<SearchOutlined />}
            />
          </Col>

          <Col xs={8}>
            <Button>Logout</Button>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider className="sidebar col-2">
            <BtnFun Clicked_btn={sideBar}/>
        </Sider>

        <Content>
          <div className="site-card-border-less-wrapper">
            <div className="menu_div">
              {" "}
              <span>Home</span>{" "}
              <span style={{ color: "black" }}>
                <b>&gt;{sidebarData} </b>
              </span>
            </div>
            <Row>
                <Col span={24}>
            <Card
              className="card_table"
              bordered={false}
              style={{ width: "98%" }}
            >
              <Row>
             
                <Col span={24}>
                
                  {" "}
                
               {sidebarData==="admin"? <Table_card techValue={tech}/>:
               
               sidebarData==="mentor"?<Mentor/>: 
               sidebarData==="employee"?<Employee/>: 
              <h1>Login Page</h1>}  
                </Col>
              </Row>


            </Card>
            </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
