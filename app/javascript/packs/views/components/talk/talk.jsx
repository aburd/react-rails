import styled from 'styled-components';
import { color } from '../../StyleVariables';
import { UserSearchBar, ProfilePic } from '../user_list/user_list';
import { ScheduleScenarioSendBtn, CreateScenarioBtn } from '../buttons/buttons';

export const TalkAreaContainer = styled.div`
  text-align: center;
  padding: 11% 0 0;

  .messenger_icon {
    width: 70px;
    margin: 0 auto;
  }

  .heading_text {
    font-size: 24px;
    margin: 24px 0 72px;
    text-align: center;
  }
`;

export const TalkWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const InboxContainer = styled.div`
  border-right: 1px solid ${color.off_white_border};
  text-align: center;
  color: ${color.header_font};
  flex: 0 1 auto;
  height: 100%;
`;

export const InboxHeader = styled.div`
  border-bottom: 1px solid ${color.off_white_border};
  padding: 10px 15px 25px 15px;
  color: ${color.gray_lighter};
  height: 20%;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;

  > a { color: ${color.main}; }
  input { display: none; }
`;

const SearchInput = UserSearchBar.withComponent('div');
export const FilterSearchContainer = SearchInput.extend`
  width: auto;
  margin-top: 15px;
  padding: .5rem .25rem .5rem .5rem;
  font-size: 0;
`;

export const FilterSearchInput = styled.input`
  font-size: 1rem;
  padding: 0 12px;
  flex: 2;
`;

export const InboxList = styled.ul`
  overflow: auto;
  max-height: 80%;
`;

export const MessageUser = styled.li`
  display: flex;
  border-bottom: 1px solid ${color.off_white_border};
  padding: 10px;
`;

export const MessageUserPic = ProfilePic.extend`
  align-self: center;
  margin: 0 1rem 0 0;
  width: 60px;
  height: 60px;
  border: ${props => props.gender === 'male' ? `1px solid ${color.man}` : `1px solid ${color.woman}`};
`;

export const MessageUserPicSml = MessageUserPic.extend`
  width: 25px;
  height: 25px;
  margin: 2px 0;
`;

export const UserContent = styled.div`
  text-align: left;
  color: ${color.black};
`;

export const ContentText = styled.p`
  font-size: ${props => props.fontSize ? props.fontSize + 'px' : 0};
  padding-bottom: ${props => props.padBtm ? props.padBtm + 'px' : 0};
  color: ${props => props.color};
  margin: ${props => props.margin ? props.margin : 0};
`;

export const ImportantLabel = styled.div`
  display: inline-block;
  padding: 0px 10px 5px;
  background-color: ${props => props.color ? props.color : 'none'};
  border-radius: 5px;
  font-size: 8px;
  color: ${props => props.color ? color.bg_lighter : color.black };
  font-weight: bold;
  border: 2px solid ${props => props.color ? 'none' : color.off_white_border };
  margin-left: auto;
`;

export const UserMisc = styled.div`
  margin-left: auto;
  text-align: right;

  input[type='range'] {
    -webkit-appearance: none;
    border-radius: 50px;
    background: rgba(143, 131, 255, 0.2);
    width: 35px;
    height: 14px;
    margin: 0;
  }
`;

export const PinBtn = styled.div`
  display: inline-block;
  padding-right: 15px;

  &::before {
    color: ${color.gray_lighter};
    display: inline-block;
    content: "\\e946";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const ReplyBtn = styled.div`
  display: inline-block;

  &::before {
    color: ${color.gray_lighter};
    display: inline-block;
    content: "\\e92b";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const ConversationContainer = InboxContainer.extend`
  flex: 3;
  border: 0;
  display: flex;
  flex-direction: column;
`;

export const ConversationArea = styled.div`
  flex: 10;
`;

export const SendMessageArea = styled.div`
  flex: 1;
  border-top: 1px solid ${color.off_white_border};
  display: flex;
  padding: 15px;
  align-items: center;
`;

export const ConversationHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${color.off_white_border};
  padding: 10px 10px 10px 25px;
  color: ${color.black};

  > p {
    font-size: 22px;
  }
`;

export const MessageSearchContainer = FilterSearchContainer.extend`
  width: 30%;
  padding: .25rem .25rem .25rem .5rem;
  margin: 0;
  display: flex;
`;

export const MessageInputWrapper = styled.div`
  border: 1px solid ${color.gray_border};
  border-radius: 5px;
  color: ${color.gray_text};
  background: ${color.bg_lighter};
  font-size: .875rem;
  margin-right: 20px;
  padding: .5rem .25rem .5rem .5rem;
  display: flex;
  flex: 2;
  align-items: center;

  input {
    flex: 2;
    font-size: 15px;
    padding: 0 12px;
  }
`;

export const MessageSpan = styled.span`
  margin-right: 20px;

  &::before {
    color: ${color.gray_lighter};
    display: inline-block;
    content: "\\e906";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const SendMessageBtn = ScheduleScenarioSendBtn.extend`line-height: normal`;

export const UserStatsContainer = InboxContainer.extend`
  flex: 1;
  border-right: 0;
  border-left: 1px solid ${color.off_white_border};
  display: flex;
  flex-direction: column;
`;

export const UserInformationWrapper = styled.div`
  padding: 10px;
  border-bottom: 1px solid ${color.off_white_border};
`;

export const UserInformationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  span {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }

  input[type='range'] {
    -webkit-appearance: none;
    border-radius: 50px;
    background: rgba(143, 131, 255, 0.2);
    width: 35px;
    height: 14px;
    margin: 0;
  }
`;

export const ProfileName = ContentText.extend`
  align-self: flex-start;
  padding-top: 5px;
`;

export const SettingBox = styled.div`
  border-left: 1px solid ${color.off_white_border};
  padding: 10px;
`;

export const FacebookProfileBtn = CreateScenarioBtn.extend`
  font-size: 0.55rem;
  margin-right: 17px;
`;

export const MemoTitle = styled.div`
  display: flex;
  align-items: baseline;

  .icon_help {
    margin-left: 10px;
  }
`;

export const MemoTextArea = styled.textarea`
  margin-top: 5px;
  width: 100%;
  height: 80%;
  border: 2px solid ${color.off_white_border};
  border-radius: 10px;
  font-size: 11px;
  padding: 10px;
`;

export const MemoContainer = UserInformationWrapper.extend`
  border-bottom: 0;
  text-align: left;
  flex: 1;
  padding: 15px;
`;
