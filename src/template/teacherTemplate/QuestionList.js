import React from "react";

const QuestionList = () => {
  return (
    <div className="py-10 w-full p-4 flex flex-col gap-4">
      <div className="bg-gray-300  rounded-lg w-full p-4 shadow-md ">
        <div className=" flex  justify-between px-4">
          <span>1. Where is Mama Ghar ?</span> <span>[5 marks]</span>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 px-4">
          <div>a. Boudha</div>
          <div>b. Boudha</div>
          <div>c. Boudha</div>
          <div>d. Boudha</div>
        </div>
        <hr className="h-1 mt-2"></hr>
        <div className="pt-4 px-4">Correct Answer :a</div>
      </div>
      <div className="bg-gray-300  rounded-lg w-full p-4 shadow-md ">
        <div className=" flex  justify-between px-4">
          <span>1. Where is Mama Ghar ?</span> <span>[5 marks]</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 px-4">
          <div>a. Boudha</div>
          <div>b. Boudha</div>
          <div>c Boudha</div>
          <div>d. Boudha</div>
        </div>
        <hr className="h-1 mt-2"></hr>
        <div className="pt-4 px-4">Correct Answer :a</div>
      </div>
    </div>
  );
};

export default QuestionList;