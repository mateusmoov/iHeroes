import { Provider } from '@nestjs/common';
import { OccurrenceRepository } from './occurrence.repository';

export const OccurenceProvider: Provider = {
  provide: 'OccurrenceRepo',
  useClass: OccurrenceRepository,
};
