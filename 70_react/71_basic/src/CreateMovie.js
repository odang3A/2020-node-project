import React, { useContext, useRef } from 'react'
import { MovieContext } from './MovieReducerApp'

function CreateMovie({title, director, year}) {
    const dispatch = useContext(MovieContext);

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
            value,
        })
    }

    return (
        <>
            <input name="title" placeholder="title" onChange={onChange} value={title} />
            <input name="director" placeholder="director" onChange={onChange} value={director} />
            <input name="year" placeholder="year" onChange={onChange} value={year} />
            <button onClick={onCreate}>등록</button>
        </>
    )
}

export default CreateMovie