export interface Weather {
  city: string;
  temperature: number;
  condition: "Ensolarado" | "Nublado" | "Chuvoso" | "Tempestade";
  humidity: number;
  wind: number;
}

// Dataset simulado (chaves em minúsculas para permitir busca case-insensitive)
export const weatherData: Record<string, Weather> = {
  "são paulo": { city: "São Paulo", temperature: 24, condition: "Ensolarado", humidity: 65, wind: 15 },
  curitiba: { city: "Curitiba", temperature: 18, condition: "Nublado", humidity: 78, wind: 12 },
  manaus: { city: "Manaus", temperature: 31, condition: "Chuvoso", humidity: 88, wind: 8 },
  "porto alegre": { city: "Porto Alegre", temperature: 14, condition: "Tempestade", humidity: 70, wind: 26 },
};
