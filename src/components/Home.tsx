import React, { useState, useEffect } from "react";
import LevelsSnapshot from "./levels/LevelsSnapshot";
import Leaderboard from './Leaderboard/Leaderboard';
import Level from './levels/Level';
import { levelData } from '../data/levelData';

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

  function pageRenderer(level: number): JSX.Element {
    switch(level) {
      case 0:
        return <LevelsSnapshot handleLevelSelection={handleLevelSelection} />
      case 1:
        return <Level returnToMain={returnToMain} levelData={levelData[0]} />;
      case 2:
        return <Level returnToMain={returnToMain} levelData={levelData[1]} />
      case 3:
        return <Level returnToMain={returnToMain} levelData={levelData[2]} />
      case 4:
        return <Level returnToMain={returnToMain} levelData={levelData[3]} />
      case 5:
        return <Level returnToMain={returnToMain} levelData={levelData[4]} />
      case 6:
        return <Level returnToMain={returnToMain} levelData={levelData[5]} />
      case 7:
        return <Leaderboard returnToMain={returnToMain} />
      default:
        return <p>Error, please try again</p>
    };
  };

  const currentPage: JSX.Element = pageRenderer(currentLevel.level);
  return currentPage;
};

export default MainPage;