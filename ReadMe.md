# 🌾 Farmisto

**Farmisto** is a full-stack agricultural marketplace platform that connects **consumers directly with local farmers**.
The platform allows users to discover nearby farmers, buy fresh products, and allows farmers to manage listings, orders, and promotions through a dedicated dashboard.

---

# 🚀 Live Applications

| Application      | Description                                   | Link                                 |
| ---------------- | --------------------------------------------- | ------------------------------------ |
| Consumer App     | Customer marketplace for buying farm products | https://farmisto-frontend.vercel.app |
| Farmer Dashboard | Farmer portal to manage products & orders     | https://farmisto-farmer.vercel.app   |
| Backend API      | REST API powering both applications           | https://farmisto.onrender.com        |

---

# 🧱 Tech Stack

## Backend

* Node.js
* Express.js
* MongoDB (Mongoose ODM)
* JWT Authentication
* Cloudinary (Image Storage)
* Multer (File Upload)
* remove.bg API (Image background removal)
* Google Maps Geocoding API
* PDFKit (Invoice generation)

## Frontend

* React 18 / React 19
* Vite
* Tailwind CSS
* React Router
* Axios

---

# 🏗️ System Architecture

```
Clients (Browser)

├── Farmisto Frontend (Consumer App)
│    React + Vite + Tailwind
│
├── Farmisto Retailer Dashboard
│    React + Vite + Tailwind
│
▼

Backend API (Node.js + Express)

├── User Routes
├── Farmer Routes
├── Market Routes
├── Cart Routes
├── Payment Routes
└── Promo Routes

▼

MongoDB Atlas Database
```

---

# 📂 Project Structure

```
Farmisto
│
├── Farmisto-Backend
│   ├── server.js
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── config
│
├── Farmisto-Frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── utils
│
└── Farmisto-Retailer
    ├── src
    ├── dashboard
    ├── components
    └── pages
```

---

# ✨ Features

## Consumer Application

* Browse marketplace products
* Discover nearby farmers
* Add products to cart
* Apply promo codes
* Place orders
* Generate PDF invoices

## Farmer Dashboard

* Add and manage product listings
* Image background removal using remove.bg
* Order management system
* Promo code generation
* Dashboard analytics
* Profile management

---

# 🔐 Authentication

Farmisto uses **JWT (JSON Web Token) authentication**.

Protected routes require:

```
Authorization: Bearer <JWT_TOKEN>
```

Token expiry: **3 days**

---

# ⚙️ Environment Variables

## Backend (.env)

```
PORT=4000

MONGO_URI=your_mongodb_connection_string

SECRET_KEY=your_jwt_secret_key

CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

Google_Map_key=your_google_maps_api_key
```

---

# 🛠️ Local Development Setup

## 1️⃣ Clone the Repository

```
git clone https://github.com/HarshSingh-001/Farmisto.git
cd Farmisto
```

---

## 2️⃣ Install Dependencies

### Backend

```
cd Farmisto-Backend
npm install
```

### Consumer Frontend

```
cd ../Farmisto-Frontend
npm install
```

### Farmer Dashboard

```
cd ../Farmisto-Retailer
npm install
```

---

## 3️⃣ Run Development Servers

Open **three terminals**.

### Backend

```
cd Farmisto-Backend
npm run dev
```

### Consumer App

```
cd Farmisto-Frontend
npm run dev
```

### Retailer Dashboard

```
cd Farmisto-Retailer
npm run dev
```

---

# 🌍 Deployment

| Service          | Platform |
| ---------------- | -------- |
| Backend API      | Render   |
| Consumer App     | Vercel   |
| Farmer Dashboard | Vercel   |

---

# 📜 License

MIT License

---

# 👨‍💻 Author

**Harsh Singh**

B.Tech Information Technology
Full Stack MERN Developer

GitHub: https://github.com/HarshSingh-001
