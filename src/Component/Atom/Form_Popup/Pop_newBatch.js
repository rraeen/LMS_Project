import React from "react";
import { Input } from "antd";
import { borderRadius, color, fontFamily, fontSize } from "@mui/system";

function Pop_newBatch({ text = "text" , place="", style={width:"20rem"}, type=""}) {
  return (
    <>
    <div  style={{color:"#707070", width:"20rem",padding:"10px", fontFamily:"Open Sans, Regular"}}>
     <span style={{color:"#707070", fontSize:"small", display:"inline"}}> {text} </span><br/>
      <Input type={type} placeholder="Basic usage" />
      </div>
    </>
  );
}

export default Pop_newBatch;
