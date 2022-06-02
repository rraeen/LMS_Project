import { Form, Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { useState } from 'react'
import { width } from '@mui/system';

function DropComp({
    onChangeDrop=()=>{},
    dropOption=[],
    value="",
    classStyle="",
    mystyle=""
}) {


 

  return (
    // <Form>
     
    //   <Form.Item
    //     name="gender"
    //     style={{marginLeft:"0.75rem",padding:"0px",}}
    //   >
    <>
    <div style={{marginLeft:"",padding:"0px", }}>
           <span className={classStyle} style={{color:"#707070", fontSize:"small", display:"inline"}}> {value} </span><br/>
        <Select
        className={mystyle}
        style={{margin:"0px", width:"18.5rem"}}
          placeholder=""
          onChange={onChangeDrop}
        
          allowClear
        >
           { dropOption.map((val,idx)=><Option key={idx} value={val}>{val}</Option>)}
         
        </Select>
        </div>
        </>
    //   </Form.Item>
      
   
    // </Form>
  )
}

export default DropComp