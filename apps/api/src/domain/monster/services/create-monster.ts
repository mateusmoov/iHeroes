import { Injectable, Inject } from '@nestjs/common';
import { Monster } from '../monster';
import { IMonsterRepository } from '../imonster.repository';

const MonsterRepo = () => Inject('MonsterRepo');

@Injectable()
export class createMonster {
  constructor(
    @MonsterRepo() private readonly monsterRepository: IMonsterRepository,
  ) {}

  public async execute(data: Partial<Monster>): Promise<Monster> {
    const newMonster = await this.monsterRepository.createMonster(data);
    return newMonster;
  }
}
