import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrOkRjsJqq8CDvTePrEU6v3fUsH8AGoeE",
  authDomain: "pp-form-crud.firebaseapp.com",
  databaseURL: "https://pp-form-crud-default-rtdb.firebaseio.com",
  projectId: "pp-form-crud",
  storageBucket: "pp-form-crud.appspot.com",
  messagingSenderId: "71118365444",
  appId: "1:71118365444:web:90bbb7a268612c5002a651"
};
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();