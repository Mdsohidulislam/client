import firebase from 'firebase';
import 'firebase/auth'
import firebaseConfig from './FirebaseConfig';


if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}

export const handleSignIn=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((res) => { 
        const newUser=res.user; 
        newUser.logIn=true;
        newUser.message='logged in  successfully';
        newUser.error=false
        storeToken();
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