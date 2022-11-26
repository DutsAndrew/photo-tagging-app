import { MouseEventHandler, FormEventHandler } from 'react';

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
  charactersFound: string[],
};

interface foundCharactersState {
  list: string[];
};

interface AddNameProps {
  levelData: { name: string; characters: { name: string; img: string; }[]; mapSrc: string; level: number; bestScore: string; },
  returnToMain: MouseEventHandler<HTMLButtonElement>,
  gameOver: string,
};

interface NameFormProps {
  saveNameToDb: FormEventHandler<HTMLFormElement>,
};

export type {
  LevelsSnapshotProps,
  LevelProps,
  LeaderboardProps,
  DropDownMenuProps,
  foundCharactersState,
  AddNameProps,
  NameFormProps,
};