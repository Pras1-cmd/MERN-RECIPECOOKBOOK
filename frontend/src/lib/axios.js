import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-recipecookbook.onrender.com/recipes",
});

export default API;
