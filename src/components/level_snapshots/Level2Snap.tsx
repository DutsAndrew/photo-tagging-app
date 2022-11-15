import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";
import carnivalLevel from '../../assets/waldo_levels/waldo_carnival_map.jpeg';

const Level2Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  const sendLevelInformation = (): void => {
    handleLevelSelection(2);
  };

  return (
    <div className="level-container" onClick={sendLevelInformation}>
      <img src={carnivalLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-info-container">
        <p className="level-info-current-level"><strong>Level 2: Carnival</strong></p>
        <p className="level-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level2Snap;