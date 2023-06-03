import React from 'react'
import { ColumnsType } from 'antd/es/table'

 export const useColumn = () => {
  
  const columns=[
    {
			title: 'S.N.',
			dataIndex: 'key',
			render: (_) => {
				return <div>{_}</div>;
			},
		},
		{
			title: 'Name',
			dataIndex: 'name',
			render: (name) => {
				return <div>{name}</div>;
			},
		},
		{
			title: 'Email',
			dataIndex: 'email',
			render: (email) => {
				return <div>{email}</div>;
			},
		},
		{
			title: 'Address',
			dataIndex: 'address',
			render: (address) => {
				return <div>{address}</div>;
			},
		},
		{
			title: 'Vat Number',
			dataIndex: 'vat_number',
			render: (vat_number) => {
				return <div>{vat_number}</div>;
			},
		},
		
  ]
  return{columns};
  
}

