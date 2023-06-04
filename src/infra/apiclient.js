import request from './request';
const API_URL="http://localhost:9595";

export const teacherLogin = payload => {
    return request('POST', `${API_URL}/user/login`, false, payload);
  };
export const createQuestion = payload => {
    return request('POST', `${API_URL}/question/create`, true, payload);
  };