import type { Product } from "../types";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: Readonly<ProductCardProps>) {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <h3>{product.name}</h3>
      <p className="product-card__price">
        {product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </p>
      <button type="button" onClick={() => onAdd(product)}>
        + adicionar
      </button>
    </article>
  );
}
