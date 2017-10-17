import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const SpinnerContainer = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  z-index: 5;
  margin: ${props => props.wide ? '0' : '0 0 0 240px'};
  width: ${props => props.wide ? '100%' : ''};

  .spinner {
    position: absolute;
    animation: ${rotate} 2s linear infinite;
    z-index: 2;
    top: 43%;
    left: 50%;
    margin: -25px 0 0 -25px;
    width: 50px;
    height: 50px;

    & .path {
      stroke: #8f83ff;
      stroke-linecap: round;
      animation: ${dash} 1.5s ease-in-out infinite;
    }
  }
`;

const Spinner = props => {
  const { wide } = props;
  return (
    <SpinnerContainer wide={wide}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="7"
        />
      </svg>
    </SpinnerContainer>
  );
};

Spinner.propTypes = { wide: PropTypes.bool };

export default Spinner;
