import { Module } from '@nestjs/common';
import { OccurrenceRepositoryModule } from 'src/persistence/occurrence/occurrence.repository.module';
import { CreateOccurrence } from './services';

@Module({
  imports: [OccurrenceRepositoryModule],
  providers: [CreateOccurrence],
  exports: [CreateOccurrence],
})
export class OccurrenceModule {}
