import React, {useState} from 'react'
import DownArrow from '../assests/DownArrow'

const Faqs = () => {
    
    const [faqItems, setFaqItems] = useState([
        {
          question: "What is ExamHall?",
          answer:
            "A common online portal for students and institutes where students can participates in Exams conducted. It is a bridge between creators and students.  ",
        },
        {
          question: "What is a Live ExamHall?",
          answer: "It is an online exam being conducted by creators in McqHall which has a pre-specified start date. After appearing in Live exams you can get your real ranking of that exam set among all students appearing in that set.",
        },
        {
            question: "Can I have multiple virtual phone numbers?",
            answer: "Yes, you can have multiple virtual phone numbers.",
          },
      ]);
      
      const [isOpenList, setIsOpenList] = useState(new Array(faqItems.length).fill(false));
      
      const handleClick = (index) => {
        setIsOpenList((prev) => {
          const newList = [...prev];
          newList[index] = !newList[index];
          return newList;
        });
      };
          


   

  return (
    <div className=' flex flex-col justify-center items-center p-20'>
       
        <div className=' text-2xl p-5 font-bold md:text-4xl lg:text-4xl  text-center'>
        Frequently Asked Questions
        </div>
        <hr className="w-[95%] sm:w-[80%] h-0.5 mx-auto my-4 bg- lg:w-[50%] md:w-[50%] md:text-xl "/>
       
     {
        faqItems.map((item,index)=>{
            return(
         <div className='flex flex-col xs:w-[80%] sm:w-[50%]' key={index}>       
      <div 
        className="font-semibold flex justify-between text-sm  md:text-xl p-2"
        
      >
        {item.question}
        <div className="cursor-pointer" onClick={() => handleClick(index)}>
          <DownArrow />
        </div>
      </div>
      <p
        className={`text-sm text-justify  py-5 ${
          isOpenList[index] ? "block" : "hidden"
        }`}
      >
        {item.answer}
      </p>

              <hr className="w-full md:w-full h-0.5 mx-auto  bg-black  "/>


     </div>

            )
        })
     }
        
   

        
           
       
      


    </div>
  )
}

export default Faqs