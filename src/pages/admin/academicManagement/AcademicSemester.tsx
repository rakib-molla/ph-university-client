import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";



const AcademicSemester = () => {
   const {data} = useGetAllSemesterQuery(undefined);
   console.log(data);
   return (
      <div>
         AcademicSemester component 
      </div>
   );
};

export default AcademicSemester;