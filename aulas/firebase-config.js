// firebase-config.js
const firebaseConfig = {
  apiKey: "SUA_API_KEY_AQUI",
  authDomain: "seuprojeto.firebaseapp.com",
  databaseURL: "https://seuprojeto-default-rtdb.firebaseio.com",
  projectId: "seuprojeto",
  storageBucket: "seuprojeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
