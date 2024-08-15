import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { TaskStatus } from '../interfaces/tasks.interface';

/**
 * task에 대한 crud
 * 1. task 만들기
 * 2. task 이름/상태 변경
 * 3. task 삭제
 *
 * tasks에 대한 crud
 * 1. tasks 조회
 */

export class CreateTaskDto {
  @IsUUID()
  @IsNotEmpty()
  public userId: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsEnum(['DONE', 'TODO'])
  @IsOptional()
  public status: TaskStatus = 'TODO';
}

export class UpdateTaskDto {
  @IsUUID()
  @IsNotEmpty()
  public userId: string;

  @IsString()
  @IsOptional()
  public title: string;

  @IsEnum(['DONE', 'TODO'])
  @IsOptional()
  public status: TaskStatus;
}

export class DeleteTaskDto {
  @IsUUID()
  @IsNotEmpty()
  public userId: string;

  @IsString()
  @IsNotEmpty()
  public title: string;
}

export class GetDailyTasksDto {
  @IsUUID()
  @IsNotEmpty()
  public userId: string;
}

export class GetDailyTasksByIdDto {
  @IsUUID()
  @IsNotEmpty()
  public userId: string;

  @IsUUID()
  @IsNotEmpty()
  public dailyTasksId: string;
}
