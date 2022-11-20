import React, { useState, useEffect } from "react";
import LevelsSnapshot from "./LevelsSnapshot";
import Leaderboard from './Leaderboard';
import Level from './Level';
import beachLevel from '../assets/waldo_levels/waldo_beach_map.jpeg';
import coldMountainLevel from '../assets/waldo_levels/waldo_cold_mountain.jpeg';
import feastLevel from '../assets/waldo_levels/waldo_feast_map.jpeg';
import marketLevel from '../assets/waldo_levels/waldo_market.jpeg';
import medievalLevel from '../assets/waldo_levels/waldo_medieval_map.jpeg';
import siegeLevel from '../assets/waldo_levels/waldo_siege_map.jpeg';
import waldo from '../assets/waldo_characters/waldo.jpg';
import wizard from '../assets/waldo_characters/wizard.jpeg';
import odlaw from '../assets/waldo_characters/odlaw.jpg';
import wenda from '../assets/waldo_characters/wenda.jpeg';

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

  const levelData = [
    {
      name: 'Level 1: Beach',
      characters: [
        {
          name: 'Waldo',
          img: waldo,
        },
        {
          name: 'Wizard',
          img: wizard,
        },
        {
          name: 'Odlaw',
          img: odlaw,
        },
      ],
      mapSrc: beachLevel,
      level: 1,
      bestScore: 'No Best Score',
    },
    {
      name: 'Level 2: Ski Mountain',
      characters: [
        {
          name: 'Waldo',
          img: waldo,
        },
        {
          name: 'Wizard',
          img: wizard,
        },
        {
          name: 'Odlaw',
          img: odlaw,
        },
        {
          name: 'Wenda',
          img: wenda,
        },
      ],
      mapSrc: coldMountainLevel,
      level: 2,
      bestScore: 'No Best Score',
    },
    {
      name: 'Level 3: Feast',
      characters: [
        {
          name: 'Waldo',
          img: waldo,
        },
        {
          name: 'Wizard',
          img: wizard,
        },
        {
          name: 'Odlaw',
          img: odlaw,
        },
        {
          name: 'Wenda',
          img: wenda,
        },
      ],
      mapSrc: feastLevel,
      level: 3,
      bestScore: 'No Best Score',
    },
    {
      name: 'Level 4: Market',
      characters: [
        {
          name: 'Waldo',
          img: waldo,
        },
        {
          name: 'Odlaw',
          img: odlaw,
        },
        {
          name: 'Wenda',
          img: wenda,
        },
      ],
      mapSrc: marketLevel,
      level: 4,
      bestScore: 'No Best Score',
    },
    {
      name: 'Level 5: GoldShire',
      characters: [
        {
          name: 'Waldo',
          img: waldo,
        },
        {
          name: 'Wenda',
          img: wenda,
        },
      ],
      mapSrc: medievalLevel,
      level: 5,
      bestScore: 'No Best Score',
    },
    {
      name: 'Level 6: Siege',
      characters: [
        {
          name: 'Waldo',
          img: waldo,
        },
      ],
      mapSrc: siegeLevel,
      level: 6,
      bestScore: 'No Best Score',
    }
  ];

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