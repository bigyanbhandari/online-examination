import React from 'react'
import TeacherSidebar from "../sidebargroup/TeacherSidebar"
import TeaDashboard from '../template/teacherTemplate/TeaDashboard'






const TeacherDashboard = () => {
  return (
    <div>
    <div className='text-5xl font-semibold ml-[300px]'>
    Welcome teacher
    </div>
    <div className='flex ml-[40px] '>
    <TeaDashboard/>
    </div>
     
      </div>
  )
}

export default TeacherDashboard

