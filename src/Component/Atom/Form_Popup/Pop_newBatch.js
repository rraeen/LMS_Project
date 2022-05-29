import React from "react";
import { Input } from "antd";
import { borderRadius, color } from "@mui/system";

function Pop_newBatch({ text = "text" , place="", style={width:"100%"}}) {
  return (
    <>
    <div color="gray" style={{padding:"10px" }}>
      {text} <br/>
      <input type={text} className={style} placeholder={place}  />
      </div>
    </>
  );
}

export default Pop_newBatch;
