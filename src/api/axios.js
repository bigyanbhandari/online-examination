import axios from "axios";

export default axios.create({
  method: "post",
  baseURL: "http://localhost:9595",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});




