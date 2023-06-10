import React, { useMemo } from 'react'
import DataTable from '../../../tables/DataTable';
import { getPendingStudent } from '../../../infra';



const StudentTable = () => {
  
const columns = useMemo(()=>[
  {
    Header: ('Student Name'),
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
      apiRequest={getPendingStudent}
      />
    </div>
  )
}

export default StudentTable