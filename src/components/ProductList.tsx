import type { Product } from "../types";
import { ProductCard } from "./ProductCard";
import "./ProductList.css";

interface ProductListProps {
  products: Product[];
  onAdd: (product: Product) => void;
}

export function ProductList({ products, onAdd }: Readonly<ProductListProps>) {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        // o segundo produto de cada trio ganha destaque visual (evita grade toda igual)
        <div key={product.id} className={index % 3 === 1 ? "product-grid__item--tall" : undefined}>
          <ProductCard product={product} onAdd={onAdd} />
        </div>
      ))}
    </div>
  );
}
