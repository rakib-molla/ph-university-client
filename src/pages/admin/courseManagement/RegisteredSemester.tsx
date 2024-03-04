import { Button, Dropdown, Table, Tag } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { useState } from "react";
import { TQueryParm } from "../../../types/global";
import { useGetAllRegisterSemesterQuery } from "../../../redux/features/admin/courseManagement.api";
import moment from "moment";
import { TSemester } from '../../../types';
type TTableData = Pick<TSemester,  "_id" | "academicSemester" | "status" | "startDate" | "endDate">

const items = [
   {
      label: 'UPCOMING',
      key: 'UPCOMING',
   },
   {
      label: 'ONGOING',
      key: 'ONGOING',
   },
   {
      label: 'ENDED',
      key: 'ENDED',
   },
]



const RegisteredSemester = () => {

   // const [params, setParams] = useState<TQueryParm[] | undefined>([]);

   const {data: SemesterData, isFetching } = useGetAllRegisterSemesterQuery(undefined);

   const tableData = SemesterData?.data?.map(({_id, academicSemester, status,  startDate, endDate}) =>({
      key:_id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      status,
      startDate: moment(new Date(startDate)).format("MMMM"),
      endDate:moment(new Date(endDate)).format("MMMM"),
   }))

   const handleStatusDropdown = (data)=>{
      console.log(data);
   }
   const menuProps = {
      items,
      onClick: handleStatusDropdown,
   }

const columns: TableColumnsType<TTableData> = [
   {
      title: 'Name',
      key: 'name',
      dataIndex: 'name',
    },
 
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
   render: (item)=>{
      let color;
      if(item === 'UPCOMING'){
         color = 'blue'
      }
      if(item === 'ONGOING'){
         color = 'green'
      }
      if(item === 'ENDED'){
         color = 'red'
      }
      return (
         <Tag color={color}>{item}</Tag>
      )
   }
  },
  {
    title: 'Start Date',
    key: 'startDate',
    dataIndex: 'startDate',
  },
  {
    title: 'End Date',
    key: 'endDate',
    dataIndex: 'endDate',
  },
  {
    title: 'Action',
    dataIndex: 'x',
    render: ()=>{
      return (
         <div>
            <Dropdown menu={menuProps}>
               <Button>Update</Button>
            </Dropdown>
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

      // setParams(queryParams);
   }
};



   return (
      <Table loading={isFetching} 
      columns={columns} 
      dataSource={tableData}
      onChange={onChange} />
   );
};

export default RegisteredSemester;