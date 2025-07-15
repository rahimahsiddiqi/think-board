# MERN ThinkBoard

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). ThinkBoard allows users to create, view, update, and delete notes with a modern UI and rate-limiting for backend API protection.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Backend](#backend)
  - [Setup](#backend-setup)
  - [API Endpoints](#api-endpoints)
  - [Rate Limiting](#rate-limiting)
  - [Note Model](#note-model)
- [Frontend](#frontend)
  - [Setup](#frontend-setup)
  - [Main Pages & Components](#main-pages--components)
- [Development](#development)
- [License](#license)

---

## Features
- Create, read, update, and delete notes
- Modern, responsive UI with React, Tailwind CSS, and DaisyUI
- Rate limiting to prevent API abuse
- MongoDB for persistent storage
- RESTful API

---

## Project Structure
```
mern-thinkboard/
  backend/           # Express.js API, MongoDB models, rate limiting
    src/
      config/        # DB and Upstash config
      controllers/   # Route controllers
      middleware/    # Rate limiter
      models/        # Mongoose models
      routes/        # API routes
      server.js      # Entry point
    package.json
  frontend/          # React app
    src/
      components/    # Reusable UI components
      lib/           # Axios instance, utilities
      pages/         # Main app pages
      App.jsx        # Main app component
      main.jsx       # Entry point
      index.css      # Tailwind CSS
    public/          # Static assets
    package.json
  README.md          # Project documentation
```

---

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, DaisyUI, Axios, Vite
- **Backend:** Node.js, Express, Mongoose, MongoDB, Upstash Redis (rate limiting), dotenv, CORS

---

## Backend

### Backend Setup
1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create a `.env` file in `backend/` with:
   ```env
 MONGO_URL =mongodb+srv://rahimahsiddiqi:rAhi1234@cluster0.s8dlauc.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0
PORT =5001

UPSTASH_REDIS_REST_URL =https://rare-chimp-56504.upstash.io
UPSTASH_REDIS_REST_TOKEN =Ady4AAIjcDFhYjFjNjEyNzMyYzU0MzJkYjk2NDE0NDA2MGYxNzdhOXAxMA
   ```
3. Start the server:
   ```bash
   npm run dev
   ```
   The backend runs on `http://localhost:5001` by default.

### API Endpoints
All endpoints are prefixed with `/api/notes`:
- `GET    /api/notes`         — Get all notes
- `GET    /api/notes/:id`     — Get a note by ID
- `POST   /api/notes`         — Create a new note (`{ title, content }`)
- `PUT    /api/notes/:id`     — Update a note (`{ title, content }`)
- `DELETE /api/notes/:id`     — Delete a note

#### Example Note Object
```json
{
  "_id": "...",
  "title": "Sample Note",
  "content": "This is a note.",
  "createdAt": "2024-06-01T12:00:00.000Z",
  "updatedAt": "2024-06-01T12:00:00.000Z"
}
```

### Rate Limiting
- Implemented using Upstash Redis and `@upstash/ratelimit`.
- Limits: 10 requests per 20 seconds per client.
- Exceeding the limit returns HTTP 429 with a message.

### Note Model
Mongoose schema:
```js
{
  title:   { type: String, required: true },
  content: { type: String, required: true }
  // timestamps: true (createdAt, updatedAt)
}
```

---

## Frontend

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The frontend runs on `http://localhost:5173` by default.

### Main Pages & Components
- **HomePage:** Lists all notes, handles rate limit UI, shows loading and empty states.
- **CreatePage:** Form to create a new note.
- **NoteDetailPage:** View, edit, and delete a single note.
- **Navbar:** App title and navigation.
- **NoteCard:** Card UI for each note.
- **RateLimitedUI:** Shown when API rate limit is hit.
- **NotesNotFound:** Shown when there are no notes.

#### Styling
- Uses Tailwind CSS and DaisyUI (`forest` theme).
- See `tailwind.config.js` and `index.css` for details.

#### API Connection
- Uses Axios (`src/lib/axios.jsx`) to connect to the backend API.
- Base URL is set depending on environment (development/production).

---

## Development
- **Backend:**
  - `npm run dev` — Start backend with nodemon
  - `npm start`   — Start backend with node
- **Frontend:**
  - `npm run dev` — Start frontend with Vite
  - `npm run build` — Build frontend for production
  - `npm run preview` — Preview production build
  - `npm run lint` — Lint frontend code

---

## License
This project is licensed under the ISC License. 
