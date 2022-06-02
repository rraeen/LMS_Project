import { PlusCircleOutlined, UpOutlined } from '@ant-design/icons'
import { Collapse } from 'antd'
import React, { useState } from 'react'
import { AddressRenderFile } from './FormsDetails';
import { padding } from '@mui/system';
const { Panel } = Collapse;

const CollepsFormReuse = ({RenderFile,header=""}) => {
    
        const [AddButton, setAddButton] = useState(true)
        let printFun=()=>{
            AddButton?setAddButton(false):setAddButton(true) 

        }
            let AddresWithoutfun =(<>
            
        <div className="CollapseStyle">
          <Collapse 
          
            expandIcon={({ isActive }) => <UpOutlined rotate={isActive ? -180 : 0} />}
            expandIconPosition="right"
            defaultActiveKey={["1"]}
            ghost
            className="collapsStyle"
           
            accordion={true}
          >
            <Panel header={header} key="1" forceRender={true}   className="site-collapse-custom-panel">
              {/* ________________________________________________________________ */}
                                          {RenderFile}
              {/* ______________________________________________________________________________ */}
              
          <a  style={{color:"#086288" ,textAlign:"right" ,marginTop:"-2.5rem" , padding:"1.5rem ",  bottom:"0"}} onClick={printFun}>  <PlusCircleOutlined style={{fontSize:"1.5rem", padding:"5px"}} /> Add</a>
        
             
            </Panel>
          </Collapse>
          </div>
        </>
      );
    return(
        <>
        {AddButton? <h1>{AddresWithoutfun}</h1>:<h1>{AddresWithoutfun}<br/>{AddresWithoutfun}</h1>}

        </>
    )
}

         

export default CollepsFormReuse