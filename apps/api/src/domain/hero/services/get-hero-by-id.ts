import { Injectable, Inject } from '@nestjs/common';
import { IHeroRepository } from '../ihero.repository';
import { Hero } from '../hero';

const HeroRepo = () => Inject('HeroRepo');

@Injectable()
export class getHeroById {
  constructor(@HeroRepo() private readonly heroRepository: IHeroRepository) {}

  public async execute(id: number): Promise<Hero> {
    return await this.heroRepository.getHeroById(id);
  }
}
