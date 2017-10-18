import styled from 'styled-components';
import { PaginationContainer } from '../analytics/';
import { color, width } from '../../StyleVariables';

export const ContentArea = styled.div`
  width: 100%;
  margin: 0;
  background: ${color.bg_darker};
`;

export const MainContainer = styled.div`
  width: ${width.main_container};
  margin: 0 auto;
`;

export const MainContentArea = styled.div`
  padding: 2.5rem 0 0;
  overflow: scroll;
  min-height: 100vh;
`;

export const UserSearch = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
`;

export const UserSearchBar = styled.div`
  width: 60rem;
  border: 1px solid ${color.gray_border};
  border-radius: 3px;
  padding: .5rem .5rem .25rem;
  color: ${color.gray_text};
  background: ${color.bg_lighter};
  font-size: .875rem;

  &::before {
    color: ${color.gray_lighter};
    content: "\\e92c";
    font-family: 'bottree_icons';
    font-size: 24px;
    vertical-align: middle;
  }
`;

export const PagerWrapper = styled.div`
  height: 54px;

  .user_count {
    color: ${color.text_color};
    float: left;
  }
`;

export const PaginationWrapper = PaginationContainer.extend`
  width: auto;
  display: block;
`;

export const UserCard = styled.div`
  width: ${width.main_container};
  padding: 1rem 1.5rem 1.25rem;
  position: relative;
  margin-bottom: .5rem;
  border: 1px solid ${color.off_white};
  border-radius: .25rem;
  background: ${color.bg_lighter};
  display: flex;
  align-items: center;
  -webkit-transition: all .25s ease;
  -moz-transition: all .25s ease;
  -ms-transition: all .25s ease;
  -o-transition: all .25s ease;
  transition: all .25s ease;

  &.female .profile_image {
    border: 4px solid ${color.woman};
  }

  &.male .profile_image {
    border: 4px solid ${color.man};
  }

  ${'' /* &:hover {
    border-color: ${color.purple_light};
    background-color: ${color.purple_lightest};
    cursor: pointer;
  } */}
`;

export const ProfilePic = styled.div`
  width: 80px;
  height: 80px;
  display: inline-block;
  border-radius: 50%;
  margin: 0 1.5rem 0 0;
  background-size: cover;
  vertical-align: top;
  background-image: ${props => `url(${props.image})`};
`;

export const UserInfo = styled.div`
  display: inline-block;
  width: 27.75rem;

  .name {
    font-size: 1rem;
    margin: 0 0 .75rem;
  }

  .tag_area {
    margin-top: 1rem;
    width: 100%;
  }
`;

const RateArea = styled.div`
  display: inline-block;
  width: 110px;
  position: relative;
  border-left: 1px solid ${color.gray_border};
  padding: 0 1rem;

  .label {
    font-size: .75rem;
    color: ${color.gray_dark};
  }

  .value {
    .number {
      font-size: 1.625rem;
      margin-right: 2px;
    }

    .percent {
      font-size: .75rem;
      vertical-align: -webkit-baseline-middle;
    }
  }

  .diff_area {
    color: ${color.gray_lighter};
    font-size: .875rem;

    .diff_arrow {
      vertical-align: baseline;

      &::before {
        font-size: .875rem;
        color: ${color.gray_lighter};
        content: "\\e926";
        font-family: 'bottree_icons';
      }
    }

    .diff_value {
      font-size: .75rem;
      vertical-align: baseline;
    }
  }
`;

export const OpenRate = RateArea.extend``;
export const MatchRate = RateArea.extend`
  .diff_area {
    color: ${color.green_light};

    .diff_arrow {
      &::before {
        content: "\\e927";
        color: ${color.green_light};
      }
    }
  }
`;

export const AutoResponseSetting = styled.div`
  display: inline-block;
  width: 120px;
  height: 76px;
  font-size: .75rem;
  color: ${color.gray_dark};
  border-left: 1px solid ${color.gray_border};
  padding: 0 1rem;
  margin-left: auto;

  .auto_response {
    margin: 0 0 1.5rem;
  }
`;

export const BlockedText = styled.span`
  display: none;
  color: ${color.gray_lighter};
  position: absolute;
  top: 0;
  right: 0;
  margin-top: .625rem;
  margin-right: 1rem;
  font-size: .75rem;

  &::before {
    content: "\\e913";
    font-family: 'bottree_icons';
    color: ${color.gray_lighter};
    font-size: 1rem;
  }
`;

export const TagAreaContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
`;

export const TagAuto = styled.div`
  color: ${color.gray_light};
  margin: 0 0 .375rem;
`;

export const TagManual = TagAuto.extend`
  margin: 0;
`;

export const TagKindTextArea = styled.div`
  display: inline-block;
  vertical-align: top;

  .tag_kind_text {
    color: ${color.gray_lighter};
    font-size: .75rem;
    display: inline-block;
    vertical-align: top;
  }

  .icon_page_next {
    color: ${color.gray_lighter};
    position: relative;
    top: -.25rem;

    &::before {
      content: "\\e920";
      font-family: 'bottree_icons';
      vertical-align: middle;
      font-size: 24px;
    }
  }
`;

export const TagListWrapper = styled.div`
  position: relative;
  top: -.25rem;
  max-height: 3.75rem;
  width: 85%;
  display: inline-block;
  vertical-align: top;
  overflow-y: scroll;

  div:first-child {
    display: inline;
  }
`;

export const AutoWidthTag = styled.input`
  width: 36px;
  display: inline-block;
  box-sizing: content-box;
  border: none;
  ${'' /* background: none; */}
  ${'' /* display: none; */}
  color: ${color.gray_light};
  font-size: 12px;
  line-height: 1;
  background: ${color.bg_select_hover};
  margin: 0 4px 4px 0;
  padding: 6px 16px;
  border-radius: 20px;
  -webkit-transition: width .1s;
`;

export const NoDataMessage = styled.div`
  padding: .875rem;
  border: 1px solid ${color.error};
  margin: 3rem 0;

  p {
    font-size: 20px;
    color: ${color.error};
  }
`;

export const ManualTagInput = AutoWidthTag.extend`
  padding-right: 1.5rem;
`;

export const ManualTagWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: top;

  &:hover {
    a {
      opacity: 1;
    }
  }
`;

export const ManualTagDelete = styled.a`
  opacity: 0;
  transition: .1s linear opacity;
  color: ${color.gray_lighter};
  position: absolute;
  right: .625rem;
  bottom: 0.1rem;
  cursor: pointer;

  &::before {
    content: "\\e914";
    font-family: 'bottree_icons';
    font-size: 1rem;
    vertical-align: middle;
  }
`;

export const TagAppendBtn = styled.a`
  display: inline-block;
  height: 27px;
  width: 27px;
  padding: 0;
  position: relative;
  color: rgba(58,57,86,0.6);
  font-size: 12px;
  background: rgba(58,57,86,0.06);
  margin: 0 4px 4px 0;
  border-radius: 20px;
  -webkit-transition: width .1s;

  &::before {
    content: "\\e905";
    font-size: 24px;
    font-family: 'bottree_icons';
    vertical-align: middle;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
`;
