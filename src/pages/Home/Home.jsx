import axios from "axios";
import MovieCard from "../../components/Moviecard/MovieCard";
import './Home.css';
import { searchMovie } from "../../api/omdb";
import { useEffect, useState } from "react";


function Home(){

    const [movieList,setMovieList] = useState([]);

    // async function downloadDefaultMovies(...args){  
    //     const urls = args.map((movies)=> searchMovie(movies));
    //     const response = await axios.all(urls.map(url => axios.get(url)));
    //    const movies = response.map((movieResponse)=>(movieResponse.data.Search));
    //    setMovieList([[].concat(...movies)]);
    // }

    async function downloadDefaultMovies(...args) {
        const urls = args.map((movies) => searchMovie(movies));
        const response = await axios.all(urls.map(url => axios.get(url)));
        
        // Flatten the array of arrays into a single array
        const movies = response.flatMap((movieResponse) => movieResponse.data.Search || []); 
        setMovieList(movies); // Set the flat array directly
    }


   


    useEffect(()=>{
        downloadDefaultMovies('harry','avengers','batman');
    },[]);

    return (
        <>
            <h1>Home page</h1>
            <div className="movie-card-wrapper">
            {movieList && movieList.length > 0 ? (
                movieList.map((movie) => (
                    <MovieCard key={movie.imdbID} {...movie} />
                ))
            ) : (
                <p>No movies found.</p>
            )}
            </div>

            
        </>
    )
}

export default Home;
