import firebase from 'firebase/app';
import 'firebase/auth'
import firebaseConfig from './FirebaseConfig';

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSingIN=()=>{
    const  GProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(GProvider)
        .then((res) => { 
            const newUser=res.user; 
            newUser.logIn=true;
            newUser.message='Google logged in successfully';
            newUser.error=false
            storeToken()
            return newUser;
        }).catch((error) => {
            var errorMessage = error.message;
            alert(errorMessage)
            const newUser={};
            newUser.logIn=false;
            newUser.message=errorMessage;
            newUser.error=true;
            return newUser;
        });
}


const storeToken=()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('idToken',idToken)
    }).catch(function(error) {
        alert(error.message)
    });
  }
