import { PartialType } from '@nestjs/mapped-types';
import { CreateHeroDto } from './create-hero.dto';
import { Ranking } from 'src/database/entities/hero.entity';
import { Point } from 'typeorm';

export class UpdateHeroDto extends PartialType(CreateHeroDto) {
  name: string;
  ranking: Ranking;
  location: Point;
}
