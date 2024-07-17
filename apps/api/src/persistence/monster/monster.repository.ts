import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Monster } from './monster.entity';

@Injectable()
export class MonsterRepository {
  constructor(
    @InjectRepository(Monster)
    private monsterRepository: Repository<Monster>,
  ) {}

  async createMonster(monsterName: string, dangerLevel: string, monster: any) {
    const newMonster = this.monsterRepository.create({
      name: monsterName,
      image_url: monster.url,
      description: monster.description,
      danger_level: dangerLevel,
    });

    return this.monsterRepository.save(newMonster);
  }

  async findMonster(monsterName: string) {
    const findMonsterById = await this.monsterRepository.findOne({
      where: { name: monsterName },
    });
    return findMonsterById;
  }
}
