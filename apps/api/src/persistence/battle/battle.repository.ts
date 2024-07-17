import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Battle } from './battle.entity';

@Injectable()
export class BattleRepository {
  constructor(
    @InjectRepository(Battle)
    private battleRepository: Repository<Battle>,
  ) {}

  async createBattle(data: Battle) {
    const newBattle = this.battleRepository.create({
      occurrences_id: data.occurrences_id,
      hero_id: data.hero_id,
    });

    return this.battleRepository.save(newBattle);
  }
}
