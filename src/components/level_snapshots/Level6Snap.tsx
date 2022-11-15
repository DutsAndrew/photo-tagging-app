import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";
import siegeLevel from '../../assets/waldo_levels/waldo_siege_map.jpeg';

const Level6Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  const sendLevelInformation = (): void => {
    handleLevelSelection(6);
  };
  
  return (
    <div className="level-container" onClick={sendLevelInformation}>
      <img src={siegeLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-info-container">
        <p className="level-info-current-level"><strong>Level 6: Siege</strong></p>
        <p className="level-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level6Snap;