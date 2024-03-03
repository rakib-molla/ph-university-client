
import { Button, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useState } from "react";
import { TQueryParm } from "../../../types/global";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from '../../../types';

const StudentData = () => {
   const [params, setParams] = useState<TQueryParm[] >([]);
   const [page, setPage] = useState(1);
   const {data: studentData, isFetching} = useGetAllStudentQuery([
      {name: "limit", value: 2},
      {name: "page", value: page},
      {name: "sort", value: "id"},
      ...params]);
   
   const tableData = studentData?.data?.map(({_id, fullName, id }) =>({
      key:_id,
      fullName,
      id
   }))

   
 type TTableData = Pick<TStudent,  "name" | "_id" | "id">

const columns: TableColumnsType<TTableData> = [
   {
      title: 'Name',
      dataIndex: 'fullName',
      
    },
  
  {
    title: 'Roll No.',
    key: 'id',
    dataIndex: 'id',
  },
  {
    title: 'Action',
    dataIndex: 'x',
    render: ()=>{
      return (
         <Space>
            <Button>Details</Button>
            <Button>Update</Button>
            <Button>Block</Button>
         </Space>
      )
    },
    width: '1%'
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

export default StudentData;