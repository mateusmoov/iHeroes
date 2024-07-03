import { Point } from 'typeorm';

export class CreateHeroDto {
  name: string;
  ranking: string;
  location: Point;
}
