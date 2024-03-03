
import { Button, Pagination, Space, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useState } from "react";
import { TQueryParm } from "../../../types/global";
import { useGetAllStudentQuery } from "../../../redux/features/admin/userManagement.api";
import { TStudent } from '../../../types';
import { Link } from 'react-router-dom';

const StudentData = () => {
   const [params, setParams] = useState<TQueryParm[] >([]);
   const [page, setPage] = useState(1);
   const {data: studentData, isFetching} = useGetAllStudentQuery([
      // {name: "limit", value: 2},
      {name: "page", value: page},
      {name: "sort", value: "id"},
      ...params]);
   const metaData = studentData?.meta;
   const tableData = studentData?.data?.map(({_id, fullName, id, email, contactNo }) =>({
      key:_id,
      fullName,
      id,
      email,
      contactNo
   }))

   
 type TTableData = Pick<TStudent,  "fullName" |  "id" | "email" | "contactNo" | "_id">

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
    title: 'Email.',
    key: 'email',
    dataIndex: 'email',
  },
  {
    title: 'contactNo.',
    key: 'contactNo',
    dataIndex: 'contactNo',
  },
  {
    title: 'Action',
    dataIndex: 'x',
    render: (item)=>{
      console.log(item);
      return (
         <Space>
            <Link to={`/admin/student-data/${item?.key}`}> 
            <Button>Details</Button>
            </Link>
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
      <> 
      <Table loading={isFetching} columns={columns} dataSource={tableData} onChange={onChange} pagination={false}/>
      <Pagination 
      current={page}
      onChange={(value)=> setPage(value)}
      pageSize={metaData?.limit}
      total={metaData?.total}
      />
      </>
   );
};

export default StudentData;