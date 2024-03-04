import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicFacultyManagementApi";
import PHSelectWithWatch from "../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";


const OfferCourse = () => {
   const [id, setId] = useState("");
console.log(id);
   const {data: academicFacultyData} = useGetAllAcademicFacultyQuery(undefined);

   const academicSemesterOptions = academicFacultyData?.data?.map((item)=>({
      value: item._id,
      label: `${item.name}`,
   }))
   const onSubmit: SubmitHandler<FieldValues> =(data)=>{
      console.log(data);
   }
   return (
      <Flex justify="center" align="center"> 
      <Col span={6}> 
         <PHForm onSubmit={onSubmit} 
         >
            <PHSelectWithWatch
            onValueChange={setId}
            label="Name" name="academicSemester" options={academicSemesterOptions}/>
           
            <PHInput disabled={!id} name="test" type="text" label="test"/>
            <Button htmlType="submit">Submit</Button>
         </PHForm>
      </Col>
   </Flex>
   );
};

export default OfferCourse;