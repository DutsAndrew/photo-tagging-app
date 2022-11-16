import React, { FC } from "react";
import type { LevelProps } from "../../types/interfaces";
import beachLevel from '../../assets/waldo_levels/waldo_beach_map.jpeg';

const Level1: FC<LevelProps> = (props): JSX.Element => {

  const { returnToMain } = props;

  return (
    <div className="level-container">
      <div className="level-info-container">
        <p className="current-level-text">Level 1: Beach</p>
        <div className="level-objectives-container">
          <p className="level-objective-text">Find:</p>
        </div>
      </div>
      <div className="map-container">
        <img src={beachLevel} alt="beach" width="100%" height="100%"></img>
      </div>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Level1;