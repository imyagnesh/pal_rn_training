import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://f42e-122-170-157-170.ngrok.io',
});

export default axiosInstance;
