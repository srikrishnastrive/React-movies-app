
import MovieCard from "../../components/Moviecard/MovieCard";
import './Home.css';

import useMovieList from "../../hooks/useMovieList";


function Home(){

    const {movieList} = useMovieList('harry','avengers','batman');


   


   
    return (
        <>
          
            <div className="movie-card-wrapper">
            {movieList && movieList.length > 0 ? (
                movieList.map((movie) => (
                    <MovieCard key={movie.imdbID} {...movie} id={movie.imdbID} />
                ))
            ) : (
                <p>No movies found.</p>
            )}
            </div>

            
        </>
    )
}

export default Home;
