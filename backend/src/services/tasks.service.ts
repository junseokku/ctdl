import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';
import { TaskEntity } from '../entities/tasks.entity';
import { Task } from '../interfaces/tasks.interface';

@Service()
@EntityRepository()
export class TaskService extends Repository<TaskEntity> {
  public async findAllDailyTasks(): Promise<Task[]> {
    const tasks: Task[] = await TaskEntity.find();
    return tasks;
  }
}
