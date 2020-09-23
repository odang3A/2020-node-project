import React , { useState, useRef } from 'react';
import './App.css';
import Hello from './Hello';
import Hello2 from './Hello2';
// import StateSample from './StateSample';
// import StateSample2 from './StateSample2';
// import InputSample from './InputSample';
// import MultiInputSample from './MultiInputSample';
import MusicList from './MusicList';
import CreateMusic from './CreateMusic';
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

function App() {
    // movie
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        year: "",
        active: false,
    })
    const { title, director, year } = movie;

    const [movieList, setMovieList] = useState([
        { id: 1, title: "스타워즈", director: "조지 루카스", year: "1977", active: false },
        { id: 2, title: "아바타", director: "제임스 카메론", year: "2009", active: false },
        { id: 3, title: "인터스텔라", director: "크리스토퍼 놀란", year: "2014", active: false },
    ]);
    const nextId = useRef(4);

    const onCreate = () => {
        setMovieList(movieList.concat({
            id: nextId.current,
            ...movie,
        }));

        setMovie({
            title: "",
            director: "",
            year: "",
            active: false,
        })

        nextId.current += 1;
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setMovie({
            ...movie,
            [name]: value,
        })
    }

    const onRemove = (id) => {
        setMovieList(movieList.filter(movie => movie.id !== id));
    }

    const onToggle = (id) => {
        setMovieList(movieList.map(movie => movie.id === id ? { ...movie, active: !movie.active} : movie));
    }

    return (
        <>
            <CreateMovie 
                title={title} 
                director={director} 
                year={year} 
                onChange={onChange} 
                onCreate={onCreate}
            />
            <MovieList 
                movieList={movieList} 
                onRemove={onRemove} 
                onToggle={onToggle} 
            />
        </>
    )
}

function App3() {
    const [music, setMusic] = useState({
        title: "",
        singer: "",
        active: false,
    })
    const { title, singer } = music;

    const [musicList, setMusicList] = useState([
        { id: 1, singer: "유산슬", title: "합정역5번출구", active: false },
        { id: 2, singer: "지코", title: "평범하게", active: false },
        { id: 3, singer: "악동뮤지션", title: "크레센도", active: false },
    ]);

    // nextId = {current: 4}
    const nextId = useRef(4);
    const onCreate = () => {
        setMusicList(musicList.concat({
            id: nextId.current, 
            ...music
        }));
        // setMusicList([
        //     ...musicList, 
        //     {
        //         id: nextId.current,
        //         ...music,
        //     }
        // ]);

        setMusic({
            singer: "",
            title: "",
            active: false,
        })
        
        nextId.current += 1;
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setMusic({
            ...music,
            [name]: value,
        })
    }

    const onRemove = (id) => {
        setMusicList(musicList.filter(music => music.id !== id ))
    }

    const onToggle = (id) => {
        setMusicList(musicList.map(music => music.id === id ? { ...music, active: !music.active } : music))
    }

    return (
        <>
            {/* <StateSample />
            <StateSample2 />
            <InputSample />
            <MultiInputSample /> */}

            <CreateMusic title={title} singer={singer} onChange={onChange} onCreate={onCreate} />
            <MusicList musicList={musicList} onRemove={onRemove} onToggle={onToggle} />
        </>
    )
}



function App2() {
  const name = "react";
  const style = {
    backgroundColor: "black",   // background-color
    color: "white",
    fontSize: 50,   // font-size
  }

  return (
    // 주석인가요
    <>
      <div
        //주석인가요
        style={style}
      >
        {name}
      </div>
      <div className="box"></div>
      <Hello name={name} color="blue" isLoggedIn>
        태그 안의 텍스트입니다.
        {name}
      </Hello>
      <Hello />

      {/* <Hello2
        id="3610"
        name="김홍래"
        color="blue"
        >
        odang
      </Hello2>
      <Hello2 /> */}

      <Hello2 messages={['메시지1', '메시지2', '메시지3']} />
      
    </>
  );
}

export default App;
