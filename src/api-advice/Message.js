import React from 'react';

const Message = (props) => {
    return (
        <div>
            <p>you have read 
        <strong style={{ color: '#393' }}>{props.count} </strong>
    pieces of advice <strong>Today</strong></p>

        </div>
    );
}

export default Message;
