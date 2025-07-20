# 🛒 Product Catalog API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** to simulate the backend of an e-commerce platform. This system manages product listings, categories, variants, inventory, search, and pricing.

## 📦 Features

- Product Management: CRUD operations for products.
- Category Management: CRUD operations for product categories.
- Product Variants: Manage product versions (e.g., size, color).
- Inventory Tracking: Track stock levels and low-stock reports.
- Search & Filtering: Search products by name, category, or creation date.
- Pricing & Discounts: Include pricing details and discounts.
- Swagger Documentation: API is documented with Swagger UI.
- Error Handling: Custom error responses and input validation.

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- MongoDB Atlas or local MongoDB instance

### Installation

```bash
git clone https://github.com/yourusername/product-catalog-api.git
cd product-catalog-api
npm install
Environment Variables
Create a .env file:

bash
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
Start the Server
bash
Copy
Edit
npm run dev
The server will start on http://localhost:5000.

API Documentation
Visit: http://localhost:5000/api-docs

Swagger UI provides a full overview of all endpoints.
 
API Endpoints Overview
Products
Method	Route	Description
GET	/api/products	List all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product

Categories
Method	Route	Description
GET	/api/categories	List all categories
POST	/api/categories	Create a category
PUT	/api/categories/:id	Update a category
DELETE	/api/categories/:id	Delete a category

Variants, Inventory & Search
Feature	Route
Add variant	Included in product payload
Filter by category	/api/products?category=Shoes
Search by name	/api/products?search=Nike
Inventory report	/api/products/low-stock

🛠 Tech Stack
Node.js

Express.js

MongoDB (Mongoose)

Swagger for documentation

Postman for testing

📌 Known Limitations
No user authentication implemented

Discounts are handled simply (percentage only)

📹 Demo
The video walkthrough is included in the /recording folder of the project.

👨‍💻 Author
- Collins Otieno Junior