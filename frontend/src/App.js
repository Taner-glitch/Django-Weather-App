import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:8000/api/weather/?city=${city}`);
      setWeather(res.data);
    } catch (err) {
      alert("Şehir bulunamadı!");
    }
  };

  return (
    <div className="app-container">
      <h1>☁️ Hava Durumu</h1>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="Şehir giriniz..."
      />
      <button onClick={getWeather}>Sorgula</button>

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ {weather.main.temp} °C</p>
        </div>
      )}
    </div>
  );
}

export default App;
