import React from 'react'
import Card from '../../components/atomic/Card'
import {BsQuestionCircleFill} from "react-icons/bs"
import {GiNotebook} from 'react-icons/gi'
const TeaDashboard = () => {
  return (
    <div>
       <div className="flex gap-[100px]">

       <Card
      
      icon={<BsQuestionCircleFill size={30} />}
      label="All Questions"
      count="3"
      color="#B7B7B7"
      width='500px'
    />
      <Card
        icon={<GiNotebook size={30} />}
        label="All Exam"
        count="34"
        color="#B7B7B7"
        width='500px'
      />
      
</div>
    </div>
  )
}

export default TeaDashboard