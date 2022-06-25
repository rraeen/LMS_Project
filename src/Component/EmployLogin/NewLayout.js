import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Breadcrumb, Layout, Row } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";


function NewLayout({
  home = "Home",
  page = "Profile",
  logoRender,
  headerContentRender = "",
  sideBarRenderFile = "",
  ContentRenderFile = "",
}) {
  let logoutMenu = "";
  return (
    <Layout>
      <Header className="white-header">
        {logoRender}
        {headerContentRender}
      </Header>
      <Layout>
        <Row>
          <Sider width={70} className="site-layout-background">
            {sideBarRenderFile}
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb separator=">">
                <Breadcrumb.Item>{home}</Breadcrumb.Item>
                <Breadcrumb.Item href="">{page}</Breadcrumb.Item>
              </Breadcrumb>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 700,
              }}
            >
             
              {ContentRenderFile}
            </Content>
          </Layout>
        </Row>
      </Layout>
    </Layout>
  );
}

export default NewLayout;
