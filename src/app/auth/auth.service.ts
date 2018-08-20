import * as firebase from 'firebase';

// FIREBASE SETTINGS: RULES
// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }

export class AuthService {

  signupUser(email: string, password: string) {
    // getIdToken
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => console.log(response)
      )
      .catch(
        error => console.log(error)
      );
  }

}
