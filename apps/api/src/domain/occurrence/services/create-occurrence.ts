import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Occurrence } from '../occurrence';
import { IOccurrenceRepository } from '../ioccurrence.repository';
import { IMonsterRepository } from 'src/domain/monster/imonster.repository';
import { IBattleRepository } from 'src/domain/battle/ibattle.repository';
import { IHeroRepository } from 'src/domain/hero/ihero.repository';

const OccurrenceRepo = () => Inject('OccurrenceRepo');
const MonsterRepo = () => Inject('MonsterRepo');
const BattleRepo = () => Inject('BattleRepo');
const HeroRepo = () => Inject('HeroRepo');

@Injectable()
export class CreateOccurrence {
  constructor(
    @OccurrenceRepo()
    private readonly occurrenceRepository: IOccurrenceRepository,
    @MonsterRepo() private readonly monsterRepository: IMonsterRepository,
    @BattleRepo() private readonly battleRepository: IBattleRepository,
    @HeroRepo() private readonly heroRepository: IHeroRepository,
  ) {}

  public async execute(data: Occurrence): Promise<Occurrence> {
    try {
      const monster = await this.createOrGetMonster(data);
      const newOccurrence = await this.createOccurrence(data, monster.id);
      await this.createBattle(newOccurrence.id, data.location);

      return newOccurrence;
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Something went wrong trying to save a new occurrence',
      );
    }
  }

  private async createOrGetMonster(data: Occurrence) {
    const monsterPayload = {
      name: data.monsterName,
      image_url: data.monster.url,
      description: data.monster.description,
      danger_level: data.dangerLevel,
    };

    return this.monsterRepository.checkAndCreateMonster(monsterPayload);
  }

  private async createOccurrence(data: Occurrence, monsterId: number) {
    const occurrencePayload = {
      monster_id: monsterId,
      location: data.location,
    };

    return this.occurrenceRepository.CreateOccurrence(occurrencePayload);
  }

  private async createBattle(occurrenceId: number, location: any) {
    const nearestHero = await this.heroRepository.getNearestHero(location);
    await this.battleRepository.createBattle(occurrenceId, nearestHero.id);
  }
}
