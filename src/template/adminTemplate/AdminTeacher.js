import React from 'react'
import Card from '../../components/atomic/Card'
import { FiUser, } from 'react-icons/fi'
import {AiOutlinePlusSquare} from "react-icons/ai"
import {Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import TeacherTable from './admintempcontent/TeacherTable'





const AdminTeacher = () => {
  const navigate =useNavigate();

  return (
    <div >
   {/* <Card  icon={<FiUser  size={30}/>} label="Total Teacher" count="139" color="#FDF6E3"  pic={<AiOutlinePlusSquare size={50}  className=' ml-[100px] cursor-pointer '  onClick={handleClick}/>}/>  */}
   <div className='font-bold text-2xl pb-8'>Teacher List</div>
     <TeacherTable/>
     
    
    </div>
    
  )
}

export default AdminTeacher