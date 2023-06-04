import axios from 'axios';
import { BaseUrl } from '../constants';

export let api = axios.create({
  baseURL: BaseUrl,
});


