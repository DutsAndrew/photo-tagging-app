import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";

const Level3Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;
  return (
    <p>Level 3</p>
  );
};

export default Level3Snap;