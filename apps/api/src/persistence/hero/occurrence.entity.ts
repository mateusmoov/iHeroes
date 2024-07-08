import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Monster } from './monster.entity';
import { Battle } from './battle.entity';
import { Point } from 'typeorm';

enum OccurrenceStatus {
  waiting = 'waiting',
  fighting = 'fighting',
  defeated = 'defeated',
}

@Entity()
export class Occurrence {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Monster, (monster) => monster.occurrences)
  monster: Monster;

  @Column()
  monster_id: number;

  @Column({
    type: 'enum',
    enum: OccurrenceStatus,
    default: OccurrenceStatus.waiting,
  })
  status: OccurrenceStatus;

  @Column({ type: 'geography', spatialFeatureType: 'Point', srid: 4326 })
  location: Point;

  @OneToMany(() => Battle, (battle) => battle.occurrence)
  battles: Battle[];
}