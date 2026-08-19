import type { Character } from "../types";
import { CharacterCard } from "./CharacterCard";
import "./CharacterList.css";

interface CharacterListProps {
  characters: Character[];
}

export function CharacterList({ characters }: Readonly<CharacterListProps>) {
  return (
    <div className="character-grid">
      {characters.map((character, index) => (
        // A cada 5º item ocupa duas colunas, quebrando a grade "quadriculada" padrão
        <div
          key={character.id}
          className={index % 5 === 0 ? "character-grid__item--wide" : undefined}
        >
          <CharacterCard {...character} />
        </div>
      ))}
    </div>
  );
}
