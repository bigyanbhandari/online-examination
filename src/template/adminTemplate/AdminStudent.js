import React from 'react'
import StudentTable from './admintempcontent/StudentTable'

const AdminStudent = () => {
  return (
    <div className='w-full' >
    <div className='font-bold flex flex-col items-center text-2xl pb-8'>Student List</div>
      <StudentTable/>
     
     </div>
  )
}

export default AdminStudent