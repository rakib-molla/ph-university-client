import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { useAddAllAcademicDepartmentMutation,  } from "../../../redux/features/admin/academicDepartmentManagement";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicFacultyManagementApi";


const CreateAcademicDepartment = () => {
   const {data: allAcademicFaculty, isFetching} = useGetAllAcademicFacultyQuery();


   let dropdown = []

   // console.log(allAcademicFaculty);

   allAcademicFaculty?.data.map((item)=>{
      
     let data = {
         label: item.name,
         value: item._id,
      }

      dropdown.push(data);
      
   })

   const [addAllAcademicDepartment] = useAddAllAcademicDepartmentMutation();

   const onSubmit: SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Creating");

      const academicDepartmentData = {
         name: data.name,
         academicFaculty: data.academicFaculty,
      }

      try{
       const res = await  addAllAcademicDepartment(academicDepartmentData)
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
   return (
      <Flex justify="center" align="center"> 
         <Col span={6}> 
            <PHForm onSubmit={onSubmit}>
               <PHInput type="text" label="Name" name="name"/>
               <PHSelect label="Academic Faculty" name="academicFaculty" options={dropdown}/>
               <Button htmlType="submit">Submit</Button>
            </PHForm>
         </Col>
      </Flex>
   );
};

export default CreateAcademicDepartment;