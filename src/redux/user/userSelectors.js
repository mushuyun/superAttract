import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    //it is a option to use array, can just use as plain arguments like selectUser
    [selectUser], 
    user => user.currentUser );
    //or adding parentises 
    //(user) => user.currentUser)