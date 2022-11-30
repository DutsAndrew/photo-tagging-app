import { MouseEventHandler, FormEventHandler } from 'react';

interface LevelsSnapshotProps {
  handleLevelSelection: Function,
  leaderboards: any,
};

interface LevelProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
  levelData: { name: string; characters: { name: string; img: string; }[]; mapSrc: string; level: number; bestScore: string; }
  leaderboard: {},
  sendUserToLeaderboard: Function,
};

interface LeaderboardProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
  leaderboard: any,
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
  leaderboard: {},
  sendUserToLeaderboard: Function,
};

interface NameFormProps {
  saveNameToDb: FormEventHandler<HTMLFormElement>,
};

interface LeaderboardSnapProps {
  returnToMain: MouseEventHandler<HTMLButtonElement>,
  leaderboard: any,
};

interface HighScoreListProps {
  highScores: any,
  level: number,
  returnToLeaderboard: () => void,
};

export type {
  LevelsSnapshotProps,
  LevelProps,
  LeaderboardProps,
  DropDownMenuProps,
  foundCharactersState,
  AddNameProps,
  NameFormProps,
  LeaderboardSnapProps,
  HighScoreListProps,
};