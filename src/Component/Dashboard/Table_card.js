import { Button, Input } from "antd";
import { Col, Row, Table } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import Tech from "./Tech";
import Button_model from "../Atom/Model1/Button_model";
import { Badge } from "antd";
import Pop_newBatch from "../Atom/Form_Popup/Pop_newBatch";

function Table_card({ techValue = [] }) {
  // console.log(techValue);
  let i = 0;
  const [empData, setempData] = useState([]);
  const columns = [
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
  ];

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
  // ____________________________________________________________________________
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

  const rowSelection = {
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
      <Pop_newBatch type="text" text="Batch Name"/>
        <Pop_newBatch type="" text="Mentor Name"/>
        <Pop_newBatch  text="Technologies"/>
        <Pop_newBatch  text="Start Date"/>
        <Pop_newBatch  text="End Date"/>
    </>
  );

  return (
    <Row>
      <Col className="batch_list" span={3}>
        <b>Batch list</b>
      </Col>
      <Col span={8} offset={10} className="batch_search">
        <Input placeholder="Search " prefix={<SearchOutlined />} />
      </Col>
      <Col>
        <Button_model renderFile={renderFile1} pop_title={"Add new batch"} btn_name="+ New Batch"/>
      </Col>
      <Col span={24}>
        <Table
          className="table"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </Col>
    </Row>
  );
}

export default Table_card;
