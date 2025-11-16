
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000'
  // locally: backend on 5000
  // in prod: we'll set REACT_APP_API_URL to Azure URL
});

export default api;
