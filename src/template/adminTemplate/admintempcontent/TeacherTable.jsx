import React, { useMemo } from 'react'
import DataTable from '../../../tables/DataTable';
import { getPendingTeacher } from '../../../infra';


const TeacherTable = () => {
  
const columns = useMemo(()=>[
  {
    Header: ('Teacher Name'),
    accessor: 'userName',
  },
  {
    Header: ('Email'),
    accessor: 'userEmail',
  },
  
  {
    Header: ('Contact Number'),
    accessor: 'userContactNumber',
  },
  {
    Header: ('status'),
    accessor: 'userStatus',
  },

],[]) 

  return (
    <div className="max-w-full mx-auto px-4 py-4 sm:px-6 md:px-8 bg-white">
      <DataTable
      columns={columns}
      apiRequest={getPendingTeacher}
      />
    </div>
  )
}

export default TeacherTable
