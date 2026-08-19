import type { Weather } from "../data/weather";
import "./WeatherCard.css";

interface WeatherCardProps {
  weather: Weather | null;
  loading: boolean;
  searched: boolean;
}

// mapeia a condição pra um emoji e uma classe de cor (fundo muda conforme o clima)
const conditionIcon: Record<Weather["condition"], string> = {
  Ensolarado: "☀️",
  Nublado: "☁️",
  Chuvoso: "🌧️",
  Tempestade: "⛈️",
};

export function WeatherCard({ weather, loading, searched }: Readonly<WeatherCardProps>) {
  if (loading) {
    return <p className="weather-card__status">Carregando...</p>;
  }

  if (!weather) {
    return searched ? (
      <p className="weather-card__status weather-card__status--error">
        Cidade não encontrada. Tente "São Paulo", "Curitiba", "Manaus" ou "Porto Alegre".
      </p>
    ) : null;
  }

  return (
    <div className={`weather-card weather-card--${weather.condition.toLowerCase()}`}>
      <p className="weather-card__icon">{conditionIcon[weather.condition]}</p>
      <h2>{weather.city}</h2>
      <p className="weather-card__temp">{weather.temperature}°C</p>
      <p className="weather-card__condition">{weather.condition}</p>
      <div className="weather-card__details">
        <span>💧 Umidade: {weather.humidity}%</span>
        <span>🌬️ Vento: {weather.wind} km/h</span>
      </div>
    </div>
  );
}
