import styled from 'styled-components';
import { color, width } from '../../StyleVariables';

export const MainContent = styled.div`
  padding: 2.5rem 0;
  overflow: scroll;
  min-height: 100vh;

  .main_content_area_container {
    width: ${width.main_container};
    margin: 0 auto;
  }
`;

export const UserSearchPopup = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
`;

export const ContentMenu = styled.div`
  height: 56px;
  border-bottom: 1px solid #eee;
  padding: 12px 1.5rem 16px;
  background: ${color.background.off_white};
`;

export const ContentMenuLeft = styled.div`float: left;`;

export const LastUpdate = styled.span`
  font-size: 0.75rem;
  color: ${color.gray_lighter};
`;

export const ContentMenuRight = ContentMenuLeft.extend`float: right;`;

export const ContentArea = styled.div`
  margin: 0 0 0 240px;
  background: ${color.bg_darker};
`;

export const SettingsContentArea = ContentArea.extend`
  margin: ${props => props.pageList ? 0 : '0 0 0 240px' };
  width: ${props => props.pageList ? '100%' : ''};
`;

export const SettingsMainContent = styled.div`padding: 9.0625rem 0 9.0625rem`;

export const AnalyticsMenuRight = ContentMenuRight.extend`
  color: ${color.gray_lighter};
`;

export const AnalyticsPulldown = styled.div`
  position: relative;
  margin: .1875rem .5rem 0 0;
  font-family: 'bottree_icons' !important;

  .text {
    font-size: .875rem;
  }

  &:hover {
    opacity: .7;
    cursor: pointer;
  }

  &::before {
    content: "\\e915";
    font-size: 24px;
    vertical-align: middle;
    font-family: 'bottree_icons';
  }

  .icon_pulldown {
    display: inline-block;
    transition: all .25s ease;

    &::before {
      content: "\\e924";
      font-size: 24px;
      vertical-align: middle;
      font-family: 'bottree_icons';
    }
  }
`;

export const AnalyticsPullDownList = styled.div`
  display: none;
  position: absolute;
  width: 12rem;
  top: 2.5rem;
  left: -2.75rem;
  z-index: 1;
  background-color: ${color.white};
  border: 1px solid ${color.border.pale};
  border-radius: 5px;
  box-shadow: 1px 1px 2px 0;
  padding: 1rem 1.5rem 1rem 1.5rem;

  a {
    font-size: .875rem;
    display: block;
    padding: .5625rem 0 .5625rem 1rem;
    color: ${color.gray_light};

    &:hover {
      background-color: ${color.bg_select_hover};
    }
  }

  &::before {
    position: absolute;
    border-style: solid;
    content: "";
    border-color: transparent transparent ${color.border.pale} transparent;
    border-width: 0 12px 12px 12px;
    top: -13px;
    left: 157px;
  }

  &::after {
    position: absolute;
    border-style: solid;
    content: "";
    border-color: transparent transparent ${color.white} transparent;
    border-width: 0 12px 12px 12px;
    top: -11px;
    left: 157px;
  }
`;
