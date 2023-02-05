export type cards = {
  id: number;
  name: string;
  image: string;
  checked: boolean;
}[];

export type singleCard = cards[number] & {
  changeStatusHandler(id: number): void;
};
