import React, { useState } from 'react'

export const TestOnClickRender = () => {
    let x=1
   
    const [first, setfirst] = useState(true)
    let printFun=()=>{
        first?setfirst(false):setfirst(true)  
    }
    let print=(  <button onClick={printFun}> Add</button>)
    
  return (<>
 

{first? <>{print}</>:<>{print} {print}</>}
 
  
  
  
  </>

    
  )
}

 