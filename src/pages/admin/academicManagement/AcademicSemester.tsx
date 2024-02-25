import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";

import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from "../../../types/academicManagement.type";
import { useState } from "react";
import { TQueryParm } from "../../../types/global";

const AcademicSemester = () => {
   const [params, setParams] = useState<TQueryParm[] | undefined>([]);
   const {data: semesterData, isFetching} = useGetAllSemesterQuery(params);
   
   const tableData = semesterData?.data?.map(({_id, name, year, startMonth, endMonth}) =>({
      key:_id,
      name,
      year,
      startMonth,
      endMonth,
   }))

   
 type TTableData = Pick<TAcademicSemester,  "name" | "year" | "startMonth" | "endMonth">

const columns: TableColumnsType<TTableData> = [
   {
      title: 'Name',
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
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      // sorter: (a, b) => a.name.length - b.name.length,
      // sortDirections: ['descend'],
    },
  {
    title: 'Year',
    dataIndex: 'year',
   //  defaultSortOrder: 'descend',
   //  sorter: (a, b) => a.year - b.year,
    filters: [
      {
        text: '2024',
        value: '2024',
      },
      {
        text: '2025',
        value: '2025',
      },
      {
        text: '2026',
        value: '2026',
      },
      {
        text: '2027',
        value: '2027',
      },
      {
        text: '2028',
        value: '2028',
      },
     
    ],
  },
  {
    title: 'Start Month',
    dataIndex: 'startMonth',
  },
  {
    title: 'End Month',
    dataIndex: 'endMonth',
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

export default AcademicSemester;