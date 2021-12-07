
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:false})
  title: string;

  @Column({nullable:true, default: ''})
  description: string;

  @Column({ default: false })
  isDone: boolean;
}
