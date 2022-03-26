import AppointmentUseCase from "../../domain/calendar/app/usecase/appointment-use-case";

export interface AppointmentAdapter {
    get(): Promise<EventModel[]>
}

export const appointmentAdapter: AppointmentAdapter = AppointmentUseCase