import React from 'react'
import HeaderEmpPage from '../HeaderEmpPage'
import "../headder.css";
import "../Rform.css";
import { Content } from 'antd/lib/layout/layout';
import { Button } from 'antd';

function EmpResisterCompleat() {
    let RenderFile=(
    <Content className="conterntStyle1">
    <div className="conterntStyle">
      
        <div className="empCardStyle"><h1>Your request will be approved <br/> in sometime, Please wait</h1>
        <Button className=" empFormBtn">Return</Button>
        </div>
      
    </div>
  </Content>)
  return (
      
    <HeaderEmpPage  empDashboardRender={RenderFile} />
  )
}

export default EmpResisterCompleat