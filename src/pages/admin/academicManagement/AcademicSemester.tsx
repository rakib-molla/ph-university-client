import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";

import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TAcademicSemester } from "../../../types/academicManagement.type";

const AcademicSemester = () => {
   const {data: semesterData} = useGetAllSemesterQuery([{name: 'year', value: '2024'}]);
   
   const tableData = semesterData?.data?.map(({_id, name, year, startMonth, endMonth}) =>({
      _id,
      name,
      year,
      startMonth,
      endMonth,
   }))

   
 type TTableData = Pick<TAcademicSemester, "_id" | "name" | "year" | "startMonth" | "endMonth">

const columns: TableColumnsType<TTableData> = [
   {
      title: 'Name',
      dataIndex: 'name',
      filters: [
        {
          text: 'Joe',
          value: 'Joe',
        },
        {
          text: 'Jim',
          value: 'Jim',
        },
        {
          text: 'Submenu',
          value: 'Submenu',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: string, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
  {
    title: 'Year',
    dataIndex: 'year',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.year - b.year,
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


const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
  console.log(filters);
};



   return (
      <Table columns={columns} dataSource={tableData} onChange={onChange} />
   );
};

export default AcademicSemester;