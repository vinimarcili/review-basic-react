// Formatos compartilhados entre a lista de produtos e o carrinho
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartEntry {
  product: Product;
  quantity: number;
}
