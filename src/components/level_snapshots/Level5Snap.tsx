import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";
import medievalLevel from '../../assets/waldo_levels/waldo_medieval_map.jpeg';

const Level5Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  const sendLevelInformation = (): void => {
    handleLevelSelection(5);
  };
  
  return (
    <div className="level-container" onClick={sendLevelInformation}>
      <img src={medievalLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-info-container">
        <p className="level-info-current-level"><strong>Level 5: Medieval</strong></p>
        <p className="level-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level5Snap;