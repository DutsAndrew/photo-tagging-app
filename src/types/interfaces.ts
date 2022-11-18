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

interface DropDownMenuProps {
  characterList: Array<string>,
  handleDropDownMenuSelection: MouseEventHandler<HTMLButtonElement>,
  characterSelectionMenu: any,
}

export type {
  snapProps,
  LevelsSnapshotProps,
  LevelProps,
  LeaderboardProps,
  DropDownMenuProps,
};