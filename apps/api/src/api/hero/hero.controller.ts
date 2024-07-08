import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateHeroDto } from './create-hero';
import {
  createHero,
  getHeroById,
  getHeroes,
  getNearestHero,
  removeHero,
  updateHero,
} from 'src/domain/hero/services';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';
import { Hero } from 'src/persistence/hero/hero.entity';
import { Point } from 'typeorm';

@Controller('hero')
export class HeroController {
  constructor(
    private readonly createHero: createHero,
    private readonly getHeroes: getHeroes,
    private readonly getHeroById: getHeroById,
    private readonly getNearestHero: getNearestHero,
    private readonly updateHero: updateHero,
    private readonly removeHero: removeHero,
  ) {}

  @Get()
  findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Hero>> {
    return this.getHeroes.execute(query);
  }

  @Post()
  public async create(@Body() createUserDto: CreateHeroDto) {
    return this.createHero.execute(createUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Hero> {
    return this.getHeroById.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() data: any): Promise<Hero> {
    return this.updateHero.execute(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.removeHero.execute(id);
  }

  @Get('nearest')
  findNearest(@Param('location') location: Point): Promise<Hero> {
    return this.getNearestHero.execute(location);
  }
}
