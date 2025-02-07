Shopping Cart Assignment :
-------------------------
A simple TypeScript-based Shopping Cart that allows add products, view cart details, and calculate total costs.
It fetches product data from a mock API using JSON Server and is tested using Jest.

📌 Features
------------
✔ Add products to the cart
✔ View cart summary with price calculations
✔ Calculate Subtotal, Tax (12.5%), and Total Price
✔ Unit testing with Jest
✔ Simple command-line interface

📂 Project Structure
    -----------------

shopping-cart-assignment/
│── src/  
│   ├── index.ts          # Entry point (CLI commands)  
│   ├── shoppingCart.ts   # ShoppingCart class (Cart operations)  
│   ├── productService.ts # Fetches product data from JSON server  
│── test_data/            # Contains JSON files with product data  
│── tests/  
│   ├── shoppingCart.test.ts # Unit tests for ShoppingCart  
│── db.json               # Mock product database for JSON Server  
│── package.json          # Dependencies & scripts  
│── tsconfig.json         # TypeScript configuration  
│── README.md             # Project documentation  
⚙️ Setup Instructions
1️⃣ Install Dependencies

Ensure you have Node.js (v20+) installed, then run:
--------------------------------------------------


npm install
2️⃣ Start JSON Server
Run the JSON Server to mock a backend API:


npx json-server --watch db.json --port 3001
✅ API Endpoint: http://localhost:3001/products

3️⃣ Run the Shopping Cart CLI
Use ts-node to execute the CLI commands:
----------------------------------------

npx ts-node src/index.ts

📌 Available Commands:
------------------------

ADD [product_id] [quantity] → Add products to the cart
VIEW → Display cart summary
EXIT → Quit the program
4️⃣ Run Unit Tests
To verify functionality with Jest:


npm test
------------
🧪 Example Usage :
 

> ADD cornflakes 2
✅ Success: Added 2 x Cornflakes to the cart.

> VIEW
🛒 Cart Summary:
2 x Cornflakes @ $4.99 each
Subtotal: $9.98
Tax: $1.25
Total: $11.23

> EXIT
👋 Exiting...
🛠 Known Issues & Fixes
1️⃣ Jest Test Failures (getItems, getSummary missing)
🔹 Solution: Add getItems() and getSummary() methods in shoppingCart.ts.
Refer to src/shoppingCart.ts for implementation.

📌 Assumptions & Tradeoffs
   --------------------------
✅ Simple in-memory cart storage (No database persistence).
✅ Basic error handling for invalid product IDs.
✅ Hardcoded tax rate (12.5%) for simplicity.
❌ No UI (Only CLI interaction).

🚀 Future Enhancements
   ---------------------
✔ Web-based UI for cart operations
✔ Persistent storage (e.g., Database)
✔ Discount coupons & promotions