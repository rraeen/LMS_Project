import React from "react";
import Login from "./Login";
import "./login_bg.css";
import img from "./Assets/bg.png";
import 'antd/dist/antd.css';

function Login_bg() {
  return (
    <>
    <div className="card_loging">
      <img src={img}  alt=""/>
      <div className="log_comp">
        <Login  />
      </div>
      </div>
    </>
  );
}

export default Login_bg;
