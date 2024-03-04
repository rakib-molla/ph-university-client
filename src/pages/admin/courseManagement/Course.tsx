import { Button,Modal,Table, } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { TQueryParm } from "../../../types/global";
import { useAddFacultiesMutation, useGetAllCoursesQuery, } from "../../../redux/features/admin/courseManagement.api";
import { TSemester } from '../../../types';
import { useState } from 'react';
import PHSelect from '../../../components/form/PHSelect';
import PHForm from '../../../components/form/PHForm';
import { useGetAllFacultiesQuery } from '../../../redux/features/admin/userManagement.api';
type TTableData = Pick<TSemester,  "_id" | "academicSemester" | "status" | "startDate" | "endDate">





const Course = () => {

   // const [params, setParams] = useState<TQueryParm[] | undefined>([]);
   

   const {data: allCourse, isFetching } = useGetAllCoursesQuery(undefined);

   const tableData = allCourse?.data?.map(({_id,title, code}) =>({
      key:_id,
      title,
      code,
   }))

  
   

const columns: TableColumnsType<TTableData> = [
   {
      title: 'Title',
      key: 'title',
      dataIndex: 'title',
    },
 
  {
    title: 'Code',
    key: 'code',
    dataIndex: 'code',
  },
  
  {
    title: 'Action',
    key: 'x',
    render: (item)=>{
      // console.log(item);
      return (
         <AddFacultyModal facultyInfo={item}/>
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
const AddFacultyModal = ({facultyInfo})=>{
   const {data: facultiesData, } = useGetAllFacultiesQuery(undefined)
   const [addFaculties] = useAddFacultiesMutation();

   const facultiesOption = facultiesData?.data?.map((item)=>({
      value: item._id,
      label: item.fullName,
   }))

   const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit =(data)=>{
   const facultyData ={
      courseId : facultyInfo.key,
      data,
   }
   addFaculties(facultyData);
  }
   return (
      <>
         <Button  onClick={showModal}>
        Add Faculty
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
      footer={null}
      >
         <PHForm onSubmit={handleSubmit}>
         <PHSelect
         mode='multiple'
         options={facultiesOption} name='faculties' label='faculty'/>
         <Button htmlType='submit'>Submit</Button>
         </PHForm>
      </Modal>
      </>
   )
}

export default Course;