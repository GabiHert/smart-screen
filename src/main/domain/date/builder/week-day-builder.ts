class WeekDayBuilder {
    build(weekDay: number): string {
        const weekDays = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        return weekDays[weekDay];
    }
}

export default new WeekDayBuilder();