import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './FirebaseConfig';


if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}


export const handleCreateAccount=(email,password,name,photo)=>{

    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {     
        updateUserInfo(name,photo) 
        const newUser=res.user;  
        newUser.logIn=true;
        newUser.message='Account created successfully';
        newUser.error=false
        storeToken()
        return newUser;
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
        const newUser={};
        newUser.logIn=false;
        newUser.message=errorMessage;
        newUser.error=true;
        return newUser;
    });


}


const updateUserInfo=(name,photo)=>{
    var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
        photoURL: photo
    }).then(function(res) {
      // Update successful.
      // console.log(res);
        // console.log('Update successfully');
    }).catch(function(error) {
      // An error happened.
        console.log(error.message);
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