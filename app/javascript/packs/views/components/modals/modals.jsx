import styled from 'styled-components';
import { color } from '../../StyleVariables';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalOverlay = Modal.extend`
  display: block;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: rgba(74, 74, 74, 0.8);
  opacity: 0;
  transition: opacity 0.2s ease-in, z-index 0.6s ease-out;

  &.show {
    opacity: 1;
    z-index: 50;
  }
`;

export const HideModalContainer = Modal.extend`
  width: 60rem;
  height: 43.75rem;
  border-radius: 10px;
  background: ${color.bg_darker};
  overflow: hidden;
  opacity: 0;
  transition: opacity 1s ease-in, z-index 0.6s ease-out;
  z-index: -1;

  &.show {
    opacity: 1;
    z-index: 100;
  }
`;

export const ModalContainer = HideModalContainer.extend`
  top: 5%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  width: 90%;
  height: 90%;
  display: block;

  .icon_close {
    margin-top: 24px;
    margin-right: 24px;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const DisconnectModalContainer = HideModalContainer.extend`
  width: 32rem;
  height: auto;
  padding: 3.5rem 4.625rem;
  text-align: center;
  display: block;
  opacity: 1;
  z-index: 100;
  border-radius: 8px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .icon_close {
    margin-top: 24px;
    margin-right: 24px;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const HeadingText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: ${color.hover_delete};
  margin: 0 0 1.5rem;
`;

export const SubHeadingText = styled.p`
  margin: 0 0 3rem;
`;

export const UserInfoModalContainer = ModalContainer.extend`
  display: none;

  &.show {
    display: block;
    opacity: 1;
    z-index: 51;
  }
`;

export const ModalClose = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  color: ${color.gray_lighter};

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &::before {
    content: '\\e914';
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const UserInfoModalClose = ModalClose.extend`
  margin-top: 24px;
  margin-right: 24px;
`;

export const SettingsModalClose = ModalClose.extend`
  margin-top: 24px;
  margin-right: 24px;
`;

const ModalCloseSpan = ModalClose.withComponent('span');
export const PluginClose = ModalCloseSpan.extend`
  margin-top: 20px;
  margin-right: 16px;
`;

export const ModalMenuContainer = styled.div`
  display: inline-block;
  width: 17.5rem;
  height: 100%;
  padding: 1.5rem;
  margin: 0 0 2rem;
  border-right: 1px solid rgba(58, 57, 86, 0.2);
  background: #fff;

  p {
    font-weight: bold;
    margin: 0 0 1rem;
  }

  ul {
    li {
      margin: 0 0 0.5rem;

      a {
        font-size: 0.875rem;
        display: block;
        color: rgba(58, 57, 86, 0.4);

        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }

        &::before {
          font-weight: normal;
          content: '\\e91c';
          font-family: 'bottree_icons';
          font-size: 24px;
          vertical-align: middle;
        }
      }

      &.active a {
        color: #8a7dff;
        font-weight: bold;
      }
    }
  }
`;

export const ModalButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fff;
  text-align: right;
  padding: 0.5rem 1.25rem;
  border-top: 1px solid rgba(58, 57, 86, 0.2);

  .button_submit {
    text-align: center;
  }
`;

export const DisconnectModalButtonContainer = ModalButtonContainer.extend`
  padding: 1rem;
`;

export const ModalMainArea = styled.div`
  overflow: scroll;
  display: inline-block;
  height: 92%;
  bottom: 0;
  left: 281px;
  right: 0;
  position: absolute;
  padding: 0 2rem 4.5rem;
`;

export const UserSearchModalContainer = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 58.125rem;
  margin-top: 2rem;
  margin-left: 0.9375rem;
  box-shadow: 0 0 4px #777;
  background-color: #fff;
  z-index: 1;
  border-radius: 4px;
  padding: 2rem 2rem 0;

  &.expanded {
    .search_detail_params {
      display: block;
    }
  }
`;

export const UserSearchModalSubmenu = styled.div`
  display: inline-block;
  width: 275px;
  height: 100%;
  padding: 3rem 2rem;
  border-right: 1px solid ${color.gray_lightest};
  border-radius: 10px 0 0 10px;
  background: ${color.bg_lighter};
`;

export const UserInfoDetails = styled.div`
  margin: 0 0 2.5rem;
  text-align: center;

  &.female .profile_image {
    border: 4px solid ${color.woman};
  }

  &.male .profile_image {
    border: 4px solid ${color.man};
  }

  .profile_image {
    display: block;
    width: 128px;
    height: 128px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${props => `url(${props.image})`};
  }

  .user_name {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .user_id {
    font-size: 0.75rem;
    color: ${color.gray_light};
  }
`;

export const UserSearchMainArea = styled.div`
  display: inline-block;
  width: 680px;
  height: 100%;
  padding: 3.5rem 2.5rem;
`;

export const OpenRateElement = styled.div`
  margin-right: 1rem;
  display: inline-block;
  width: 17.75rem;
  height: 10rem;
  background: ${color.bg_lighter};
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${color.off_white};
  border-radius: 8px;

  .label {
    color: #3a3956;
    font-size: 1rem;
  }

  .graph_area {
    width: 100%;
    height: 100%;
  }
`;

export const MatchRateElement = OpenRateElement.extend`margin-right: 0;`;

export const TagElement = MatchRateElement.extend`
  display: block;
  width: 36.5rem;
  height: auto;

  .help {
    position: relative;
    display: inline-block;
    margin: 0 0 0 0.25rem;
  }

  .icon_help {
    display: inline-block;
    color: ${color.gray_lighter};
    transition: color 0.1s ease-in;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
      color: ${color.gray_lighter2};
      transition: color 0.1s ease-in;

      + .help_popup {
        opacity: 1;
        display: block;
      }
    }

    &::before {
      content: '\\e91a';
      font-size: 24px;
      vertical-align: middle;
      font-family: 'bottree_icons';
    }
  }
`;

export const MemoElement = TagElement.extend`
  textarea {
    width: 100%;
    height: 7.125rem;
    margin-top: 1rem;
    border-radius: 3px;
    border: 1px solid ${color.gray_lightest};
    padding: 1rem;
  }
`;

export const ModalSubmenuList = styled.ul`
  text-align: center;

  li {
    color: ${color.gray_light};

    &.active {
      color: ${color.main};
      font-weight: bold;
    }

    a {
      color: inherit;
      font-weight: inherit;
      display: block;
      height: 24px;
      margin-bottom: 16px;
      font-size: 0.875rem;
      transition-duration: 0.5s;

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }

      &::before {
        margin-right: 0.3125rem;
        font-weight: normal;
        vertical-align: sub;
      }

      &.icon_user {
        &::before {
          content: '\\e936';
          font-family: 'bottree_icons';
          font-size: 24px;
          vertical-align: middle;
        }
      }

      &.icon_reply {
        &::before {
          content: '\\e92b';
          font-family: 'bottree_icons';
          font-size: 24px;
          vertical-align: middle;
        }
      }
    }
  }
`;
