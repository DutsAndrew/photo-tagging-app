import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";

const Level4Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;
  return (
    <p>Level 4</p>
  );
};

export default Level4Snap;