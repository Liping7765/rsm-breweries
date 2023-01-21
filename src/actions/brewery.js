import * as api from '../api/index.js';
import {FETCH_ALL, FETCH_FROM_NEW} from '../constants/actionTypes';


export const getBreweries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBreweries();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};



export const getBreweriesFromNewApi = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBreweriesFromNewApi();

        dispatch({ type: FETCH_FROM_NEW , payload: data });
    } catch (error) {
        console.log(error.message);
    }
};