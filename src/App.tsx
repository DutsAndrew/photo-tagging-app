import React from 'react';
import './styles/App.css';

// Initialize Firebase
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD34yDJ04Py9lOKIJOm8G8m83nhzSiaqiA",
  authDomain: "photo-tagging-app-f39ec.firebaseapp.com",
  projectId: "photo-tagging-app-f39ec",
  storageBucket: "photo-tagging-app-f39ec.appspot.com",
  messagingSenderId: "722301117573",
  appId: "1:722301117573:web:44652e9fdd2675a00cb5ec"
};
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
     <p>Hello</p>
    </div>
  );
}

export default App;
