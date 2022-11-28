import React, { FC, MouseEventHandler } from "react";
import '../../styles/LevelsSnapshot.css';
import type  { LevelsSnapshotProps } from "../../types/interfaces";
import beachLevel from '../../assets/waldo_levels/waldo_beach_map.jpeg';
import coldMountainLevel from '../../assets/waldo_levels/waldo_cold_mountain.jpeg';
import feastLevel from '../../assets/waldo_levels/waldo_feast_map.jpeg';
import marketLevel from '../../assets/waldo_levels/waldo_market.jpeg';
import medievalLevel from '../../assets/waldo_levels/waldo_medieval_map.jpeg';
import siegeLevel from '../../assets/waldo_levels/waldo_siege_map.jpeg';
import uniqid from 'uniqid';

const LevelsSnapshot: FC<LevelsSnapshotProps> = (props): JSX.Element => {

  const { handleLevelSelection, leaderboards } = props;

  const sendLevelInformation = (levelNumber: number): void => {
    handleLevelSelection(levelNumber);
  };

  const handleLeaderboardRender = (): void => {
    handleLevelSelection(7);
  };

  const levelSnapshots = [
    {
      name: 'Level 1: Beach',
      bestScore: `Best: ${leaderboards[0].sortedData[0][1][0]} ${leaderboards[0].sortedData[0][1][1].toString().replace('.', ':')}`,
      mapSrc: beachLevel,
      level: 1,
    },
    {
      name: 'Level 2: Ski Mountain',
      bestScore: `Best: ${leaderboards[1].sortedData[0][1][0]} ${leaderboards[1].sortedData[0][1][1].toString().replace('.', ':')}`,
      mapSrc: coldMountainLevel,
      level: 2,
    },
    {
      name: 'Level 3: Feast',
      bestScore: `Best: ${leaderboards[2].sortedData[0][1][0]} ${leaderboards[2].sortedData[0][1][1].toString().replace('.', ':')}`,
      mapSrc: feastLevel,
      level: 3,
    },
    {
      name: 'Level 4: Market',
      bestScore: `Best: ${leaderboards[3].sortedData[0][1][0]} ${leaderboards[3].sortedData[0][1][1].toString().replace('.', ':')}`,
      mapSrc: marketLevel,
      level: 4,
    },
    {
      name: 'Level 5: GoldShire',
      bestScore: `Best: ${leaderboards[4].sortedData[0][1][0]} ${leaderboards[4].sortedData[0][1][1].toString().replace('.', ':')}`,
      mapSrc: medievalLevel,
      level: 5,
    },
    {
      name: 'level 6: Siege',
      bestScore: `Best: ${leaderboards[5].sortedData[0][1][0]} ${leaderboards[5].sortedData[0][1][1].toString().replace('.', ':')}`,
      mapSrc: siegeLevel,
      level: 6,
    },
  ]

  return (
    <div className="game-levels-preview-container">
      {Array.isArray(levelSnapshots) && levelSnapshots.map((level) => {
        return <div className="level-snap-container" key={uniqid()} onClick={() => sendLevelInformation(level.level)} >
          <img src={level.mapSrc} alt="beach level preview" height="85%" width="100%" ></img>
          <div className="level-snap-info-container">
            <p className="level-snap-info-current-level"><strong>{level.name}</strong></p>
            <p className="level-snap-info-best-score"><em>{level.bestScore}</em></p>
          </div>
        </div>
      })}
      <button className="view-leaderboard-button" onClick={handleLeaderboardRender} >View Leaderboard</button>
    </div>
  );
};

export default LevelsSnapshot;