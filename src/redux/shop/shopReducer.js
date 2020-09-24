import { UPDATE_COLLECTIONS,
        FETCH_COLLECTIONS_START,
        FETCH_COLLECTIONS_SUCESS,
        FETCH_COLLECTIONS_FAILURE } from "./shopTypes";



// import SHOP_DATA from "./SHOP_DATA";

// const INITIAL_STATE = {
//     collections: SHOP_DATA
// };

// since we already loaded data to firebase and reducer, 
// we don't need SHOP_DATA anymore

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}
const shopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_COLLECTIONS_SUCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };

        // case UPDATE_COLLECTIONS:
        //     return {
        //         ...state,
        //         collections: action.payload
        //     }
            
        default:
            return state;
    }
}

export default shopReducer;