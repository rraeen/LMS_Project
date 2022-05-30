import { Badge } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import DropComp from "../Atom/FormComp/DropComp";
import Pop_newBatch from "../Atom/Form_Popup/Pop_newBatch";
import "../Dashboard/dashboard.css";
import ReusableTable from "../ReUse/ReusableTable";

function Mentor() {
  let technologies=["react","Angular","javaScript"]
  let TechOption=["react","Angular","javaScript"]

  
 let rowSelection = () => {}
  let columns = [
    {
      title: "No",
      dataIndex: "No",
      key: "No",
    },
    {
      title: "Mentor Name",
      dataIndex: "Mentor_Name",
      key: "Mentor_Name",
    },
    {
      title: "Employee ID",
      dataIndex: "Employee_ID",
      key: "Employee_ID",
    },
    {
      title: "Email ID",
      dataIndex: "Email_ID",
      key: "Email_ID",
    },
    {
      title: "Skills",
      dataIndex: "Skills",
      key: "Skills",
      render: (tech) => (
        <>
          {technologies.map((val, idx) => {
            return (
              <span key={idx}>
                 <Badge count={val} style={{backgroundColor: '#086288'}} />
              </span>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: () => {
        return (
          <>
            <i style={{cursor: 'pointer'}} class="fa-solid fa-pencil"></i> &#160; &#160;

            <i style={{cursor: 'pointer'}} class="fa-solid fa-trash"></i>
          </>
        );
      },
      //
    }
  ]
  let data =[]

  for (let i = 0; i < 5; i++) {
    data.push({
      No: i,
      Mentor_Name: "Fizan",
      Employee_ID:25,
      Email_ID:"faizan@gmail.com",
    });
  }

  let renderFile=(
  
      <>
     <Pop_newBatch type="text" text="Mentor Name"/>
        <Pop_newBatch type="" text="Employ ID"/>
        <Pop_newBatch  text="E-mail-ID"/>
        <DropComp  dropOption={TechOption} value={"Skills"}  />
      </>
  )
  



  return (
    <>
      <ReusableTable 
        tableTitle="Mentor list"
        modelTitle="Add new Mentor"
        btnName="+New Mentor"
        rowSelection={rowSelection}
        columns={columns}
        data={data}
        renderFile={renderFile}

      />
    </>
  );
}

export default Mentor;
