import React from 'react'
import Card from '../../components/atomic/Card'
import { FiUser, } from 'react-icons/fi'
import {AiOutlinePlusSquare} from "react-icons/ai"
import {Link } from "react-router-dom"




const AdminTeacher = () => {
  return (
    <div >
    <Link to='/addteacher'> <Card icon={<FiUser  size={30}/>} label="Add Teacher" count="139" color="#28a745"  pic={<AiOutlinePlusSquare size={32}  className='ml-[60px]'/>}/> 
    </Link>
     
     
    
    </div>
    
  )
}

export default AdminTeacher