import axios from 'axios';
import { URL } from '../constants/locationData';


export const fetchBreweries = () => axios.get(URL);