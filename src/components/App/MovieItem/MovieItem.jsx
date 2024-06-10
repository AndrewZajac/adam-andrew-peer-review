import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/';
import './movieItem.css'

export default function MovieItem() {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();

    const returnToList = () => {
        history.push('/');
    }

    useEffect(() => {
            dispatch({ type: 'FETCH_SINGLE_MOVIE', payload: id });
    }, [dispatch, id]);

    const movie = useSelector(state => state.singleMovie); // Ensure the reducer name matches
    console.log('Testing the id:', {id});
    if (!movie) {
        return <div>Loading...</div>;
    }
console.log('Movie information:', movie);
    return (
        <>
            <h2>Movie Details</h2>
            <section data-testid="movieDetails">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <img src={movie.poster} alt={movie.title} />
                <p>Genres: {movie.genres}</p>
            </section>
            <button data-testid="toList" onClick={returnToList}>Return to Movie List</button>
        </>
    );
}