import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/user.repository.module';
import { HeroRepositoryModule } from './hero/hero.repository.module';



@Module({
  imports: [UserRepositoryModule, HeroRepositoryModule],
  exports: [UserRepositoryModule, HeroRepositoryModule],
})
export class PersistenceModule { }