import React, { useState, useRef } from 'react'

function MultiInputSample() {
    const [student, setStudent] = useState({
        id: '',
        name: '',
    });

    // inputId = {current: xxx}
    const inputId = useRef();   // ref 객체 생성
    const inputName = useRef();

    const { id, name } = student;

    // const onChangeId = (e) => {
    //     setStudent({...student, id: e.target.value});
    // }

    // const onChangeName = (e) => {
    //     setStudent({...student, name: e.target.value});
    // }

    // 계산된 속성명(computed property name)
    const onChangeStudent = (e) => {
        const { name, value } = e.target;
        setStudent({...student, [name] : value})
    }

    const onReset = () => {
        setStudent({
            id: '',
            name: '',
        });

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

export default MultiInputSample