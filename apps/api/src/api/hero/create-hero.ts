import { IsNotEmpty, IsString } from 'class-validator';
import { Ranking } from 'src/persistence/hero/hero.entity';
import { Point } from 'typeorm';

export class CreateHeroDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  ranking: Ranking;

  @IsNotEmpty()
  location: Point;
}
