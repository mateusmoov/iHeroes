import { Injectable } from '@nestjs/common';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from 'src/database/entities/hero.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FilterOperator,
  FilterSuffix,
  Paginate,
  PaginateQuery,
  paginate,
  Paginated,
} from 'nestjs-paginate';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Hero)
    private heroesRepository: Repository<Hero>,
  ) {}
  async create(heroData: Hero): Promise<Hero> {
    const { name, ranking, location } = heroData;

    const newHero = this.heroesRepository.create({
      name,
      ranking,
      location,
    });

    return this.heroesRepository.save(newHero);
  }

  findAll(query: PaginateQuery): Promise<Paginated<Hero>> {
    return paginate(query, this.heroesRepository, {
      sortableColumns: ['id', 'name', 'ranking'],
      nullSort: 'last',
      defaultSortBy: [['ranking', 'DESC']],
      searchableColumns: ['name'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} hero`;
  }

  update(id: number, updateHeroDto: UpdateHeroDto) {
    return `This action updates a #${id} hero`;
  }

  remove(id: number) {
    return `This action removes a #${id} hero`;
  }
}
