import axios from 'axios';
import { apiBaseURL } from './baseURL';

const instance = axios.create({
  baseURL: `${apiBaseURL.url}`,
});

export default instance;
