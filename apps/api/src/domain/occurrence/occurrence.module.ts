import { Module } from '@nestjs/common';
import { HeroRepositoryModule } from 'src/persistence/hero/hero.repository.module';
import { createOccurrence } from './services';

@Module({
  imports: [HeroRepositoryModule],
  providers: [createOccurrence],
  exports: [createOccurrence],
})
export class HeroModule {}
