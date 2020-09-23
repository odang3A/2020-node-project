import React, { useRef, useReducer } from 'react'

const initialState = {
    id: '',
    name: '',
}

function reducer(state, action) {
    switch(action.type){
        case "CHANGE":
            const { name, value } = action;
            return { ...state, [name]: value }
        case "RESET":
            return initialState;
        default:
            throw new Error("Unhandled action");
    }
}

function ReducerSample2() {
    const [student, dispatch] = useReducer(reducer, initialState);

    // inputId = {current: xxx}
    const inputId = useRef();   // ref 객체 생성
    const inputName = useRef();

    const { id, name } = student;

    // 계산된 속성명(computed property name)
    const onChangeStudent = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE",
            name,
            value
        })
    }

    const onReset = () => {
        dispatch({
            type: "RESET"
        })

        inputId.current.focus();
        inputName.current.focus();
    }

    return (
        <>
            {/* <input name="id" placeholder="학번" onChange={onChangeId} value={id}/>
            <input name="name" placeholder="이름" onChange={onChangeName} value={name}/> */}
            <input ref={inputId} name="id" placeholder="학번" onChange={onChangeStudent} value={id}/>
            <input ref={inputName} name="name" placeholder="이름" onChange={onChangeStudent} value={name}/>
            <button onClick={onReset}>초기화</button>
            <div>
                학번: {id}, 이름: {name}
            </div>
        </>
    )
}

export default ReducerSample2