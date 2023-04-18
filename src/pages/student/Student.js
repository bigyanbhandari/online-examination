import React, {useState} from 'react'
import StudentLogin from './StudentLogin';
import StudentReg from './StudentReg';

function Student() {
  const [currentForm, setCurrentForm]= useState('Login');

  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div>
      <div className="App">
      {
        currentForm== "Login"?
         <StudentLogin onFormSwitch={toggleForm}/> : <StudentReg onFormSwitch={toggleForm}/>
      }
     </div>

    </div>
  )
}

export default Student