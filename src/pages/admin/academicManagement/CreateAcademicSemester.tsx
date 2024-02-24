import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from "../../../schemas/academicManagement.Schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { Toaster, toast } from "sonner";
import { TResponse } from "../../../types/global";



const CreateAcademicSemester = () => {
   const [addAcademicSemester] = useAddAcademicSemesterMutation();

   const onSubmit: SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Creating");
      const name = semesterOptions[Number(data.name)-1].label

      const semesterData = {
         name, 
         code: data.name,
         year: data.year,
         startMonth: data.startMonth,
         endMonth: data.endMonth,
      }

      try{
       const res = await  addAcademicSemester(semesterData) as TResponse;
       console.log(res);
       if (res.error) {
         toast.error(res.error.data.message , {id: toastId , duration: 2000});
       }else{
            toast.success("Academic Semester Created" , {id: toastId , duration: 2000});
         
       }
      }catch(error){
         console.log(error);
         toast.error("Something Wrong" , {id: toastId , duration: 2000});
      }
      
   }
  const currentYear = new Date().getFullYear();
  
  const yearOptions = [0,1,2,3,4].map(number=>({
   value: String(currentYear + number),
   label: String(currentYear + number),
  }))
 
   

   return (
      <Flex justify="center" align="center"> 
         <Col span={6}> 
            <PHForm onSubmit={onSubmit} 
            resolver = {zodResolver(academicSemesterSchema)}
            >
               <PHSelect label="Name" name="name" options={semesterOptions}/>
               <PHSelect label="Year" name="year" options={yearOptions}/>
               <PHSelect label="Start Month" name="startMonth" options={monthOptions}/>
               <PHSelect label="End Month" name="endMonth" options={monthOptions}/>
               <Button htmlType="submit">Submit</Button>
            </PHForm>
         </Col>
      </Flex>
   );
};

export default CreateAcademicSemester;