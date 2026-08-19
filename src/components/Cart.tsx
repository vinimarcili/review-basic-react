import type { CartEntry } from "../types";
import { CartItem } from "./CartItem";
import "./Cart.css";

interface CartProps {
  entries: CartEntry[];
  onRemove: (productId: number) => void;
}

export function Cart({ entries, onRemove }: Readonly<CartProps>) {
  const total = entries.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);

  return (
    <aside className="cart">
      <h2>Carrinho</h2>
      {entries.length === 0 ? (
        <p className="cart__empty">Seu carrinho está vazio. Adicione algo da loja!</p>
      ) : (
        <>
          <ul className="cart__list">
            {entries.map((entry) => (
              <CartItem key={entry.product.id} entry={entry} onRemove={onRemove} />
            ))}
          </ul>
          <div className="cart__total">
            <span>Total</span>
            <strong>{total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</strong>
          </div>
        </>
      )}
    </aside>
  );
}
