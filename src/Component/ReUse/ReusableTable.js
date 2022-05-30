import { SearchOutlined } from '@ant-design/icons';
import { Badge, Col, Input, Row, Table } from 'antd';
import React, { useState } from 'react'
import Button_model from '../Atom/Model1/Button_model';

function ReusableTable({ 
    btnHidden = false,
    modelTitle = "title",
    btnName="btn",
    tableTitle="table title",
    rowSelection = () => {},
    columns = [],
    data =[],
    renderFile={}
 } ){
  
    return (
      <Row>
        <Col className="batch_list" span={3}>
          <b>{tableTitle}</b>
        </Col>
        <Col span={8} offset={10} className="batch_search" >
          <Input placeholder="Search " prefix={<SearchOutlined />} />
        </Col>
        <Col>
          <Button_model pop_title={modelTitle} btn_name={btnName} btnHide={btnHidden} renderFile={renderFile}/>
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

export default ReusableTable