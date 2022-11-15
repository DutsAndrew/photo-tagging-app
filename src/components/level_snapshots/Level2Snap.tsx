import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";

const Level2Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  return (
    <p>Level 2</p>
  );
};

export default Level2Snap;