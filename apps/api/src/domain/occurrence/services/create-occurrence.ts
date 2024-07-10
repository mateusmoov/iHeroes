import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { Occurrence } from '../occurrence';
import { IOccurrenceRepository } from '../ioccurrence.repository';

const OccurrenceRepo = () => Inject('OccurrenceRepo');

@Injectable()
export class createOccurrence {
  constructor(
    @OccurrenceRepo()
    private readonly occurrenceRepository: IOccurrenceRepository,
  ) {}

  public async execute(data: Occurrence): Promise<HttpStatus> {
    await this.occurrenceRepository.createOccurrence(data);
    return HttpStatus.OK;
  }
}
