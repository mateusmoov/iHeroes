import { Injectable } from '@nestjs/common';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { Hero } from 'src/database/entities/hero.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HeroesService {
  constructor(
    @InjectRepository(Hero)
    private heroesRepository: Repository<Hero>,
  ) {}
  async createHero(heroData: Hero): Promise<Hero> {
    const { name, ranking, location } = heroData;

    const newHero = this.heroesRepository.create({
      name,
      ranking,
      location,
    });

    return this.heroesRepository.save(newHero);
  }

  findAll() {
    return `This action returns all heroes`;
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
