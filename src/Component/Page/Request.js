import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import "../Dashboard/dashboard.css";
import ReusableTable from "../ReUse/ReusableTable";
import Button_model from './../Atom/Model1/Button_model';
import { height, style } from '@mui/system';
import { fontSize } from '@mui/system';
import { width } from '@mui/system';
import Pop_newBatch from "../Atom/Form_Popup/Pop_newBatch";

function Request() {
  let rowSelection = () => {};
  let columns = [
    {
      title: "No",
      dataIndex: "No",
      key: "No",
    },
    {
      title: "Employee ID",
      dataIndex: "Employee_ID",
      key: "Employee_ID",
    },
    {
      title: "Employee Name",
      dataIndex: "Employee_Name",
      key: "Employee_Name",
    },
    {
      title: "YOP",
      dataIndex: "YOP",
      key: "YOP",
    },
    {
      title: "Percentage",
      dataIndex: "Percentage",
      key: "Percentage",
    },
    {
      title: "Exprience",
      dataIndex: "Exprience",
      key: "Exprience",
    },
    {
      title: "Contact no",
      dataIndex: "Contact_no",
      key: "Contact_no",
    },
    { title: <>&nbsp;&nbsp;&nbsp;&nbsp;</>},
    
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
    
    render: () => {
      return (
        <>
        <div style={{display:"flex"}}>
         <Button_model btn_name={"Accept"} pop_title={"Change status"} style={{background:"#00951E1A" ,color:"#00811A" ,border:"1px solid #00811A80" ,fontSize:"100%", }}/>
         <Button_model btn_name={"Reject"} pop_title={"Reason for Rejection"}  style={{background:"#CE000E1A",color:"#CE000E" ,border:"1px solid #B2000C80", fontSize:"100%"}}/>
         </div>
        </>
      );
    },
  }
  ]
  let data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      No: i,
      Employee_ID:25,
      Employee_Name: "Fizan",
      YOP:"2017",
      Percentage:"70.6%",
      Exprience:"2 year",
      Contact_no:"9801058836",
      
    });
  }
  let renderFile=(
    <>
    <Pop_newBatch type="text" text="Mentor Name"/>
        <Pop_newBatch type="" text="Employ ID"/>
        </>
  )
  

 

  return (
    <>
      <ReusableTable
        tableTitle="Request list"
        btnHidden={true}
        rowSelection={rowSelection}
        columns={columns}
        data={data}
        renderFile={renderFile}
        //renderFile={renderFile}
      />
    </>
  );
}

export default Request;
