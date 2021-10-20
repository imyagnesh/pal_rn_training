import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://d567-122-170-157-170.ngrok.io',
  timeout: 3000,
  timeoutErrorMessage: 'Request timeout. Please try after sometime.',
});

export default axiosInstance;
