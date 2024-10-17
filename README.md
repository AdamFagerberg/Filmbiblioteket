# Filmbiblioteket - Movie library

A **React-based movie library web application** built with **Redux Toolkit**, allowing users to search for movies, view details, and manage a favorites list. This project demonstrates advanced frontend development skills, **API integration**, **state management**, **SEO**, and **tracking**.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies-used)
- [Getting Strated](#getting-started)
- [API Integration](#api-integration)
- [State Management](#state-management-with-redux-toolkit)
- [SEO and Tracking](#seo-and-tracking)
- [Testing with Cypress](#testing-with-cypress)
- [Final Notes](#final-notes)

---

## Demo

Link to the deployed website

**[Deployed Application](https://filmbiblioteket.vercel.app)**

---

## Features

- **Search Movies** Search for movies using the search bar.
- **View Movie Details**: Click a movie poster for details, title, release date, rating, and plot.
- **Manage Favorites**: Click the heart icon to add/remove movies as favourites.
- **Persist Favorites** Favourites persist on the using `localStorage`.
- **Responsive design** for mobile, tablet, and desktop views.
- **SEO Optimization**: Generating sitemap.xml, robots.txt, and using meta tags.
- **Tracking**: Google analytics and tagmanager tracking pageviews and favourites.
- **End-to-End Testing**: End to end testing set up using Cypress.

---

## Technologies used

| Technology             |          Details           |
| ---------------------- | :------------------------: |
| **React Vite**         |     Frontend framework     |
| **Redux Toolkit**      |      State Management      |
| **React Router**       | Routing and dynamic routes |
| **TailwindCSS**        |          Styling           |
| **React Helmet Async** |         Meta Tags          |
| **Sitemap**            |      Generate Sitemap      |
| **Google Analytics**   |          Tracking          |
| **Google Tag Manager** |          Tracking          |
| **Cypress**            |          Testing           |

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/filmbibliotek.git
   cd filmbibliotek

   ```
2. **Install Dependencies:**

   ```bash
    npm install
    or
    yarn install

   ```

3. **Create an Environment File:**

   Create a file named .env.local in the root directory and add your OMDb **Read Acces Token**.

   ```bash
   VITE_API_TOKEN = YOUR_TOKEN

   ```

4. **Generate Sitemap and Robots**

   They are setup to run automatically on build but you can run these commands to generate them.

   ```bash
   npm run generate-sitemap
   npm run generate-robots

   ```

5. **Start the Development Server:**

   run the command and open with the localhost link in the terminal.

   ```bash
   npm run dev
   ```

---

## API Integration

This project uses **OMDb API** to fetch movie data.

- **API Key:** Register at [OMDb](https://developer.themoviedb.org/docs/getting-started) for a free API key.

- **Endpoints:**

  - Fetch trending movies:
    ```bash
    https://api.themoviedb.org/3/trending/movie/week
    ```
  - Movie details:
    ```bash
    https://api.themoviedb.org/3/movie/${movie_id}
    ```
  - Search movies:
    ```bash
    https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&region=en
    ```

- **Usage in the Project:**
  - Async thunks in the **Redux slices** handle the API calls.

  - **fetchMoviesSlice.js**: For fetching trending movies.

  - **fetchMovieDetailsSlice.js**: For fetching movie details.

  - **fetchSearchSlice.js**: For fetching searches.

---

## State Management with Redux Toolkit

Redux Toolkit is used the manage the **global states** in the application.

**Reducers and Slices**

| Slice                    |                                       Purpose                                       |
| ------------------------ | :---------------------------------------------------------------------------------: |
| `favouritesSlice`        | Manages the user's favourites list using localStorage and `toggleFavourite` action. |
| `fetchMoviesSlice`       |                     Fetching trending movies for the homepage.                      |
| `fetchMovieDetailsSlice` |           Fetching movie details using movie_id for the /movie/:id pages.           |
| `fetchSearchSlice`       |                 Fetching search results with the users input query.                 |

---

## SEO and Tracking

1.  **SEO Optimization**
    - **Meta Tags:** Meta tags setup in the /meta folder using `react-helmet-async`
    - **Sitemap:** Generated with `generateSitemap.js` using the `Sitemap` package.
    - **Robots.txt:** Generated with `generateRobots.js`
2.  **Google Analytics & Tag Manager:**
    - **Google Analytics:** Tracking pageviews and user engagement setup using `react-ga4`.
    - **Tag Manager:** Tracking movies getting favourited setup using `react-gtm-module`.

---

## Testing with Cypress

End-to-end tests ensure core functionality works as expected.

### Setup

1. **Install Cypress:**
   ```bash
   npm i cypress --save-dev

   ```
2. **Open Cypress:**
   ```bash
   npx cypress open
   ```

### Tests Included

- **Search Functionality**: Verifies that users can search for movies with `cypress/e2e/searchbar.cy.js`.

- **Homepage and Favourites**: Confirms that the homepage is being rendered properly and movies can be added/removed from favourites with `cypress/e2e/homePage.cy.js`.

---

## Final Notes

This project is part of my current course, demonstrating advanced React and Redux techniques along with testing, SEO optimization, and Google Analytics tracking.
