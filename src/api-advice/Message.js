import React from 'react';

const Message = (props) => {
    return (
        <div>
            <p>you have read <strong style={{ color: '#393' }}>{props.count} </strong>peaces of advice <strong>Today</strong></p>

        </div>
    );
}

export default Message;
