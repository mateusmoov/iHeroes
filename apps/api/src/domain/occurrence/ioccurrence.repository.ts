import { Occurrence } from './occurrence';

export interface IOccurrenceRepository {
  CreateOccurrence(data: Partial<Occurrence>): Promise<Occurrence>;
}
