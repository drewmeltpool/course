import React, { Component, useState} from 'react'
import {Link,useRouteMatch,useLocation} from 'react-router-dom'

const FilmInfo = ({item}) => {
    const [isShowMore, setIsShowMore] = useState(false);
    let location = useLocation();
    


    return (
    <li key={item.id}>
        <Link to={`${location.pathname}/${item.id}`}>{item.name}</Link>
         {!isShowMore && (<button onClick={() => 
        setIsShowMore(true)}>More</button>)}
        {isShowMore && ( <> <div> EpisodeId:{item.episodeId} </div> 
        <div>{item.openingCrawl} </div> </>
        )}
      </li>
    )
} 

export default FilmInfo