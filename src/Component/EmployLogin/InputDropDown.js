import { Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React from 'react'

function InputDropDown({
    onChangeDrop=()=>{},
    dropOption=[],
    text="",
    classStyle="",
    myStyle="inputStyle",
    borderSide=""
}) {
  return (
    <>
    <span className='inputFormText'> {text} </span><br/>
    <Select
        className={myStyle}
          placeholder=""
          onChange={onChangeDrop}
          bordered={borderSide}
        
          allowClear
        >
           { dropOption.map((val,idx)=><Select.Option key={idx} value={val}>{val}</Select.Option>)}
         
        </Select>
    </>
  )
}

export default InputDropDown