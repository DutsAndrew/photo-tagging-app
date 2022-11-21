import React, { FC, useState, MouseEvent, useEffect } from "react";
import '../styles/Level.css';
import type { LevelProps } from "../types/interfaces";
import DropDownMenu from './DropDownMenu';
import uniqid from 'uniqid';
import { initializeApp } from "firebase/app";
import { getFirestore,
  doc,
  collection,
  getDocs,
  query,
} from 'firebase/firestore';

const Level1: FC<LevelProps> = (props): JSX.Element => {

  const { returnToMain, levelData } = props;

  const fetchCharacters = (): string[] => {
    const characterList: string[] = [];
    levelData.characters.forEach((character) => {
      characterList.push(character.name);
    });
    return characterList;
  };

  const characterList = fetchCharacters();

  const [dropDownMenu, setDropDownMenu] = useState({
    status: false,
    mouseX: 0,
    mouseY: 0,
    characterX: 0,
    characterY: 0,
  });

  const [characterSelected, setCharacterSelected] = useState({
    status: false,
    character: '',
    characterX: 0,
    characterY: 0,
  });

  const handleMapClick = (e: MouseEvent): void => {
    const target = e.target as HTMLInputElement;
    if (target.id === 'current-level') {
      handleDropDownMenu(e);
    } else if (target.id === 'Waldo'
    || target.id === "Wizard"
    || target.id === "Odlaw"
    || target.id === "Wenda"
    ) {
      handleCharacterMenuSelection(target);
    }
  };

  const handleDropDownMenu = (e: MouseEvent): void => {
    const mapImg: HTMLElement | null = document.getElementById('current-level');
    if (mapImg) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const characterX = (e.clientX-mapImg.offsetLeft) / mapImg.offsetWidth * 100;
      const characterY = (e.clientY-mapImg.offsetTop) / mapImg.offsetHeight * 100;
      if (dropDownMenu.status === false) {
        setDropDownMenu({
          status: true,
          mouseX: mouseX,
          mouseY: mouseY,
          characterX: characterX,
          characterY: characterY,
        });
      } else if (dropDownMenu.status === true) {
        setDropDownMenu({
          status: false,
          mouseX: 0,
          mouseY: 0,
          characterX,
          characterY,
        });
      };
    }
  };

  const handleCharacterMenuSelection = (target: HTMLInputElement): void => {

    setCharacterSelected({
      status: true,
      character: target.id,
      characterX: dropDownMenu.characterX,
      characterY: dropDownMenu.characterY,
    });

    setDropDownMenu({
      status: false,
      mouseX: 0,
      mouseY: 0,
      characterX: 0,
      characterY: 0,
    });
  };

  useEffect(() => {
    // check database on character selection for good click
    // Initialize Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyD34yDJ04Py9lOKIJOm8G8m83nhzSiaqiA",
      authDomain: "photo-tagging-app-f39ec.firebaseapp.com",
      projectId: "photo-tagging-app-f39ec",
      storageBucket: "photo-tagging-app-f39ec.appspot.com",
      messagingSenderId: "722301117573",
      appId: "1:722301117573:web:44652e9fdd2675a00cb5ec"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
  }, [characterSelected])

  if (dropDownMenu.status === true) {
    return (
      <div className="level-container">
        <div className="level-info-container">
          <p className="current-level-text">{levelData.name}</p>
          <div className="level-objectives-container">
            <p className="level-objective-text">Find:</p>
            {Array.isArray(levelData.characters) && levelData.characters.map((character) => {
              return <img key={uniqid()} src={character.img} alt={character.name} width="30vw" height="30vh"></img>
            })}
          </div>
        </div>
        <div className="map-container" onClick={handleMapClick} >
          <img id="current-level" src={levelData.mapSrc} alt="beach" width="100%" height="100%"></img>
          <DropDownMenu 
              characterList={characterList}
              dropDownMenu={dropDownMenu}
          />
        </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
    )
  };

  return (
    <div className="level-container">
      <div className="level-info-container">
        <p className="current-level-text">{levelData.name}</p>
        <div className="level-objectives-container">
          <p className="level-objective-text">Find:</p>
          {Array.isArray(levelData.characters) && levelData.characters.map((character) => {
              return <img key={uniqid()} src={character.img} alt={character.name} width="30vw" height="30vh"></img>
          })}
        </div>
      </div>
      <div className="map-container" onClick={handleMapClick} >
        <img id="current-level" src={levelData.mapSrc} alt="beach" width="100%" height="100%" useMap="#current-map"  ></img>
        <map name="current-map">
          
        </map>
      </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Level1;