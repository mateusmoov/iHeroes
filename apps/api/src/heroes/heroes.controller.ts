import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from 'src/database/entities/hero.entity';
import { Paginate, PaginateQuery, Paginated } from 'nestjs-paginate';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  create(@Body() createHeroDto: Hero) {
    return this.heroesService.create(createHeroDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery): Promise<Paginated<Hero>> {
    return this.heroesService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroesService.findById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeroDto: UpdateHeroDto) {
    return this.heroesService.update(+id, updateHeroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroesService.remove(+id);
  }
}
