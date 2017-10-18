import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { color } from '../../StyleVariables';

const statuses = {
  draft: {
    background: '#ffb64e',
    translation: 'draft',
  },
  delivered: {
    background: '#8a7dff',
    translation: 'delivered',
  },
  awaiting: {
    background: '#7fe7fb',
    translation: 'awaiting',
  },
};

export const MagazineStatus = injectIntl(styled.span`
  display: inline-block;
  width: 80px;
  font-size: 0.75rem;
  color: ${color.gray_light};

  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 6px;
    margin: 0 .25rem 0 0;
  }

  &::before {
    background: ${props => statuses[props.status].background};
  }

  &::after {
    content: "${props =>
      props.intl.formatMessage({
        id: `chatMagazine.${statuses[props.status].translation}`,
        defaultMessage: ' ',
      })}";
  }
`);
