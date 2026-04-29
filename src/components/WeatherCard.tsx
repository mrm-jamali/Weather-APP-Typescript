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
      <h2>{data.weather[0].description}</h2>
      <p>temp:{data.main.temp}</p>
       <p>humidity:{data.main.humidity}</p>
        <p>speed:{data.wind.speed}</p>
    </div>
  )
    
}

