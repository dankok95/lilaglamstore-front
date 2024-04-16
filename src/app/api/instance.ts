import axios from "axios";

const instance = axios.create({
  baseURL: "https://lilaglamstore-backend-c579e64fccd8.herokuapp.com",
});
export default instance;
