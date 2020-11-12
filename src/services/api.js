import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
const api = axios.create({ baseURL });
export default api;
