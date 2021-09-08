import React, { useState } from "react";
import { Apikey } from "./Components/APIKEY";
import DisplayCard from "./Components/DisplayCard";
import axios from "axios";
import "./style.css";

import SearchIcon from "@material-ui/icons/Search";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [showData, setShowData] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  const getWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Apikey}`
      );

      setWeatherData(response.data);
      setShowData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city) {
      getWeather(city);
    }

    setCity("");
  };

  return (
    <div className="mainContainer">
      <h1 className="mainHeading">{"Weather App"}</h1>

      <form className={"searchContainer"} onSubmit={(e) => handleSubmit(e)}>
        <SearchIcon style={{ fontSize: "32px" }} />
        <input
          type="text"
          placeholder="Search City"
          value={city}
          className="searchInput"
          onChange={(e) => setCity(e.target.value)}
        />
      </form>

      {showData ? <DisplayCard weatherData={weatherData} /> : null}
    </div>
  );
}
