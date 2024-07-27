import axios from "axios";

const axiosInstance = axios.create({
  // local instance of firbase functions
  baseURL: "http://127.0.0.1:5001/e-commerce-99ed4/us-central1/api",
  // deployed version of amazon server on render.com
  // baseURL: "https://amazon-api-deploy-9x3v.onrender.com/",
});

export { axiosInstance };
