import React, { FC } from "react";
import type { LeaderboardProps } from "../../types/interfaces";
import LeaderboardSnap from "./LeaderboardSnap";

const Leaderboard: FC<LeaderboardProps> = (props): JSX.Element => {

  const { returnToMain, currentLevel, leaderboard } = props;

  if (currentLevel === 0) {
    return (
      <LeaderboardSnap returnToMain={returnToMain} leaderboard={leaderboard} />
    );
  };

  return (
    <div className="leaderboard-container">
      <p>Leaderboard</p>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Leaderboard;