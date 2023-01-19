import { SELECT } from '../constants/actionTypes';
import { CENTER } from '../constants/locationData';

const INIT_STATE = {
    id:"",
    latitude: CENTER.latitude,
    longitude: CENTER.longitude
}
export default (state = INIT_STATE, action) => {

    switch (action.type) {

        case SELECT:
            // all from database 
            return action.payload;

        default:
            return state;
    }
}