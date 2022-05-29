import { Input } from 'antd'
import React from 'react'

function Input_( {onChange="",value="",name="",placeHoleder="",width="",radius=""}) {
  return (
    <Input
                className="input"
                type="text"
                width={width}//12rem
                border-radius={radius} //0.5rem;
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeHoleder}
              />
  )
}

export default Input_