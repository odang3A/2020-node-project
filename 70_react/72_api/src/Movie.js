import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

function reducer(state, action) {
    switch(action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null,
            }
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null,
            }
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error,
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function Movie({ id }) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const getMovie = async () => {
        dispatch({ type:"LOADING" });
        try {
            const response = await axios.get(`http://127.0.0.1:5000/movieList/${id}`);
            console.log(response);
            dispatch({ type: "SUCCESS", data: response.data });
        } catch (e) {
            console.log(e);
            dispatch({ type: "ERROR", error: e });
        }
    }

    useEffect(() => {
        getMovie();
    }, [id]);

    const { loading, data: movie, error } = state;

    if(loading) return <div>로딩중</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!movie) return null;

    return (
        <>
            <h3>{movie.title}</h3>
            <p>{movie.director}, {movie.year}</p>
        </>
    )
}

export default Movie