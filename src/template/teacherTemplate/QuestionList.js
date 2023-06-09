import React, { useEffect, useState } from "react";
import { getAllQuestion } from "../../infra";

const QuestionList = () => {
  const [question, setQuestion] = useState();
  useEffect(() => {
    getAllQuestion().then(setQuestion);
  }, []);
  console.log(question?.data);

  return (
    <div className="py-10 w-full p-4 flex flex-col gap-4">
      {question?.data.map((i) => (
        <div key={i.questionId} className="bg-gray-300  rounded-lg w-full p-4 shadow-md ">
          <div className=" flex  justify-between px-4">
            <span>{i.questionTitle}</span> <span>[{i.questionMarks}]</span>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 px-4">
            <div>a. {i.choice1}</div>
            <div>b. {i.choice2}</div>
            <div>c.{i.choice3}</div>
            <div>d. {i.choice4}</div>
          </div>
          <hr className="h-1 mt-2"></hr>
          <div className="pt-4 px-4">Correct Answer : {i.answerDto?.answerContent}</div>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
