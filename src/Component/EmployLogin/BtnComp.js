import { Button } from "antd";
import React from "react";
import { color, padding, positions } from "@mui/system";
import { fontFamily } from "@mui/system";
import { fontSize } from "@mui/system";
import { border } from "@mui/system";

function BtnComp({ text,onClick=()=>{} }) {
  return (
    <Button onClick={onClick}
      style={{
          display:"-webkit-inline-flex",
          
        background: "#086288",
        color: "white",
        fontFamily: "Open Sans, Semibold",
        padding: "10px",
        fontSize: "1rem",
        border: "none",
        margin:"25px",        
      }}
    >
      {text}
    </Button>
  );
}

export default BtnComp;
