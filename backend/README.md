# Quizzy Backend

This is the backend for the Quizzy application, built with Node.js and TypeScript.

## Features

- RESTful API for quiz management
- User authentication (add details if implemented)
- MongoDB (or your DB) integration
- Modular structure (controllers, models, routes)

## Project Structure

```
backend/
  controllers/   # Route handlers
  models/        # Database models/schemas
  routes/        # API route definitions
  index.ts       # Entry point
  .env           # Environment variables
  tsconfig.json  # TypeScript config
  package.json   # Dependencies and scripts
```

## Setup

1. **Install dependencies:**
   ```sh
   pnpm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env` and fill in required values.

3. **Run in development:**
   ```sh
   pnpm run dev
   ```

4. **Build for production:**
   ```sh
   pnpm run build
   ```

5. **Start production server:**
   ```sh
   pnpm start
   ```

## Scripts

- `dev` – Start with hot reload
- `build` – Compile TypeScript
- `start` – Run compiled code

