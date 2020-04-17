const Rebase = require("re-base");
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyAAO6sY07hH_J8UbXwqgaaPPPkE0RxSRkU",
  authDomain: "filmes-1846a.firebaseapp.com",
  databaseURL: "https://filmes-1846a.firebaseio.com",
  projectId: "filmes-1846a",
  storageBucket: "filmes-1846a.appspot.com",
  messagingSenderId: "608479129049",
  appId: "1:608479129049:web:725376c393cafe7bf43dc8",
  measurementId: "G-51S537B3MG",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const config_firebase = Rebase.createClass(app.database());

export const storage = app.storage();
app.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
export const auth = app.auth();
export default config_firebase;
