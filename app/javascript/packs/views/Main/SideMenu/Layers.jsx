import React from 'react';
import styled from 'styled-components';
import Blocks from './Blocks';

const Layer = styled.div`
  > p {
    font-size: 1.5rem;
  }
`;

export default ({ layers, blocks, messages }) => {
  const theLayers = Object.keys(layers).map(key => layers[key]);
  return theLayers.map(layer => {
    return (
      <Layer>
        <p>> {layer.name}</p>
        <Blocks messages={messages} blocks={layer.blocks} blocksArr={blocks} />
      </Layer>
    );
  });
};
