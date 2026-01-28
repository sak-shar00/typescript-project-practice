export interface Coordinates {
  lat: number
  lon: number
}

export interface WeatherCondition {
  id: number
  main: string
  description: string
  icon: string
}

export interface WeatherData {
  coord: Coordinates
  weather: WeatherCondition[]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  wind: { speed: number; deg?: number }
  sys: { country: string; sunrise: number; sunset: number }
  name: string
  dt: number
}

export interface ForecastData {
  cod: string
  message: number
  cnt: number
  list: Array<{
    dt: number
    main: WeatherData["main"]
    weather: WeatherCondition[]
    wind: { speed: number; deg?: number }
    dt_txt: string
  }>
  city: {
    id: number
    name: string
    coord: Coordinates
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
  }
}

export interface GeocodeData {
  name: string
  local_names?: Record<string, string>
  lat: number
  lon: number
  country: string
  state?: string
}

export type GeocodeResponse = GeocodeData[]