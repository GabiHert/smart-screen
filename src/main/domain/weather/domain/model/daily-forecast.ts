export class DailyForecast {
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
      id?: number;
      main: string;
      description: string;
      icon?: string;
    }
  ];
}
