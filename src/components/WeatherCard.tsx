export interface WeatherData {
  main: {
    temp: number
    humidity: number
  }
  weather: [
    { 
      description: string
    }
  ]
  wind: {
    speed: number
  };
}
export default function WeatherCard({data}:{data:WeatherData}) {
  return (
    <div className="weather-card">
      <p>{data.weather[0].description}</p>
    </div>
  )
    
}

