import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './FirebaseConfig';

if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}

export const handleFacebookSignIn=()=>{

    var FBProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(FBProvider)
    .then((res) => { 
        const newUser=res.user; 
        newUser.logIn=true;
        newUser.message='Facebook logged in successfully';
        newUser.error=false
        storeToken()
        return newUser;
    })
    .catch((error) => {
        
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
      // Send token to your backend via HTTPS
      // ...
      console.log(idToken);
    }).catch(function(error) {
      // Handle error
    });
  }