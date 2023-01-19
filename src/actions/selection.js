import { SELECT } from '../constants/actionTypes';


export const getSelection = (selectedId) => async (dispatch) => {
    try {
        
        dispatch({ type: SELECT, payload: selectedId });
    } catch (error) {
        console.log(error.message);
    }
};
