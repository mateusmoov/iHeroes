import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleProvider } from './battle.provider';
import { Battle } from './battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Battle])],
  providers: [BattleProvider],
  exports: [BattleProvider],
})
export class BattleRepositoryModule {}
