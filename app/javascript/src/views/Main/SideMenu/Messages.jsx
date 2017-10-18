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
  return theMessages.map((message, i) => {
    return (
      <Message key={`message-${i}-sidebar`}>
        <p>{message.text}</p>
      </Message>
    );
  });
};
