import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { initializeApp } from "firebase/app";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyAvY0WhlJ2T0wj6Opwm23-TySJPpqHa0Lk",
  authDomain: "coderhouse-react-fa860.firebaseapp.com",
  projectId: "coderhouse-react-fa860",
  storageBucket: "coderhouse-react-fa860.appspot.com",
  messagingSenderId: "944619020081",
  appId: "1:944619020081:web:6101cdab376558a23c5a10",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
