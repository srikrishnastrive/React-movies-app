export function searchMovie(term){
    return `https://www.omdbapi.com/?s=${term}&apikey=${import.meta.env.VITE_API_KEY}`;
}
