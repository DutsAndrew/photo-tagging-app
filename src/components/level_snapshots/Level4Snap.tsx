import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";
import marketLevel from '../../assets/waldo_levels/waldo_market.jpeg';

const Level4Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  const sendLevelInformation = (): void => {
    handleLevelSelection(4);
  };

  return (
    <div className="level-container" onClick={sendLevelInformation}>
      <img src={marketLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-info-container">
        <p className="level-info-current-level"><strong>Level 4: Market</strong></p>
        <p className="level-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level4Snap;