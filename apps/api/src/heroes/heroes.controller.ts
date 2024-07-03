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

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  create(@Body() createHeroDto: Hero) {
    return this.heroesService.createHero(createHeroDto);
  }

  @Get()
  findAll() {
    return this.heroesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroesService.findOne(+id);
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
