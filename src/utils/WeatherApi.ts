const BASE_URL="https://api.openweathermap.org/data/2.5/weather"
const API_KEY="4419ce444e5f69079448914ccdd76a98";

 export async function  fetchDataWeather(city: string) {
    try{
const res=await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}`)
if (!res.ok) {
  throw new Error("Failed to fetch weather data");
}
const data=await res.json()
return data
    }
    catch (error){
console.log("error:",error)
return null
    }

}


    
