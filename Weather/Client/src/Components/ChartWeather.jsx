import React, { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js/auto"; // Import Chart.js
import "./Weather.css";
import serach_icon from "../assets/search.png";

const ChartWeather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const chartRef = useRef(null); // Reference for the chart canvas
  const allIcon = {
    "01d": "Clear",
    "01n": "Clear",
    "02d": "Clouds",
    "02n": "Clouds",
    "03d": "Clouds",
    "03n": "Clouds",
    "04d": "Drizzle",
    "04n": "Drizzle",
    "09n": "Rain",
    "10d": "Rain",
    "10n": "Rain",
    "09d": "Rain",
    "13d": "Snow",
    "13n": "Snow",
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter the city name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      console.log(data);

      const weather = {
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        description: allIcon[data.weather[0].icon] || "Clear",
      };

      setWeatherData(weather);
      updateChart(weather); // Update the chart with new weather data
    } catch (error) {
      setWeatherData(false);
      console.error("Error in fetching data");
    }
  };

  const updateChart = (data) => {
    const chartInstance = chartRef.current;
    if (chartInstance) {
      chartInstance.destroy(); // Destroy the previous chart instance
    }

    chartRef.current = new Chart(document.getElementById("weatherChart"), {
      type: "pie",
      data: {
        labels: ["Temperature (°C)", "Humidity (%)", "Wind Speed (km/hr)"],
        datasets: [
          {
            label: "Weather Data",
            data: [data.temperature, data.humidity, data.windSpeed],
            backgroundColor: ["#fff", "#1abc9c", "#f39c12"],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
            position: "top",
          },
        },
      },
    });
  };

  const inputRef = useRef();
  useEffect(() => {
    search("London"); // Default city
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input type="text" placeholder="Search" ref={inputRef} />
        <img
          src={serach_icon}
          alt="Search"
          onClick={() => search(inputRef.current.value)}
        />
      </div>
      {weatherData && (
        <div>
          <h2>{weatherData.location}</h2>
          <p>{weatherData.description}</p>
          <canvas id="weatherChart"></canvas> {/* Chart Canvas */}
        </div>
      )}
    </div>
  );
};

export default ChartWeather;
