import { Injectable, Inject } from '@nestjs/common';
import { IHeroRepository } from '../ihero.repository';

const HeroRepo = () => Inject('HeroRepo');

@Injectable()
export class removeHero {
  constructor(@HeroRepo() private readonly heroRepository: IHeroRepository) {}

  public async execute(id: number) {
    return await this.heroRepository.removeHero(id);
  }
}
