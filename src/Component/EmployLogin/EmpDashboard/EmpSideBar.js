import { Radio } from "antd";
import React, { useState } from "react";

function EmpSideBar() {
  const [placement, setplacement] = useState("Profile");

  const placementChange = (e) => {
    // props.Clicked_btn(e.target.value)
    setplacement(e.target.value);
  };
  console.log(placement);
  return (
  
    <div >
      <Radio.Group value={placement} onChange={placementChange}>
        <Radio.Button className="btn_btnfun" value="Dashboard">
          {placement === "Dashboard" ? (
            <img
              className="img_logo"
              src={require("../../Assets/Mdash1.png")}
              alt=""
            />
          ) : (
            <img
              className="img_logo"
              src={require("../../Assets/Mdash2.png")}
              alt=""
            />
          )}
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}

export default EmpSideBar;
