// I prefer to use the axios library to make api requests
import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
// with axios create I can have a base url and make different requests
const api = axios.create({ baseURL });
export default api;
