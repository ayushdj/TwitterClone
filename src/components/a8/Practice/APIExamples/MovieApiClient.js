import React, {useEffect, useState} from "react";

const MovieApiClient = () => {

    const [movie, setM] = useState({title: 'My New Movie', stars: 2.5});
    const [movies, setMovies] = useState([]);
    const onMovieTitleChange = (event) => {
    console.log(event);
        setM({...movie, title: event.target.value});
    // console.log(m);
}

    const createMovieClickHandler = () => {
        // Create a new movie object specifically to be the payload to the server
        const newMovie = {
            ...movie,
            _id: (new Date()).getTime().toString()
        };

        fetch('http://localhost:4000/api/movies', {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: { 'content-type': 'application/json' }
        })
            .then(response => response.json())
            .then(movies => {
                setMovies(movies);

            })
    }



    useEffect(() =>
            fetch('http://localhost:4000/api/movies')
                .then(response => response.json())
                .then(movies => setMovies(movies))
        , []);

    const deleteMovie = (movie) =>
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));


    const saveMovie = () =>
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'PUT',
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));


    return(
        <div>
            <h2>Movies</h2>
            <ul className="list-group">
                {
                    movies.map((movie) =>
                        <li className="list-group-item"
                            key={movie._id}>
                            {movie.title} {movie.stars}
                            <button onClick={() => setM(movie)}
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>

                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                            <button
                                onClick={createMovieClickHandler}
                                className="btn btn-success float-end">
                                Create
                            </button>
                            <input className="form-control"
                                   value={movie.title}
                                   onChange={onMovieTitleChange}
                                   style={{width: "70%"}}/>

                            <button
                                onClick={saveMovie}
                                className="btn btn-primary ms-2 float-end">
                                Save
                            </button>

                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;