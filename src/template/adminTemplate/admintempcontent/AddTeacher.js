



// import { Space, Table, } from 'antd';
// import AdminSidebar from "../../../sidebargroup/AdminSidebar"
// import {TiTickOutline} from "react-icons/ti"
// import {BsFillTrash3Fill} from "react-icons/bs"



// const columns = [
 
//   {
//     title: 'SN',
//     dataIndex: 'sn',
//     key: 'sn',
//     className: 'w-[200px]'
//   },
//   {
//     title: 'FullName',
//     dataIndex: 'fullname',
//     key: 'fullname',
//     className: 'w-[200px]'
//   },
//   {
//     title: 'Email',
//     dataIndex: 'email',
//     key: 'email',
//     className:'w-[300px]'
//   },
  
//   {
//     title: 'Action',
//     key: 'action',
//     render: (_, record) => (
//       <Space size="large">
//         <a className='text-green-500  bg-green-500 hover:text-green-600'><TiTickOutline size={30}/></a>
//         <a className='text-red-500 hover:text-red-600'><BsFillTrash3Fill size={22}/></a>
//       </Space>
//     ),
//   },
// ];




// const AddTeacher = () => {
//   return (
//     <div className='flex w-full p-12 '>
     
//      <Table columns={columns} dataSource={data}   pagination={false} className='min-w-full' />
//     </div>
    
//   )
// }

// export default AddTeacher



import React from 'react'
import { useColumns } from './useColumn';
import CustomDataTable from '../../../Table/DataTable';
import DataTableHeader from '../../../Table/DataTableHeader';

const data = [
  { 
    userName:"ayush",
    userEmail:"ayush12@gmail.com",
    
    userContactNumber:"9810442042",
    roleName:"ROLE_TEACHER",
    facultyId:2,
    categoryId:1,
    courseId:1
    
  },
  { 
    userName:"ayush",
    userEmail:"ayush12@gmail.com",
    
    userContactNumber:"9810442042",
    roleName:"ROLE_TEACHER",
    facultyId:2,
    categoryId:1,
    courseId:1
    
  },
  
];

// const tableData = data?.map((item, index) => {
//   return{
//     ...item,
//   }
// });

const AddTeacher = () => {
  const columns =useColumns();
  return (
    <div className='w-full'>
      <CustomDataTable
      id='total-teacher'
      loading={false}
      columns={columns}
      // data={tableData}
      header ={()=>(
        <>
        <DataTableHeader title= 'Total Teacher' enableSearch /></>
      )}
      />
    </div>
  )
}

export default AddTeacher