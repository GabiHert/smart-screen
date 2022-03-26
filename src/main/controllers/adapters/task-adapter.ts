import TaskUseCase from "../../domain/calendar/app/usecase/task-use-case";

export interface TaskAdapter {
    get(): Promise<EventModel[]>
}

export const taskAdapter: TaskAdapter = TaskUseCase