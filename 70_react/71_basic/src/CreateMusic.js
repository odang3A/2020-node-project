import React from 'react'

function CreateMusic({title, singer, onChange, onCreate}) {
    
    return (
        <>
            <input name="singer" placeholder="가수명" onChange={onChange} value={singer} />
            <input name="title" placeholder="노래 제목" onChange={onChange} value={title} />
            <button onClick={onCreate}>등록</button>
        </>
    )
}

export default CreateMusic