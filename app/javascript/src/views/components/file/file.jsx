import _ from 'lodash';
import styled from 'styled-components';

export const FileItemContainer = styled.div`
  border: 1px solid
    ${props => {
      const { message, errors } = props;
      const possibleError = {
        messageId: message.id,
        type: 'media',
      };
      const hasError = errors && errors.filter(error => _.isEqual(error, possibleError))
        .length;
      return hasError ? '#ea008f' : 'rgba(58, 57, 86, 0.4)';
    }};
  border-radius: 0.9375rem;
  overflow: hidden;
  height: 8.375rem;
  background: #fff;
  background-size: cover;
  background-repeat: no-repeat;

  &:hover {
    .hover_show {
      display: block;
    }
  }
`;
