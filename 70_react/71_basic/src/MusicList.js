import React, { useEffect, useMemo, useContext } from 'react'
import { MusicContext } from './MusicReducerApp';

function Music({ music }) {
    const { id, title, singer, active } = music;
    const style = {
        color: active ? "blue" : "black",
        cursor: "pointer",
    }

    // 렌더링시마다 호출
    // useEffect(() => {
    //     console.log("찍힐까?");
    // })

    // 마운트 또는 언마운트시에만 호출
    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남 or 업데이트 된 후", music);
        return () => {      // clean-up 함수
            console.log("컴포넌트가 화면에서 사라짐 or 업데이트 되기 직전에", music);
        }
    }, [music])

    const dispatch = useContext(MusicContext);
    
    const onRemove = (id) => {
        dispatch({
            type: "REMOVE",
            id
        })
    }

    const onToggle = (id) => {
        dispatch({
            type: "TOGGLE",
            id
        })
    }

    return (
        <>
            <div> 
                <b style={style} onClick={() => onToggle(id)}>{title}</b> ({singer}) 
                <button onClick={() => onRemove(id)}>삭제</button>
            </div>
        </>
    )
}

function MusicList({ musicList }) {
    const countActiveMusic = () => {
        console.log("Active Music 개수 세기");
        return musicList.filter(music => music.active).length;
    };

    const count = useMemo(countActiveMusic, [musicList]);

    return (
        <>
            {/* {musicList.map(music => {
                return <Music key={music.id} music={music} />
            })} */}
            {musicList.map(music => (
                <Music key={music.id} music={music}/>
            ))}
            <hr />
            <div>Active된 Music 수: {count}</div>
        </>
    )
}

export default MusicList