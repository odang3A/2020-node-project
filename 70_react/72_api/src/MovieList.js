import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { useAsync } from 'react-async'
import { getMovieList } from './api'

function MovieList() {
    const [id, setId] = useState(null);

    const {data: movieList, error, isLoading, reload} = useAsync({
        promiseFn: getMovieList
    });

    if(isLoading) return <div>로딩중</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!movieList) return <button onClick={getMovieList}>불러오기</button>

    return (
        <>
            <ul>
                { movieList.map(movie => (
                    <li key={movie.id}
                        onClick={() => setId(movie.id)}
                        style={{ cursor: "pointer" }}
                    >
                        {movie.title} ({movie.director}, {movie.year})
                    </li>
                )) }
            </ul>
            <button onClick={reload}>다시 불러오기</button>
            {id && <Movie id={id} />}
        </>
    )
}

export default MovieList