import React, { FC } from "react";
import type { LeaderboardProps } from "../../types/interfaces";

const Leaderboard: FC<LeaderboardProps> = (props): JSX.Element => {

  const { returnToMain } = props;

  return (
    <div className="leaderboard-container">
      <p>Leaderboard</p>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Leaderboard;