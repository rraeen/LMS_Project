import { Button, Col, Layout, } from "antd";
import React, { useEffect, useState } from "react";
import "../Dashboard/dashboard.css";
import logo from "../Assets/logo1.png";
import "antd/dist/antd.css";

import { Input, Row } from "antd";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Card } from "antd";
// import { Radio } from "antd";
// import BtnFun from "./BtnFun";
// import Table_card from "./Table_card";
import Employee from "../Page/Request";
import Mentor from "./../Page/Mentor";
import { fontSize } from '@mui/system';
import BtnLogin from './../Atom/BtnLogin';

import Request from "../Page/Request";
import Branch from "../Page/Branch";
import MentorSidebar from "./MentorSidebar";
import MentorPage from "./MentorPage";
import MentroBatch from "./MentorBatch";
import Dashboard from './../Dashboard/Dashboard';
import { useNavigate } from "react-router";

const { Header, Sider, Content } = Layout;

// ____________________________________________________________________________________________

//   _____________________________________________________________________________________

function MentorDashboard() {
    const [sidebarData, setsidebarData] = useState("Dashboard")
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
  let move = useNavigate();
  let logoutFun=()=>{
    localStorage.setItem("status","");
    move("/")
    


  }
  
  
let sideBar=(data)=>{
    setsidebarData(data)
}
  //   _____________________________________________________________________________________

  return (
    <Layout>
      <Header className="mynavbar">
        <Row between="xs">
          <Col xs={8}>
            <img src={logo} alt="" />
          </Col>
          <Col xs={8}>
            <Input
              placeholder="Search Employee"
              prefix={<SearchOutlined />}
            />
          </Col>

          <Col xs={8}>
            <BtnLogin value="Logout" className="btnLogout" btnFun={logoutFun}  borderRadius="3%"hight="50%" color="#075575" marginTop="2%" border="1px solid #075575" bg_color="white"/>
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider className="sidebar col-2">
            <MentorSidebar Clicked_btn={sideBar}/>
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
                
               {
            //    sidebarData==="Batch"? <Branch techValue={tech}/>:
               
               sidebarData==="Dashboard"?<MentorPage/>: 
               sidebarData==="Batch"?<MentroBatch/>: 
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

export default MentorDashboard;
