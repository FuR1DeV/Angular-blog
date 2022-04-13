import { initializeApp } from "firebase/app";
import {Environment} from "./interface";

export const environment: Environment = {
  production: false,
  apiKey: 'AIzaSyDEW1ZOLiO9Vd8Pt6FufNu3A7QMD6KYlTs',
  fBDbUrl: 'https://angular-blog-13f85-default-rtdb.firebaseio.com'
};

export const firebaseConfig = {
  apiKey: "AIzaSyDEW1ZOLiO9Vd8Pt6FufNu3A7QMD6KYlTs",
  authDomain: "angular-blog-13f85.firebaseapp.com",
  projectId: "angular-blog-13f85",
  storageBucket: "angular-blog-13f85.appspot.com",
  messagingSenderId: "307527487827",
  appId: "1:307527487827:web:4461011322e842f89151a6"
};

export const app = initializeApp(firebaseConfig);
