import { Input, Modal } from "antd";
import React, { useState } from "react";
import { Button } from "antd";
import "./model1.css";
import { useEffect } from "react";
import { style, width } from "@mui/system";
import { Footer } from "antd/lib/layout/layout";
import BtnLogin from './../BtnLogin';
import Button_model from "./Button_model";
import Pop_newBatch from "../Form_Popup/Pop_newBatch";

function Model_add({pop,setmodelpop,pop_title ="title" ,renderFile}) {
  console.log(pop);

  const [visible, setVisible] = useState();
  // console.log(visible);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    setVisible(pop);
  }, [visible]);

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);

    // setTimeout(() => {
    //   setVisible(false);
    //   setConfirmLoading(false);
    // }, 500);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
    setmodelpop(false);
  };

  return (
    <>
      <Modal
      
        title={pop_title}
        visible={pop}
        renderFile={renderFile}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
         footer={<button className="modBtn">Create</button>}
        // okText={"Create"}
       
      >
    
        <div className="model_center_input">
          {renderFile}
{/*           
        <Pop_newBatch type="text" text="Batch Name"/>
        <Pop_newBatch type="" text="Mentor Name"/>
        <Pop_newBatch  text="Technologies"/>
        <Pop_newBatch  text="Start Date"/>
        <Pop_newBatch  text="End Date"/> */}
        </div>
        
       
      </Modal>
    </>
  );
}

export default Model_add;
