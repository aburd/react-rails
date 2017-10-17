import styled from 'styled-components';
import { color } from '../../StyleVariables';

export const Container = styled.div`
  position: absolute;
  background-color: #fff;
  width: 240px;
  border-right: 1px solid #d8d8e0;
  padding: 1rem;
  z-index: 1;
  height: 93vh;

  .button_submit {
    display: block;
  }
`;

export const UserScenarioList = styled.ul`
  border-top: 1px solid #ccc;
  margin: 0 -1rem;
  max-height: 92.5%;
  overflow-y: scroll;
`;

export const NewScenarioContainer = styled.div`
  text-align: center;
  margin: 0 0 1.5rem;
  width: 100%;
`;

export const UserScenario = styled.li`
  border-bottom: 1px solid #ccc;
  display: block;
  padding: 1rem;

  &:hover {
    cursor: pointer;
    background: #f0f0f0;
  }
`;

export const ScenarioTitle = styled.p`font-size: 0.875rem;`;

export const ScenarioDate = styled.span`
  font-size: 0.75rem;
  ${props => (props.status === 2 ? `color: ${color.gray_light}` : '')};
`;

export const AnalyticsSubMenuList = styled.ul`
  margin: 0 -1rem;

  li {
    &.active {
      > a {
        color: ${color.main};
        font-weight: bold;
      }
    }

    a {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;

      &:hover {
        color: ${color.main} !important;
        font-weight: bold;
      }
    }
  }
`;

export const SettingsSubMenuList = AnalyticsSubMenuList.extend`
  li.active {
    > a {
      color: ${color.main};
      font-weight: bold;
    }
  }
`;

export const SettingsInnerSubMenuList = AnalyticsSubMenuList.extend`
  margin: 0;
  padding: 0 0 0 24px;
`;
