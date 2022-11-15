import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";

const Level1Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;

  return (
    <p>Level 1</p>
  );
};

export default Level1Snap;