import { useContext, useRef, useState } from 'react';
import './Navbar.css';
import useMovieList from '../../hooks/useMovieList';
import useDebounce from '../../hooks/useDebounce';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../../context/ThemeContext';

function Navbar(){
    const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');
    const {movieList} = useMovieList(!searchTerm ? 'avengers' : searchTerm);
    const navigator = useNavigate();

    const {theme,setTheme} = useContext(ThemeContext);
    function handleAutoCompleteClick(movieImdbId) {
        navigator(`/movie/${movieImdbId}`);
    }

    function handleDarkMode(){
        setTheme(theme === 'dark' ? 'light' : 'dark');
        console.log(theme);
    }


    return (
        <div  className="navbar-wrapper">
            <div className='movie-base-title'><Link to="/">Movie Base</Link></div>
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
                    movieList.map((movies)=><div
                    onMouseDown={ () => handleAutoCompleteClick(movies.imdbID)} 
                    key={movies.imdbID} className='autocomplete-result'>{movies.Title}</div> )}
                
              
                </div>
            </div>
          
            <div onClick={handleDarkMode}>
                <FontAwesomeIcon  className = 'theme-icon' icon={ theme === 'dark' ?faSun : faMoon} />
            </div>
        </div>
    )
}

export default Navbar;
