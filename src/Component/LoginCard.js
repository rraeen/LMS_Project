import React from "react";
import { Button, DatePicker } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import { Row, Col } from "antd";
import img from "./Assets/img.png";
import te_img from "./Assets/techno_elevate.png";
import { Input } from "antd";
import { Card } from "antd";
function LoginCard() {
  return (
      <>
    <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
  </>
  )
}

export default LoginCard