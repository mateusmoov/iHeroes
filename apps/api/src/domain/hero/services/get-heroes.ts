import { Injectable, Inject } from '@nestjs/common';
import { Hero } from '../hero';
import { IHeroRepository } from '../ihero.repository';
import { PaginateQuery, Paginated } from 'nestjs-paginate';

const HeroRepo = () => Inject('HeroRepo');

@Injectable()
export class getHeroes {
  constructor(@HeroRepo() private readonly heroRepository: IHeroRepository) {}

  public async execute(data: PaginateQuery): Promise<Paginated<Hero>> {
    return await this.heroRepository.getHeroes(data);
  }
}
