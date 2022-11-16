import { MouseEventHandler } from 'react';

interface LevelsSnapshotProps {
  handleLevelSelection: Function,
}

interface snapProps {
  handleLevelSelection: Function,
};

interface LevelProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
};

interface LeaderboardProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
};

export type {
  snapProps,
  LevelsSnapshotProps,
  LevelProps,
  LeaderboardProps,
}