import { border } from "@mui/system";
import { Button } from "antd";
import React from "react";
import "./Atom.css";

function BtnLogin({
  btnFun = "",
  value = "Login",
  width = "",
  bg_color = "",
  color = "",
  type = "",
  marginTop = "",
  Zindex = "",
  hight="",
  transform = "",
  radius="",
  size="",
  border=""
  
}) {
  return (
    <Button
      className="btn"
      style={{
        zIndex: Zindex,
        width: width,
        border:border, 
        height:hight,
        type: type,
        background: bg_color,
        color: color,
        marginTop: marginTop,
        fontSize: "1.25vw",
        borderRadius:radius,
        fontSize:size
      }}
      onClick={btnFun}
    >
      {value}
    </Button>
  );
}

export default BtnLogin;
