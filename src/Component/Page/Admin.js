import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NewLogin from "../NewLogin";
import '../Dashboard/dashboard.css'
import ReusableTable from './../ReUse/ReusableTable';

function Admin() {
 

return (
    
     
    <>
            <div className="fullScreen">
             <ReusableTable />
            </div>
           
          </>
    
   
  ); 
}

export default Admin;
