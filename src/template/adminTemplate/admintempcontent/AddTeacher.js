



import { Space, Table, } from 'antd';
import AdminSidebar from "../../../sidebargroup/AdminSidebar"
import {TiTickOutline} from "react-icons/ti"
import {BsFillTrash3Fill} from "react-icons/bs"

const data = [
  {
    key: '1',
    fullname:'Ram Rai',
    sn: 1,
    email: 'New York No. 1 Lake Park',
    
  },
  {
    key: '2',
    fullname:'Ram Rai',
    sn: 2,
    email: 'London No. 1 Lake Park',
    
  },
  {
    key: '3',
    sn: 3,
    email: 'Sydney No. 1 Lake Park',
    fullname:'Ram Rai',
  },
];

const columns = [
 
  {
    title: 'SN',
    dataIndex: 'sn',
    key: 'sn',
    className: 'w-[200px]'
  },
  {
    title: 'FullName',
    dataIndex: 'fullname',
    key: 'fullname',
    className: 'w-[200px]'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    className:'w-[300px]'
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="large">
        <a className='text-green-500  bg-green-500 hover:text-green-600'><TiTickOutline size={30}/></a>
        <a className='text-red-500 hover:text-red-600'><BsFillTrash3Fill size={22}/></a>
      </Space>
    ),
  },
];




const AddTeacher = () => {
  return (
    <div className='flex w-full p-12 '>
     
     <Table columns={columns} dataSource={data}   pagination={false} className='min-w-full' />
    </div>
    
  )
}

export default AddTeacher


