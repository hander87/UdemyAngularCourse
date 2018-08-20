import * as firebase from 'firebase';

// FIREBASE SETTINGS: RULES
// {
//   "rules": {
//     ".read": "auth != null",
//     ".write": "auth != null"
//   }
// }

export class AuthService {
  token: string;

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
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

}
