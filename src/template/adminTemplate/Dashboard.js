import React, { useEffect, useState } from 'react'
import Card from '../../components/atomic/Card'
import {FiUser} from 'react-icons/fi'
import {BsFillBuildingsFill} from "react-icons/bs"
import {MdOutlineCategory} from "react-icons/md"
import {SlNotebook} from "react-icons/sl"
import {HiUserGroup} from "react-icons/hi"
import LineGraph from '../../components/LineGraph'
import { AnalyticsCount } from '../../infra'



const Dashboard = () => {
  const [count, setCount] = useState({TeacherCount:0, StudentCount:0, CourseCount:0});

  useEffect(() => {
    AnalyticsCount()
      .then(data => {
        setCount(data?.data); 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  
  
 
  return (
    < div>
       
       
        
        
          <div className=' flex gap-4   '>
           <Card  icon={<FiUser  size={30}/>} label="Total Teacher" count={count.TeacherCount} color="#FDF6E3" />
          <Card icon={<HiUserGroup size={30} />} label="Total Student" count={count.StudentCount} color="#FDF6E3" /> 
           <Card icon={<BsFillBuildingsFill size={30} />} label="Faculty" count=" 5" color="#FDF6E3" />
           <Card icon={<MdOutlineCategory size={30} />} label="Catagories" count=" 3" color="#FDF6E3" />
           <Card icon={<SlNotebook size={30} />} label="Courses" count={count.CourseCount} color="#FDF6E3" />
           </div>
          
         <div>
          <LineGraph />
  </div>
        


   
        
        </div>
  )
}

export default Dashboard