import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";
import beachLevel from '../../assets/waldo_levels/waldo_beach_map.jpeg';

const Level1Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  return (
    <div className="level-container">
      <img src={beachLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-info-container">
        <p className="level-info-current-level"><strong>Level 1: Beach</strong></p>
        <p className="level-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level1Snap;