import { Injectable, Inject } from '@nestjs/common';
import { Hero } from '../hero';
import { IHeroRepository } from '../ihero.repository';

const HeroRepo = () => Inject('HeroRepo');

@Injectable()
export class updateHero {
  constructor(@HeroRepo() private readonly heroRepository: IHeroRepository) {}

  public async execute(id: number, data: Partial<Hero>) {
    return await this.heroRepository.updateHero(id, data);
  }
}
