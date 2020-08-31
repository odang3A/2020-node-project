import React from 'react';
import PropTypes from 'prop-types';

function Hello2({ id=0, name="이름없음", color="black", children="별명없음", messages}) {
    return (
        <>
            {/* <div style={{color}}>
                <p>학번: {id}</p>
                <p>이름: {name}</p>
                <p>별명: {children}</p>
            </div> */}
            <div>
                {messages.length>0 && (
                    <>{messages.length}건의 메시지가 있습니다</>
                )
                // messages.length + "건의 메시지가 있습니다"
            }</div>
        </>
    );
}

Hello2.propTypes = {
    id: PropTypes.isRequired,
    name: PropTypes.isRequired,
}

export default Hello2;