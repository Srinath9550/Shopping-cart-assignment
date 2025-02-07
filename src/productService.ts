export interface Product {
  id: string;
  title: string;
  price: number;
}

export async function getProductPrice(productId: string): Promise<number | null> {
  try {
      const response = await fetch("http://localhost:3001/products");
      if (!response.ok) {
          throw new Error("HTTP error! Status: ${response.status}");
      }

      const products: Product[] = await response.json();
      const product = products.find((p) => p.id === productId);
      
      return product ? product.price : null;
  } catch (error) {
      console.error("Error fetching product price:", error);
      return null;
  }
}