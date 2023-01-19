import * as api from '../api/index.js';
import {FETCH_ALL} from '../constants/actionTypes';


export const getBreweries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBreweries();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};



