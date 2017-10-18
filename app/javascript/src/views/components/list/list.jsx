import _ from 'lodash';
import styled from 'styled-components';
import { color } from '../../StyleVariables';

// To be used for icons with mountain icon
const imgIcon = styled.div`
  position: relative;

  &:before {
    position: absolute;
    content: '\\e923';
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;

export const AddListHead = styled.div`
  width: 16.5rem;
  margin: 0 0 0.25rem;

  a {
    display: block;
    background: #fff;
    text-align: center;
    color: ${color.gray_lightest};
    border-radius: 1rem 1rem 0.25rem 0.25rem;
    padding: 0.9375rem 0 1.0625rem;
    font-size: 1rem;
    border: 1px solid ${color.gray_lightest};

    &:hover {
      cursor: pointer;
      background: ${color.hover_list_head};
    }

    &::before {
      font-family: 'bottree_icons';
      font-size: 24px;
      vertical-align: middle;
      content: '\\e905';
    }
  }
`;

export const ListHeadItemContainer = styled.div`
  margin: 0 0 0.25rem;
  background: #fff;
  border: 1px solid ${color.gray_lighter};
  border-radius: 1rem 1rem 0.25rem 0.25rem;

  &.hover {
    border: 1px solid #ea008f;
  }

  &:hover {
    .item_delete {
      display: block;
    }
  }

  &.item {
    width: 16.5rem;
    position: relative;
  }

  .readonly {
    border-color: transparent;
  }

  .list_header_input {
    color: #ffffff;
  }

  .form_list_item_input {
    padding: 0.25rem 0.5rem;
    display: block;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    position: relative;

    &:focus {
      border-color: rgba(58, 57, 86, 0.4);
    }
  }

  .title {
    height: 2rem;
    font-size: 0.875rem;
    font-weight: bold;
    height: 3.75rem;
    line-height: 1.2;
  }

  .subtitle {
    font-size: 0.75rem;
  }

  .url {
    line-height: 1;
    font-size: 0.75rem;
  }
`;

export const ListHeadItemInput = styled.input`
  padding: 0.25rem 0.5rem;
  display: block;
  width: 100%;
  border: ${props => {
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
      return '1px solid #ea008f !important';
    }
    return '1px solid transparent';
  }};
  border-radius: 4px;
  position: relative;

  &:focus {
    border-color: rgba(58, 57, 86, 0.4);
  }
`;

export const ListHeadBg = styled.div`
  padding: 0.5rem 0.5rem 0 0.5rem;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px 15px 0 0;

  .list_button_area {
    display: inline-block;

    .button_setting_area {
      margin-top: 20px;
      margin-left: -106px;
    }
  }

  .form_list_heading_title,
  .form_list_heading_subtitle,
  .form_list_heading_url {
    position: relative;

    input:focus {
      + .form_count {
        opacity: 1;
        transition: opacity 0.1s ease-out;
      }
    }
  }

  .form_list_item_input {
    &.title {
      height: 2rem;
    }
  }
`;

export const ListOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 73%;
  background: rgba(27, 32, 38, 0.5);
  border-radius: 15px 15px 0 0;
`;

export const ListButtonArea = styled.div`display: inline-block`;

export const ListBtnText = styled.p`
  font-size: 0.75rem;
  color: #288ef7;
  padding: 0.1875rem 0.75rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const AddListBtn = styled.div`
  .add_list_button {
    display: inline-block;
    position: relative;
    margin: 0.5rem 0;

    > a {
      display: block;
      font-size: 0.75rem;
      color: #adadb9;
      padding: 0.4375rem 0.75rem;
      border-radius: 3px;
      border: 1px solid #adadb9;

      &::before {
        font-size: 0.75rem;
        content: '\\e905';
        font-family: 'bottree_icons';
      }
    }

    a:hover {
      cursor: pointer;
    }
  }
`;

export const ListNormalItemContainer = AddListBtn.extend`
  padding: 0.5rem;
  background: #fff;
  border: 1px solid rgba(58, 57, 86, 0.4);
  border-radius: 0.25rem;
  margin: 0 0 0.25rem;

  &.hover {
    border: 1px solid #ea008f;
  }

  &:hover {
    .item_delete {
      display: block;
    }
  }

  .item {
    width: 16.5rem;
    position: relative;
  }
`;

export const ListNormalItemFormContainer = styled.div`
  position: relative;
  width: 72%;
`;

export const ListItemTitle = ListNormalItemFormContainer.extend`
  display: inline-block;
  vertical-align: top;
`;

export const ListNormalThumb = imgIcon.extend`
  display: inline-block;
  margin-left: 4px;
  border-radius: 4px;
  width: 3.75rem;
  height: 3.75rem;
  border: 1px solid rgba(58, 57, 86, 0.2);

  &:hover {
    .upload_popup {
      display: block;
    }
  }

  &::before {
    color: rgba(58, 57, 86, 0.2);
  }

  .upload_popup {
    margin-top: 3.25rem;
    margin-right: -1.125rem;

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);

      p:hover {
        cursor: pointer;
        opacity: .7;
      }
    }
  }
`;

export const UploadPopup = styled.div`
  display: none;
  background-color: rgba(58, 57, 86, 0.9);
  position: absolute;
  top: 0;
  right: 0;
  width: 14.5rem;
  height: 6.625rem;
  border-radius: 4px;
  z-index: 2;

  .center p {
    color: #fff;

    &::before {
      font-family: 'bottree_icons';
      content: '\\e92d';
      font-size: 24px;
      vertical-align: middle;
    }

    &.upload {
      margin: 0 0 0.5rem;
      font-weight: bold;
    }

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }

  &::before {
    top: 0;
    right: 0;
    position: absolute;
    border-style: solid;
    content: '';
    border-color: transparent transparent rgba(58, 57, 86, 0.9) transparent;
    border-width: 0 8px 8px 8px;
    margin-top: -8px;
    margin-right: 38px;
  }
`;

export const FormListFileUpload = imgIcon.extend`
  float: right;
  width: 1.375rem;
  height: 1.125rem;
  border: 1px solid #ffffff;
  border-radius: 1px;
  margin-top: 1rem;
  margin-right: 0.625rem;

  &::before {
    color: #ffffff;
    font-size: 0.875rem;
  }

  &:hover {
    .upload_popup {
      display: block;
    }
  }

  .upload_popup {
    margin-top: 1.5rem;
    margin-right: -2.25rem;

    .center {
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

export const ListItemArea = styled.div`
  .add_list_normal_item_button {
    width: 16.5rem;
    text-align: center;
    border: 1px solid ${color.gray_lightest};
    border-radius: 0 0 1rem 1rem;

    a {
      border-radius: 0 0 1rem 1rem;
      display: block;
      padding: 0.875rem 0 0.75rem;
      color: ${color.gray_lighter};

      &:hover {
        background: ${color.bg_lighter};
        cursor: pointer;
      }

      &::before {
        content: '\\e905';
        font-family: 'bottree_icons';
        font-size: 24px;
        vertical-align: middle;
      }
    }
  }
`;
