import styled from 'styled-components';
import { color } from '../../StyleVariables';

export const HeadTopBottom = styled.div`
  margin: 0 2rem;
  position: relative;
`;

export const MainMenuList = styled.ul`
  li {
    display: inline-block;
    margin: 0 3rem 0 0;
    vertical-align: bottom;

    a {
      display: block;
      border-bottom: 4px solid #fff;
      font-size: 0.875rem;
      color: #b3b2cf;
      padding: 0 0 0.625rem;
      line-height: 1;

      &:hover {
        border-bottom: 4px solid #8a7dff;
        opacity: .7;
      }
    }
    &.active {
      a {
        border-bottom: 4px solid #8a7dff;
      }
    }
  }
`;

export const HeadBottom = HeadTopBottom.extend``;
export const HeadTop = HeadTopBottom.extend`

  h1 {
    width: 60px;
    text-align: center;
    margin: 0 auto;
    line-height: 48px;
  }

  .circle_icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50px;
    border: 1px solid rgba(58,57,86,0.1);
    display: inline-block;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
`;

export const Head = styled.div`
  position: absolute;
  top: 0;
`;

export const HeadLeft = Head.extend`
  left: 0;
`;

export const HeadRight = Head.extend`
  right: 0;
`;

export const HeadTopContainer = styled.div`
  height: 48px;
  position: relative;
`;

export const HeadBottomContainer = styled.div`
  height: 48px;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  z-index: 1;
`;

export const WelcomeButtonArea = styled.div`
  position: fixed;
  text-align: right;
  top: 0;
  z-index: 1;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 12px 1.5rem 16px;
  background: ${color.background.off_white};
`;
