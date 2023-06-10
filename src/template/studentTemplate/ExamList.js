import React, { useEffect, useState } from "react";
import { giveExam } from "../../infra";
import { useForm } from "react-hook-form";
import { FieldGroup } from "../../input";
import Card from "./Card";

const Exam = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const [exam, setExam] = useState();

  console.log(exam);

  useEffect(() => {
    giveExam().then(setExam);
  }, []);

  // const handleOptionChange = (questionIndex, optionId) => {
  //   setSelectedAnswers((prevSelectedAnswers) => {
  //     const updatedSelectedAnswers = [...prevSelectedAnswers];
  //     updatedSelectedAnswers[questionIndex] = optionId;
  //     return updatedSelectedAnswers;
  //   });
  // };
  // const onSubmit=(payload)={
  //   console.log(payload),
  // };
  const onSubmit = (setError) => (payload) => {
    console.log(payload);
  };

  return (
    <div className="w-full px-4 overflow-y-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4">
            <FieldGroup
              name="name"
              label="Question"
              hideLabel={false}
              error={errors.amount}
              className="text-md my-4 col-span-4"
            />
            <div>
              <Card />
            </div>
            
            {/* <div className="col-span-2">
              <div className="flex  items-center gap-4">
                <input
                  type="radio"
                  value="option1"
                  {...register("radioOption")}
                />
                <span>A</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex  items-center gap-4">
                <input
                  type="radio"
                  value="option1"
                  {...register("radioOption")}
                />
                <span>A</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex  items-center gap-4">
                <input
                  type="radio"
                  value="option1"
                  {...register("radioOption")}
                />
                <span>A</span>
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex  items-center gap-4">
                <input
                  type="radio"
                  value="option1"
                  {...register("radioOption")}
                />
                <span>A</span>
              </div>
            </div> */}
          </div>

        <button className="pt-4" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Exam;

//     <div className=' mt-2 flex  flex-col items-center w-full p-4'>
//       <h1 className='text-2xl font-bold'>Questions</h1>
//       <h2 className='text-xl'>Current Score: {score}</h2>

// {showFinalResults ?(
//  <div>
//  <h1>Final Results</h1>
//  <h2>
//    {score} out of {questions.length} correct- ({(score/questions.length)*100}%)
//  </h2>
//  <button className='bg-red-500 rounded-lg' onClick={restartGame}>Restart Quiz</button>
// </div>

// ):

// <div className='bg-gray-200   h-auto  shadow-xl p-4  w-full  gap-4 rounded-lg'>

//         <h2 className='text-[20px]'> {currentQuestion+1}  out of {questions.length}</h2>
//         <h3 className='text-2xl'> {questions[currentQuestion].text}</h3>
//           <form >
//         <ul className='flex flex-col  gap-4 mt-2 '>
//           {questions[currentQuestion].options.map((option)=>{
//             return(
//               <li   key={option.id} onClick={()=>optionClicked(option.isCorrect)} className='cursor-pointer  hover:bg-blue-300 rounded-lg p-2 w-[40%] ' >{option.text}</li>
//             )
//           })}
//         </ul>
//          <Button className='float-right'>Submit</Button>

//         </form>
//       </div>

// }

//     </div>
