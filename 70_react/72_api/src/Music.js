import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

// LOADING, SUCCESS, ERROR
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

function Music({ id }) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const getMusic = async () => {
        dispatch({ type: "LOADING" });
        try {
            // GET: 조회, POST: 등록, PUT: 수정, DELETE: 삭제
            const response = await axios.get(`http://127.0.0.1:5000/musicList/${id}`);
            console.log(response);
            dispatch({ type: "SUCCESS", data: response.data });
        } catch (e) {
            console.log(e);
            dispatch({ type: "ERROR", error: e });
        }
    };

    useEffect(() => {
        getMusic();
    }, [id]);

    const { loading, data: music, error } = state;

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!music) return null;
        //return <button onClick={getMusic}>불러오기</button>

    return (
        <>
            <h3>{music.title}</h3>
            <p>{music.singer}</p>
        </>
    )
}

export default Music