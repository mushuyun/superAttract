import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
apiKey: "AIzaSyAylrPTo4-HKwiq7Y495aHl0q19e2lmAz4",
authDomain: "super-attract.firebaseapp.com",
databaseURL: "https://super-attract.firebaseio.com",
projectId: "super-attract",
storageBucket: "super-attract.appspot.com",
messagingSenderId: "166653231902",
appId: "1:166653231902:web:61fc18d49926a5ba3bbf0f",
measurementId: "G-E2Q1WJ4SFG"
};

export const createUserProfileDocument =  async (userAuth, additionalData) =>{
    if (!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log("error creating user", error.message)
        }
    }
    
    return userRef;
    
}

firebase.initializeApp(firebaseConfig);

//******! IMPORTANT !*******-the following code is used to add collections 
// to firestore for once, only in the begining imported to App.js **************

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

   return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections =>{
    const transformedCollection = collections.docs.map(doc =>{
         const {title, items} = doc.data();
         
    // *****the following is eaqul to the above, the above is destructure version****
        // const title = doc.data().title;
        // const items = doc.data().items;

        return {
            // encodedURI gets things not in URL but related to URL
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });
    // console.log(transformedCollection);

    return transformedCollection.reduce((accumulator, collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;