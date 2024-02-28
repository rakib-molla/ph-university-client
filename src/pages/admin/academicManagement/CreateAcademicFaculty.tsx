import { Button, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAllAcademicFacultyMutation } from "../../../redux/features/admin/academicFacultyManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";



const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAllAcademicFacultyMutation();


   const onSubmit: SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Creating");

      try{
         const res = await addAcademicFaculty(data) as TResponse
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
         <PHForm onSubmit={onSubmit}>
            <PHInput type="text" label="Academic Faculties" name="name" />
            <Button htmlType="submit">Submit</Button>
         </PHForm>
      </Flex>
   );
};

export default CreateAcademicFaculty;