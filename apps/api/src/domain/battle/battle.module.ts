import { Module } from '@nestjs/common';
import { createBattle } from './services';
import { BattleRepositoryModule } from 'src/persistence/battle/battle.repository.module';

@Module({
  imports: [BattleRepositoryModule],
  providers: [createBattle],
  exports: [createBattle],
})
export class BattleModule {}
