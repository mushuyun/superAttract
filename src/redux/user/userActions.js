import { SET_CURRENT_USER } from "./userTypes"

const setCurrentUser = user => {
    return {
    type: SET_CURRENT_USER,
    payload: user
    }
}
   
export { setCurrentUser };