class WeekDayBuilder {
    build(millisecondsDate: number): string {
        const weekDay = new Date(millisecondsDate).getDay()

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

export default new WeekDayBuilder()