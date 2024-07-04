import { Module } from '@nestjs/common';
import { OccurrencesService } from './occurrences.service';
import { Occurrence } from 'src/database/entities/occurrence.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monster } from 'src/database/entities/monster.entity';
import { HeroesModule } from 'src/heroes/heroes.module';
import { BattlesModule } from 'src/battles/battles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Occurrence, Monster]),
    HeroesModule,
    BattlesModule,
  ],
  providers: [OccurrencesService],
  exports: [OccurrencesService],
})
export class OccurrencesModule {}
