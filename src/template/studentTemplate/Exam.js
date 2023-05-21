import React,{useState} from 'react'

const Exam = () => {
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];


  const [showFinalResults,setFinalResults]=useState(false);
  const [score, setScore]=useState(0);
  const [currentQuestion,setCurrentQuestion]=useState(0); 

  const optionClicked=(isCorrect)=>{
    if(isCorrect){
      setScore(score+1);
    }
    if(currentQuestion+1<questions.length)
   { setCurrentQuestion(currentQuestion+1);}
   else{
    setFinalResults(true);
   }
  }

  const restartGame=()=>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className=' mt-[10%] flex  flex-col items-center ml-[200px]'>
      <h1 className='text-2xl font-bold'>Questions</h1>
      <h2 className='text-xl'>Current Score: {score}</h2>

{showFinalResults ?(
 <div>
 <h1>Final Results</h1>
 <h2>
   {score} out of {questions.length} correct- ({(score/questions.length)*100}%) 
 </h2>
 <button className='bg-red-500 rounded-lg' onClick={restartGame}>Restart Quiz</button>
</div>

):
<div className='bg-gray-500 p-[16px]  h-auto text-white shadow-xl w-[500px] flex  flex-col items-center gap-4 rounded-lg'>
        <h2 className='text-[20px]'> {currentQuestion+1}  out of {questions.length}</h2>
        <h3 className='text-3xl'> {questions[currentQuestion].text}</h3>

        <ul className='flex flex-col gap-4'>
          {questions[currentQuestion].options.map((option)=>{
            return(
              <li key={option.id} onClick={()=>optionClicked(option.isCorrect)} className='cursor-pointer' >{option.text}</li>
            )
          })}
        </ul>
      </div>
}

       
      
    
    </div>
  )
}

export default Exam