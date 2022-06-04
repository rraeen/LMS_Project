import { Input, InputNumber } from "antd";
import React from "react";
import "./Rform.css";

export const InputComp = ({
  text = "text",
  place = "",
  type = "",
  myStyle = "inputStyle",
  InpName,
  inpValue,
  onInpChange = () => {},
}) => {
  return (
    <>
      <span className="inputFormText"> {text} </span>
      <br />
      <Input
        type={type}
        onChange={onInpChange}
        name={InpName}
        className={myStyle}
        placeholder={place}
        value={inpValue}
      />
    </>
  );
};
export const InputCompNum = ({
  text = "text",
  place = "",
  myStyle = "inputStyle",
  numValue,
  numName,
  onNumChange = () => {},
}) => {
  return (
    <>
      <span className="inputFormText"> {text} </span>
      <br />
      <Input
        prefix="+91 |"
        type={"tel"}
        onChange={onNumChange}
        name={numName}
        className={myStyle}
        placeholder={place}
        value={numValue}
      />
    </>
  );
};
