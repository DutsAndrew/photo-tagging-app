import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";
import feastLevel from '../../assets/waldo_levels/waldo_feast_map.jpeg';

const Level3Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;
  return (
    <div className="level-container">
      <img src={feastLevel} alt="beach level preview" height="85%" width="100%" ></img>
      <div className="level-info-container">
        <p className="level-info-current-level"><strong>Level 3: Feast</strong></p>
        <p className="level-info-best-score"><em>No Best Score</em></p>
      </div>
    </div>
  );
};

export default Level3Snap;