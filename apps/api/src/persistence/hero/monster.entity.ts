import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Occurrence } from './occurrence.entity';

@Entity()
export class Monster {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image_url: string;

  @Column()
  description: string;

  @Column()
  danger_level: string;

  @OneToMany(() => Occurrence, (occurrence) => occurrence.monster)
  occurrences: Occurrence[];
}
