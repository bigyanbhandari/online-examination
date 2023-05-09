import React from "react";
import Card from "../../components/atomic/Card";
import { GiNotebook } from "react-icons/gi";
import {BsQuestionCircleFill} from "react-icons/bs";

const StuDashboard = () => {
  return (
    <div >
      <div className="flex gap-[100px]">
      <Card
        icon={<GiNotebook size={30} />}
        label="Total Exams Available"
        count="34"
        color="#dDf6E3"
        width='500px'
      />
      <Card
      
        icon={<BsQuestionCircleFill size={30} />}
        label="Total Questions"
        count="3"
        color="#dDf6E3"
        width='500px'
      />
</div>
    </div>
  );
};

export default StuDashboard;
