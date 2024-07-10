import { Occurrence } from './occurrence';

export interface IOccurrenceRepository {
  createOccurrence(data: Partial<Occurrence>): Promise<Occurrence>;
}
