import React from 'react';
import './App.css';
// import Hello from './Hello';
// import Hello2 from './Hello2';
import StateSample from './StateSample';

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
    return (
        <>
            <StateSample />
        </>
    )
}



// function App2() {
//   const name = "react";
//   const style = {
//     backgroundColor: "black",   // background-color
//     color: "white",
//     fontSize: 50,   // font-size
//   }

//   return (
//     // 주석인가요
//     <>
//       <div
//         //주석인가요
//         style={style}
//       >
//         {name}
//       </div>
//       <div className="box"></div>
//       <Hello name={name} color="blue" isLoggedIn>
//         태그 안의 텍스트입니다.
//         {name}
//       </Hello>
//       <Hello />

//       {/* <Hello2
//         id="3610"
//         name="김홍래"
//         color="blue"
//         >
//         odang
//       </Hello2>
//       <Hello2 /> */}

//       <Hello2 messages={['메시지1', '메시지2', '메시지3']} />
      
//     </>
//   );
// }

export default App;
