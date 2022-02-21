import { initializeApp} from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAleUv5Yghozmojlf86-HxWteWJpOCWovs",
    authDomain: "food-menu-5a123.firebaseapp.com",
    projectId: "food-menu-5a123",
    storageBucket: "food-menu-5a123.appspot.com",
    messagingSenderId: "1059608092868",
    appId: "1:1059608092868:web:5c66c06f266e431fed6991"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app);