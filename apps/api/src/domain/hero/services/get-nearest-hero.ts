import { Injectable, Inject } from '@nestjs/common';
import { IHeroRepository } from '../ihero.repository';
import { Hero } from '../hero';
import { Point } from 'typeorm';

const HeroRepo = () => Inject('HeroRepo');

@Injectable()
export class getNearestHero {
  constructor(@HeroRepo() private readonly heroRepository: IHeroRepository) {}

  public async execute(location: Point): Promise<Hero> {
    return await this.heroRepository.getNearestHero(location);
  }
}
