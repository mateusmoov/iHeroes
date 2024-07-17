import { Injectable, Inject } from '@nestjs/common';
import { Monster } from '../monster';
import { IMonsterRepository } from '../imonster.repository';

const MonsterRepo = () => Inject('MonsterRepo');

@Injectable()
export class checkAndCreateMonster {
  constructor(
    @MonsterRepo() private readonly monsterRepository: IMonsterRepository,
  ) {}

  public async execute(data: Partial<Monster>): Promise<Monster> {
    const existingMonster = await this.monsterRepository.findMonster(data.name);
    const equalDangerLevel =
      existingMonster && existingMonster.danger_level === data.danger_level;

    if (existingMonster || equalDangerLevel) return existingMonster;

    const newMonster = this.monsterRepository.createMonster(data);

    return newMonster;
  }
}
