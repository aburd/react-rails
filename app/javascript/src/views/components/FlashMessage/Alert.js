import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {opacity: 0;}
  10%,90% {opacity: 1;}
  100% {opacity: 0;}
`;

const Alert = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  background: linear-gradient(90deg, #58e2c5, #4bdaee);
  color: #fff;
  opacity: 1;
  animation: ${fadeInOut} ${props => props.time / 1000}s linear;
`;

export default Alert;
