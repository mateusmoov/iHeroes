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

  async createOccurrence(monsterId: number, location: Point) {
    const newOccurrence = this.occurrenceRepository.create({
      monster_id: monsterId,
      location: {
        type: 'Point',
        coordinates: [location[0].lng, location[0].lat],
      },
    });

    return this.occurrenceRepository.save(newOccurrence);
  }
}
