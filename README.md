# Movie List Application

## Overview

This is a responsive React application with two main pages: a movie list and a favorite movies list. The movie list page fetches data from an external API, displays the movies, and allows users to mark movies as favorites. The favorite movies list page displays the list of movies marked as favorites by the user.

## Features

- Fetch movies data from the API.
- Display movies sorted by rating from highest to lowest.
- Store movies and favorite movies data in Redux.
- Add/remove movies to/from the favorite list.
- Redirect to IMDb URL of the movie on clicking a movie card.
- Responsive design for desktop, tablet, and mobile devices.
- Persistent favorite movies across page refreshes.
- Sidebar with sorting options and a toggle to view favorite movies.

## Technologies Used

- React
- Redux
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

## Getting Started

### Prerequisites

- Node.js
- npm (or yarn)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/movie-list-app.git
    cd movie-list-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```
    or if you're using yarn:
    ```bash
    yarn install
    ```

3. Create a `.env` file in the root directory and add your API URL:
    ```plaintext
    REACT_APP_API_URL=https://dummyapi.online/api/movies
    ```

### Running the Application

To start the development server:
```bash
npm start
```
or if you're using yarn:
```bash
yarn start
```
Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/components`: Contains React components including `MovieCard`, `SidePanel`, `MovieList`, and `FavoriteMovies`.
- `src/features/movies`: Contains Redux slice for managing movies state.
- `src/App.jsx`: Main application component.
- `src/index.js`: Entry point for the React application.
- `public`: Static files.

## Usage

### Sidebar

- **Sort Movies**: Sorts the movies by highest or lowest rating.
- **View Favorite Movies / Back to Home**: Toggles between the main movie list and the favorite movies list.

### Movie List

- Displays movies sorted by rating.
- Click on a movie card to redirect to its IMDb page.
- Click on the favorite icon to add/remove the movie from the favorites list.

### Favorite Movies List

- Displays the list of movies marked as favorites.
- The order of movies is maintained as they were added to the favorites list.

## Additional Notes

- The favorite movies list is persistent across page refreshes.
- The application is designed to be fully responsive across different screen sizes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

## Contact

For any questions or feedback, please contact [nobilgautam007@gmail.com].
