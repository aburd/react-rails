import styled from 'styled-components';
import { color } from '../../StyleVariables';

export const AnalyticsSectionTitle = styled.div`
  font-size: 1.75rem;
  letter-spacing: 0.3rem;
  padding: 0px 0.25rem;
  margin: 0px 0px 0.5rem;

  .help {
    position: relative;
    display: inline-block;
    margin: 0px 0px 0px 0.25rem;
  }

  .icon_help {
    margin: 0px 0px 0.5rem;
    display: inline-block;
    color: ${color.gray_lighter};
    transition: color .1s ease-in;
    vertical-align: middle;

    &:hover {
      cursor: pointer;
      color: ${color.gray_lighter2};
      transition: color .1s ease-in;

      + .help_popup {
        display: block;
        opacity: 1;
      }
    }

    &::before {
      content: "\\e91a";
      font-size: 24px;
      vertical-align: middle;
      font-family: 'bottree_icons';
    }
  }
`;

export const HelpPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -1.75rem;
  margin-left: 2.5rem;
  display: none;
  opacity: 1;
  color: #ffffff;
  width: 22rem;
  font-size: 1rem;
  font-weight: lighter;
  line-height: 1.6;
  background: rgba(58, 57, 86, 0.9);
  border-radius: .5rem;
  padding: 1.5rem;
  letter-spacing: .025rem;
  transition: display 0s linear, opacity .2s linear, margin .2s linear;
  z-index: 2;

  &::before {
    position: absolute;
    top: 2rem;
    left: -.5rem;
    position: absolute;
    border-style: solid;
    content: "";
    border-color: transparent rgba(58, 57, 86, 0.9) transparent transparent;
    border-width: .5rem .5rem .5rem 0;
  }

  .help_popup_title {
    font-weight: bold;
    margin: 1.5rem 0 .25rem;
    letter-spacing: .01rem;
  }

  .help_popup_note {
    font-size: .75rem;
  }
`;

export const AnalyticsSection = styled.div`
  background-color: #fff;
  border: 1px solid #edf0f5;
  border-radius: 8px;
  margin: 0 auto 3rem;
  padding: 2.5rem;

  .analytics_area {
    margin: 0 0 2rem;
  }

  .text_center {
    text-align: center;

    span {
      &::before {
        font-size: 56px;
      }
    }
  }
`;

export const AnalyticsTitle = styled.div`
  font-size: 1.125rem;
  letter-spacing: .1rem;
  margin: 2rem 0 .5rem;
  padding: 2rem 0 0;
  line-height: 1;
  border-top: 1px solid rgba(58, 57, 86, 0.2);

  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border: none;
  }
`;

export const AnalyticsGraphArea = styled.div`
  height: 18rem;
  position: relative;
  margin-bottom: 2rem;
`;

export const GraphContainer = styled.div`
  display: inline-block;
  width: 80%;
  height: 100%;
`;

export const GraphContainerFull = GraphContainer.extend`
  width: 95%;
`;

export const OptionContainer = GraphContainer.extend`
  width: 20%;
`;

export const AnalyticsGraphOption = styled.div`
  width: 10%;
  float: left;
  position: relative;
  height: 100%;

  .analytics_graph_frequency {
    color: #4a4a4a;
    width: 100%;
    margin-bottom: 1rem;
    outline: none;
    border-radius: 0;
    font-size: .75rem;
  }

  .legend {
    text-align: left;

    label {
      display: block;
      margin-bottom: 0.7rem;

      input {
        margin-right: 8px;
        width: 14px;
        height: 14px;
        vertical-align: middle;
      }
    }
  }
`;

export const IconPulldown = styled.span`
  pointer-events: none;
  color: rgba(58, 57, 86, 0.4);
  position: absolute;
  top: -3px;
  right: 52px;
  display: inline-block;
  transition: all .25s ease;

  &::before {
    content: "\\e924";
    font-size: 24px;
    vertical-align: middle;
    font-family: 'bottree_icons';
  }
`;

export const LegendText = styled.text`
  font-family: "Noto Sans CJK JP";
  font-size: 14px;
  line-height: 14px;
  color: rgba(58, 57, 86, 0.6);
`;

export const AnalyticsDetail = styled.ul`
  position: relative;
  overflow: hidden;
  margin: 0 -1rem 2rem;

  &.analytics_detail_activeuser {
    li {
      width: 33.33%;
      float: left;
      padding: 0 1rem;
      border-right: 1px solid rgba(58, 57, 86, 0.1);

      &:nth-child(3) {
        border-right: 0;
      }
    }
  }

  &.analytics_detail_entry {
    li {
      width: 50%;
      float: left;
      padding: 0 1rem;

      &:nth-child(1) {
        border-right: 1px solid rgba(58, 57, 86, 0.1);
      }
    }
  }

  .analytics_detail_title {
    color: rgba(58, 57, 86, 0.8);
    margin: 0 0 1rem;
  }

  .analytics_graph_area {
    height: 8rem;

    .recharts-legend-wrapper {
      width: auto !important;
    }

    .recharts-surface {
      position: absolute;
    }
  }
`;

export const ActivationDetail = AnalyticsDetail.extend`
  margin: 0;
`;

export const Unit = styled.span`
  display: inline-block;
  font-size: .75rem;
  margin: 0 0 0 .23rem;
`;

export const PaginationContainer = styled.div`
  display: inline-block;
  width: 100%;

  ul {
    float: right;
    margin: 0 0 1.5rem;
  }

  li {
    display: inline-block;
    margin: 0 .375rem 0 .375rem;

    a {
      cursor: pointer;
      display: block;
      color: #4a4a4a;

      &:hover {
        color: #e2d7f6;
        transition-duration: 0.2s;
        opacity: 0.7;
      }
    }

    &.active {
      a {
        color: #834ce8;
      }
    }
  }

  li:first-child,
  li:last-child,
  li:nth-child(2),
  li:nth-last-child(2) {
    margin: 0;

    a {
      color: rgba(58, 57, 86, 0.4);
      font-family: 'bottree_icons';
      font-size: 24px;
      vertical-align: middle;
    }
  }

  li:first-child {
    a {
      &::before {
        content: "\\e91f";
      }
    }
  }

  li:nth-child(2) {
    a {
      &::before {
        content: "\\e921";
      }
    }
  }

  li:nth-last-child(2) {
    a {
      &::before {
        content: "\\e920";
      }
    }
  }

  li:last-child {
    a {
      &::before {
        content: "\\e91e";
      }
    }
  }
`;

export const CommentListContainer = styled.ul`
  margin: 1.5rem 0 0;

  li {
    position: relative;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(200, 201, 202, 0.3);

    .user_comment_element {
      display: inline-block;
    }

    .user_profile_image {
      width: 60px;
      height: 60px;
      margin-right: 20px;
      border-radius: 50%;
      background-size: cover;
    }

    .comment {
      font-size: .875rem;
      width: 49.0625rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .delivered_at {
      font-size: .75rem;
      color: #9b9b9b;
      position: absolute;
      top: 20px;
      right: 0;
    }
  }
`;

export const UserProfileImage = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 20px;
  border-radius: 50%;
  background-size: cover;
`;
