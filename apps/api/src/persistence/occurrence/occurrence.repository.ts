import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Point, Repository } from 'typeorm';
import { Occurrence } from './occurrence.entity';

@Injectable()
export class OccurrenceRepository {
  constructor(
    @InjectRepository(Occurrence)
    private occurrenceRepository: Repository<Occurrence>,
  ) {}

  async createOccurrence(data: Partial<Occurrence>) {
    const newOccurrence = this.occurrenceRepository.create({
      monster_id: data.monster_id,
      location: {
        type: 'Point',
        coordinates: [data.location[0].lng, data.location[0].lat],
      },
    });

    return this.occurrenceRepository.save(newOccurrence);
  }
}
