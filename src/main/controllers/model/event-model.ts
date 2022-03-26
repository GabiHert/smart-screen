export class EventModel {
    title: string;
    start: {
        year: string;
        weekDay: string;
        day: string;
        hour: string;
        minute: string;
        month: string;
    };
    end: {
        year: string;
        weekDay: string;
        day: string;
        hour: string;
        minute: string;
        month: string;
    };
    eventType: string;

}
