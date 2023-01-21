import axios from 'axios';
import { URL, MY_URL } from '../constants/locationData';


export const fetchBreweries = () => axios.get(URL);


export const fetchBreweriesFromNewApi = () => axios.get(MY_URL);