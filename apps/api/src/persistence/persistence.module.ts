import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.repository.module';
import { HeroRepositoryModule } from './hero/hero.repository.module';
import { OccurrenceRepositoryModule } from './occurrence/occurrence.repository.module';
import { BattleRepositoryModule } from './battle/battle.repository.module';
import { MonsterRepositoryModule } from './monster/monster.repository.module';

@Module({
  imports: [
    UserRepositoryModule,
    HeroRepositoryModule,
    OccurrenceRepositoryModule,
    BattleRepositoryModule,
    MonsterRepositoryModule,
  ],
  exports: [
    UserRepositoryModule,
    HeroRepositoryModule,
    OccurrenceRepositoryModule,
    BattleRepositoryModule,
    MonsterRepositoryModule,
  ],
})
export class PersistenceModule {}
