import React, { FC } from "react";
import type { snapProps } from "../../types/interfaces";
import feastLevel from '../../assets/waldo_levels/waldo_feast_map.jpeg';

const Level3Snap: FC<snapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  const sendLevelInformation = (): void => {
    handleLevelSelection(3);
  };

  return (
    <div className="level-snap-container" onClick={sendLevelInformation}>
      <img src={feastLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-snap-info-container">
        <p className="level-snap-info-current-level"><strong>Level 3: Feast</strong></p>
        <p className="level-snap-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level3Snap;