import React, { FC } from "react";
import { LeaderboardSnapProps } from "../../types/interfaces";
import uniqid from 'uniqid';
import '../../styles/LeaderboardSnap.css';

const LeaderboardSnap: FC<LeaderboardSnapProps> = (props): JSX.Element => {

  const { returnToMain, leaderboard } = props;

  const convertedArray: any[] = Object.entries(leaderboard);
  let levelStart = 0;
  console.log(convertedArray);

  return (
    <div className="leaderboard-snap-container">
      <p className="leaderboard-header-text">Leaderboards:</p>
      <div className="level-leaderboard-snaps-container">
      {Array.isArray(convertedArray) && convertedArray.map((levelLeaderboard) => {
        levelStart++;
        return <div id={levelStart.toString()} className="level-leaderboard-snaps" key={uniqid()}>
          <p className="level-leaderboard-header">Level: <strong>{levelStart}</strong></p>
          <ul className="level-data-container" >{levelLeaderboard[1].sortedData.slice(0, 3).map((array: any) => {
            return <li className="level-high-scores" key={uniqid()}>
              <strong>{array[1][0]}</strong>, <em>{array[1][1].toString().replace('.', ':')}</em>
            </li>
          })}</ul>
          <button className="view-all-leaderboards-button">View All</button>
        </div>
      })}
      </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default LeaderboardSnap;