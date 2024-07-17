import { Injectable, Inject } from '@nestjs/common';
import { Battle } from '../battle';
import { IBattleRepository } from '../ibattle.repository';

const BattleRepo = () => Inject('BattleRepo');

@Injectable()
export class createBattle {
  constructor(
    @BattleRepo() private readonly battleRepository: IBattleRepository,
  ) {}

  public async execute(data: Battle): Promise<Battle> {
    const newBattle = await this.battleRepository.createBattle(
      data.heroId,
      data.occurrenceId,
    );
    return newBattle;
  }
}
