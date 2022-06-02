import React from "react";
import { Input } from "antd";
import { borderRadius, color, fontFamily, fontSize } from "@mui/system";

function Pop_newBatch(
  { 
  text = "text",
  place = "", 
  type = "",
  myStyle,
  width = { wid: "20rem" } ,
  height = { wid: "" }}
) {
  return (
    <>
      <div
        style={{
          color: "#707070",
          // height: hight.hig,
          width: width.wid,
          padding: "10px",
          fontFamily: "Open Sans, Regular",
        }}
        className={myStyle}
      >
        <span
          style={{ color: "#707070", fontSize: "small", display: "inline" }}
        >
          {" "}
          {text}{" "}
        </span>
        <Input style={{height:height.hig}} type={type} placeholder={place} />
      </div>
    </>
  );
}

export default Pop_newBatch;
