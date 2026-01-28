import { API_CONFIG } from "./config"
import {
  Coordinates,
  WeatherData,
  ForecastData,
  GeocodeResponse
} from "./types"

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    })

    return `${endpoint}?${searchParams.toString()}`
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`)
    }
    return response.json()
  }

  async getCurrentWeather({ lat, lon }: Coordinates): Promise<WeatherData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat,
      lon,
      units: API_CONFIG.DEFAULT_PARAMS.units,
    })
    return this.fetchData<WeatherData>(url)
  }

  async getForecast({ lat, lon }: Coordinates): Promise<ForecastData> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat,
      lon,
      units: API_CONFIG.DEFAULT_PARAMS.units,
    })
    return this.fetchData<ForecastData>(url)
  }

  async reverseGeocode({ lat, lon }: Coordinates): Promise<GeocodeResponse> {
    const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
      lat,
      lon,
      limit: 1,
    })
    return this.fetchData<GeocodeResponse>(url)
  }
}

export const weatherApi = new WeatherAPI()