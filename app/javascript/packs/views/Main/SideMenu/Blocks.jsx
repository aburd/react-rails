import React from 'react';
import styled from 'styled-components';
import Messages from './Messages';

const Block = styled.div`
  > p {
    margin-left: 0.5rem;
    font-size: 1rem;
  }
`;

const libFunction = (idArray, elementArray) => {
  return idArray.map(id => elementArray[id]);
};

export default ({ blocks, blocksArr, messages }) => {
  const theBlocks = libFunction(blocks, blocksArr);
  return theBlocks.map(block => {
    return (
      <Block>
        <p>{block.name}</p>
        <Messages messages={block.messages} messagesArr={messages} />
      </Block>
    );
  });
};
