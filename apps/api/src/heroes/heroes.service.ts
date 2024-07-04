import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { CreateHeroDto } from './dto/create-hero.dto';
import { Hero } from 'src/database/entities/hero.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Point, Repository } from 'typeorm';
import { PaginateQuery, paginate, Paginated } from 'nestjs-paginate';
import { Logger } from '@nestjs/common';

@Injectable()
export class HeroesService {
  private readonly logger = new Logger(HeroesService.name);

  constructor(
    @InjectRepository(Hero)
    private heroesRepository: Repository<Hero>,
  ) {}

  async create(createHeroDto: CreateHeroDto): Promise<Hero> {
    try {
      const newHero = this.heroesRepository.create(
        createHeroDto as DeepPartial<Hero>,
      );
      return await this.heroesRepository.save(newHero);
    } catch (error) {
      this.logger.error('Error creating hero', error.stack);
      throw new InternalServerErrorException('Failed to create hero');
    }
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Hero>> {
    try {
      return paginate(query, this.heroesRepository, {
        sortableColumns: ['id', 'name', 'ranking'],
        nullSort: 'last',
        defaultSortBy: [['ranking', 'DESC']],
        searchableColumns: ['name'],
      });
    } catch (error) {
      this.logger.error('Error finding all heroes', error.stack);
      throw new InternalServerErrorException('Failed to fetch heroes');
    }
  }

  async update(id: number, updateHeroDto: UpdateHeroDto): Promise<Hero> {
    const hero = await this.findById(id);

    Object.assign(hero, updateHeroDto);

    try {
      return await this.heroesRepository.save(hero);
    } catch (error) {
      this.logger.error(`Error updating hero with id ${id}`, error.stack);
      throw new InternalServerErrorException('Failed to update hero');
    }
  }

  async findById(id: number): Promise<Hero> {
    try {
      return await this.heroesRepository.findOneOrFail({ where: { id } });
    } catch (error) {
      this.logger.error(`Hero with id ${id} not found`, error.stack);
      throw new NotFoundException(`Hero with id ${id} not found`);
    }
  }

  async findNearestHero(location: Point): Promise<Hero | null> {
    const nearestHero = await this.heroesRepository
      .createQueryBuilder('hero')
      .select('hero')
      .addSelect(
        'ST_Distance(hero.location, ST_SetSRID(ST_MakePoint(:lng, :lat), 4326))',
        'distance',
      )
      .orderBy('distance', 'ASC')
      .setParameters({
        lng: location[0].lat,
        lat: location[0].lng,
      })
      .getOne();

    return nearestHero;
  }

  async remove(id: number): Promise<void> {
    const hero = await this.findById(id);
    try {
      await this.heroesRepository.remove(hero);
    } catch (error) {
      this.logger.error(`Error removing hero with id ${id}`, error.stack);
      throw new InternalServerErrorException('Failed to remove hero');
    }
  }
}
