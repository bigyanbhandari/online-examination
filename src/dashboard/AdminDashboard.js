import React from 'react'
import Dashboard from '../template/adminTemplate/Dashboard'
import CategoreyForm from './CategoreyForm'






const AdminDashboard = () => {
  return (
    <div className=''>
      <div className='text-5xl font-semibold ml-[300px]'>
         Welcome To Admin Dashboard
         </div>
         <div className='flex ml-[40px] '>
         {/* <Dashboard/> */}
         <CategoreyForm/>
     
         </div>

      
       
    </div>
  )
}

export default AdminDashboard