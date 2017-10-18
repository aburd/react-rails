import styled from 'styled-components';
import { color } from '../../StyleVariables';

export const BotlistContainer = styled.div`
  width: 960px;
  margin: 1.5rem auto 0;
  text-align: center;
  padding: 0 0 15rem;
`;

export const HeadingText = styled.p`
  margin: 0 auto 2rem;
  font-size: 1.25rem;
  text-align: center;
`;

export const BotListContainer = styled.ul`
  text-align: center;

  > li {
    width: 230px;
    height: 300px;
    display: inline-block;
    text-align: center;
    float: left;
    border: 1px solid ${color.gray_lightest};
    border-radius: 10px;
    position: relative;
    margin: 0 4px 8px 4px;

    > a {
      display: block;
      padding: 2rem 2rem 0;
      height: 100%;

      &:hover {
        opacity: .7;
        cursor: pointer;
      }
    }

    &.lock {
      background: ${color.lock};
    }

    .user_text {
      color: ${color.gray_light};
      font-size: .875rem;
    }

    .lock_icon {
      margin: 0 0 3.125rem;

      &::before {
        font-size: 7.5rem;
        color: ${color.gray_lighter};
        content: "\\e937";
        font-family: 'bottree_icons';
        vertical-align: middle;
      }
    }
  }
`;

export const BotName = styled.p`
  font-size: 1.125rem;
  margin: 0 0 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CircleImg = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid ${color.gray_lightest};
  border-radius: 50%;
  margin: 0 auto 50px;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const AddBotImg = CircleImg.extend`
  &::before {
    font-size: 3rem;
    color: ${color.gray_lighter};
    line-height: 120px;
    content: "\\e905";
    font-family: 'bottree_icons';
    vertical-align: middle;
  }
`;

export const SettingIcon = styled.span`
  color: ${color.gray_lighter};
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
    &::before {
      opacity: 0.7;
    }
  }

  &::before {
    font-size: 2rem;
    content: "\\e902";
    font-family: 'bottree_icons';
    vertical-align: middle;
  }
`;

export const BotSettingPullDown = styled.div`
  display: none;
  position: absolute;
  width: 8.75rem;
  top: 0;
  right: 0;
  margin-top: 2.5rem;
  z-index: 1;
  background-color: #fff;
  border: 1px solid ${color.gray_lightest};
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0;
  padding: .5rem 0;

  li a {
    display: block;
    font-size: .875rem;
    padding: .625rem 0;
    color: ${color.gray_light};

    &:hover {
      cursor: pointer;
      background-color: ${color.gray_light};
    }
  }
`;

export const CharacterArea = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  height: 100px;
  background: ${color.off_white_background2};

  &::before {
    content: "";
    display: inline-block;
    margin: -4rem auto 0;
    background-image: url(/images/character.png);
    background-size: contain;
    background-repeat: no-repeat;
    width: 120px;
    height: 126px;
  }
`;

export const BabbleContainer = styled.p`
  opacity: 0;
  border: 1px solid ${color.gray_lightest};
  padding: 32px;
  border-radius: 16px;
  width: 960px;
  margin: -15rem auto 0;
  background: ${color.white};
  position: relative;
  transition: opacity 0.3s ease-in;

  &.show {
    opacity: 1;
  }

  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: ${color.gray_lightest} transparent transparent transparent;
    border-width: 15px 15px 0 15px;
    bottom: 0;
    margin-bottom: -15px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }

  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-color: ${color.white} transparent transparent transparent;
    border-width: 15px 15px 0 15px;
    bottom: 0;
    margin-bottom: -13px;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
  }
`;
