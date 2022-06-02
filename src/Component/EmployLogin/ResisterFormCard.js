import { Card, Col, Row } from "antd";
import React from "react";
import BtnLogin from "./../Atom/BtnLogin";
import { height } from "@mui/system";
import BtnComp from "./BtnComp";
import "./Rform.css";

function ResisterFormCard({ renderFile,  bor=""}) {
  return (
<>
      <div className="cardRenderStyle" >
          
         {renderFile}
        
      </div>
      <footer>
      <Card className="cardComp2">
        <Row justify="space-between" style={{ borderRadius: "8px" }}>
          <Col span={8}>
            {" "}
            <BtnComp text={"Previous"} />
          </Col>
          <Col >
            <BtnComp text={"Next"} />
          </Col>
        </Row>
      </Card>
      </footer>
    </>
  );
}

export default ResisterFormCard;
