import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZWBubOQvyAdXegnBhAN8iDWlA6W94aY8",
  authDomain: "genmeds-clone.firebaseapp.com",
  projectId: "genmeds-clone",
  storageBucket: "genmeds-clone.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
