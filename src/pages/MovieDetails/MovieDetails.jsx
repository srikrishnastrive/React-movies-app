import { useParams, useSearchParams } from 'react-router-dom';
import './MovieDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { searchMovieById } from '../../api/omdb';
import MovieCard from '../../components/Moviecard/MovieCard';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

function MovieDetails(){

    const [movie,setMovie] = useState(null);
    const {id} = useParams();
    const [query] = useSearchParams();
  
    async function downloadMovie(){
        const response = await axios.get(searchMovieById(id));
        setMovie(response.data);
    }
    useEffect(()=>{
        downloadMovie();
        console.log(query.get('abc'));
    },[id]);


    return (
        <div  className="movie-details-wrapper">
           
                {movie && <MovieCard 
                    Title={movie.Title} 
                    Year={movie.Title} 
                    Type={movie.Type} 
                    Poster={movie.Poster}  
                    id={movie.imdbID}
            />}
             {movie && <div className="movie-details">
                <div>
                    Plot: {movie.Plot}
                </div>
                <div>
                    Actors: {movie.Actors}
                </div>
                <div>
                    Genre: {movie.Genre.split(',').map((genre) => {
                        return <span className="genre" key={genre}>{genre}</span>
                    })}
                </div>
                <div>
                    <Rating items={10} style={{maxWidth:180}} value={Math.floor(movie.imdbRating)} />
                </div>
            </div>}
           
          
        </div>
    )
}

export default MovieDetails;
