import React from 'react'

const Card = ({data,onClick}) => {
   
  return (
    <div onClick={onClick}  key={data?.examId} className='max-w-sm bg-light-200 shadow-md border-2 border-gray-700 px-4 py-4 rounded-md cursor-pointer' >
        <div className='flex flex-col'>
            <h1 className='text-lg text-gray-700 font-semibold'>{data?.examTitle} </h1>
            <p className='text-md text-gray-600'>{data?.examDesc}</p>        
        </div>
    </div>
  )
}

export default Card