import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { UpdateOccurrenceDto } from './dto/update-occurrence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Occurrence } from 'src/database/entities/occurrence.entity';
import { Point, Repository } from 'typeorm';
import { Monster } from 'src/database/entities/monster.entity';
import { HeroesService } from 'src/heroes/heroes.service';
import { BattlesService } from 'src/battles/battles.service';
@Injectable()
export class OccurrencesService {
  constructor(
    @InjectRepository(Occurrence)
    private occurrencesRepository: Repository<Occurrence>,
    @InjectRepository(Monster)
    private monstersRepository: Repository<Monster>,
    private heroesService: HeroesService,
    private battlesService: BattlesService,
  ) {}

  async create(createOccurrenceDto: CreateOccurrenceDto) {
    const { monsterName, dangerLevel, monster, location } = createOccurrenceDto;

    try {
      const existingMonster = await this.findOrCreateMonster(
        monsterName,
        dangerLevel,
        monster,
      );
      const newOccurrence = await this.createOccurrence(
        existingMonster.id,
        location,
      );

      const nearestHero = await this.heroesService.findNearestHero(location);

      await this.battlesService.create(newOccurrence.id, nearestHero.id);

      return newOccurrence;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Something went wrong');
    }
  }

  private async findOrCreateMonster(
    monsterName: string,
    dangerLevel: string,
    monster: any,
  ) {
    let existingMonster = await this.monstersRepository.findOne({
      where: { name: monsterName },
    });

    if (
      !existingMonster ||
      (existingMonster && existingMonster.danger_level !== dangerLevel)
    ) {
      const newMonster = this.monstersRepository.create({
        name: monsterName,
        image_url: monster.url,
        description: monster.description,
        danger_level: dangerLevel,
      });

      existingMonster = await this.monstersRepository.save(newMonster);
    }

    return existingMonster;
  }

  private async createOccurrence(monsterId: number, location: Point) {
    const newOccurrence = this.occurrencesRepository.create({
      monster_id: monsterId,
      location: {
        type: 'Point',
        coordinates: [location[0].lng, location[0].lat],
      },
    });

    return this.occurrencesRepository.save(newOccurrence);
  }

  findAll() {
    return `This action returns all occurrences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} occurrence`;
  }

  update(id: number, updateOccurrenceDto: UpdateOccurrenceDto) {
    return `This action updates a #${id} occurrence`;
  }

  remove(id: number) {
    return `This action removes a #${id} occurrence`;
  }
}
