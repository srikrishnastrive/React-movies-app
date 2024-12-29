import { useRef, useState } from 'react';
import './Navbar.css';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';

function Navbar(){
    const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const {movieList} = useMovieList(!searchTerm ? 'avengers' : searchTerm);



    return (
        <div  className="navbar-wrapper">
            <div>Movie Base</div>
            <div className="search-bar">
                <input type="text"
                id='movie-search-input'
                placeholder='what movie your thinking about...'
                onFocus={()=>{
                    setIsAutoCompleteVisible(true);
                }}
                onBlur={()=>{
                    setIsAutoCompleteVisible(false);
                }}
                onChange={useDebounce((e)=>{
                    setSearchTerm(e.target.value);
                },1000)}
                />
                <div id='result-list' style={{display : (isAutoCompleteVisible) ? 'block' : 'none'}}>
                    <div className='autocomplete-result'>Auto complete results....{searchTerm}</div>
                    { movieList.length > 0 && 
                    movieList.map((movies)=><div key={movies.imdbID} className='autocomplete-result'>{movies.Title}</div> )}
                
              
                </div>
            </div>
          
            <div>
                Theme
            </div>
        </div>
    )
}

export default Navbar;
