import { Button } from "antd";
import React, { useState } from "react";
import Pop_newBatch from "../Form_Popup/Pop_newBatch";
import Model_add from "./Model_add";

function Button_model({
  btn_name,
  pop_title,
  btnHide,
  bg_color,
  style,
  renderFile,
}) {
  const [modelpop, setmodelpop] = useState(false);
  let saveBtnFun = () => {
    //function
  };
 

  return (
    <>
      <Button
        style={style}
        bg_color={bg_color}
        className={btnHide ? "btn_hide" : "batch_btn"}
        onClick={() => {
          setmodelpop(true);
        }}
      >
        
        {btn_name}
      </Button>
      <Model_add
        pop={modelpop}
        setmodelpop={setmodelpop}
        pop_title={pop_title}
        renderFile={renderFile}
      />
    </>
  );
}

export default Button_model;
