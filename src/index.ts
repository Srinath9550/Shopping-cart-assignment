import ShoppingCart from "./shoppingCart";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const cart = new ShoppingCart();

console.log("🛒 Welcome to the Shopping Cart!");
console.log("Commands: ADD [product_id] [quantity] | VIEW | EXIT");

const processCommand = async (command: string) => {
    const parts = command.trim().split(/\s+/); 
    const action = parts[0]?.toUpperCase();

    if (action === "ADD") {
        if (parts.length !== 3) {
            console.log("❌ Invalid ADD command. Use: ADD [product_id] [quantity]");
            return;
        }
        const productId = parts[1];
        const quantity = parseInt(parts[2], 10);

        if (isNaN(quantity) || quantity <= 0) {
            console.log("❌ Error: Quantity must be a valid positive number.");
            return;
        }

        await cart.addProduct(productId, quantity);
    } 
    else if (action === "VIEW") {
        cart.viewCart();
    } 
    else if (action === "EXIT") {
        console.log("👋 Exiting...");
        rl.close();
        return;
    } 
    else {
        console.log("❌ Invalid command. Use: ADD [product_id] [quantity] | VIEW | EXIT");
    }
};

rl.on("line", async (input) => {
    await processCommand(input);
});