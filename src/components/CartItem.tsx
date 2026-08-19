import type { CartEntry } from "../types";
import "./CartItem.css";

interface CartItemProps {
  entry: CartEntry;
  onRemove: (productId: number) => void;
}

export function CartItem({ entry, onRemove }: Readonly<CartItemProps>) {
  const { product, quantity } = entry;
  const subtotal = product.price * quantity;

  return (
    <li className="cart-item">
      <div>
        <p className="cart-item__name">{product.name}</p>
        <p className="cart-item__meta">
          {quantity > 1 ? `Quantidade: ${quantity}` : "1 unidade"} ·{" "}
          {subtotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
        </p>
      </div>
      <button type="button" className="cart-item__remove" onClick={() => onRemove(product.id)}>
        remover
      </button>
    </li>
  );
}
