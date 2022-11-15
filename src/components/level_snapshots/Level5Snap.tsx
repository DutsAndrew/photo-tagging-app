import React, { FC } from "react";
import type { LevelSnapProps } from "../../types/interfaces";

const Level5Snap: FC<LevelSnapProps> = (props): JSX.Element => {

  const { handleLevelSelection } = props;
  return (
    <p>Level 5</p>
  );
};

export default Level5Snap;