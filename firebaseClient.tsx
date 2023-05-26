// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwETV1BsRHwes6UmIikNlew608f-wojBI",
    authDomain: "hackaburg-d4d9e.firebaseapp.com",
    projectId: "hackaburg-d4d9e",
    storageBucket: "hackaburg-d4d9e.appspot.com",
    messagingSenderId: "923486881138",
    appId: "1:923486881138:web:32465b089abc6cd08fc9eb"
};

let firebaseApp

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
}

// Initialize Firebase
export const app: any = firebaseApp
export const auth = getAuth(app)
export const storage = getStorage(app)
