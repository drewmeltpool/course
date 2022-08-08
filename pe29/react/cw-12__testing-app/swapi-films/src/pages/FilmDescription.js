import React, {useEffect,useState} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import getFilm from '../api/getFilm'

export default function FilmDescription() {
    const {filmId} = useParams();
    const [film, setFilm] = useState(null)

    console.log(filmId);
    useEffect(() => {
        getFilm(filmId).then((data)=> setFilm(data));
    },[])
    let history = useHistory();
    console.log(history)


    const handleClick = () => {
        history.goBack()
    }
    
    return (
        <div>
            {film ? (
            <>
            <h1>Film: {film.name}</h1>
            <button onClick={handleClick}>Back</button>
            <h2>Director: {film.director}</h2>
            <p>{film.openingCrawl}</p>
            </>
            )
            : (<p>Loading ...</p>)
        }
            
        </div>
    )
}
