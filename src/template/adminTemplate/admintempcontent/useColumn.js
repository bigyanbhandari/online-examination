import React from 'react'
import { ColumnsType } from 'antd/es/table'

 export const useColumns = () => {

  
  const columns=[
    {
			title: 'S.N.',
			dataIndex: 'key',
			render: (_) => {
				return <div>{_}</div>;
			},
		},
		{
			title: ' Name',
			dataIndex: 'userName',
			render: (userName) => {
				return <div>{userName}</div>;
			},
		},
		{
			title: ' Email',
			dataIndex: 'userEmail',
			render: (userEmail) => {
				return <div>{userEmail}</div>;
			},
		},
		{
			title: 'Contact Number',
			dataIndex: 'userContactNumber',
			render: (userContactNumber) => {
				return <div>{userContactNumber}</div>;
			},
		},
		{
			title: 'Faculty',
			dataIndex: 'facultyId',
			render: (facultyId) => {
				return <div>{facultyId}</div>;
			},
		},
		{
			title: 'Category',
			dataIndex: 'categoryId',
			render: (categoryId) => {
				return <div>{categoryId}</div>;
			},
		},
		{
			title: 'Courses',
			dataIndex: 'courseId',
			render: (courseId) => {
				return <div>{courseId}</div>;
			},
		},
		
		
  ]
  return{columns};
  
}

