import React from 'react'

function CreateMovie({title, director, year, onChange, onCreate}) {
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