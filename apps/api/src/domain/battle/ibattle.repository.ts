import { Battle } from './battle';

export interface IBattleRepository {
  createBattle(occurrenceId: number, heroId: number): Promise<Battle>;
}
