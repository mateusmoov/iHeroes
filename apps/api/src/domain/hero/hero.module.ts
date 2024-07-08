import { Module } from '@nestjs/common';
import { HeroRepositoryModule } from 'src/persistence/hero/hero.repository.module';
import {
  createHero,
  getHeroes,
  getHeroById,
  getNearestHero,
  updateHero,
  removeHero,
} from './services';

@Module({
  imports: [HeroRepositoryModule],
  providers: [
    createHero,
    getHeroes,
    getHeroById,
    getNearestHero,
    updateHero,
    removeHero,
  ],
  exports: [
    createHero,
    getHeroes,
    getHeroById,
    getNearestHero,
    updateHero,
    removeHero,
  ],
})
export class HeroModule {}
