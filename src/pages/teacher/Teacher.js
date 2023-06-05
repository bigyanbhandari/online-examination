import React, {useState} from 'react'
import TeacherLogin from './TeacherLogin';
import { TeacherReg } from './TeacherReg';

function Teacher() {
  const [currentForm, setCurrentForm]= useState('Login');

  const toggleForm = (formName)=>{
    setCurrentForm(formName);
  }
  return (
    <div>
      <div className="App">
      {
        currentForm== "Login"?
         <TeacherLogin onFormSwitch={toggleForm}/> : <TeacherReg onFormSwitch={toggleForm}/>
      }
     </div>

    </div>
  )
}

export default Teacher