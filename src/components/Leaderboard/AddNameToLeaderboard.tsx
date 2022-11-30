import React, { FC, useEffect, useState } from "react";
import '../../styles/AddNameToLeaderboard.css';
import { AddNameProps } from '../../types/interfaces';
import NameForm from './NameForm';
import { initializeApp } from "firebase/app";
import { getFirestore,
  doc,
  setDoc,
} from 'firebase/firestore';
import uniqid from 'uniqid';
import LeaderboardSnap from "./LeaderboardSnap";

const AddNameToLeaderboard: FC<AddNameProps> = (props): JSX.Element => {

  const { levelData, returnToMain, gameOver, leaderboard } = props;

  const [nameSaved, setNameSaved] = useState({
    status: false,
  })

  // add floating 0, if timer stopped with seconds below 10
  let levelTime = gameOver;
  if (gameOver.split(':')[1].length === 1) {
    const addFloatingZero = `${gameOver.split(':')[0]}` + ':0' + `${gameOver.split(':')[1]}`;
    levelTime = addFloatingZero;
  };

  const saveNameToDb = async (e: any): Promise<void> => {
    e.preventDefault();

    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyD34yDJ04Py9lOKIJOm8G8m83nhzSiaqiA",
      authDomain: "photo-tagging-app-f39ec.firebaseapp.com",
      projectId: "photo-tagging-app-f39ec",
      storageBucket: "photo-tagging-app-f39ec.appspot.com",
      messagingSenderId: "722301117573",
      appId: "1:722301117573:web:44652e9fdd2675a00cb5ec"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const nameValue: string = (document.querySelector('#name-input') as HTMLInputElement).value;
    const nameRef = doc(db, 'leaderboards', levelData.level.toString());
    const idRef: string = uniqid();

    // convert 0:00 time to 0.00 value for db storage
    const convertedTime = Number(levelTime.replace(':', '.'));

    await setDoc(nameRef, {
      [idRef]: [nameValue, convertedTime]
    }, { merge: true});
    setNameSaved({
      status: true,
    });
  };

  if (nameSaved.status === true) {
    return (
      // set this up to return the current level's leaderboard
      <LeaderboardSnap returnToMain={returnToMain} leaderboard={leaderboard} />
    );
  };

  return (
    <div className="add-name-to-leaderboard-container">
      <p className="level-win-text" >You beat {levelData.name}!</p>
      <p className="level-win-text">Your time was: {levelTime}</p>
      <NameForm saveNameToDb={saveNameToDb} />
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default AddNameToLeaderboard;