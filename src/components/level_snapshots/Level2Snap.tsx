import React, { FC } from "react";
import type { snapProps } from "../../types/interfaces";
import coldMountainLevel from '../../assets/waldo_levels/waldo_cold_mountain.jpeg';

const Level2Snap: FC<snapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  const sendLevelInformation = (): void => {
    handleLevelSelection(2);
  };

  return (
    <div className="level-snap-container" onClick={sendLevelInformation}>
      <img src={coldMountainLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-snap-info-container">
        <p className="level-snap-info-current-level"><strong>Level 2: Ski Mountain</strong></p>
        <p className="level-snap-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level2Snap;