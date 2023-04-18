



import { Space, Table, } from 'antd';
import AdminSidebar from "../../../sidebargroup/AdminSidebar"

const data = [
  {
    key: '1',
   
    sn: 1,
    email: 'New York No. 1 Lake Park',
    
  },
  {
    key: '2',
   
    sn: 2,
    email: 'London No. 1 Lake Park',
    
  },
  {
    key: '3',
    sn: 3,
    email: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const columns = [
 
  {
    title: 'SN',
    dataIndex: 'sn',
    key: 'sn',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a className='text-blue-500 hover:text-green-500'>Invite </a>
        <a className='text-blue-500 hover:text-red-500'>Delete</a>
      </Space>
    ),
  },
];




const AddTeacher = () => {
  return (
    <div className='flex '>
      <div>
        <AdminSidebar/>
      </div>
     <Table columns={columns} dataSource={data}  className='ml-5 mt-9 '/>
    </div>
    
  )
}

export default AddTeacher

