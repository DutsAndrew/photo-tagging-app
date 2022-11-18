import React, { FC, useState, MouseEvent } from "react";
import type { LevelProps } from "../../types/interfaces";
import beachLevel from '../../assets/waldo_levels/waldo_beach_map.jpeg';
import waldo from '../../assets/waldo_characters/waldo.jpg';
import wizard from '../../assets/waldo_characters/wizard.jpeg';
import odlaw from '../../assets/waldo_characters/odlaw.jpg';
import DropDownMenu from '../DropDownMenu';

const Level1: FC<LevelProps> = (props): JSX.Element => {

  const { returnToMain } = props;

  const characterList = ["Waldo", "Wizard", "Odlaw"];

  const [characterSelectionMenu, setCharacterSelectionMenu] = useState({
    status: false,
    x: 0,
    y: 0,
  });

  const openCharacterDropDown = (e: MouseEvent): void => {
    if (characterSelectionMenu.status === false) {
      setCharacterSelectionMenu({
        status: true,
        x: e.clientX,
        y: e.clientY,
      });
    } else if (characterSelectionMenu.status === true) {
      setCharacterSelectionMenu({
        status: false,
        x: 0,
        y: 0,
      });
    };
  };

  const handleDropDownMenuSelection = () => {
    console.log('item selected from drop down')
  };

  if (characterSelectionMenu.status === true) {
    return (
      <div className="level-container">
        <div className="level-info-container">
          <p className="current-level-text">Level 1: Beach</p>
          <div className="level-objectives-container">
            <p className="level-objective-text">Find:</p>
            <img src={waldo} alt="waldo" width="30vw" height="30vh"></img>
            <img src={wizard} alt="waldo" width="30vw" height="30vh"></img>
            <img src={odlaw} alt="waldo" width="30vw" height="30vh"></img>
          </div>
        </div>
        <div className="map-container" onClick={openCharacterDropDown} >
          <img src={beachLevel} alt="beach" width="100%" height="100%"></img>
          <DropDownMenu 
              characterList={characterList}
              handleDropDownMenuSelection={handleDropDownMenuSelection}
              characterSelectionMenu={characterSelectionMenu}
          />
        </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
    )
  };

  return (
    <div className="level-container">
      <div className="level-info-container">
        <p className="current-level-text">Level 1: Beach</p>
        <div className="level-objectives-container">
          <p className="level-objective-text">Find:</p>
          <img src={waldo} alt="waldo" width="30vw" height="30vh"></img>
          <img src={wizard} alt="waldo" width="30vw" height="30vh"></img>
          <img src={odlaw} alt="waldo" width="30vw" height="30vh"></img>
        </div>
      </div>
      <div className="map-container" onClick={openCharacterDropDown} >
        <img src={beachLevel} alt="beach" width="100%" height="100%"></img>
      </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Level1;