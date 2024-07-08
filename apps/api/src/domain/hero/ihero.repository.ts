import { Point } from 'typeorm';
import { Hero } from './hero';
import { PaginateQuery, Paginated } from 'nestjs-paginate';

export interface IHeroRepository {
  createHero(data: Partial<Hero>): Promise<Hero>;
  getHeroes(query: PaginateQuery): Promise<Paginated<Hero>>;
  getHeroById(id: number): Promise<Hero>;
  getNearestHero(location: Point): Promise<Hero>;
  updateHero(id: number, data: Partial<Hero>): Promise<Hero>;
  removeHero(id: number): Promise<Hero>;
}
