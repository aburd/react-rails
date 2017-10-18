import _ from 'lodash';
import styled from 'styled-components';
import { Default } from '../forms';

export const Container = styled.div`
  display: none;
  margin: 2rem 0 0 2rem;
  padding: 0 0 0 0.5rem;
  border-left: 3px solid transparent;
  position: relative;

  &.hover {
    border-left: 3px solid #ea008f !important;
  }

  &:hover {
    border-left: 3px solid rgba(57, 58, 86, 0.1);

    .user_react_delete {
      display: block;
    }
  }
`;

export const QuickReplyContainer = styled.div`
  padding: 0.5rem 0 0;
  display: none;
`;

export const QuickReplyListContainer = styled.ul`
  display: flex;

  li {
    position: relative;
    display: flex;
    margin: 0 1rem 0 0;

    &:hover {
      > a {
        display: block;
      }
    }

    input:focus {
      + .form_count {
        opacity: 1;
        transition: opacity .1s ease-out;
      }
    }
  }

  li:last-child {
    > a {
      right: 56px;
    }

    .add_quick_reply_choice {
      right: 0;
    }
  }

  &::before {
    color: rgba(58, 57, 86, 0.4);
    display: inline-block;
    margin: 0 0.75rem 0 0;
    content: "\\e92b";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const QuickReplyLabel = Default.extend`
  padding: 0 1rem 0.5rem;
  margin: 0.75rem 0 0;
  background: #fff;
  width: 20.625rem;
  border: 1px solid ${props => {
    const {
      errors,
      messageId,
      quickReplyId,
    } = props;
    const possibleError = {
      messageId,
      quickReplyId,
      type: 'quick_reply_label',
    };
    const hasError = errors && errors.filter(error => _.isEqual(error, possibleError))
      .length;
    if (hasError) {
      return '#ea008f !important';
    }
    return 'transparent';
  }};

  &:hover {
    border-color: rgba(58, 57, 86, 0.4);
    transition: background-color .2s ease-out;
  }
`;

export const IconReply = styled.span`
  &::before {
    color: rgba(58, 57, 86, 0.4);
    display: inline-block;
    margin: 0 0.75rem 0 0;
    content: "\\e92b";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const InputText = styled.span`
  color: rgba(58, 57, 86, 0.4);

  &::before {
    content: "\\e907";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const GroupTag = styled.span`
  color: rgba(58, 57, 86, 0.4);
  font-size: 0.75rem;
  border-radius: 2rem;
  background: rgba(58, 57, 86, 0.06);
  padding: 2px 18px 4px 10px;
  position: relative;
  margin: 0 4px 0 0;

  .icon_close {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 7px;
    margin-right: 7px;

    &:hover {
      cursor: pointer;
      &::before {
        color: #9b9b9b;
      }
    }

    &::before {
      font-size: 10px;
      color: rgba(155, 155, 155, 0.49);
    }

    &.readonly {
      display: none;
    }
  }
`;

export const UserReactionSetting = styled.div`
  margin: 1.5rem 0 0;
  height: 70px;
  width: 18.75rem;

  &.readonly {
    display: none;
  }

  .add_message_list {
    display: none;
  }

  &:hover {
    > a {
      display: none;
    }
    .add_message_list {
      display: inline-block;
    }
  }

  > a {
    border: 1px solid rgba(58, 57, 86, 0.2);
    font-size: 1rem;
    padding: 1.5rem 2.5rem;
    text-align: center;
    display: inline-block;
    color: rgba(58, 57, 86, 0.4);
    border-radius: 1rem;
    width: 100%;

    &::before {
      content: "\\e92b";
      font-family: 'bottree_icons';
      font-size: 24px;
      vertical-align: middle;
    }
  }
`;

export const AddMessageList = styled.ul`
  display: inline-block;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 1rem;
  width: 100%;

  &.readonly {
    display: none;
  }

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
    }
  }

  .add_quick_reply {
    a {
      &::before {
        display: block;
        content: "\\e906";
        font-family: 'bottree_icons';
        font-size: 24px;
        vertical-align: middle;
      }
    }
  }

  .add_user_input {
    a {
      &::before {
        display: block;
        content: "\\e907";
        font-family: 'bottree_icons';
        font-size: 24px;
        vertical-align: middle;
      }
    }
  }
`;
