import { formatLongDate } from '../utils/date';
import request from './request';
const API_URL="http://localhost:9595";

export const teacherLogin = payload => {
    return request('POST', `${API_URL}/user/login`, false, payload);
  };
  export const adminLogin = payload => {
    return request('POST', `${API_URL}/user/login`, false, payload);
  };
export const createQuestion = payload => {
    return request('POST', `${API_URL}/question/create`, true, payload);
  };

  export const studentLogin =payload=>{
    return request ('POST',` ${API_URL}/user/login`,false,payload)
  };

  // export const createFaculty = payload=>{
  //   return request ('POST',`${API_URL}/faculty/create`,true, payload)

  // }

  export const getAllCourse = () => {
    return request('GET', `${API_URL}/course/readAll`, true);
    
  }

  export const getAllQuestion = () => {
    return request('GET', `${API_URL}/question/readByCourse/52`, true);
    
  }
  export const examStart = (payload) => {
    const data = {
      examTitle: payload.examTitle,
      examDesc: payload.examDesc,
      examStartedTime: formatLongDate(payload.examStartedTime),
      examEndedTime: formatLongDate(payload.examEndedTime),
      questionPattern: payload.questionPattern,
      examQuestionDisplayLimit: payload.examQuestionDisplayLimit,
    }
    return request('POST', `${API_URL}/exam/create`, true,data);
    
  }

  export const addStudent =payload =>{
    const data={
      ...payload,
      roleName:"ROLE_STUDENT",
    }
    return request ('POST',`${API_URL}/user/create`,false,
      
  
    data)
  }

  export const addTeacher = payload =>{
    const data= {
      ...payload,
      roleName:"ROLE_TEACHER",
    }
    return request ('POST',`${API_URL}/user/create`,false,data)
  }

 

 

  export const createCourse = payload=>{
    return request ('POST',`${API_URL}/course/create`,true, payload)

  }