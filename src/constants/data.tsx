import { cards } from '../types/types';
import assasin from './images/assasin.jpg';
import birdPerson from './images/birdPerson.jpg';
import Bully from './images/Bully.webp';
import IceT from './images/IceT.jpg';
import MrNimbus from './images/MrNimbus.webp';
import PButhole from './images/PButhole.jpg';
import Psychologist from './images/Psychologist.jpg';
import Terry from './images/Terry.webp';
import SuperHero from './images/SuperHero.webp';
import YouDKme from './images/YouDKme.webp';

export const initialState: cards = [
  {
    id: 1,
    name: 'Jaguar',
    image: assasin,
    checked: false,
  },
  {
    id: 2,
    name: 'Frank Palicky',
    image: Bully,
    checked: false,
  },
  {
    id: 3,
    name: 'Bird Person',
    image: birdPerson,
    checked: false,
  },
  {
    id: 4,
    name: 'Ice T',
    image: IceT,
    checked: false,
  },
  {
    id: 5,
    name: 'Mr. Nimbus',
    image: MrNimbus,
    checked: false,
  },
  {
    id: 6,
    name: 'Puppy Butthole',
    image: PButhole,
    checked: false,
  },
  {
    id: 7,
    name: 'Dr. Wong',
    image: Psychologist,
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
    name: 'Planetina',
    image: SuperHero,
    checked: false,
  },
  {
    id: 10,
    name: 'Mrs.Panckakes',
    image: YouDKme,
    checked: false,
  },
];
