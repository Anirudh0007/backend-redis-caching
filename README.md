# 🚀 Redis Cache Demo

A production-style backend application demonstrating the **Cache-Aside Pattern** using **Node.js**, **Express**, **MongoDB**, **Redis**, and **Docker Compose**.

This project was built to understand how Redis caching improves application performance by reducing database queries and serving frequently accessed data from memory.

---

## 📌 Features

- CRUD APIs for Products
- Redis Cache-Aside Pattern
- Cache Hit / Cache Miss handling
- Cache Invalidation on Update/Delete
- MongoDB Persistence
- Dockerized Backend
- Docker Compose for Multi-Container Setup
- Environment Variable Configuration

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Redis
- Docker
- Docker Compose

---

## 📂 Project Structure

```
.
├── src
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── app.js
│   └── server.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
└── README.md
```

---

## 🏗️ Architecture

```
                Client
                   │
                   ▼
              Express API
                   │
                   ▼
             Product Service
              │          │
      Cache Hit      Cache Miss
          │               │
          ▼               ▼
       Redis          MongoDB
          ▲               │
          └───────────────┘
```

---

## ⚡ Cache Flow

### First Request

```
Client
   │
   ▼
Redis
   │
Cache MISS
   │
MongoDB
   │
Store in Redis
   │
Return Response
```

---

### Subsequent Requests

```
Client
   │
   ▼
Redis
   │
Cache HIT
   │
Return Response
```

---

## 🔄 Cache Invalidation

Whenever a product is updated or deleted:

```
Update/Delete
      │
      ▼
MongoDB
      │
      ▼
Delete Redis Cache
      │
      ▼
Next Request → Cache MISS
```

---

## 🚀 Getting Started

### Clone Repository

```bash
git clone <repository-url>
cd Redis
```

---

### Install Dependencies

```bash
npm install
```

---

### Configure Environment

Create a `.env` file.

```env
PORT=3000

MONGO_URI=mongodb://mongo:27017/redis_cache_demo

REDIS_URL=redis://redis:6379
```

---

### Run using Docker

```bash
docker compose up --build
```

---

## 📌 API Endpoints

### Create Product

```
POST /products
```

### Get Product

```
GET /products/:id
```

### Update Product

```
PUT /products/:id
```

### Delete Product

```
DELETE /products/:id
```

---

## 🐳 Docker Services

- Backend
- MongoDB
- Redis

Run:

```bash
docker compose up --build
```

Stop:

```bash
docker compose down
```

---

## 📈 What I Learned

- Redis Fundamentals
- Cache-Aside Pattern
- Cache Hits & Cache Misses
- Cache Invalidation
- Docker Images
- Docker Containers
- Docker Compose
- Docker Networking
- Docker Volumes
- Environment Variables
- Multi-Container Applications

---

## 🔮 Future Improvements

- Redis Health Check
- Structured Logging
- Authentication
- Rate Limiting
- Redis Pub/Sub
- Background Jobs using BullMQ
- Monitoring & Metrics

---

## 👨‍💻 Author

**Anirudh**

Backend Engineering Learning Series