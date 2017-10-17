import React from 'react';
import styled from 'styled-components';

const Message = styled.div`
  > p {
    margin-left: 1rem;
    font-size: 0.8rem;
  }
`;

export default ({ messages, messagesArr }) => {
  const theMessages = messages.map(messageId => messagesArr[messageId]);
  console.log(theMessages);
  return theMessages.map(message => {
    return (
      <Message>
        <p>{message.text}</p>
      </Message>
    );
  });
};
