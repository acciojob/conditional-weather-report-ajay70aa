import React from 'react'

const WeatherDisplay = ({data}) => {
  const red = 'rgb(255, 0, 0)';
  const blue = 'rgb(0, 0, 255)';
  return (
    <div>
      <p>Temperature: <span style={{color: data.temperature > 20 ? red : blue}}>{data.temperature}</span></p>
      <p>Conditions: <span>{data.conditions}</span></p>
    </div>
  )
}

export default WeatherDisplay