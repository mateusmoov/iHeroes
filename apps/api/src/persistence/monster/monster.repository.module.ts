import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonsterProvider } from './monster.provider';
import { Monster } from './monster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Monster])],
  providers: [MonsterProvider],
  exports: [MonsterProvider],
})
export class MonsterRepositoryModule {}
