import { Injectable } from '@nestjs/common';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { Battle } from 'src/database/entities/battle.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BattlesService {
  constructor(
    @InjectRepository(Battle)
    private battlesRepository: Repository<Battle>,
  ) {}
  async create(occurrenceID: number, heroID: number) {
    const createBattle = await this.battlesRepository.create({
      occurrences_id: occurrenceID,
      hero_id: heroID,
    });

    return this.battlesRepository.save(createBattle);
  }

  findAll() {
    return `This action returns all battles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} battle`;
  }

  update(id: number, updateBattleDto: UpdateBattleDto) {
    return `This action updates a #${id} battle`;
  }

  remove(id: number) {
    return `This action removes a #${id} battle`;
  }
}
