import { useContext } from "react";

import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, QueryCompositeFilterConstraint} from "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyAhYgzxyvuFapinmhJSohpujxTgfNUpusQ",
    authDomain: "geekers-store-3035e.firebaseapp.com",
    projectId: "geekers-store-3035e",
    storageBucket: "geekers-store-3035e.appspot.com",
    messagingSenderId: "478003214910",
    appId: "1:478003214910:web:d1f0d826ee290bdfa1ef6f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


const prodsRef = collection(db, "orders")



