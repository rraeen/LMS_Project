import { Radio } from 'antd';
import React, { useState } from 'react'
import batch from '../Assets/batch.png'

function MentorSidebar(props) {
  const [placement, SetPlacement] = useState('Dashboard');


  // let send_btn_data=()=>{
  //   props.Clicked_btn(placement)

  // }


  const placementChange = (e) => {
   
    props.Clicked_btn(e.target.value)
    SetPlacement(e.target.value)
   
   
    
   
  };
  console.log(placement);
  return (
    <Radio.Group value={placement} onChange={placementChange}>
    <Radio.Button  className='btn_btnfun' value="Dashboard">
      {placement==="Dashboard"? <img className="img_logo" src={require("../Assets/Mdash1.png")} alt=""/>: <img className="img_logo"src={require('../Assets/Mdash2.png')} alt=""/>}
    </Radio.Button>
    <Radio.Button  className='btn_btnfun' value="Batch">
      {placement==="Batch"? <img className="img_logo" src={require("../Assets/batch.png")} alt=""/>: <img className="img_logo" src={require('../Assets/batch1.png')} alt=""/>}
    </Radio.Button>
   
  </Radio.Group>
  )
}

export default MentorSidebar