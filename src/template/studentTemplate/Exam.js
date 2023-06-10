import React, { useEffect, useState } from "react";
import { createPdf, getExambyID, submitExam, viewResult } from "../../infra";
import { useForm } from "react-hook-form";
import { Button, FieldGroup } from "../../input";

// function OnlineExamTimer() {
//   const examDuration = 30; // Duration of the exam in minutes
//   const endTime = new Date();
//   endTime.setMinutes(endTime.getMinutes() + examDuration);

//   const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

//   useEffect(() => {
//     const countdownInterval = setInterval(() => {
//       const remaining = getTimeRemaining();
//       setTimeRemaining(remaining);

//       if (remaining <= 0) {
//         clearInterval(countdownInterval);
//         submitExam();
//       }
//     }, 1000);

//     return () => {
//       clearInterval(countdownInterval);
//     };
//   }, []);

//   const getTimeRemaining = () => {
//     const currentTime = new Date().getTime();
//     const remaining = endTime - currentTime;
//     return Math.max(0, remaining);
//   };

//   const submitExam = () => {
//     // Code to submit the exam
//     alert("Time's up! Submitting the exam...");
//     // Add your submission code here
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((time % (1000 * 60)) / 1000);
//     return `${minutes}m ${seconds}s`;
//   };

//   return (
//     <div>
//       <h1>Online Exam Timer</h1>
//       <p>Time Remaining: {formatTime(timeRemaining)}</p>
//       <button onClick={submitExam}>Submit</button>
//     </div>
//   );
// }
// export default OnlineExamTimer;

const Exam = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [exam, setExam] = useState();
  const [msg, setMsg] = useState();
  
  const examId = localStorage.getItem("examId");
  const courseId = localStorage.getItem("courseId");
  const StudentId = localStorage.getItem("StudentId");
  const ResultId = localStorage.getItem("ResultId");
  console.log(ResultId);

  useEffect(() => {
    getExambyID(examId).then(setExam);
  }, [examId]);

  const onSubmit = (payload) => {
    const selectedChoiceDtos = [];

    // Iterate over the exam questions
    exam?.data.questionDtos.forEach((item) => {
      const questionId = item.questionId;
      const selectedChoice = payload[`question-${questionId}`];

      // Add the selected choice to the array
      selectedChoiceDtos.push({
        questionId: questionId,
        selectedChoice: selectedChoice,
      });
    });
    payload = {
      examId: Number(examId),
      studentId: Number(StudentId),
      courseId: Number(courseId),
      selectedChoiceDtos: selectedChoiceDtos,
    };
    console.log(payload);
    submitExam(payload).then((data) => {
      
      localStorage.setItem("ResultId", data.ResultId);
      window.location.reload();
    });
  };

  return (
    <div className="w-full px-4 overflow-y-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {exam?.data.questionDtos.map((item, id) => {
          return (
            <div className="grid grid-cols-4" key={id}>
              <FieldGroup
                name={`question-${item.questionId}`}
                label={item.questionTitle}
                hideLabel={false}
                error={errors[`question-${item.questionId}`]}
                className="text-md my-4 col-span-4"
              />
              <div className="col-span-2">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    value={item.choice1}
                    {...register(`question-${item.questionId}`)}
                  />
                  <span>{item.choice1}</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    value={item.choice2}
                    {...register(`question-${item.questionId}`)}
                  />
                  <span>{item.choice2}</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    value={item.choice3}
                    {...register(`question-${item.questionId}`)}
                  />
                  <span>{item.choice3}</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex  items-center gap-4">
                  <input
                    type="radio"
                    value={item.choice4}
                    {...register(`question-${item.questionId}`)}
                  />
                  <span>{item.choice4}</span>
                </div>
              </div>
            </div>
          );
        })}

        <Button className=" bg-green-120 font-normal mt-5" full type="submit">
          submit
        </Button>
      </form>
    </div>
  );
};

export default Exam;
