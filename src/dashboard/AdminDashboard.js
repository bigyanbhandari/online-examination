import React from 'react'
import Sidebar from '../sidebargroup/AdminSidebar'
import Dashboard from '../template/adminTemplate/Dashboard'


const AdminDashboard = () => {
  return (
    <div className=''>
      <div className='text-5xl font-semibold mt-[40px] ml-[300px]'>
         Welcome To Admin Dashboard
         </div>
         <div className='flex ml-[40px] mt-[40px]'>
         <Dashboard/>
         </div>

      
     
       
    </div>
  )
}

export default AdminDashboard