import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import fanpLetters from 'images/fanp-letters.png';
import { color } from '../../StyleVariables';

const loadingStyle = {
  purple: '#8a7dff',
  animationDuration: 1,
  box: {
    width: 235,
    height: 90 + 100,
  },
  line: {
    height: 14,
    width: 5,
  },
};

const hideshow = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const growShrink = keyframes`
  0% { height: ${loadingStyle.line.height}px; }
  50% { height: 0px; }
  100% { height: ${loadingStyle.line.height}px; }
`;

const LoadingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  &.analyticsLoading {
    position: absolute;
    margin: 0 0 0 -240px;
    z-index: 1;
    background-color: ${color.white};
  }
`;

const LoadingInner = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(
    -${loadingStyle.box.width / 2}px,
    -${loadingStyle.box.height / 2}px
  );

  img {
    width: 200px;
  }

  svg {
    position: relative;
    top: -24px;
    right: 25px;
    animation: ${hideshow} ${loadingStyle.animationDuration}s ease infinite;

    rect {
      width: ${loadingStyle.line.width}px;
      fill: ${loadingStyle.purple};
      animation: ${growShrink} ${loadingStyle.animationDuration}s ease infinite;

      &.bar1 {
        transform: rotate(0deg) translate(0px, 0px);
      }
      &:nth-child(2) {
        transform: rotate(23deg) translate(14px, -4px);
      }
      &:nth-child(3) {
        transform: rotate(45deg) translate(25px, -12px);
      }
    }
  }
`;

const LoadingScreen = props => {
  const { analyticsChatFetch } = props;
  return (
    <LoadingContainer className={analyticsChatFetch ? 'analyticsLoading' : ''}>
      <LoadingInner>
        <img src={fanpLetters} alt="" />
        <svg width="30" height="30">
          <rect />
          <rect />
          <rect />
        </svg>
      </LoadingInner>
    </LoadingContainer>
  );
};

LoadingScreen.propTypes = { analyticsChatFetch: PropTypes.bool };

export default LoadingScreen;
