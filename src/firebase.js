import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyCBaETgN5SCzk-W3xe81zZi7hz_lT9oUEg",
  authDomain: "event-managment-388210.firebaseapp.com",
  projectId: "event-managment-388210",
  storageBucket: "event-managment-388210.appspot.com",
  messagingSenderId: "742359631413",
  appId: "1:742359631413:web:67e9c9dca009b50bf3937c"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);