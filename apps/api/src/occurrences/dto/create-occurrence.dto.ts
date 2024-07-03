import { Point } from 'typeorm';

export class CreateOccurrenceDto {
  location: Point;
  dangerLevel: string;
  monsterName: string;
  monster: {
    name: string;
    url: string;
    description: string;
  };
}
