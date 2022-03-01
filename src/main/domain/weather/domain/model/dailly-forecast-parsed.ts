export class DailyForecastParsed {
  weekDay: string;
  date: string;
  humidity: number;
  temp: {
    day: string;
    eve: string;
    max: string;
    min: string;
    morn: string;
    night: string;
  };
  weather: {
    description: string;
    main: string;
  };
}
