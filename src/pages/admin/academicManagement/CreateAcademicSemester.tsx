import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";


const CreateAcademicSemester = () => {
   const onSubmit: SubmitHandler<FieldValues> = (data)=>{
      console.log(data);
   }
   return (
      <Flex justify="center" align="center"> 
         <Col span={6}> 
            <PHForm onSubmit={onSubmit}>
               <PHInput label=" Name" type="text" name="name"/>
               <PHInput label="Year" type="text" name="year"/>
               <PHSelect label="Name"/>
               <Button htmlType="submit">Submit</Button>
            </PHForm>
         </Col>
      </Flex>
   );
};

export default CreateAcademicSemester;