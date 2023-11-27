import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD03K5tCNwVevvmYAOVm-CdFmTzN4n0w2s",
  authDomain: "wanderworld-edd3a.firebaseapp.com",
  projectId: "wanderworld-edd3a",
  storageBucket: "wanderworld-edd3a.appspot.com",
  messagingSenderId: "304917099060",
  appId: "1:304917099060:web:43fbcc0aff03a36f691061"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;