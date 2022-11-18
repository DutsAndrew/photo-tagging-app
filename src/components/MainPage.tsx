import React, { useState, useEffect } from "react";
import '../styles/Level.css';
import LevelsSnapshot from "./LevelsSnapshot";
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

  function pageRenderer(level: number): JSX.Element {
    switch(level) {
      case 0:
        return <LevelsSnapshot handleLevelSelection={handleLevelSelection} />
      case 1:
        return <Level1 returnToMain={returnToMain} />;
      case 2:
        return <Level2 returnToMain={returnToMain} />
      case 3:
        return <Level3 returnToMain={returnToMain} />
      case 4:
        return <Level4 returnToMain={returnToMain} />
      case 5:
        return <Level5 returnToMain={returnToMain} />
      case 6:
        return <Level6 returnToMain={returnToMain} />
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