import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Battle } from './battle.entity';

enum HeroStatus {
  available = 'available',
  in_transit = 'in_transit',
  fighting = 'fighting',
  getting_back = 'getting_back',
}

export enum Ranking {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
}

@Entity()
export class Hero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Ranking })
  ranking: Ranking;

  @Column({ unique: true })
  name: string;

  @Column({ type: 'geography', spatialFeatureType: 'Point', srid: 4326 })
  location: string;

  @Column({ type: 'enum', enum: HeroStatus, default: HeroStatus.available })
  status: HeroStatus;

  @OneToMany(() => Battle, (battle) => battle.hero)
  battles: Battle[];
}
