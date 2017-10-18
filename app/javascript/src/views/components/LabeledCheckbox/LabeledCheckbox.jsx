import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 0.7rem;
`;

const Checkbox = styled.svg`
  width: 14px;
  height: 14px;
  margin: 0 0.5rem;
  cursor: pointer;

  rect {
    fill: ${props => props.fill};
    width: 14px;
    height: 14px;
  }

  line {
    stroke: #fff;
    stroke-width: 1.5px;
  }
`;

const CheckboxContainer = props => {
  return props.checked
    ? <Checkbox fill={props.fill}>
        <rect />
        <line x1="3" y1="7" x2="5.5" y2="10" />
        <line x1="5.5" y1="10" x2="11" y2="4" />
      </Checkbox>
    : <Checkbox fill={props.fill}>
        <rect />
      </Checkbox>;
};

CheckboxContainer.propTypes = {
  fill: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

const LabeledCheckbox = props => {
  const { textLabel, onClick } = props;
  return (
    <Label htmlFor={textLabel} onClick={onClick}>
      <CheckboxContainer {...props} />
      <text>
        {textLabel}
      </text>
    </Label>
  );
};

LabeledCheckbox.propTypes = {
  textLabel: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default LabeledCheckbox;
