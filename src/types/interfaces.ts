import { MouseEventHandler } from 'react';

interface LevelDisplayProps {
  handleLevelSelection: Function,
}

interface LevelSnapProps {
  handleLevelSelection: Function,
};

interface LevelProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
};

interface LeaderboardProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
};

export type {
  LevelSnapProps,
  LevelDisplayProps,
  LevelProps,
  LeaderboardProps,
}