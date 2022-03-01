export class DailyForecastDto {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  weather: [
    {
      main: string;
      description: string;
    }
  ];
}
