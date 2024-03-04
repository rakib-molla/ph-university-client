import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import {  toast } from "sonner";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { useAddRegisterSemesterMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";



const CreateCourse = () => {
   const [addSemester, {data, isError}] = useAddRegisterSemesterMutation();

   console.log(data);

   const {data: courses} = useGetAllCoursesQuery(undefined)
   
console.log(courses);
   const preRequisiteCoursesOPtions = courses?.data?.map((item)=>({
      value: item._id,
      label: item._id,
   }))

   const onSubmit: SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Creating");

      const courseData = {
         ...data,
         isDeleted: false,
         preRequisiteCourses: data.preRequisiteCourses.map((item)=>({
            course: item,
            isDeleted: false,
         }))
      }
      console.log(courseData);

      // try{
      //  const res = await  addSemester(semesterData) as TResponse<any>;
      //  console.log(res);
      //  if (res.error) {
      //    toast.error(res.error.data.message , {id: toastId , duration: 2000});
      //  }else{
      //       toast.success("Academic Semester Created" , {id: toastId , duration: 2000});
         
      //  }
      // }catch(error){
      //    console.log(error);
      //    toast.error("Something Wrong" , {id: toastId , duration: 2000});
      // }
      
   }

   

   return (
      <Flex justify="center" align="center"> 
         <Col span={6}> 
            <PHForm onSubmit={onSubmit} 
            >
              
               <PHInput type="text" name="title" label="Title"/>
               <PHInput type="text" name="prefix" label="Prefix"/>
               <PHInput type="text" name="code" label="Code"/>
               <PHInput type="text" name="credits" label="Credits"/>
               
                <PHSelect 
                mode="multiple"
                name="preRequisiteCourses" 
                label="Pre Requisite Courses" 
                options={preRequisiteCoursesOPtions}
                />
               <Button htmlType="submit">Submit</Button>
            </PHForm>
         </Col>
      </Flex>
   );
};

export default CreateCourse;