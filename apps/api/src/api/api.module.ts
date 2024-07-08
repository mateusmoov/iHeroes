import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { HeroController } from './hero/hero.controller';
import { UserController } from './user/user.controller';

@Module({
  controllers: [
    UserController,
    HeroController
  ],
  imports: [DomainModule]
})
export class ApiModule { }