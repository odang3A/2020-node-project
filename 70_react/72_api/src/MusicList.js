import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Music from './Music'
import { useAsync } from 'react-async'
import { getMusicList } from './api'

// // LOADING, SUCCESS, ERROR
// function reducer(state, action) {
//     switch(action.type) {
//         case "LOADING":
//             return {
//                 loading: true,
//                 data: null,
//                 error: null,
//             }
//         case "SUCCESS":
//             return {
//                 loading: false,
//                 data: action.data,
//                 error: null,
//             }
//         case "ERROR":
//             return {
//                 loading: false,
//                 data: null,
//                 error: action.error,
//             }
//         default:
//             throw new Error(`Unhandled action type: ${action.type}`);
//     }
// }

function MusicList() {
    const [id, setId] = useState(null);
    const {data: musicList, error, isLoading, reload} = useAsync({
        promiseFn: getMusicList
    });

    // useEffect(() => {
    //     getMusicList();
    // }, []);

    if(isLoading) return <div>로딩중...</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!musicList) // return null;
        return <button onClick={getMusicList}>불러오기</button>

    return (
        <>
            <ul>
                { musicList.map(music => (
                    <li key={ music.id }
                        onClick={() => setId(music.id)}
                        style={{ cursor: "pointer" }}
                    >
                        { music.title } ({ music.singer })
                    </li>
                )) }
            </ul>  
            <button onClick={reload}>다시 불러오기</button>
            {id && <Music id={id} />}
        </>
    )
}

export default MusicList