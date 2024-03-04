import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import {  useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
import {  toast } from "sonner";
import PHSelect from "../../../components/form/PHSelect";
import PHInput from "../../../components/form/PHInput";
import PHDatePicker from "../../../components/form/PHDatePicker";



const SemesterRegistration = () => {
   
   const {data: academicSemester} = useGetAllSemesterQuery([
      {name: 'sort', value: 'year'}
   ]);
   const academicSemesterOptions = academicSemester ? academicSemester?.data?.map((item)=>({
      value: item._id,
      label: `${item.name} ${item.year}`
   })) : [] ;

   console.log(academicSemester);

   const onSubmit: SubmitHandler<FieldValues> = async(data)=>{
      const toastId = toast.loading("Creating");

      const semesterData = {
         ...data
      }
      console.log(semesterData);

      // try{
      //  const res = await  addAcademicSemester(semesterData) as TResponse;
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
  const semesterStatusOPtions = [
     { value: 'UPCOMING', label: 'UPCOMING'},
     { value: 'ONGOING', label: 'Ongoing'},
     { value: 'Ended', label: 'Ended'},

  ]
 
   

   return (
      <Flex justify="center" align="center"> 
         <Col span={6}> 
            <PHForm onSubmit={onSubmit} 
            >
               <PHSelect label="Name" name="academicSemester" options={academicSemesterOptions}/>
              
               <PHSelect label="Status" name="status" options={semesterStatusOPtions}/>
               <PHDatePicker name='startDate' label='Start Date'/>
               <PHDatePicker name='endDate' label='End Date'/> 
               <PHInput type="text" name="minCredit" label="Min Credit"/>
               <PHInput type="text" name="maxCredit" label="Max Credit"/>
               {/* <PHSelect label="End Month" name="endMonth" options={monthOptions}/> */}
               <Button htmlType="submit">Submit</Button>
            </PHForm>
         </Col>
      </Flex>
   );
};

export default SemesterRegistration;