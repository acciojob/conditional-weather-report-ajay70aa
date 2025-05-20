
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const weatherData = { temperature: 25, conditions: "Sunny" }
  const [weather, setWeather] = useState({})
  useEffect(() => {
    setWeather(weatherData)
  }, [])
  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay data={weather} />
    </div>
  )
}

export default App
