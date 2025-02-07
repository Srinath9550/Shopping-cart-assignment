import ShoppingCart from "../src/shoppingCart";
import { getProductPrice } from "../src/productService";

jest.mock("../src/productService", () => ({
    getProductPrice: jest.fn((productId: string) => {
        const mockPrices: Record<string, number> = {
            cheerios: 8.43,
            cornflakes: 4.99,
            frosties: 5.99,
            shreddies: 6.49,
            weetabix: 7.29
        };
        return Promise.resolve(mockPrices[productId] || null);
    }),
}));

describe("ShoppingCart", () => {
    let cart: ShoppingCart;

    beforeEach(() => {
        cart = new ShoppingCart();
    });

    test("should add a product to the cart", async () => {
        await cart.addProduct("cornflakes", 2);
        expect(cart.getItems()).toEqual([{ productId: "cornflakes", quantity: 2, price: 4.99 }]);
    });

    test("should calculate subtotal, tax, and total correctly", async () => {
        await cart.addProduct("cornflakes", 2);
        await cart.addProduct("frosties", 1);

        const summary = cart.getSummary();
        expect(summary.subtotal).toBeCloseTo(4.99 * 2 + 5.99, 2);
        expect(summary.tax).toBeCloseTo((4.99 * 2 + 5.99) * 0.125, 2);
        expect(summary.total).toBeCloseTo((4.99 * 2 + 5.99) * 1.125, 2);
    });

    test("should not add an invalid product", async () => {
        await cart.addProduct("invalid_product", 1);
        expect(cart.getItems().length).toBe(0);
    });
});