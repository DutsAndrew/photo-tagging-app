import React, { FC, useState } from "react";
import { LeaderboardSnapProps } from "../../types/interfaces";
import uniqid from 'uniqid';
import '../../styles/LeaderboardSnap.css';
import HighScoreList from "./HighScoreList";

const LeaderboardSnap: FC<LeaderboardSnapProps> = (props): JSX.Element => {

  const { returnToMain, leaderboard } = props;

  const [viewAllSwitch, setViewAllSwitch] = useState({
    switchOn: false,
    level: 0,
  });

  const returnToLeaderboard = () => {
    setViewAllSwitch({
      switchOn: false,
      level: 0,
    });
  };

  const handleViewAllClick = (e: React.MouseEvent): void => {
    const target = e.target as HTMLInputElement
    const levelNumber = Number(target.parentElement?.id);
    setViewAllSwitch({
      switchOn: true,
      level: levelNumber,
    });
  };

  const renderLevelLeaderboard = (level: number) => {
    switch(level) {
      case 1:
        return (<HighScoreList highScores={convertedArray[0][1].sortedData} returnToLeaderboard={returnToLeaderboard} level={1} />);
      case 2:
        return (<HighScoreList highScores={convertedArray[1][1].sortedData} returnToLeaderboard={returnToLeaderboard} level={2} />);
      case 3:
        return (<HighScoreList highScores={convertedArray[2][1].sortedData} returnToLeaderboard={returnToLeaderboard} level={3} />);
      case 4:
        return (<HighScoreList highScores={convertedArray[3][1].sortedData} returnToLeaderboard={returnToLeaderboard} level={4} />);
      case 5:
        return (<HighScoreList highScores={convertedArray[4][1].sortedData} returnToLeaderboard={returnToLeaderboard} level={5} />);
      case 6:
        return (<HighScoreList highScores={convertedArray[5][1].sortedData} returnToLeaderboard={returnToLeaderboard} level={6} />);
    };
  };

  // variables for conditional below and HighScoreList render
  const convertedArray: any[] = Object.entries(leaderboard);
  let levelStart = 0;

  if (viewAllSwitch.switchOn === false) {
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
            <button className="view-all-leaderboards-button" onClick={handleViewAllClick} >View All</button>
          </div>
        })}
        </div>
        <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
      </div>
    );
  };

  const page: JSX.Element | undefined = renderLevelLeaderboard(viewAllSwitch.level);
  if (page) {
    return page;
  }
  return (
    <p>Error, please try again</p>
  );
};

export default LeaderboardSnap;