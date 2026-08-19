// Formato compartilhado entre a lista e o card de personagem
export interface Character {
  id: number;
  name: string;
  image: string;
  role: string;
  level: number;
  highlighted?: boolean;
}
