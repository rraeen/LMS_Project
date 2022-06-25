import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NewLogin from "../NewLogin";
import '../Dashboard/dashboard.css'
import ReusableTable from '../ReUse/ReusableTable';
import Pop_newBatch from "../Atom/Form_Popup/Pop_newBatch";
import { Badge, DatePicker, Form } from "antd";
import DropComp from "../Atom/FormComp/DropComp";
import DateComp from './../Atom/FormComp/DateComp';

function Branch({ techValue = [] }) {
  let MentorOption=["Mentor1", "Mentor2", "Mentor3"]
  let TechOption=["react", "Angular", "javaScript"]

  
  let rowSelection = () => {}
   let columns = [
    {
      title: "No",
      dataIndex: "No",
      key: "No",
    },
    {
      title: "Batch_ID",
      dataIndex: "Batch_ID",
      key: "Batch_ID",
    },
    {
      title: "Batch_Name",
      dataIndex: "Batch_Name",
      key: "Batch_Name",
    },
    {
      title: "Mento_Name",
      dataIndex: "Mento_Name",
      key: "Mento_Name",
    },
    {
      title: "Technologies",
      dataIndex: "Technologies",
      key: "Technologies",
      render: (technologies) => (
        <>
          {techValue.map((val, idx) => {
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
      title: "Start_Date",
      dataIndex: "Start_Date",
      key: "Start_Date",
    },
    {
      title: "End_Date",
      dataIndex: "End_Date",
      key: "End_Date",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      render: () => {
        return <p style={{ color: "#D89119" }}>In Progress</p>;
      },
    },
    {
      title: "Action",
      dataIndex: "Action",
      key: "Action",
      render: () => {
        return (
          <>
            <i style={{cursor: 'pointer'}}   onClick={editDatafun} class="fa-solid fa-pencil"></i> &#160; &#160;
            <i style={{cursor: 'pointer'}}  onClick={deleteDatafun} class="fa-solid fa-trash"></i>
          </>
        );
      },
      //
    },
   ]
   const data = [];
  for (let i = 0; i < 5; i++) {
    data.push({
      No: i,
      Batch_ID: 25,
      Batch_Name: "Raunak",
      Mento_Name: "Fizan",
      Start_Date: "27-05-2022",
      End_Date: "00-00-0000",
    });
  }
 
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection1 = {
    selectedRowKeys,
    onChange: onSelectChange,
  };


  const editDatafun=()=>{

    console.log("edit value");

  }
  const deleteDatafun=()=>{
    console.log("delete value");
  }

  let renderFile1 = (
    <>
        <div
        style={{
          color: "#707070",
          width: "20rem",
          padding: "10px",
          fontFamily: "Open Sans, Regular",
        }}
      
      >   <Form>
        <Pop_newBatch type="text" text="Batch Name"/>
        <div style={{marginLeft:"10px"}}>
       <DropComp dropOption={MentorOption} value={"Mentor Name"} />
        <DropComp dropOption={TechOption} value={"Technologies"}  /></div>
        <DateComp value="Start Date" />
        <DateComp value="End Date" />
        </Form>
      </div>



    </>


  );
   
 

return (
  <>
  <ReusableTable 
    tableTitle="Batch list"
    modelTitle="Add new Mentor"
    btnName="+New Mentor"
    rowSelection={rowSelection1}
    columns={columns}
    data={data}
    renderFile={renderFile1}
    


  />
</>
  ); 
}

export default Branch;
