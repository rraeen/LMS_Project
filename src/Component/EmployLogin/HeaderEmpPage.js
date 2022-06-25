import React from "react";
import logo from "../Assets/logo1.png";
import {
  Button,
  Card,
  
  Dropdown,
  Input,
  Layout,
  Modal,
  
  Space,
} from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import "./headder.css";
import "./Rform.css";

import { DownOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { borderRadius } from "@mui/system";
import Model_add from "../Atom/Model1/Model_add";
import ResisterFormCard from "./ResisterFormCard";
import Sider from "antd/lib/layout/Sider";
import { Col, Row } from "react-bootstrap";

function HeaderEmpPage({ empDashboardRender, home, page, sideBarRender }) {
  let logoutMenu = "";
  return (
    <>
      <Layout className="mynavbar2">
        <Header
          style={{
            background: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={logo} alt="" />

          <div>
            <UserOutlined
              style={{
                border: "1px solid gray",
                fontSize: "25px",
                padding: "5px",
                height: "40px",
                width: "40px",
                margin: "10px",

                borderRadius: "100%",
              }}
            />
            <Dropdown overlay={logoutMenu}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <b>Emp name</b>
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout >
       
       <Sider>{sideBarRender}</Sider>
        {/* <Content>
            <div>
          <p>
            {home} &gt; {page}
          </p>
          <div> {empDashboardRender}</div>
          </div></Content> */}
        </Layout>
      </Layout>
    </>
  );
}

export default HeaderEmpPage;
