import { stateTypeWithMethos } from '../types/types';
import jessica from './images/jessica.png';
import PButhole from './images/butthole.png';
import Terry from './images/Terry.png';
import gearHead from './images/gearHead.png';
import measix from './images/measix.png';
import michael from './images/michael.png';
import abraham from './images/abraham.png';
import princeNebulon from './images/princeNebulon.png';
import J19ick from './images/J19ick.png';
import president from './images/president.png';
import vampire from './images/vampire.png';
import rickkk from './images/rickkk.png';

export const initialState: stateTypeWithMethos = {
  cards: [
    {
      id: 1,
      name: 'Gear Head',
      image: gearHead,
      checked: false,
    },
    {
      id: 2,
      name: "I'm Meeseex!",
      image: measix,
      checked: false,
    },
    {
      id: 3,
      name: 'Jessica',
      image: jessica,
      checked: false,
    },
    {
      id: 4,
      name: 'Krombopulos Michael',
      image: michael,
      checked: false,
    },
    {
      id: 5,
      name: 'Coach Feratu',
      image: vampire,
      checked: false,
    },
    {
      id: 6,
      name: 'Mr. Poopybutthole',
      image: PButhole,
      checked: false,
    },
    {
      id: 7,
      name: 'Prince Nebulon',
      image: princeNebulon,
      checked: false,
    },
    {
      id: 8,
      name: 'Scarry Terry',
      image: Terry,
      checked: false,
    },
    {
      id: 9,
      name: 'Rick Sanchez J19',
      image: J19ick,
      checked: false,
    },
    {
      id: 10,
      name: 'President Curtis',
      image: president,
      checked: false,
    },
    {
      id: 11,
      name: 'Abrodolph Lincoler',
      image: abraham,
      checked: false,
    },
    {
      id: 12,
      name: 'Rick Sanchez',
      image: rickkk,
      checked: false,
    },
  ],
  modalOpen: false,
  currentScore: 0,
  highScore: 0,
  changeStatusHandler: (id: number) => void {},
  updateSccore: (id: number) => void {},
};
