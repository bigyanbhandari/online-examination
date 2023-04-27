import React from 'react'
import Card from '../../components/atomic/Card'
import { FiUser, } from 'react-icons/fi'
import {AiOutlinePlusSquare} from "react-icons/ai"
import {Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'





const AdminTeacher = () => {
  const navigate =useNavigate();
const handleClick =()=>{
  navigate('addteacher')
}
  return (
    <div >
   <Card  icon={<FiUser  size={30}/>} label="Add Teacher" count="139" color="#FDF6E3"  pic={<AiOutlinePlusSquare size={50}  className=' ml-[100px] cursor-pointer '  onClick={handleClick}/>}/> 
   
     
     
    
    </div>
    
  )
}

export default AdminTeacher