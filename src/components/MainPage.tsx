import React, { useState, useEffect } from "react";
import LevelDisplay from "./LevelsDisplay";
import Leaderboard from './Leaderboard';
import Level1 from './levels/Level1';
import Level2 from './levels/Level2';
import Level3 from './levels/Level3';
import Level4 from './levels/Level4';
import Level5 from './levels/Level5';
import Level6 from './levels/Level6';

const MainPage = (): JSX.Element => {

  const [currentLevel, setCurrentLevel] = useState({
    level: 0,
  });

  const handleLevelSelection = (levelNumber: number): void => {
    setCurrentLevel({
      level: levelNumber,
    });
  };

  const returnToMain = () => {
    setCurrentLevel({
      level: 0,
    });
  };

  if (currentLevel.level === 0) {
    return (
      <LevelDisplay handleLevelSelection={handleLevelSelection} />
    );
  };

  if (currentLevel.level === 1) {
    return (
      <Level1 returnToMain={returnToMain} />
    )
  };

  if (currentLevel.level === 2) {
    return (
      <Level2 returnToMain={returnToMain} />
    )
  };

  if (currentLevel.level === 3) {
    return (
      <Level3 returnToMain={returnToMain} />
    )
  };

  if (currentLevel.level === 4) {
    return (
      <Level4 returnToMain={returnToMain} />
    )
  };

  if (currentLevel.level === 5) {
    return (
      <Level5 returnToMain={returnToMain} />
    )
  };

  if (currentLevel.level === 6) {
    return (
      <Level6 returnToMain={returnToMain} />
    )
  };

  if (currentLevel.level === 7) {
    return (
      <Leaderboard returnToMain={returnToMain} />
    )
  };

  return (
    <p>Error, please try again</p>
  )
};

export default MainPage;