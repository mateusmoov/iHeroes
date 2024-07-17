import { Point } from 'typeorm';
import { Battle } from 'src/persistence/battle/battle.entity';

export enum HeroStatus {
  available = 'available',
  in_transit = 'in_transit',
  fighting = 'fighting',
  getting_back = 'getting_back',
}

export enum Ranking {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
}

export type Hero = {
  id: number;
  ranking: Ranking;
  name: string;
  location: Point;
  status: HeroStatus;
  battles: Battle[];
};
