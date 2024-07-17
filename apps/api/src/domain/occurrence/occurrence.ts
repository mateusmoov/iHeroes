import { Point } from 'typeorm';

export type Occurrence = {
  id?: number;
  location: Point;
  dangerLevel: string;
  monsterName: string;
  monster: {
    name: string;
    url: string;
    description: string;
  };
};
