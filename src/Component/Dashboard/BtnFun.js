import { Radio } from 'antd';
import React, { useState } from 'react'
import batch from '../Assets/batch.png'

function BtnFun(props) {
  const [placement, SetPlacement] = useState('admin');


  // let send_btn_data=()=>{
  //   props.Clicked_btn(placement)

  // }


  const placementChange = (e) => {
   
    props.Clicked_btn(e.target.value)
    SetPlacement(e.target.value)
   
   
    
   
  };
  return (
    <Radio.Group value={placement} onChange={placementChange}>
    <Radio.Button  className='btn_btnfun' value="admin">
      {placement==="admin"? <img className="img_logo" src={require("../Assets/batch.png")} alt=""/>: <img className="img_logo"src={require('../Assets/batch1.png')} alt=""/>}
    </Radio.Button>
    <Radio.Button  className='btn_btnfun' value="mentor">
      {placement==="mentor"? <img className="img_logo" src={require("../Assets/team1.png")} alt=""/>: <img className="img_logo" src={require('../Assets/team.png')} alt=""/>}
    </Radio.Button>
    <Radio.Button  className='btn_btnfun' value="employee">
      {placement==="employee"? <img  className="img_logo" src={require("../Assets/add1.png")} alt=""/>: <img className="img_logo" src={require('../Assets/add.png')} alt=""/>}
    </Radio.Button>
  </Radio.Group>
  )
}

export default BtnFun