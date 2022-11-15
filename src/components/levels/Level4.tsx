import React, { FC } from "react";
import type { LevelProps } from "../../types/interfaces";

const Level4: FC<LevelProps> = (props): JSX.Element => {

  const { returnToMain } = props;

  return (
    <div className="level-container">
       <p>Level 4</p>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Level4;