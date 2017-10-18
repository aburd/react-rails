import _ from 'lodash';
import styled from 'styled-components';
import { HoverShow } from '../messages';

export const TextItemContainer = styled.div`
  border: 1px solid rgba(58, 57, 86, 0.4);
  border-radius: 1rem;
`;

export const TextItemTextAreaContainer = styled.div`
  padding: 0.5rem;
  border-radius: 1rem 1rem 0 0;
  background: rgba(58, 57, 86, 0.06);
  position: relative;

  .form_count {
    border-radius: 2px 0 0;
  }
`;

export const TextItemTextArea = styled.textarea`
  width: 100%;
  height: 4.625rem;
  font-size: 0.875rem;
  padding: 0.5rem;
  display: block;
  width: 100%;
  color: #3a3956;
  border: 1px solid
    ${props => {
      const { errors, messageId } = props;
      const possibleError = {
        messageId,
        type: 'text',
      };
      const hasError =
        errors &&
        errors.filter(error => _.isEqual(error, possibleError)).length;
      return hasError ? '#ea008f' : 'transparent';
    }};
  background: #eeeef2;
  border-radius: 0.25rem;

  &:focus {
    + .form_count {
      opacity: 1;
      transition: opacity 0.1s ease-out;
    }
  }

  &:hover {
    border: 1px solid rgba(58, 57, 86, 0.15);
  }
`;

export const ElementItemContainer = styled.div`
  border: 1px solid rgba(58, 57, 86, 0.4);
  border-radius: 0.25rem;
  background: #fff;
  display: inline-block;
  margin: 0 0.5rem 0 0;
  vertical-align: top;

  &.item_hover {
    border: 1px solid #ea008f;
  }

  &:hover {
    .item_delete {
      display: block;
    }
  }
`;

export const ElementItemThumb = styled.div`
  height: 8.375rem;
  border-bottom: 1px solid rgba(58, 57, 86, 0.4);
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    .hover_show {
      display: block;
    }
  }
`;

export const ElementHoverShow = HoverShow.extend``;

export const UploadAfterHiddenElement = styled.div`
  text-align: center;
  width: 100%;
  color: rgba(58, 57, 86, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  &::before {
    font-family: 'bottree_icons';
    content: '\\e923';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const UploadAfterHiddenFile = UploadAfterHiddenElement.extend`
  &::before {
    content: '\\e90d';
    font-size: 3rem;
  }
`;

export const UploadAfterShow = styled.div`
  display: none;
  position: relative;
  height: 100%;
  overflow: auto;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const MediaUploadAfterShow = UploadAfterShow.extend`
  border-radius: 0.9375rem;
`;

export const ElementItemInnerContainer = styled.div`padding: 1rem;`;
