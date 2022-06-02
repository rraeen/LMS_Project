// import logo from "./logo.svg";
// import "./App.css";
// import Login from "./Component/Final/Login";
// import Login_bg from "./Component/Login_bg";
// // import card from "./Component/LoginCard";
// // import LoginCard from "./Component/LoginCard";
// import "./Component/index.css";
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import NewLogin from "./Component/NewLogin";
import Admin from "./Component/Page/Branch";
import Mentor from "./Component/Page/Mentor";
import Employee from "./Component/Page/Request";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// // import Dashboard from "./Component/Dashboard/Dashboard";
// // import Callme from "./Component/Reusable/Callme";
// import './Component/index.css'
// // import Dashboard from './Component/Dashboard/Dashboard';
// // import BtnFun from './Component/Dashboard/BtnFun';
// // import Table_card from "./Component/Dashboard/Table_card";
// // import Tech from "./Component/Atom/Tech";
// // import BtnLogin from "./Component/Atom/BtnLogin";
// // import Input_ from "./Component/Atom/Input_";
// // import Card_ from "./Component/Atom/Card_";
// // import Login_form from "./Component/Atom/Login_form";
// // import Grid from "./Component/Atom/Grid";
// import Form from "./Component/Atom/Form";
import Dashboard from "./Component/Dashboard/Dashboard";
import React from "react";
import Model_add from "./Component/Atom/Model1/Model_add";
import Button_model from "./Component/Atom/Model1/Button_model";
import Pop_newBatch from "./Component/Atom/Form_Popup/Pop_newBatch";
import BtnLogin from "./Component/Atom/BtnLogin";
import Login_form from "./Component/Atom/Login_form";
import ReusableTable from "./Component/ReUse/ReusableTable";
import Branch from "./Component/Page/Branch";
import DropComp from "./Component/Atom/FormComp/DropComp";
import EmployPage from "./Component/EmployLogin/EmpResister";
import MentorPage from "./Component/MentorLogin/MentorPage";
import EmpResesterForm from "./Component/EmployLogin/EmpResesterForm";
import EmpResister from "./Component/EmployLogin/EmpResister";
import ResisterFormCard from './Component/EmployLogin/ResisterFormCard';
import { TestOnClickRender } from './Component/Test/TestOnClickRender';

function App() {
  // let arr=["male","female","other"]
  return (
    // <EmpResesterForm/>
    // <EmpResister />
    // <TestOnClickRender />
    // <ResisterFormCard />
    
    <Dashboard />
    // <BtnLogin value='myButton' color='Red' bg_color='Yellow'/>
    // <BtnLogin bg_color='red' color='yello'/>
    //  <NewLogin/>
    // <DropComp dropOption={["male","female","other"]}/>
    // <MentorPage/>
    // <EmployPage />

    // <BrowserRouter>
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<NewLogin />} />
    //       <Route path="/Dashboard" element={<Dashboard />} />
    //       <Route path="/Mentor" element={<MentorPage />} />
    //       <Route path="/Employee" element={<EmployPage />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

    // <><h1>hello</h1></>
    // <div>
    //    {/* <Dashboard/> */}
    //    {/* <Branch/> */}
    //    {/* <ReusableTable /> */}

    //    {/* <Pop_newBatch text='Batch Name' /> */}
    //   {/* // <Button_model  btn_name={"Raunak"}  />
    //   // <BtnLogin bg_color='red' value='hello'/>  */}

    //   {/* <Pop_newBatch /> */}
    //  {/* <Model_add/> */}
    //  {/* <Button_model /> */}

    //   {/* <NewLogin/> */}
    //    {/* ________________________ */}

    //   <BrowserRouter>
    //     <div className="App">

    //      <Routes>
    //         <Route path="/Dashboard" element={<Dashboard />} />
    //         <Route path="/" element={<NewLogin />} />
    //         <Route path="/Mentor" element={<Mentor />} />
    //         <Route path="/Employee" element={<Employee />} />
    //       </Routes>
    //     </div>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
