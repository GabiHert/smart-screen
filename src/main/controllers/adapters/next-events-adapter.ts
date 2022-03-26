import NextEventsUseCase from "../../domain/calendar/app/usecase/next-events-use-case";

export interface NextEventsAdapter {
    get(): Promise<EventModel[]>
}

export const nextEventsAdapter: NextEventsAdapter = NextEventsUseCase