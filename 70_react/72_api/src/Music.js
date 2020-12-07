import React, { useEffect } from 'react'
import { useAsync } from 'react-async'
import { getMusic } from './api';

function Music({ id }) {
    const {data: music, error, isLoading} = useAsync({
        promiseFn: getMusic,
        id,
        watch: id   // id가 바뀌면 다시 호출
    })

    // useEffect(() => {
    //     getMusic(id);
    // }, [id]);

    if(isLoading) return <div>로딩중...</div>
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