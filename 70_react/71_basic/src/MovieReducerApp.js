import React , { useReducer, useRef, createContext } from 'react';
import MovieList from './MovieList';
import CreateMovie from './CreateMovie';

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
    movie: {
        title: "",
        director: "",
        year: "",
        active: false,
    },
    movieList: [
        { id: 1, title: "스타워즈", director: "조지 루카스", year: "1977", active: false },
        { id: 2, title: "아바타", director: "제임스 카메론", year: "2009", active: false },
        { id: 3, title: "인터스텔라", director: "크리스토퍼 놀란", year: "2014", active: false },
    ],
}

function reducer(state, action) {
    const { movie, movieList } = state;
    switch(action.type) {
        case "CREATE":
            return {
                ...initialState,
                movieList: movieList.concat({
                    ...movie,
                    id: action.id,
                })
            }
        case "CHANGE":
            const { name, value } = action;
            return {
                ...state,
                movie: {
                    ...movie, 
                    [name]: value,
                }
            }
        case "REMOVE":
            return {
                ...state,
                movieList: movieList.filter(movie => movie.id !== action.id),
            }
        case "TOGGLE":
            return {
                ...state,
                movieList: movieList.map(movie => movie.id === action.id ? { ...movie, active: !movie.active } : movie),
            }
        default:
            throw new Error("Unhandled action")
    }
}

export const MovieContext = createContext(null);

function MovieReducerApp() {
    // movie
    const [state, dispatch] = useReducer(reducer, initialState);
    const { movie, movieList } = state;
    const { title, director, year } = movie;

    return (
        <>
            <MovieContext.Provider value={dispatch}>
                <CreateMovie 
                    title={title} 
                    director={director} 
                    year={year}
                />
                <MovieList 
                    movieList={movieList}
                />
            </MovieContext.Provider>
        </>
    )
}

export default MovieReducerApp