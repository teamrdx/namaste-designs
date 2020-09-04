import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDSz8PJa2d0O1PMAnj7LexdwdoFBli9Q80",
    authDomain: "namaste-design.firebaseapp.com",
    databaseURL: "https://namaste-design.firebaseio.com",
    projectId: "namaste-design",
    storageBucket: "namaste-design.appspot.com",
    messagingSenderId: "481320898357",
    appId: "1:481320898357:web:c4a69c2f8a77f5fb0e867c"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }   catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
  };



  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;