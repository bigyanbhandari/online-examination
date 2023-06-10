import React, { useEffect, useState } from "react";
import { giveExam } from "../../infra";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const ExamList = () => {
  const navigate = useNavigate();
  const [exam, setExam] = useState();
  const courseId = localStorage.getItem("courseId");


  useEffect(() => {
    giveExam(courseId)?.then(setExam);
  }, [courseId]);

  return (
    <div className="w-full px-4 py-6 overflow-y-auto">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Exam Lists</h1>
      <div>
        <div className="grid grid-cols-4 gap-4">
          {exam?.data.map((item) => {
            return (
              <Card
                onClick={() => {
                  navigate("/studentdashboard/exam");
                  localStorage.setItem("examId", item.examId);
                }}
                data={item}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExamList;
