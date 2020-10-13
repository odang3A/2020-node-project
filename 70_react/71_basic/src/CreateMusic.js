import React, { useRef, useContext } from 'react'
import { MusicContext } from './MusicReducerApp'

function CreateMusic({title, singer}) {
    const dispatch = useContext(MusicContext);

    // nextId = {current: 4}
    const nextId = useRef(4);

    const onCreate = () => {
        dispatch({
            type: "CREATE",
            id: nextId.current,
        })
        
        nextId.current += 1;
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE",
            name,
            value
        })
    }
    
    return (
        <>
            <input name="singer" placeholder="가수명" onChange={onChange} value={singer} />
            <input name="title" placeholder="노래 제목" onChange={onChange} value={title} />
            <button onClick={onCreate}>등록</button>
        </>
    )
}

export default CreateMusic