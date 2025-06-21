# Quizzy Frontend

This is the frontend for the Quizzy application, built with React, TypeScript, and Vite.

## Features

- Modern React with hooks
- TypeScript for type safety
- Vite for fast development
- Component-based structure
- Tailwind CSS V4

## Project Structure

```
frontend/
  public/         # Static assets
  src/
    assets/       # Images and SVGs
    components/   # Reusable components
    pages/        # Page components
    App.tsx       # Main app component
    main.tsx      # Entry point
  index.html      # HTML template
  package.json    # Dependencies and scripts
  tsconfig*.json  # TypeScript configs
  vite.config.ts  # Vite config
```

## Setup

1. **Install dependencies:**
   ```sh
   pnpm install
   ```

2. **Run in development:**
   ```sh
   pnpm run dev
   ```

3. **Build for production:**
   ```sh
   pnpm run build
   ```

4. **Preview production build:**
   ```sh
   pnpm run preview
   ```

## Scripts

- `dev` – Start development server
- `build` – Build for production
- `preview` – Preview production build

## Linting

- ESLint is configured for code quality.
- See [eslint.config.js](eslint.config.js) for rules.

## Customization

- Configure Vite in `vite.config.ts`.