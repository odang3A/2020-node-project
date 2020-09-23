import React, { useEffect, useMemo } from 'react'

function Movie({ movie, onRemove, onToggle }) {
    const { id, title, director, year, active } = movie;

    const style = {
        color: active ? "blue" : "black",
        cursor: "pointer",
    }

    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남 or 업데이트 직후");
        return () => {
            console.log("컴포넌트가 화면에서 사라짐 or 업데이트 직전");
        }
    }, [movie])

    return (
        <>
            <div> 
                <b style={style} onClick={() => onToggle(id)}>{title}</b> ({director}, {year})
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </>
    )
}

function MovieList({movieList, onRemove, onToggle}) {
    const countActiveMovie = () => {
        console.log("Active된 Movie 개수 세기");
        return movieList.filter(movie => movie.active).length
    }

    const count = useMemo(countActiveMovie, [movieList]);

    return (
        <>
            {movieList.map((movie) => (
                <Movie key={movie.id} movie={movie} onRemove={onRemove} onToggle={onToggle} />
            ))}
            <hr />
            <div>Active된 Movie 수: {count}</div>
        </>
    )
}

export default MovieList