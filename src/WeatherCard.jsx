import React from "react";

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherInfo } = weather;

  return (
    <div className="weather-card">
      <h2 className="place">{name}</h2>
      <h1 className="temp"> {Math.round(main.temp)}°C</h1>
      <p className="humidity">Humidity: {main.humidity}%</p>
      <p className="humidity">Condition: {weatherInfo[0].description}</p>
    </div>
  );
};

export default WeatherCard;
