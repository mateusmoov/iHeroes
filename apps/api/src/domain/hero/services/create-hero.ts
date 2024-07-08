import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Hero } from '../hero';
import { IHeroRepository } from '../ihero.repository';

const HeroRepo = () => Inject('HeroRepo');

@Injectable()
export class createHero {
  constructor(@HeroRepo() private readonly heroRepository: IHeroRepository) {}

  public async execute(data: Partial<Hero>): Promise<HttpStatus> {
    await this.heroRepository.createHero(data);
    return HttpStatus.OK;
  }
}
