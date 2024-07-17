import { Module } from '@nestjs/common';
import { createMonster, findMonster, checkAndCreateMonster } from './services';
import { MonsterRepositoryModule } from 'src/persistence/monster/monster.repository.module';

@Module({
  imports: [MonsterRepositoryModule],
  providers: [createMonster, findMonster, checkAndCreateMonster],
  exports: [createMonster, findMonster, checkAndCreateMonster],
})
export class MonsterModule {}
