import React, { FC } from "react";
import '../../styles/AddNameToLeaderboard.css';
import { AddNameProps } from '../../types/interfaces';
import NameForm from './NameForm';

const AddNameToLeaderboard: FC<AddNameProps> = (props): JSX.Element => {

  const { levelData, returnToMain, gameOver } = props;

  const saveNameToDb = (e: any): void => {
    e.preventDefault();
  };

  return (
    <div className="add-name-to-leaderboard-container">
      <p className="level-win-text" >You beat {levelData.name}!</p>
      <p className="level-win-text">Your time was: {gameOver}</p>
      <NameForm saveNameToDb={saveNameToDb} />
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default AddNameToLeaderboard;