import { Module } from '@nestjs/common';
import { OccurrencesService } from './occurrences.service';
import { Occurrence } from 'src/database/entities/occurrence.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Monster } from 'src/database/entities/monster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Occurrence, Monster])],
  providers: [OccurrencesService],
  exports: [OccurrencesService],
})
export class OccurrencesModule {}
