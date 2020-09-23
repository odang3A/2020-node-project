import React, { useState } from 'react'

function StateSample2() {
    const [number, setNumber] = useState(1);
    const [items, setItems] = useState([]);

    const addItem = () => {
        // setItems(items.concat({id: number, value: number}));
        setItems([...items, {id: number, value: number}]);
        setNumber(number + 1);
    }

    return (
        <>
            <button onClick={addItem}>add</button>
            <ul>
                {items.map((item) => {
                    return <li key={item.id}>{item.value}</li>
                })}
            </ul>
        </>
    )
}

export default StateSample2