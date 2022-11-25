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
      {
        name: 'Wenda',
        img: wenda,
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
      {
        name: 'Wizard',
        img: wizard,
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
      {
        name: 'Odlaw',
        img: odlaw,
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

export {
  levelData,
}