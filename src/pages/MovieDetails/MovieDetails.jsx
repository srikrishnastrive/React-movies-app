import { useParams, useSearchParams } from 'react-router-dom';
import './MovieDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { searchMovieById } from '../../api/omdb';
import MovieCard from '../../components/Moviecard/MovieCard';

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
        <>
           {movie && <MovieCard Title={movie.Title} Year={movie.Title} Type={movie.Type} Poster={movie.Poster} />}
        </>
    )
}

export default MovieDetails;
