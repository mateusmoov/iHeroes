import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hero } from './hero.entity';
import { HeroProvider } from './hero.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  providers: [HeroProvider],
  exports: [HeroProvider],
})
export class HeroRepositoryModule {}
