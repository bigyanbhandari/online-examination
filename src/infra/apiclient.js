import { formatLongDate } from '../utils/date';
import request from './request';
const API_URL="http://localhost:9595";

export const teacherLogin = (payload) => {
  return request("POST", `${API_URL}/user/login`, false, payload);
};
export const adminLogin = (payload) => {
  return request("POST", `${API_URL}/user/login`, false, payload);
};
export const createQuestion = (payload) => {
  return request("POST", `${API_URL}/question/create`, true, payload);
};

export const studentLogin = (payload) => {
  return request("POST", ` ${API_URL}/user/login`, false, payload);
};

// export const createFaculty = payload=>{
//   return request ('POST',`${API_URL}/faculty/create`,true, payload)

// }

export const getAllCourse = () => {
  return request("GET", `${API_URL}/course/readAll`, true);
};

export const getAllQuestion = () => {
  return request("GET", `${API_URL}/question/readByCourse/52`, true);
};
export const getPendingTeacher = () => {
  return request("GET", `${API_URL}/user/readAllTeacher`, true);
};
export const getPendingStudent = () => {
  return request("GET", `${API_URL}/user/readAllStudent`, true);
};

export const approveUser = (id) => {
  return request("POST", `${API_URL}/user/approveUser/${id}`, true);
};
export const getApprovedTeacher = () => {
  return request("GET", `${API_URL}/user/view-all-approved-teacher`, true);
};
export const getApprovedStudent = () => {
  return request("GET", `${API_URL}/user/view-all-approved-student`, true);
};
// export const createFaculty = payload=>{
//   return request ('POST',`${API_URL}/faculty/create`,true, payload)

// }

export const examStart = (payload) => {
  const data = {
    examTitle: payload.examTitle,
    examDesc: payload.examDesc,
    examStartedTime: formatLongDate(payload.examStartedTime),
    examEndedTime: formatLongDate(payload.examEndedTime),
    questionPattern: payload.questionPattern,
    examQuestionDisplayLimit: parseInt(payload.examQuestionDisplayLimit),
  };
  return request("POST", `${API_URL}/exam/create`, true, data);
};

export const addStudent = (payload) => {
  const data = {
    ...payload,
    roleName: "ROLE_STUDENT",
  };
  return request(
    "POST",
    `${API_URL}/user/create`,
    false,

    data
  );
};

export const addTeacher = (payload) => {
  const data = {
    ...payload,
    roleName: "ROLE_TEACHER",
  };
  return request("POST", `${API_URL}/user/create`, false, data);
};

export const createCourse = (payload) => {
  return request("POST", `${API_URL}/course/create`, true, payload);
};

export const giveExam = (payload) => {
  return request("GET", `${API_URL}/exam/read-exams/52`, true, payload);
};

export const AnalyticsCount = () => {
  return request("GET", `${API_URL}/count/all`, true);
};
export const createPdf = (id) => {
  return request("POST", `${API_URL}/pdf/createPdf/${id}`, true);
};
  // export const createFaculty = payload=>{
  //   return request ('POST',`${API_URL}/faculty/create`,true, payload)

  // }

 


 

 

 

  
  export const getExambyID = (id)=>{
    return request ('GET',`${API_URL}/exam/read-exam/${id}`,true)

  }
  export const submitExam = (payload)=>{
    return request ('POST',`${API_URL}/exam/submit-exams`,true,payload)

  }
