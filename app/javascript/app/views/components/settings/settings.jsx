import styled from 'styled-components';
import { color } from '../../StyleVariables';
import { Default, TitleInput } from '../forms';
import { DefaultBtn, SubmitBtn } from '../buttons';
import { UserInfoModalContainer } from '../modals';

export const SettingsArea = styled.div`
  padding: 2.5rem 3.5rem;
  background: ${color.bg_darker};
  height: 100vh;
`;

export const SettingsSection = styled.div`
  min-width: 990px;
  padding: 3.5rem;
  background-color: ${color.bg_lighter};
  border-radius: 8px;
  border: 1px solid ${color.border_setting_section};
`;

export const ReactionSection = styled.div`
  display: inline-block;
  width: 680px;
  height: 100%;
  padding: 3.5rem 2.5rem;
`;

export const ChatContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${color.border_setting_section};
  margin: 0 auto;
  width: 600px;
  height: 100%;
  overflow: scroll;
  background-color: ${color.bg_lighter};
`;

export const SettingsSectionCodeArea = SettingsSection.extend`
  text-align: center;

  .explain_text {
    font-size: 1.25rem;
    margin: 0 0 3.5rem;
  }

  .supplementary {
    font-size: 14px;
    color: ${color.gray_light};
    margin: 40px 0 0;
  }
`;

export const PageInfo = styled.div`
  text-align: center;
  margin: 0 0 2.5rem;

  .fb_page_name {
    margin: 0 auto 2.1875rem;
    font-size: 1rem;
    margin: 0 auto 1.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 12.5rem;
  }
`;

export const FBPageThumb = styled.div`
  border: 1px solid ${color.gray_normal};
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50px;
  margin: 0 auto 0.5rem;
  position: relative;
`;

export const SettingMenuList = styled.ul`
  li {
    padding: 1.125rem 1rem 1.125rem;
    border-top: 1px solid ${color.gray_lightest};

    p {
      width: 42%;
      display: inline-block;

      &.first_text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    a {
      float: right;
    }
  }
`;

export const ModalLarge = UserInfoModalContainer.extend`
  top: 11.5px;
  left: 240px;
  background: ${color.bg_lighter};
  z-index: 100;
  border-radius: 8px;
  width: 960px;
  height: 692px;
  padding: 3.5rem;
`;

export const UserSettingArea = styled.div`
  display: inline-block;
  width: 400px;
  margin: 0 50px 0 0;
  height: 500px;
  overflow: scroll;

  .modal_heading {
    font-size: 1.5rem;
    margin: 0 0 2rem;
  }

  .modal_bot_setting_sub_title {
    margin: 0 0 1rem;
  }
`;

export const WelcomeBoardForm = Default.extend`
  padding: 0.75rem;
  margin: 0;
  height: 200px;
`;

const TextAreaInput = TitleInput.withComponent('textarea');
export const WelcomeBoardDefaultInput = TextAreaInput.extend`
  border: none;
  margin: 0;
  height: 100%;

  &:focus {
    + .form_count {
      opacity: 1;
      transition: opacity 0.1s ease-out;
    }
  }
`;

export const BotSettingSampleWelcome = styled.div`
  display: inline-block;
  width: 320px;
  height: 570px;
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(/images/img_phone_welcome_board.png);
`;

export const BotSettingSampleMain = BotSettingSampleWelcome.extend`
  background-image: url(/images/img_persistent_menu_sample.png);
`;

export const BotSettingSampleDefault = BotSettingSampleWelcome.extend`
  position: relative;
  background-image: url(/images/phone.png);
`;

export const ModalButtonArea = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${color.white};
  text-align: right;
  padding: 1rem;
  border-top: 1px solid ${color.gray_lightest};
  border-radius: 0 0 8px 8px;
`;

export const DefaultCancelBtn = DefaultBtn.extend`
  letter-spacing: 0.05em;
  padding: 0.75rem 1.5rem;
  min-width: 8rem;
  margin: 0 0.5rem 0 0;

  &:hover {
    cursor: pointer;
    color: ${color.gray_light};
    background-color: ${color.gray_lightest2};
    transition: background-color 0.1s ease-out;
  }
`;

export const DefaultSubmitBtn = SubmitBtn.extend`letter-spacing: 0.05em;`;

const DefaultSubmitA = DefaultSubmitBtn.withComponent('a');
export const DefaultSubmitABtn = DefaultSubmitA.extend``;

export const ButtonSave = styled.button`
  text-align: center;
  border: 1px #4bdaef solid;
  background: ${color.linear_green};
  color: ${color.white};
  font-weight: bold;
  transition: opacity 0.2s ease-out;
  display: inline-block;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  padding: 0.75rem 1.5rem;
  line-height: 1;
  border-radius: 50px;
  min-width: 8rem;
`;

export const PersistentMenu = styled.ul`
  > li {
    text-align: center;
    position: relative;
    border: 1px solid ${color.gray_lightest};
    border-radius: 3px;
    padding: 1rem;
    margin: 0 0 0.5rem;

    > p {
      color: ${color.messenger};
    }

    > a {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 16px;
      color: ${color.gray_lighter};
    }

    .icon_delete {
      margin-right: 42px;
      &:hover {
        color: ${color.hover_delete};
        cursor: pointer;
      }
    }

    .icon_edit {
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const AddPersistentMenu = styled.div`
  border: 1px solid ${color.gray_lightest};
  border-radius: 3px;
  text-align: center;
  margin: 1rem 0;
  position: relative;

  > a {
    padding: 1rem;
    display: block;
    color: ${color.gray_lighter};

    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }

    &::before {
      content: '\\e905';
      font-size: 24px;
      vertical-align: middle;
      font-family: 'bottree_icons';
    }
  }
`;

export const FixedPersistentMenu = AddPersistentMenu.extend`
  padding: 1rem;
  margin: 0 0 0.5rem;
  color: ${color.messenger};
`;

export const DefaultLabelWrapper = styled.div`
  margin: 10px 0;

  label {
    position: relative;
    margin: 5px;
    color: ${color.gray_light};

    &:hover {
      cursor: pointer;
    }

    input {
      margin-right: 5px;
    }
  }
`;

export const ContentWrapper = styled.div`
  border: 1px solid rgba(58, 57, 86, 0.15);
  border-radius: 1rem;
  height: 490px;
  width: 280px;
  position: absolute;
  top: 62px;
  left: 20px;

  .phone_header {
    position: absolute;
    border-bottom: 1px solid rgba(58, 57, 86, 0.15);
    height: 65px;
    width: 278px;
    background: ${color.bg_select_hover};
    border-radius: 1rem 1rem 0 0;
  }
`;

export const PhoneContent = styled.div`
  position: absolute;
  height: 350px;
  width: 270px;
  background: ${color.white};
  top: 80px;
  left: 4px;

  .time {
    height: 30px;
    text-align: center;
    color: ${color.gray_light};
    font-size: 12px;
  }
`;

export const PhoneQuestion = styled.div`
  width: 87px;
  height: 25px;
  padding: 0 10px;
  margin-bottom: 20px;
  background: ${color.fb_blue};
  float: right;
  border-radius: 1rem;
  line-height: 23px;

  .text {
    color: ${color.white};
    font-size: 12px;
    margin-left: 3px;
  }
`;

export const PhoneAnswer = styled.div`
  position: relative;
  clear: both;

  .icon {
    display: inline-block;
    position: absolute;
    bottom: 8px;
    height: 20px;
    width: 20px;
    border: 1px solid black;
    border-radius: 1rem;
    overflow: hidden;
  }

  .answer {
    display: inline-block;
    background: ${color.bg_select_hover};
    width: 200px;
    margin: 10px 0 0 30px;
    padding: 10px 15px;
    clear: both;
    border-radius: 1rem;

    .answer_text_area {
      word-wrap: break-word;
      font-size: 12px;
    }
  }
`;

export const PluginSection = styled.div`
  margin: 0 0 56px;
  text-align: center;
  position: relative;

  .section_title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 32px;
  }
`;

export const PluginCard = styled.div`
  display: inline-block;
  width: 320px;
  height: 260px;
  padding: 36px;
  margin: 0 56px 0 0;
  border-radius: 8px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.1);
  position: relative;

  .form_textarea_heading {
    height: 64px;
  }

  .form_textarea_explain {
    margin: 0 0 12px;
  }
`;

const FormTextArea = styled.textarea`
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FormTextAreaHeading = FormTextArea.extend`
  font-size: 18px;
  color: ${color.main};
  font-weight: bold;
  line-height: 24px;
  padding: 8px 8px 6px;
  height: 64px;

  &:hover {
    border-color: ${color.purple_border};
  }
`;

export const FormTextAreaExplain = FormTextArea.extend`
  font-size: 14px;
  height: 60px;

  &:hover {
    border-color: ${color.gray_border2};
  }
`;

export const MessengerButton = styled.div`
  padding: 8px;
  background: #288ef7;
  border-radius: 50px;
  width: 100%;
  background-image: url(/images/icon_messenger_white.png);
  background-position: 28px 50%;
  background-size: 24px;
  background-repeat: no-repeat;
  text-align: center;
`;

export const FanpLink = styled.p`
  text-align: center;
  font-size: 12px;
  color: ${color.gray_73};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 16px;
`;

export const PluginSampleImg = styled.div`
  display: inline-block;
  background-image: url(/images/img_plugin_sample.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 480px;
  height: 290px;
`;

export const CodeCopySection = styled.div`
  text-align: center;
  position: relative;

  .section_title {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 32px;
  }
`;

export const FormCopy = styled.div`
  width: 320px;
  display: inline-block;
  border: 1px solid ${color.gray_lightest};
  padding: 12px 16px 4px;
  border-radius: 3px;
  height: 40px;
  margin: 0 8px 0 0;

  .copy_text {
    color: ${color.gray_light};
    width: 100%;
    font-size: 14px;
  }
`;

export const TotalCodeTextAreaBox = styled.div`
  width: 490px;
  height: 300px;
  border: 1px solid ${color.gray_lightest};
  padding: 1rem;
  margin: 0 auto 1rem;

  textarea {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const PageListArea = styled.div`
  background: ${color.white};
  text-align: center;
  margin: 0 auto;
  overflow-y: scroll;
  width: 67.5rem;
  padding: 3.4375rem 10.3125rem 3.75rem;

  > p {
    margin: 0 0 2.5rem;
    font-size: 1.125rem;
  }
`;

export const PageListContainer = styled.ul`
  overflow-y: scroll;

  li:first-child {
    border-left: 1px solid ${color.border_analytics};
  }

  li:nth-child(3n + 1) {
    border-left: 1px solid ${color.border_analytics};
  }
`;

export const PageListBlock = styled.li`
  display: inline-block;
  width: 15.625rem;
  float: left;
  border-right: 1px solid ${color.border_analytics};
  overflow: hidden;
  margin: 0 0 3rem;
`;

export const PageListImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

export const PageListName = styled.p`
  font-size: 1rem;
  margin: 0 auto 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 12.5rem;
`;
