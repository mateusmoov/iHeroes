import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Occurrence } from './occurrence.entity';
import { OccurenceProvider } from './occurrence.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Occurrence])],
  providers: [OccurenceProvider],
  exports: [OccurenceProvider],
})
export class UserRepositoryModule {}
