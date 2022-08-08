import React, {useState, useEffect,useRef} from 'react'
import getFilms from '../api/getFilms'
import FilmInfo from '../components/FilmInfo'

export default function Films() {

  const inputEl = useRef(null);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    
    getFilms().then((data) => {
     setFilms(data);
     setIsLoading(false);
     inputEl.current.focus();
   });
 }, [])

 const list = films.map((item) => {
    return (
      <FilmInfo key={item.id} item={item} />
    )
  })
  
    return (
        <div>
          <h1>Films :</h1>
            {isLoading ? (<div>Loading...</div>) : (
              <>
                <input ref={inputEl} type="search" placeholder="Search" />
                <ol> {list} </ol>
              </>
            )}
        </div>
    )
}
