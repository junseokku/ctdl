import { IsNotEmpty } from 'class-validator';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Task, TaskStatus } from '../interfaces/tasks.interface';

@Entity()
export class TaskEntity extends BaseEntity implements Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  status: TaskStatus;
}
