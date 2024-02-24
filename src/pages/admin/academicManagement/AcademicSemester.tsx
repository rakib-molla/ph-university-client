import { useGetAllSemesterQuery } from "../../../redux/features/admin/academicManagementApi";

import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

const AcademicSemester = () => {
   const {data: semesterData} = useGetAllSemesterQuery(undefined);
   
   const tableData = semesterData?.data?.map(({_id, name, year, startMonth, endMonth}) =>({
      _id,
      name,
      year,
      startMonth,
      endMonth,
   }))

   

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
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
    sorter: (a, b) => a.age - b.age,
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


const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
  console.log(filters);
};



   return (
      <Table columns={columns} dataSource={tableData} onChange={onChange} />
   );
};

export default AcademicSemester;