export type stateType = {
  cards: { id: number; name: string; image: string; checked: boolean }[];
  modalOpen: boolean;
  currentScore: number;
  highScore: number;
};

export type stateTypeWithMethos = stateType & {
  changeStatusHandler(id: number): void;
  resetGameHandler(): void;
};

export type singleCard = stateType['cards'][number];
