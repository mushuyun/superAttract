import { UPDATE_COLLECTIONS } from "./shopTypes";
// import SHOP_DATA from "./SHOP_DATA";

// const INITIAL_STATE = {
//     collections: SHOP_DATA
// };

// since we already loaded data to firebase and reducer, 
// we don't need SHOP_DATA anymore

const INITIAL_STATE = {
    collections: null
}
const shopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }
            
        default:
            return state;
    }
}

export default shopReducer;