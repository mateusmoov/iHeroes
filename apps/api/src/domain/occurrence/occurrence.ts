import { Point } from 'typeorm';

export type Occurrence = {
  monster_id: number;
  location: Point;
};
