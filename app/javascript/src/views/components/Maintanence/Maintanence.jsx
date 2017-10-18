import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, fontsize } from '../../StyleVariables';

const fanpCharacter = require('images/character.png');

const Message = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  resize: vertical;

  p {
    margin: 0 auto 1rem;
    width: 80%;
    font-size: ${fontsize.large};
    font-weight: 600;

    &:nth-child(1) {
      margin: -${96 / 2}px auto 1rem;
      background: ${color.bg_lighter};
      border: 1px solid ${color.gray_lighter2};
      border-radius: 10px;
      padding: 2rem;
    }

    img {
      max-width: 120px;
    }
  }
`;

const Maintanence = ({ message }) => {
  return (
    <Message>
      <p>{message}</p>
      <p>
        <img src="images/character.png" alt="fanp character" />
      </p>
    </Message>
  );
};

Maintanence.defaultProps = { message: 'メンテナンス中です。' };

Maintanence.propTypes = { message: PropTypes.string };

export default Maintanence;
