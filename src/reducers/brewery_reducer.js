import { FETCH_ALL } from '../constants/actionTypes';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_ALL:
            // all from database 
            return action.payload;

        default:
            return state;
    }
}