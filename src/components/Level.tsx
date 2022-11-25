import React, { FC, useState, MouseEvent, useEffect } from "react";
import '../styles/Level.css';
import type { LevelProps } from "../types/interfaces";
import DropDownMenu from './DropDownMenu';
import uniqid from 'uniqid';
import { initializeApp } from "firebase/app";
import { getFirestore,
  doc,
  collection,
  getDoc,
  getDocs,
  query,
  Firestore,
} from 'firebase/firestore';
import { foundCharactersState } from '../types/interfaces';

const Level: FC<LevelProps> = (props): JSX.Element => {

  const { returnToMain, levelData } = props;

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

  const [charactersFound, setCharactersFound] = useState<foundCharactersState>({
    list: [],
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
      // console.log('X:', characterX, 'Y:', characterY);
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

  // check db when a character has been selected to validate for good click
  useEffect(() => {
    // if there is a selected character check db, prevents db query when state is first set
    if (characterSelected.character.length > 1) {
      (async function fetchCharacterDataFromFirestore() {
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
    
        async function getCharacterCoordsFromFirebase(db: Firestore) {
          const charactersRef = doc(db, 'levels', levelData.level.toString());
          const charactersSnap = await getDoc(charactersRef);
    
          const waldoData: Object | undefined = charactersSnap.data()?.Waldo;
          const wendaData: Object | undefined = charactersSnap.data()?.Wenda;
          const wizardData: Object | undefined = charactersSnap.data()?.Wizard;
          const odlawData: Object | undefined = charactersSnap.data()?.Odlaw;
    
          const selectedCharacter = characterSelected.character;
    
          switch(selectedCharacter) {
            case 'Waldo':
              return waldoData;
            case 'Wenda':
              return wendaData;
            case 'Wizard':
              return wizardData;
            case 'Odlaw':
              return odlawData;
            default:
              return null;
          }
        };
        const characterDbData = await getCharacterCoordsFromFirebase(db);
        checkIfDbCoordsMatchClient(characterDbData)
      })();
    }
  }, [characterSelected]);

  const checkIfDbCoordsMatchClient = (characterDbData: any) => {
    const mouseX = characterSelected.characterX;
    const mouseY = characterSelected.characterY;
    // console.log(mouseX, mouseY, characterDbData);
    if (characterDbData) {
      if (mouseX > characterDbData[2]
        && mouseX < characterDbData[3]
        && mouseY > characterDbData[0]
        && mouseY < characterDbData[1]
      ) {
        handleCharacterFound();
      } else {
        handleBadClick();
      };
    };
  };

  const handleCharacterFound = () => {
    const character: string = characterSelected.character;
    if (charactersFound.list.includes(character)) {
      return;
    };
    setCharactersFound({
      list: [...charactersFound.list, character],
    });
    buildUserResponse(`SUCCESS! You Found: ${character}`, true);
    setCharacterSelected({
      status: false,
      character: '',
      characterX: 0,
      characterY: 0,
    });
  };

  const handleBadClick = () => {
    const character = characterSelected.character;
    buildUserResponse(`That wasn't: ${character}. Try again :)`, false);
    setCharacterSelected({
      status: false,
      character: '',
      characterX: 0,
      characterY: 0,
    });
  };

  const buildUserResponse = (response: string, status: boolean): void => {
    const informationContainer = document.querySelector('.level-info-container');
    const responseText = document.createElement('p');
    responseText.textContent = response;
    responseText.classList.add('character-selection-response');
    if (status === true) {
      responseText.classList.add('response-success');
    } else if (status === false) {
      responseText.classList.add('response-fail');
    };
    informationContainer?.appendChild(responseText);
    setTimeout(() => {
      informationContainer?.removeChild(responseText);
    }, 2000);
  };

  const fetchCharacters = (): string[] => {
    // converts level data into a readable character list
    const characterList: string[] = [];
    levelData.characters.forEach((character) => {
      characterList.push(character.name);
    });
    return characterList;
  };

  const characterList: string[] = fetchCharacters();

  if (dropDownMenu.status === true) {
    return (
      <div className="level-container">
        <div className="level-info-container">
          <p className="current-level-text">{levelData.name}</p>
          <div className="level-objectives-container">
            <p className="level-objective-text">Find:</p>
            {Array.isArray(levelData.characters) && levelData.characters.map((character) => {
              return <img id={character.name} key={uniqid()} src={character.img} alt={character.name} width="30vw" height="30vh"></img>
            })}
          </div>
        </div>
        <div className="map-container" onClick={handleMapClick} >
          <img id="current-level" src={levelData.mapSrc} alt="beach" width="100%" height="100%"></img>
          <DropDownMenu
            characterList={characterList}
            dropDownMenu={dropDownMenu}
            charactersFound={charactersFound.list}
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
              return <img id={character.name} key={uniqid()} src={character.img} alt={character.name} width="30vw" height="30vh"></img>
          })}
        </div>
      </div>
      <div className="map-container" onClick={handleMapClick} >
        <img id="current-level" src={levelData.mapSrc} alt="beach" width="100%" height="100%"></img>
      </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Level;