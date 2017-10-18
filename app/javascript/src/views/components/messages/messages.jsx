import styled from 'styled-components';
import { DefaultBeforeBtn } from '../buttons';
import { color } from '../../StyleVariables';

export const Message = styled.li`
  margin: 3.5rem 0 3.5rem 2rem;
  position: relative;
  padding: 0 7rem 0 1rem;
  border-left: 3px solid ${color.bg_darker};
  display: table;
  white-space: nowrap;

  .item {
    width: 16.5rem;
    position: relative;
  }

  &.hover {
    border-left: 3px solid ${color.hover_delete} !important;
  }

  &:hover {
    border-left: 3px solid ${color.border.title_left};

    .message_delete_icon {
      display: block;
      &.hidden {
        display: none;
      }
    }
  }

  &.readonly,
  .readonly {
    border-left: none;
    .message_delete_icon {
      display: none;
    }
  }
`;

export const MessageDeleteIcon = styled.a`
  top: 0;
  left: 0;
  margin-top: 7px;
  margin-left: -33px;
  padding-right: 6px;
  height: 100%;
  display: none;
  position: absolute;

  &:hover {
    cursor: pointer;
    &:before {
      color: ${color.hover_delete};
    }
  }

  &::before {
    color: ${color.gray_lighter};
    content: "\\e916";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const TextMessageContainer = Message.extend``;
export const ListMessageContainer = Message.extend``;
export const MediaMessageContainer = Message.extend`line-height: 1;`;
export const GenericMessageContainer = Message.extend`
  padding: 0 0 0 1rem;

  .element_item_area {
    display: inline-block;

    .item:nth-child(1) {
      border-radius: 1rem 0.25rem 0.25rem 1rem;

      .element_item_thumb {
        border-radius: 0.9375rem 0 0 0;

        div:nth-child(2) {
          border-radius: 0.9375rem 0 0 0;
        }
      }
    }
  }
`;

const HoverShowContainer = DefaultBeforeBtn.withComponent('div');

export const HoverShow = HoverShowContainer.extend`
  display: none;
  background-color: ${color.hover_file};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    p.upload {
      color: ${color.white};
      margin: 0 0 0.5rem;
      font-weight: bold;

      &:hover {
        cursor: pointer;
        opacity: .7;
      }

      &::before {
        content: "\\e92d";
        font-family: 'bottree_icons';
        font-size: 24px;
        vertical-align: middle;
      }
    }
  }
`;

export const AddMessageListContainer = styled.ul`
  display: inline-block;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 1rem;

  li {
    text-align: center;
    display: inline-block;
    width: 9rem;
    border-right: 1px solid #ccc;

    &:last-child {
      border-right: none;
    }

    a {
      color: rgba(58, 57, 86, 0.4);
      display: block;
      font-size: 0.75rem;
      padding: 1rem;

      &:hover {
        cursor: pointer;
        opacity: .7;
      }

      &::before {
        font-size: 24px;
        vertical-align: middle;
        font-family: 'bottree_icons';
        display: block;
      }

      &.add_generic_message {
        &::before {
          content: "\\e908";
        }
      }

      &.add_list_message {
        &::before {
          content: "\\e90a";
        }
      }

      &.add_text_message {
        &::before {
          content: "\\e90b";
        }
      }

      &.add_media_message {
        &::before {
          content: "\\e909";
        }
      }
    }
  }
`;

export const ScrapingContainer = styled.div`
  font-size: 12px;
  padding: 0.7rem 0;
`;
