import { useEffect, useState } from "react";
import { searchMovie } from "../api/omdb";
import axios from "axios";


function useMovieList(...args){
    const [movieList,setMovieList] = useState([]);

    

    async function downloadDefaultMovies(...args) {
       try {
        const urls = args.map((movies) => searchMovie(movies));
        const response = await axios.all(urls.map(url => axios.get(url)));
        if (response[0].data.Error){
            setMovieList([]);
        }
        else {
            const movies = response.flatMap((movieResponse)=> movieResponse.data.Search || []);
            setMovieList(movies);
        }
    
       } catch (error) {
            console.log('api request failed')
       }
    }


   


    useEffect(()=>{
        downloadDefaultMovies(...args);
    },[...args]);

    return {movieList};

}

export default useMovieList;
