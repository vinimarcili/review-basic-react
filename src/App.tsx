import { useEffect, useState } from "react";
import { weatherData, type Weather } from "./data/weather";
import { SearchBar } from "./components/SearchBar";
import { WeatherCard } from "./components/WeatherCard";
import "./App.css";

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  function handleSearch(city: string) {
    setLoading(true);
    setSearched(true);
    // setTimeout simula a latência de uma chamada real de API
    setTimeout(() => {
      const found = weatherData[city.trim().toLowerCase()] ?? null;
      setWeather(found);
      setLoading(false);
    }, 900);
  }

  useEffect(() => {
    // efeito colateral disparado sempre que o clima muda: título da aba
    document.title = weather ? `Clima — ${weather.city}` : "Painel de Clima";
  }, [weather]);

  return (
    <main className="weather-page">
      <h1>🌤️ Clima</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} loading={loading} searched={searched} />
    </main>
  );
}

export default App;

