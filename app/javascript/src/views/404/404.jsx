import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styled from 'styled-components';
import { injectIntl, intlShape } from 'react-intl';
import { color, fontsize } from '../StyleVariables';

const fanpCharacter = require('images/character.png');

const NotFoundContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  resize: vertical;

  div {
    display: block;
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

const NotFound = ({ intl, message }) => {
  const txt = intl.formatMessage({
    id: message,
    defaultMessage: '',
  });
  const toChatbots = intl.formatMessage({
    id: 'chatMagazine.TO_CHATBOT',
    defaultMessage: 'チャットボットへ',
  });
  return (
    <NotFoundContainer>
      <div>
        <h3>{txt}</h3>
        <p>
          <Link to="/dashboard/group">{toChatbots}</Link>
        </p>
      </div>
      <div>
        <img src={fanpCharacter} alt="fanp character" />
      </div>
    </NotFoundContainer>
  );
};

NotFound.defaultProps = { message: 'ui.NOT_FOUND' };

NotFound.propTypes = {
  message: PropTypes.string,
  intl: intlShape,
};

export default injectIntl(NotFound);
