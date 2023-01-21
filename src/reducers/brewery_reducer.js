import { FETCH_ALL, FETCH_FROM_NEW } from '../constants/actionTypes';

export default (state = [], action) => {

    switch (action.type) {

        case FETCH_ALL:
            // all from database 
            return action.payload;


        case FETCH_FROM_NEW :
            return action.payload

        default:
            return state;
    }
}