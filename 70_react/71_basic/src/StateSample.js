import React, { useState } from 'react'

// 컴포넌트 내의 동적인 값을 state라고 함
// Hook -> useState()
function StateSample() {
    // [현재 state값, 업데이트하는 함수] = useState(초기state값)
    const [count, setCount] = useState(0);

    // const counter = () => {
    //     //count = count + 1;    // 값을 직접 수정하면 안됨
    //     setCount(count + 1);    // 업데이트 함수를 호출해야함
    // }

    return (
        <>
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={() =>setCount(count + 1)}>Click Me!</button>
            </div>
            <div>
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)}>+</button>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </>
    )
}

export default StateSample