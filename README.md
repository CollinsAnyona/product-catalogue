# 🛒 Product Catalog API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB**, designed to simulate the backend of an e-commerce platform. It supports product listings, categories, variants, inventory management, search, pricing, and discounts — all documented with Swagger UI.

---

## 📦 Features

- **Product Management**: Full CRUD operations for products.
- **Category Management**: Create, read, update, and delete product categories.
- **Product Variants**: Manage different versions of a product (e.g., size, color).
- **Inventory Tracking**: Monitor stock levels and generate low-stock reports.
- **Search & Filtering**: Search by name or filter by category and creation date.
- **Pricing & Discounts**: Handle pricing logic including percentage-based discounts.
- **API Documentation**: Comprehensive Swagger UI documentation.
- **Robust Error Handling**: Custom error responses and input validation included.

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js v18 or later
- MongoDB (local or Atlas instance)

### 🔧 Installation

```bash
git clone https://github.com/yourusername/product-catalog-api.git
cd product-catalog-api
npm install
```

### 🌐 Environment Setup

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

### ▶️ Running the Server

```bash
npm run dev
```

Visit the API at: `http://localhost:5000`

### 📘 API Documentation

Visit: `http://localhost:5000/api-docs`  
Swagger UI provides a full interactive documentation of all endpoints.

---

## 📂 API Endpoints Overview

### 📦 Products

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/api/products`         | List all products |
| GET    | `/api/products/:id`     | Get product by ID |
| POST   | `/api/products`         | Create a product |
| PUT    | `/api/products/:id`     | Update a product |
| DELETE | `/api/products/:id`     | Delete a product |

### 🗂 Categories

| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/api/categories`         | List all categories |
| POST   | `/api/categories`         | Create a category |
| PUT    | `/api/categories/:id`     | Update a category |
| DELETE | `/api/categories/:id`     | Delete a category |

### 🎨 Variants, Inventory & Search

| Feature           | Route / Query |
|-------------------|----------------|
| Add variant       | Included in product payload |
| Filter by category| `/api/products?category=Shoes` |
| Search by name    | `/api/products?search=Nike` |
| Low-stock report  | `/api/products/low-stock` |

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Swagger UI** – for API documentation
- **Postman** – for manual testing

---

## ⚠️ Known Limitations

- User authentication and authorization are **not implemented**.
- Discounts are handled using a **basic percentage model only**.

---

## 📹 Demo

A video walkthrough is available in the `/video` folder of the project.

---

## 👨‍💻 Author

- **Collins Otieno Junior**
