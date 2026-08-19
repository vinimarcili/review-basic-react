import "./CharacterCard.css";

// Cada card recebe os dados já "achatados" via props, sem depender do objeto Character inteiro
interface CharacterCardProps {
  name: string;
  image: string;
  role: string;
  level: number;
  highlighted?: boolean;
}

export function CharacterCard({
  name,
  image,
  role,
  level,
  highlighted = false,
}: Readonly<CharacterCardProps>) {
  return (
    <article className={`card${highlighted ? " card--highlighted" : ""}`}>
      {highlighted && <span className="card__badge">★ destaque</span>}
      <div className="card__portrait">
        <img src={image} alt={`Retrato de ${name}`} loading="lazy" />
      </div>
      <h3 className="card__name">{name}</h3>
      <p className="card__role">{role}</p>
      <div className="card__level">
        <span>Nível</span>
        <strong>{level}</strong>
      </div>
    </article>
  );
}

