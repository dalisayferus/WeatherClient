import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

// images
import clear from "../assets/clear.png";
import errorIMG from "../assets/404.png";
import cloud from "../assets/cloud.png";
import mist from "../assets/mist.png";
import rain from "../assets/rain.png";
import snow from "../assets/snow.png";

function Homepage() {
  const moods = [
    {
      background: `clouds`,
      danger: `low`,
      message: `Please ping my emergency contact`,
    },
    {
      background: `rain`,
      danger: `meduim`,
      message: `Come over`,
    },
    {
      background: `thunder`,
      danger: `high`,
      message: `Please call the police`,
    },
    {
      background: `sunny`,
      danger: `safe`,
      message: ``,
    },
  ];

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [weatherLogo, setWeatherLogo] = useState("");
  const [selectedMood, setSelectedMood] = useState(moods[0]);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const { user, isLoggedIn } = useContext(AuthContext);

  const handleMoodShift = () => {
    const moodIndex = moods.findIndex(
      (mood) => mood.background === selectedMood.background
    );
    if (moodIndex < moods.length - 1) {
      setSelectedMood(moods[moodIndex + 1]);
    } else if (moodIndex === moods.length - 1) {
      setSelectedMood(moods[0]);
    }
  };

  async function handleSubmit() {
    const API_URL = "http://localhost:5005";
    try {
      const alert = {
        createdBy: user._id,
        dangerLevel: selectedMood.danger,
        message: selectedMood.message,
      };
      await axios.post(`${API_URL}/api/alerts`, alert);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    axios
      .get("http://localhost:5005/api/get-api-key")
      .then((response) => {
        setApiKey(response.data.apiKey);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = () => {
    if (city === "") return;

    axios
      .get(`${API_URL}?q=${city}&units=metric&appid=${apiKey}`)
      .then((response) => {
        const json = response.data;

        if (json.cod === "404") {
          setError(true);
          setWeatherData(null);
        } else {
          setError(false);
          setWeatherData(json);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (weatherData) {
      getWeatherIcon(weatherData.weather[0].main);
    }
  }, [weatherData]);

  if (!isLoggedIn) return <Navigate to="/login" />;

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        setWeatherLogo(clear);
        break;

      case "Rain":
        setWeatherLogo(rain);
        break;

      case "Snow":
        setWeatherLogo(snow);
        break;

      case "Clouds":
        setWeatherLogo(cloud);
        break;

      case "Haze":
        setWeatherLogo(mist);
        break;

      default:
        setWeatherLogo(errorIMG);
    }
  };

  return (
    <div className={selectedMood.background}>
      <div className="Alerts">
        <div>
          {" "}
          {/* <p>danger level: {selectedMood.danger}</p> */}
          {/* <p>background img: {selectedMood.background}</p> */}
        </div>

        <button className="handleMoodShift" onClick={handleMoodShift}>
          Change Theme
        </button>
        <button className="handleSubmit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="weather-container">
        <div className="search-box">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            placeholder="Enter your location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button className="handleSearch" onClick={handleSearch}></button>
        </div>

        {error && (
          <div className="not-found">
            <img src="images/404.png" alt="404" />
            <p>Oops! Invalid location :/</p>
          </div>
        )}

        {weatherData && (
          <div className="weather-box">
            <img className="weatherLogo" src={weatherLogo} alt="Weather Icon" />
            <p className="temperature">
              {parseInt(weatherData.main.temp)}
              <span>°C</span>
            </p>
            <p className="description">{weatherData.weather[0].description}</p>
          </div>
        )}

        {weatherData && (
          <div className="weather-details">
            <div className="humidity">
              <i className="fa-solid fa-water"></i>
              <div className="text">
                <span>{weatherData.main.humidity}%</span>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind">
              <i className="fa-solid fa-wind"></i>
              <div className="text">
                <span>{parseInt(weatherData.wind.speed)}Km/h</span>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
