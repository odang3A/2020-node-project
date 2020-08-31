import React from 'react';
import PropTypes from 'prop-types';

// const props = {name: "황만근", color: "blue"}
function Hello({ name, color="red", children="내용없음", isLoggedIn }) {
    return (
        <>
            <div>
                { children }
            </div>
            <div style={{ color }}>
                Hello, {name || "이름없음"}!
            </div>
            <div>{isLoggedIn ? '로그인되었습니다' : '로그인되어있지않습니다'}</div>
            <div>{isLoggedIn && '로그인되었습니다'}</div>
        </>
    );
};

// Default Props
// Hello.defaultProps = {
//     name: "이름없음",
//     color: "red",
//     children: "태그안의 텍스트 없음",
// };

Hello.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    children: PropTypes.string,

}

export default Hello;