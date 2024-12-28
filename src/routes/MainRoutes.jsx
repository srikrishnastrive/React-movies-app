import {Routes,Route} from 'react-router-dom';
import Home from '../pages/Home/Home';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Error from '../pages/Error/Error';


function MainRoutes(){
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:name' element={<MovieDetails/>}/>
            <Route  path='*' element ={<Error/>}/>
        </Routes>
    )
}

export default MainRoutes;
