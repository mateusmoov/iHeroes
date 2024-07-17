import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { HeroModule } from './hero/hero.module';
import { MonsterModule } from './monster/monster.module';
import { BattleModule } from './battle/battle.module';
import { OccurrenceModule } from './occurrence/occurrence.module';

@Module({
  imports: [
    UserModule,
    HeroModule,
    MonsterModule,
    BattleModule,
    OccurrenceModule,
  ],
  exports: [
    UserModule,
    HeroModule,
    MonsterModule,
    BattleModule,
    OccurrenceModule,
  ],
})
export class DomainModule {}
