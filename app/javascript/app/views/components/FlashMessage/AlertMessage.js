import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import Message from './Message';
import Icon, { IconPlaceholder } from './Icon';
import Close from './Close';

class AlertMessage extends Component {
  constructor(props) {
    super(props);

    this._removeItself = this._removeItself.bind(this);
  }
  _removeItself() {
    const { onRemoveAlert, id } = this.props;
    onRemoveAlert(id);
  }

  componentDidMount() {
    const { time } = this.props;

    if (time > 0) {
      setTimeout(() => {
        this._removeItself();
      }, time);
    }
  }

  render() {
    const {
 message, icon, type, time, 
} = this.props;

    return (
      <Alert time={time}>
        <IconPlaceholder>
          {icon || <Icon type={type} />}
        </IconPlaceholder>
        <Message>
          {message}
        </Message>
        <Close onClick={this._removeItself} />
      </Alert>
    );
  }
}

AlertMessage.defaultProps = {
  id: '',
  icon: null,
  message: '',
  type: 'info',
  time: 0,
  onRemoveAlert: () => {},
};

AlertMessage.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.element,
  message: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  type: PropTypes.oneOf(['info', 'success', 'error']),
  time: PropTypes.number,
  onRemoveAlert: PropTypes.func,
};

export default AlertMessage;
