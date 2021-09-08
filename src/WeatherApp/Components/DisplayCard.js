import { Card } from "@material-ui/core";

export default function DisplayCard({ weatherData }) {


  const temp = () => {
    return (weatherData.main.temp - 273.15).toFixed(2);
  };

  return (
    <Card className="cardContainer">
      <h2>{weatherData.name}</h2>

      <div>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={`${weatherData.weather[0].main}`}
        />
        <h3>{`${weatherData.weather[0].main}`}</h3>
      </div>

      <div>
        <h5>{`Temperature:`}</h5>
        <span>{temp()}</span>
      </div>

      <div>
        <h5>{`Humidity:`}</h5>
        <span>{weatherData.main.humidity}</span>
      </div>

      <div>
        <h5>{`Pressure:`}</h5>
        <span>{weatherData.main.pressure}</span>
      </div>

      <div>
        <h5>{`Wind Speed:`}</h5>
        <span>{weatherData.wind.speed}</span>
      </div>
    </Card>
  );
}
