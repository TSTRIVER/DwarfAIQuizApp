import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAH7oMxkyZ0MgAoor3ApdmKZZPhnLQF2w0",
    authDomain: "quizapp-9658d.firebaseapp.com",
    databaseURL: "https://quizapp-9658d-default-rtdb.firebaseio.com",
    projectId: "quizapp-9658d",
    storageBucket: "quizapp-9658d.appspot.com",
    messagingSenderId: "837922682495",
    appId: "1:837922682495:web:c88d6c2e3ca07dafd7b14a",
    measurementId: "G-SVXQF9B62S"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);