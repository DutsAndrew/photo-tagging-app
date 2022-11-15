import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";

const Level6Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;
  
  return (
    <p>Level 6</p>
  );
};

export default Level6Snap;