import React from 'react'
import StuDashboard from '../template/studentTemplate/StuDashboard'

const StudentDashboard = () => {
  return (
    <div>
      <div className='text-5xl font-semibold ml-[300px] mt-[5%]'>
        Welcome to Student Dashboard
      </div>
      <div className='flex ml-[40px] '>
       <StuDashboard/>
    </div>
    </div>
  )
}

export default StudentDashboard