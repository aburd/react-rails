import styled from 'styled-components';
import { Link } from 'react-router';
import { color } from '../../StyleVariables';

// Default buttons
export const DefaultBtn = styled.div`
  color: ${color.gray_light};
  border: 1px ${color.gray_lighter} solid;
  background: none;
  transition: background-color 0.2s ease-out;
  text-align: center;
  display: inline-block;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  padding: 0.5rem 1.5rem;
  line-height: 1;
  border-radius: 50px;
  cursor: pointer;
`;

export const DefaultBeforeBtn = styled.a`
  &::before {
    color: ${color.gray_lighter};
    font-family: 'bottree_icons';
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const SubmitBtn = DefaultBtn.extend`
  padding: 0.75rem 1.5rem;
  color: ${color.white};
  font-weight: bold;
  background: linear-gradient(90deg, #8994ff 5%, ${color.purple_shade} 95%);
  border: none;
  min-width: 8rem;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.1s ease-out;
  }
`;

const BtnLink = DefaultBtn.withComponent(Link);
const SubmitBtnLink = SubmitBtn.withComponent(Link);
const BtnS = DefaultBtn.withComponent('a');

export const ReturnToSettingsBtn = SubmitBtnLink.extend`
  margin-right: 20px;
  color: ${color.gray_light};
  font-weight: normal;
  border: 1px ${color.gray_lighter} solid;
  background: none;
  letter-spacing: .05em;
  padding: .688rem 1.5rem;
  border-radius: 50px;

  &:hover {
    cursor: pointer;
    color: ${color.gray_light};
    background-color: ${color.gray_lightest2};
    transition: background-color .1s ease-out;
    opacity: 1;
  }
`;

export const StopDisconnectBtn = ReturnToSettingsBtn.extend``;

export const SettingsCancelBtn = ReturnToSettingsBtn.withComponent('a');

export const SettingsEditBtn = SubmitBtnLink.extend`
  letter-spacing: .05em;
  padding: .688rem 1.5rem;
  border: 1px ${color.purple_shade} solid;
  transition: opacity .2s ease-out;
  letter-spacing: .05em;
  min-width: 8rem;
`;

export const SettingsSaveBtn = SubmitBtnLink.extend`
  letter-spacing: .05em;
  padding: .688rem 1.5rem;
  border: 1px ${color.green_border} solid;
  background: ${color.linear_green};
  transition: opacity .2s ease-out;
  letter-spacing: .05em;
  min-width: 8rem;
`;

export const SettingsConnectionBtn = BtnS.extend`
  &:hover {
    cursor: pointer;
    color: ${color.gray_light};
    background-color: ${color.gray_lightest2};
    transition: background-color .1s ease-out;
  }
`;

export const ButtonSmall = BtnLink.extend`
  &:hover {
    cursor: pointer;
    color: ${color.gray_light};
    background-color: ${color.gray_lightest2};
    transition: background-color 0.1s ease-out;
  }
`;

export const SubmitBtnLinkSml = SubmitBtnLink.extend`padding: 0.5rem 1.5rem;`;
/*
  Scenario Main
*/
export const CreateScenarioBtn = SubmitBtnLink.extend``;
export const ScenarioModalBtn = CreateScenarioBtn.extend`
  display: inline-block;
`;
export const NoScenarioCreateBtn = CreateScenarioBtn.extend`
  padding: .813rem 1.5rem;
  font-size: 1.25rem;
  min-width: 15rem;
`;

/*
  Scenario Edit
*/
const ScenarioBtn = BtnLink.extend`margin: 0 8px 0 0;`;
export const CopyScenarioBtn = ScenarioBtn.extend``;
export const EditScenarioBtn = ScenarioBtn.extend``;
export const DeleteScenarioBtn = ScenarioBtn.extend``;
export const CancelScenarioEditBtn = ScenarioBtn.extend``;
export const SaveDraftScenarioBtn = ScenarioBtn.extend``;
export const ScheduleScenarioSendBtn = SubmitBtnLink.extend`
  text-align: center;
  padding: 0.5rem 1.5rem;
  background: ${color.linear_green};
  border: 1px ${color.gray_lighter} solid;

  &:hover {
    color: ${color.gray_light};
  }
`;

export const ButtonListCancel = DefaultBtn.extend`
  &:hover {
    cursor: pointer;
    color: ${color.gray_light};
    background-color: ${color.gray_lightest2};
    transition: background-color 0.1s ease-out;
  }
`;

export const AddBtnBtnContainer = styled.div`
  text-align: center;
  position: relative;

  &.add_list_button {
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
      background: none;

      &::before {
        font-size: 0.75rem;
        content: '\\e905';
        vertical-align: middle;
        font-family: 'bottree_icons';
      }

      &:hover {
        background: ${color.bg_select_hover};
        cursor: pointer;
      }
    }
  }

  > a {
    line-height: 1;
    font-family: 'bottree_icons';
    padding: 0.875rem 0 0.75rem;
    display: block;
    color: ${color.gray_lighter};
    background: ${color.white};
    cursor: pointer;
    border-radius: 0 0 1rem 1rem;

    &:hover {
      background: #fafafa;
    }

    &::before {
      content: '\\e905';
      font-size: 24px;
      vertical-align: middle;
      font-family: 'bottree_icons';
    }
  }
`;

export const ButtonSettingContainer = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background: ${color.white};
  margin-top: 30px;
  margin-left: -30px;
  width: 20rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  z-index: 1;
`;

export const SettingsButtonSettingContainer = ButtonSettingContainer.extend`
  margin-left: 41px;
`;

export const ButtonTypeSelList = styled.ul`
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid ${color.gray_80};

  li {
    display: inline-block;
    margin: 0 1rem 0 0;

    &.active a {
      font-weight: bold;
      color: ${color.main};
    }

    a {
      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
      display: block;
    }
  }
`;

export const SettingsButtonTypeList = ButtonTypeSelList.extend`
  li:last-child {
    margin: 0;
  }
`;

export const ButtonSettingContent = styled.div`
  position: relative;
  padding: 1rem 1.5rem 1.5rem;
`;

export const ButtonSelectArea = styled.div`
  text-align: center;
  margin: 1rem 0 0;
`;

export const DeleteIcon = DefaultBeforeBtn.extend`
  top: 0;
  right: 0;
  z-index: 1;
  background: ${color.white};
  border: 1px solid ${color.gray_lighter};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: none;
  position: absolute;

  &::before {
    color: ${color.gray_lighter};
    content: '\\e916';
    font-family: 'bottree_icons';
  }
`;

export const ListBtnDeleteIconContainer = styled.div`
  max-width: 12.5rem;
  position: relative;
  margin: 0.5rem 0 0.5rem 0.5rem;
  border: 1px solid ${color.messenger};
  border-radius: 3px;

  &.hover {
    border: 1px solid ${color.hover_delete};
  }

  &:hover {
    > a {
      display: block;
    }
  }
`;

export const ListBtnDeleteIcon = DeleteIcon.extend`
  margin-top: -1rem;
  margin-right: -1rem;

  &:before {
    position: absolute;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #ea008f;
    &::before {
      color: #ea008f;
    }
  }
`;

export const QuickDeleteIcon = DeleteIcon.extend`
  margin-top: -5px;
  margin-right: -5px;

  &::before {
    position: absolute;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid ${color.hover_delete};
    &::before {
      color: ${color.hover_delete};
    }

    + input {
      border: 1px solid ${color.hover_delete};
    }
  }
`;

export const QuickReplyDeleteIcon = QuickDeleteIcon.extend`
  right: ${props => {
    if (props.isLast && props.quickIterator === 9) {
      return '16px !important';
    } else if (props.isLast) {
      return '56px';
    }
    return '16px';
  }};
`;

export const UserReactionDeleteIcon = DefaultBeforeBtn.extend`
  top: 0;
  left: 0;
  margin-top: 2px;
  margin-left: -2rem;
  padding-right: 5px;
  display: none;
  position: absolute;
  height: 100%;

  &:hover {
    cursor: pointer;
    &::before {
      color: #ea008f;
    }
  }

  &::before {
    content: '\\e916';
  }
`;

export const ButtonDeleteIcon = QuickDeleteIcon.extend``;

export const ItemDeleteIcon = QuickDeleteIcon.extend`
  margin-top: -7px;
  margin-right: -7px;

  &.never {
    display: none !important;
  }

  &::before {
    position: absolute;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid #ea008f;

    &::before {
      color: #e4004d;
    }
  }
`;

export const AddQuickReplyBtn = styled.a`
  border: 1px solid ${color.gray_lightest};
  color: ${color.gray_lightest};
  border-radius: 50px;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  vertical-align: middle;

  &::before {
    content: '\\e905';
    position: absolute;
    font-family: 'bottree_icons';
    top: 50%;
    left: 50%;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    vertical-align: middle;
  }

  &:hover {
    background: #fff;
    cursor: pointer;
  }
`;

export const ButtonListContainer = styled.ul`
  border-top: 1px solid ${color.gray_lightest};

  &.readonly {
    pointer-events: none;
  }

  > li {
    background: ${color.white};
    text-align: center;
    border-bottom: 1px solid ${color.gray_lightest};
    font-size: 1rem;
    color: #006dff;
    position: relative;

    &:hover {
      .button_delete {
        display: block;

        &:hover {
          cursor: pointer;

          + p {
            border: 1px solid ${color.hover_delete};
          }

          &::before {
            color: #e4004d;
          }
        }
      }
    }

    > p {
      padding: 0.875rem;
      border: 1px solid transparent;
    }
  }
`;

export const AddElementItemBtn = styled.div`
  position: relative;
  margin: 0 10rem 0 0;
  width: 16.5rem;
  height: 23.5rem;
  vertical-align: top;
  display: inline-block;
  border: 1px solid ${color.gray_lightest};
  border-radius: 0.25rem 1rem 1rem 0.25rem;

  a {
    display: block;
    height: 100%;
    border-radius: 0.1875rem 0.9375rem 0.9375rem 0.1875rem;

    &::before {
      font-size: 2.125rem;
      color: ${color.gray_lighter};
      content: '\\e905';
      font-family: 'bottree_icons';
      position: absolute;
      top: 50%;
      left: 50%;
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }

    &:hover {
      cursor: pointer;
      background: ${color.bg_lighter};
    }
  }
`;

export const ElementShare = styled.p`
  text-align: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  margin-top: 1.6875rem;
  color: #c8c9ca;
`;

export const DefaultBtnS = BtnS.extend`
  padding: 5px 10px;

  &::before {
    content: '\\e905';
    font-family: 'bottree_icons';
    vertical-align: middle;
    font-size: 0.875rem;
  }
`;

export const DeleteBtn = styled.a`
  opacity: 0;
  transition-duration: 0.3s;
  position: absolute;
  top: 4px;
  margin-left: 0.25rem;
  color: ${color.gray_lighter};

  .icon_delete {
    font-family: 'bottree_icons';

    &::before {
      content: '\\e916';
      font-size: 24px;
      vertical-align: middle;
    }
  }

  &:hover {
    cursor: pointer;
    opacity: 1;
    color: ${color.hover_delete};
    &::before {
      color: #ea008f;
    }
  }
`;

export const CancelUserSearchBtn = DefaultBtn.extend`
  background: none;
  font-weight: normal;
  letter-spacing: 0.05em;
  padding: 0.75rem 1.5rem;

  &:hover {
    background-color: rgba(58, 57, 86, 0.05);
    transition: background-color 0.1s ease-out;
  }
`;
export const SubmitUserSearchBtn = SubmitBtn.extend`letter-spacing: 0.05em;`;
