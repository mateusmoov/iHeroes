import { Injectable, Inject } from '@nestjs/common';
import { IMonsterRepository } from '../imonster.repository';
import { Monster } from '../monster';

const MonsterRepo = () => Inject('MonsterRepo');

@Injectable()
export class findMonster {
  constructor(
    @MonsterRepo() private readonly monsterRepository: IMonsterRepository,
  ) {}

  public async execute(monsterName: string): Promise<Monster> {
    const findMonster = await this.monsterRepository.findMonster(monsterName);
    return findMonster;
  }
}
