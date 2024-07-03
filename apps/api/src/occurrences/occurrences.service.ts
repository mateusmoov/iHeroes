import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/create-occurrence.dto';
import { UpdateOccurrenceDto } from './dto/update-occurrence.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Occurrence } from 'src/database/entities/occurrence.entity';
import { Repository } from 'typeorm';
import { Monster } from 'src/database/entities/monster.entity';

@Injectable()
export class OccurrencesService {
  constructor(
    @InjectRepository(Occurrence)
    private occurrencesRepository: Repository<Occurrence>,
    @InjectRepository(Monster)
    private monstersRepository: Repository<Monster>,
  ) {}

  async create(createOccurrenceDto: CreateOccurrenceDto) {
    const { monsterName, dangerLevel, monster, location } = createOccurrenceDto;

    try {
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

      const newOccurrence = this.occurrencesRepository.create({
        monster_id: existingMonster.id,
        location: {
          type: 'Point',
          coordinates: [location[0].lng, location[0].lat],
        },
      });

      return this.occurrencesRepository.save(newOccurrence);
    } catch (error) {
      console.error(error);
      throw new NotFoundException(`Monster with name ${monsterName} not found`);
    }
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
