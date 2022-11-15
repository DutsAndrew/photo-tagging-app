import React, { FC } from "react";
import type { LevelProps } from "../../types/interfaces";

const Level5: FC<LevelProps> = (props): JSX.Element => {

  const { returnToMain } = props;

  return (
    <div className="level-container">
       <p>Level 5</p>
      <button className="return-to-main-button" onClick={returnToMain} >Return to Main Page</button>
    </div>
  );
};

export default Level5;