import React, { FC } from "react";
import { HighScoreListProps } from "../../types/interfaces";
import '../../styles/HighScoreList.css';

const HighScoreList: FC<HighScoreListProps> = (props): JSX.Element => {

  const { highScores, returnToLeaderboard, level } = props;

  return (
    <div className="high-score-master">
      <p className="high-score-header">Level: {level}'s Best Scores</p>
        <ol className="high-scores-container">
          {Array.isArray(highScores) && highScores.map((score) => {
            return <li className="high-score-item" key={score[0]}>
              <strong>{score[1][0]}</strong>, {score[1][1].toString().replace('.', ':')}
            </li>
          })}
        </ol>
        <button className="return-to-main-button" onClick={returnToLeaderboard} >Return to Leaderboard</button>
    </div>
  );
};

export default HighScoreList;