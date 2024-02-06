// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCjo_0_oi8wzZysE30C-q_Fe7aYq9PqQ_A',
  authDomain: 'bloctick-8fba4.firebaseapp.com',
  projectId: 'bloctick-8fba4',
  storageBucket: 'bloctick-8fba4.appspot.com',
  messagingSenderId: '1036537902541',
  appId: '1:1036537902541:web:c04bd71c2f2ad85c30c084',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)