import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
 * content @param String: The icon char code
 * elementType @param String: DOM Node type
 * additionalStyles @param String: Any additional CSS to apply
 */
class ElementWithIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      content,
      elementType = 'div',
      additionalStyles = '',
      additionalIconStyles = '',
    } = this.props;

    const WithIcon = styled(elementType)`
      ${additionalStyles};
      ::before {
        font-family: 'bottree_icons';
        content: '${'\\' + content}';
        ${additionalIconStyles};
      }
    `;

    return <WithIcon {...this.props} />;
  }
}

ElementWithIcon.propTypes = {
  content: PropTypes.string.isRequired,
  elementType: PropTypes.string.isRequired,
  additionalStyles: PropTypes.string,
  additionalIconStyles: PropTypes.string,
};

export default ElementWithIcon;
