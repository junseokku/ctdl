export type DailyTasks = {
  id?: string;
  tasks: Array<Task>;
  date: Date;
};

export type Task = {
  id?: string;
  title: string;
  status: TaskStatus;
};

export type TaskStatus = 'DONE' | 'TODO';
