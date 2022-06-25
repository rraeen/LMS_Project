import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import HeaderEmpPage from "../HeaderEmpPage";
import EmpSideBar from "./EmpSideBar";
import "./EmpsideBar.css";
import "../../Dashboard/dashboard.css";
import { Radio } from "antd";
import NewLayout from "../NewLayout";
import logo from "../../Assets/logo1.png";
import Welcome from "./faltuKachra/Welcome";

function EmpDashboardPage() {

let logoRender=<Welcome/>

let ContentRenderFile=(<h1 style={{border:"red"}}>Welcome</h1>)

  
    

 
  return(
      <NewLayout logoRender={logoRender} ContentRenderFile={ContentRenderFile}/>
  )
}

export default EmpDashboardPage;
