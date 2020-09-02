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

firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(Config);
// firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;