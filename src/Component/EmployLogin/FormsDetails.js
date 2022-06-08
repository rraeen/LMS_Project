import { InputComp, InputCompNum } from "./InputComp";
import React, { useEffect, useState } from "react";
import InputDateComp from "./InputDateComp";
import InputDropDown from "./InputDropDown";
import { Col, Form, Row, Collapse, Button } from "antd";
import moment from "moment";
import "./FormDetails.css";
import {
  CaretRightOutlined,
  PlusCircleOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { border, textAlign } from "@mui/system";
// _________________________________________________________________________________________________
const { Panel } = Collapse;
let designation = ["mentor", "Technical Head", "Employee"];
let gender = ["Male", "Female", "Other"];
let nationality = ["America", "China", "India", "South Africa"];
let emp_status = ["Fresher", "Exprienced", "Tranee"];

// __________________________________________________________________________________________
// const EmpData = {
//   primaryInfoData: {
//     Employee_ID: "",
//     Employee_Name: "",
//     Date_of_Joining: "",
//     Date_of_Birth: "",
//     Email_ID: "",
//     Blood_group: "",
//     Designation: "",
//     Gender: "",
//     Nationality: "",
//     Employee_Status: "",
//   },

//   secondaryInfo: {
//     Pan_No: "",
//     Aadhar_No: "",
//     Father_Name: "",
//     Mother_Name: "",
//     Spouse_Name: "",
//     Passport_No: "",
//     Marital_status: "",
//   },

//   educationInfo: {
//     Education_Type: "",
//     Year_of_Passing: "",
//     Percentage: "",
//     University_Name: "",
//     Institute_Name: "",
//     Specilization: "",
//     Satate: "",
//   },

//   bankDetailInfo: {
//     Account_No: "",
//     Bank_Name: "",
//     Account_Type: "",
//     IFSC_Code: "",
//     Branch: "",
//     State: "",
//   },

//   addressInfo: {
//     Address_Type: "",
//     Door_No: "",
//     Street: "",
//     Locality: "",
//     City: "",
//     State: "",

//     Pin_Code: "",
//     Land_Mark: "",
//   },

//   skillInfo: {
//     Skill_Type: "",
//     Skill_Rating: "",
//     Year_of_Exprience: "",
//   },
//   experienceInfo: {
//     Company_Name: "",
//     Year_of_Experience: "",
//     Date_of_Joining: "",
//     Date_of_Relieving: "",
//     Designation: "",
//   },
//   contactInfo: {
//     Contact_Type: "",
//     Contact_Number: "",
//   },
// };

export const PrimaryRenderFile = ({ sendFormData }) => {
  const [primaryFileData, setprimaryFileData] = useState({
    Employee_ID: "",
    Employee_Name: "",
    Date_of_Joining: "",
    Date_of_Birth: "",
    Email_ID: "",
    Blood_group: "",
    Designation: "",
    Gender: "",
    Nationality: "",
    Employee_Status: "",
  });
  // sendFormData(primaryFileData)

  let updateEmpOnChange = (e) => {
    setprimaryFileData({ ...primaryFileData, [e.target.name]: e.target.value });
  };

  let updateDropdown = (val, name) => {
    setprimaryFileData({ ...primaryFileData, [name]: val });
  };
  // console.log(primaryFileData);

 

  useEffect(() => {
    sendFormData({ Primary: primaryFileData });
  }, [primaryFileData]);

  const dateFormat = "YYYY/MM/DD";

  return (
    <>
      <Form style={{ margin: "2%", maxWidth: "100%" }}>
        <Col>
          <Row>
            <Col>
              <InputComp
                onInpChange={updateEmpOnChange}
                InpName="Employee_ID"
                inpValue={primaryFileData.Employee_ID}
                text="Employee ID"
              />
            </Col>
            <Col>
              {" "}
              <InputComp
                onInpChange={updateEmpOnChange}
                InpName="Employee_Name"
                inpValue={primaryFileData.Employee_Name}
                text="Employee Name"
              />{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <InputDateComp
                format={dateFormat}
                value={moment()}
                onChange={(date, dateString) => {
                  console.log(date);
                  setprimaryFileData({
                    ...primaryFileData,
                    Date_of_Joining: date,
                  });
                }}
                InpName="Date_of_Joining"
                name="Date_of_Joining"
                vlaue={primaryFileData.Date_of_Joining}
                text="Date of Joining"
              />
            </Col>
            <Col>
              <InputDateComp
                onChange={(date, dateString) => {
                  console.log(date);
                  setprimaryFileData({
                    ...primaryFileData,
                    Date_of_Birth: date,
                  });
                }}
                InpName="Date_of_Birth"
                inpValue={primaryFileData.Date_of_Birth}
                text="Date of Birth"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <InputComp
                onInpChange={updateEmpOnChange}
                InpName="Email_ID"
                inpValue={primaryFileData.Email_ID}
                text="E-mail ID"
              />
            </Col>
            <Col>
              <InputComp
                onInpChange={updateEmpOnChange}
                InpName="Blood_group"
                inpValue={primaryFileData.Blood_group}
                text="Blood group"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <InputDropDown
                onChangeDrop={(val) => updateDropdown(val, "Designation")}
                name="Designation"
                text="Designation"
                dropOption={designation}
              />
            </Col>
            <Col>
              <InputDropDown
                onChangeDrop={(val) => updateDropdown(val, "Gender")}
                name="Gender"
                text="Gender"
                dropOption={gender}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <InputDropDown
                onChangeDrop={(val) => updateDropdown(val, "Nationality")}
                name="Nationality"
                text="Nationality"
                dropOption={nationality}
              />
            </Col>
            <Col>
              <InputDropDown
                onChangeDrop={(val) => updateDropdown(val, "Employee_Status")}
                name="Employee_Status"
                text="Employee Status"
                dropOption={emp_status}
              />
            </Col>
          </Row>
        </Col>
      </Form>
    </>
  );
};

export const SecondaryRenderfile = ({ sendFormData }) => {


  const [secondaryFileData, setsecondaryFileData] = useState({
    Pan_No: "",
    Aadhar_No: "",
    Father_Name: "",
    Mother_Name: "",
    Spouse_Name: "",
    Passport_No: "",
    Marital_status: "",
  });

  useEffect(() => {
    sendFormData({ Secondary: secondaryFileData });
  }, [secondaryFileData]);


  let updateEmpOnChange = (e) => {
    setsecondaryFileData({
      ...secondaryFileData,
      [e.target.name]: e.target.value,
    });
  };

  let updateDropdown = (val, name) => {
    setsecondaryFileData({ ...secondaryFileData, [name]: val });
  };
  // console.log(secondaryFileData);
  // sendFormData({Secondary:secondaryFileData})

  return (
    <>
      <Form style={{ margin: "2%", maxWidth: "100%" }}>
        <Col>
          <Row>
            <Col>
              <InputComp
                text="Pan No."
                onInpChange={updateEmpOnChange}
                InpName="Pan_No"
                inpValue={secondaryFileData.Pan_No}
              />
            </Col>
            <Col>
              {" "}
              <InputComp
                text="Aadhar No."
                onInpChange={updateEmpOnChange}
                InpName="Aadhar_No"
                inpValue={secondaryFileData.Aadhar_No}
              />{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <InputComp
                text="Father Name."
                onInpChange={updateEmpOnChange}
                InpName="Father_Name"
                inpValue={secondaryFileData.Father_Name}
              />
            </Col>
            <Col>
              {" "}
              <InputComp
                text="Mother Name"
                onInpChange={updateEmpOnChange}
                InpName="Mother_Name"
                inpValue={secondaryFileData.Mother_Name}
              />{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <InputComp
                text="Spouse Name."
                onInpChange={updateEmpOnChange}
                InpName="Spouse_Name"
                inpValue={secondaryFileData.Spouse_Name}
              />
            </Col>
            <Col>
              {" "}
              <InputComp
                text="Passport No."
                onInpChange={updateEmpOnChange}
                InpName="Passport_No"
                inpValue={secondaryFileData.Passport_No}
              />{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <InputDropDown
                onChangeDrop={(val) => updateDropdown(val, "Marital_status")}
                name="Marital_status"
                text="Marital status"
                dropOption={["Married", "Unmarried"]}
              />
            </Col>
          </Row>
        </Col>
      </Form>
    </>
  );
};

export const EducationRender = ({ sendFormData }) => {
  const [educationFileDate, seteducationFileDate] = useState({
    Education_Type: "",
    Year_of_Passing: "",
    Percentage: "",
    University_Name: "",
    Institute_Name: "",
    Specilization: "",
    Satate: "",
  });
  useEffect(() => {
    sendFormData({ Education: educationFileDate });
  }, [educationFileDate]);
  let updateEmpOnChange = (e) => {
    seteducationFileDate({
      ...educationFileDate,
      [e.target.name]: e.target.value,
    });
  };

  let updateDropdown = (val, name) => {
    seteducationFileDate({ ...educationFileDate, [name]: val });
  };
  // console.log(educationFileDate);
  // sendFormData({EducationRender:educationFileDate})

  return (
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col>
            <InputDropDown
              onChangeDrop={(val) => updateDropdown(val, "Education_Type")}
              text="Education Type"
              dropOption={["BE", "B.tech", "BCA", "BSc"]}
            />
          </Col>
          <Col>
            {" "}
            <InputComp
              text="Year of Passing"
              onInpChange={updateEmpOnChange}
              InpName="Year_of_Passing"
              inpValue={educationFileDate.Year_of_Passing}
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <InputComp
              text="Percentage (%)"
              onInpChange={updateEmpOnChange}
              InpName="Percentage"
              inpValue={educationFileDate.Percentage}
            />
          </Col>
          <Col>
            <InputDropDown
              text="University Name"
              onChangeDrop={(val) => updateDropdown(val, "University_Name")}
              dropOption={["DU", "AMU", "BHU", "Jamya"]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputComp
              text="Institute Name"
              onInpChange={updateEmpOnChange}
              InpName="Institute_Name"
              inpValue={educationFileDate.Institute_Name}
            />
          </Col>
          <Col>
            <InputComp
              text="Specilization"
              onInpChange={updateEmpOnChange}
              InpName="Specilization"
              inpValue={educationFileDate.Specilization}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <InputDropDown
              text="Satate"
              onChangeDrop={(val) => updateDropdown(val, "Satate")}
              dropOption={[
                "Bihar",
                "Bangal",
                "Utter pradesh",
                "Ranchi",
                "Karnataka",
              ]}
            />
          </Col>
          <br />
          <br />
          <br /> <br />
          <br />
          <br />
        </Row>
      </Col>
    </Form>
  );
};

export const BankDetailRenderFile = ({ sendFormData }) => {
  const [bankDetailsFileData, setbankDetailsFileData] = useState({
    Account_No: "",
    Bank_Name: "",
    Account_Type: "",
    IFSC_Code: "",
    Branch: "",
    State: "",
  });
  useEffect(() => {
    sendFormData({ BankDetails: bankDetailsFileData });
  }, [bankDetailsFileData]);
  let updateEmpOnChange = (e) => {
    setbankDetailsFileData({
      ...bankDetailsFileData,
      [e.target.name]: e.target.value,
    });
  };

  let updateDropdown = (val, name) => {
    setbankDetailsFileData({ ...bankDetailsFileData, [name]: val });
  };
  // console.log(bankDetailsFileData);
  // sendFormData({BankDetailRenderFile:bankDetailsFileData})

  return (
    <>
      <Form style={{ margin: "2%", maxWidth: "100%" }}>
        <Col>
          <Row>
            <Col>
              <InputComp
                text="Account No."
                onInpChange={updateEmpOnChange}
                InpName="Account_No"
                inpValue={bankDetailsFileData.Account_No}
              />
            </Col>
            <Col>
              {" "}
              <InputComp
                text="Bank Name"
                onInpChange={updateEmpOnChange}
                InpName="Bank_Name"
                inpValue={bankDetailsFileData.Bank_Name}
              />{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <InputDropDown
                text="Account Type"
                onChangeDrop={(val) => updateDropdown(val, "Account_Type")}
                dropOption={["Saving A/c", "Current A/c", "Joint A/c"]}
              />
            </Col>
            <Col>
              <InputComp
                text="IFSC Code"
                onInpChange={updateEmpOnChange}
                InpName="IFSC_Code"
                inpValue={bankDetailsFileData.IFSC_Code}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <InputDropDown
                text="Branch"
                onChangeDrop={(val) => updateDropdown(val, "Branch")}
                dropOption={["Saving A/c", "Current A/c", "Joint A/c"]}
              />
            </Col>
            <Col>
              <InputDropDown
                text="State"
                onChangeDrop={(val) => updateDropdown(val, "State")}
                dropOption={[
                  "Andhra Pradesh",
                  "Bangal",
                  "Maharastra",
                  "Karnatak",
                ]}
              />
            </Col>
          </Row>
        </Col>
      </Form>
    </>
  );
};

export const AddressRenderFile = ({ sendFormData }) => {
  const [addressfiledata, setaddressfiledata] = useState({
    Address_Type: "",
    Door_No: "",
    Street: "",
    Locality: "",
    City: "",
    State: "",
    Pin_Code: "",
    Land_Mark: "",
  });

  useEffect(() => {
    sendFormData({ Address: addressfiledata });
  }, [addressfiledata]);
  let updateEmpOnChange = (e) => {
    setaddressfiledata({
      ...addressfiledata,
      [e.target.name]: e.target.value,
    });
  };
  let updateDate = (date, e) => {
    setaddressfiledata({ ...addressfiledata, [e]: date });
  };

  let updateDropdown = (val, name) => {
    setaddressfiledata({ ...addressfiledata, [name]: val });
  };
  // console.log(addressfiledata);
  // sendFormData({AddressRenderFile:addressfiledata})

  return (
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col span={20}>
            <InputDropDown
              text="Address Type"
              onChangeDrop={(val) => updateDropdown(val, "Address_Type")}
              dropOption={[
                "Local Address",
                "Permament Address",
                "Current Address",
              ]}
            />
          </Col>
          <Col>
            {" "}
            <InputComp
              text="Door No."
              onInpChange={updateEmpOnChange}
              InpName="Door_No"
              inpValue={addressfiledata.Door_No}
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <InputComp
              text="Street"
              onInpChange={updateEmpOnChange}
              InpName="Street"
              inpValue={addressfiledata.Street}
            />{" "}
          </Col>
          <Col>
            {" "}
            <InputComp
              text="Locality"
              onInpChange={updateEmpOnChange}
              InpName="Locality"
              inpValue={addressfiledata.Locality}
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <InputDropDown
              text="City"
              onChangeDrop={(val) => updateDropdown(val, "City")}
              dropOption={["Mumbai", "Kolkat", "Delhi", "Bangalore"]}
            />{" "}
          </Col>
          <Col>
            {" "}
            <InputDropDown
              text="State"
              onChangeDrop={(val) => updateDropdown(val, "State")}
              dropOption={[
                "Arunachal Pradesh",
                "Bihar",
                "Bangal",
                "Jharkhand",
                "Udisha",
                "Karnataka",
                "Maharastra",
              ]}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <InputComp
              text="Pin Code"
              onInpChange={updateEmpOnChange}
              InpName="Pin_Code"
              inpValue={addressfiledata.Pin_Code}
            />{" "}
          </Col>
          <Col>
            {" "}
            <InputComp
              text="Land Mark"
              onInpChange={updateEmpOnChange}
              InpName="Land_Mark"
              inpValue={addressfiledata.Land_Mark}
            />{" "}
          </Col>
        </Row>
      </Col>
    </Form>
  );
};

export const SkillRenderFile = ({ sendFormData }) => {
  const [skillfiledata, setskillfiledata] = useState({
    Skill_Type: "",
    Skill_Rating: "",
    Year_of_Exprience: "",
  });

  useEffect(() => {
    sendFormData({ skill: skillfiledata });
  }, [skillfiledata]);
  let updateEmpOnChange = (e) => {
    setskillfiledata({
      ...skillfiledata,
      [e.target.name]: e.target.value,
    });
  };
  let updateDate = (date, e) => {
    setskillfiledata({ ...skillfiledata, [e]: date });
  };

  let updateDropdown = (val, name) => {
    setskillfiledata({ ...skillfiledata, [name]: val });
  };
  // console.log(skillfiledata);
  // sendFormData({SkillRenderFile:skillfiledata})
  return (
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col span={20}>
            <InputComp
              text="Skill Type"
              onInpChange={updateEmpOnChange}
              InpName="Skill_Type"
              inpValue={skillfiledata.Skill_Type}
            />
          </Col>
          <Col>
            {" "}
            <InputComp
              text="Skill Rating"
              onInpChange={updateEmpOnChange}
              InpName="Skill_Rating"
              inpValue={skillfiledata.Skill_Rating}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            {" "}
            <InputDropDown
              text="Year of Exprience"
              onChangeDrop={(val) => updateDropdown(val, "Year_of_Exprience")}
              dropOption={[1, 2, 3, 4, 5]}
            />{" "}
          </Col>
        </Row>
      </Col>
    </Form>
  );
};

export const ExperienceRenderFile = ({ sendFormData }) => {
  const [experiencefiledata, setexperiencefiledata] = useState({
    Company_Name: "",
    Year_of_Experience: "",
    Date_of_Joining: "",
    Date_of_Relieving: "",
    Designation: "",
  });
  useEffect(() => {
    sendFormData({ exprience: experiencefiledata });
  }, [experiencefiledata]);
  let updateEmpOnChange = (e) => {
    setexperiencefiledata({
      ...experiencefiledata,
      [e.target.name]: e.target.value,
    });
  };

  let updateDropdown = (val, name) => {
    setexperiencefiledata({ ...experiencefiledata, [name]: val });
  };
  // console.log(experiencefiledata);
  // sendFormData({ExperienceRenderFile:experiencefiledata})
  return (
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col span={20}>
            <InputComp
              onInpChange={updateEmpOnChange}
              inpValue={experiencefiledata.Company_Name}
              InpName={"Company_Name"}
              text="Company Name"
            />
          </Col>
          <Col>
            {" "}
            <InputComp
              onInpChange={updateEmpOnChange}
              inpValue={experiencefiledata.Year_of_Experience}
              InpName={"Year_of_Experience"}
              text="Year of Experience"
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <InputComp
              onInpChange={updateEmpOnChange}
              inpValue={experiencefiledata.Date_of_Joining}
              InpName={"Date_of_Joining"}
              text="Date of Joining"
            />{" "}
          </Col>
          <Col>
            {" "}
            <InputComp
              onInpChange={updateEmpOnChange}
              inpValue={experiencefiledata.Date_of_Relieving}
              InpName={"Date_of_Relieving"}
              text="Date of Relieving"
            />{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <InputDropDown
              onChangeDrop={(val) => updateDropdown(val, "Designation")}
              text="Designation"
              dropOption={[
                "HR",
                "Technical Head",
                "Team Lead",
                "Senior Dev. Eng.",
                "juniar Eng.",
              ]}
            />{" "}
          </Col>
        </Row>
      </Col>
    </Form>
  );
};

export const ContactRenderFile = ({ sendFormData }) => {
  const [contactfiledata, setcontactfiledata] = useState({
    Contact_Type: "",
    Contact_Number: "",
  });
  useEffect(() => {
    sendFormData({ contact: contactfiledata });
  }, [contactfiledata]);
  let updateEmpOnChange = (e) => {
    setcontactfiledata({
      ...contactfiledata,
      [e.target.name]: e.target.value,
    });
  };

  // sendFormData({ContactRenderFile:contactfiledata})

  return (
    <Form style={{ margin: "2%", maxWidth: "100%" }}>
      <Col>
        <Row>
          <Col span={20}>
            <InputComp
              onInpChange={updateEmpOnChange}
              inpValue={contactfiledata.Contact_Type}
              InpName={"Contact_Type"}
              text="Contact Type"
            />
          </Col>
          <Col>
            {" "}
            <InputCompNum
            numName="Contact_Number"
              onNumChange={updateEmpOnChange}
              numValue={contactfiledata.Contact_Number}
             
              text="Contact Number"
            />{" "}
          </Col>
        </Row>
      </Col>
    </Form>
  );
};
