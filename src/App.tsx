import type { Character } from "./types";
import { CharacterList } from "./components/CharacterList";
import "./App.css";

// Avatares gerados via DiceBear (sem uso de personagens registrados de terceiros)
const avatar = (seed: string) =>
  `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}&backgroundColor=1f2430`;

const characters: Character[] = [
  { id: 1, name: "Kael", image: avatar("Kael"), role: "Guerreiro", level: 14 },
  { id: 2, name: "Nyra", image: avatar("Nyra"), role: "Maga", level: 11, highlighted: true },
  { id: 3, name: "Doran", image: avatar("Doran"), role: "Tanque", level: 9 },
  { id: 4, name: "Ashen", image: avatar("Ashen"), role: "Arqueira", level: 16 },
  { id: 5, name: "Vex", image: avatar("Vex"), role: "Ladino", level: 8 },
  { id: 6, name: "Mira", image: avatar("Mira"), role: "Curandeira", level: 13 },
  { id: 7, name: "Rook", image: avatar("Rook"), role: "Berserker", level: 19, highlighted: true },
];

function App() {
  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow">Guilda dos Aventureiros</p>
        <h1>Galeria de Personagens</h1>
      </header>
      <CharacterList characters={characters} />
    </main>
  );
}

export default App;

