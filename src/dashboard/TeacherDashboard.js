import React from 'react'
import TeacherSidebar from "../sidebargroup/TeacherSidebar"






const TeacherDashboard = () => {
  return (
    <div>
    <div className='text-5xl font-semibold ml-[300px]'>
    WElcome teacher
    </div>
    <div className='flex ml-[40px] '>
      <TeacherSidebar/>
      </div>
      </div>
  )
}

export default TeacherDashboard

