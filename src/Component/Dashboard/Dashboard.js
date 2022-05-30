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
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Card } from "antd";
// import { Radio } from "antd";
import BtnFun from "./BtnFun";
import Table_card from "./Table_card";
import Employee from "../Page/Request";
import Mentor from "./../Page/Mentor";
import { fontSize } from '@mui/system';
import BtnLogin from './../Atom/BtnLogin';
import { borderRadius } from '@mui/system';
import Request from "../Page/Request";

const { Header, Sider, Content } = Layout;

// ____________________________________________________________________________________________

//   _____________________________________________________________________________________

function Dashboard() {
    const [sidebarData, setsidebarData] = useState("Batch")
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
            <BtnLogin value="Logout" borderRadius="3%"hight="50%" color="#075575" marginTop="2%" border="1px solid #075575" bg_color="white"/>
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
             
              <a className="home_hover">Home</a>
              <span style={{ color: "black" }}>
                <b style={{fontFamily:"Open Sans, Semibold" ,fontSize:"10px"}}>&nbsp;&gt;&nbsp;{sidebarData} </b>
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
                
               {sidebarData==="Batch"? <Table_card techValue={tech}/>:
               
               sidebarData==="Mentor"?<Mentor/>: 
               sidebarData==="Request"?<Request/>: 
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
