import React , { useReducer, useRef } from 'react';
import MusicList from './MusicList';
import CreateMusic from './CreateMusic';

// 함수형 컴포넌트
// JSX를 return
// JSX 규칙
// 1. 두개 이상의 태그는 반드시 하나의 태그로 감싸야 한다.
// 2. 여는 태그와 닫는 태그가 있어야 한다.
// 3. JSX 안에서 javascript 값을 사용할 때에는 {} 사용함
// 4. 인라인 style 작성 시 객체로 작성 (Camelcase)
// 5. css class 설정 시 class -> className
// 6. 주석 작성 ({/*  */}, 여는 태그 내에서는 // )

const initialState = {
    music: {
        title: "",
        singer: "",
        active: false,
    },
    musicList: [
        { id: 1, singer: "유산슬", title: "합정역5번출구", active: false },
        { id: 2, singer: "지코", title: "평범하게", active: false },
        { id: 3, singer: "악동뮤지션", title: "크레센도", active: false },
    ]
}

function reducer(state, action) {
    const { music, musicList } = state;
    switch(action.type) {
        case "CREATE":
            return {
                ...initialState,
                musicList: musicList.concat({
                    id: action.nextId.current, 
                    ...music
                })
            };
        case "CHANGE":
            const { name, value } = action;
            return {
                ...state,
                music: {...music, [name]: value}
            }
        case "REMOVE":
            return {
                ...state,
                musicList: musicList.filter(music => music.id !== action.id ),
            }
        case "TOGGLE":
            return {
                ...state,
                musicList: musicList.map(music => music.id === action.id ? { ...music, active: !music.active } : music),
            }
        default:
            throw new Error("Unhandled action");
    }
}

function MusicStateApp() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { title, singer } = state.music;
    const { musicList } = state;

    // nextId = {current: 4}
    const nextId = useRef(4);
    const onCreate = () => {
        dispatch({
            type: "CREATE",
            nextId,
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
            <CreateMusic title={title} singer={singer} onChange={onChange} onCreate={onCreate} />
            <MusicList musicList={musicList} onRemove={onRemove} onToggle={onToggle} />
        </>
    )
}

export default MusicStateApp;
