import React, { createContext, useContext } from "react";

// 1. Context 생성하기
const MyContext = createContext("???");

function Child() {
    const text = useContext(MyContext);

    return (
        <>
            <div>안녕하세요, {text}</div>
        </>
    );
}

function Parent() {
    return <Child />;
}

function GrandParent() {
    return <Parent />;
}

function ContextSample() {
    return (
        <MyContext.Provider value={"OOO"}>
            <GrandParent />
        </MyContext.Provider>
    )
}

export default ContextSample;