import React from 'react'
import DataTable from '../../../tables/DataTable';
import { useMemo } from 'react';
import {  getAllCourse } from '../../../infra';

const CourseTable = () => {
    const columns = useMemo(() => [
        {
            Header: ('SN'),
            Cell:({row:{index}})=>(
              <div className=''>
                {++index}
              </div>
            )
          },
        {
          Header: ('Course Name'),
          accessor: 'courseTitle',
        },
        {
          Header: ('Description'),
          accessor: 'courseDesc',
        },
        
        
        
        
      ], []);
    
      return (
        <div className="w-full mx-auto px-4 py-4 sm:px-6 md:px-8 bg-white">
          <DataTable
            columns={columns}
            apiRequest={getAllCourse}
        
          />
        </div>
      )
    }

export default CourseTable