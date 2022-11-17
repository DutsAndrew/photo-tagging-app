import React, { FC } from "react";
import type { LevelProps } from "../../types/interfaces";
import coldMountainLevel from '../../assets/waldo_levels/waldo_cold_mountain.jpeg';
import waldo from '../../assets/waldo_characters/waldo.jpg';
import wizard from '../../assets/waldo_characters/wizard.jpeg';
import odlaw from '../../assets/waldo_characters/odlaw.jpg';
import wenda from '../../assets/waldo_characters/wenda.jpeg';

const Level2: FC<LevelProps> = (props): JSX.Element => {

  const { returnToMain } = props;

  return (
    <div className="level-container">
      <div className="level-info-container">
        <p className="current-level-text">Level 2: Ski Mountain</p>
        <div className="level-objectives-container">
          <p className="level-objective-text">Find:</p>
          <img src={waldo} alt="waldo" width="30vw" height="30vh"></img>
          <img src={wizard} alt="waldo" width="30vw" height="30vh"></img>
          <img src={odlaw} alt="waldo" width="30vw" height="30vh"></img>
          <img src={wenda} alt="waldo" width="30vw" height="30vh"></img>
        </div>
      </div>
      <div className="map-container">
        <img src={coldMountainLevel} alt="beach" width="100%" height="100%"></img>
      </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Level2;