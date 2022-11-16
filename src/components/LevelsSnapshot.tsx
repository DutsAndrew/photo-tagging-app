import React, { FC } from "react";
import '../styles/LevelsSnapshot.css';
import type  { LevelsSnapshotProps } from "../types/interfaces";
import Level1Snap from './level_snapshots/Level1Snap';
import Level2Snap from './level_snapshots/Level2Snap';
import Level3Snap from './level_snapshots/Level3Snap';
import Level4Snap from './level_snapshots/Level4Snap';
import Level5Snap from './level_snapshots/Level5Snap';
import Level6Snap from './level_snapshots/Level6Snap';

const LevelsSnapshot: FC<LevelsSnapshotProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  const handleLeaderboardRender = () => {
    handleLevelSelection(7);
  };

  return (
    <div className="game-levels-preview-container">
      <Level1Snap handleLevelSelection={handleLevelSelection} />
      <Level2Snap handleLevelSelection={handleLevelSelection} />
      <Level3Snap handleLevelSelection={handleLevelSelection} />
      <Level4Snap handleLevelSelection={handleLevelSelection} />
      <Level5Snap handleLevelSelection={handleLevelSelection} />
      <Level6Snap handleLevelSelection={handleLevelSelection} />
      <button className="view-leaderboard-button" onClick={handleLeaderboardRender} >View Leaderboard</button>
    </div>
  );
};

export default LevelsSnapshot;