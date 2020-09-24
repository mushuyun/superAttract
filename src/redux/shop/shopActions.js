import { UPDATE_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCESS,
  FETCH_COLLECTIONS_FAILURE } from "./shopTypes";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"

// export const updateCollections = collectionsMap => ({
//     type: UPDATE_COLLECTIONS,
//     payload: collectionsMap
//   });

export const fetchCllectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
})

export const fetchCllectionsStart = () => ({
  type: FETCH_COLLECTIONS_START 
});

export const fetchCollectionsStartAsync =() =>{
  return dispatch =>{
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCllectionsStart());

    collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCllectionsSuccess(collectionsMap));
      // updateCollections(collectionsMap);
      // this.setState({ loading: false });
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));  
  }
}