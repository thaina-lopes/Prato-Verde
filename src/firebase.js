import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUl2RI4pGAmN8r8qCQhAYwnQVJ4d0mStI",
  authDomain: "prato-verde-7e33d.firebaseapp.com",
  projectId: "prato-verde-7e33d",
  storageBucket: "prato-verde-7e33d.appspot.com",
  messagingSenderId: "960881901776",
  appId: "1:960881901776:web:d53e3cfc8292747a53ded5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
