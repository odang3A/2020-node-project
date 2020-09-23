import React, { useState } from 'react'

// 컴포넌트 내의 동적인 값을 state라고 함
// Hook -> useState()
function StateSample() {
    // [현재 state값, 업데이트하는 함수] = useState(초기state값)
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('black');

    // const counter = () => {
    //     //count = count + 1;    // 값을 직접 수정하면 안됨
    //     setCount(count + 1);    // 업데이트 함수를 호출해야함
    // }

    const onIncrease = () => {
        // setNumber(number + 1);
        setNumber((prev) => prev + 1)
    }
    const onDecrease = () => {
        setNumber(number - 1);
    }

    const col = (c) => {
        setColor(c);
    }


    return (
        <>
            <div>
                <p>You Clicked {count} times</p>
                <button onClick={() =>setCount(count + 1)}>Click Me!</button>
            </div>
            <div>
                <h1>{number}</h1>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
            <div>
                <p style={{color}}>색상 바꾸기</p>
                <button onClick={() => col('red')}>빨간색</button>
                <button onClick={() => setColor('blue')}>파란색</button>
                <button onClick={() => setColor('green')}>초록색</button>
            </div>
        </>
    )
}

export default StateSample