import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Divider, Row } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupOptions, genderOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import Item from "antd/es/list/Item";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },

    gender: "male",
    dateOfBirth: "1990-01-01",
    bloogGroup: "A+",

    email: "student2@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",

    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },

    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },

    admissionSemester: "65b0104110b74fcbd7a25d92",
    academicDepartment: "65b00fb010b74fcbd7a25d8e",
  },
};

//! this is only for development
// ! should be removed
const studentDefaultValues = {
   
     name: {
       firstName: "I am ",
       middleName: "Student",
       lastName: "Number 1",
     },
 
     gender: "male",
   //   dateOfBirth: "1990-01-01",
     bloogGroup: "A+",
 
     email: "student2@gmail.com",
     contactNo: "1235678",
     emergencyContactNo: "987-654-3210",
     presentAddress: "123 Main St, Cityville",
     permanentAddress: "456 Oak St, Townsville",
 
     guardian: {
       fatherName: "James Doe",
       fatherOccupation: "Engineer",
       fatherContactNo: "111-222-3333",
       motherName: "Mary Doe",
       motherOccupation: "Teacher",
       motherContactNo: "444-555-6666",
     },
 
     localGuardian: {
       name: "Alice Johnson",
       occupation: "Doctor",
       contactNo: "777-888-9999",
       address: "789 Pine St, Villageton",
     },
 
   //   admissionSemester: "65b0104110b74fcbd7a25d92",
   //   academicDepartment: "65b00fb010b74fcbd7a25d8e",
   
 };

const CreateStudent = () => {
   const {data: sData, isLoading: sIsLoading} = useGetAllSemesterQuery(undefined);
   console.log(sData);

   const semesterOptions = sData?.data?.map((item)=>({
      value: item._id,
      label: `${item.name} ${item.year}`
   }))

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

   //  const formData = new FormData();

   //  formData.append("data", JSON.stringify(data));

   //  console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Row gutter={8}>
            <Divider>Personal Info.</Divider>
            <Col span={24} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="First Name" type="text" name="name.firstName" />
            </Col>

            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Middle Name" type="text" name="name.middleName" />
            </Col>

            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Last Name" type="text" name="name.lastName" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
               <PHSelect label="Gender" name="gender" options={genderOptions}/>
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHDatePicker name="dateOfBirth" label="Date Of Birth"/>
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHSelect options={bloodGroupOptions} label="Blood Group" name="bloogGroup"/>
            </Col>
            <Divider>Contact Info.</Divider>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Email" type="text" name="email" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Contact Number" type="text" name="contactNo" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Emergency Contact No" type="text" name="emergencyContactNo" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Present Address" type="text" name="presentAddress" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Permanent Address" type="text" name="permanentAddress" />
            </Col>
            <Divider>Guardian.</Divider>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Father Name" type="text" name="guardian.fatherName" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Father Occupation" type="text" name="guardian.fatherOccupation" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Father ContactNo" type="text" name="guardian.fatherContactNo" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Mother Name" type="text" name="guardian.motherName" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="MotherOccupation" type="text" name="guardian.motherOccupation" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Mother ContactNo" type="text" name="guardian.motherContactNo" />
            </Col>
            <Divider>Local Guardian.</Divider>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Name" type="text" name="localGuardian.name" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Occupation" type="text" name="localGuardian.occupation" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Contact No" type="text" name="localGuardian.contactNo" />
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
              <PHInput label="Address" type="text" name="localGuardian.address" />
            </Col>
            <Divider>Academic Info.</Divider>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
               <PHSelect disabled={sIsLoading} options={semesterOptions} name="admissionSemester" label="Admission Semester"/>
            </Col>
            <Col span={8} md={{span: 12}} lg={{span: 8}}>
               <PHSelect name="academicDepartment" label="Academic Department"/>
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
