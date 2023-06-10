import React from 'react'
import image from "../assests/img.png"
import earth from "../assests/plant.svg"
import Faqs from '../components/Faqs'



const Home = () => {
  return (
    <div   > 
      
      
    <div className='flex '>
     <div className=' w-[50%] bg-blue-900 h-[450px] '>
      <div className='mt-20 ml-14 px-2 flex flex-col gap-5 text-4xl text-white font-semibold font-sans'>
     <span>Online Examination System</span>
     <span className='text-xl  font-thin  '>Exam Hall offers a tested, feature-rich solution for a better experience in Online Examination Software to Conduct Semester Exams, Mock Tests, Entrance Exams, and Tuition Class Assessments in a Proctored Environment.

</span> 
     

     <div className='mt-14 flex gap-8 items-center'>
      <img src={earth} />
      <span className='text-green-400 font-serif text-4xl'>Go Green, Go Paperless</span>
     </div>
     </div>
     
     </div>
     <img src={image} className='w-[50%] h-[450px] '/> 
     </div>

     <Faqs/>
     
    </div>
  )
}

export default Home