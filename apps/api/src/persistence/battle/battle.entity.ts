import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Occurrence } from '../occurrence/occurrence.entity';
import { Hero } from '../hero/hero.entity';

@Entity()
export class Battle {
  @PrimaryColumn()
  occurrences_id: number;

  @ManyToOne(() => Occurrence, (occurrence) => occurrence.battles)
  occurrence: Occurrence;

  @PrimaryColumn()
  hero_id: number;

  @ManyToOne(() => Hero, (hero) => hero.battles)
  hero: Hero;

  @Column({ type: 'timestamp', nullable: true })
  battle_started_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  battle_ended_at: Date;
}
