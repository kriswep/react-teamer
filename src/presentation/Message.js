import React from 'react';
import './Message.css';

const Message = ({message}) => {
  return (
    <div className="Message">
      <span className={message.severity}>
        {message.text}
      </span>
    </div>
  );
}

export default Message;  
