import React,{useState} from 'react'


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
    text: "Which of the following countries DO NOT border the US?",
    options: [
      { id: 0, text: "Canada", isCorrect: false },
      { id: 1, text: "Russia", isCorrect: true },
      { id: 2, text: "Cuba", isCorrect: true },
      { id: 3, text: "Mexico", isCorrect: false },
    ],
  },
];
const Exam = () => {
  
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);


  const handleOptionChange = (questionIndex, optionId) => {
    setSelectedAnswers(prevSelectedAnswers => {
      const updatedSelectedAnswers = [...prevSelectedAnswers];
      updatedSelectedAnswers[questionIndex] = optionId;
      return updatedSelectedAnswers;
    });
  };

  const handleSubmit = () => {
    console.log(selectedAnswers);
    // You can perform additional operations here, such as checking the selected answers against the correct answers.
  };
  


  // const [showFinalResults,setFinalResults]=useState(false);
  // const [score, setScore]=useState(0);
  // const [currentQuestion,setCurrentQuestion]=useState(0); 
  // const [selectedOption, setSelectedOption] = useState(null);

  // const optionClicked=(isCorrect)=>{
  //   if(isCorrect){
  //     setScore(score+1);
  //   }
  //   if(currentQuestion+1<questions.length)
  //  { setCurrentQuestion(currentQuestion+1);}
  //  else{
  //   setFinalResults(true);
  //  }
  // }

  // const restartGame=()=>{
  //   setScore(0);
  //   setCurrentQuestion(0);
  //   setFinalResults(false);
  // }
  
  return (
    <div className='w-full px-4 overflow-y-auto'>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className='mb-4 pb-3'>
          <p className='text-xl '>{question.text}</p>
          {question.options.map(option => (
            <div key={option.id} className='bg-gray-200 px-6 flex gap-4 shadow-lg '>
              <input
              
                type="radio"
                name={`question${questionIndex}`}
                value={option.id}
                id={`option${option.id}`}
                checked={selectedAnswers[questionIndex] === option.id}
                onChange={() => handleOptionChange(questionIndex, option.id)}
              />
              <label htmlFor={`option${option.id}`}>{option.text}</label>
            </div>
          ))}
        </div>
       
      ))}
       
       <button className='bg-blue-500 rounded-lg w-[25%] h-[30px]  ml-[25%] ' onClick={handleSubmit}>Submit</button>

       
    </div>
  );
}

 
 
        export default Exam




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
  

