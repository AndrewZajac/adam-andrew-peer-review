import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, [dispatch]);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <Card className="card" data-testid="movieItem" key={movie.id}>
              <div>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/movies/${movie.id}`}>
                  {movie.name}
                </Link>
              </div>
              <Link to={`/movies/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} data-testid="toDetails" />
              </Link>
            </Card>
          );
        })}
      </section>
    </main>
  );
}

export default MovieList;
