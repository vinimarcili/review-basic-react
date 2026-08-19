import { useState } from "react";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export function SearchBar({ onSearch }: Readonly<SearchBarProps>) {
  const [city, setCity] = useState("São Paulo");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSearch(city);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label htmlFor="city">Cidade</label>
      <input
        id="city"
        type="text"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        placeholder="Digite uma cidade..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
