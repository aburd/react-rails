import styled from 'styled-components';
import { color } from '../../StyleVariables';

export const InitialQuestionAnswerContainer = styled.div`
  padding: 0 0 1.5rem;
  margin: 0 0 1.5rem;
  border-bottom: 1px solid rgba(200, 201, 202, 0.3);

  &.hidden {
    display: hidden;
  }
`;

const DisplayContainer = styled.div`
  vertical-align: top;
  display: inline-block;
`;

export const GroupTagContainer = DisplayContainer.extend`
  width: 21.875rem;
  margin: 0 2rem 0 0;
`;

export const Label = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  margin: 0 0 0.75rem;
`;

export const GroupTagList = styled.div`
  overflow: scroll;
  width: 100%;
  max-height: 12.125rem;
  border: 1px solid #c8c9ca;
  border-radius: 4px;
  padding: 0.75rem 2rem 0.75rem 0.75rem;

  li {
    border-bottom: 1px solid rgba(200, 201, 202, 0.3);
    padding-left: 0.625rem;
  }

  label {
    display: block;
    font-size: 0.75rem;
    padding: 0.5rem 0 0.5rem 1.5rem;
    margin: 0;
  }
`;

export const UserAnswerContainer = DisplayContainer.extend`width: 30rem;`;

export const UserAnswerListContainer = styled.li`
  position: relative;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;

  div {
    width: 11.25rem;
    display: inline-block;
    border: 1px solid #c8c9ca;
    border-radius: 3px;
    margin: 0 .5rem 0 0;

    select {
      font-size: 0.875rem;
      width: 100%;
      padding: 0.375rem 0.75rem;
      color: rgba(58, 57, 86, 0.6);
    }
  }

  &:hover {
    .delete_button {
      opacity: 1;
    }
  }
`;

export const SearchDetailContainer = styled.ul`
  padding: 0 30px 0 30px;
  overflow: visible;
  display: none;
  border-top: 1px solid rgba(200, 201, 202, 0.3);
  margin-top: 1.5rem;
  padding: 2rem 2rem 0 2rem;

  li {
    vertical-align: top;
    display: inline-block;
    margin: 0.5rem 3.125rem 1rem 0;
  }

  input {
    text-align: center;
    min-width: 60px;
  }
  input[type='number'],
  input[type='text'] {
    border: 1px solid rgba(200, 201, 202, 0.3);
    border-radius: 4px;
    height: 30px;
    text-align: center;
  }

  .input_number {
    width: 60px;
  }
`;

export const InputDateContainer = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid rgba(200, 201, 202, 0.3);
  border-radius: 4px;
  padding: 0.1875rem 0.375rem 0.1875rem 1.5625rem;
  width: 110px;

  input {
    border: none;
    width: 100%;
    height: 1.5rem !important;
    font-size: 11px !important;
    vertical-align: super !important;
    border: none !important;
  }

  &::before {
    color: rgba(58, 57, 86, 0.4);
    font-size: 1rem;
    position: absolute;
    top: 7px;
    left: 7px;
    vertical-align: middle;
    content: '\\e915';
    font-family: 'bottree_icons';
  }
`;

export const FormLabel = styled.label`
  margin: 0 1rem 0 0;
  padding: 0 0 0 1.5rem;
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 1.5rem;
  font-size: 0.875rem;
`;

export const ScrapingLabel = FormLabel.extend`
  font-size: 12px;
  background-image: ${props => `url(${props.labelImage})`}};

  &:hover {
    color: ${color.gray_light};
    cursor: pointer;
  }
`;

export const SearchUserController = styled.div`
  padding: 1rem;
  margin: 1.5rem -2rem 0;
  border-top: 1px solid rgba(200, 201, 202, 0.3);

  .search_detail_params_trigger {
    display: inline-block;
    font-size: 0.75rem;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

export const IconPullDown = styled.span`
  transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  display: inline-block;
  transition: all 0.25s ease;

  &::before {
    content: '\\e924';
    font-size: 24px;
    vertical-align: middle;
    font-family: 'bottree_icons';
  }
`;

export const UserSearchBtnList = styled.ul`
  display: inline-block;
  width: 48.75rem;
  text-align: right;

  li {
    text-align: center;
    display: inline-block;
    margin: 0 0.75rem 0 0;
  }
`;
