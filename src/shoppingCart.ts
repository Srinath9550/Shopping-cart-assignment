import { getProductPrice } from "./productService";

class ShoppingCart {
    private items: { productId: string; quantity: number; price: number }[] = [];

    async addProduct(productId: string, quantity: number) {
        const price = await getProductPrice(productId);
        if (price === null) {
            console.log(`❌ Error: Product ${productId} not found.`);
            return;
        }

        this.items.push({ productId, quantity, price });
        console.log(`✅ Success: Added ${quantity} x ${productId} to the cart.`);
    }

    viewCart() {
        console.log("\n🛒 Cart Summary:");
        this.items.forEach(({ productId, quantity, price }) => {
            console.log(`${quantity} x ${productId} @ $${price.toFixed(2)} each`);
        });

        const summary = this.getSummary();
        console.log(`Subtotal: $${summary.subtotal.toFixed(2)}`);
        console.log(`Tax: $${summary.tax.toFixed(2)}`);
        console.log(`Total: $${summary.total.toFixed(2)}\n`);
    }

    getItems() {
        return this.items;
    }

    getSummary() {
        const subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const tax = subtotal * 0.125;
        const total = subtotal + tax;

        return { subtotal, tax, total };
    }
}

export default ShoppingCart;