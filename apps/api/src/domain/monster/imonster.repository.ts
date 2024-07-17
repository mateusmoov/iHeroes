import { Monster } from './monster';

export interface IMonsterRepository {
  createMonster(data: Partial<Monster>): Promise<Monster>;
  findMonster(monsterName: string): Promise<Monster>;
  checkAndCreateMonster(data: Monster): Promise<Monster>;
}
