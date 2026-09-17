# Movie Search

A React + TypeScript movie search app for the GoIT Full Stack course. It queries [The Movie Database (TMDB)](https://www.themoviedb.org/) and shows matching titles in a grid. Selecting a title opens a details modal.

Repository: [groteskzp/03-react-movies](https://github.com/groteskzp/03-react-movies)

## Live Demo

[https://03-react-movies-bay-theta-82.vercel.app](https://03-react-movies-bay-theta-82.vercel.app)

## Features

- Search movies by keyword through the TMDB Search Movies API
- Toast if the search field is empty
- Toast if the request succeeds but returns no movies
- Loading text while the request is in progress
- Error message if the request fails
- Poster grid with a fallback when a movie has no poster
- Details modal with backdrop (or poster), title, overview, release date, and rating
- Close the modal with the close button, backdrop click, or <kbd>Escape</kbd>
- Page scroll is locked while the modal is open
- TMDB attribution link in the header

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 8** (React plugin and React Compiler)
- **axios** for HTTP requests
- **react-hot-toast** for notifications
- **modern-normalize** for CSS reset
- **CSS Modules** for component styles
- **ESLint** with TypeScript and React Hooks rules

Source layout:

```
src/
  components/   App, SearchBar, MovieGrid, MovieModal, Loader, ErrorMessage
  services/     TMDB search client
  types/        Movie type
```

## Getting Started

**Requirements:** Node.js and npm.

1. Clone the repository and install dependencies:

   ```bash
   git clone https://github.com/groteskzp/03-react-movies.git
   cd 03-react-movies
   npm install
   ```

2. Create a `.env` file in the project root and add a TMDB **API Read Access Token** (Bearer token from the TMDB account settings):

   ```
   VITE_TMDB_TOKEN=
   ```

   
Vite exposes only variables prefixed with `VITE_`. Do not commit `.env` files.

3. Start the development server:

   ```bash
   npm run dev
   ```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build the production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
