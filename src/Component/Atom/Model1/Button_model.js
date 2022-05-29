import { Button } from 'antd'
import React, { useState } from 'react'
import Model_add from './Model_add'

function Button_model({btn_name,pop_title}) {
    const [modelpop, setmodelpop] = useState(false)
    let saveBtnFun=()=>{
        //function


    }
    
  return (<>
    <Button className='batch_btn'  onClick={()=>{setmodelpop(true)}}> {btn_name}</Button>
    <Model_add pop={modelpop} setmodelpop={setmodelpop} pop_title={pop_title}/>
    </>
  )
}

export default Button_model