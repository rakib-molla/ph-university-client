import { useState } from "react";
import { useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicFacultyManagementApi";
import { TQueryParm } from "../../../types/global";
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { Button, Table, TableColumnsType, TableProps } from "antd";


const AcademicFaculty = () => {
   const [params, setParams] = useState<TQueryParm[] | undefined>([]);
   const {data: allFacultyData, isFetching} = useGetAllAcademicFacultyQuery(params);
   
   const tableData = allFacultyData?.data?.map(({_id, name, }) =>({
      key:_id,
      name,
     
   }))

   
 type TTableData = Pick<TAcademicSemester,  "name" >

const columns: TableColumnsType<TTableData> = [
   {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'EEE',
          value: 'EEE',
        },
        
       
      ],
    
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

export default AcademicFaculty;