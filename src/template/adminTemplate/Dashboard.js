import React from 'react'
import Sidebar from '../../sidebargroup/AdminSidebar'
import Card from '../../components/atomic/Card'
import {FiUser} from 'react-icons/fi'


const Dashboard = () => {
  return (
    <div >
       
       
        <div className='flex ml-[40px] gap-14 '>
          
           <Card icon={<FiUser  size={30}/>} label="Total Teacher" count="134" color="#28a745" />
        
           <Card icon={<FiUser size={30} />} label="Total Student" count="134" color="#dc3545" />
           

        </div>
   
        
        </div>
  )
}

export default Dashboard