import { useState } from "react";
import { useGetAllAcademicDepartmentQuery } from "../../../redux/features/admin/academicDepartmentManagement";
import { TQueryParm } from "../../../types/global";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { Button, Table, TableColumnsType, TableProps } from "antd";


const AcademicDepartment = () => {
   const [params, setParams] = useState<TQueryParm[] | undefined>([]);
   const { data:allAcademicDepartment, isFetching } = useGetAllAcademicDepartmentQuery(params);
   console.log(allAcademicDepartment);

   
   
   const tableData = allAcademicDepartment?.data?.map((item) =>({
      key:item?._id,
      name: item?.name,
      academicFaculty: item?.academicFaculty?.name
   }))

   
 type TTableData = Pick<TAcademicSemester,  "name" | "year" | "startMonth" | "endMonth">

const columns: TableColumnsType<TTableData> = [
   {
      title: 'Department Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
       
      ],
      
    },
  
  {
    title: 'Academic Faculty',
    dataIndex: 'academicFaculty',
  },
  {
    title: 'Action',
    dataIndex: 'x',
    render: ()=>{
      return (
         <div>
            <Button>Update</Button>
         </div>
      )
    }
  },
];


const onChange: TableProps<TTableData>['onChange'] = (
   _pagination,
   filters,
   _sorter,
   extra) => {
   if(extra.action === 'filter'){
      const queryParams: TQueryParm[] = [];

      filters.name?.forEach((item)=> 
      queryParams.push({name: 'name', value: item})
      );
      filters.year?.forEach((item)=> 
      queryParams.push({name: 'year', value: item})
      );

      setParams(queryParams);
   }
};


   return (
      <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} />
   );
};

export default AcademicDepartment;