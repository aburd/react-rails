import _ from 'lodash';
import styled from 'styled-components';
import { color } from '../../StyleVariables';

export const ChatMagazineInfo = styled.div`
  margin: 0 0 2.5rem;
  padding: 0 0 3rem;
  border-bottom: 1px solid rgba(52, 52, 52, 0.1);

  .form_default {
    width: 25rem;
    margin: 0 0 0.75rem;
    padding: 0 0.5rem 0.5rem;

    &:hover,
    &:focus {
      border-color: rgba(58, 57, 86, 0.4);
      transition: background-color 0.2s ease-out;
    }
  }
`;
export const Default = styled.div`
  position: relative;
  margin: 0 0 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
  transition: border-color 0.1s ease-out;
  border: 1px solid
    ${props => {
      const { errors } = props;
      const possibleError = { type: 'title' };
      const hasError =
        errors &&
        errors.filter(error => _.isEqual(error, possibleError)).length;
      return hasError ? '#ea008f;' : 'rgba(58, 57, 86, 0.15)';
    }};
`;

export const DefaultFormWrapper = Default.extend`
  height: 200px;
  padding: 0;

  textarea {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: none;
    font-size: 16px;

    &.readonly {
      background: ${color.gray_lightest1};
    }

    &:focus {
      + .form_count {
        opacity: 1;
      }
    }
  }
`;

export const DefaultEdit = Default.extend`padding: 0 1rem 0.5rem;`;

export const TitleInput = styled.input`
  font-size: 1rem;
  width: 100%;
  margin: 0.5rem 0 0;
`;

export const DefaultInput = TitleInput.extend`
  font-size: 0.875rem;

  &:focus {
    + .form_count {
      opacity: 1;
    }
  }
`;

const FormDefault = Default.withComponent('input');
export const FormDefaultInput = FormDefault.extend`
  border-radius: 0;
  font-size: 0.875rem;
  font-weight: bold;
  color: ${color.white};
  margin: 0;
  width: 160px;
  margin-left: 40px;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px;

  &:hover {
    border: 1px solid ${color.white};
  }
`;

export const QuickInput = styled.input`
  color: #0086ff;
  font-size: 1rem;
  padding: 0.5rem 1.25rem 0.5rem;
  border: 1px solid ${props => {
    const {
      errors,
      messageId,
      quickReplyId,
      quickReplyChoiceId,
    } = props;
    const possibleError = {
      messageId,
      quickReplyId,
      quickReplyChoiceId,
      type: 'quick_reply_choice',
    };
    const hasError = errors && errors.filter(error => _.isEqual(error, possibleError))
      .length;
    if (hasError) {
      return '#ea008f !important';
    }
    return '#288ef7';
  }};
  border-radius: 50px;
  background: #fff;
  width: 150px;
  margin: 0 1rem 0 0;
`;

export const InfoMember = styled.div`
  color: rgba(58, 57, 86, 0.4);
  margin: 0 0 0.75rem;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  &::before {
    margin: 0 0.5rem 0 0;
    content: '\\e936';
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const InfoDate = InfoMember.extend`
  &:hover {
    opacity: 1;

    &::before {
      opacity: 0.7;
    }
  }

  &::before {
    content: '\\e915';
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const FormCount = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${color.white};
  background: ${color.gray_lighter};
  padding: 0.3rem 0.5rem;
  border-radius: 2px 0 4px 0;
  letter-spacing: 0.05em;
  line-height: 1;
  transition: opacity 0.2s ease-out;
  font-size: 0.625rem;
`;

export const QuickFormCount = FormCount.extend`border-radius: 2px 0 18px 0;`;
export const QuickReplyFormCount = QuickFormCount.extend`
  bottom: 1px;
  right: ${props => {
    if (props.isLast && props.quickIterator === 9) {
      return '17px';
    } else if (props.isLast) {
      return '57px';
    }
    return '17px';
  }};
`;

export const ElementFormCount = FormCount.extend`border-radius: 2px 0 4px 0;`;

export const FormElementItemContainer = styled.div`position: relative;`;

export const FormElementItem = styled.input`
  padding: 0.25rem 0.5rem;
  display: block;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    border-color: rgba(58, 57, 86, 0.15);
  }

  &.title {
    font-size: 0.875rem;
    font-weight: bold;
    height: 3.75rem;
    line-height: 1.2;
  }

  &.subtitle {
    font-size: 0.75rem;
  }

  &.url {
    line-height: 1;
    font-size: 0.75rem;
  }
`;

const FormElementItemText = FormElementItem.withComponent('textarea');
export const FormElementItemTextArea = FormElementItemText.extend`
  border: ${props => {
    const {
 messageIterator, itemId, articleId, errors,
} = props;
    const possibleError = {
      messageIterator,
      itemId,
      articleId,
      type: 'general',
    };
    const hasError =
      errors && errors.filter(error => _.isEqual(error, possibleError)).length;
    return hasError ? '1px solid #ea008f' : 'none';
  }};
  &:hover {
    border: solid 1px rgba(58, 57, 86, 0.15);
  }
  &:focus {
    + .form_count {
      opacity: 1;
      transition: opacity 0.1s ease-out;
    }
  }
`;

export const FormListItem = FormElementItem.extend``;
const FormListItemText = FormListItem.withComponent('textarea');
export const FormListItemTextArea = FormListItemText.extend`
  border: 1px solid ${props => {
    const {
      errors,
      messageId,
      itemId,
      articleId,
      } = props;
    const possibleError = {
      messageId,
      itemId,
      articleId,
      type: 'list',
    };
    const hasError = errors && errors.filter(error => _.isEqual(error, possibleError))
      .length;
    if (hasError) {
      return '#ea008f !important';
    }
    return 'transparent';
  }};

  &:focus {
    + .form_count {
      opacity: 1;
      transition: opacity 0.1s ease-out;
    }
  }
`;

export const FormElementItemTagContainer = styled.div`
  border: 1px solid #fff;
  padding: 0 0.5rem 0.375rem;
  border-radius: 4px;
  overflow: scroll;

  &.scroll_tags {
    pointer-events: auto;
    &:hover {
      border-color: #fff;
    }
  }

  input {
    width: 8.75rem;
    margin: 0 0 0 0.5rem;
    padding: 5px 5px 3px 5px;
  }

  &:hover {
    border-color: rgba(58, 57, 86, 0.15);
  }

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 0;
  }
`;

export const ListHeadingItemTagContainer = styled.div`padding: 0.5rem;`;

export const FormGroupTagContainer = styled.div`
  display: inline-block;
  vertical-align: text-bottom;
`;
