import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProvider } from './user.provider';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserProvider],
  exports: [UserProvider],
})
export class UserRepositoryModule { }