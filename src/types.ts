export interface Product {
    id: string;
    title: string;
    price: number;
  }
  
  export interface CartItem {
    product: Product;
    quantity: number;
  }