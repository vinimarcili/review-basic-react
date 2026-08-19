import { useState } from "react";
import type { CartEntry, Product } from "./types";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import "./App.css";

const products: Product[] = [
  { id: 1, name: "Controle sem fio", price: 250, image: "https://picsum.photos/seed/controle/300/220" },
  { id: 2, name: "Headset gamer", price: 300, image: "https://picsum.photos/seed/headset/300/220" },
  { id: 3, name: "Teclado mecânico", price: 420, image: "https://picsum.photos/seed/teclado/300/220" },
  { id: 4, name: "Mousepad XL", price: 90, image: "https://picsum.photos/seed/mousepad/300/220" },
  { id: 5, name: "Webcam HD", price: 180, image: "https://picsum.photos/seed/webcam/300/220" },
  { id: 6, name: "Cadeira gamer", price: 990, image: "https://picsum.photos/seed/cadeira/300/220" },
];

function App() {
  const [cart, setCart] = useState<CartEntry[]>([]);

  function handleAdd(product: Product) {
    setCart((current) => {
      const alreadyInCart = current.some((entry) => entry.product.id === product.id);
      if (alreadyInCart) {
        // já está no carrinho: só sobe a quantidade em vez de duplicar a linha
        return current.map((entry) =>
          entry.product.id === product.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [...current, { product, quantity: 1 }];
    });
  }

  function handleRemove(productId: number) {
    setCart((current) => current.filter((entry) => entry.product.id !== productId));
  }

  return (
    <main className="shop">
      <header className="shop__header">
        <h1>🛍️ Minha Loja</h1>
      </header>
      <div className="shop__layout">
        <section className="shop__products">
          <h2>Produtos</h2>
          <ProductList products={products} onAdd={handleAdd} />
        </section>
        <Cart entries={cart} onRemove={handleRemove} />
      </div>
    </main>
  );
}

export default App;

