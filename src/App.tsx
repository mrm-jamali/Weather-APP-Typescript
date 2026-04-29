import React, { useState } from "react";
import "./App.css";
import { fetchDataWeather } from "./utils/WeatherApi";


import WeatherCard from "./components/WeatherCard";
import type { WeatherData } from "./components/WeatherCard";


function App() {
  const [city, setCity] = useState("");
  const [apiData, setApiData] = useState<WeatherData | null>(null);

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (city != "") {
      const data = await fetchDataWeather(city);
      setApiData(data);
    }
  }

  return (

      <div className="app">
        <h2>Weather App</h2>
        <div className="search-bar">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter city..."
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <button type="submit" >
              Search
            </button>
          </form>
        </div>
          {apiData && <WeatherCard data={apiData}/>}
      </div>
        
  
  );
}

export default App;
