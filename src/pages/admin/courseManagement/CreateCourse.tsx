import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import {  toast } from "sonner";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import { useAddCoursesMutation, useGetAllCoursesQuery } from "../../../redux/features/admin/courseManagement.api";
import { TResponse } from "../../../types/global";



const CreateCourse = () => {
   const [addCourses, {data, isError}] = useAddCoursesMutation();

   console.log(data);

   const {data: courses} = useGetAllCoursesQuery(undefined)
   

   const preRequisiteCoursesOPtions = courses?.data?.map((item)=>({
      value: item._id,
      label: item.title,
   }))

   const onSubmit: SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Creating");

      const courseData = {
         ...data,
         code: Number(data.code),
         credits: Number(data.credits),
         isDeleted: false,
         preRequisiteCourses: data.preRequisiteCourses ? data.preRequisiteCourses?.map((item)=>({
            course: item,
            isDeleted: false,
         })): [],
      }
      console.log(courseData);

      try{
       const res = await  addCourses(courseData) as TResponse<any>;
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