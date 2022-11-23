import { MouseEventHandler } from 'react';

interface LevelsSnapshotProps {
  handleLevelSelection: Function,
};

interface LevelProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
  levelData: { name: string; characters: { name: string; img: string; }[]; mapSrc: string; level: number; bestScore: string; }
};

interface LeaderboardProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
};

interface DropDownMenuProps {
  characterList: string[],
  dropDownMenu: any,
};

interface foundCharactersState {
  list: string[];
};

export type {
  LevelsSnapshotProps,
  LevelProps,
  LeaderboardProps,
  DropDownMenuProps,
  foundCharactersState,
};